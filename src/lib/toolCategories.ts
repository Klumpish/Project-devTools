// src/lib/toolCategories.ts
import { tools } from '@/data/tools';
import { Tool } from '@/types/tool';

export const TOOL_CATEGORIES = [
	'UI / Design',
	'Icons',
	'Color',
	'Fonts / Typography',
	'Testing',
	'Documentation',
	'API Tools',
	'Accessibility',
	'Performance',
	'Security',
];

// This is your initial menu structure, defining the main categories/menus
// We'll use this as a base and populate the tool IDs into the arrays.
// for Sidebar Menu
export const initialCategoriesMenu: Record<string, string[]> = {
	Color: [],
	Icons: [],
	UI: [],
	Fonts: [],
	Performance: [],
	// Add any other top-level categories you want to explicitly define here
	// e.g., 'Testing': [], 'Database': [],
};

/**
 * Populates a category menu object with tool IDs based on their categories.
 * It tries to match tool.category directly or by checking if it contains a category key.
 *
 * @param allTools An array of Tool objects.
 * @param baseCategories An object defining the top-level categories (keys) with empty arrays.
 * @returns A new object with category keys mapped to arrays of tool IDs.
 */
export function populateCategoriesFromTools(
	allTools: Tool[],
	baseCategories: Record<string, string[]>
): Record<string, string[]> {
	// Create a deep copy to avoid mutating the original baseCategories object
	const populatedCategories: Record<string, string[]> = {};
	for (const key in baseCategories) {
		if (Object.prototype.hasOwnProperty.call(baseCategories, key)) {
			populatedCategories[key] = [...baseCategories[key]]; // Copy existing items if any
		}
	}

	allTools.forEach((tool) => {
		let matchedCategoryKey: string | undefined;

		// 1. Try to find a direct match (e.g., tool.category 'Color' matches key 'Color')
		if (
			Object.prototype.hasOwnProperty.call(populatedCategories, tool.category)
		) {
			matchedCategoryKey = tool.category;
		} else {
			// 2. If no direct match, check if the tool's category string contains any of the base category keys
			// This handles cases like 'Frameworks / UI' matching 'UI'
			const categoryKeys = Object.keys(baseCategories);
			// Sort keys by length in descending order to prioritize more specific matches
			// e.g., 'UI / Design' over 'UI' if both were keys (though not in your current example)
			categoryKeys.sort((a, b) => b.length - a.length);

			for (const key of categoryKeys) {
				// Use toLowerCase for case-insensitive matching
				if (tool.category.toLowerCase().includes(key.toLowerCase())) {
					matchedCategoryKey = key;
					break; // Use the first (longest/most specific) match found
				}
			}
		}

		if (matchedCategoryKey) {
			// Ensure the array for the matched category exists
			if (!populatedCategories[matchedCategoryKey]) {
				populatedCategories[matchedCategoryKey] = [];
			}
			// Add the tool's ID if it's not already present in the array
			if (!populatedCategories[matchedCategoryKey].includes(tool.id)) {
				populatedCategories[matchedCategoryKey].push(tool.id);
			}
		} else {
			// Optional: Log a warning for tools that don't fit any defined category
			console.warn(
				`Tool "${tool.name}" (ID: ${tool.id}) with category "${tool.category}" did not match any predefined menu category.`
			);
			// Optional: Add unmatched tools to an 'Other' category
			// if (!populatedCategories['Other']) {
			//     populatedCategories['Other'] = [];
			// }
			// if (!populatedCategories['Other'].includes(tool.id)) {
			//     populatedCategories['Other'].push(tool.id);
			// }
		}
	});

	return populatedCategories;
}

// --- Example Usage ---
// This is how you would use it in your application, e.g., in a layout or component
// that needs the categorized tools.
const categorizedToolsMenu = populateCategoriesFromTools(
	tools,
	initialCategoriesMenu
);

console.log('Dynamically Populated Categories:', categorizedToolsMenu);

/*
Expected Output in console:

Dynamically Populated Categories: {
  Color: [ 'colorhunt' ],
  Icons: [ 'heroicons' ],
  UI: [ 'tailwindcss', 'shadcn', 'nextjs' ]
}
*/
