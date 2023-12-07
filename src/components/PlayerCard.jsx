import React, { useState } from 'react'
import Card from 'react-bootstrap/Card';

const PlayerCard = ({img,name,statistics}) => {

    const [showImage, setshowImage] = useState(true)

    const handleClick=()=>{setshowImage(!showImage)}
  return (
    <Card className='rounded-2 m-auto player-card' role='button' onClick={handleClick}>
    {showImage ?(<Card.Img variant="top" src={img} className='player-logo' />):(  <ul>

      {statistics.map((stat,i)=>(
        <li className='list-unstyled h5 text-start' key={i}>🏀 {stat}</li>
      ))}


    </ul>)}
    
  
    <Card.Footer>
      <Card.Title>{name}</Card.Title>
    </Card.Footer>
  </Card>
  )
}

export default PlayerCard