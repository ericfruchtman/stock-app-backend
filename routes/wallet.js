var express = require('express');
var router = express.Router();
const {Wallet} = require('../lib/models');



// UPDATE - perform PUT request on http://localhost:3000/api/v1/wallet/:id




/* GET users listing. */
router.get('/', async function(req, res, next) {
    
    let currentWallet = await Wallet.findOne({})
    console.log(currentWallet);
    res.json(currentWallet);
});

// UPDATE - perform PUT request on http://localhost:3000/api/v1/cash/:id
router.put('/:id', async function(req, res, next) {
    console.log(req.body)
    console.log(req.params)
  
    let currentWallet = await Wallet.update(req.body, {
      where: {id: req.params.id}
    });
    res.json({currentWallet})
  });

module.exports = router;