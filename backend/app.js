import cors from 'cors';
import dotenv from 'dotenv'
import express from 'express'
import { peleadorRouter } from './routes/peleadores.router.js';
import { initDB } from './config/servidor.js';
dotenv.config();


const  app = express()
const PORT = process.env.PORT || 3000;
app.use(cors({
    credentials:true
}))
app.use(express.json())
app.get("/", (req,res) => res.json({ok:true}))
app.use("/api",peleadorRouter)
app.listen(PORT, () => {
console.log( `Se esta ecuchando el puerto ${PORT}`)
})
initDB()