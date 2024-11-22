<?php
/**
 * Plugin Name:       WP Copy Blocks
 * Plugin URI:        https://github.com/nathanonn/wp-copy-blocks
 * Description:       Adds a button to copy all blocks in JSON format to clipboard
 * Requires at least: 6.6
 * Requires PHP:      7.2
 * Version:           0.1.0
 * Author:            Nathan Onn
 * Author URI:        https://www.nathanonn.com
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       wp-copy-blocks
 *
 * @package CreateBlock
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

define('WP_COPY_BLOCKS_VERSION', '0.1.0');
define('WP_COPY_BLOCKS_PATH', plugin_dir_path(__FILE__));
define('WP_COPY_BLOCKS_URL', plugin_dir_url(__FILE__));


function wp_copy_blocks_enqueue_assets() {
	wp_enqueue_script(
		'wp-copy-blocks',
		WP_COPY_BLOCKS_URL . 'build/index.js',
		array('wp-blocks', 'wp-i18n', 'wp-element', 'wp-editor'),
		WP_COPY_BLOCKS_VERSION
	);
}
add_action( 'admin_enqueue_scripts', 'wp_copy_blocks_enqueue_assets' );
