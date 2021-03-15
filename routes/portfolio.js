var express = require('express');
var router = express.Router();
const {Portfolio} = require('../lib/models');
const yahooStockPrices = require('yahoo-stock-prices')


// DELETE - perform DELETE request on http://localhost:3000/api/v1/stocks/:id - STEP 1 Done | STEP 2 - Perform Actual Queries
// UPDATE - perform PUT request on http://localhost:3000/api/v1/stocks/:id - STEP 1 Done | STEP 2 - Perform Actual Queries
// CREATE - - perform POST request on http://localhost:3000/api/v1/stocks - STEP 1 Done | STEP 2 - Perform Actual Queries

//GET /api/v1/stocks/search

//Perform GET request on http://localhost:3000/api/v1/portfolio

router.get('/', async function(req, res, next) {
    let items = await Portfolio.findAll({})
    console.log(items);
    res.json(items);
});

// READ - perform GET request on http://localhost:3000/api/v1/portfolio/:symbol
router.get('/:id', async function(req, res, next) {
    let stock = await Portfolio.findAll({
        where: {
            id: req.params.id
        }
    })
    console.log(stock);
    res.json(stock);
});

// READ - perform GET request on http://localhost:3000/api/v1/portfolio/search/:symbol

router.get('/search/:symbol', async function(req, res, next) {
    console.log(req.query)
    console.log(req.params)
    try {
        const data = await yahooStockPrices.getCurrentData(req.params.symbol);
        res.json({success: true, data: data});
    } catch(err){
        res.json({success: false, data: {}});
    }

})


//Create
router.post('/', async function(req, res, next) {
    console.log(req.body)
    let stock = await Portfolio.create(req.body);
    // Stock.create(req.body)
    //     .then((stock) => {
    //         res.json({success: true});
    //     })

    res.json(stock);
});

//Update
router.put('/:id', async function(req, res, next) {
    console.log(req.body)
    console.log(req.params)
    // let stock = await Stock.update()
    // let stock = Stock.update(req.body, {where: req.params.id})
    let stock = await Portfolio.update(req.body, {
        where: {id: req.params.id}
    });
    res.json(stock);
});

//Delete
router.delete('/:id', async function(req, res, next) {
    // console.log(req.params)
    let stock = await Portfolio.destroy({where: {id: req.params.id}});
    res.json(stock);
});

/* GET users listing. */
router.get('/', async function(req, res, next) {

    console.log('I WAS HERE *********')

    let items = await Portfolio.findAll({})

    console.log(items);
    res.json(items);
});

module.exports = router;