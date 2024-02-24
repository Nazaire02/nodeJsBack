import { Box, Typography } from "@mui/material";


export default function MaintTitle(props:any) {
    return (
        <Typography
        variant="h4"
        noWrap
        component="div"
        sx={{ display: { xs: 'none', sm: 'block', color: "grey", textAlign: "center", fontSize: 20, fontWeight: "bold", margin: 10 } }}
    >
        {props.title}
    </Typography>
    );
}