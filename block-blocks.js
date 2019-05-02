const removeBlocks = [
	'core-embed/spotify',
	'core-embed/collegehumor',
	'core-embed/dailymotion',
	'core-embed/funnyordie',
	'core-embed/hulu',
	'core-embed/imgur',
	'core-embed/issuu',
	'core-embed/kickstarter',
	'core-embed/meetup-com',
	'core-embed/mixcloud',
	'core-embed/photobucket',
	'core-embed/polldaddy',
	'core-embed/reddit',
	'core-embed/reverbnation',
	'core-embed/screencast',
	'core-embed/scribd',
	'core-embed/smugmug',
	'core-embed/speaker',
	'core-embed/tumblr',
	'core-embed/videopress',
	'core-embed/vine',
	'core-embed/wordpress-tv',
	'jetpack/mailchimp',
	'jetpack/business-hours',
	'jetpack/map',
	'jetpack/gif',
]

wp.hooks.addFilter('blocks.registerBlockType', 'hideBlocks', (pSettings, pName) => {
	if (removeBlocks.indexOf(pName) !== -1) {
		return Object.assign({}, pSettings, {
			supports: Object.assign({}, pSettings.supports, {inserter: false})
		})
	}

	return pSettings
})
