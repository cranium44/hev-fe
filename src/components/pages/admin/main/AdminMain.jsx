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

    const hanldeSubmit = async (evt) => {
        evt.preventDefault();
        const element = document.getElementById("category");
        setCategoryId(element.options[element.selectedIndex].value);
        setItem({
            name,
            categoryId,
            description,
        });
        const response = await fetch(
            "https://hev-backend.herokuapp.com/api/items/",
            {
                method: "POST",
                cache: "no-cache",
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify(item),
            }
        );

        const data = await response.json();
        console.log(data);
        setItemList((prev) => prev.concat(data));
    };

    useEffect(() => {
        async function fetchData() {
            const response = await fetch(
                "https://hev-backend.herokuapp.com/api/items/"
            );
            const data = await response.json();
            setItemList(data);
            console.log(data);
        }
        fetchData();
    }, []);

    useEffect(() => {
        async function fetchCategories() {
            const response = await fetch(
                "https://hev-backend.herokuapp.com/api/category/"
            );
            const data = await response.json();
            setCategories(data);
        }
        fetchCategories();
    }, []);

    return (
        <div className="admin__container container">
            <div className="admin__item-form col-5">
                <form onSubmit={hanldeSubmit}>
                    <div className="form-group">
                        <label htmlFor="name" className="form-control-label">
                            Item name:
                        </label>
                        <input
                            type="text"
                            name="name"
                            className="form-control"
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label
                            htmlFor="category"
                            className="form-control-label"
                        >
                            Category:
                        </label>
                        <select
                            name="category"
                            id="category"
                            className="form-control"
                        >
                            {categories.length === 0 ? (
                                <option>Yet to load</option>
                            ) : (
                                categories.map((category, index) => {
                                    return (
                                        <option value={category.id} key={index}>
                                            {category.name}
                                        </option>
                                    );
                                })
                            )}
                        </select>
                    </div>
                    <div className="form-group">
                        <label
                            htmlFor="description"
                            className="form-control-label"
                        >
                            Item Description:
                        </label>
                        <input
                            type="text"
                            name="description"
                            className="form-control"
                            onChange={(e) => setDescription(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label for="img">Select image:</label>
                        <input
                            type="file"
                            id="img"
                            name="img"
                            accept="image/*"
                        />
                    </div>
                    <button
                        type="submit"
                        className="btn-primary btn-black-outline"
                    >
                        Add item
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
