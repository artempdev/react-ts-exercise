import React, { FC, useState } from "react";

export enum CardVarient {
  outlined = "outlined",
  primary = "primary",
}

interface CardProps {
  width?: string;
  height?: string;
  children?: React.ReactNode;
  variant: CardVarient;
  onClick?: (num: number) => any;
}

const Card: FC<CardProps> = ({ width, height, children, variant, onClick }) => {
  const [state, setState] = useState<number>(10);
  return (
    <div
      style={{
        width,
        height,
        border: variant === CardVarient.outlined ? "1px solid gray" : "",
        background: variant === CardVarient.primary ? "lightgray" : "",
      }}
      onClick={() => (onClick ? onClick(state) : console.log("something"))}
    >
      {children}
    </div>
  );
};

export default Card;
