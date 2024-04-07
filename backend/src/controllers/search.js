const api_key="b24e19d5721ad193443c4d48fbf23916bb97975f5afebb93b2c5bfae3aa60c06";
const base_url="https://serpapi.com/search.json";

export const  searchWeb = async(query) => {
     const url=`${base_url}?engine=google&q=${query}&google_domain=google.com&gl=in&hl=en&api_key=${api_key}`
     try {
         const res = await fetch(url,{method:'GET',mode:'no-cors'});
         const data = await res.json();
         return {
             status:data['search_metadata']['status'] ?? 'processing',
             images_results:data["images_results"],
             pagination:{
                 current:data['serpapi_pagination']['current'] ?? 0,
                 next:data['serpapi_pagination']['next'],
                 other_pages:data['serpapi_pagination']['other_pages'],
             }
         }
     } catch (error) {
         return {
             error:error
         }
     }
 }