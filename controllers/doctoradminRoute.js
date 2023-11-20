const express = require("express");
const doctoradminSchema = require("../models/doctoradminSchema");
const doctoradminRoute = new express.Router();

doctoradminRoute.post("/create-doctoradmin",(req,res)=>{
    doctoradminSchema.create(req.body,(err,data)=>{
        if(err)
            return err;
        else
            res.json(data);
    })
});

doctoradminRoute.get("/",(req,res)=>{
    doctoradminSchema.find((err,data)=>{
        if(err)
            return err;
        else
            res.json(data);
    })
})

doctoradminRoute.route("/update-doctoradmin/:id")
.get((req,res)=>{
    doctoradminSchema.findById(req.params.id,(err,data)=>{
        if(err)
            return err;
        else
            res.json(data);
    })
})
.put((req,res)=>{
    doctoradminSchema.findByIdAndUpdate(req.params.id,{$set:req.body},
        (err,data)=>{
            if(err)
                return err;
            else
                res.json(data);
        })
});

doctoradminRoute.delete("/delete-doctoradmin/:id",(req,res)=>{
    doctoradminSchema.findByIdAndRemove(req.params.id,(err,data)=>{
        if(err)
            return err;
        else
            res.json(data);
    })
});


module.exports = doctoradminRoute;