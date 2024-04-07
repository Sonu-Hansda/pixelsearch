const api_key="b24e19d5721ad193443c4d48fbf23916bb97975f5afebb93b2c5bfae3aa60c06";
const base_url="https://serpapi.com/search.json";

export  const  searchImage = async(query) => {
    const url=`${base_url}?engine=google&q=${query}&google_domain=google.com&gl=in&hl=en&tbm=isch&api_key=${api_key}`
    try{
        const res = await fetch(url);
        const data = res.json();
        return {
            organic_results:data['organic_results'],
            related_searches:data['related_searches'],
            pagination:{
                current:data['serpapi_pagination']['current'],
                next:data['serpapi_pagination']['next_link'],
                other_pages:data['serpapi_pagination']['other_pages'],
            }
        }
    }catch(err){
        return {
            error:err
        }
    }
}