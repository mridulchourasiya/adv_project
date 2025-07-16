import { Router } from "express";
import authorize from "../middleware/auth.middleware.js";
import {
  cancelSubscriptionById,
  createSubscription,
  deleteSubscriptionById,
  getAllSubscriptions,
  getSubscriptionById,
  getUpcomingRenewals,
  getUserSubscriptions,
  updateSubscriptionById,
} from "../controllers/subscription.controller.js";
const subscriptionRouter = Router();

subscriptionRouter.get("/", authorize, getAllSubscriptions);

subscriptionRouter.get("/:id", authorize, getSubscriptionById);

subscriptionRouter.post("/", authorize, createSubscription);

subscriptionRouter.put("/:id", authorize, updateSubscriptionById);

subscriptionRouter.delete("/:id", authorize, deleteSubscriptionById);

subscriptionRouter.get("/user/:id", authorize, getUserSubscriptions);

subscriptionRouter.put("/:id/cancel", authorize, cancelSubscriptionById);

subscriptionRouter.get("/upcoming-renewals", authorize, getUpcomingRenewals);

export default subscriptionRouter;
