const {response}= require('express');
const Usuario = require('../models/Usuario');

const crearUsuario=async(req,res = response)=>{
    //console.log(req.body);
    const {email,name,password} = req.body;

    try{
        //Verificar el email
        const usuario = await Usuario.findOne({email : email});
        if(usuario){
            return res.status(400).json({
                ok:false,
                msg: 'El suario ya eciste con ese email'
            })
        }
        //Crear usuario con el
        const dbUser =  new Usuario(req.body);        
        //Encriptar ka contraseña
        //Gerneral JWT
        
        //Crea usuario de DB
        dbUser.save();        

        //Gernerar respuesta exitosa
        return res.status(201).json({
            ok:true,
            uid:dbUser.id,
            name
        });

    }
    catch(error){

        console.log(error);
        return res.status(500).json({
            ok:false,
            msg:'Por favor hable con el administrador'
        });
    }
    //console.log(email,name,password);
    return res.json({
        ok:true,
        msg:'Crear usuario /new'
    })
}

const loginUsuario=(req,res)=>{

    const {email,password} = req.body;
    //console.log(email,password);
    return res.json({
        ok:true,
        msg:'Login de usuario usuario /'
    })
}

const revalidarToken = (req,res)=>{
    return res.json({
        ok:true,
        msg:'Renew'
    })
}

module.exports={
    crearUsuario,
    loginUsuario,
    revalidarToken
};