import styled from 'styled-components';
import {Link} from 'react-scroll';


export const Button = styled(Link)`

    border-radius: 50px;
    background: ${({primary}) => (primary ? '#0083bf' : '#010606')};
    white-space: nowrap;
    padding: ${({big}) => (big ? '14px 48px' : '12px 30px')};
    color: ${({dark}) => (dark ? '#fff' : '#0083bf')};
    font-size: ${({fontBig}) => (fontBig ? '20px' : '16px')};
    outline: none;
    border: solid;
    border-color: #0083bf;
    border-width: 2px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;
    position: relative;
    text-decoration: none !important;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: ${({primary}) => (primary ? 'transparent' : 'transparent')};
        color: #fff;
        padding-right: 40px;
        border: solid 2px #fff;

    }

    &::after {
        content: '';
        position: absolute;
        display: inline-block;
        right: 22px; /* Adjust the position of the arrow icon as needed */
        margin-left: 0px;
        top: 50%;
        transform: translateY(-50%);
        width: 0;
        height: 0;
        border-top: 6px solid transparent;
        border-bottom: 6px solid transparent;
        border-left: 8px solid ${({ primary }) => (primary ? '#fff' : '#0083bf')}; /* Arrow color */
        transition: all 0.2s ease-in-out;
        opacity: 0;
    
    }

    &:hover::after {
        opacity: 1;
        transition: all 0.2s ease-in-out;
    }
`;

export const ButtonTwo = styled(Link)`

    border-radius: 50px;
    background: ${({primary}) => (primary ? '#0083bf' : '#010606')};
    white-space: nowrap;
    padding: ${({big}) => (big ? '14px 48px' : '12px 30px')};
    color: ${({dark}) => (dark ? '#fff' : '#0083bf')};
    font-size: ${({fontBig}) => (fontBig ? '20px' : '16px')};
    outline: none;
    border: solid;
    border-color: #0083bf;
    border-width: 2px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;
    position: relative;
    text-decoration: none !important;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: ${({primary}) => (primary ? 'transparent' : 'transparent')};
        color: #fff;
        padding-right: 40px;
        border: solid 2px #fff;

    }

    &::after {
        content: '';
        position: absolute;
        display: inline-block;
        right: 22px; /* Adjust the position of the arrow icon as needed */
        margin-left: 0px;
        top: 50%;
        transform: translateY(-50%);
        width: 0;
        height: 0;
        border-top: 6px solid transparent;
        border-bottom: 6px solid transparent;
        border-left: 8px solid ${({ primary }) => (primary ? '#fff' : '#0083bf')}; /* Arrow color */
        transition: all 0.2s ease-in-out;
        opacity: 0;
    
    }

    &:hover::after {
        opacity: 1;
        transition: all 0.2s ease-in-out;
    }
`;
