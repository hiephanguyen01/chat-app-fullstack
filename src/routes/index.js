const express = require("express");
const { router: contactRoute } = require("./contact");
const router = express.Router();

// router.use("/students",studentRouter);
router.use("/contact", contactRoute);

module.exports = router;
