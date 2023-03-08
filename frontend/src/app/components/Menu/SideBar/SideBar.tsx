import React, { PropsWithChildren, useState } from "react";
import { Exit } from "styled-icons/boxicons-regular";
import { Menu } from "styled-icons/entypo";
import { useAuth } from "../../../context/authContext";
// import { useMenu } from "../../../context/menuContext";
import { useFetch } from "../../../hooks/useFetch";
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
    // const [ nome, setNome ] = useState<string | null>(null);
    // const [ rotaAtual, setRotaAtual ] = useState<string | null>(null);
    const { data, loadding } = useFetch<LinkMenu[]>("menu");
    // const { pathname } = useLocation();
    // const [ fetechedMenu, setMenuList ] = useState<LinkMenu[]>();
    const [ isSideBarOpen, setIsSideBarOpen ] = useState<boolean>(false);
    const [ superOpenSideBar, setSuperOpenSideBar ] = useState<boolean>(false);

    const toggleSideBar = () => {
        if (superOpenSideBar === false) {
            setSuperOpenSideBar(true);
            return setIsSideBarOpen(true)
        } else {
            setSuperOpenSideBar(false);
            return setIsSideBarOpen(false)
        }
    };

    const openSideBar = () => {
        if (superOpenSideBar === true) return
        return setTimeout( () => {
            setIsSideBarOpen(true);
        }, 150);
    };

    const closeSideBar = () => {
        if (superOpenSideBar === true) return;
        return setTimeout( () => {
            setIsSideBarOpen(false);
        }, 150);
    };
    // const { isSideBarOpen, openSideBar, closeSideBar, fetechedMenu, toggleSideBar, superOpenSideBar } = useMenu();
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
    
    data?.forEach((link, index) => {
        link.childrens = buildChildrenLinks(link, data);
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