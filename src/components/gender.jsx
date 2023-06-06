import React, { useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { ListItemIcon, ListItemText } from '@mui/material';
import { Box, TextField, Button } from '@mui/material';
import { FormControlLabel, Checkbox } from '@mui/material';




const Gender = () => {

    const [gender, setGender] = useState('');

    const handleGenderChange = (event) => {
        setGender(event.target.value);
    };



    const [platform, setPlatform] = useState('');

    const handlePlatformChange = (event) => {
        setPlatform(event.target.value);
    };

    const [minAge, setAgeMinValue] = useState('');
    const [maxAge, setAgeMaxValue] = useState('');

    const handleAgeMinValueChange = (event) => {
        setAgeMinValue(event.target.value);
    };

    const handleAgeMaxValueChange = (event) => {
        setAgeMaxValue(event.target.value);
    };

    const handleAgeResetClick = () => {
        setAgeMinValue('');
        setAgeMaxValue('');
    };

    const [minfl, setFlMinValue] = useState('');
    const [maxfl, setFlMaxValue] = useState('');

    const handleFlMinValueChange = (event) => {
        setFlMinValue(event.target.value);
    };

    const handleFlMaxValueChange = (event) => {
        setFlMaxValue(event.target.value);
    };

    const handleFlResetClick = () => {
        setFlMinValue('');
        setFlMaxValue('');
    };

    const [checkedItems, setCheckedItems] = useState({});
    const [selectAll, setSelectAll] = useState(false);

    const handleCheckboxChange = (event) => {
        setCheckedItems({ ...checkedItems, [event.target.name]: event.target.checked });
    };

    const handleResetClick = () => {
        setCheckedItems({});
        setSelectAll(false);
    };

    const handleSelectAllChange = (event) => {
        setSelectAll(event.target.checked);
        const newCheckedItems = {};
        categories.forEach((category) => {
            newCheckedItems[category] = event.target.checked;
        });
        setCheckedItems(newCheckedItems);
    };

    const categories = [
        'Food',
        'Fashion & Beauty',
        'Lifestyle',
        'Photography',
        'Make-up',
        'Fitness',
        'Health',
        'Entertainment',
        'Gadgets & Tech',
        'Parenting',
        'Decor',
        'Travel',
        'Art',
        'Gaming',
        'Sports',
    ];

    const checkboxes = categories.map((category) => (
        <FormControlLabel
            key={category}
            control={
                <Checkbox
                    checked={checkedItems[category] || false}
                    onChange={handleCheckboxChange}
                    name={category}
                    sx={{ width: '50px',color:'#4c3dff' }}
                />
            }
            label={category}
            sx={{ width: '200px',}}
        />
    ));

    return (
        <div>
            <FormControl
                sx={{
                    m: 1,
                    minWidth: 120,
                    '& .MuiSelect-select': {
                        backgroundColor: 'white',
                        color: '#354682',
                        '&:hover': {
                            color: '#4c3dff',
                        },
                    },
                }}
                size="small"
            >
                <InputLabel id="demo-select-small-label">Gender</InputLabel>
                <Select
                    labelId="demo-select-small-label"
                    id="demo-select-small"
                    value={gender}
                    label="Gender"
                    onChange={handleGenderChange}
                >
                    <MenuItem value={10}>All</MenuItem>
                    <MenuItem value={20}>Male</MenuItem>
                    <MenuItem value={30}>Female</MenuItem>
                </Select>
            </FormControl>
            <FormControl
                sx={{
                    m: 1,
                    minWidth: 120,
                    '& .MuiSelect-select': {
                        backgroundColor: 'white',
                        color: '#354682',
                        '&:hover': {
                            color: '#4c3dff',
                        },
                    },
                    '& .MuiMenuItem-root': {
                        color: '#354682',
                    },
                    '& .MuiListItemText-root': {
                        color: '#354682',
                    },
                    '& .MuiListItemIcon-root': {
                        color: '#354682',
                    },
                }}
                size="small"
            >
                <InputLabel id="demo-select-small-label">Platform</InputLabel>
                <Select
                    labelId="demo-select-small-label"
                    id="demo-select-small"
                    value={platform}
                    label="Platform"
                    onChange={handlePlatformChange}
                    renderValue={(value) => value || 'Platform'}
                >

                    <MenuItem value="Instagram" onClick={handlePlatformChange}>
                        <ListItemIcon sx={{ color: '#354682' }}>
                            <InstagramIcon />
                        </ListItemIcon>
                        <ListItemText primary="Instagram" sx={{ color: '#354682' }} />
                    </MenuItem>
                    <MenuItem value="YouTube" onClick={handlePlatformChange}>
                        <ListItemIcon sx={{ color: '#354682' }}>
                            <YouTubeIcon />
                        </ListItemIcon>
                        <ListItemText primary="YouTube" sx={{ color: '#354682' }} />
                    </MenuItem>
                </Select>
            </FormControl>


            <Box sx={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                    <Box sx={{ marginRight: 0, marginLeft: 2, bgcolor: 'white', width: 200, padding: 1, borderRadius: 1, marginTop: 1 }}>
                        <InputLabel sx={{ color: '#354682' }}>Age</InputLabel>
                    </Box>
                    <Button variant="contained" onClick={handleAgeResetClick} sx={{ bgcolor: '#4c3dff', marginTop: 1 }}>
                        Reset
                    </Button>
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        marginTop: 2.5,
                        marginLeft: 2,
                    }}
                >
                    <TextField
                        id="min-value-input"
                        label="Min Age"
                        value={minAge}
                        onChange={handleAgeMinValueChange}
                        variant="filled"
                        type="number"
                        sx={{
                            width: 130,
                            marginRight: 1,
                            '& input': {
                                height: 10,
                                backgroundColor: 'white',
                                borderRadius: 1,
                                color: '#354682'
                            },
                            '& label': {
                                marginTop: -0.5,
                                backgroundColor: 'white',
                                borderRadius: 1,
                                color: '#354682'
                            },
                        }}
                    />
                    <Box sx={{ color: 'white' }}>to</Box>
                    <TextField
                        id="max-value-input"
                        label="Max Age"
                        value={maxAge}
                        onChange={handleAgeMaxValueChange}
                        variant="filled"
                        type="number"
                        sx={{
                            width: 130,
                            marginLeft: 1,
                            '& input': {
                                height: 10,
                                backgroundColor: 'white',
                                borderRadius: 1,
                                color: '#354682'
                            },
                            '& label': {
                                marginTop: -0.5,
                                backgroundColor: 'white',
                                borderRadius: 1,
                                color: '#354682'
                            },
                        }}
                    />
                </Box>
            </Box>


            {/* FOLLOWERS FOLLOWERS FOLLOWERS  */}
            <Box sx={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                    <Box sx={{ marginRight: 0, marginLeft: 2, marginTop: 1, bgcolor: 'white', width: 340, padding: 1, borderRadius: 1 }}>
                        <InputLabel sx={{ color: '#354682' }}>Followers</InputLabel>
                    </Box>
                    <Button variant="contained" onClick={handleFlResetClick} sx={{ marginTop: 1, bgcolor: '#4c3dff' }}>
                        Reset
                    </Button>
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        marginTop: 2.5,
                        marginLeft: 2,
                    }}
                >
                    <TextField
                        id="min-value-input"
                        label="Min Followers"
                        value={minfl}
                        onChange={handleFlMinValueChange}
                        variant="filled"
                        type="number"
                        sx={{
                            width: 200,
                            marginRight: 1,
                            '& input': {
                                height: 10,
                                backgroundColor: 'white',
                                borderRadius: 1,
                                color: '#354682'
                            },
                            '& label': {
                                marginTop: -0.5,
                                backgroundColor: 'white',
                                borderRadius: 1,
                                color: '#354682'
                            }
                        }}
                    />
                    <Box sx={{ color: 'white' }}>to</Box>
                    <TextField
                        id="max-value-input"
                        label="Max Followers"
                        value={maxfl}
                        onChange={handleFlMaxValueChange}
                        variant="filled"
                        type="number"
                        sx={{
                            width: 200,
                            marginLeft: 1,
                            '& input': {
                                height: 10,
                                backgroundColor: 'white',
                                borderRadius: 1,
                                color: '#354682'
                            },
                            '& label': {
                                marginTop: -0.5,
                                backgroundColor: 'white',
                                borderRadius: 1,
                                color: '#354682'
                            }
                        }}
                    />
                </Box>
            </Box>

            {/* CATEGORIES CATEGORIES  */}
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', width: '100%', marginTop: 2, marginLeft: 1.5 }}>
                <Box sx={{ color: 'white' }}><label>Label Categories</label></Box>
                <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginLeft: 0.5 }}>
                    <FormControlLabel
                        control={<Checkbox checked={selectAll} onChange={handleSelectAllChange} sx={{color:'#4c3dff'}}/>}
                        label="Select All Categories" sx={{color: 'white'}}
                    />
                    <Button variant="contained" onClick={handleResetClick} sx={{bgcolor:'#4c3dff'}}>
                        Reset
                    </Button>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', alignItems: 'center', marginTop: 2, color: 'white' }}>
                    {checkboxes}
                </Box>
            </Box>
        </div >
    );
}

export default Gender