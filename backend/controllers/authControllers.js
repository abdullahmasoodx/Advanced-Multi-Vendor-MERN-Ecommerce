const adminModel = require("../models/adminModel");
const { responseReturn } = require("../utilities/response");
const bcrypt = require("bcrypt");
const { createToken } = require("../utilities/tokenCreate");

class authControllers {
  admin_login = async (req, res) => {
    console.log(req.body);
    const { email, password } = req.body;
    try {
      const admin = await adminModel.findOne({ email }).select("+password");
      console.log(admin);
      if (admin) {
        const isMatch = await bcrypt.compare(password, admin.password);

        if(isMatch) {
          // Create Token 

          const token = await createToken({
            id:admin.id,
            role:admin.role
          })

          res.cookie(
            'accessToken', token,{
              expires:new Date(Date.now()+ 7*24*60*60*1000),
              httpOnly: true
            }
          )
          return responseReturn(res, 200, { message: "Login successful", token });
        }else{
          return responseReturn(res, 401, { error: "Invalid password" });
        }
      } else {
        return responseReturn(res, 404, { error: "Email not found" });
      }
    } catch (error) {
      return responseReturn(res, 500, { error: error.message });
    }
  };
}

module.exports = new authControllers();
