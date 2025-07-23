import express from 'express'

const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/payment_methods', (req, res) => {
  console.log('request received');
  console.log(req.body);
  console.log(req.query)

})

export default router;

