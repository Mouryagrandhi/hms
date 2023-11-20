const express = require("express");
const appointmentSchema = require("../models/appointmentSchema");
const appointmentRoute = new express.Router();

appointmentRoute.post("/create-appointment", (req, res) => {
    appointmentSchema.create(req.body, (err, data) => {
        if (err)
            return err;
        else
            res.json(data);
    })
});

appointmentRoute.get("/", (req, res) => {
    appointmentSchema.find((err, data) => {
        if (err)
            return err;
        else
            res.json(data);
    })
})

module.exports = appointmentRoute;