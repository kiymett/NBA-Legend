import {useState} from 'react';
import Card from 'react-bootstrap/Card';
// const PlayerCard = ({name, img, statistics, showImage}) => {
const PlayerCard = ({name, img, statistics}) => {
    const[showImage, setShowImage] = useState(true);
    console.log(showImage);

    return (
        <Card className="rounded-2 m-auto player-card" role="button" onClick = {()=>setShowImage(false)} >
            {showImage ? (  <Card.Img variant="top" src={img} className = "player-logo"/>
            ):(
                    
            <ul className= "m-auto">
                {statistics.map((item, i)=>(
                    <li className='list-unstyled h5 text-start'>
                        {" "}
                        🏀 {item}
                    </li>
                ))}
            </ul>

            )}
      
            <Card.Footer>
            <Card.Title>{name}</Card.Title>
            </Card.Footer>
       
        </Card>
        
    )

}

export default PlayerCard

