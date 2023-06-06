import React from 'react'
import '../styles/CampaignsNo.css'

const CampaignsNo = () => {
    return (
        <div className='table-wrapper'>
            <table className='CampaignsNo'>
                <thead>
                    <tr>
                        <th>Brand</th>
                        <th>Campaign</th>
                        <th>Platform</th>
                        <th>Status</th>
                        <th>Created On</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <img src="https://via.placeholder.com/50x50" alt="Brand logo" />
                            <p>Brand Name</p>
                        </td>
                        <td>Campaign Name</td>
                        <td>Platform Name</td>
                        <td>Status</td>
                        <td>Date</td>
                    </tr>
                    <tr>
                        <td>
                            <img src="https://via.placeholder.com/50x50" alt="Brand logo" />
                            <p>Brand Name</p>
                        </td>
                        <td>Campaign Name</td>
                        <td>Platform Name</td>
                        <td>Status</td>
                        <td>Date</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default CampaignsNo