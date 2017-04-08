const express = require('express'),
      mongoose = require('mongoose'),
      bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;
//Add db username and password here
const db = mongoose.connect('mongodb://<username>:<password>@ds119020.mlab.com:19020/295db');

const Product = require('./models/productModel');
const User = require('./models/userModel');
const Promotion = require('./models/promotionModel');

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

productRouter = require('./routes/productRoutes')(Product);
userRouter = require('./routes/userRoutes')(User);
promotionRouter = require('./routes/promotionRoutes')(Promotion, Product);

app.use('/api/users', userRouter);
app.use('/api/products', productRouter);
app.use('/api/promotions', promotionRouter);

app.get('/', (req, res) => {
  res.send('welcome');
});

app.listen(port, () => {
  console.log('running on: ' + port);
});
