import express from 'express';
import bodyParser from 'body-parser';
import productRoutes from './product.js';
import cors from 'cors';
const app=express();
const PORT=5000;

app.use(bodyParser.json());
app.use(cors());

app.use('/api/product',productRoutes);

app.get('/getdata',(req,res)=>{

})


app.listen(PORT,()=>console.log("server running on port"))


