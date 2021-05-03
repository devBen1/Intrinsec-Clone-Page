var express = require('express');
var router = express.Router();
const models = require('../models/index');
let clientMailer = require('./clientMailer.js');

/* GET home page. */
router.get('/', async function(req, res, next) {
  try {    
    const clicked = {
      ip_address: (req.headers['x-forwarded-for'] || req.connection.remoteAddress || '').split(',')[0].trim(),
      agent: req.useragent.source,
    }
    await models.Clicked.create(clicked) 
    res.render('Cloud', { 
      title: 'Cloud Security Training: Courses',
      success: req.flash('success'),
      errors: req.flash('errors'),
      return: req.flash('return')
    });   
  } catch (error) {
    console.log(error)
  }
});

/* GET USERS TABLE. */
router.get('/table', async function(req, res, next) {
  try {    
    const tableData = await models.Users.findAll() 
    res.render('table', { 
      title: 'Users Table Data',
      tableData
    });   
  } catch (error) {
    console.log(error)
  }
});

/* GET CLICKED TABLE. */
router.get('/clicked', async function(req, res, next) {
  try {    
    const tableData = await models.Clicked.findAll() 
    res.render('clicked', { 
      title: 'Clicked Table Data',
      tableData
    });   
  } catch (error) {
    console.log(error)
  }
});

module.exports = router;
