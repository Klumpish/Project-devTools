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
		description:
			'A visual calculator for typography scales, helping designers choose harmonious font sizes.',
		url: 'https://type-scale.com/',
		category: 'Fonts / Typography',
		tags: ['fonts', 'typography', 'design', 'scale', 'ui'],
		image: 'https://www.google.com/s2/favicons?domain=type-scale.com&sz=100',
		isOfflineFriendly: false,
		dateAdded: '2025-07-01',
		howTo: [
			'Visit the Type Scale website.',
			'Choose a base font size (e.g., 16px).',
			'Select a scale (e.g., Major Third, Golden Ratio).',
			'Observe the generated font sizes and their relationships.',
			'Copy the CSS values for use in your project.',
		],
		details: {
			intro:
				'Type Scale helps designers establish a harmonious and consistent typographic hierarchy by generating a set of font sizes based on a chosen mathematical ratio.',
			features: [
				'Interactive visual interface.',
				'Multiple typographic scales (Major Third, Perfect Fourth, Golden Ratio, etc.).',
				'Customizable base font size.',
				'CSS output for easy integration.',
			],
			tips: [
				'Start with a common body font size (e.g., 16px or 18px).',
				'Experiment with different scales to find one that fits your design aesthetic.',
				'Use the generated scale consistently across your headings and body text.',
				'Combine with fluid typography techniques for better responsiveness.',
			],
		},
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
	{
		id: 'shadcn',
		name: 'shadcn/ui',
		description:
			'Beautifully designed components that you can copy and paste into your apps.',
		url: 'https://ui.shadcn.com/',
		category: 'UI',
		tags: ['react', 'components', 'tailwind', 'headless ui'],
		image: 'https://www.google.com/s2/favicons?domain=ui.shadcn.com&sz=100',
		isOfflineFriendly: false,
		dateAdded: '2025-07-01',
	},
	{
		id: 'lighthouse',
		name: 'Lighthouse',
		description:
			'Automated tool for improving the quality, performance, and accessibility of web pages.',
		url: 'https://developer.chrome.com/docs/lighthouse/overview/',
		category: 'Performance',
		tags: ['performance', 'audit', 'chrome', 'seo', 'accessibility', 'pwa'],
		image:
			'https://www.google.com/s2/favicons?domain=developer.chrome.com&sz=100',
		isOfflineFriendly: true, // Built into Chrome DevTools
		dateAdded: '2025-07-01',
		howTo: [
			'Open Chrome DevTools (F12 or right-click -> Inspect).',
			'Go to the "Lighthouse" tab.',
			'Select categories (e.g., Performance, Accessibility, SEO) and device type (Mobile/Desktop).',
			'Click "Analyze page load" and wait for the report.',
			'Review the scores and suggestions to improve your page.',
		],
		details: {
			intro:
				'Lighthouse is an open-source, automated tool for improving the quality of web pages. It can be run against any web page, public or requiring authentication.',
			features: [
				'Audits for Performance, Accessibility, Best Practices, SEO, and PWA.',
				'Provides actionable insights and recommendations.',
				'Integrates directly into Chrome DevTools.',
				'Can be run as a Node module or CLI tool for CI/CD.',
			],
			tips: [
				'Run Lighthouse regularly during development.',
				'Focus on critical issues first (e.g., performance bottlenecks).',
				'Use it in conjunction with other testing tools for comprehensive coverage.',
				'Understand the metrics: First Contentful Paint, Largest Contentful Paint, Cumulative Layout Shift, etc.',
			],
		},
	},
	{
		id: 'javascript',
		name: 'JavaScript',
		description:
			'A high-level, interpreted programming language that conforms to the ECMAScript specification.',
		url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
		category: 'Programming',
		tags: ['language', 'frontend', 'backend', 'web', 'scripting'],
		image:
			'https://www.google.com/s2/favicons?domain=developer.mozilla.org&sz=100',
		isOfflineFriendly: true, // Core language knowledge
		dateAdded: '2025-07-01',
		howTo: [
			'Learn basic syntax: variables, data types, operators.',
			'Understand control flow: if/else, loops (for, while).',
			'Explore functions and scope.',
			'Dive into DOM manipulation for web interactivity.',
			'Learn about asynchronous JavaScript (Promises, async/await).',
			'Practice by building small projects.',
		],
		syntax: [
			{
				title: 'Variable Declaration (ES6+)',
				code: `const greeting = "Hello, World!";
let count = 10;
var oldVar = true;`,
				explanation:
					'`const` for constant values, `let` for reassignable variables, `var` (older, function-scoped).',
			},
			{
				title: 'Function Definition',
				code: `function greet(name) {
  return \`Hello, \${name}!\`;
}

const add = (a, b) => a + b;`,
				explanation:
					'Traditional function declaration and arrow function expression.',
			},
		],
		details: {
			intro:
				'JavaScript is the programming language of the Web. It is used for both client-side and server-side development, enabling dynamic and interactive web experiences.',
			features: [
				'Interpreted and Just-in-Time compiled.',
				'Multi-paradigm (object-oriented, functional, imperative).',
				'Dynamic typing.',
				'Event-driven, non-blocking I/O (Node.js).',
				'Vast ecosystem with numerous libraries and frameworks.',
			],
			tips: [
				'Master asynchronous patterns (Promises, async/await).',
				'Understand `this` keyword and context.',
				'Learn about closures and higher-order functions.',
				'Use modern ES6+ features for cleaner code.',
				'Utilize browser DevTools for debugging.',
			],
		},
	},
	{
		id: 'typescript',
		name: 'TypeScript',
		description:
			'A strongly typed superset of JavaScript that compiles to plain JavaScript.',
		url: 'https://www.typescriptlang.org/',
		category: 'Programming',
		tags: ['language', 'javascript', 'static typing', 'frontend', 'backend'],
		image:
			'https://www.google.com/s2/favicons?domain=www.typescriptlang.org&sz=100',
		isOfflineFriendly: true, // Compiler can be run offline
		dateAdded: '2025-07-01',
		howTo: [
			'Install TypeScript: `npm install -g typescript`.',
			'Create a `tsconfig.json` file in your project root.',
			'Write TypeScript code (`.ts` or `.tsx` files).',
			'Compile your code: `tsc`.',
			'Integrate with build tools like Webpack or bundlers like Next.js.',
		],
		syntax: [
			{
				title: 'Type Annotations',
				code: `let userName: string = "Alice";
let age: number = 30;
let isActive: boolean = true;`,
				explanation: 'Explicitly define the type of variables.',
			},
			{
				title: 'Interfaces',
				code: `interface User {
  id: number;
  name: string;
  email?: string; // Optional property
}

const user: User = { id: 1, name: "Bob" };`,
				explanation: 'Define the shape of objects for better type checking.',
			},
		],
		details: {
			intro:
				'TypeScript extends JavaScript by adding static type definitions. This helps catch errors early during development, leading to more robust and maintainable code, especially in large applications.',
			features: [
				'Static typing for JavaScript.',
				'Compiles to plain JavaScript.',
				'Supports modern ECMAScript features.',
				'Improved tooling (autocompletion, refactoring).',
				'Better code readability and maintainability.',
				'Optional type annotations for gradual adoption.',
			],
			tips: [
				'Start with `noImplicitAny` and gradually tighten type checks.',
				'Use interfaces and types effectively for data structures.',
				'Leverage utility types for common transformations.',
				'Understand type inference to avoid unnecessary annotations.',
				'Integrate with your IDE for real-time type checking.',
			],
		},
	},
	{
		id: 'git',
		name: 'Git',
		description: 'A free and open-source distributed version control system.',
		url: 'https://git-scm.com/',
		category: 'Git-github',
		tags: ['version control', 'collaboration', 'source code management', 'cli'],
		image: 'https://www.google.com/s2/favicons?domain=git-scm.com&sz=100',
		isOfflineFriendly: true, // Distributed nature allows offline work
		dateAdded: '2025-07-01',
		howTo: [
			'Install Git on your system.',
			'Initialize a new repository: `git init`.',
			'Add files to staging: `git add .`.',
			'Commit changes: `git commit -m "Initial commit"`.',
			'Create branches: `git branch <branch-name>`.',
			'Switch branches: `git checkout <branch-name>`.',
			'Merge branches: `git merge <branch-name>`.',
			'Connect to a remote repository: `git remote add origin <url>`.',
			'Push changes: `git push -u origin <branch-name>`.',
			'Pull changes: `git pull origin <branch-name>`.',
		],
		syntax: [
			{
				title: 'Basic Workflow',
				code: `git add .
git commit -m "feat: Add new feature"
git push origin main`,
				explanation:
					'Adds all changes, commits with a message, and pushes to the main branch.',
			},
			{
				title: 'Branching',
				code: `git checkout -b new-feature
# ... make changes ...
git add .
git commit -m "feat: Implement new feature"
git checkout main
git merge new-feature`,
				explanation:
					'Creates a new branch, commits changes, switches back to main, and merges the feature.',
			},
		],
		details: {
			intro:
				'Git is a powerful version control system that tracks changes in source code during software development, enabling multiple developers to work together on non-linear development.',
			features: [
				'Distributed architecture (each developer has a full copy of the repository).',
				'Fast and efficient for large projects.',
				'Strong support for non-linear development (branching and merging).',
				'Data integrity and cryptographic authentication of history.',
				'Used by millions of developers worldwide.',
			],
			tips: [
				'Commit small, logical changes frequently.',
				'Write clear and concise commit messages.',
				'Use branches for new features or bug fixes.',
				'Learn `git rebase` for cleaning up commit history (with caution).',
				'Understand `git reset` and `git revert` for undoing changes.',
				'Utilize a `.gitignore` file to exclude unnecessary files.',
			],
		},
	},
	{
		id: 'github',
		name: 'GitHub',
		description:
			'A web-based platform for version control and collaboration, built on Git.',
		url: 'https://github.com/',
		category: 'Git-github',
		tags: [
			'version control',
			'collaboration',
			'hosting',
			'social coding',
			'devops',
		],
		image: 'https://www.google.com/s2/favicons?domain=github.com&sz=100',
		isOfflineFriendly: false, // Requires internet connection
		dateAdded: '2025-07-01',
		howTo: [
			'Create a GitHub account.',
			'Create a new repository.',
			'Connect your local Git repository to GitHub: `git remote add origin <repo-url>`.',
			'Push your code: `git push -u origin main`.',
			'Create Pull Requests to propose changes.',
			'Review and merge code with collaborators.',
			'Utilize GitHub Issues for task tracking and bug reports.',
		],
		syntax: [
			{
				title: 'Cloning a Repository',
				code: `git clone https://github.com/username/repository.git`,
				explanation:
					'Downloads a copy of a remote repository to your local machine.',
			},
			{
				title: 'Creating a Pull Request (Conceptual)',
				code: `// 1. Create a new branch and make changes locally
// 2. Push the branch: git push origin new-feature
// 3. Go to GitHub, navigate to your repo, and click "Compare & pull request"`,
				explanation:
					'The common steps to propose changes for review and merging on GitHub.',
			},
		],
		details: {
			intro:
				'GitHub is the largest platform for hosting Git repositories, facilitating collaborative software development. It provides a web interface for Git, along with features for project management, issue tracking, and code review.',
			features: [
				'Repository hosting with Git.',
				'Pull Requests for code review and collaboration.',
				'Issue tracking and project boards.',
				'GitHub Actions for CI/CD automation.',
				'Wikis, Pages, and Gists for documentation and snippets.',
				'Large open-source community and social features.',
			],
			tips: [
				'Use clear and descriptive Pull Request titles and descriptions.',
				'Break down large features into smaller, manageable PRs.',
				'Engage in code reviews constructively.',
				'Explore GitHub Actions for automating workflows (testing, deployment).',
				'Star repositories you find useful.',
			],
		},
	},
	{
		id: 'react',
		name: 'React',
		description:
			'A JavaScript library for building user interfaces, especially single-page applications.',
		url: 'https://react.dev/',
		category: 'Frameworks / UI',
		tags: ['javascript', 'frontend', 'library', 'ui', 'components', 'spa'],
		image: 'https://www.google.com/s2/favicons?domain=react.dev&sz=100',
		isOfflineFriendly: true, // Dev tools can work offline, core concepts are offline
		dateAdded: '2025-07-01',
		howTo: [
			'Set up a React project (e.g., `npx create-react-app` or Next.js).',
			'Understand JSX syntax.',
			'Learn about components (functional and class-based).',
			'Master state and props for data flow.',
			'Explore React Hooks (useState, useEffect, useContext).',
			'Practice building interactive UI components.',
		],
		syntax: [
			{
				title: 'Functional Component with State',
				code: `import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default Counter;`,
				explanation:
					'A basic React functional component using the `useState` hook for managing internal state.',
			},
			{
				title: 'Props for Data Passing',
				code: `function Greeting(props) {
  return <h1>Hello, {props.name}!</h1>;
}

// Usage: <Greeting name="Alice" />`,
				explanation: 'Components receive data from their parent via `props`.',
			},
		],
		details: {
			intro:
				'React is a declarative, component-based JavaScript library for building interactive user interfaces. It focuses on efficiency and flexibility, allowing developers to create complex UIs from small, isolated pieces of code called components.',
			features: [
				'Component-based architecture.',
				'Declarative views.',
				'Virtual DOM for efficient updates.',
				'JSX for writing UI.',
				'Rich ecosystem with tools like React Router, Redux, Next.js.',
				'Strong community support.',
			],
			tips: [
				'Understand the component lifecycle (for class components) or effect lifecycle (for functional components).',
				'Optimize re-renders using `React.memo` and `useCallback`/`useMemo`.',
				'Manage state effectively (local, global with Context/Redux).',
				'Use a linter (ESLint) for consistent code style.',
				'Break down complex UIs into smaller, reusable components.',
			],
		},
	},
	{
		id: 'jest',
		name: 'Jest',
		description:
			'A delightful JavaScript Testing Framework with a focus on simplicity.',
		url: 'https://jestjs.io/',
		category: 'Testing',
		tags: [
			'javascript',
			'testing',
			'unit testing',
			'snapshot testing',
			'mocking',
		],
		image: 'https://www.google.com/s2/favicons?domain=jestjs.io&sz=100',
		isOfflineFriendly: true, // Runs locally
		dateAdded: '2025-07-01',
		howTo: [
			'Install Jest: `npm install --save-dev jest`.',
			'Add a "test" script to your `package.json`: `"test": "jest"`.',
			'Write test files (e.g., `my-component.test.js` or `my-function.spec.ts`).',
			'Use `describe`, `it` (or `test`), and `expect` for assertions.',
			'Run tests: `npm test`.',
		],
		syntax: [
			{
				title: 'Basic Unit Test',
				code: `function sum(a, b) {
  return a + b;
}

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});`,
				explanation:
					'Tests a simple function to ensure it returns the expected result.',
			},
			{
				title: 'Mocking a Function',
				code: `const fetchData = jest.fn(() => 'mocked data');

test('fetchData is called', () => {
  fetchData();
  expect(fetchData).toHaveBeenCalledTimes(1);
});`,
				explanation:
					'Creates a mock function to track calls or control return values.',
			},
		],
		details: {
			intro:
				'Jest is a powerful and easy-to-use JavaScript testing framework developed by Facebook. It comes with a complete set of features for writing various types of tests, including unit, integration, and snapshot tests.',
			features: [
				'Zero configuration for most JavaScript projects.',
				'Fast performance with parallel test execution.',
				'Built-in mocking capabilities.',
				'Snapshot testing for UI components.',
				'Code coverage reporting.',
				'Excellent error reporting and interactive watch mode.',
			],
			tips: [
				'Organize tests logically (e.g., by feature or component).',
				'Use `describe` blocks to group related tests.',
				'Use `beforeEach` and `afterEach` for setup/teardown.',
				'Mock external dependencies to isolate unit tests.',
				'Write clear and specific assertions.',
				'Integrate with React Testing Library for component testing.',
			],
		},
	},
	{
		id: 'cypress',
		name: 'Cypress',
		description:
			'A fast, easy, and reliable testing for anything that runs in a browser.',
		url: 'https://www.cypress.io/',
		category: 'Testing',
		tags: ['e2e testing', 'frontend testing', 'automation', 'browser testing'],
		image: 'https://www.google.com/s2/favicons?domain=www.cypress.io&sz=100',
		isOfflineFriendly: true, // Once installed, runs locally
		dateAdded: '2025-07-01',
		howTo: [
			'Install Cypress: `npm install cypress --save-dev`.',
			'Open Cypress: `npx cypress open`.',
			'Choose "E2E Testing" and configure your project.',
			'Write test files (`.cy.js` or `.cy.ts`) in the `cypress/e2e` folder.',
			'Use `cy.visit()` to navigate, `cy.get()` to select elements, and `should()` for assertions.',
			'Run tests in the Cypress Test Runner or headless via CLI.',
		],
		syntax: [
			{
				title: 'Basic E2E Test',
				code: `describe('My First Test', () => {
  it('Visits the homepage and checks content', () => {
    cy.visit('http://localhost:3000');
    cy.contains('Welcome').should('be.visible');
  });
});`,
				explanation:
					'Visits a URL and asserts that specific text is visible on the page.',
			},
			{
				title: 'Interacting with Elements',
				code: `cy.get('input[name="email"]').type('test@example.com');
cy.get('button[type="submit"]').click();`,
				explanation:
					'Types text into an input field and clicks a submit button.',
			},
		],
		details: {
			intro:
				'Cypress is an open-source, next-generation front-end testing tool built for the modern web. It enables developers to write fast, reliable, and end-to-end tests for web applications.',
			features: [
				'Real-time reloads and automatic waiting.',
				'Time travel debugging (snapshots of test execution).',
				'Automatic screenshots and videos of failures.',
				'Easy setup and configuration.',
				'Direct access to DOM and network requests.',
				'Supports component testing in addition to E2E.',
			],
			tips: [
				'Use `data-cy` attributes for robust selectors instead of CSS classes.',
				'Avoid `cy.wait()` unless absolutely necessary; let Cypress handle retries.',
				'Organize tests by user flows or features.',
				'Use custom commands for repetitive actions.',
				'Integrate with CI/CD pipelines for automated testing.',
			],
		},
	},
	{
		id: 'mongodb',
		name: 'MongoDB',
		description:
			'A NoSQL document database designed for scalability and developer agility.',
		url: 'https://www.mongodb.com/',
		category: 'Databases',
		tags: ['database', 'nosql', 'document database', 'backend', 'scalability'],
		image: 'https://www.google.com/s2/favicons?domain=www.mongodb.com&sz=100',
		isOfflineFriendly: true, // Can run locally
		dateAdded: '2025-07-01',
		howTo: [
			'Download and install MongoDB Community Server.',
			'Start the MongoDB daemon (`mongod`).',
			'Connect using the MongoDB Shell (`mongosh`).',
			'Create a database and insert documents.',
			'Perform queries to retrieve and filter data.',
			'Integrate with a backend framework (e.g., Node.js with Mongoose).',
			'Consider MongoDB Atlas for cloud-hosted solutions.',
		],
		syntax: [
			{
				title: 'Insert Document',
				code: `db.users.insertOne({
  name: "Alice",
  age: 30,
  email: "alice@example.com"
});`,
				explanation: 'Inserts a single document into the `users` collection.',
			},
			{
				title: 'Find Documents',
				code: `db.users.find({ age: { $gt: 25 } }); // Find users older than 25
db.users.find({ name: "Alice" }).project({ name: 1, email: 1, _id: 0 }); // Select specific fields`,
				explanation:
					'Queries the `users` collection, showing examples of filtering and projection.',
			},
		],
		details: {
			intro:
				'MongoDB is a popular NoSQL database that stores data in flexible, JSON-like documents. It is known for its scalability, high performance, and ease of use for developers working with unstructured or semi-structured data.',
			features: [
				'Document-oriented storage (BSON format).',
				'Flexible schema.',
				'High availability with replica sets.',
				'Horizontal scalability with sharding.',
				'Rich query language.',
				'Supports various programming languages via drivers.',
			],
			tips: [
				'Design your document schema carefully to optimize for common queries.',
				'Use indexes to improve query performance.',
				'Understand aggregation pipeline for complex data transformations.',
				'Utilize MongoDB Atlas for managed cloud database services.',
				'Consider data modeling patterns for embedded vs. referenced documents.',
			],
		},
	},
	{
		id: 'mysql',
		name: 'MySQL',
		description:
			'An open-source relational database management system (RDBMS).',
		url: 'https://www.mysql.com/',
		category: 'Databases',
		tags: ['database', 'sql', 'rdbms', 'backend', 'open-source'],
		image: 'https://www.google.com/s2/favicons?domain=www.mysql.com&sz=100',
		isOfflineFriendly: true, // Can run locally
		dateAdded: '2025-07-01',
		howTo: [
			'Download and install MySQL Server.',
			'Start the MySQL service.',
			'Connect using the MySQL client or a GUI tool (e.g., DBeaver, MySQL Workbench).',
			'Create databases and tables.',
			'Write SQL queries for data manipulation (CRUD).',
			'Define relationships between tables using foreign keys.',
			'Integrate with a backend framework (e.g., Node.js with Sequelize/Knex).',
		],
		syntax: [
			{
				title: 'Create Table',
				code: `CREATE TABLE Users (
  id INT PRIMARY KEY AUTO_INCREMENT,
  username VARCHAR(50) NOT NULL UNIQUE,
  email VARCHAR(100) UNIQUE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);`,
				explanation:
					'Defines a new table named `Users` with columns and constraints.',
			},
			{
				title: 'Insert Data',
				code: `INSERT INTO Users (username, email) VALUES ('john_doe', 'john@example.com');`,
				explanation: 'Adds a new row of data into the `Users` table.',
			},
			{
				title: 'Select Data',
				code: `SELECT username, email FROM Users WHERE id = 1;
SELECT * FROM Users WHERE created_at < '2025-07-01' ORDER BY username ASC;`,
				explanation:
					'Retrieves data from the `Users` table with filtering and ordering.',
			},
		],
		details: {
			intro:
				'MySQL is one of the most popular relational database management systems (RDBMS) in the world. It is widely used for web applications and is known for its reliability, performance, and ease of use.',
			features: [
				'Relational model with structured tables.',
				'Uses SQL (Structured Query Language) for data management.',
				'ACID compliance (Atomicity, Consistency, Isolation, Durability).',
				'Supports transactions.',
				'Mature and widely adopted.',
				'Various storage engines (InnoDB, MyISAM).',
			],
			tips: [
				'Normalize your database schema to reduce data redundancy.',
				'Use appropriate data types for columns.',
				'Create indexes on columns frequently used in WHERE clauses or JOINs.',
				'Understand SQL joins for combining data from multiple tables.',
				'Regularly back up your database.',
				'Consider using connection pooling for web applications.',
			],
		},
	},
	{
		id: 'lucide',
		name: 'Lucide',
		description: 'A beautiful, community-driven, and open-source icon library.',
		url: 'https://lucide.dev/',
		category: 'Icons',
		tags: ['icons', 'svg', 'open-source', 'customizable'],
		image: 'https://www.google.com/s2/favicons?domain=lucide.dev&sz=100',
		isOfflineFriendly: true,
		dateAdded: '2025-07-02',
		howTo: [
			'Install Lucide React: `npm install lucide-react`.',
			'Import the desired icon component: `import { Home } from "lucide-react";`.',
			'Use the icon component in your JSX: `<Home size={24} color="blue" />`.',
			'Customize size, color, stroke width, and other SVG attributes via props.',
		],
		syntax: [
			{
				title: 'Basic Icon Usage',
				code: `import { BellRing } from 'lucide-react';

function MyComponent() {
  return <BellRing className="h-6 w-6 text-red-500" />;
}`,
				explanation:
					'Imports and renders the BellRing icon, applying Tailwind classes for size and color.',
			},
			{
				title: 'Customizing Icon Properties',
				code: `import { Search } from 'lucide-react';

function CustomSearchIcon() {
  return <Search size={32} color="purple" strokeWidth={3} />;
}`,
				explanation:
					'Demonstrates how to pass props like `size`, `color`, and `strokeWidth` directly to the icon component.',
			},
		],
		details: {
			intro:
				'Lucide is a fork of Feather Icons, offering a consistent and highly customizable collection of SVG icons. It is designed to be lightweight and easy to integrate into various projects and frameworks.',
			features: [
				'Over 1000+ icons available.',
				'Highly customizable via props (size, color, stroke width, etc.).',
				'Framework-agnostic SVG icons.',
				'Dedicated packages for React, Vue, Svelte, and more.',
				'Open-source and community-driven.',
				'Supports tree-shaking for optimized bundle sizes.',
			],
			tips: [
				'Browse the Lucide website for available icons and their names.',
				'Use `size` prop for consistent sizing across your application.',
				"Leverage `strokeWidth` to adjust the icon's visual weight.",
				'Integrate with Tailwind CSS by passing utility classes via `className`.',
				'Consider creating a custom icon component to encapsulate common styles.',
			],
		},
	},
];
