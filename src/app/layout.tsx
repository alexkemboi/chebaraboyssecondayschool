import Navbar from "@/components/Navbar";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "CHEBARA",
	description: "CHEBARA HIGH SCHOOL"
};

export default function RootLayout({
	children
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<head>
				<link
					rel="shortcut icon"
					href="/favicon.ico"
				/>
			</head>
			<body className="bg-gray-700 h-screen container mx-auto">
				<header>
					<Navbar />
				</header>
				<div className=" mx-auto border border-white animated-bounceIn bg-zinc-300">
					{children}
				</div>
				<footer>
					<Footer />
				</footer>
			</body>
		</html>
	);
}
