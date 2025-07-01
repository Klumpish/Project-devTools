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
				'Optimized for Tailwind CSS',
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
];
