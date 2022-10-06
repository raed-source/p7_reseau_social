const User = require('../models/userModel');
const ObjectID=require('mongoose').Types.ObjectId;

module.exports.getAllUsers=(req,res,next)=>{
    User.find().then(
        (users)=>{
            res.status(200).Json(users);
        }
    )
    .catch(
        (error)=>{
            res.status(400).Json({
                error:error
            });
        }
    )
}
exports.getOneuser = (req, res, next) => {
    console.log('ce user');
    User.findOne({
      _id: req.params.id
    }).then(
      (user) => {
        res.status(200).json(user);
      }
    ).catch(
      (error) => {
        res.status(404).json({
          error: error
        });
      }
    );
  };