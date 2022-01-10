import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'

function Movie ({id, coverImg, title, summary, genres}) {
  console.log('cover:', 
  coverImg)
  return(
      <div>
        <img src={coverImg}/>
        <Link to={`/movie/${id}`}><h1>{title}</h1></Link>
        <p>{summary}</p>
        <ul>
          {genres && genres.map((g)=>(
            <li key={g}>{g}</li>
          ))}
        </ul>
      </div>
  )
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default Movie;