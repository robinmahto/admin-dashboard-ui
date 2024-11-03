import { api } from "./client";
import { Credential } from "../types";

export const login = (credentials: Credential) => api.post('/auth/login', credentials);