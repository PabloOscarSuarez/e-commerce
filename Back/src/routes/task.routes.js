const router = require("express").Router();

router.get("/", (req, res) => res.json("hola broh entre sin dramas"));

module.exports = router;
