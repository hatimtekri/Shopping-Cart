import React from 'react'
import {

    Container,
    ListGroup,
    ListGroupItem,
    Button,
    CardBody,
    CardHeader,
    Card,
    Col,
    Row,
    CardFooter,

} from 'reactstrap'

const Cart = ({ CartItem, RemoveItem, BuyNow }) => {

    let amount = 0;

    CartItem.forEach(e => {

        amount = parseFloat(amount) + parseFloat(e.productPrice);

    });


    return (
        <Container fluid >

            <h1>
                Cart
</h1>
            <ListGroup>
                {
                    CartItem.map((val) => (
                        <>
                            <ListGroupItem key={val.id} >
                                <Row>
                                    <Col>
                                        <img height={80} src={val.tinyImage} ></img>
                                    </Col>
                                    <Col>
                                        <div>
                                            {val.productName}
                                        </div>
                                        <span>price :-  {val.productPrice}</span>
                                        <button onClick={() => RemoveItem(val)} >Remove</button>
                                    </Col>
                                </Row>
                            </ListGroupItem>
                        </>
                    ))
                }
            </ListGroup>


            {
                CartItem.length >= 1 ? (
                    <>
                        <Card>
                            <CardHeader>
                                Grand total
                            </CardHeader>
                            <CardBody>
                                your amount for {CartItem.length} is {amount}
                            </CardBody>
                            <CardFooter>
                                <button onClick={BuyNow} >Pay here</button>
                            </CardFooter>
                        </Card>
                    </>
                ) : (
                    <h1>cart is empty</h1>
                )
            }
        </Container>
    )
}

export default Cart
