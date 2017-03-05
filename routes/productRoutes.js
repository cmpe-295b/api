const express = require('express');


const productRoutes = function(Product){
    const router = express.Router();

    router.route('/')
      .get((req,res) => {
          // const query = {};
          // if(req.query.title)
          // {
          //     query.title = req.query.title;
          // }
          Product.find((err,products) => {
              if(err)
                  res.status(500).send(err);
              else
                  res.json(products);
          });
      });

    router.route('/:id')
      .get((req,res) => {
          Product.findById(req.params.id, (err,product) => {
              if(err)
                  res.status(500).send(err);
              else
                  res.json(product);
          });
    });

    return router;
};

module.exports = productRoutes;
