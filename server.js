const express = require('express')


const dotenv = require('dotenv')
const PORT = process.env.PORT || 8000
const YOUR_JWT_SECRET_KEY = process.env.YOUR_JWT_SECRET_KEY;
const mongoose = require('mongoose');
mongoose.set('strictQuery', true);

const routes = require('./routes/routes')

const cors = require('cors')

const cookieParser = require('cookie-parser')
const local = 'http://localhost:4200'
//const firebase = 'https://daakgadi.web.app'

dotenv.config()

const app = express()

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', "http://localhost:4200");
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  next();
});

const allowedOrigins = ['http://localhost:4200'];
const corsOptions = {
  origin: function (origin, callback) {
    if (allowedOrigins.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  }
};
app.use(cors(corsOptions));
app.use(cookieParser())

app.use(express.json())
app.use('/api', routes)

mongoose.connect('mongodb+srv://981mayankchauhan:mayankedification@cluster0.bmkfx8z.mongodb.net/dash?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

  
app.use(express.json());

