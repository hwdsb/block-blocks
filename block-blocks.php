<?php

/**
 * Plugin Name: Block-Blocks
 * Description: Removing Blocks from the new Block-based Editor
 * Version:     0.1
 * Author:      mrjarbenne
 * Author URI:  https://mrjarbenne.ca
 * License:     GPLv2+
 *
 */


function hwdsb_blacklist_blocks() {
    wp_enqueue_script(
        'hwdsb-blacklist-blocks',
        plugins_url( 'my-plugin.js', __FILE__ ),
        array( 'wp-blocks' )
    );
}
add_action( 'enqueue_block_editor_assets', 'hwdsb_blacklist_blocks' );
