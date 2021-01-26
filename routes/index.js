const { Router } = require('express');
const router = Router();
const bcryptjs = require('bcryptjs');

const User = require('./../models/user');

router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/sign-up', (req, res, next) => {
  res.render('sign-up');
});

router.post('/sign-up', (req, res, next) => {
  const data = req.body;
  console.log('testing');
  User.findOne({
    userName: data.userName
  })
    .then((user) => {
      if (user) {
        throw new Error('There is already a user with this name');
      } else {
        return bcryptjs.hash(data.password, 10);
      }
    })
    .then((passwordHashAndSalt) => {
      return User.create({
        userName: data.userName,
        passwordHashAndSalt: passwordHashAndSalt
      });
    })
    .catch((error) => {
      next(error);
    });
});

router.get('/login', (req, res, next) => {
  res.render('login');
});

router.post('/login', (req, res, next) => {});

router.get('/profile', (req, res, next) => {
  res.render('profile');
});

module.exports = router;
