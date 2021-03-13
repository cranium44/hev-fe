import React, { useEffect, useState } from "react";

import "./Admin.css";


// {
//     id: {type: Number, required: true},
//     name: {type: String, required: true},
//     price: {type: Number, required: true},
//     desc: {type: String},
//     pkgSize: {type: String},
// }
const Admin = (props) => {
  const [item, setItem] = useState({});
  const [itemList, setItemList] = useState([]);

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
            desc: brand,
            pkgSize
        })
        console.log(item)      
    }

    useEffect(function () {

    },[])

  return (
    <div className="">
      <form onSubmit={hanldeSubmit}>
        <label for="sno" className="admin__label">
          Serial number:
        </label>
        <input type="text" name="sno" className="admin__input" onChange={e => setSerialNumber(e.target.value)}/>
        <label for="description" className="admin__label">
          Item name:
        </label>
        <input type="text" name="description" className="admin__input" onChange={e => setName(e.target.value)}/>
        <label for="brand" className="admin__label">
          Brand/Code:
        </label>
        <input type="text" name="brand" className="admin__input"  onChange={e => setBrand(e.target.value)}/>
        <label for="pkgSize" className="admin__label">
          Package Size
        </label>
        <input type="text" name="pkgSize" className="admin__input" onChange={e => setSize(e.target.value)}/>
        <label for="price" className="admin__label">
          Unit price
        </label>
        <input type="text" name="price" className="admin__input" onChange={e => setPrice(e.target.value)}/>
        <button type="submit" className="admin__send-btn">Submit</button>
      </form>
    </div>
  );
};

export default Admin;