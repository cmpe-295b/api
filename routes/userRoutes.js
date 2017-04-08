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

    router.use('/:id', (req, res, next) => {
      User.findById(req.params.id, (err,user) => {
            if(err)
                res.status(500).send(err);
            else if(user){
                req.user = user;
                next();
            }
            else
                res.status(404).send('No user found');
      });
    })
    router.route('/:id')
      .get((req,res) => {
          res.json(req.user);
      })
      .patch((req,res) => {
          if(req.body._id)
            delete req.body_id;

          for(let p in req.body){
            req.user[p] = req.body[p];
          }

          req.user.save((err) => {
            if(err)
                res.status(500).send(err);
            else
                res.json(req.user);
          });
      })
      .delete((req, res) => {
          req.user.remove((err) => {
            if(err)
                res.status(500).send(err);
            else
                res.status(204).send('Removed');
          });
      });

    return router;
};

module.exports = userRoutes;
