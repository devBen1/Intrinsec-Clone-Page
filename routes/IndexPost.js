var express = require('express');
var router = express.Router();
const models = require('../models/index');
let clientMailer = require('./clientMailer.js');

// SUBMIT FORM
router.post('/submitForm', async(req, res) => {
  req.checkBody('fullname', 'Fullname field cannot be empty.').notEmpty().exists().trim().escape();
  req.checkBody('email_address', 'Email field cannot be empty.').isEmail().notEmpty().exists().escape();
  req.checkBody('company_name', 'Company/Employer field cannot be empty.').notEmpty().exists().trim().escape();
  req.checkBody('job_position', 'Job Title field cannot be empty.').notEmpty().exists().trim().escape();
  const errors = req.validationErrors();
  if (errors) {
    res.render('/', { 
      title: 'Cloud Security Training: Courses',
      errors: errors
    });
  }else{
    try { 
      const fetchUser = await models.Users.findOne({ where: { email: req.body.email_address } });
      if(fetchUser == null){
        const users = {
          fullname: req.body.fullname,
          email: req.body.email_address,
          company_name: req.body.company_name,
          job_description: req.body.job_position,
          ip_address: (req.headers['x-forwarded-for'] || req.connection.remoteAddress || '').split(',')[0].trim(),
          agent: req.useragent.source,
        }
        const storeUser = await models.Users.create(users)
        if(storeUser){
          //SEND USERS MAILS
          clientMailer.sendFile(users.fullname,users.email,"Registration Completed","/invite.ics");
          //SEND ADMIN MAILS
          clientMailer.sendAdmin(users.fullname,users.email,users.ip_address,users.company_name,users.agent,users.job_description);
          // res.redirect('/')
          req.flash('success', 'Registration Successful')
          res.redirect('/')
        }
      }else{
        req.flash('return', 'User already registered, Check email address')
        res.redirect('/')
      }
    } catch (error) {
      console.log(error)
    }
  }
});

module.exports = router;