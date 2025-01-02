const express = require("express");
const router = express.Router()
const Users = require("../models/user")


router.post('/api/user', async (req, res) => {
    const { username, email, phone, age } = req.body
    try {
        const newUser = new Users({ username, email, phone, age })
        await newUser.save()
        res.status(201).json(newUser)
    }
    catch (err) {
        console.log(err);
        res.status(400).json("error", err.message);
    }
})
router.get("/api/get-users", async (req, res) => {
    try {
        const users = await Users.find();
        res.json(users);
    } catch (error) {
        console.log(error);
        res.status(500).send("Server error in getting all items");
    }
});

module.exports = router;