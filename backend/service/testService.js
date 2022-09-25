const { connect, disconnect } = require("../config/mongoConfig");

const { TestObject } = require("../model/testModel");

class TestService {
    constructor() {
        connect();
    }

    async getTestObjects() {
        // passing {} to .find() specifies to return all documents
        // in the collection
        const testObjects = await TestObject.find({});
        console.log("testObjects: ", testObjects);
        return testObjects;
    }

    async createTestObject(name, age) {
        const newTestObject = new TestObject({
            name: name,
            age: age
        });

        try {
            let createdTestObject = await TestObject.create(newTestObject);
        } catch (err) {
            console.log("ERROR: " + err);
        }
        return createdTestObject;
    }

    async updateTestObject(name, age, id) {
        let data = {};
        try {
            const newTestObject = {
                name: name,
                age: age
            };
            const filter = { _id: id };
            data = await TestObject.findByIdAndUpdate(filter, newTestObject);
        } catch (err) {
            console.log("ERROR: " + err);
        }
        return data;
    }

    async deleteTestObject(id) {
        let data = {};
        try {
            data = await TestObject.deleteOne({ _id: id });
            console.log("Deleted: " + id);
        } catch (err) {
            console.log("ERROR: " + err);
        }
        return data;
    }
}

module.exports = new TestService();
