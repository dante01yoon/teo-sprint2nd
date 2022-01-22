import React from 'react';
import style from './Contents.module.css';

type ContentsProps = {
	children: React.ReactNode;
};

function Contents({ children }: ContentsProps) {
	return (
		<div className={style.Contents}>
			<div className={style.Contents__wrapper}>{children}</div>
		</div>
	);
}

Contents.defaultProps = {};

export default Contents;
