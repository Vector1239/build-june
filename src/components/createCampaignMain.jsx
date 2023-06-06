import React, { useEffect, useState } from 'react'
import '../styles/createCampaignMain.css'
import CampaignsNo from './CampaignsNo.jsx';

const CreateCampaignMain = () => {
    const [selectedButton, setSelectedButton] = useState('All');
    const [searchQuery, setSearchQuery] = useState('');
    const [sortBy, setSortBy] = useState('All');

    useEffect(() => {
        setSelectedButton('All');
    }, []);

    const handleButtonClick = (event) => {
        setSelectedButton(event.target.value);
    };


    const handleSearchQueryChange = (event) => {
        setSearchQuery(event.target.value);
    };

    const handleSortByChange = (event) => {
        setSortBy(event.target.value);
    };

    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '20px' }}>
                <h1 style={{ color: '#112148' }}>Campaigns</h1>
                <button className='btn1'>
                    <span className="btn1-icon"></span>
                    New Campaign
                </button>
            </div>
            <hr style={{ borderColor: 'rgba(51, 62, 160, 0.75)' }}></hr>
            <div className='CampaignMainPage'>
                <div class="CMbutton-container">
                    <div class="CMbutton-wrapper">
                        <button className={selectedButton === 'All' ? 'selected' : ''} value="All" onClick={handleButtonClick}>All</button>
                        <button className={selectedButton === 'Active' ? 'selected' : ''} value="Active" onClick={handleButtonClick}>Active</button>
                        <button className={selectedButton === 'Draft' ? 'selected' : ''} value="Draft" onClick={handleButtonClick}>Draft</button>
                        <button className={selectedButton === 'Under Review' ? 'selected' : ''} value="Under Review" onClick={handleButtonClick}>Under Review</button>
                        <button className={selectedButton === 'Complete' ? 'selected' : ''} value="Complete" onClick={handleButtonClick}>Complete</button>
                    </div>
                </div>
                <div className='CMTableS'>
                    <div className="search-bar">
                        <input type="text" placeholder="Search" value={searchQuery} onChange={handleSearchQueryChange} />
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                            <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10a7 7 0 1 0 14 0a7 7 0 1 0-14 0m18 11l-6-6" />
                        </svg>
                    </div>
                    <div className="sort-by">
                        <select value={sortBy} onChange={handleSortByChange}>
                            <option value="" disabled>Sort By</option>
                            <option value="Brand">Brand</option>
                            <option value="Campaign">Campaign</option>
                            <option value="Platform">Platform</option>
                            <option value="Status">Status</option>
                            <option value="Created On">Created On</option>
                        </select>
                    </div>
                </div>
               <CampaignsNo/>
               No More Results
            </div>
        </div>
    )
}

export default CreateCampaignMain