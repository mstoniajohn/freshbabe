import React from 'react';
import { RSVPInput } from './RSVPInput';

const EventCard = ({
	title = 'Fresh Event',
	image = '/event1.jpg',
	info = 'Getting a new business off the ground is a lot of hard work. Here are five ideas you can use to find your first customers.',
	subtitle = 'Finding customers for your new business',
}) => {
	return (
		<div className="max-w-md mx-auto bg-white rounded-xl overflow-hidden lg:max-w-2xl text-[#fff]">
			<div className="flex flex-col lg:flex-row">
				<div className="lg:shrink-0">
					<img
						className="h-48 w-full object-cover lg:h-full lg:w-48"
						src={image}
						alt="Man looking at item at a store"
					/>
				</div>
				<div className="p-8">
					<div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
						{title}
					</div>
					{/* TODO: Link to event page? */}
					<a
						href="#"
						className="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
					>
						{subtitle}
					</a>
					<p className="mt-2 text-slate-500">{info}</p>
					<RSVPInput event={title} />
				</div>
			</div>
		</div>
	);
};

export default EventCard;
