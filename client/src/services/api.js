import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

// ✅ attach token automatically
API.interceptors.request.use((req) => {
  const token = localStorage.getItem("token");

  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }

  return req;
});

/* =========================
   INSURANCE APIs
========================= */

// GET ALL (with pagination, search, filter)
export const getInsurance = (params) =>
  API.get("/api/insurance", { params });

// GET BY REF ID (public)
export const getInsuranceByRefId = (refId) =>
  API.get(`/api/insurance/${refId}`);

// GET BY ID (ADMIN)
export const getInsuranceById = (id) =>
  API.get(`/api/insurance/id/${id}`);

// ADD INSURANCE
export const addInsurance = (data) =>
  API.post("/api/insurance", data, {
    headers: {
      "Content-Type": "multipart/form-data"
    }
  });

// UPDATE INSURANCE
export const updateInsurance = (id, data) =>
  API.put(`/api/insurance/${id}`, data);

// DELETE INSURANCE
export const deleteInsurance = (id) =>
  API.delete(`/api/insurance/${id}`);



export default API;