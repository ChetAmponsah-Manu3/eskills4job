import axios from 'axios';

const API_URL = 'http://localhost:3000'; // Replace with your backend URL

export const createStudent = async (data) => axios.post(`${API_URL}/students`, data);

export const getStudents = async () => axios.get(`${API_URL}/students`);

export const updateStudent = async (id, data) => axios.put(`${API_URL}/students/${id}`, data);

export const deleteStudent = async (id) => axios.delete(`${API_URL}/students/${id}`);

// Add similar functions for teachers, finance, etc.
