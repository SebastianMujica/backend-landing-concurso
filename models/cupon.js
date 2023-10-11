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
            producto
        )
    VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?,?)
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
            cupon.producto

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

Cupon.getAllByUser = (id_user, result)=>{

    const sql = `
        SELECT code, email, nombre, apellido, telefono, id_ciudad 
        FROM cupon
        WHERE id_user = ?
        ORDER BY created_at`;

    db.query(
        sql,
        [
            id_user
        ],
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
module.exports = Cupon;