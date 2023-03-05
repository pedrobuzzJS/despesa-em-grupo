import React, { PropsWithChildren } from "react";
import { Exit } from "styled-icons/boxicons-regular";
import { Menu } from "styled-icons/entypo";
import { useAuth } from "../../../context/authContext";
import { useMenu } from "../../../context/menuContext";
import { LinkMenu } from "../../../model/LinkMenu";
import { SideBarItem } from "../SideBarItem/SideBarItem";
import {    SideBar,
            Conteudo,
            TopMenu,
            ExitSection,
            HambugerMenu,
            SideBarItemList
} from "./style";

export const SideBarLayout: React.FC<PropsWithChildren> = ({children}) => {
    const { isSideBarOpen, openSideBar, closeSideBar, fetechedMenu, toggleSideBar, superOpenSideBar } = useMenu();
    const { signOut } = useAuth();

    let LinksTratados: LinkMenu[] = [];

    const buildChildrenLinks = (linkPai: LinkMenu, linkList: LinkMenu[]) => {
        const indexLinkPai = linkList.findIndex((link => link.parent_id === linkPai.id));
        const linkFilhosRetorno: LinkMenu[] = [];
        if (indexLinkPai !== 1) {
            linkList.forEach((link, index) => {
                if (link.parent_id === linkPai.id) {
                    link.childrens = buildChildrenLinks(link, linkList);
                    linkFilhosRetorno.push(link);
                };
            });
        };
        return linkFilhosRetorno;
    };
    
    fetechedMenu?.forEach((link, index) => {
        link.childrens = buildChildrenLinks(link, fetechedMenu);
        LinksTratados.push(link);
    });

    LinksTratados = LinksTratados.filter(link => link.parent_id === null);
    
    return (
        <>
            <SideBar
                disabled={isSideBarOpen}
                onMouseOver={openSideBar}
                onMouseLeave={closeSideBar}
            >
                <SideBarItemList>
                    {LinksTratados && LinksTratados?.map((item) => (
                                            <SideBarItem
                                                key={item.id}
                                                id={item.id}
                                                name={item.name}
                                                icon={item.icon}
                                                has_childrens={item.has_childrens}
                                                childrens={item.childrens ?? item.childrens}
                                                disabled={item.disabled}
                                                parent_id={item.parent_id}
                                                route={item?.route}
                                            />
                                            )
                                        )
                    }
                </SideBarItemList>
                <ExitSection
                    disabled={isSideBarOpen}
                >
                    <Exit
                        onClick={signOut}
                    />
                </ExitSection>
            </SideBar>
            <TopMenu>
                <HambugerMenu>    
                    <Menu
                        onClick={toggleSideBar}
                    />
                </HambugerMenu>
            </TopMenu>
            <Conteudo
                disabled={isSideBarOpen}
                superOpenSideBar={superOpenSideBar}
            >
                {children}
            </Conteudo>
        </>
    );
};