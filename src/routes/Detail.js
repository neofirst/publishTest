import { useState, useEffect } from "react";
import {useParams} from 'react-router-dom';
import Movie from "../components/Movie";

const Detail = () =>{
  const {id} = useParams();
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState([]);

  const getMovie = async () =>{
    const json = await (await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)).json();
    setMovie(json.data.movie);
    setLoading(false);
  }

  useEffect(()=>{
    getMovie();
  },[]);

  if(loading)
    return <div>Loading</div>
  console.log(movie);
  return(
    <div>
      {movie && 
          <Movie key = {movie.id} id={movie.id} coverImg = {movie.medium_cover_image} title = {movie.title}
                summary = {movie.description_full}  genres = {movie.genres}/>
      }
    </div>
  )
}

export default Detail;