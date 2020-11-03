const { response } = require("express");
const express = require("express");
const assignment = require("./models/assignment");

const router = express.Router();

module.exports = function () {
    router.get('/:value', async (req, res) => {
        const { value } = req.params;
        console.log(value);
        return res.send(value);
    });
    //put your get,post,del,update code here
    return router;
}