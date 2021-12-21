require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const fileUpload = require("express-fileupload");
const cookieParse = require("cookie-parser");
//rou
const app = express();

app.use(express.json());

app.use(cookieParse());
app.use(cors());
app.use(
  fileUpload({
    useTempFiles: true,
  })
);
const userRouter = require("./routes/userRouter");
const categoryRouter = require("./routes/categoryRouter");
// connect mongoose;
const URI =
  "mongodb+srv://chuduc41:duc241@cluster0.fvgbd.mongodb.net/ecommerce?retryWrites=true&w=majority";
mongoose.connect(
  URI,
  //   {
  //     useCreateIndex: true,
  //     useFindAndModify: false,
  //     useNewUrlParser: true,
  //     useUnifiedTopology: true,
  //   },
  (err) => {
    if (err) throw err;
    console.log("Connected to MongoDB");
  }
);

//Routes
app.use("/user", userRouter);
app.use("/api", categoryRouter);
app.use("/api", require("./routes/upload"));
app.use("/api", require("./routes/productRouter"));
app.get("/", (req, res) => {
  res.json({ msg: "helloc" });
});
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
  });
}

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log("server runing on port", PORT);
});
