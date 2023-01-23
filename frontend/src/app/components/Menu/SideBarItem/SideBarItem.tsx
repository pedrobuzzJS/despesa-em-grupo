// import React, { useCallback, useState } from "react";
// import { LinkMenu } from "../../../model/LinkMenu";
// import * as AiIcons from 'react-icons/ai';
// import * as RiIcons from 'react-icons/ri'
// import { 
//     LinkContainer,
//     StyledMenuText,
//     Container,
//     OpenContainer,
//     ImgContainer
// } from "./style";
import React from "react";

export const SideBarItem: React.FC = () => {
    return (
        <></>
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