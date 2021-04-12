import React, { useEffect, useState } from "react";
import Login from "./login/Login";
import AdminMain from "./main/AdminMain";

import data from "../../../static/dummy_products.json";
import "./Admin.css";

const Admin = (props) => {
    const [isLoggedIn, setIsLoggedIn] = useState(true); //change to false

    return (
        <div className="">
            {isLoggedIn ? (
                <AdminMain />
            ) : (
                <Login isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
            )}
        </div>
    );
};

export default Admin;
