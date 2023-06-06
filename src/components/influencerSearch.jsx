import React, { } from 'react';
import '../styles/influencerSearch.css'


const InfluencerSearch = () => {
    return (
        <div class="header-container">
            <div className="search-container">
                <input type="text" placeholder="Enter additional keywords, categories, topics, bio keywords, etc." />
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10a7 7 0 1 0 14 0a7 7 0 1 0-14 0m18 11l-6-6" />
                </svg>
            </div>
            <div className="dropdown-container">
                <select className="dropdown">
                    <option value="option1">Instagram</option>
                    <option value="option2">Twitter</option>
                    <option value="option3">Youtube</option>
                </select>
                <select className="dropdown">
                    <option value="option1">Option 1</option>
                    <option value="option2">Option 2</option>
                    <option value="option3">Option 3</option>
                </select>
                <select className="dropdown">
                    <option value="option1">Male</option>
                    <option value="option2">Female</option>
                    <option value="option3">All</option>
                </select>
                <select className="dropdown">
                    <option value="option1">Option 1</option>
                    <option value="option2">Option 2</option>
                    <option value="option3">Option 3</option>
                </select>
            </div>
        </div>

    )
}

export default InfluencerSearch