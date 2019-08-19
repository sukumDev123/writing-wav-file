import { Router } from "express";
import { addEffect } from "../controllers/effect.controller";

export const effect_router = router => {
  // router.get("/getEffects", getEffects);
  router.get("/addEffect", addEffect);
  return router;
};
