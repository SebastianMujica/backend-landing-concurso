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
            telefono,
            ciudad,
            ip,
            created_at,
            updated_at
        )
    VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;
    db.query(
        sql,
        [
            cupon.code,
            cupon.email,
            cupon.nombre,
            cupon.apellido,
            cupon.telefono,
            cupon.ciudad,
            cupon.ip,
            new Date(),
            new Date()

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