import { component$ } from "@builder.io/qwik";

export default component$((props) => {
	const {url, name, price} = props;

	return (
		<div class="flex flex-col gap-2 sm:max-w-[300px]">
            <img src={url} alt="corgi picture" />
        </div>
	);
});