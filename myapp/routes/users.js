var express = require('express');
var router = express.Router();

/* GET users listing. */

router.get('users', function(req, res, next) {
  userDao.addUserAction(req,res,next);
});

module.exports = router;
