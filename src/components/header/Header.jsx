import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import "./Header.css"


export const navElements = [
    { label: 'TESLA', route: "", style: { marginRight: 'auto' } },
    { label: "Model S", route: 'model_s' },
    { label: "Model_X", route: 'model_x' },
    { label: "Cybertruck", route: 'cybertruck' },
    { label: "Menu", route: null, style: { marginLeft: 'auto' } },
]

const Header = ({ setShowSidebar }) => {
    const navigate = useNavigate();

    return (
        <>
            <nav>
                <ul className='headerList'>
                    {navElements.map(({ label, route, style = {} }) => {
                        return (
                            <li
                                style={style}
                                key={label}
                                onClick={() => {
                                    if (label === 'Menu') {
                                        setShowSidebar(true);
                                    }
                                    else {
                                        navigate(`/${route}`);
                                    }
                                }
                                }>
                                {label}
                            </li>
                        )
                    })}
                </ul>
            </nav>
        </>
    )
}

export default Header;
