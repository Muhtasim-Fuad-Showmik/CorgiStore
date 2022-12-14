import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { Link } from '@builder.io/qwik-city';

export default component$(() => {
  return (
    <div class="flex flex-1">
      <img 
        src="/Corgi Home Page Picture.jpg" 
        alt="Corgi home page picture"
        class="object-cover"
      />
    </div>
  );
});

export const head: DocumentHead = {
  title: 'Corgtto',
  meta: [
    {
      name: 'description',
      content: 'Purchase corgis',
    },
  ],
};
