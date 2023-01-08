import styles from '../styles/allchar.module.css'
import Card from 'react-bootstrap/Card';
import genshinChar from '../json/data.json';


const info = genshinChar.character;


const Allchar = () => {
    return (
        <div>
            <Card className='containCard ' style={{ width: '15rem' }}>
                            <Card.Img variant="top" src={charInfo.icon} />
                            <Card.Body>
                                <Card.Title className='text-center' key={charInfo.id}>{charInfo.name}</Card.Title>
                            </Card.Body>
                        </Card>
        </div>
    );
}

export default Allchar;