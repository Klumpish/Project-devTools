'use client';
// Displays a tool (icon, name, tags)

import { Tool } from '@/types/tool';
import Image from 'next/image';

type Props = {
	tool: Tool;
};

export default function ToolCard({ tool }: Props) {
	return (
		<div className="bg-gray-900 rounded-2xl p-4 shadow-md hover:shadow-xl transition">
			<div className="flex items-center gap-4">
				<Image
					src={tool.image}
					alt={tool.name}
					width={48}
					height={48}
					className="rounded-md"
				/>
				<div>
					<h2 className="text-lg font-semibold">{tool.name}</h2>
					<p className="text-sm text-gray-400">{tool.category}</p>
				</div>
			</div>
			<p className="mt-3 text-sm text-gray-300">{tool.description}</p>
			<div className="mt-4 flex flex-wrap gap-2">
				{tool.tags.map((tag) => (
					<span
						key={tag}
						className="bg-gray-700 text-xs text-white px-2 py-1 rounded-md">
						#{tag}
					</span>
				))}
			</div>
			<a
				href={tool.url}
				target="_blank"
				className="inline-block mt-4 text-sm text-blue-400 hover:underline">
				Visit site →
			</a>
		</div>
	);
}
