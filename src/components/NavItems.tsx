import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';





export default function NavItems() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" sx={{ bgcolor: 'white' }}>
                <Box sx={{ flexGrow: 1, display:'flex', flexDirection:'row', justifyContent:'space-between', marginInline:3 }}>
                    <Typography
                        noWrap
                        component="div"
                        sx={{ display: { xs: 'none', sm: 'block', color: "grey" } }}
                    >
                        <Link to="Beaute/consmetique" >Beauté<br />& Cosmétiques</Link>
                    </Typography>
                    <Typography
                        noWrap
                        component="div"
                        sx={{ display: { xs: 'none', sm: 'block', color: "grey" } }}
                    >
                        <Link to="soin/bien_etre" >Soins<br />& Bien etre</Link>
                    </Typography>
                    <Typography
                        noWrap
                        component="div"
                        sx={{ display: { xs: 'none', sm: 'block', color: "grey" } }}
                    >
                        <Link to="medicament/traitement" >Médicaments<br />& Traitements</Link>
                    </Typography>
                    <Typography
                        noWrap
                        component="div"
                        sx={{ display: { xs: 'none', sm: 'block', color: "grey" } }}
                    >
                        <Link to="vitamine/supplement" >Vitamines<br />& Suppléments</Link>
                    </Typography>
                    <Typography
                        noWrap
                        component="div"
                        sx={{ display: { xs: 'none', sm: 'block', color: "grey" } }}
                    >
                        <Link to="animaux/vegetaux" >Animaux<br />& Végétaux</Link>
                    </Typography>
                    <Typography
                        noWrap
                        component="div"
                        sx={{ display: { xs: 'none', sm: 'block', color: "grey" } }}
                    >
                        <Link to="pharmacie/garde" >Pharmacie de<br /> garde</Link>
                    </Typography>
                </Box>
            </AppBar>
        </Box>
    );
}