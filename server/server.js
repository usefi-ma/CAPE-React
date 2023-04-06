import express from 'express';
import mysql from 'mysql2/promise';
import cors from 'cors';


const app = express();
app.use(express.json());
app.use(cors());

const PORT = 3000;
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'Mendoza89',
    database: 'cape',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

app.get('/members', async(req, res) =>{
    try{
        const [rows, fields] = await pool.execute('SELECT * FROM members');
        res.json(rows);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});

app.post('/members', async (req, res) =>{
    //Parameters expected
    const {FullName, JobTitle, Organization, Description} = req.body;
    if(!FullName || !JobTitle || !Organization || !Description){
        return res.status(400).send('Please ensure you have added all fields');
    }
    try{
        const conn = await pool.getConnection();
        await conn.beginTransaction();
        const [result] = await conn.execute('INSERT INTO members (FullName, JobTitle, Organization, Description) VALUES(?, ?, ?, ?)', [FullName, JobTitle, Organization, Description]);
        const [row] = await conn.execute('Select * FROM members WHERE id = ?', [result.insertId]);
        await conn.commit();
        conn.release();
        res.json(row[0]);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
})

app.listen(PORT, () => {
    console.log("Sever running on port 3000");
})