
const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

const api_key="b24e19d5721ad193443c4d48fbf23916bb97975f5afebb93b2c5bfae3aa60c06";
const base_url="https://serpapi.com/search.json";

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

app.get('/:query',async(req,res)=>{
    const query=req.params.query;
    const result = await searchWeb(query);
    res.json(result);
});

app.listen(port,()=>{
    console.log(`server is running on port : ${port}`);
});

