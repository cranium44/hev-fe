import React, {useEffect, useState} from "react";
import {Card} from 'react-bootstrap'
import {Grid} from '@material-ui/core'

import "./OrderPage.css";

const OrderPage = (pops) => {
    const [items, setItems] = useState([])
    useEffect(function () {
        const fetchData = async () => {
            try{
                const response = await fetch("https://hev-backend.herokuapp.com/api/items")
                const data = await response.json()
                setItems(data)
            }catch(e){
                alert(e)
            }
        }
        fetchData()
    },[])

    return (
        <div className="container-fluid">
            <div className="order__main-content">
                <Grid container spacing="2" justify="space-evenly">
                {
                    items.map((item, index)=>{
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
                                    <div className="item__card-control">
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
