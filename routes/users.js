var express = require('express');
var router = express.Router();
const passport = require('passport');
const User = require('../models/user');


checkAuthenticated = (req, res, next) => {
    if (req.isAuthenticated()) { return next() }
    res.redirect("/users/login")
}  

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('users', { title: 'LFC Fan Page' });
});

router.get('/register', (req, res) => {
    res.render('register');
});

router.post('/register', async (req, res, next) => {
    try {
        const { email, username, password } = req.body;
        const user = new User({ email, username });
        const registeredUser = await User.register(user, password);
        req.login(registeredUser, err => {
            if (err) return next(err);
            res.redirect('/about');
        })
    } catch (e) {
        res.redirect('/users/register');
    }
});

router.get('/login', (req, res) => {
    res.render('login');
})

router.post('/login', passport.authenticate('local', { failureRedirect: '/users/login' }), (req, res) => {
    const redirectUrl = req.session.returnTo || '/';
    delete req.session.returnTo;
    res.redirect(redirectUrl);
})

router.get('/logout', (req, res) => {
    req.logout();
    res.redirect('/about');
})

router.get('/secret', checkAuthenticated, (req, res) => {
  res.render('secret');
})

module.exports = router;