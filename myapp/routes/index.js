var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/data', function(req, res) {
  res.send('hello');
});
router.all('/login', function(req, res) {
	res.header("Access-Control-Allow-Origin", "*");
	var user = req.query.user;
	var status;
	if(user==='admin'){
		status = 'ok';
	}else{
		status = 'error';
	}
  	res.send({
  		status:status
  	});
});

module.exports = router;
