import React from 'react';
import Layout from '../../components/Layout';
import PostEvent from '../../components/parts/PostEvent';

const post = () => {
	return (
		<Layout title="Post Event">
			<div className="h-[400px] flex flex-col items-center justify-center">
				<div>
					<h1 className="text-gray text-3xl font-semibold">Post Event</h1>
				</div>
			</div>
			<div className="container-md max-w-md mx-auto">
				<PostEvent />
			</div>
		</Layout>
	);
};

export default post;
