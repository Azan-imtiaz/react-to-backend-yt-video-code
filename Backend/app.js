require("./conn/conn");
const ReactForm = require("./Models/schema");
const express = require("express");
const app = new express();
const cors = require("cors");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//fetch data from database
app.get("/getData", async (req, res) => {
  try {
    const data = await ReactForm.find();

    if (!data) {
      res.status(500).json("No data currently stored");
    } else {
      const dataArray = data.map((value) => ({
        name: value.name,
        AridNo: value.AridNo,
        Section: value.Section,
        Marks: value.Marks,
      }));

      res.status(200).json(dataArray);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

//Add data to database
app.post("/submit", async (req, res) => {
  try {
    const arid = await ReactForm.findOne({ AridNo: req.body.aridNo });

    if (arid) {
      console.log(arid);
      throw new Error("Roll no already exist");
    } else {
      const formData = req.body;
      console.log(formData);

      const add = new ReactForm({
        name: req.body.name,
        AridNo: req.body.aridNo,
        Section: req.body.section,
        Marks: req.body.marks,
      });
      const adddata = await add.save();
      if (!adddata) {
        console.log("not added");
        res.status(500).json({ message: "Data not added" });
      } else {
        console.log("added");
        res.status(201).json({ message: "Form data saved successfully" });
      }
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error });
  }
});

//delete single record
app.post("/deleteUser", async (req, res) => {
  try {
    const deletedUser = await ReactForm.findOneAndDelete({
      AridNo: req.body.aridNo,
    });

    if (!deletedUser) {
      throw new Error("No user found with this AridNo");
    } else {
      res.status(200).json("Record deleted successfully");
    }
  } catch (err) {
    res.status(400).json(err);
  }
});

//delete all records

app.post("/deleteAllUsers", async (req, res) => {
  try {
    console.log("enter");
    const userCount = await ReactForm.countDocuments({});
    console.log(userCount);
    if (userCount === 0) {
      return res.status(200).json({ message: "No users found" });
    }

    await ReactForm.deleteMany({});

    res.status(200).json({ message: "All users removed successfully" });
  } catch (error) {
    res.status(500).json("Internal server error");
  }
});

app.listen(5000, () => {
  console.log("server started");
});
