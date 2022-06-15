import Layout from '@components/Layout';
import React from 'react';
import client from '../lib/sanity';
import { PortableText } from '@portabletext/react';

const About = ({ page }) => {
	console.log(page[0]);
	return (
		<Layout title="About">
			<h1 className="py-20 md:py-32 text-5xl text-green text-center">
				{page[0].title}
			</h1>
			<div className="px-12 mx-auto h-screen text-gray-light">
				<PortableText value={page[0].content} />
			</div>
		</Layout>
	);
};

export default About;

// Create a query called homepageQuery
const pageQuery = `*\[_type == "about"\] {
    _id,
    time,
      title,
      content,
      image {
        ...asset->
      }
    }`;

export async function getStaticProps() {
	const page = await client.fetch(pageQuery);
	// const events = await sanity.fetch(groq`
	//   *[_type == "event"]{
	// 	  title
	//   }
	// `);

	return {
		props: {
			page,
		},
		revalidate: 1,
	};
}
