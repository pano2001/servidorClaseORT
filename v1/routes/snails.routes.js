import express from "express";
import { getSnails } from "../controllers/snails.controllers.js";
const router = express.Router({ mergeParams: true });

router.get("/", getSnails);


export default router;