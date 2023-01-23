// import styled from "styled-components";
// import { Link } from "react-router-dom";

// interface Toggle {
//     isSubMenuOpen?: boolean;
// };

// export const Container = styled.div<Toggle>`
//     > div {
//         display: ${({ isSubMenuOpen }) => (isSubMenuOpen && isSubMenuOpen === true ? 'block' : 'none')};
//     }
// `;

// export const OpenContainer = styled.div`
//     display: block;
// `;

// interface LinkContainerToggle {
//     desabilitado?: boolean;
// }

// export const LinkContainer = styled(Link)<LinkContainerToggle>`
//     display: ${({ desabilitado }) => (desabilitado && desabilitado === true ? 'none' : 'flex')};
//     /* display: flex; */
//     color: #e1e9fc;
//     justify-content: space-between;
//     align-items: center;
//     padding: 10;
//     padding-left: 15px;
//     padding-right: 15px;
//     height: 40px;
//     text-decoration: none;
//     font-size: 18px;
//     border-bottom: 1px #e1e9fc solid;

//     > a {
//         width: 100%;
//     }

//     &:hover {
//         background: #252831;
//         border-left: 5px solid #008B8B;
//         transition: 150ms;
//         cursor: pointer;
//     }

//     > svg {
//         transform: rotate(90deg);
//         transition: 350ms;

//         &:hover {
//             transform: rotate(180deg);
//             transition: 350ms;
//         }
//     }
// `;

// export const ImgContainer = styled.div<Toggle>`
//     display: block;
//     padding: 5px;

//     > svg {
//         transform: rotate(90deg);
//         transition: 350ms;

//         &:hover {
//             transform: rotate(180deg);
//             transition: 350ms;
//         }
//     }
// `;

// export const StyledMenuText = styled.div`
//     display: flex;
//     justify-content: space-between;
// `;
import styled from "styled-components";