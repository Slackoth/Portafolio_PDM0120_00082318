const express =  require('express');
const router = express.Router();

/*GET*/
router.get('/',(req,res,next)=> {
    res.render('login', {title: "Login",css: "stylesheets/login.css"});
});

module.exports = router;