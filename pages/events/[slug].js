import { RSVPInput } from '@components/parts/RSVPInput';
import {
	ArrowLeftIcon,
	CalendarIcon,
	ClockIcon,
	LocationMarkerIcon,
} from '@heroicons/react/outline';
import { PortableText } from '@portabletext/react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { getDate, urlFor } from 'utils/getImageUrl';
import ContainerDiv from '../../components/ContainerDiv';
import Layout from '../../components/Layout';
import EventCard from '../../components/parts/EventCard';
import sanity from '../../lib/sanity';

import { SRLWrapper, useLightbox } from 'simple-react-lightbox';
const SingleEvent = ({ event }) => {
	const router = useRouter();
	const { openLightbox, closeLightbox } = useLightbox();
	const prev = router.back;

	console.log(event, event?.image?.url);
	return (
		<Layout title={event?.title}>
			<ContainerDiv>
				<div className="pt-10">
					<Link href="/">
						<a>
							<ArrowLeftIcon className="text-green h-10" />
						</a>
					</Link>
					<div className="pb-20 pt-10">
						{event && (
							<div className="max-w-md mx-auto bg-white rounded-xl overflow-hidden lg:max-w-2xl text-[#fff]">
								<div className="grid grid-cols-1 gap-4">
									<div className="shrink-0">
										<SRLWrapper>
											<a href={event.image !== '' && urlFor(event.image)}>
												<img
													src={event.image !== '' && urlFor(event.image)}
													alt="Plant Swap | Fresh Babe"
												/>
											</a>
										</SRLWrapper>
										{/* <a className="cursor-pointer flex justify-center">
											<img
												className="object-fit w-[70%]"
												src={event.image !== '' && urlFor(event.image)}
												alt="Fresh Babe Events"
											/>
										</a> */}
									</div>
									<div className="py-3 md:p-6">
										<a className="cursor-pointer">
											<div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
												<h1 className="text-2xl my-3">{event.title}</h1>
											</div>
										</a>

										<div className="flex space-x-2 items-center my-2">
											<LocationMarkerIcon className="h-5 text-green" />
											<p className="text-gray-light text-md">
												{event.location}
											</p>
										</div>
										<div className="flex md:space-x-4 space-x-3 items-center">
											<div className="flex items-center space-x-2">
												<CalendarIcon className="h-5 text-green" />
												<span className="text-gray-light text-md">
													{getDate(event.date)}
												</span>
											</div>

											<div className="text-gray-light flex items-center space-x-2">
												<ClockIcon className="h-5 text-green" />
												<span className="text-gray-light text-md">
													{' '}
													{event.time}
												</span>
											</div>
										</div>

										{/* TODO: Link to event page? */}
										<a
											href="#"
											className="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
										>
											{event.subtitle}
										</a>
										<div className="mt-2 mb-4 text-slate-500">
											<PortableText value={event.info} />
										</div>

										<RSVPInput event={event.title} />
									</div>
								</div>
							</div>
						)}
					</div>
				</div>
			</ContainerDiv>
		</Layout>
	);
};

export default SingleEvent;

const eventQ = `*[_type == "event" && slug.current == $slug][0]{
	title,
	info,
	date,
	location,
	slug,
	time,
	image {
	  ...asset->
	}
  }`;
export const getStaticProps = async ({ params }) => {
	const { slug } = params;

	const event = await sanity.fetch(eventQ, { slug });
	return {
		props: {
			event,
		},
	};
};

// Create a query called homepageQuery
const eventQuery = `*\[_type == "event"\] {
	title,
	info,
	date,
	location,
    slug,
    time,
	image {
	  ...asset->
	}
  }`;
export const getStaticPaths = async () => {
	const events = await sanity.fetch(eventQuery);
	const paths = events.map((event) => ({
		params: { slug: event.slug.current },
	}));

	return {
		paths,
		fallback: true, // false or 'blocking'
	};
};
