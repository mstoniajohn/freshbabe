import Head from 'next/head';
import Image from 'next/image';
import React from 'react';
import { TbBrandInstagram } from 'react-icons/tb';
import { ToastContainer } from 'react-toastify';
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
			<ToastContainer />

			<main className="bg-[#000000] h-full z-0">{children}</main>
			<footer className="bg-[#000000] text-center pt-40 flex flex-col space-y-4 justify-center items-center">
				<div className="text-gray ">
					{/* social */}
					<a
						href="https://www.instagram.com/the.freshbabe/"
						target="_blank"
						rel="noopener noreferrer"
						className=" flex items-center justify-center space-x-1"
					>
						<TbBrandInstagram className="text-3xl text-green" />{' '}
						<span className="text-green-200">@the.freshbabe</span>
					</a>
					&copy; All Rights Reserved. 2022
				</div>
				<div>
					<a
						href="https://www.toniaroganti.com/"
						target="_blank"
						rel="noopener noreferrer"
						className="text-gray-dark mt-4"
					>
						Site created by Tonia Roganti
						<span>
							<Image
								src="/vercel.svg"
								alt="Vercel Logo"
								width={72}
								height={16}
							/>
						</span>
					</a>
				</div>
			</footer>
		</div>
	);
};

export default Layout;
