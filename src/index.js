import { registerPlugin } from "@wordpress/plugins";
import { PluginMoreMenuItem } from "@wordpress/editor";

const { createElement } = wp.element;
const { Button } = wp.components;
const { select } = wp.data;
const { __ } = wp.i18n;

const formatBlocks = (blocks) => {
	return blocks.map((block) => {
		let formattedBlock = {
			name: block.name,
			attributes: block.attributes,
		};
		if (block.innerBlocks && Array.isArray(block.innerBlocks)) {
			formattedBlock.innerBlocks = formatBlocks(block.innerBlocks);
		}
		return formattedBlock;
	});
};

const CopyBlocksButton = () => {
	const copyBlocksToClipboard = () => {
		// Get all blocks from the editor
		const blocks = select("core/block-editor").getBlocks();
		const filteredBlocks = formatBlocks(blocks);
		// Convert blocks to JSON string
		const blocksJSON = JSON.stringify(filteredBlocks, null, 2);

		// Copy to clipboard
		navigator.clipboard
			.writeText(blocksJSON)
			.then(() => {
				// Show success notice using WordPress notice system
				wp.data
					.dispatch("core/notices")
					.createSuccessNotice(
						__("Blocks copied to clipboard as JSON!", "wp-copy-blocks"),
						{
							type: "snackbar",
						},
					);
			})
			.catch((err) => {
				// Show error notice if copying failed
				wp.data
					.dispatch("core/notices")
					.createErrorNotice(
						__("Failed to copy blocks to clipboard.", "wp-copy-blocks"),
						{
							type: "snackbar",
						},
					);
				console.error("Failed to copy blocks:", err);
			});
	};

	return createElement(
		"div",
		{ className: "copy-blocks-json-button-container" },
		createElement(
			Button,
			{
				isPrimary: true,
				onClick: copyBlocksToClipboard,
				className: "copy-blocks-json-button",
			},
			__("Copy Blocks as JSON", "wp-copy-blocks"),
		),
	);
};

registerPlugin("wp-copy-blocks", {
	render: () => {
		return (
			<PluginMoreMenuItem>
				<CopyBlocksButton />
			</PluginMoreMenuItem>
		);
	},
	icon: "clipboard",
});
