import React from "react";
import {Card} from 'react-bootstrap'
import {Grid} from '@material-ui/core'

import data from "../../../static/dummy_products.json";
import "./OrderPage.css";

const OrderPage = (pops) => {
    return (
        <div className="container-fluid">
            <div className="order__main-content">
                <Grid container spacing="2" justify="space-evenly">
                {
                    data.items.map((item, index)=>{
                        return(
                            <Grid item xs={"auto"} key={index}>
                                <Card style={{ width: '18rem' }} className="text-center">
                                    <Card.Img variant="top" src="https://picsum.photos/200"/>
                                    <Card.Title as="h4">{item.name}</Card.Title>
                                    <Card.Text>
                                        {
                                            item.brand
                                        }
                                    </Card.Text>
                                    <Card.Subtitle>
                                        {`\u20A6 ${item.price}`}
                                    </Card.Subtitle>
                                    <div className="">
                                        <img className="add-icon" src="/images/add-cart-50.png" alt="icon"/>
                                    </div>
                                </Card>
                            </Grid>
                        )
                    })
                }
                </Grid>
            </div>
        </div>
    );
};

export default OrderPage;
