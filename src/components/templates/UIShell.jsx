import { 
    Header, 
    HeaderName,
    HeaderNavigation,
    HeaderMenu,
    HeaderMenuItem,
    HeaderGlobalBar,
    HeaderGlobalAction,

    SideNav,
    SideNavItems,
    SideNavMenu,
    SideNavMenuItem,
    SideNavLink,

    ClickableTile,
    TileAboveTheFoldContent,
    TileBelowTheFoldContent
} from 'carbon-components-react'

import {
    Home32,
    Search20,
    AppSwitcher20
} from '@carbon/icons-react'

import styles from '../../styles/UIShell.module.scss'

import anime from 'animejs'

export default function UIShell() {

    const unameStyle = {
        textAlign: "center",
        marginTop: "5%",
    }

    const tileImgStyle = {
        margin: "0 auto",
        display: "block",
        borderRadius: "50%",
        boxShadow: "0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)",
        width: "75px"
    }

    const componentStyle = {
        marginBottom: "5%"
    }

    return(
        <Header aria-label="Okizeme"
                style={componentStyle} > 
            <HeaderName href="/" prefix="Okizeme"> 
                [Platform]
            </HeaderName>
            <HeaderNavigation>
                <HeaderMenuItem>
                    Link 1
                </HeaderMenuItem>
                <HeaderMenuItem>
                    Link 2
                </HeaderMenuItem>
                <HeaderMenuItem>
                    Link 3
                </HeaderMenuItem>
            </HeaderNavigation>
            <HeaderGlobalBar>
                <HeaderGlobalAction aria-label="Search"
                                    onclick={console.log('search clicked')}> 
                    <Search20/>
                </HeaderGlobalAction>
                <HeaderGlobalAction aria-label="Right Nav"
                                    onclick={console.log('right nav clicked')}> 
                    <AppSwitcher20/>
                </HeaderGlobalAction>
            </HeaderGlobalBar>

            <SideNav className={styles.sideNav}>
                <SideNavItems>

                    <ClickableTile>
                        <TileAboveTheFoldContent>
                            <img style={tileImgStyle}
                                src="greninja.jpg"/>

                            <p style={unameStyle}>pattynextdoor</p>
                        </TileAboveTheFoldContent>
                        <TileBelowTheFoldContent>
                        </TileBelowTheFoldContent>
                    </ClickableTile>

                    <SideNavMenu title="Communities">
                        <SideNavMenuItem>Oolong Wonderland</SideNavMenuItem>
                        <SideNavMenuItem>Pattynextdoor's Cafe</SideNavMenuItem>
                        <SideNavMenuItem>Guccicrocs Wonderland</SideNavMenuItem>
                    </SideNavMenu>

                    <SideNavMenu title="Forums">
                        <SideNavMenuItem>Smash Ultimate - Greninja</SideNavMenuItem>
                        <SideNavMenuItem>Mortal Kombat 11 - Fundamentals</SideNavMenuItem>
                    </SideNavMenu>
                </SideNavItems>
                
            </SideNav>
        </Header>
    )
}