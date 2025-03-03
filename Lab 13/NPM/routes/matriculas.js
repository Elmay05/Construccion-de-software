const express = require("express");

const router = express.Router();
const matricula = require("../controllers/matriculas.controllers");
router.get("/A01712114", matricula.get_omar);

router.get("/A01706119", matricula.get_sebas);
router.get("/importante", matricula.get_importante);
module.exports = router;
