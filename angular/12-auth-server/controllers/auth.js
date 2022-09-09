const {response}= require('express');
const Usuario = require('../models/Usuario');
const bcrypt = require('bcryptjs');
const {generarJWT}= require('../helpers/jwt');

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
        //Encriptar la contraseña
        const salt=bcrypt.genSaltSync(10);
        dbUser.password = bcrypt.hashSync(password,salt);
        //Gerneral JWT
        const token= await generarJWT(dbUser.id, name);
        //Crea usuario de DB
        dbUser.save();        

        //Gernerar respuesta exitosa
        return res.status(201).json({
            ok:true,
            uid:dbUser.id,
            name,
            token
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

const loginUsuario=async(req,res = response)=>{

    const {email,password} = req.body;
    //console.log(email,password);
    try{
        
        const dbUser = await Usuario.findOne({email});
        
        if(!dbUser){
            return res.status(400).json({
                ok:false,
                msg:'El correo no existe'
            });
        }

        //Confirmar si el password hace match
        const validPassword =  bcrypt.compareSync(password,dbUser.password);

        if(!validPassword){
            return res.status(400).json({
                ok:false,
                msg:'El password no es válido'
            });
        }
        
        //Genera el JWT
        const token = await generarJWT(dbUser.id , dbUser.name);
        //console.log('CCCCCCCCCCC');
        //Respuesta del servicio
        return res.json({
            ok:true,
            uid: dbUser.name,
            token
        });

    }
    catch(error){
        console.log(error);
        return res.status(500).json({
            ok:false,
            msg:'Hable con el administrador'
        })
    }

    
}

const revalidarToken = async( req, res = response ) => {
    
    const {uid,name}=req;
    const token= await generarJWT(uid, name);
    return res.json({
        ok: true,
        uid,
        name,
        token
    });
}

module.exports={
    crearUsuario,
    loginUsuario,
    revalidarToken
};