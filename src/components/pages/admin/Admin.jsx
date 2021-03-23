import React, { useEffect, useState } from "react";

import data from '../../../static/dummy_products.json'
import "./Admin.css";



const Admin = (props) => {
    const [item, setItem] = useState({});
    const [itemList, setItemList] = useState(data.items);

    //fields
    const [serialNumber, setSerialNumber] = useState("");
    const [name, setName] = useState("");
    const [brand, setBrand] = useState("");
    const [pkgSize, setSize] = useState("");
    const [price, setPrice] = useState("");

    const hanldeSubmit = (evt) => {
        evt.preventDefault();
        setItem({
            id: serialNumber,
            name,
            price,
            brand,
            pkgSize,
        });
        setItemList(itemList.concat(item))
    };

    useEffect(() => {
        async function fetchData() {
            const response = await fetch("http://localhost:5000/test");
            const data = await response.json();
            setItemList(data);
            console.log(data);
        }
        fetchData();
    }, []);

    return (
        <div className="admin__container container">
            <div className="admin__item-form col-5">
                <form onSubmit={hanldeSubmit}>
                    <label htmlFor="sno" className="admin__label">
                        Serial number:
                    </label>
                    <input
                        type="text"
                        name="sno"
                        className="admin__input"
                        onChange={(e) => setSerialNumber(e.target.value)}
                    />
                    <label htmlFor="description" className="admin__label">
                        Item name:
                    </label>
                    <input
                        type="text"
                        name="description"
                        className="admin__input"
                        onChange={(e) => setName(e.target.value)}
                    />
                    <label htmlFor="brand" className="admin__label">
                        Brand/Code:
                    </label>
                    <input
                        type="text"
                        name="brand"
                        className="admin__input"
                        onChange={(e) => setBrand(e.target.value)}
                    />
                    <label htmlFor="pkgSize" className="admin__label">
                        Package Size
                    </label>
                    <input
                        type="text"
                        name="pkgSize"
                        className="admin__input"
                        onChange={(e) => setSize(e.target.value)}
                    />
                    <label htmlFor="price" className="admin__label">
                        Unit price
                    </label>
                    <input
                        type="text"
                        name="price"
                        className="admin__input"
                        onChange={(e) => setPrice(e.target.value)}
                    />
                    <button type="submit" className="admin__send-btn">
                        Submit
                    </button>
                </form>
            </div>
            <div className="admin__current-items col-5">
                <h3>Present items</h3>
                <ul>
                    {
                        itemList.map((item => {
                            return(<li>{item.name}</li>)
                        }))
                    }
                </ul>
            </div>
        </div>
    );
};

export default Admin;
