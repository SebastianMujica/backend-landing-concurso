const db = require ('../config/config');
const bcrypt = require('bcryptjs');
const Talonario = {} ;

Talonario.create = async ( talonario, result) => {

    const sql=`
    INSERT INTO
            talonario(
                code,
                cedula,
                nombre,
                apellido,
                telefono,
                direccion_pdv,
                ciudad,
                ip,
                created_at,
                updated_at,
                producto
            )
        VALUES(?,?,?,?,?,?,?,?,?,?)
    `;

    db.query(
            sql,
            [ 
                talonario.code,
                talonario.cedula,
                talonario.nombre,
                talonario.apellido,
                talonario.telefono,
                talonario.direccion_pdv,
                talonario.ciudad,
                talonario.ip,
                new Date(),
                new Date(),
                producto
            ],
            (err, res) => {
                if (err){
                    console.log('Error al insertar el Talonario', err);
                    result(err, null);
                }else{
                    console.log('Id de talonario', res.insertId)
                    result(null, res.insertId);
                }
            }
            )
}

module.exports = Talonario;