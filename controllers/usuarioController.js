const { response, request } =require('express');

const usuariosGet = (req=request,res=response) => {
    const {q='unknown',nombre,key} =req.query;
    res.json({
        msg: 'GET api -- Controller',
        q,
        nombre,
        key
    })
}

const usuariosPost =(req, res=response) => {
    const {nombre,apellido}= req.body;
    res.json({

        msg:'post API--Controller',
        nombre,
        apellido
    })
  }

const usuariosPut= (req, res=response) => {
    const id=req.params.id;
    
   
    res.json({
        msg:'put API -- Controller',
        id
    })
  }

const usuariosDelete =(req, res=response) => {
    res.json({
        msg:'delete API--Controller'
    })
  }

module.exports={
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosDelete
}