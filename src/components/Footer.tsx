import { Box, Typography } from "@mui/material";


export default function Footer() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Typography
                noWrap
                component="p"
                sx={{ display: { xs: 'none', sm: 'block', color: "white" } }}
            >
                Le premier bien de l'homme c'est la santé!!!
            </Typography>
            <Box sx={{bgcolor:"text.primary", opacity:0.6}}>
                <Typography
                    noWrap
                    component="div"
                    sx={{ display: { xs: 'none', sm: 'block', color: "white" } }}
                >
                    @CopyRight2024 N'DOUFFOU Manda Nazaire
                </Typography>
                <Typography
                    noWrap
                    component="div"
                    sx={{ display: { xs: 'none', sm: 'block', color: "white" } }}
                >
                    Qui sommes nous ?
                </Typography>
                <Typography
                    noWrap
                    component="div"
                    sx={{ display: { xs: 'none', sm: 'block', color: "white" } }}
                >
                    Contacts
                </Typography>
            </Box>
        </Box>
    );
}