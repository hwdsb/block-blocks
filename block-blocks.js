const coreEmbedRemoveBlocks = [
	'spotify',
	'collegehumor',
	'dailymotion',
	'funnyordie',
	'hulu',
	'imgur',
	'issuu',
	'kickstarter',
	'meetup-com',
	'mixcloud',
	'photobucket',
	'polldaddy',
	'reddit',
	'reverbnation',
	'screencast',
	'scribd',
	'smugmug',
	'speaker',
	'tumblr',
	'videopress',
	'vine',
	'wordpress-tv',
	'amazon-kindle',
]

const removeBlocks = [
	'jetpack/mailchimp',
	'jetpack/business-hours',
	'jetpack/map',
	'jetpack/gif',
	'jetpack/recurring-payments',
	'jetpack/calendly',
	'jetpack/eventbrite',
	'jetpack/revue',
	'jetpack/opentable',
	'jetpack/calendly',
	'jetpack/amazon',
	'jetpack/wordads',
	'jetpack/pinterest',
	'jetpack/send-a-message',
	'coblocks/opentable',
	'bp/latest-activities',
	'bp/friends',
	'bp/dynamic-groups',
	'bp/dynamic-members',
	'bp/member',
	'bp/members',
	'bp/login-form',
	'bp/online-members',
	'bp/sitewide-notices',
	'bp/groups',
	'bp/group',
	'bp/messages',
	'bp/active-members',
	'bp/embed-activity',
	'bp/recent-posts',
]

wp.hooks.addFilter('blocks.registerBlockType', 'hideBlocks', (pSettings, pName) => {
	if (removeBlocks.indexOf(pName) !== -1) {
		return Object.assign({}, pSettings, {
			supports: Object.assign({}, pSettings.supports, {inserter: false})
		})
	}

	if ( 'core/embed' === pName ) {
		pSettings.variations = pSettings.variations.filter( (block) => -1 === coreEmbedRemoveBlocks.indexOf( block.name ) )
	}

	return pSettings
})
