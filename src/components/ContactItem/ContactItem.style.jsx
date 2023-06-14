import styled from '@emotion/styled';

export const Item = styled.li`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5px 0;
`;

export const Text = styled.p`
    color: #757575;
    font-size: 20px;

    &:first-of-type {
        font-weight: 500;
        color: #333;
    }
`;

export const Button = styled.button`
    display: flex;
    align-items: center;
    justify-content: space-between;
    min-width: 120px;
    height: 40px;
    padding: 0 15px;
    border: none;
    border-radius: 5px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    background-color: #8a4dff;
    color: #fff;
    font-weight: 700;
    font-size: 16px;
    transition: background-color 0.3s, transform 0.3s;
    cursor: pointer;

    &:hover,
    &:focus {
        background-color: #6e39b8;
        transform: scale(1.04);
    }
`;