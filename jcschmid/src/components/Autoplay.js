import React from 'react';
import '../App.css';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import content from './content';
import horizontalCss from './horizontal.css';

function Autoplay() {
	return (
		<div>
			<h2>Autoplay</h2>
			<Slider classNames={horizontalCss} autoplay={3000}>
				{content.map((item, index) => (
					<div
						key={index}

						style={{ background: `url('${item.image}') no-repeat center center` }}
					>
						<div className="center">
							<h1>{item.title}</h1>
							<p>{item.description}</p>
							<button>{item.button}</button>
						</div>
					</div>
				))}
			</Slider>
		</div>
	);
}

export default Autoplay;