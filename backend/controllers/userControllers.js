//USER ROUTES
const User = require('../models/User')
const bcrypt = require('bcryptjs');

 const createUser =  (req, res) => {
  const {email,password} = req.body;
  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(req.body.password, salt);
  const userData = new User({

    email:email,
    password:hash

})
const newuser = userData.save();
if(newuser){

  res.json({

  email:newuser.email,
  password:newuser.password,
 // token:generateToken(user._id)

})

}else{

res.status(200).json({message:'User Not Created'});


}

 // const user = new User ({
 //   email: req.body.email,
 //   password: req.body.password,
 // });

//user.save();
// res.json(user);
}

module.exports = {createUser}