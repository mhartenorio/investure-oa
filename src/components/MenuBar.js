import { Box, Grid } from "@mui/material"
import investureLogo from '../assets/investure-logo.svg'

// This component renders the menu bar at the top of the screen
export const MenuBar = () => {
    return (
        <Grid 
            container
            sx={{
                height: "65px",
                boxShadow: "0 0 5px 0 rgba(0, 0, 0, 0.1)"
            }}
            alignItems="center"
            paddingLeft={{xs: 4, sm: 8, md: 16}}
            justifyContent="space-between"
        >
            {/* This is for the Investure logo on the left. */}
            <a href="https://investure.com">
                <img src={investureLogo} style={{height: "26px"}}/>
            </a>
            {/* This is for the Dashboard button on the right, aim to mimic the Investure design. */}
            <Box sx={{
                backgroundColor: '#102C58', 
                color: 'white',
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                padding: "0px 40px",
                cursor: 'pointer',
                '&:hover': {
                    boxShadow: 'inset 0 -8px 0 #E73E37'
                },
                fontFamily: 'barlow'
            }}>
                Dashboard
            </Box>
        </Grid>
    )
}