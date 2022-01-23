import { useState, useEffect } from 'react';
import cx from 'classnames';

import Treemap from '../components/Treemap';
import CardBig from '../components/CardBig';

import DATA_GITHUB from '../datas/RankingGithubStar.json';
import DATA_FRAMEWORK from '../datas/RankingWebFramework.json';

import style from './Statistics.module.css';

enum Analysis {
	Interested = 'interested',
	Satisfied = 'satisfied',
	Awared = 'awared',
	Used = 'used',
}

const LIME = [
	'#4F6D22',
	'#5E8424',
	'#6D9C26',
	'#7CB526',
	'#8FD327',
	'#ADDE63',
	'#BCE382',
	'#D3ECAC',
	'#E9F6D5',
	'#F8FCF3',
];

const YELLOW = [
	'#D66B00',
	'#E07E00',
	'#EB9300',
	'#F5AC00',
	'#FFC107',
	'#FFCA28',
	'#FFD54F',
	'#FFE082',
	'#FFECB3',
	'#FFF8E1',
];

const BLUE = [
	'#1A4B93',
	'#1959B8',
	'#1D6CE0',
	'#317EF2',
	'#5094FA',
	'#74AAFB',
	'#97BFFC',
	'#BAD5FD',
	'#DCEAFE',
	'#F0F6FF',
];

const VIOLET = [
	'#412499',
	'#4B25C1',
	'#5B2EE0',
	'#744CEB',
	'#9C7FF5',
	'#B29BF8',
	'#C8B8FA',
	'#E2D9FC',
	'#F4F1FE',
];

