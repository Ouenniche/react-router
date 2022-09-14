import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';

function MovieCard({movie}) {
    const navigate =useNavigate()

    const navigateToDetails =()=>{
      navigate(`./Details/${movie.id}`)
    }

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={movie.posterUrl} />
      <Card.Body>
        <Card.Title>{movie.title}</Card.Title>
        <Card.Text>{movie.description}</Card.Text>
        <Card.Text>{"⭐".repeat(movie.rate)} </Card.Text>
        <Button variant='primary' onClick={navigateToDetails} >See Trailer</Button>
      </Card.Body>
    </Card>
  );
}

export default MovieCard;