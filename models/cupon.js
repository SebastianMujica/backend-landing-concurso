const db = require('../config/config');

const Cupon = {}

Cupon.create = (cupon, result) =>{
    const sql = `
    INSERT INTO
        cupon(
            code,
            email,
            nombre,
            apellido,
            cedula,
            telefono,
            ciudad,
            ip,
            id_talonario,
            created_at,
            updated_at,
            producto,
            estado
        )
    VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;
    db.query(
        sql,
        [
            cupon.code,
            cupon.email,
            cupon.nombre,
            cupon.apellido,
            cupon.cedula,
            cupon.telefono,
            cupon.ciudad,
            cupon.ip,
            cupon.code,
            new Date(),
            new Date(),
            cupon.producto,
            cupon.estado

        ],
        (err, res) => {
            if (err){
                console.log('Error con el cupon', err);
                result(err, null);
            }else{
                console.log('Cupon registrado exitosamente', res.insertId );
                result(null, res.insertId);
            }
        }
    )
}

Cupon.getAll = (result)=>{

    const sql = `
        SELECT 
            *
        FROM 
            cupon 
        ORDER BY 
            created_at
        `;

    db.query(
        sql,
        (err, data) => {
            if (err){
                console.log('Error en la Consulta', err);
                result(err, null);
            }else{
                console.log('Listado ', data);
                result(null, data);
            }
        }
    )

}
module.exports = Cupon;