var express = require('express');

var router = express.Router();

router.get('/test', function (req, res, next) {
  res.set('Content-Type', 'text/html');
  res.end(`
this is my redirect test file.
<iframe src="/redirect/source" onLoad="console.log('iframe load'); debugger;"></iframe>
  `);
});

router.get('/source', function (req, res, next) {
  res.redirect(302, '/redirect/target');
});

router.get('/target', function (req, res, next) {
  res.set({
    'Content-Type': 'text/html',
  });
  res.end(`
this is my redirect target file.
  `);
})

module.exports = router;
