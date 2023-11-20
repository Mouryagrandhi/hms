const express = require("express");
const doctorSchema = require("../models/doctorSchema");
const doctorRoute = new express.Router();

doctorRoute.post("/create-doctor",(req,res)=>{
    doctorSchema.create(req.body,(err,data)=>{
        if(err)
            return err;
        else
            res.json(data);
    })
});

doctorRoute.get("/",(req,res)=>{
    doctorSchema.find((err,data)=>{
        if(err)
            return err;
        else
            res.json(data);
    })
})

module.exports = doctorRoute;