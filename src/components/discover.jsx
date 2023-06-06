import React from 'react'
import { Box } from '@mui/material';
import Gender from './gender.jsx'
import '../styles/influencerSearch.css'


const Discover = () => {
    return (
        <>
            <div class="header-container">
                <div className="search-container">
                    <input type="text" placeholder="Enter additional keywords, categories, topics, bio keywords, etc." />
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10a7 7 0 1 0 14 0a7 7 0 1 0-14 0m18 11l-6-6" />
                    </svg>
                </div>
                <br></br>
                <form>
                    <Box sx={{display: 'inline-flex',alignItems: 'left', width: '100%' }}>
                        <div style={{ width: '100%' }}>
                            <Gender />
                        </div>
                    </Box>
                </form>
            </div>
        </>
    )
}

export default Discover