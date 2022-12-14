import images from './images';

const wines = [
  {
    title: 'Premium Motor Spirit',
    price: '$56',
    tags: 'AU | Bottle',
  },
  {
    title: 'Engine Oil',
    price: '$59',
    tags: 'AU | Bottle',
  },
  {
    title: 'Liquefied Natural Gas',
    price: '$44',
    tags: 'FR | 750 ml',
  },
  {
    title: 'Bonny Light Oil',
    price: '$31',
    tags: 'CA | 750 ml',
  },
  {
    title: 'Automative Gas Oil',
    price: '$26',
    tags: 'IE | 750 ml',
  },
];

const cocktails = [
  {
    title: 'Storage Tanks',
    price: '$20',
    tags: 'Aperol | Villa Marchesi prosecco | soda | 30 ml',
  },
  {
    title: "Accumulator",
    price: '$16',
    tags: 'Dark rum | Ginger beer | Slice of lime',
  },
  {
    title: 'Glycol Pump',
    price: '$10',
    tags: 'Rum | Citrus juice | Sugar',
  },
  {
    title: 'Converters',
    price: '$31',
    tags: 'Bourbon | Brown sugar | Angostura Bitters',
  },
  {
    title: 'Heat Exchanger',
    price: '$26',
    tags: 'Gin | Sweet Vermouth | Campari | Orange garnish',
  },
];

const awards = [
  {
    imgUrl: images.award02,
    title: 'Best SME 2020',
    subtitle: 'Recognised as the best B2B supplier of the year 2020.',
  },
  {
    imgUrl: images.award01,
    title: 'Rising Star',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award05,
    title: 'Oil & Gas Procurement',
    subtitle: 'The home of all industry relevant procurement.',
  },
  {
    imgUrl: images.award03,
    title: 'Community Awareness 2021',
    subtitle: 'For serving and helping in our local community.',
  },
];

export default { wines, cocktails, awards };
