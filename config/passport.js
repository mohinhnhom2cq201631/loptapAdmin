const LocalStrategy = require('passport-local').Strategy;
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const Admin = require('../models/admins');


module.exports = function(passport) {
  passport.use(
    new LocalStrategy({ usernameField: 'email', passwordField: 'password'}, (email, password, done) => {
      // Match user
      Admin.findOne({
        username: email
      }).then(admin => {
        if (!admin) {
          return done(null, false);
        }
        // Match password
        bcrypt.compare(password, admin.password, (err, isMatch) => {
          if (err) throw err;
          if (isMatch) {
            return done(null, admin);
          } else {
            return done(null, false);
          }
        });
      });
    })
  );

  passport.serializeUser(function(admin, done) {
    done(null, admin.id);
  });

  passport.deserializeUser(function(id, done) {
    Admin.findById({_id:id}, function(err, admin) {
      done(err, admin);
    });
  });
};