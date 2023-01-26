import React, { useState } from "react";
import * as RiIcons from 'react-icons/ri';
import { LinkContainer, MenuItem, MenuSpanDiv } from "./style";
import { useMenu } from "../../../context/useMenu";

export const SideBarItem: React.FC = () => {
    // const [ isSideBarOpen, setIsSideBarOpen ] = useState<boo
    // const { isSideBarOpen, showSideBar } = useMenu();

    const { isSideBarOpen, showSideBar } = useMenu();

    return (
        <nav>
            <ul>
                <MenuItem>
                    <LinkContainer to={"dash"} disabled={isSideBarOpen}>
                        <RiIcons.RiDashboardFill />
                            <MenuSpanDiv disabled={isSideBarOpen}>
                                <span>Dash</span>
                            </MenuSpanDiv>
                    </LinkContainer>
                </MenuItem>
            </ul>
        </nav>
    );
};
// export const SideBarItem: React.FC<LinkMenu> = ({ id, icon, name, parent_id, route, childrens, has_childrens, disabled, ...props }) => {
//     const [ isOpen, setIsOpen ] = useState<boolean>(false);
//     const openSubMenuList = useCallback(() => {
//         setIsOpen(!isOpen);
//     }, [isOpen]);
//     if (childrens) {
//         return (
//             <>
//                 <Container
//                     isSubMenuOpen={isOpen}
//                 >
//                     <LinkContainer 
//                         to={route || "#"}
//                         desabilitado={disabled}
//                     >
//                         <StyledMenuText>
//                             <RiIcons.RiDashboardFill />
//                             <span>{name}</span>
//                         </StyledMenuText>
//                             {has_childrens === true && (
//                                 <ImgContainer isSubMenuOpen={isOpen}>
//                                     <AiIcons.AiOutlineUp onClick={openSubMenuList}/>
//                                 </ImgContainer>
//                                 )
//                             }
//                     </LinkContainer>
//                     { childrens.map((child, index) => 
//                         <SideBarItem
//                             key={index}
//                             id={child.id}
//                             name={child.name}
//                             icon={child.icon}
//                             route={child.route}
//                             has_childrens={child.has_childrens}
//                             childrens={child.childrens ?? child.childrens}
//                             parent_id={child.parent_id}
//                             disabled={child.disabled}
//                         />)
//                     }
//                 </Container>
//             </>
//         );
//     } else {
//         return (
//             <OpenContainer>
//                 <LinkContainer
//                     to={route || "#"}
//                     desabilitado={disabled}
//                 >
//                     <StyledMenuText>
//                         <RiIcons.RiDashboardFill />
//                         <span>{name}</span>
//                         B
//                     </StyledMenuText>
//                 </LinkContainer>
//             </OpenContainer>
//         );
//     };
// };