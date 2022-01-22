import React from 'react';
import { Treemap } from '@ant-design/plots';

import CardBig from '../CardBig';

import style from './NowRanking.module.css';
import DATA from '../../datas/webFrameworkRanking.json';

function NowRanking() {
	const { name, children } = DATA;

	const config = {
		colorField: 'name',
		data: {
			name,
			children,
		},
	};

	return <Treemap {...config} />;
}

NowRanking.defaultProps = {};

export default NowRanking;
