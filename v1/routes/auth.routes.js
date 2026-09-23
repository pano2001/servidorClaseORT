import express from "express";
import {login} from "../controllers/auth.controllers.js";
import {register} from "../controllers/auth.controllers.js";

const router = express.Router({mergeParams:true});

router.post("/login", login);
router.post("/register", register);

export default router;