import styled from "@emotion/styled";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 24px;
    color: black;
    padding-left: 15px;
    text-align: center;
`;

export const Frame = styled.div`
  border: 2px solid #8a4dff;
  border-radius: 10px;
  padding: 20px;
  width: fit-content;
  margin-top: 20px;
  margin-bottom: 20px;
  background-color: #F7F7F7;
`;

export const Title = styled.h1`
    text-transform: uppercase;
    margin-top: 25px;
    margin-bottom: 25px;
`;

export const SubTitle = styled.h2`
    margin-top: 25px;
    margin-bottom: 25px;
    text-transform: uppercase;
`;