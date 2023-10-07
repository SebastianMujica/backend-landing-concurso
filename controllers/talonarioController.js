const Talonario = require('../models/talonario');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const keys = require('../config/keys');

module.exports = {
    register( req , res ) {

        const talonario = req.body;

        console.log(talonario);

        Talonario.create( talonario , async (err , data )=>{

            if (err){
                return res.status(501).json({
                    success: false,
                    message: 'Error con el registro del talonario',
                    error: err
                });
            }

            return res.status(201).json({
                success: true,
                message: 'Talonario registrado exitosamente',
                data: talonario.id
            })
        
        })
        }
}