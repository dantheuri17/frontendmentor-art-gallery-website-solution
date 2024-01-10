import mobileHeaderImg from "../../assets/mobile/image-hero.jpg";
import tabletHeaderImg from '../../assets/tablet/image-hero.jpg'
import desktopHeaderImg from "../../assets/desktop/image-hero.jpg";

import grid2Image from '../../assets/desktop/image-grid-2.jpg'
import arrowRight from "../../assets/icon-arrow-right.svg";




const HomeHeader = () => {


	return (
		<header className="header lg:flex flex-cols relative">
			<div className="bg-almost-black shrink-0 hidden lg:w-[28.125rem] lg:h-[49.9375rem] lg:block"></div>
			<div className="header-image-container">
				<picture>
					<source media="(max-width:480px)" srcSet={mobileHeaderImg} />
					<source
						media="(min-width: 480px) and (max-width: 1024px)"
						srcSet={tabletHeaderImg}
					/>
					<source
						media="(min-width: 1024px)"
						srcSet={desktopHeaderImg}
						sizes=""
					/>
					<img
						src={grid2Image}
						alt=""
						className="lg:w-[33.75rem] shrink-0 lg:h-[50rem] object-cover "
					/>
				</picture>
			</div>
			<div className="font-bigShouldersDisplay lg:absolute lg:left-[10.31rem] lg:mt-[11.87rem] lg:text-white lg:w-[32.125rem] lg:text-[6rem] lg:leading-[5.5rem] px-[1rem] leading-[3.4375rem] font-[900] uppercase w-[21.4375rem] mt-[2rem] text-almost-black text-[3.75rem]">
				<h1 className="mix-blend-difference">Modern</h1>
				<h1 className="mix-blend-difference">Art Gallery</h1>
			</div>
			<div className=" px-[1rem] w-[21.875rem] mt-[2rem]">
				<p className="text-[1.375rem] lg:absolute lg:left-[57.81rem] lg:top-[11.87rem] leading-[2rem] font-outfit text-dark-grey">
					The arts in the collection of the Modern Art Gallery all started from
					a spark of inspiration. Will these pieces inspire you? Visit us and
					find out.
				</p>
			</div>
			<button className="locationButton lg:absolute lg:left-[57.81rem] lg:top-[25.88rem] px-[1rem] mt-[2rem] flex">
				<div className="flex justify-center items-center font-bigShouldersDisplay bg-almost-black text-white  uppercase w-[12.75rem] h-[4.5rem] shrink-0 ">
					<p className="text-[1.25rem] tracking-[0.22725rem] font-[800]">
						Our location
					</p>
				</div>
				<div className="bg-gold flex justify-center items-center w-[3.5rem] h-[4.5rem]">
					<img src={arrowRight} alt="" />
				</div>
			</button>
		</header>
	);
};

export default HomeHeader;