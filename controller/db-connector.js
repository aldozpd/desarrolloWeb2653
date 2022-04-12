const mariadb = require('mariadb');

async function dbConnection(query){
    const conn = await mariadb.createConnection({
        host: 'localhost',
        user: 'admin',
        password: 'admin1234',
        database: 'db_denuncias',
    });

    try{
        const res = await conn.query(query);
        console.log(res);
        return res;
    }catch(error){
        console.log(error);
    }finally{
        conn.end();
    }
}

exports.dbConnection = dbConnection;