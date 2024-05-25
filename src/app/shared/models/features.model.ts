import { Feature } from '../interfaces/feature.interface';

export const FeaturesModel: Record<string, Feature[]> = {
  en: [
    {
      img: 'https://landing-open-rewards.web.app/assets/features/tiers.webp',
      title: 'Tiers',
      description: `Assign specific benefits to each tier, such as permanent discounts and special point multipliers.`,
      soon: false,
    },
    {
      img: 'https://landing-open-rewards.web.app/assets/features/points.webp',
      title: 'Points',
      description: `Configure custom events and give different amount of points for activities unique to your business.      `,
      soon: false,
    },
    {
      img: 'https://landing-open-rewards.web.app/assets/features/achievements.webp',
      title: 'Achievements',
      description: `Set challenges with goals based on transactional data, customer behavior or activity streaks. Create simple milestones or multi-dimensional achievements composed of several rules.      `,
      soon: false,
    },
    {
      img: 'https://landing-open-rewards.web.app/assets/features/notifications.webp',
      title: 'Webhooks',
      description: `The new webhook mechanism is based on subscriptions to individual events occurring in the system.      `,
      soon: false,
    },
    {
      img: 'https://landing-open-rewards.web.app/assets/features/battle-pass.webp',
      title: 'Battle pass',
      description: `Set challenges with goals based on transactional data, customer behavior or activity streaks. Create simple milestones or multi-dimensional achievements composed of several rules.      `,
      soon: true,
    },
    {
      img: 'https://landing-open-rewards.web.app/assets/features/coupons.webp',
      title: 'Coupons',
      description: `Choose between a selection of coupon redemption rules or allow users to redeem coupons from the rewards catalog or in-store.      `,
      soon: true,
    },
    {
      img: 'https://landing-open-rewards.web.app/assets/features/referrals.webp',
      title: 'Referrals',
      description: `Referrals are a powerful promotional tactic, helping businesses acquire customers more easily and cost-effectively.      `,
      soon: true,
    },
  ],
  es: [],
};
