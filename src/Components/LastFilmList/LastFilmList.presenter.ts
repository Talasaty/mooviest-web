import axios from "axios";

const getData = async () => {
  let url =
    "https://api.themoviedb.org/3/discover/movie?api_key=620960caca969205d304f90c59b84b06&certification=R&sort_by=popularity.desc";
  const res = await axios.get(url);
  const Peliculas = res.data.results.slice(0, 10);

  return Peliculas;
};

export default getData;