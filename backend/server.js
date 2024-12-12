const express = require('express');               //importing of all the necessary modules
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const cors = require('cors');
const bodyParser = require('body-parser');

dotenv.config();
const app = express();                           
connectDB();

app.use(cors());
app.use(express.json());

app.use('/api/auth', require('./routes/auth'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});