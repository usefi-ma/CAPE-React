import express from "express";
import ContactbookController from "../controllers/contactbook.js";
const router = express.Router();

router.get("/contactbook", ContactbookController.GetAll);
router.get("/contactbook/:Id", ContactbookController.Get);
router.post("/contactbook", ContactbookController.Add);
router.put("/contactbook/:Id", ContactbookController.Update);
router.delete("/contactbook/:Id", ContactbookController.Delete);
router.get("/contactbookCount", ContactbookController.countConference);

export default router;