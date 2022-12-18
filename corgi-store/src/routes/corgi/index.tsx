import { component$, useClientEffect$, useStore } from "@builder.io/qwik";
import { DocumentHead, useLocation  } from "@builder.io/qwik-city";

export default component$(() => {
	const loc = useLocation();

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
            <h1>
				{state.name}
			</h1>
        </>
    );
});

export const head: DocumentHead = {
    title: "Corgi Details",
};
