import headShotImage from '../images/Headshotwebcolor.jpg';
import mainImage from '../images/Welcome.jpg';
import bookBanner from '../images/bookbanner.jpg';

export default [
	{
		title: 'Welcome',
		description:
		'',
		image: mainImage,
		
	},
	{
		title: 'About Me',
		description:
			'My name is Joe Schmid, I am a published Philosopher as well as a student at Purdue University',
		button: 'More About Me',
		image: headShotImage,
		link: '../pages/About.js',
	},
	{
		title: 'Research',
		description:
			'My CV, academic papers and other project',
		button: 'Read More',
		image: bookBanner,
	},
	{
		title: 'Videos',
		description:
			'Check out my content on The Majesty of Reason as well as other interviews and debates.',
		button: 'View Here',
		image: './images/MRbanner.jpg',
	},
	{
		title: 'Blog',
		description:
			'You can read my blog here',
		button: 'Read More',
		image: '.',

	},

];