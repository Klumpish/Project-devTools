'use client';

import Link from 'next/link';
import { useState } from 'react';
import {
	Palette,
	Image,
	LayoutTemplate,
	TextCursorInput,
	TestTube,
	ServerCog,
	FileText,
	ShieldCheck,
	GaugeCircle,
	ChevronRight,
	Database,
	Github,
	SquareCode,
} from 'lucide-react';
import {
	populateCategoriesFromTools,
	initialCategoriesMenu,
} from '@/lib/toolCategories';
import { tools } from '@/data/tools';

const categories = populateCategoriesFromTools(tools, initialCategoriesMenu);

// const xcategories = {
// 	Color: ['Coolors', 'ColorHunt', 'TailwindShades'],
// 	Icons: ['Heroicons', 'FontAwesome', 'Lucide'],
// 	UI: ['Tailwindcss', 'ShadCN', 'Flowbite', 'nextjs'],
// };

export const categoryIcons: Record<string, React.JSX.Element> = {
	Color: <Palette size={20} />,
	Icons: <Image size={20} />,
	UI: <LayoutTemplate size={20} />,
	Fonts: <TextCursorInput size={20} />,
	Testing: <TestTube size={20} />,
	'API Tools': <ServerCog size={20} />,
	Documentation: <FileText size={20} />,
	Security: <ShieldCheck size={20} />,
	Performance: <GaugeCircle size={20} />,
	'Git-Github': <Github size={20} />,
	Databases: <Database size={20} />,
	Programming: <SquareCode size={20} />,
};

export default function Sidebar() {
	const [hovered, setHovered] = useState(false);
	const [expandedCategory, setExpandedCategory] = useState<string | null>(null);

	return (
		<aside
			onMouseEnter={() => setHovered(true)}
			onMouseLeave={() => {
				setHovered(false);
				setExpandedCategory(null);
			}}
			className={`bg-gray-900 text-white h-screen p-4 transition-all duration-300 h-full
        ${hovered ? 'w-64' : 'w-16'} fixed z-10`}>
			<nav className="flex flex-col justify-around h-3/5">
				{Object.entries(categories).map(([category, tools]) => (
					<div
						key={category}
						className="mb-2 text-2xl group">
						<button
							onClick={() =>
								setExpandedCategory((prev) =>
									prev === category ? null : category
								)
							}
							className="w-full  flex space-x-2 size-10 hover:text-purple-400 hover:bg-gray-800">
							{/* Show icon always */}
							{categoryIcons[category]}

							{/* Only show full text when hovered */}
							{hovered && <span className="font-bold">{category}</span>}

							{hovered && (
								<ChevronRight
									size={16}
									className={`transform transition-transform ${
										expandedCategory === category ? 'rotate-90' : ''
									}`}
								/>
							)}
						</button>

						{hovered && expandedCategory === category && (
							<ul className="ml-4 mt-1 ">
								{tools.map((tool) => (
									<li
										key={tool}
										className="hover:bg-gray-800">
										<Link
											href={`/${category.toLowerCase()}/${tool.toLowerCase()}`}
											className="block py-1 text-lg hover:text-purple-300">
											{tool.charAt(0).toUpperCase() + tool.slice(1)}
										</Link>
									</li>
								))}
							</ul>
						)}
					</div>
				))}
			</nav>
		</aside>
	);
}
