import React from 'react';
import { Link } from 'react-router-dom';

class Layout extends React.Component {
    render() {
        return (
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
            </nav>
        );
    }
}

export default Layout;
