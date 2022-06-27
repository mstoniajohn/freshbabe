import Head from 'next/head';
import Image from 'next/image';
import React from 'react';
import Header from './Header';

const Layout = ({ children, title }) => {
	return (
		<div className="bg-[#000000]">
			<Head>
				<title>Fresh Babe | {title}</title>
				<meta
					name="description"
					content="Bringing you the best events to any city"
				/>
				<link rel="icon" href="/favicon.ico" className="rounded-full" />
			</Head>
			<Header />
			<main className="bg-[#000000] h-full z-0">{children}</main>
			<footer>
				<a
					href="https://www.toniaroganti.com/"
					target="_blank"
					rel="noopener noreferrer"
					className="text-gray"
				>
					Site created by Tonia Roganti
					<span>
						<Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
					</span>
				</a>
			</footer>
		</div>
	);
};

export default Layout;
