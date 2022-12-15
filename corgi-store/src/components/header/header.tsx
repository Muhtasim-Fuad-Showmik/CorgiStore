import { component$, useStore } from "@builder.io/qwik";

export default component$(() => {
	const store = useStore({
		scrolled: false,
	});

	return (
		<header
		class={
			"fixed top-0 left-0 w-full p-4 flex justify-between items-center text-white text-xl sm:text-4xl sm:p-8 z-40 " +
			(store.scrolled ? " bg-slate-900" : " bg-transparent")
		}
		document:onScroll$={() => {
			if (window.scrollY > 0) {
				store.scrolled = true;
			} else {
				store.scrolled = false;
			}
		}}
		>
			<h1>Corgitto</h1>
			<div class="text-xl sm:text-3xl">
				<i class="fa-solid fa-cart-shopping"></i>
			</div>
		</header>
	);
});