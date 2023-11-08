
const express = require('express')
const cors = require('cors')
class Server {

    constructor(){
        this.app = express();
        this.usuariosPath='/api/usuarios';
        this.middleware();
        
        this.routes();
        this.PORT=process.env.PORT;
    }

    middleware(){
        //cors
        this.app.use(cors());
        //
        this.app.use( express.json() );

        // DIRECTORIO PUBLICO
        this.app.use(express.static('public'));
    }

    routes(){
       this.app.use(this.usuariosPath,require('../routes/usuarios'));
      
    }

    listen(){
        this.app.listen(this.PORT, ()=> {
            console.log('servidor corriendo en el PUERTO= ',this.PORT);
        }
        )
    }
}

module.exports=Server;