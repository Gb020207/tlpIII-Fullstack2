import cors from 'cors';
import dotenv from 'dotenv'
import express from 'express'
dotenv.config();


const  app = express()
const PORT = process.env.PORT || 3000;
app.use(express.json())
app.get("/", (req,res) => res.json({ok:true}))
app.listen(PORT, () => {
console.log( `Se esta ecuchando el puerto ${PORT}`)
})
