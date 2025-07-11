import { tools } from '@/data/tools';
import ToolCard from '@/components/ToolCard';

export default function Home() {
	return (
		<div className="grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-3 gap-6">
			{tools.map((tool) => (
				<ToolCard
					key={tool.id}
					tool={tool}
				/>
			))}
		</div>
	);
}
