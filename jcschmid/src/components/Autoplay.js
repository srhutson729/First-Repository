import React from 'react';
import '../App.css';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import content from './content';
import horizontalCss from './horizontal.css';
import "normalize.css/normalize.css";
import "./slider-animations.css";
import "./styles.css";

function Autoplay() {
	return (
		<div>
			<Slider classNames={horizontalCss} autoplay={3000}>
				{content.map((item, index) => (
					<div
						key={index}

						style={{ background: `url('${item.image}') no-repeat center center` }}
					>
						<div className="center">
							<h1>{item.title}</h1>
							<p>{item.description}</p>
						</div>
					</div>
				))}
			</Slider>
		</div>
	);
}



export default Autoplay;