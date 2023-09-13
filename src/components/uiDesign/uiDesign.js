import React from 'react';
import UiDesignBlock from "./uiDesignBlock";
import {Box, Grid} from "@mui/material";
import {info} from "../../info/Info";

export default function UiDesign() {
    return (
        <Box>
            <Grid container display={'flex'} justifyContent={'center'}>
                {info.uiDesign.map((project, index) => (
                   <Grid item xs={12} md={3.2} key={index}>
                       <UiDesignBlock image={project.image} live={project.live} source={project.source} title={project.title} />
                   </Grid>
                ))}
            </Grid>
        </Box>
    );
};