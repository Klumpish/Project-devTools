import type { Metadata } from 'next';
// import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { ReactNode } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Sidebar from '@/components/Sidebar';

// const geistSans = Geist({
// 	variable: '--font-geist-sans',
// 	subsets: ['latin'],
// });

// const geistMono = Geist_Mono({
// 	variable: '--font-geist-mono',
// 	subsets: ['latin'],
// });

export const metadata: Metadata = {
	title: 'DevToolBox',
	description: 'The right Tool for the job',
};

export default function RootLayout({ children }: { children: ReactNode }) {
	return (
		<html lang="en">
			<body className="flex flex-col min-h-screen ">
				<Sidebar />
				<div className="flex-1 flex flex-col ml-16">
					<Header />
					<main className="flex-1 container mx-auto px-4 py-6 bg-gradient-to-b from-gray-900 to-black-100">
						{children}
					</main>
					<Footer />
				</div>
			</body>
		</html>
	);
}
