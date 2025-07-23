import express from 'express'

const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('it\'s working');
});

// const orders = [];
//
// const order = {
//   id: '',
//   total: 0,
//   redirectUrl: '',
//   paymentStatus: ''
// }

let orderId = ''
let orderTotal = 0
let redirectUrl = ''
let paymentStatus = ''

{

}
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

router.post('/payment', (req, res) => {
  const body = req.body;

  orderId = body['order']['id'];
  orderTotal = body['order']['price_incl'];
  redirectUrl = body['redirect_url'];


  res.send({
    payment_url: `https://c-series-payment-app.onrender.com/pay/${orderId}`
  })
})

router.get('/pay/:id', (req, res) => {
  const params = req.params;
  console.log(params)
  res.render('index', {
    orderId,
    orderTotal,
  });
})

router.post('/set-payment-status', (req, res) => {
  paymentStatus = req.body['status'];
  console.log(`Payment status set to ${paymentStatus}`)

  res.send({ success: true, redirectUrl })
})

router.get('/payment/:orderId', (req, res) => {
  res.send({
    status: paymentStatus,
  })
})

export default router;

