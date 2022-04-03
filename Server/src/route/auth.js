const express = require("express");
const router = express.Router();

require('../db/database');
const User = require('../models/userSchema');

router.get("/", (req, res) => {
  res.send(`Hello Proffessor LOGAN ,router`);
});

router.post("/register", (req, res) => {
  const { name, email, phone, work, password, cpassword } = req.body;

  if (!name || !email || !phone || !work || !password || !cpassword) {
    return res.status(422).json({ error: "pLz fill properly" });
  }

  User.findOne({ email:email })
  .then((userExists) => {
            if(userExists){
    return res.status(422).json({ error: "Email already Exists" });
  }

  const user = new User({name, email, phone, work, password, cpassword});
 
  user.save().then( () => {
    res.status(201).json({ message: "Successfully register" });
  }).catch( (err) => res.status(500).json({ error: "failed to register" }));

  }).catch( (err) => { console.log(err); });

});

module.exports = router;
