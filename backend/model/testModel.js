const mongoose = require("mongoose");

const testSchema = new mongoose.Schema(
    {
        name: "string",
        age: "number"
    },
    { timestamps: true }
);

const TestObject = mongoose.model("tests", testSchema);

module.exports = {
    TestObject
};
