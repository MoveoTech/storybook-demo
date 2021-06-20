import styled from "styled-components";

export const CardContainer = styled.div`
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  padding: 1em;
  width: 20em;
  height: fit-content;
  background-color: rgba(20, 20, 43, 1);
  border-radius: 20px;
  color: rgba(243, 243, 255, 1);
  display: flex;
  flex-direction: column;
`;

export const CardHeader = styled.div`
  width: 100%;
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1em 0;
`;

export const CardBody = styled.div`
  width: 100%;
  flex-grow: 4;
  padding: 1em 0;
  color: rgba(243, 243, 255, 1);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const CardFooter = styled.hr`
  width: 100%;
  border-top: rgba(243, 243, 255, 1);
`;
