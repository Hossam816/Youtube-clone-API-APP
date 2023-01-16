import React from 'react';
import { Box, CardContent, CardMedia, Typography } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { Link } from 'react-router-dom';
import { demoProfilePicture } from '../utils/constants';

function ChannelCard({ ChannelDetail, marginTop }) {
    return (
        <Box sx={ { boxShadow: 'none', borderRadius: '20px', display: 'flex', justifyContent: 'center', alignItems: 'center', width: { xs: '356px', md: '320px' }, height: '326px', margin: 'auto', marginTop: marginTop, } }>

            <Link to={ `/channel/${ChannelDetail?.id?.channelId}` }>

                <CardContent sx={ { display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center', color: '#fff' } }>

                    <CardMedia image={ ChannelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture }
                        alt={ ChannelDetail?.snippt?.title }
                        sx={ { borderRadius: '50%', height: '180px', width: '180px', mb: 2, border: '1px solid #e3e3e3' } }
                    />

                    <Typography variant='h6'>
                        { ChannelDetail?.snippet?.title }{ ' ' }
                        <CheckCircleIcon sx={ { fontSize: 14, color: 'gray', ml: '5px' } } />
                    </Typography>

                    { ChannelDetail?.statistics?.subscriberCount && (
                        <Typography sx={ { fontSize: '15px', fontWeight: 500, color: 'gray' } }>
                            { parseInt(ChannelDetail?.statistics?.subscriberCount).toLocaleString('en-US') } Subscibers
                        </Typography>
                    ) }
                </CardContent>
            </Link>
        </Box>
    );
}

export default ChannelCard;