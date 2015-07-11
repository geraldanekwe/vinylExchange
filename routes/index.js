var routes = function(passport) {

  var express = require('express');
  var router = express.Router();
  var mongoose = require('mongoose');
  var User = require('../app/models/user');

  /* GET home page. */
  router.get('/', function(req, res, next) {
    res.render('index', {
      title: 'Vinyl Exchange'
    });
  });

  router.post('/login',
    passport.authenticate('local', {
      failureRedirect: '/'
    }),
    function(req, res) {
      res.json(req);
    });

  router.post('/signup',
    function(req, res) {
      var user = new User(req.body);
      user.user.email = req.body.email;
      user.user.username = req.body.username;
      user.user.password = req.body.password;
      console.log('req.body: ', user);
      user.save(function(err, savedUser) {
        if (err) {
          console.log(err);
          res.status(400).json({
            error: "Validation Failed"
          });
        }
        console.log("savedUser:", savedUser);
        res.json(savedUser);
      });
    });

  return router;
}

module.exports = routes;
