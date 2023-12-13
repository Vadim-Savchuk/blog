import { Router } from "express"; 

import { getMe, login, register } from "../controllers/auth.js";
import { checkAuth }              from "../utils/checkAuth.js";

const router = new Router();

// Register
// http://localhost:????/api/auth/register
router.post('/register', register);

// Login
// http://localhost:????/api/auth/login
router.post('/login', login);

// Get me
// http://localhost:????/api/auth/me
router.get('/me', checkAuth, getMe);

export default router;