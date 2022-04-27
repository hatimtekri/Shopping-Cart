import React from 'react'
import {Card,CardBody,CardImg,CardText,CardTitle,Button} from 'reactstrap'

const CartItem = ({product,addInCart}) => {
    return (
        <Card>
            <CardImg src={product.smallImage} height="250" width="300" top >

            </CardImg>

            <CardBody>
                <CardTitle>{product.productName}</CardTitle>
                <CardText>Price RS : {product.productPrice}</CardText>
                <Button
                onClick={ ()=>{addInCart(product)} }
                >Buy Now</Button>
            </CardBody>
        </Card>
    )

}

export default CartItem
