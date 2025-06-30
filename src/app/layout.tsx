import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
});

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: 'DevToolBox',
	description: 'The right Tool for the job',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-900 to-black text-white">
			<html lang="en">
				<body className={`${geistSans.variable} ${geistMono.variable}`}>
					{children}
				</body>
			</html>
		</div>
	);
}
