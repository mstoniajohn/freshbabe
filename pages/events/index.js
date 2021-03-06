import React from 'react';
import Layout from '../../components/Layout';
import EventCard from '../../components/parts/EventCard';
import sanity from '../../lib/sanity';

const Events = ({ events }) => {
	return (
		<Layout>
			<div className="flex h-full w-full flex-col items-center justify-center container px-12">
				<h1 className="text-xl  text-green">Upcoming events</h1>
			</div>
		</Layout>
	);
};

export default Events;

// Create a query called homepageQuery
const eventQuery = `*\[_type == "event"\]{
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
	const events = await sanity.fetch(eventQuery);
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
