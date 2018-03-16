const express = require('express');
const router = express.Router();
//HANDLE GET REQUESTS FOR /ORDERS
router.get('/', (req, res, next) =>{
  res.status(200).json({
    message:'Orders were fetched'
  });
});
//HANDLE POST REQUESTS
router.post('/', (req, res, next) =>{
  const order = {
    productId: req.body.productId,
    quantity: req.body.quantity
  };
  res.status(201).json({
    message:'Orders were created'
  });
});
//HANDLE GET REQUESTS FOR orderId
router.get('/:orderId', (req, res, next) =>{
  res.status(200).json({
    message:'Order details',
    orderId: req.params.orderId
  });
});
//HANDLES DELETE REQUESTS
router.delete('/:orderId', (req, res, next) =>{
  res.status(201).json({
    message:'Order deleted',
    orderId: req.params.orderId
  });
});

module.exports = router;
