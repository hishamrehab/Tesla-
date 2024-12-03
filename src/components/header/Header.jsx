import React from 'react'
import { useNavigate } from 'react-router-dom'

const headerElements = [
    { label: 'TESLA', route: "/" },
    { label: "Model_S", route: 'model_s' },
    { label: "Model_X", route: 'model_x' },
    { label: "Cybertruck", route: 'cybertruck' },
    { label: "Menu", route: null },
]

const Header = () => {
    const navigate = useNavigate();

    return (
        <nav>
            <ul>
                {headerElements.map(({ label, route }) => {
                    return (
                        <li key={label} onClick={() => {
                            if (!(label === 'Menu')) {
                                navigate(route);
                            }
                        }}  >
                            {label}
                        </li>
                    )
                })}
            </ul>
        </nav >
    )
}

export default Header
