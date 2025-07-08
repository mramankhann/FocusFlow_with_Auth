const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');
require('dotenv').config();
const authRoutes = require("./routes/authRoutes")
const todoRoutes = require("./routes/todoRoutes");

const app = express();

app.use(cors())
app.use(express.json());

app.use("/api/auth", authRoutes)
app.use("/api/todos", todoRoutes);  

connectDB();

app.get('/', (req, res) => {
    res.send('API is running...');
});

app.listen(process.env.PORT || 5000,()=>{
    console.log(`Server is running on port ${process.env.PORT || 5000}`);
})