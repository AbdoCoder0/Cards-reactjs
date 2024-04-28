import React, { useState } from 'react';
import userData from './Data';
import UserProfileCard from './UserProfileCard ';
import '../style/gallerie.css';
import { Col, Container, Row } from 'reactstrap';

export default function Gallerie() {
    const [userCard, setUserCard] = useState(userData);
    const [showDetails, setShowDetails] = useState(false);

    const handleSearch = (e) => {
        const searchCard = e.target.value;
        const searchFilter = userData.filter((item) =>
            item.name.toLowerCase().includes(searchCard.toLowerCase())
        );
        setUserCard(searchFilter);
    };

    const toggleDetails = () => {
        setShowDetails(!showDetails);
    };

    return (
        <div style={{ display: 'flex' }}>
            <Row>
                <Col lg="9">
                    <div className="user-cards">
                        {userCard.map((user) => (
                            <UserProfileCard key={user.id} user={user} showDetails={showDetails} />
                        ))}
                    </div>
                </Col>

                <Col lg="3" className="filtrage">
                    <h2>Filter</h2>
                    <hr />
                    <div className="button-container">
                        <button onClick={toggleDetails} role="button" className="button-name">
                            {showDetails ? 'Hide Details' : 'Show Details'}
                        </button>
                    </div>
                    <div className="search">
                        <svg className="icon" aria-hidden="true" viewBox="0 0 24 24">
                            <g>
                                <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
                            </g>
                        </svg>
                        <input placeholder="Search" type="search" className="input" onChange={handleSearch} />
                    </div>
                </Col>
            </Row>
        </div>
    );
}
