import { ArrowLeftIcon } from '@heroicons/react/outline';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import ContainerDiv from '../../components/ContainerDiv';
import Layout from '../../components/Layout';
import EventCard from '../../components/parts/EventCard';
import sanity from '../../lib/sanity';

const SingleEvent = ({
	event: { title, slug, image, location, info, date },
}) => {
	const router = useRouter();
	const prev = router.back;

	console.log(router);
	return (
		<Layout>
			<ContainerDiv>
				<div className="pt-10">
					<Link href="/">
						<a>
							<ArrowLeftIcon className="text-green h-10" />
						</a>
					</Link>
					<div className="pb-20 pt-10">
						<EventCard
							title={title}
							slug={slug}
							image={image}
							location={location}
							info={info}
							date={date}
						/>
					</div>
				</div>
			</ContainerDiv>
		</Layout>
	);
};

export default SingleEvent;

export const getStaticProps = async ({ params }) => {
	const { slug } = params;
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
	const event = await sanity.fetch(eventQ, { slug });

	console.log(event);
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
