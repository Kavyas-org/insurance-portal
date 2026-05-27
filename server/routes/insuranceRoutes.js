const express = require("express");
const router = express.Router();
const multer = require("multer");
const Insurance = require("../models/Insurance");
const { protect } = require("./adminRoutes");

/* =========================
   MULTER CONFIG
========================= */
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    if (file.mimetype === "application/pdf") {
      cb(null, "uploads/pdfs/");
    } else {
      cb(null, "uploads/images/");
    }
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  }
});

const fileFilter = (req, file, cb) => {
  if (
    file.mimetype === "application/pdf" ||
    file.mimetype.startsWith("image/")
  ) {
    cb(null, true);
  } else {
    cb(new Error("Only PDF and image files allowed"), false);
  }
};

const upload = multer({ storage, fileFilter });

/* =========================
   ADD INSURANCE (PDF + IMAGE + TRACKING)
========================= */
router.post(
  "/",
  protect,
  upload.fields([
    { name: "document", maxCount: 1 },
    { name: "image", maxCount: 1 }
  ]),
  async (req, res) => {
    try {
      const {
        name,
        policyNumber,
        dob,
        insuranceType,
        premiumAmount,
        status
      } = req.body;

      // ✅ VALIDATION
      if (!name || !policyNumber || !dob || !insuranceType || !premiumAmount) {
        return res.status(400).json({ message: "All fields are required" });
      }

      if (!req.files || !req.files.document) {
        return res.status(400).json({ message: "PDF document is required" });
      }

      // ✅ AUTO REF ID
      const refId = "INS" + Date.now();

      // ✅ DUPLICATE CHECK (extra safety)
      const exists = await Insurance.findOne({ refId });
      if (exists) {
        return res.status(400).json({ message: "Reference ID already exists" });
      }

      const insurance = new Insurance({
        name,
        refId,
        policyNumber,
        dob,
        insuranceType,
        premiumAmount,

        status: status || "Pending",

        // ✅ tracking (updated for insurance)
        tracking: [
          { title: "Policy Submitted", status: "Pending" },
          { title: "Under Review", status: "Pending" },
          { title: "Policy Approved", status: "Pending" }
        ],

        document: req.files.document[0].path,
        image: req.files.image ? req.files.image[0].path : ""
      });

      await insurance.save();
      res.json(insurance);

    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
);

/* =========================
   GET ALL INSURANCE (ADMIN)
========================= */
router.get("/", protect, async (req, res) => {
  try {
    const {
      page = 1,
      limit = 10,
      search = "",
      status
    } = req.query;

    const query = {};

    /* =========================
       SEARCH (name + refId)
    ========================= */
    if (search) {
      query.$or = [
        { name: { $regex: search, $options: "i" } },
        { refId: { $regex: search, $options: "i" } }
      ];
    }

    /* =========================
       FILTER (status)
    ========================= */
    if (status) {
      query.status = status;
    }

    const skip = (page - 1) * limit;

    const data = await Insurance.find(query)
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(Number(limit));

    const total = await Insurance.countDocuments(query);

    res.json({
      total,
      page: Number(page),
      totalPages: Math.ceil(total / limit),
      data
    });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

/* =========================
   GET BY ID (ADMIN)
========================= */
router.get("/id/:id", protect, async (req, res) => {
  try {
    const data = await Insurance.findById(req.params.id);

    if (!data) {
      return res.status(404).json({ message: "Record not found" });
    }

    res.json(data);

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

/* =========================
   GET BY REF ID (PUBLIC)
========================= */
router.get("/:refId", async (req, res) => {
  try {
    const data = await Insurance.findOne({ refId: req.params.refId });

    if (!data) {
      return res.status(404).json({ message: "Record not found" });
    }

    res.json(data);

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

/* =========================
   UPDATE INSURANCE
========================= */
router.put("/:id", protect, async (req, res) => {
  try {
    const { status, tracking, ...rest } = req.body;

    const insurance = await Insurance.findById(req.params.id);

    if (!insurance) {
      return res.status(404).json({ message: "Record not found" });
    }

    /* =========================
       UPDATE BASIC FIELDS
    ========================= */
    Object.assign(insurance, rest);

    /* =========================
       UPDATE STATUS
    ========================= */
    if (status) {
      const validStatus = ["Pending", "Approved", "Rejected"];

      if (!validStatus.includes(status)) {
        return res.status(400).json({ message: "Invalid status" });
      }

      insurance.status = status;
    }

    /* =========================
       UPDATE TRACKING
    ========================= */
    if (tracking && Array.isArray(tracking)) {
      insurance.tracking = tracking;
    }

    await insurance.save();

    res.json(insurance);

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

/* =========================
   DELETE INSURANCE
========================= */
router.delete("/:id", protect, async (req, res) => {
  try {
    const data = await Insurance.findByIdAndDelete(req.params.id);

    if (!data) {
      return res.status(404).json({ message: "Record not found" });
    }

    res.json({ message: "Deleted successfully" });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;