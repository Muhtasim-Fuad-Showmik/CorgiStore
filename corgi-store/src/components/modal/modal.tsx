import { component$, useContext } from "@builder.io/qwik";
import { MyContext } from "~/root";

interface ModalProps {
    onClose: () => void,
    cart: object
}

export default component$((props: ModalProps) => {
    const contextState = useContext(MyContext);

	return (
        <div class="absolute top-0 right-0 shadow w-full h-screen overflow-scroll bg-white z-50 flex flex-col gap-4 p-4 sm:w-[500px] text-slate-900">
            <div class="flex items-center justify-between pb-4 border-b">
                <h1 class="font-bold text-4xl">CART</h1>
                <i onClick$={props.onClose} class="fa-solid fa-xmark cursor-pointer hover:rotate-45"></i>
            </div>
            {props.cart.length > 0 ?
            <div class="bg-slate-400 flex flex-col gap-[1px]">
                {props.cart.map((item, i) => {
                    return (
                        <div class="bg-white p-4 flex items-center justify-between text-slate-900">
                            <div class="flex flex-col gap-1">
                                <h1>{item.name}</h1>
                                <p class="text-xs">${item.price}</p>
                            </div>
                            <i
                                class="fa-solid fa-xmark cursor-pointer hover:opacity-40 text-sm"
                                onClick$={() => {
                                    contextState.items = contextState.items.reduce((acc, curr, index) => {
                                        if(index !== i) {
                                            return [...acc, curr];
                                        }
                                        return acc;
                                    }, []);
                                }}
                            ></i>
                        </div>
                    );
                })}
                <button class="bg-white border-b border-l border-r border-solid border-slate py-8 text-xl">Checkout</button>
            </div> :
            <div>
                <h3 class="text-sm">Your Cart is Empty</h3>
            </div>}
        </div>
	);
});
