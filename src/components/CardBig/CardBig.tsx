import React from "react";
import style from "./CardBig.module.css";

type CardBigProps = {
  children: React.ReactNode;
};

function CardBig({ children }: CardBigProps) {
  return <div className={style.CardBig}>{children}</div>;
}

export default CardBig;
