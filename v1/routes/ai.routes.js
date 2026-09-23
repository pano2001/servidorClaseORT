import express from "express";
import {groq} from "../controllers/ai.controllers.js";

const router = express.Router({mergeParams: true});

router.post("/groq", groq);

export default router;