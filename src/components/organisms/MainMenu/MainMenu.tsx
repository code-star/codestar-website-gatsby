import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from "@material-ui/core/useMediaQuery";

// local imports
import BrowserMenu from '../../molecules/BrowserMenu/BrowserMenu';
import MobileMenu from '../../molecules/MobileMenu/MobileMenu';

//interfaces
import { IMenuProps } from '../../../types/IMenuProps';

export default function MainMenu(props: IMenuProps): JSX.Element {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("xs"));

    return (<>
        {
            isMobile ?
                <MobileMenu sections={props.sections} />
                :
                <BrowserMenu sections={props.sections} />
        }
    </>)
}
