import { ToolCategory } from './category';
// /types/tool.ts (or a JSON format initially)

export interface Tool {
	id: string; // Unique ID
	name: string;
	description: string;
	url: string; // Link to the tool
	category: ToolCategory; // e.g., "UI", "Testing", "Database"
	tags: string[]; // e.g., ["icons", "accessibility"]
	image: string; // Icon or logo URL
	isOfflineFriendly?: boolean; // Optional flag
	notes?: string; // Optional notes from the user
	dateAdded: string; // ISO format
}