function Statistics() {
	const [activeAnalysis, setActiveAnalysis] = useState<Analysis>(
		Analysis.Used,
	);
	const [color, setColor] = useState<string[]>(VIOLET);
	const [isCardsBack, isSetCardsBack] = useState({
		rank1: false,
		rank2: false,
		rank3: false,
		rank4: false,
	});

	const handleAnalysisButton = (e) => {
		const { name } = e.target;
		setActiveAnalysis(name as Analysis);
	};
	const handleFilpButton = (e) => {
		const { name } = e.target;

		isSetCardsBack({
			...isCardsBack,
			[name]: !isCardsBack[name],
		});
	};

	useEffect(() => {
		if (activeAnalysis === Analysis.Interested) {
			setColor(LIME);
		} else if (activeAnalysis === Analysis.Satisfied) {
			setColor(YELLOW);
		} else if (activeAnalysis === Analysis.Awared) {
			setColor(BLUE);
		} else if (activeAnalysis === Analysis.Used) {
			setColor(VIOLET);
		}
	}, [activeAnalysis]);

	return (
		<div className={style.contents}>
			{/* [섹션 1] */}
			<section className={style.infomation}>
				<h3 className={style.sectionTitle}>
        🔥 최근 24시간 동안, Github Star가 급상승한 프로젝트
				</h3>

				<ul className={style.infoCards}>
					{Object.keys(DATA_GITHUB).map((key) => (
						<li key={key} className={style.infoCard}>
							<div
								className={cx({
									[style.infoCardWrapper]: true,
									[style.isFlipped]: isCardsBack[key],
								})}
							>
								{DATA_GITHUB[key].map((item, idx) => (
									<CardBig
										key={item.name}
										className={cx({
											[style.infoCardItem]: true,
											[style.back]: idx === 1,
										})}
									>
										<div className={style.top}>
											<svg
												width="64"
												height="64"
												viewBox="0 0 64 64"
												fill="none"
											>
												<path
													d="M26.9559 44.3589C29.2752 43.5422 30.4932 40.9999 29.6765 38.6807C28.8597 36.3614 26.3175 35.1434 23.9982 35.9601C21.679 36.7769 20.4609 39.3191 21.2777 41.6384C22.0944 43.9576 24.6366 45.1757 26.9559 44.3589Z"
													fill="url(#paint0_linear_336_37414)"
												/>
												<path
													d="M36.9266 27.0562C39.2458 26.2394 40.4639 23.6972 39.6471 21.3779C38.8304 19.0587 36.2882 17.8407 33.9689 18.6574C31.6497 19.4741 30.4316 22.0164 31.2484 24.3356C32.0651 26.6549 34.6073 27.8729 36.9266 27.0562Z"
													fill="url(#paint1_linear_336_37414)"
												/>
												<path
													d="M16.7521 12.6054C14.7514 16.0924 13.7619 20.068 13.8946 24.0861C14.0273 28.1041 15.277 32.0057 17.5034 35.3532C17.6134 35.5499 17.762 35.7222 17.9404 35.8599C18.1188 35.9976 18.3232 36.0977 18.5413 36.1543C18.7595 36.2108 18.9868 36.2227 19.2096 36.1891C19.4324 36.1554 19.6461 36.0771 19.8378 35.9586C20.0295 35.8402 20.1953 35.6842 20.3251 35.5C20.455 35.3159 20.5462 35.1073 20.5932 34.887C20.6403 34.6666 20.6423 34.439 20.599 34.2178C20.5558 33.9967 20.4682 33.7866 20.3416 33.6002C18.7731 31.2762 17.7588 28.6232 17.3768 25.8456C16.9948 23.068 17.2554 20.2397 18.1384 17.5786C19.0214 14.9175 20.5033 12.4945 22.47 10.4962C24.4367 8.4979 26.8358 6.97759 29.4825 6.05232C31.7552 5.25099 34.1637 4.90583 36.57 5.03662C38.9763 5.16741 41.3331 5.77159 43.5056 6.81453C45.6781 7.85747 47.6235 9.3187 49.2304 11.1145C50.8373 12.9104 52.0743 15.0056 52.8703 17.2802C53.8809 20.1396 54.1658 23.2052 53.6997 26.2019C53.2336 29.1986 52.0309 32.0328 50.1996 34.4502C48.3683 36.8676 45.9655 38.7927 43.2069 40.0527C40.4483 41.3127 37.4201 41.8684 34.3938 41.6697C33.951 41.6476 33.5176 41.8022 33.1888 42.0997C32.86 42.3971 32.6629 42.813 32.6408 43.2558C32.6186 43.6986 32.7733 44.1321 33.0707 44.4608C33.3682 44.7896 33.7841 44.9867 34.2268 45.0089C37.7962 45.2229 41.3631 44.5518 44.6106 43.0552C47.858 41.5586 50.6854 39.2828 52.8414 36.4301C54.9974 33.5775 56.4152 30.2364 56.9688 26.7038C57.5224 23.1711 57.1947 19.5564 56.0147 16.181C54.6307 12.2697 52.1546 8.83709 48.8798 6.28968C45.6051 3.74227 41.6687 2.18684 37.5372 1.80765C33.4056 1.42846 29.2519 2.2414 25.5682 4.15016C21.8844 6.05892 18.8249 8.98352 16.7521 12.5775V12.6054Z"
													fill="url(#paint2_linear_336_37414)"
												/>
												<path
													d="M6.77576 29.8854C5.22584 32.5822 4.27563 35.5815 3.98991 38.6787C3.70419 41.776 4.08969 44.8985 5.12012 47.8333C7.03042 53.2561 11.0143 57.6994 16.1973 60.1879C21.3804 62.6764 27.339 63.0067 32.7653 61.1063C35.8726 60.0102 38.6896 58.221 41.0026 55.8744C43.3156 53.5278 45.064 50.6853 46.1152 47.5626C47.1664 44.4398 47.4929 41.1187 47.0697 37.851C46.6466 34.5833 45.4851 31.4549 43.6732 28.7028C43.5351 28.4383 43.3287 28.2156 43.0754 28.0579C42.8221 27.9003 42.5311 27.8133 42.2328 27.8062C41.9345 27.7991 41.6398 27.8721 41.3792 28.0176C41.1187 28.163 40.9019 28.3756 40.7514 28.6333C40.5944 28.9035 40.5164 29.2123 40.5262 29.5247C40.536 29.8371 40.6334 30.1404 40.8071 30.4002C42.3756 32.7242 43.3899 35.3771 43.7719 38.1548C44.1539 40.9324 43.8933 43.7607 43.0103 46.4218C42.1273 49.0829 40.6454 51.5059 38.6787 53.5042C36.712 55.5025 34.3129 57.0228 31.6662 57.948C29.3945 58.7516 26.9865 59.0989 24.5803 58.9699C22.1741 58.8409 19.8171 58.2382 17.6443 57.1964C15.4715 56.1546 13.5257 54.6942 11.9185 52.8988C10.3113 51.1035 9.07427 49.0085 8.27837 46.7341C7.26429 43.8677 6.97946 40.794 7.44954 37.79C7.91963 34.786 9.12985 31.9462 10.9711 29.5266C12.8124 27.107 15.2269 25.1836 17.9969 23.9298C20.7669 22.676 23.8053 22.1312 26.8384 22.3446C27.2175 22.3758 27.596 22.2765 27.911 22.0633C28.2261 21.8501 28.4589 21.5357 28.5709 21.1721C28.6829 20.8086 28.6674 20.4176 28.5269 20.0641C28.3864 19.7106 28.1294 19.4156 27.7984 19.2281C27.5146 19.0692 27.1906 18.9966 26.8662 19.0194C22.8351 18.7726 18.8155 19.6613 15.2641 21.5845C11.7128 23.5078 8.77195 26.3885 6.77576 29.8994V29.8854Z"
													fill="url(#paint3_linear_336_37414)"
												/>
												<defs>
													<linearGradient
														id="paint0_linear_336_37414"
														x1="23.0163"
														y1="43.837"
														x2="27.4781"
														y2="36.109"
														gradientUnits="userSpaceOnUse"
													>
														<stop stopColor="#0096F2" />
														<stop
															offset="1"
															stopColor="#4CFFC4"
														/>
													</linearGradient>
													<linearGradient
														id="paint1_linear_336_37414"
														x1="37.7037"
														y1="19.1393"
														x2="33.2512"
														y2="26.8512"
														gradientUnits="userSpaceOnUse"
													>
														<stop stopColor="#FF8A11" />
														<stop
															offset="1"
															stopColor="#FFF550"
														/>
													</linearGradient>
													<linearGradient
														id="paint2_linear_336_37414"
														x1="37.3066"
														y1="0.803466"
														x2="16.352"
														y2="37.098"
														gradientUnits="userSpaceOnUse"
													>
														<stop stopColor="#FF8A11" />
														<stop
															offset="1"
															stopColor="#FFF550"
														/>
													</linearGradient>
													<linearGradient
														id="paint3_linear_336_37414"
														x1="12.6131"
														y1="58.6175"
														x2="33.568"
														y2="22.3225"
														gradientUnits="userSpaceOnUse"
													>
														<stop stopColor="#0096F2" />
														<stop
															offset="1"
															stopColor="#4CFFC4"
														/>
													</linearGradient>
												</defs>
											</svg>

											<div className={style.topRight}>
												<p className={style.desc}>
													<strong>{item.name}</strong>
													<a
														aria-label="GitHub repository"
														target="_blank"
														rel="noreferrer"
														href={item.github}
													>
														<svg
															width="24"
															height="24"
															viewBox="0 0 24 24"
															fill="none"
														>
															<g clipPath="url(#clip0_336_37434)">
																<path
																	d="M11.9893 0.328126C5.36518 0.325447 0 5.68795 0 12.3067C0 17.5406 3.35625 21.9897 8.03036 23.6237C8.65982 23.7817 8.56339 23.3344 8.56339 23.029V20.9531C4.92857 21.379 4.78125 18.9737 4.5375 18.5719C4.04464 17.7308 2.87946 17.5165 3.22768 17.1147C4.05536 16.6888 4.89911 17.2219 5.87679 18.6656C6.58393 19.7129 7.96339 19.5362 8.6625 19.3621C8.81518 18.7326 9.14196 18.1701 9.59196 17.7335C5.82589 17.0585 4.25625 14.7603 4.25625 12.0281C4.25625 10.7022 4.69286 9.48348 5.55 8.50045C5.00357 6.87991 5.60089 5.49241 5.68125 5.28616C7.2375 5.14688 8.85536 6.40045 8.98125 6.49956C9.86518 6.26116 10.875 6.13527 12.0054 6.13527C13.1411 6.13527 14.1536 6.26652 15.0455 6.50759C15.3482 6.27723 16.8482 5.20045 18.2946 5.3317C18.3723 5.53795 18.9563 6.89331 18.442 8.49241C19.3098 9.47813 19.7518 10.7076 19.7518 12.0362C19.7518 14.7737 18.1714 17.0746 14.3946 17.7388C14.7181 18.057 14.975 18.4364 15.1502 18.8549C15.3254 19.2734 15.4155 19.7226 15.4152 20.1763V23.1897C15.4366 23.4308 15.4152 23.6692 15.817 23.6692C20.5607 22.0701 23.9759 17.5888 23.9759 12.3094C23.9759 5.68795 18.608 0.328126 11.9893 0.328126Z"
																	fill="black"
																	fillOpacity="0.85"
																/>
															</g>
															<defs>
																<clipPath id="clip0_336_37434">
																	<rect
																		width="24"
																		height="24"
																		fill="white"
																	/>
																</clipPath>
															</defs>
														</svg>
													</a>
												</p>
												<p className={style.desc}>
													<span>
														는 최근 24시간 동안
														<b> +{item.star}개</b>
														<br />
														star를 받았습니다.
													</span>
												</p>
											</div>
										</div>
										<div className={style.bottom}>
											<div className={style.tagList}>
												<ul>
													{item.tags.map(
														(tag, childIdx) => (
															<li
																key={childIdx}
																className={
																	style.label
																}
															>
																{tag}
															</li>
														),
													)}
												</ul>
											</div>

											<button
												name={key}
												onClick={handleFilpButton}
											>
												<span>
													비슷한 프로젝트 보기
												</span>
											</button>
										</div>
									</CardBig>
								))}
							</div>
						</li>
					))}
				</ul>
			</section>
			{/* [섹션 2] */}
			<section className={style.analysis}>
				<h3 className={style.sectionTitle}>✨ 이번 달 웹 프레임워크 순위</h3>
				<div className={style.card}>
					<div className={style.cardHeader}>
						<strong className={style.cardTitle}>순위</strong>
						<ul className={style.cardButtons}>
							<li className={style.cardButton}>
								<button
									name={Analysis.Interested}
									className={cx({
										[style.active]:
											activeAnalysis ===
											Analysis.Interested,
									})}
									onClick={handleAnalysisButton}
								>
									관심도
								</button>
							</li>
							<li className={style.cardButton}>
								<button
									name={Analysis.Satisfied}
									className={cx({
										[style.active]:
											activeAnalysis ===
											Analysis.Satisfied,
									})}
									onClick={handleAnalysisButton}
								>
									만족도
								</button>
							</li>
							<li className={style.cardButton}>
								<button
									name={Analysis.Awared}
									className={cx({
										[style.active]:
											activeAnalysis === Analysis.Awared,
									})}
									onClick={handleAnalysisButton}
								>
									인지도
								</button>
							</li>
							<li className={style.cardButton}>
								<button
									name={Analysis.Used}
									className={cx({
										[style.active]:
											activeAnalysis === Analysis.Used,
									})}
									onClick={handleAnalysisButton}
								>
									사용률
								</button>
							</li>
						</ul>
					</div>
					<Treemap
						className={style.cardBody}
						data={DATA_FRAMEWORK}
						colorField="name"
						color={color}
					/>
				</div>
			</section>
		</div>
	);
}

export default Statistics;
