import React from 'react';
import Layout from '../../components/Layout';
import EventCard from '../../components/parts/EventCard';

const Events = () => {
	return (
		<Layout>
			<div className="flex h-full w-full flex-col items-center justify-center">
				<h1 className="text-xl">Upcoming events</h1>
			</div>
		</Layout>
	);
};

export default Events;
