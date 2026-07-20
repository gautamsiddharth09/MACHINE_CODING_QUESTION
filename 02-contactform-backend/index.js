const express = require("express");

const mongoose = require("mongoose");

const Form = require("./formSchema/formSchema");

const cors = require("cors");

const app = express();

app.use(cors())
app.use(express.json());

// const dbConnected = async () => {
//   try {
//     await mongoose.connect(
//       "mongodb+srv://gautam:gautam@cluster0.szpnmgb.mongodb.net/practice",
//     );
//     console.log("✅ Database Connected");
//   } catch (err) {
//     console.log("❌ Database Connection Failed:", err.message);
//   }
// };

// dbConnected();

app.post("/createForm", async (req, res) => {
  try {
    console.log(req.body);

    const user = await Form.create(req.body);

    res
      .status(201)
      .json({
        success: true,
        message: "form created successfully",
        user: user,
      });
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ success: false, message: "server error occuring" });
  }
});

app.get("/getForm", async (req, res) => {
  try {
    const userForm = await Form.find();

    res
      .status(200)
      .json({
        success: true,
        message: "get form successfully",
        userForm: userForm,
      });
  } catch (err) {
    res.status(500).json({ success: false, message: "server error" });
  }
});

app.listen(8000, () => {
  console.log("server is connected on 8000");
});
