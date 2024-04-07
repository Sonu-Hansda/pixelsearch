import express from "express";
import cors from "cors";
import { searchImage } from "../../src/utilities/image_search";
import { searchWeb } from "./controllers/search";
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));


app.get('/:query',async(req,res)=>{
    const query= req.query;
    const data = await searchWeb(query);
    return data;
});


app.listen(port,()=>{
    console.log(`server is running on port : ${port}`);
});

