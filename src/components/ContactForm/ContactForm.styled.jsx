import styled from "@emotion/styled";

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 500px;
    min-height: 240px;
    border-radius: 10px;
    padding: 40px;
`;

export const Label = styled.label`
    display: inline-block;
    text-align: left;
    margin-bottom: 4px;
    color: #333;
    font-size: 16px;
`;

export const Input = styled.input`
    width: 100%;
    max-width: 432px;
    height: 40px;
    border-radius: 4px;
    border: 1px solid rgba(33, 33, 33, 0.2);
    background-color: #fff;
    outline: none;
    padding-left: 15px;
    margin-bottom: 15px;
    font-weight: 500;
    font-size: 18px;
    transition: border-color 0.3s;

    &:focus,
    &:hover {
        border-color: #8a4dff;
    }
`;

export const Button = styled.button`
    width: 100%;
    max-width: 450px;
    height: 50px;
    margin-top: 10px;
    border: none;
    border-radius: 5px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    background-color: #8a4dff;
    color: #fff;
    font-weight: 700;
    font-size: 16px;
    text-transform: uppercase;
    transition: background-color 0.3s, transform 0.3s;
    cursor: pointer;

    &:hover,
    &:focus {
        background-color: #6e39b8;
        transform: scale(1.01);
    }
     display: flex;
    justify-content: center;
    align-items: center;
 padding-left: 25px;
 padding-right: 25px;


    svg {
        width: 25px;
        height: 25px;
        margin-left: auto;
    }
`;