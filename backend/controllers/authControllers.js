class  authControllers{
    admin_login = async(req,res)=>{
        console.log(req.body)
        const {email,password} = req.body
    }
}

module.exports  = new authControllers()