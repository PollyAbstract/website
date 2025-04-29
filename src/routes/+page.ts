import type { PageLoad } from './$types';
import Step1Image from '~assets/images/step1_wallet.png?enhanced';
import Step2Image from '~assets/images/step2_bridge.png?enhanced';
import Step3Image from '~assets/images/step3_wrap.png?enhanced';
import Step4Image from '~assets/images/step4_buy.png?enhanced';

export const load: PageLoad = async () => ({
  seo: {
    title: 'Polly — Wife of Pengu',
    description: `The official site of Polly, the beloved companion of Pengu and character in the Pudgy Penguins universe.`,
    ogImage: 'https://pollyabstract.xyz/og-image.jpg',
  },
  sections: {
    about: {
      title: 'About Polly',
      description: [
        `Polly is more than just Pengu's beloved wife — she's a heartwarming character in the world of Pudgy Penguins.`,
        `Known for her charm, warmth, and unwavering loyalty, Polly represents the softer, nurturing spirit within the Pudgy universe.`,
      ],
    },
    buying: {
      title: 'How to buy',
      description: [
        `Obtaining some Polly is pretty straightforward, just follow these quick steps to get started with buying Polly on the Abstract network.`,
      ],
      steps: [
        {
          title: 'Set Up a Wallet',
          description: [
            `To buy $POLLY, start by setting up a wallet that's compatible with the Abstract network. You can create an Abstract Global Wallet at ABS.XYZ or use MetaMask.`,
            `Once your wallet is ready, deposit Ethereum ($ETH) from the Ethereum mainnet. Make sure to have enough $ETH to cover bridging and transaction fees.`,
          ],
          image: Step1Image,
          actionLink: {
            url: 'https://chainid.network/chain/2741/',
            text: 'Add Abstract',
          },
        },
        {
          title: 'Bridge to Abstract',
          description: [
            `Use Abstract's native bridge at RELAY.LINK to move your $ETH from Ethereum mainnet to the Abstract network (Abstract $ETH).`,
            `This enables you to interact with dApps and tokens on Abstract, including $POLLY.`,
          ],
          image: Step2Image,
        },
        {
          title: 'Wrap Ethereum',
          description: [
            `After bridging, you'll need to wrap your Abstract ETH into $WETH (Wrapped ETH).`,
            `This step is required for swapping on most decentralized exchanges (DEXs) within the Abstract ecosystem.`,
          ],
          image: Step3Image,
        },
        {
          title: 'Get some $POLLY',
          description: [
            `Once you have Abstract $WETH in your wallet, visit ABS.XYZ or a decentralized exchange (DEX) that supports Abstract tokens. From there, swap your Abstract $WETH for $POLLY, the memecoin of the Abstract ecosystem.`,
            `Always double-check the token contract address to ensure you're getting the real $POLLY.`,
          ],
          image: Step4Image,
        },
      ],
    },
    tokenomics: {
      title: 'Tokenomics',
      description: [
        `With zero taxes, locked liquidity, and renounced ownership, Polly is built for the community—fair, transparent, and unstoppable.`,
      ],
      ca: '0x987cf44f3f5d854ec0703123d7fd003a8b56ebb4',
      subjects: [
        { title: 'Ticker', value: '$POLLY' },
        { title: 'Network', value: 'Abstract' },
        { title: 'Supply', value: 1_000_000_000 },
        { title: 'Liquidity', value: 'Locked' },
        { title: 'Taxes', value: 'None' },
        { title: 'Ownership', value: 'Renounced' },
      ],
    },
    more: {
      title: 'More Polly',
      description: [
        `The community is growing, the story is evolving, and you're invited to be part of it. Let's build something cute, cool, and unforgettable together.`,
      ],
      actions: [
        { title: 'Telegram', href: 'https://t.me/PollyAbstractPortal' },
        { title: 'X (Twitter)', href: 'https://x.com/PollyAbstract' },
        { title: 'TikTok', href: 'https://tiktok.com/@pollycto' },
        { title: 'Instagram', href: 'https://instagram.com/pollypenguins' },
      ],
    },
  },
});
