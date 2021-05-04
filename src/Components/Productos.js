import {Link} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Productos(props){
    console.log('props ',props);
    return(
        <>
        <Card>
            <Card.Body>
                <Card.Title>{props.productos.data().name}</Card.Title>
                <Card.Text>
                    {props.productos.data().price}
                    <span style={{float:"right"}}>
                        <Link to={"/productos/"+props.productos.id}>
                            <Button variant="primary">Ver</Button>
                        </Link>
                    </span>
                </Card.Text>
            </Card.Body>
        </Card>
        </>
    );
}

export default Productos;