const Grocery = require('../models/grocery')

exports.getAllGroceries = async (req,res,next) => {
  try {
     const [allTheGroceries] = await Grocery.fetchAll(); //destructured because we want the json's data not the json itself
     res.status(200).json(allTheGroceries);
    } catch (err) {
     if(!err.statusCode){
       err.statusCode=500;
     }
     next(err) //will be sent to an error controller
 }
}

exports.postGrocery = async (req,res,next) => {
  try {
     const postResponse = await Grocery.post(req.body.item); //req.body is the user's input
     res.status(201).json(postResponse); //code is 201 for a resource being created
    } catch (err) {
     if(!err.statusCode){
       err.statusCode=500;
     }
     next(err) //will be sent to an error controller
 }
}

exports.putGrocery = async (req,res,next) => {
  try {
     const putResponse = await Grocery.update(req.body.id, req.body.item); //req.body is the user's input
     res.status(201).json(putResponse); //code is 201 for a resource being created
    } catch (err) {
     if(!err.statusCode){
       err.statusCode=500;
     }
     next(err) //will be sent to an error controller
 }
}

exports.deleteGrocery = async (req,res,next) => {
  try {
     const deleteResponse = await Grocery.delete(req.params.id); //since we are getting id from the URL and not the body, we will use .params
     res.status(200).json(deleteResponse); //code is 201 for a resource being created
    } catch (err) {
     if(!err.statusCode){
       err.statusCode=500;
     }
     next(err) //will be sent to an error controller
 }
}