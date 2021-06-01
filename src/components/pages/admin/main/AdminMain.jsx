import React, { useEffect, useState } from "react";
import { CloudinaryContext } from "cloudinary-react";
import axios from "axios";

import data from "../../../../static/dummy_products.json";
import { fetchPhotos, openUploadWidget } from "../../../../util/cloudinary_helper";

const AdminMain = (props) => {
    const [item, setItem] = useState({});
    const [itemList, setItemList] = useState(data.items);
    const [categories, setCategories] = useState([]);

    //fields
    const [categoryId, setCategoryId] = useState(0);
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [images, setImages] = useState([]);

    const hanldeSubmit = async (evt) => {
        evt.preventDefault();
        const element = document.getElementById("category");
        setCategoryId(element.options[element.selectedIndex].value);
        setItem({
            name,
            categoryId,
            description,
        });

        try {
            const response = await axios.post(
                "https://hev-backend.herokuapp.com/api/items/",
                item
            );
            const data = await response.data; //await response.json();
            console.log(data);
            setItemList((prev) => prev.concat(data));
        } catch (e) {
            console.log(e);
            alert("A problem occured when adding the item");
        }
    };

    const handleImageUpload = () => {
        // get the first input element with the type of file,
        const imageFile = document.querySelector('input[type="file"]');
        // destructure the files array from the resulting object
        const files = imageFile.files;
        // log the result to the console
        console.log("Image file", files[0]);
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

    const beginUpload = tag => {
        const uploadOptions = {
          cloudName: "cranium47",
          tags: [tag],
          uploadPreset: "upload"
        };
      
        openUploadWidget(uploadOptions, (error, photos) => {
          if (!error) {
            console.log(photos);
            if(photos.event === 'success'){
              setImages([...images, photos.info.public_id])
            }
          } else {
            console.log(error);
          }
        })
      }
      

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
                    {/* <div className="form-group">
                        <label for="img">Select image:</label>
                        <input
                            type="file"
                            id="imgSelect"
                            name="img"
                            accept="image/*"
                        />
                    </div> */}
                    <button onClick={() => beginUpload()}>Upload Image</button>
                    <button
                        type="submit"
                        className="btn-primary btn-black-outline"
                    >
                        Add item
                    </button>
                </form>
                <div>
                    <CloudinaryContext cloudName="cranium47">
                        {images.map((i) => (
                            <img src={i} alt="" />
                        ))}
                    </CloudinaryContext>
                </div>
            </div>
            <div className="admin__current-items col-5">
                <h3>Present items</h3>
                <ul>
                    {itemList.map((item, index) => {
                        return <li key={index}>{item.name}</li>;
                    })}
                </ul>
            </div>
        </div>
    );
};

export default AdminMain;
