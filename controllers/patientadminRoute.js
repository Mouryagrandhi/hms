const express = require("express");
const patientadminSchema = require("../models/patientadminSchema");
const patientadminRoute = new express.Router();


patientadminRoute.post("/create-patientadmin",(req,res)=>{
    patientadminSchema.create(req.body,(err,data)=>{
        if(err)
            return err;
        else
            res.json(data);
    })
});

patientadminRoute.get("/",(req,res)=>{
    patientadminSchema.find((err,data)=>{
        if(err)
            return err;
        else
            res.json(data);
    })
})
patientadminRoute.route("/update-patientadmin/:id")
.get((req,res)=>{
    patientadminSchema.findById(req.params.id,(err,data)=>{
        if(err)
            return err;
        else
            res.json(data);
    })
})
.put((req,res)=>{
    patientadminSchema.findByIdAndUpdate(req.params.id,{$set:req.body},
        (err,data)=>{
            if(err)
                return err;
            else
                res.json(data);
        })
});


patientadminRoute.delete("/delete-patientadmin/:id",(req,res)=>{
    patientadminSchema.findByIdAndRemove(req.params.id,(err,data)=>{
        if(err)
            return err;
        else
            res.json(data);
    })
});

module.exports = patientadminRoute;
