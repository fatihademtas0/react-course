import React from "react";
import "../css/Header.css";
import { CiShoppingBasket } from "react-icons/ci";
import { CiLight } from "react-icons/ci";
import { IoMoon } from "react-icons/io5";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Header() {
    const [theme, setTheme] = useState(false);

    const navigate = useNavigate();

    const changeTheme = () => {
        const root = document.getElementById("root");
        setTheme(!theme);
        if (theme) {
            root.style.backgroundColor = "#fff";
            root.style.color = "black";
        } else {
            root.style.backgroundColor = "#383333";
            root.style.color = "#fff";
        }
    };

    return (
        <div
            style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
            }}
        >
            <div className='flex-row'>
                <img
                    onClick={() => navigate("/")}
                    className='logo'
                    src='../src/images/logo.png'
                    alt=''
                />
                <p onClick={() => navigate("/")} className='logo-text'>
                    INVERIZO
                </p>
            </div>

            <div className='flex-row'>
                <input
                    className='search-input'
                    type='text'
                    placeholder='search...'
                />
                <div>
                    {theme ? (
                        <IoMoon className='header-icon' onClick={changeTheme} />
                    ) : (
                        <CiLight
                            className='header-icon'
                            onClick={changeTheme}
                        />
                    )}
                    <CiShoppingBasket className='header-icon' />
                </div>
            </div>
        </div>
    );
}

export default Header;
