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
} from 'lucide-react';

const categoryIcons: Record<string, React.JSX.Element> = {
	Color: <Palette size={20} />,
	Icons: <Image size={20} />,
	UI: <LayoutTemplate size={20} />,
	Fonts: <TextCursorInput size={20} />,
	Testing: <TestTube size={20} />,
	'API Tools': <ServerCog size={20} />,
	Documentation: <FileText size={20} />,
	Security: <ShieldCheck size={20} />,
	Performance: <GaugeCircle size={20} />,
};

const categories = {
	Color: ['Coolors', 'ColorHunt', 'TailwindShades'],
	Icons: ['Heroicons', 'FontAwesome', 'Lucide'],
	UI: ['TailwindUI', 'ShadCN', 'Flowbite'],
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
			className={`bg-gray-900 text-white h-screen p-4 transition-all duration-300 
        ${hovered ? 'w-64' : 'w-16'} fixed z-10`}>
			<nav>
				{Object.entries(categories).map(([category, tools]) => (
					<div
						key={category}
						className="mb-2 group">
						<button
							onClick={() =>
								setExpandedCategory((prev) =>
									prev === category ? null : category
								)
							}
							className="w-full flex items-center space-x-2 hover:text-purple-400">
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
							<ul className="ml-4 mt-1">
								{tools.map((tool) => (
									<li key={tool}>
										<Link
											href={`/${category.toLowerCase()}/${tool.toLowerCase()}`}
											className="block py-1 text-sm hover:text-purple-300">
											{tool}
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
