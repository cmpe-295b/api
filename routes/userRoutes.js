const express = require('express');


const userRoutes = function(User){
    const router = express.Router();

    router.route('/')
      //Create a user
      .post((req, res) => {
        const user = new User(req.body);
        console.log(user);
        user.save();
        res.status(201).send(user); //201 created
      })

    router.route('/:id')
      .get((req,res) => {
          User.findById(req.params.id, (err,user) => {
              if(err)
                  res.status(500).send(err);
              else
                  res.json(user);
        });
    });

    return router;
};

module.exports = userRoutes;
