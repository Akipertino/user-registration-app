const express = require("express");
const { create, list } = require("../controllers/userController");
const router = express.Router();

router.post("/", create);
router.get("/", list);

module.exports = router;