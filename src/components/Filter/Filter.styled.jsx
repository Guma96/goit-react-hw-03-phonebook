import styled from '@emotion/styled';


export const Label = styled.label`
    display: inline-block;
    color: #333;
    font-size: 20px;
    font-weight: 300;


`;

export const Input = styled.input`
position: relative;
display: block;
margin-top: 10px;
    width: 430px;
    height: 40px;
    border-radius: 4px;
    border: 1px solid rgba(33, 33, 33, 0.2);
    background-color: #fff;
    outline: none;
    padding-left: 15px;
    margin-bottom: 30px;
    font-weight: 500;
    font-size: 18px;
    transition: border-color 0.3s;

    &:focus,
    &:hover {
        border-color: #8a4dff;
    }
`;