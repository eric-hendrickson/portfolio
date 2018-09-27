module.exports = [
	{
		id: 'placesOfInterest',
		title: 'Places of Interest',
		type: 'Ionic Mobile App',
		image: 'img/projects/places-of-interest.png',
		shortDescription: 'Ionic App for finding nearby stores and other places',
		longDescription: 'This Ionic mobile app, written using Angular and Typescript, creates a map that is centered on the user’s current location and puts markers down for a number of venues within a certain distance of the user. Upon hitting the hamburger button, the user can see a list of these venues, and if they tap on a venue they can get information about the venue.',
		links: [
			{
				text: 'Code',
				url: 'https://github.com/hendrickson02/ionic-places-of-interest'
			}
		]
	},
	{
		id: 'portfolioPage',
		title: 'Portfolio Page',
		type: 'Static Javascript Page',
		image: 'img/profile.jpg',
		shortDescription: 'Static page generated with Spike',
		longDescription: 'My personal portfolio page, a static site generated using Spike.js. This page was generated using AWS S3, CloudFront, and Route 53. Form utilizes an API created using AWS API Gateway and Lambda, utilizing SES to send email.',
		links: [
			{
				text: 'Code',
				url: 'https://github.com/hendrickson02/portfolio'
			},
			{
				text: 'Site',
				url: '/'
			}
		]
	},
	{
		id: 'hidIt',
		title: 'HidIt',
		type: 'Chrome Plugin',
		image: 'img/projects/ghost.png',
		shortDescription: 'Chrome plugin written with jQuery',
		longDescription: 'HidIt is a Google Chrome Extension written in Javascript/jQuery that allows the user to turn virtually any web page into an interactive flash card. Simply click a word to cause it to disappear. Click it again to cause the word to reappear. If you need a little help, hover the mouse over the whitespace to see the word in a different color.',
		links: [
			{
				text: 'Code',
				url: 'https://github.com/hendrickson02/HidIt'
			}
		]
	},
	{
		id: 'whelp',
		title: 'Whelp',
		type: 'Ruby on Rails App',
		image: '/img/projects/whelp.png',
		shortDescription: 'Social networking app for dog lovers',
		longDescription: 'Whelp is an app that helps users find dog-friendly events and venues. It marries Yelp’s feature of users reviewing venues with Meetups’ ability to allow users to find events. This was my group’s final project at LEARN Academy. My main contributions were creating the RSVP functionality and with standardizing user roles and abilities using CanCanCan and Rolify and implementing soft delete functionality.',
		links: [
			{
				text: 'Code',
				url: 'https://github.com/hendrickson02/whelp'
			}
		]
	}
]