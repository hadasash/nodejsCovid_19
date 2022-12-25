var express = require('express');
var router = express.Router();

const personsBL=require ('../models/personBL');

/* GET home page. */
router.get('/', async function(req, res, next) {
  let persons = await personsBL.getAllPersons() 
  res.render('persons', { data: persons });
});

router.get('/person/:id', async function(req, res, next) {
    let id = req.params.id;
    let person = await personsBL.getPerson(id) 
    res.render('person', { data: person });
  });

  router.get('/addperson', async function(req, res, next) {

    res.render('addperson', { });
  });

  router.post('/getpersondata', async function(req, res, next) {
    let obj = req.body
    let person=await personsBL.getPersonById(obj.id);
    var v1 = Date.parse(obj.vaccine1);
   var v2 = Date.parse(obj.vaccine2);
   var v3 = Date.parse(obj.vaccine3);
   var v4 = Date.parse(obj.vaccine4);
   console.log(obj.vaccine1);
   cellPhoneStr=obj.cellphone.toString();
    if (person.length==0 && obj.id.length==9 && (obj.phone.length==9||obj.phone.length==8)&&obj.cellphone.length==9 &&((v2>v1)&&(obj.vaccine3=="")&&(obj.vaccine4==""))||((obj.vaccine1=="")&&(obj.vaccine2=="")&&(obj.vaccine3=="")&&(obj.vaccine4==""))||((obj.vaccine2=="")&&(obj.vaccine3=="")&&(obj.vaccine4==""))||((v2>v1)&&(v3>v2)&&(obj.vaccine4==""))||((v2>v1)&&(v3>v2)&&(v4>v3))&&(cellPhoneStr.startsWith('52')==1||cellPhoneStr.startsWith('53')==1||cellPhoneStr.startsWith('54')==1||cellPhoneStr.startsWith('55')==1||cellPhoneStr.startsWith('58')==1))
    {
      
     let status = await personsBL.addPerson(obj);
      res.redirect("/persons")
  
    }
    else 
    {
      res.redirect("/persons")
    }
    });

  router.post('/person/updateordeleteperson/:id', async function(req, res, next) {
   let id = req.params.id;
   let obj = req.body
   let action = req.body.action
   var v1 = Date.parse(obj.vaccine1);
   var v2 = Date.parse(obj.vaccine2);
   var v3 = Date.parse(obj.vaccine3);
   var v4 = Date.parse(obj.vaccine4);
  
   cellPhoneStr=obj.cellphone.toString();
 
    if(action== "Update")
    {
    if ( obj.id.length==9 && (obj.phone.length==9||obj.phone.length==8) && (obj.cellphone.length==9||obj.cellphone.length==8)&&(((v2>v1)&&(obj.vaccine3=="")&&(obj.vaccine4==""))||((obj.vaccine1=="")&&(obj.vaccine2=="")&&(obj.vaccine3=="")&&(obj.vaccine4==""))||((obj.vaccine2=="")&&(obj.vaccine3=="")&&(obj.vaccine4==""))||((v2>v1)&&(v3>v2)&&(obj.vaccine4==""))||((v2>v1)&&(v3>v2)&&(v4>v3)))&&(cellPhoneStr.startsWith('52')==1||cellPhoneStr.startsWith('53')==1||cellPhoneStr.startsWith('54')==1||cellPhoneStr.startsWith('55')==1||cellPhoneStr.startsWith('58')==1))
    {
      
      let status = await personsBL.updatePerson(id,obj)
      res.redirect("/persons")
  
    }
    else 
    {
      res.redirect("/persons")
    }
    }

    else if(action== "Delete")
    {
      
      let status = await personsBL.deletePerson(id)
      res.redirect("/persons")
    }

  });
  
module.exports = router;
