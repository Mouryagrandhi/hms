const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');
const appointmentRoute = require("./controllers/appointmentRoute");
const patientRoute = require("./controllers/patientRoute");
const doctorRoute = require("./controllers/doctorRoute");
const patientadminRoute = require("./controllers/patientadminRoute");
const doctoradminRoute = require("./controllers/doctoradminRoute");

const app = express();
const PORT = process.env.PORT || 8000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb+srv://test:12345@cluster0.v7jlqnt.mongodb.net/data');
const connection = mongoose.connection;

connection.once('open', () => {
  console.log('MongoDB database connection established successfully');
});

// Routes
app.use('/', authRoutes);
app.use("/appointmentRoute", appointmentRoute);
app.use("/patientRoute",patientRoute);
app.use("/doctorRoute",doctorRoute);
app.use("/patientadminRoute",patientadminRoute);
app.use("/doctoradminRoute",doctoradminRoute);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
