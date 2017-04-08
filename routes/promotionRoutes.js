const express = require('express');

const shuffle = function(a) {
    for (let i = a.length; i; i--) {
        let j = Math.floor(Math.random() * i);
        [a[i - 1], a[j]] = [a[j], a[i - 1]];
    }
}

//TODO: Get real promotions when the component is ready. For now it returns random promotions.
const getPromotions = function(Product, res){
  Product.find((err,products) => {
      if(err)
        res.status(500).send(err);
      else{
        shuffle(products);
        for(let i=0; i<products.length; i++){
          products[i].discount = (Math.random() * (0.1 - 0.2) + 0.2).toFixed(2);
          products[i].newPrice = products[i].price - products[i].price*products[i].discount;
        }
        res.json(products.slice(0,2));
      }

  });
}

const promotionRoutes = function(Promotion, Product){
    const router = express.Router();

    router.route('/:userid')
      .get((req,res) => {
          //res.json({'test'});
          getPromotions(Product, res);
      });

    return router;
};

module.exports = promotionRoutes;
