const express = require("express");
const patientSchema = require("../models/patientSchema");
const patientRoute = new express.Router();


patientRoute.post("/create-patient",(req,res)=>{
    patientSchema.create(req.body,(err,data)=>{
        if(err)
            return err;
        else
            res.json(data);
    })
});

patientRoute.get("/",(req,res)=>{
    patientSchema.find((err,data)=>{
        if(err)
            return err;
        else
            res.json(data);
    })
})
patientRoute.route("/update-patient/:id")
.get((req,res)=>{
    patientSchema.findById(req.params.id,(err,data)=>{
        if(err)
            return err;
        else
            res.json(data);
    })
})
.put((req,res)=>{
    patientSchema.findByIdAndUpdate(req.params.id,{$set:req.body},
        (err,data)=>{
            if(err)
                return err;
            else
                res.json(data);
        })
});


patientRoute.delete("/delete-patient/:id",(req,res)=>{
    patientSchema.findByIdAndRemove(req.params.id,(err,data)=>{
        if(err)
            return err;
        else
            res.json(data);
    })
});

module.exports = patientRoute;
