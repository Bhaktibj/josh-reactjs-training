import React from 'react'
import {
    Card, CardText, CardBody, CardHeader,
    CardFooter, CardSubtitle, Button
} from 'reactstrap';

const ProductCard = (props) => {
    const { name, stocked, category, description, price } = props.product
    return (
        <CardBody>
            <Card>
                <CardHeader>{name}</CardHeader>
                <CardBody>
                    {!stocked && <p>Out of stock</p>}
                    <CardSubtitle>{category}</CardSubtitle>
                    <CardText>{description}</CardText>
                    <Button>Add to Card </Button>
                </CardBody>
                <CardFooter>
                    Price: ${price}
                </CardFooter>
            </Card>
        </CardBody>
    );
}

export default ProductCard