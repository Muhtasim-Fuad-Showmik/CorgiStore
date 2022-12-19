import { component$, useClientEffect$, useStore } from "@builder.io/qwik";
import { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
	const state = useStore({
		name: '',
		price: '',
		url: ''
	});
	
	useClientEffect$(() => {
		const data = JSON.parse(localStorage.getItem('corgiData'));
		state.name = data.name;
		state.url = data.url;
		state.price = data.price;
	});

    return (
        <>
            <div class="flex flex-col gap-2">
				<img src={state.url} alt={state.name} class="object-cover relative z-10" />
				<div class="flex justify-between p-4">
					<h2 class="text-xl">{state.name}</h2>
					<p>${state.price}</p>
				</div>

				<button 
					class="border border-slate-900 border-solid px-8 py-4 mx-auto hover:opacity-50"
					onClick$={() => {
						//Logic for adding corgis to the shopping cart
					}}
				>
					ADOPT
				</button>
			</div>
        </>
    );
});

export const head: DocumentHead = {
    title: "Corgi Details",
};
