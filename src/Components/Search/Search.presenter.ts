import axios from 'axios'



const getData = async (keyWords: string) => {
     let url = "https://api.themoviedb.org/3/search/movie?api_key=620960caca969205d304f90c59b84b06&query=" + keyWords + "&languaje=es"
     const res = await axios.get(url);
     return res.data;
    
  }




export default getData

