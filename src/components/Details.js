import React from 'react';
import {  useNavigate, useParams } from "react-router-dom";
import { Button } from "react-bootstrap";


function Details({movies}) {

  const { id } = useParams();
  const navigate = useNavigate();
  const movie=movies.find(movie=>movie.id===Number(id))

  
  return (
    <div>
      <h2>{movie.title}</h2>
        <iframe width="560" height="315"
         src={movie.trailer} title="YouTube video player"
          frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen  />
        <h2>{movie.description}</h2>
        <Button variant='secondary' onClick={() => navigate(-1)}>
            Go Back
          </Button>
    </div>
  )
}

export default Details