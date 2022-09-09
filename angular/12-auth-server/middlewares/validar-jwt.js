const {response} = require('express');
const jwt = require('jsonwebtoken');

const validarJWT = (req,res = response , next)=>{
    
    const token = req.query.xToken;
    
    //console.log(token);
    if(!token){
        return res.status(401).json({
            ok:false,
            msg:'error en el token'
        });
    }
    try{

        const {uid,name}=jwt.verify(token, process.env.SECRET_JWT_SEED );
        req.uid = uid;
        req.name = name;
        //console.log(uid,name);
    }
    catch(error){
        return res.status(401).json({
            ok:false,
            msg:'Token no válido'
        });
    }
    //Todo OK
    next();
}

module.exports={
    validarJWT
}