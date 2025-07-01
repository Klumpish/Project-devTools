// src/data/tools.ts
import { Tool } from '@/types/tool';

export const tools: Tool[] = [
	{
		id: 'colorhunt',
		name: 'Color Hunt',
		description:
			'A curated collection of color palettes for designers and developers.',
		url: 'https://colorhunt.co',
		category: 'Color',
		tags: ['palette', 'inspiration', 'ui'],
		image: 'https://picsum.photos/400', //use real images
		isOfflineFriendly: false,
		dateAdded: new Date().toISOString(), //set date later
	},
	{
		id: 'heroicons',
		name: 'Heroicons',
		description:
			'Beautiful hand-crafted SVG icons, by the makers of Tailwind CSS.',
		url: 'https://heroicons.com/',
		category: 'Icons',
		tags: ['svg', 'icons', 'tailwind'],
		image: '/images/tools/heroicons.png',
		dateAdded: '2025-06-28',
		howTo: [
			'Go to https://heroicons.com',
			'Pick an icon you like',
			'Copy the SVG code or install via npm for React',
			'npm install React',
		],
		syntax: [
			{
				title: 'Usage in React',
				code: `import { HomeIcon } from '@heroicons/react/24/outline';

<HomeIcon className="h-6 w-6 text-blue-500" />`,
			},
			{
				title: 'CDN Example',
				code: `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" ...></svg>`,
			},
		],
		details: {
			intro:
				'Heroicons provides free MIT-licensed high-quality SVG icons for UI development.',
			features: [
				'Optimized for Tailwind CSS ',
				'Available in solid and outline styles',
				'React support',
			],
			tips: [
				'Try combining with Tailwind utility classes',
				'Can be used directly in HTML or JSX',
			],
		},
	},
	{
		id: 'typescale',
		name: 'Type Scale',
		description: 'A visual calculator for typography scales.',
		url: 'https://type-scale.com',
		category: 'Fonts / Typography',
		tags: ['fonts', 'typography', 'scale'],
		image: 'https://picsum.photos/400',
		isOfflineFriendly: false,
		dateAdded: new Date().toISOString(),
	},
	{
		id: 'lighthouse',
		name: 'Lighthouse',
		description:
			'Automated tool for improving the quality of web pages. Built into Chrome DevTools.',
		url: 'https://developer.chrome.com/docs/lighthouse/overview/',
		category: 'Performance',
		tags: ['performance', 'audit', 'chrome'],
		image: 'https://picsum.photos/400',
		isOfflineFriendly: true,
		dateAdded: new Date().toISOString(),
	},
	{
		id: 'nextjs',
		name: 'Next.js',
		description: 'React framework for building web apps',
		url: 'https://nextjs.org',
		category: 'UI / Design',
		tags: ['react', 'ssr', 'framework'],
		image: '/images/nextjs-logo.png',
		dateAdded: '2025-06-28',

		howTo: [
			'Install Node.js and npm',
			'Run `npx create-next-app@latest`',
			'Choose TypeScript if needed',
			'Run `npm run dev` to start the server',
		],
		syntax: [
			{
				title: '<Image> component',
				code: `<Image src="/logo.png" width={100} height={100} alt="Logo" />`,
				explanation:
					'Next.js uses its own Image component for optimized images. You must provide width, height, and alt.',
			},
		],
	},
	{
		id: 'tailwindcss',
		name: 'Tailwind CSS',
		description:
			'A utility-first CSS framework for rapidly building custom user interfaces.',
		url: 'https://tailwindcss.com/',
		category: 'Frameworks / UI', // Or 'CSS', 'Styling' depending on your ToolCategory definition
		tags: ['css', 'framework', 'utility-first', 'design system', 'responsive'],
		image: '/images/tools/tailwindcss-logo.png', // Assuming you'd place a logo here
		isOfflineFriendly: true, // Once downloaded, the CLI works offline
		dateAdded: '2025-07-01', // Current date

		howTo: [
			'Install Node.js and npm/yarn.',
			'Create a new project (e.g., `npx create-next-app@latest`).',
			'Install Tailwind CSS: `npm install -D tailwindcss postcss autoprefixer`.',
			'Initialize Tailwind CSS: `npx tailwindcss init -p`. This creates `tailwind.config.js` and `postcss.config.js`.',
			'Configure your template paths in `tailwind.config.js` to scan for Tailwind classes.',
			'Add the Tailwind directives to your main CSS file (e.g., `globals.css`).',
			'Start your development server (`npm run dev`) and begin using Tailwind classes in your HTML/JSX!',
		],
		syntax: [
			{
				title: 'Basic Styling',
				code: `<div class="bg-blue-500 text-white p-4 rounded-lg shadow-md">
  Hello, Tailwind!
</div>`,
				explanation:
					'Applies a blue background, white text, padding, rounded corners, and a shadow.',
			},
			{
				title: 'Responsive Design',
				code: `<div class="w-full md:w-1/2 lg:w-1/3 p-4">
  This div takes full width on small screens, half width on medium, and one-third on large.
</div>`,
				explanation:
					'Demonstrates responsive classes for width at different breakpoints.',
			},
			{
				title: 'Hover State',
				code: `<button class="bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded">
  Hover Me
</button>`,
				explanation: 'Changes background color on hover.',
			},
		],
		details: {
			intro:
				'Tailwind CSS is a utility-first CSS framework packed with classes like `flex`, `pt-4`, `text-center` and `rotate-90` that can be composed to build any design, directly in your markup.',
			features: [
				'Highly customizable via `tailwind.config.js`.',
				'No more writing custom CSS (mostly).',
				'Faster UI development with utility classes.',
				'Built-in responsive design capabilities.',
				'PurgeCSS integration to remove unused styles in production.',
				'Excellent documentation and community support.',
			],
			tips: [
				'Start with mobile-first design, applying smaller breakpoints first.',
				'Use the Tailwind VS Code extension for autocompletion.',
				'Explore the official documentation thoroughly for all available classes.',
				'Consider using a component library (like `shadcn/ui`) built on Tailwind for ready-made components.',
				'Use `@apply` sparingly in your custom CSS; prefer direct utility classes in markup when possible.',
				"When a class doesn't exist, extend Tailwind with custom utilities or JIT mode.",
			],
		},
	},
];
