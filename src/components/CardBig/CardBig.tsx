import React from 'react';
import cx from 'classnames';

import style from './CardBig.module.css';

type CardBigProps = {
	children: React.ReactNode;
	className?: string;
	key?: string | number;
};

function CardBig({ key, className, children }: CardBigProps) {
	return (
		<div key={key} className={cx(style.CardBig, className)}>
			{children}
		</div>
	);
}

export default CardBig;
