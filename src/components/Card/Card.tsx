import React from "react";
import { CardBody, CardContainer, CardFooter, CardHeader } from "./style";

export interface CardProps {
  title: string;
  body: string;
  withFooter: boolean;
}

export default function Card({ title, body, withFooter }: CardProps) {
  return (
    <CardContainer>
      <CardHeader>{title}</CardHeader>
      <CardBody>{body}</CardBody>
      {withFooter && <CardFooter />}
    </CardContainer>
  );
}
