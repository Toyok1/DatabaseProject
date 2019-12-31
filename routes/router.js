
const router = require('express').Router();

// auth login
router.get('/login', (req, res) => {
    res.render('login', { user: req.user });
});

// auth logout
router.get('/logout', (req, res) => {
    // handle with passport
    res.send('logging out');
});

router.get('/signup',(req,res) =>{
    res.render('signup');
})

module.exports = router;