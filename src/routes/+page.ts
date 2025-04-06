import type { PageLoad } from './$types';

export const load: PageLoad = async () => ({
  seo: {
    title: 'Polly — Wife of Pax',
    description: `The official site of Polly, Pax’s beloved companion and character in the Pudgy Penguins universe.`,
    ogImage: 'https://pollyabstract.xyz/og-image.png',
  },
  sections: {
    about: {
      title: 'About Polly',
      description: [
        `Polly is more than just Pax’s beloved wife — she's a heartwarming character in the world of Pudgy Penguins.`,
        `Known for her charm, warmth, and unwavering loyalty, Polly represents the softer, nurturing spirit within the Pudgy universe.`,
      ],
    },
  },
});
