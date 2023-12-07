import React, { useState } from "react";
import Card from "react-bootstrap/Card";

const FilmCard = ({ img, name, director, actors, imdb_point }) => {
  const [showImage, setshowImage] = useState(true);

  const handleClick = () => {
    setshowImage(!showImage);
  };
  return (
    <Card
      className="rounded-2 m-auto player-card"
      role="button"
      onClick={handleClick}
    >
      {showImage ? (
        <Card.Img variant="top" src={img} className="player-logo" />
      ) : (
        <ul style={{border:"1px solid #39FF14"}}>
          <li className="list-unstyled h3 text-start mt-3 fw-bold">🎬Director: </li>
          <li className="list-unstyled h5 text-middle">{director}</li>
          <li className="list-unstyled h3 text-start fw-bold">🎞IMDb: </li>
          <li className="list-unstyled h5 text-middle">{imdb_point}</li>
          <li className="list-unstyled h3 text-start fw-bold">🎥Starrings:</li>
          {actors.map((stat, i) => (
            <li className="list-unstyled h5 text-middle" key={i}>
              {stat}
            </li>
          ))}
        </ul>
      )}

      <Card.Footer>
        <Card.Title className="text-center fs-6" style={{color:"#39FF14"}}>{name}</Card.Title>
      </Card.Footer>
    </Card>
  );
};

export default FilmCard;
