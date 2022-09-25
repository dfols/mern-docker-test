const router = require("express").Router();

const { TestObject } = require("../model/testModel");
let testService = require("../service/testService");

router.get("/", async (req, res) => {
    try {
        let response = await testService.getTestObjects();
        res.send(response);
    } catch (err) {
        res.status(500).send(err);
    }
});

router.post("/create", async (req, res) => {
    try {
        const name = req.body.name;
        const age = req.body.age;
        let response = await testService.createTestObject(name, age);
        res.send(response);
    } catch (err) {
        res.status(500).send(err);
    }
});

router.delete("/:id", async (req, res) => {
    try {
        let response = await testService.deleteTestObject(req.params.id);
        res.send(response);
    } catch (err) {
        res.status(500).send(err);
    }
});

router.patch("/:id", async (req, res) => {
    try {
        const name = req.body.name;
        const age = req.body.age;
        const id = req.params.id;
        let response = await testService.updateTestObject(name, age, id);
        res.send(response);
    } catch (err) {
        res.status(500).send(err);
    }
});

module.exports = router;
