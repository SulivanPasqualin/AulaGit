const express = require("express")

const routes = express.Router()

lista = [{"id":1,"nome":"João","idade":6},
        {"id":2,"nome":"Miguel","idade":6},
        {"id":3,"nome":"Suelen","idade":21},
        {"id":4,"nome":"Aline","idade":21},
        {"id":5,"nome":"Sulivan","idade":27}]

routes.get("/",(req,res)=>{
    res.status(200).json(lista)
})

module.exports = routes