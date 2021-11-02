const express = require("express");
const router = express.Router();
const Tag = require("../models/tag");

router.get("/", async (req, res) => {

    let all_tag = await Tag.find();

    all_tag =  all_tag.map((item) => {
        return item.name;
    })

    res.status(200).json(
        {
            status: 200,
            tags: all_tag
        }
    )
})

module.exports = router;