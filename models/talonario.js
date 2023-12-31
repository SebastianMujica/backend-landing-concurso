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
                producto,
                estado
            )
        VALUES(?,?,?,?,?,?,?,?,?,?,?,?)
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
                talonario.producto,
                talonario.estado
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
Talonario.getAll = (result)=>{

    const sql = `SELECT * FROM talonario ORDER BY created_at`;

    db.query(
        sql,
        (err, data) => {
            if (err){
                console.log('Error en la Consulta', err);
                result(err, null);
            }else{
                result(null, data);
            }
        }
    )

}
module.exports = Talonario;