import { component$ } from "@builder.io/qwik";
import { strictEqual } from "assert";

interface ModalProps {
    onClose: () => void,
    cart: object
}

export default component$((props: ModalProps) => {
	return (
        <div class="absolute top-0 right-0 w-full h-screen bg-white z-50 flex flex-col gap-4 p-4 sm:w-[500px] text-slate-900">
            <div class="flex items-center justify-between pb-4 border-b">
                <h1 class="font-bold text-4xl">CART</h1>
                <i onClick$={props.onClose} class="fa-solid fa-xmark cursor-pointer hover:rotate-45"></i>
            </div>
            {props.cart > 0 ?
            <div class="bg-slate-400 flex flex-col gap-[1px]">
                {props.cart.map((item) => {
                    return (
                        <div class="bg-white p-4 flex items-center justify-between">
                            <div class="flex flex-col gap-1">
                                <h1>{item.name}</h1>
                                <p>{item.price}</p>
                            </div>
                            <i class="fa-solid fa-xmark cursor-pointer"></i>
                        </div>
                    );
                })}
            </div> :
            <div>
                <h3 class="text-sm">Your Cart is Empty</h3>
            </div>}
        </div>
	);
});
