var express = require('express');
var passport = require('passport'),
  LocalStrategy = require('passport-local').Strategy;
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'Express'
  });
});

// router.post('/login',
    //   passport.authenticate('local'),
    //   function(req, res) {
    //     // If this function gets called, authentication was successful.
    //     // `req.user` contains the authenticated user.
    //     res.redirect('/users/' + req.user.username);
    //   });


module.exports = router;