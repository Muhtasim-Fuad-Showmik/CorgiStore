import { component$ } from "@builder.io/qwik";
import { strictEqual } from "assert";

interface ModalProps {
    onClose: () => void
}

export default component$((props: ModalProps) => {
	return (
        <div class="absolute top-0 right-0 w-full h-screen bg-white z-50 flex flex-col gap-4 p-4">
            <div class="flex items-center justify-between pb-4 border-b text-slate-900">
                <h1 class="font-bold text-4xl">CART</h1>
                <i onClick$={props.onClose} class="fa-solid fa-xmark"></i>
            </div>
        </div>
	);
});
