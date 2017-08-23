var express = require('express');
var router = express.Router();

/* GET fetch page. */
router.get('/', function(req, res, next) {
  // res.render('fetch', { title: 'fetch' });
  console.log('get fetch --->', req.headers);
  res.set({
    'Access-Control-Allow-Origin': req.headers.origin,
  })
  res.end(`
get fetch headers: 
${JSON.stringify(req.headers, null, 2)}
  `);
});

/* POST fetch page. */
router.post('/', function(req, res, next) {
  // res.render('fetch', { title: 'fetch' });
  console.log('post fetch --->', req);
  res.end('post fetch');
});

/* OPTIONS fetch page. */
router.options('/', function(req, res, next) {
  // res.render('fetch', { title: 'fetch' });
  console.log('options fetch --->', req);
  res.end('options fetch');
});

function doAjax() {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "http://localhost:3333/fetch", true);
  xhr.send();
};


module.exports = router;