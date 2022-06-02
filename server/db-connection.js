const mariadb = require('mariadb')

const pool = mariadb.createPool({
    host: 'localhost',
    user: 'root',
    password:'Aldo2001',
    database: 'db_denuncias',
    port: '3306'
})

//Funcion que conecta a DB
let connection = async (query) => {
    let conn;
    try{
        conn = await pool.getConnection();
        const rows = await conn.query(query);
        console.log(pool.activeConnections());
        return(rows);
    }catch(err){
        return err;
    } finally {
        if (conn) conn.release();
    }
}

//connection();

exports.connection = connection;