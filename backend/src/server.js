const express = require("express");
const cors = require("cors");
const userRouter = require("./routes/userRoute");
const app = express();
const dotenv = require("dotenv");
const { connectDB } = require("./config/connectDB");

dotenv.config();
app.use(cors({
    origin: "*"
}));
app.use(express.json());

// Connect to mongDB
connectDB();

app.use("/api/v1/users", userRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=>  {
    console.log(`Server listening to ${PORT}`);
});


