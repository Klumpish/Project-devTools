// src/app/[category]/[tool]/page.tsx

import { notFound } from 'next/navigation';
import { tools } from '@/data/tools'; // your tool list
import { Tool } from '@/types/tool';
import Image from 'next/image';
import Link from 'next/link';

interface ToolPageProps {
	params: {
		category: string;
		tool: string;
	};
}

export default function ToolPage({ params }: ToolPageProps) {
	const { category, tool } = params;

	const foundTool: Tool | undefined = tools.find(
		(t) =>
			t.category.toLowerCase() === category.toLowerCase() &&
			// set it to t.id cuz the id dont have spaces in them.
			t.id.toLowerCase() === tool.toLowerCase()
	);

	if (!foundTool) {
		return notFound();
	}

	return (
		<div className="p-6 max-w-3xl mx-auto text-white">
			<h1 className="text-3xl font-bold mb-4">{foundTool.name}</h1>

			<Image
				src={foundTool.image}
				alt={`${foundTool.name} logo`}
				width={80}
				height={80}
				className="rounded-lg mb-4"
			/>

			<p className="mb-4 text-lg">{foundTool.description}</p>

			<p className="mb-2">
				<strong>Category:</strong> {foundTool.category}
			</p>

			<p className="mb-2">
				<strong>Tags:</strong> {foundTool.tags.join(', ')}
			</p>

			<p className="mb-4">
				<strong>Added:</strong>{' '}
				{new Date(foundTool.dateAdded).toLocaleDateString()}
			</p>

			{foundTool.notes && (
				<p className="mb-4">
					<strong>Notes:</strong> {foundTool.notes}
				</p>
			)}

			<Link
				href={foundTool.url}
				target="_blank"
				rel="noopener noreferrer"
				className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
				Visit Website
			</Link>
		</div>
	);
}
