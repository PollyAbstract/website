import type { PageLoad } from './$types';

export const load: PageLoad = async () => ({
  seo: {
    title: 'Polly — Wife of Pax',
    description:
      'The official site of Polly, Pax’s beloved companion and character in the Pudgy Penguins universe.',
    ogImage: 'https://pollyabstract.xyz/og-image.png',
  },
});
