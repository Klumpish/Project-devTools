'use client';

// import { useState } from 'react';
import Image from 'next/image';
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const mockTool = {
	id: 'coolors',
	name: 'Coolors',
	description:
		'Coolors is a super fast color palette generator that helps you create, save, and share perfect palettes.',
	image: '/images/coolors-logo.png',
	category: 'Color',
	tags: ['palette', 'ui', 'design'],
	website: 'https://coolors.co/',
	howTo: [
		'Go to the Coolors website.',
		'Click “Start the Generator”.',
		'Press spacebar to shuffle palettes.',
		'Lock the colors you like and keep shuffling.',
		'Export or copy your palette.',
	],
	syntax: [
		{
			title: 'Using a color palette in Tailwind',
			code: 'bg-[#abcdef] // use hex values directly in class names',
		},
		{
			title: 'Copy hex values into a CSS file',
			code: ':root { --main-color: #abcdef; }',
		},
	],
};

export default function ToolDetailPage() {
	return (
		<div className="p-4 max-w-4xl mx-auto">
			<div className="flex flex-col md:flex-row items-center md:items-start gap-6">
				<Image
					src={mockTool.image}
					alt={mockTool.name}
					width={100}
					height={100}
					className="rounded-xl border shadow"
				/>

				<div className="flex-1">
					<h1 className="text-3xl font-bold mb-2">{mockTool.name}</h1>
					<p className="text-muted-foreground mb-4">{mockTool.description}</p>

					<div className="flex flex-wrap gap-2 text-sm mb-4">
						<Badge variant="outline">Category: {mockTool.category}</Badge>
						{mockTool.tags.map((tag) => (
							<Badge key={tag}>{tag}</Badge>
						))}
					</div>

					<a
						href={mockTool.website}
						target="_blank"
						rel="noopener noreferrer">
						<Button>Visit Website</Button>
					</a>
				</div>
			</div>

			<div className="mt-10 space-y-4">
				<Accordion
					type="single"
					collapsible>
					<AccordionItem value="howto">
						<AccordionTrigger>🚀 How to Get Started</AccordionTrigger>
						<AccordionContent>
							<ol className="list-decimal pl-5 space-y-1">
								{mockTool.howTo.map((step, index) => (
									<li key={index}>{step}</li>
								))}
							</ol>
						</AccordionContent>
					</AccordionItem>

					<AccordionItem value="syntax">
						<AccordionTrigger>💡 Syntax / Usage</AccordionTrigger>
						<AccordionContent>
							{mockTool.syntax.map((s, index) => (
								<div
									key={index}
									className="mb-4">
									<p className="font-medium mb-1">{s.title}</p>
									<pre className="bg-muted p-3 rounded text-sm overflow-x-auto">
										<code>{s.code}</code>
									</pre>
								</div>
							))}
						</AccordionContent>
					</AccordionItem>
				</Accordion>
			</div>
		</div>
	);
}

// // src/app/[category]/[tool]/page.tsx

// import { notFound } from 'next/navigation';
// import { tools } from '@/data/tools'; // your tool list
// import { Tool } from '@/types/tool';
// import Image from 'next/image';
// import Link from 'next/link';

// interface ToolPageProps {
// 	params: {
// 		category: string;
// 		tool: string;
// 	};
// }

// export default function ToolPage({ params }: ToolPageProps) {
// 	const { category, tool } = params;

// 	const foundTool: Tool | undefined = tools.find(
// 		(t) =>
// 			t.category.toLowerCase() === category.toLowerCase() &&
// 			// set it to t.id cuz the id dont have spaces in them.
// 			t.id.toLowerCase() === tool.toLowerCase()
// 	);

// 	if (!foundTool) {
// 		return notFound();
// 	}

// 	return (
// 		<div className="p-6 max-w-3xl mx-auto text-white">
// 			<h1 className="text-3xl font-bold mb-4">{foundTool.name}</h1>

// 			<Image
// 				src={foundTool.image}
// 				alt={`${foundTool.name} logo`}
// 				width={80}
// 				height={80}
// 				className="rounded-lg mb-4"
// 			/>

// 			<p className="mb-4 text-lg">{foundTool.description}</p>

// 			<p className="mb-2">
// 				<strong>Category:</strong> {foundTool.category}
// 			</p>

// 			<p className="mb-2">
// 				<strong>Tags:</strong> {foundTool.tags.join(', ')}
// 			</p>

// 			<p className="mb-4">
// 				<strong>Added:</strong>{' '}
// 				{new Date(foundTool.dateAdded).toLocaleDateString()}
// 			</p>

// 			{foundTool.notes && (
// 				<p className="mb-4">
// 					<strong>Notes:</strong> {foundTool.notes}
// 				</p>
// 			)}

// 			<Link
// 				href={foundTool.url}
// 				target="_blank"
// 				rel="noopener noreferrer"
// 				className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
// 				Visit Website
// 			</Link>
// 		</div>
// 	);
// }
