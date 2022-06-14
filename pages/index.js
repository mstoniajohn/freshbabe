import Head from 'next/head';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import EventCard from '../components/parts/EventCard';
import { motion } from 'framer-motion';
import { TbArrowBottomCircle } from 'react-icons/tb';
import client from '../lib/sanity';

export default function Home({ events = [] }) {
	return (
		<Layout title="Home">
			<div className="container h-full pb-20 px-12 mx-auto">
				<div className="flex h-screen w-full flex-col items-center justify-center space-y-3">
					<h1 className="text-[#dfff94] text-3xl">Upcoming Events</h1>
					<div className="animate-bounce text-green text-5xl">
						<a href="#events" className="underline-none">
							<TbArrowBottomCircle />
						</a>
					</div>
				</div>
				{/* <hr className="text-green opacity-50" />  */}
				<h2 id="events" className="text-2xl text-center text-gray-light my-7">
					Events
				</h2>

				<div className="mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
					{events &&
						events?.map(
							({ title, info, time, date, image, location, slug }) => (
								<EventCard
									key={title}
									title={title}
									date={date}
									image={image}
									location={location}
									time={time}
									info={info}
									slug={slug?.current}
								/>
							)
						)}
				</div>
			</div>
		</Layout>
	);
}

// Create a query called homepageQuery
const eventQuery = `*\[_type == "event"\] {
  _id,
  time,
	title,
	info,
	date,
	location,
  slug,
	image {
	  ...asset->
	}
  }`;

export async function getStaticProps() {
	const events = await client.fetch(eventQuery);
	// const events = await sanity.fetch(groq`
	//   *[_type == "event"]{
	// 	  title
	//   }
	// `);

	return {
		props: {
			events,
		},
		revalidate: 1,
	};
}
