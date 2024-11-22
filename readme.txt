=== WP Copy Blocks ===

Contributors:      Nathan Onn
Tags:              block, gutenberg, clipboard, export, blocks
Tested up to:      6.6
Stable tag:        0.1.0
License:           GPL-2.0-or-later
License URI:       https://www.gnu.org/licenses/gpl-2.0.html

Copy Gutenberg blocks as JSON with a single click. Perfect for developers and content creators who need to transfer block layouts between sites.

== Description ==

WP Copy Blocks adds a simple but powerful feature to your WordPress editor: the ability to copy all blocks in your post or page as JSON format with a single click.

**Key Features:**
* Copy all blocks with one click
* Preserves block attributes and nested blocks
* JSON format output for easy transfer
* Available in the editor's more menu
* Success/error notifications
* Lightweight and easy to use

**Perfect for:**
* Developers working across multiple sites
* Content creators who need to replicate layouts
* Creating block templates
* Debugging block structures

== Installation ==

1. Upload the plugin files to the `/wp-content/plugins/wp-copy-blocks` directory, or install the plugin through the WordPress plugins screen directly
2. Activate the plugin through the 'Plugins' screen in WordPress
3. Open any post or page in the block editor
4. Click the three-dot menu in the top-right corner
5. Find "Copy Blocks as JSON" in the menu

== Frequently Asked Questions ==

= Where do I find the copy button? =

The "Copy Blocks as JSON" button is located in the editor's more menu (three dots in the top-right corner).

= What format is the copied data in? =

The blocks are copied as a JSON string that includes block names, attributes, and any nested blocks.

= Can I paste the copied blocks directly into another post? =

This plugin is designed to copy blocks as JSON. To use the copied blocks, you'll need to process the JSON data appropriately (useful for developers and programmatic block manipulation).

== Changelog ==

= 0.1.0 =
* Initial release
* Add copy to clipboard functionality
* Add success/error notifications
* Support nested blocks
