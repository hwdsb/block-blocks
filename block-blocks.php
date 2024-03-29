<?php

/**
 * Plugin Name: Block-Blocks
 * Description: Removing Blocks from the new Block-based Editor
 * Version:     0.1
 * Author:      r-a-y
 * Author URI:  https://mrjarbenne.ca
 * License:     GPLv2+
 *
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	die( 'Silence is golden.' );
}

function hwdsb_blacklist_blocks() {
	wp_enqueue_script(
		'hwdsb_blacklist_blocks',
		plugins_url( basename( __DIR__ ) ) . '/block-blocks.js',
		array( 'wp-blocks' ),
		'20210929'
	);
}
add_action( 'enqueue_block_editor_assets', 'hwdsb_blacklist_blocks' );
