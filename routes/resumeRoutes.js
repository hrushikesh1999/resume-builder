const express = require("express");
const { ObjectId } = require("mongodb");
const mongoUtil = require("../utils/mongoUtil");
var db = mongoUtil.getDB();

const router = express.Router();
// `/api/resumes/`
router.get("/:userId", async (req, res) => {
  const id = ObjectId(req.params.userId);
  try {
    const response = await db.collection("resumes").findOne({ _id: id });
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ success: false });
  }
});

router.post("/", async (req, res) => {
  const resume = req.body;
  try {
    const response = await db.collection("resumes").insertOne(resume);
    if (response.acknowledged) {
      try {
        const resume = await db
          .collection("resumes")
          .findOne({ _id: response.insertedId });
        res.status(200).json(resume);
      } catch (error) {
        res.status(400).json({ success: false });
      }
    } else {
      res.status(400).json({ success: false });
    }
  } catch (error) {
    res.status(400).json({ success: false });
  }
});

module.exports = router;
