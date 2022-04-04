const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");

require("../db/database");
const User = require("../models/userSchema");

router.get("/", (req, res) => {
  res.send(`Hello Proffessor LOGAN ,router`);
});

router.post("/register", async (req, res) => {
  const { name, email, phone, work, password, cpassword } = req.body;

  if (!name || !email || !phone || !work || !password || !cpassword) {
    return res.status(422).json({ error: "pLz fill properly" });
  }
  try {
    const userExists = await User.findOne({ email: email });

    if (userExists) {
      return res.status(422).json({ error: "Email already exists" });
    } else if (password != cpassword) {
      return res.status(422).json({ error: "Password not matching" });
    } else {
      const user = new User({ name, email, phone, work, password, cpassword });
      const userRegister = await user.save();
      res.status(201).json({ message: "user registered successfully" });
    }
  } catch (err) {
    console.log(err);
  }
});

// Login route
router.post("/signin", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: "PLZ filled the data " });
    }
    const userLogin = await User.findOne({ email: email });

    if (userLogin) {
      const isMatch = await bcrypt.compare(password, userLogin.password);

      if (!isMatch) {
        res.status(400).json({ error: "invalid credentials" });
      } else {
        res.json({ message: "user signin successfully" });
      }
    } else {
      res.status(400).json({ error: "invalid credentials" });
    }
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
