import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000/api/v1";

axios.defaults.withCredentials = false;

export const company = {
  getAll: () => axios.get(`${API_URL}/companies`).then((res) => res.data),

  getOne: (id) =>
    axios.get(`${API_URL}/companies/${id}`).then((res) => res.data),
};

export const formation = {
  getAll: () => axios.get(`${API_URL}/formations`).then((res) => res.data),

  getOne: (id) =>
    axios.get(`${API_URL}/formations/${id}`).then((res) => res.data),
};

export const job = {
  getAll: () => axios.get(`${API_URL}/jobs`).then((res) => res.data),

  getOne: (id) => axios.get(`${API_URL}/jobs/${id}`).then((res) => res.data),
};

export const picture = {
  getAll: () => axios.get(`${API_URL}/pictures`).then((res) => res.data),

  getOne: (id) =>
    axios.get(`${API_URL}/pictures/${id}`).then((res) => res.data),
};

export const project = {
  getAll: () => axios.get(`${API_URL}/projects`).then((res) => res.data),

  getOne: (id) =>
    axios.get(`${API_URL}/projects/${id}`).then((res) => res.data),
  getStacks: (id) =>
    axios.get(`${API_URL}/projects/${id}/stacks`).then((res) => res.data),
};

export const stack = {
  getAll: () => axios.get(`${API_URL}/stacks`).then((res) => res.data),

  getOne: (id) => axios.get(`${API_URL}/stacks/${id}`).then((res) => res.data),
};
