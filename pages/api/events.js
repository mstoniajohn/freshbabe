// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const events = [
	{
		title: '',
		info: '',
		date: '',
		location: '',
		image: '',
	},
	{
		title: '',
		info: '',
		date: '',
		location: '',
		image: '',
	},
];
export default function handler(req, res) {
	if (req.method === 'GET') {
		res.status(200).json(events);
	}
	if (req.method === 'POST') {
		const data = req.body;
		events.push(JSON.parse(data));
	}
}
