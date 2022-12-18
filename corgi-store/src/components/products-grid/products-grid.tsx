import { component$ } from "@builder.io/qwik";
import Card from "~/components/card/card";

export default component$(() => {
	// const store = useStore({
	// 	scrolled: false,
	// });
	const corgis = [
		{
			name: 'Douglas',
			url: '/Corgi-1.JPG',
			price: '1,500'
		},
		{
			name: 'Noodle',
			url: '/Corgi-2.JPG',
			price: '4000'
		},
		{
			name: 'Corgette',
			url: '/Corgi-3.webp',
			price: '1,200'
		},
		{
			name: 'Waffles',
			url: '/Corgi-4.JPG',
			price: '1,400'
		},
		{
			name: 'Muffin',
			url: '/Corgi-5.JPG',
			price: '2,500'
		},
		{
			name: 'Ein',
			url: '/Corgi-6.JPG',
			price: '12,000'
		}
	];

	return (
		<div id="products" class="min-h-screen grid place-items-center py-8">
			<div class="flex flex gap-4 flex-wrap justify-center items-stretch max-w-[1400px] mx-auto">
				{ corgis.map((obj) => {
					return <Card {...obj} />;
				}) }
			</div>
        </div>
	);
});
