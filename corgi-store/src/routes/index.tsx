import { component$, useClientEffect$, useContext } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import ProductsGrid from "~/components/products-grid/products-grid";
import { MyContext } from "~/root";

export default component$(() => {
	const contextState = useContext(MyContext);
	
	useClientEffect$(() => {
		if(localStorage.getItem('corgi-basket')) {
			contextState.items = JSON.parse(localStorage.getItem('corgi-basket'));
		}
	});

    return (
        <div class="flex flex-1 flex-col">
			<section class="min-h-screen flex relative">
				<img
					src="/Corgi Home Page Picture.jpg"
					alt="Corgi home page picture"
					class="object-cover"
				/>
				<a 
					class="absolute left-1/2 top-2/3 -translate-x-1/2 -translate-y-1/2 py-4 px-8 text-white border border-solid border-white hover:text-slate-900 after:absolute after:bg-white after:right-full after:top-0 after:w-full after:h-full hover:after:translate-x-full after:duration-300 overflow-hidden"
					href="#products"
				>
					<h3 class="relative z-20 text-center">
						Shop Corgis
					</h3>
				</a>
			</section>
			<ProductsGrid />
        </div>
    );
});

export const head: DocumentHead = {
    title: "Corgitto",
    meta: [
        {
            name: "description",
            content: "Purchase corgis",
        },
    ],
};
