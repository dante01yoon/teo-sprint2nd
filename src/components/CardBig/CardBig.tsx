import React from 'react';
import cx from 'classnames';

import style from './CardBig.module.css';

type CardBigProps = {
	children: React.ReactNode;
	className?: string;
};

function CardBig({ className, children }: CardBigProps) {
	return <div className={cx(style.CardBig, className)}>{children}</div>;
}

export default CardBig;
