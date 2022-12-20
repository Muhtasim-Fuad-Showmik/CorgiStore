import { component$, useClientEffect$, useStore } from "@builder.io/qwik";
import { strictEqual } from "assert";

export default component$(() => {
	const store = useStore({
		scrolled: false,
		numItems: 0,
		modal: false
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
			{store.modal && <>
				<div class="absolute top-0 right-0 w-full h-screen bg-white z-50 flex flex-col gap-4 p-4">
					<div class="flex items-center justify-between pb-4 border-b text-slate-900">
						<h1 class="font-bold text-4xl">CART</h1>
						<i onClick$={() => {
							store.modal = false;
						}} class="fa-solid fa-xmark cursor-pointer"></i>
					</div>
				</div>
			</>}
			<a href="/">Corgitto</a>
			<div 
				class="text-xl sm:text-3xl relative cursor-pointer"
				onClick$={()=>{
					store.modal = true;
				}}
			>
				<i class="fa-solid fa-cart-shopping"></i>
				{
					store.numItems > 0 && 
					<div class="absolute -top-2 -right-2 bg-slate-900 rounded-full h-5 w-5 text-xs grid place-items-center">
						{store.numItems}
					</div>
				}
			</div>
		</header>
	);
});
