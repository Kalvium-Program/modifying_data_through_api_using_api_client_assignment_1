const express = require('express');
const { resolve } = require('path');
const mongoose = require('mongoose');
const env = require('dotenv');
const connectDB = require('./db.js');

const bodyParser = require('body-parser');
const menuItem = require('./db.js');
const { connect } = require('http2');

const app = express();
const port = 3010;

app.use(express.static('static'));

app.get('/', (req, res) => {
  res.sendFile(resolve(__dirname, 'pages/index.html'));
});





mongoose.connect('mongodb+srv://vijaykumarvk3105:vijay@cluster0.rdgr3.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('Connected to MongoDB');
})
.catch((err) => {
  console.log('Error:', err);
});

app.post ('/menu', async (req, res) => {
  try {
    const { name, price, category } = req.body;
    if (!name || !price) {
      return res.status(400).json({
        success: false,
        message: 'Name and Price are required',
      });
    
  
  }
  const newMenuItem = new menuItem({
    name,
    price,
    description,
  });
  res.status(201).json({
    success: true,
    data: newMenuItem,
    message: 'Menu Itme created successfully',

  });
} catch(error) {
  res.status(500).json({
    success: false,
    message: 'Error while creating menu item',
    error: error.message,
  });
}
});

app.get('/menu', async (req, res) => {
  try {
    const menuItems = await menuItem.find();
    res.status(200).json({
      success: true,
      data: menuItems,
      message: 'Menu Items fetched successfully',
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error while fetching menu items',
      error: error.message,
    });
  }
});
  



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
