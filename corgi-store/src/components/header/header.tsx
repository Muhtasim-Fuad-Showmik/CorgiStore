import { component$, useClientEffect$, useStore, useContext, $ } from "@builder.io/qwik";
import { strictEqual } from "assert";
import { MyContext } from "~/root";
import Modal from "../modal/modal";

export default component$(() => {
	const contextState = useContext(MyContext);
	const onClose = $(() => store.modal = false);

	const store = useStore({
		scrolled: false,
		numItems: 0,
		modal: false,
		cart: []
	});

	useClientEffect$(() => {
		if(localStorage.getItem('corgi-basket')){
			const currBasket = JSON.parse(localStorage.getItem('corgi-basket'));
			const numItemsInBasket = currBasket.items.length;
			store.numItems = numItemsInBasket;
			store.cart = currBasket.items;
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
			{store.modal && <Modal onClose={onClose} cart={store.cart}/>}
		</header>
	);
});
