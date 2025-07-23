import express from 'express'

const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/payment_methods', (req, res) => {
  res.send({
    "payment_methods": [
      {
        "id": 1,
        "title": "Mastercard",
        "icon": "mastercard"
      },
      {
        "id": 2,
        "title": "Visa",
        "icon": "visa"
      }]
  })
})

export default router;

