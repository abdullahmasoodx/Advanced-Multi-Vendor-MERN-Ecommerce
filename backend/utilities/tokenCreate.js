const jwt  = require("jsonwebtoken");

module.exports.createToken = async(payload) => {
   const token = jwt.sign(payload,process.env.SECRET,{
    expiresIn:"7d"
   })
   return token;
}