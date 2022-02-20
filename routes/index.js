var express = require('express');
var router = express.Router();
const mongooseDB = require("../services/db_connection")
const { v4: uuidv4 } = require('uuid');
const urlSchema = require("../models/url")
const client = require("../services/cache")


router.post("/url", async(req, res) => {
  if (!req.body.originalUrl){
    res.status(400).send("Missing Parameter");
    return;
  }

  let id = uuidv4();
  
  const ourFirstURL = new urlSchema({ id: id, longURL: req.body.originalUrl});
  await ourFirstURL.save();

  const response = {
    uuid: id
  }

  res.status(200).send(response)
})

router.get("/url/:id", async(req, res) => {
  const id = req.params.id
  if(!id){
    res.status(400).send("Missing ID");
    return;
  }

  const cacheURL = await client.get(id);
  if(cacheURL) {
    console.log("Cache called")
    res.redirect(cacheURL);
    return;
  }
  
  let queryResponse = await urlSchema.findOne({id: id}).all().exec();

  console.log(queryResponse)


  if(!queryResponse){
    res.status(400).send("Bitch not found");
    return;
  }

  //add into cache
  await client.set(id, queryResponse.longURL);
  console.log("Cache set")

  res.redirect(queryResponse.longURL);
})


module.exports = router;
