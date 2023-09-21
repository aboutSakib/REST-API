const express = require("express");
const router = express.Router();

const apiControllers = require("../controllers/api");

router.get("/user", apiControllers.getUser);
router.post("/postuser", apiControllers.postUser);
module.exports = router;
