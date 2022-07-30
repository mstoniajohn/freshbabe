import Head from 'next/head';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import EventCard from '../components/parts/EventCard';

// import sanity from '../lib/sanity';
// import { motion } from 'framer-motion';
import { TbArrowBottomCircle } from 'react-icons/tb';
import client from '../lib/sanity';

export default function Home({ events = [] }) {
	const today = new Date();
	const oldEvents = events?.filter((event) => new Date(event.date) < today);
	const upcomingEvents = events?.filter(
		(event) => new Date(event.date) >= today
	);

	console.log(today, oldEvents, upcomingEvents);
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
				{upcomingEvents.length > 0 ? (
					<div className="container mx-auto space-y-5">
						<h2
							id="events"
							className="text-2xl text-center text-gray-light my-7"
						>
							Events
						</h2>

						<div className="mx-auto grid grid-cols-1 lg:grid-cols-2 gap-4 w-full">
							{upcomingEvents &&
								upcomingEvents?.map(
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
				) : (
					<h2 className="text-2xl text-center text-gray-light my-7">
						No upcoming events. New events are posted often so check back with
						us.
					</h2>
				)}

				<div className=" py-10 space-y-10">
					<h1 className="text-[#dfff94] text-3xl text-center">Past Events</h1>
					{oldEvents.length > 0 && (
						<div className="mx-auto grid grid-cols-1 lg:grid-cols-2 gap-4 w-full">
							{oldEvents &&
								oldEvents?.map(
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
