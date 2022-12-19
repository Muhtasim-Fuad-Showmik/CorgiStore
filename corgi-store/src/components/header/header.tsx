import { component$, useClientEffect$, useStore } from "@builder.io/qwik";

export default component$(() => {
	const store = useStore({
		scrolled: false,
		numItems: 0
	});

	useClientEffect$(() => {
		if(localStorage.getItem('corgi-basket')){
			const numItemsInBasket = JSON.parse(localStorage.getItem('corgi-basket')).items.length;
			store.numItems = numItemsInBasket;
		}
	});

	return (
		<header
		class={
			"fixed top-0 left-0 w-full p-4 flex justify-between items-center text-white text-xl sm:text-4xl sm:p-8 z-40 " +
			(store.scrolled ? " bg-slate-900 shadow" : " bg-transparent")
		}
		document:onScroll$={() => {
			if (window.scrollY > 0) {
				store.scrolled = true;
			} else {
				store.scrolled = false;
			}
		}}
		>
			<a href="/">Corgitto</a>
			{store.numItems}
			<div class="text-xl sm:text-3xl relative">
				<i class="fa-solid fa-cart-shopping"></i>
				<div class="absolute -top-2 -right-2 bg-slate-900 rounded-full h-5 w-5 text-xs grid place-items-center">
					{store.numItems}
				</div>
			</div>
		</header>
	);
});
