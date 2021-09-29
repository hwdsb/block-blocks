/* global wp */

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
  'amazon-kindle'
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
  'coblocks/opentable'
]

const removeBlocksByNamespace = [
  'bp'
]

wp.hooks.addFilter('blocks.registerBlockType', 'hideBlocks', (pSettings, pName) => {
  if (removeBlocks.indexOf(pName) !== -1) {
    return Object.assign({}, pSettings, {
      supports: Object.assign({}, pSettings.supports, { inserter: false })
    })
  }

  if (removeBlocksByNamespace.indexOf(pName.substr(0, pName.indexOf('/'))) !== -1) {
    return Object.assign({}, pSettings, {
      supports: Object.assign({}, pSettings.supports, { inserter: false })
    })
  }

  if (pName === 'core/embed') {
    pSettings.variations = pSettings.variations.filter((block) => coreEmbedRemoveBlocks.indexOf(block.name) === -1)
  }

  return pSettings
})
