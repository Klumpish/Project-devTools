import { tools } from '@/data/tools';
import ToolCard from '@/components/ToolCard';

export default function Home() {
	return (
		<main className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white p-6">
			<h1 className="text-3xl font-bold mb-6">🛠️ DevToolbox</h1>
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
				{tools.map((tool) => (
					<ToolCard
						key={tool.id}
						tool={tool}
					/>
				))}
			</div>
		</main>
	);
}
