import React from 'react';
import { useNavigate } from 'react-router-dom'
const Header = () => {
    const navigate = useNavigate()
    return (
        <header>
            <h1 onClick={() => navigate('./')}  style={{cursor: 'pointer'}}> HRNET</h1>
        </header>
    );
};

export default Header;