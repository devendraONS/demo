var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/user/:id', function(req, res, next) {
  //console.log({"params":req.params.id});
  res.render('index', { title: 'Express' });
});

// this is the new feature module
router.post('/user', function(req, res, next) {
  //console.log({"body":req.body});
  res.render('index', { title: 'Express' });
});



module.exports = router;
// this is first change by devendra

//this is new code of new feature 2
// this is second change by dev 
