import React from 'react';
import MenuIcon from "@material-ui/icons/Menu";
import { Button, IconButton, List, ListItem, Typography } from '@material-ui/core';
import { StaticImage } from "gatsby-plugin-image";

//interfaces
import Section from '../../../types/section';
import { Drawer } from '@material-ui/core';
import { ListItemText } from '@material-ui/core';
import useStyles from '../Header/Header.styles';

export interface IMobileMenuProps {
    sections: Section[];
}

export default function MobileMenu(props: IMobileMenuProps): JSX.Element {

    const [state, setState] = React.useState(false);

    const toggleDrawer = (open: boolean) => (
        event: React.KeyboardEvent | React.MouseEvent,
    ) => {
        if (
            event.type === 'keydown' &&
            ((event as React.KeyboardEvent).key === 'Tab' ||
                (event as React.KeyboardEvent).key === 'Shift')
        ) {
            return;
        }

        setState(open);
    };

    const classes = useStyles();

    return (
        <div>
            <Drawer anchor="top" open={state} onClose={() => setState(false)}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Typography
                        component="h2"
                        variant="h5"
                        color="inherit"
                        style={{ padding: '10px' }}
                        noWrap
                        className={classes.toolbarTitle}
                    >
                        <StaticImage
                            alt={`Mobile menu Logo`}
                            src="../../../images/codestar_logo_dark.svg"
                        />
                    </Typography>
                    <List component="nav" aria-label="secondary mailbox folders" >
                        <>{
                            props.sections.map(section => <>
                                <ListItem button>
                                    <Button href={section.url}>{section.title}</Button>
                                </ListItem>
                            </>)
                        }</>

                    </List>
                </div>
            </Drawer>
            <IconButton
                key="iconButton"
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={toggleDrawer(true)}
            >
                <MenuIcon key="menuIButton" />
            </IconButton>
        </div>
    )
}
