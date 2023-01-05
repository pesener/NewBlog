import axios from "axios";
import React from "react";

const HTTP = axios.create({
  baseURL: "http://localhost:5000",
});

export const login = async (formData) => HTTP.post("/home/signin", formData);