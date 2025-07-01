import Link from 'next/link';
// Navigation bar

export default function Header() {
	return (
		<header className="bg-gray-950 border-b border-gray-800 shadow-md">
			<div className="container mx-auto px-4 py-4 flex justify-between items-center">
				<h1 className="text-2xl font-bold">
					<Link href="/">🛠️ DevToolbox</Link>
				</h1>
				<nav className="space-x-4 text-lx">
					<Link
						href="/"
						className="hover:text-blue-400">
						Home
					</Link>
					<Link
						href="/about"
						className="hover:text-blue-400">
						About
					</Link>
				</nav>
			</div>
		</header>
	);
}
