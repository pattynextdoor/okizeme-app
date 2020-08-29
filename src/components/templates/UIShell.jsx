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

    ExpandableTile,
    TileAboveTheFoldContent,
    TileBelowTheFoldContent
} from 'carbon-components-react'
import {
    Home32,
    Search20,
    AppSwitcher20
} from '@carbon/icons-react'

export default function UIShell() {

    const unameStyle = {
        textAlign: "center",
        marginTop: "5%",
    }

    const tileImgStyle = {
        margin: "0 auto",
        display: "block",
        borderRadius: "50%",
        width: "75px"
    }

    return(
        <Header aria-label="Okizeme" > 
            <HeaderName href="#" prefix="Okizeme"> 
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
                                    onclick={console.log('search')}> 
                    <Search20/>
                </HeaderGlobalAction>
                <HeaderGlobalAction aria-label="Right Nav"
                                    onclick={console.log('right nav')}> 
                    <AppSwitcher20/>
                </HeaderGlobalAction>
            </HeaderGlobalBar>

            <SideNav>
                <SideNavItems>

                    <ExpandableTile>
                        <TileAboveTheFoldContent>
                            <img style={tileImgStyle}
                                src="greninja.jpg"/>
                        </TileAboveTheFoldContent>
                        <TileBelowTheFoldContent>
                            <h4 style={unameStyle}>Patrick Tumbucon</h4>
                        </TileBelowTheFoldContent>
                    </ExpandableTile>

                    <SideNavMenu title="My Communities">
                        <SideNavMenuItem>Oolong Wonderland</SideNavMenuItem>
                        <SideNavMenuItem>Pattynextdoor's Cafe</SideNavMenuItem>
                        <SideNavMenuItem>Guccicrocs Wonderland</SideNavMenuItem>
                    </SideNavMenu>

                    <SideNavMenu title="My Forums">
                        <SideNavMenuItem>Smash Ultimate - Greninja</SideNavMenuItem>
                        <SideNavMenuItem>Mortal Kombat 11 - Fundamentals</SideNavMenuItem>
                    </SideNavMenu>
                </SideNavItems>
                
            </SideNav>
        </Header>
    )
}