require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

const api_key=process.env.API_KEY;
const base_url=process.env.BASE_URL;

 const searchWeb = async(query) => {
     const url=`${base_url}?engine=google&q=${query}&google_domain=google.com&gl=in&hl=en&api_key=${api_key}`
     try {
         const res = await fetch(url,{method:'GET',mode:'no-cors'});
         const data = await res.json();
         return {
            organic_results:data['organic_results'],
            related_searches:data['related_searches'],
            pagination:{
                current:data['serpapi_pagination']['current'],
                next:data['serpapi_pagination']['next_link'],
                other_pages:data['serpapi_pagination']['other_pages'],
            }
         }
     } catch (error) {
         return {
             error:error
         }
     }
 }

 const searchImage = async(query) => {
    const url=`${base_url}?engine=google&q=${query}&google_domain=google.com&gl=in&hl=en&tbm=isch&api_key=${api_key}`;
    try{
        const res = await fetch(url,{method:'GET',mode:'no-cors'});
        const data = await res.json();
        return {
           images_results:data["images_results"],
            pagination:{
                current:data['serpapi_pagination']['current'] ?? 0,
                next:data['serpapi_pagination']['next'],
                other_pages:data['serpapi_pagination']['other_pages'],
            }
        }
    }catch(err){
        return {
            error:err
        }
    }
 }

app.get('/:query',async(req,res)=>{
    const query=req.params.query;
    try {
        const result = await searchWeb(query);
        res.json(result);
    } catch (error) {
        res.json([]);
    }
});

app.get('/image/:query',async(req,res)=>{
    const query=req.params.query;
    try{
        const result = await searchImage(query);
        res.json(result);
    }catch(err){
        res.json([]);
    }
});

app.listen(port,()=>{
    console.log(`server is running on port : ${port}`);
});

