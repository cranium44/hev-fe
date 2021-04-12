import React, { useEffect, useState } from "react";

import data from "../../../../static/dummy_products.json";

const AdminMain = (props) => {
    const [item, setItem] = useState({});
    const [itemList, setItemList] = useState(data.items);
    const [categories, setCategories] = useState([]);

    //fields
    const [categoryId, setCategoryId] = useState(0);
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");


    const hanldeSubmit = (evt) => {
        evt.preventDefault();
        setItem({
            
            name,
        });
        setItemList(itemList.concat(item));
    };

    useEffect(() => {
        async function fetchData() {
            const response = await fetch("https://hev-backend.herokuapp.com/api/items/");
            const data = await response.json();
            setItemList(data);
            console.log(data);
        }
        fetchData();
    }, [itemList]);

    useEffect(() => {
        async function fetchCategories(){
            const response = await fetch("https://hev-backend.herokuapp.com/api/category/");
            const data = await response.json();
            setCategories(data);
        }
        fetchCategories()
    }, [categories])

    return (
        <div className="admin__container container">
            <div className="admin__item-form col-5">
                <form onSubmit={hanldeSubmit}>
                    <div className="form-group">
                        <label htmlFor="description" className="form-control-label">
                            Item name:
                        </label>
                        <input
                            type="text"
                            name="description"
                            className="form-control"
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="category" className="form-control-label">
                            Category:
                        </label>
                        <select>
                            {
                                categories.map((category, index) => {
                                    return(
                                        <option value={category.id}>{category.name}</option>
                                    )
                                })
                            }
                        </select>
                    </div>
                    <button type="submit" className="admin__send-btn">
                        Submit
                    </button>
                </form>
            </div>
            <div className="admin__current-items col-5">
                <h3>Present items</h3>
                <ul>
                    {itemList.map((item) => {
                        return <li>{item.name}</li>;
                    })}
                </ul>
            </div>
        </div>
    );
};

export default AdminMain;
