import { Router } from "express";
import { protectRoute } from "../middleware/auth.middleware.js";
import { createPaymentIntent, handlewebhook } from "../controllers/payment.controller.js";

const router = Router();

router.post("/create-intent", protectRoute, createPaymentIntent)

// No auth needed - Stripe validates via signature
router.post("/webhook", handlewebhook)

export default router;
