import express from 'express';

import cors from 'cors';
import ExecuiveRoutes from './routes/executive.js';


const app=express();
app.use(express.json());
app.use(cors());

const PORT = 3000;
app.use(ExecuiveRoutes);

app.listen(PORT,()=>{
    console.log(`Server is running ${PORT}`)
})