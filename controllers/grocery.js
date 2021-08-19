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