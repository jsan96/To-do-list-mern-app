//USER ROUTES
const User = require('../models/User')
const bcrypt = require('bcryptjs');

 const createUser =  (req, res) => {
  const {name,email,password} = req.body;
  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(req.body.password, salt);
  const userData = new User({

    name:name,
    email:email,
    password:hash

})
const newuser = userData.save();
if(newuser){

  res.json({

  name:newuser.name,
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