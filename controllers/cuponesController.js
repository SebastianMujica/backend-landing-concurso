const Cupon = require('../models/cupon');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const keys = require('../config/keys');

module.exports = {
    register( req , res ) {

        const cupon = req.body;

       // console.log('Holiss '+ cupon);

        Cupon.create( ...cupon, req.ip , async (err , data )=>{

            if (err){
                return res.status(501).json({
                    success: false,
                    message: 'Error con el registro del cupon',
                    error: err
                });
            }

            return res.status(201).json({
                success: true,
                message: 'Cupon registrado exitosamente',
                data: cupon.id
            })
        
        })
        },
    getAllForId( req, res){

        const id = req.body.id_user

        Cupon.getAllByUser(id , async ( err, data )=>{
            
            if (err){
            return res.status(501).json({
                    success: false,
                    message: 'Error con la consulta',
                    error: err
                });
            }

            return res.status(201).json({
                success: true,
                message: 'Consulta exitosa',
                data: data
            })
        })
    }
}