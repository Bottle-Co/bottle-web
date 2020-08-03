import PlainBlack from '../assets/masks/PlainBlack.png';
import PlainBlackN95 from '../assets/masks/PlainBlackN95.png';
import PlainWhite from '../assets/masks/PlainWhite.png';
import PlainWhiteN95 from '../assets/masks/PlainWhiteN95.png';
import PlainRickAndMorty from '../assets/masks/PlainRickAndMorty.png'
import PlainShinyAndGlossy from '../assets/masks/PlainShinyAndGlossy.png';
import PlainSustainability from '../assets/masks/PlainSustainability.png';

export const MaskCategory = {
  Regular: 0,
  Enviro: 1
}

export const MaskId = {
  Regular: {
    SustainabilityPrint: 0,
    ThreePlyBlack: 1
  }
}

const Products = [
  {
    id:"4061a618-8b7c-4e77-939b-fe56493a7b2b",
    name: 'Atlas white',
    image: PlainSustainability,
    type: MaskCategory.Regular,
    description: `Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit.
                  Pellentesque sodales turpis eget
                  lectus gravida consectetur.
                  Vestibulum vitae metus eget lacus
                  suscipit gravida id sit amet leo.`,
    cost: 99,
    packCost: 249,
    stripeId: 'price_1HBwPbD8YQ9Kv8aMc47thEvc',
    packStripeId: 'price_1HBweED8YQ9Kv8aMWCaXB9El'
  },
  {
    id: '7fc6a473-2ef7-4fac-99ba-0c7d72b3b98d',
    name: 'Space journey',
    image: PlainRickAndMorty,
    type: MaskCategory.Regular,
    description: `Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit.
                  Pellentesque sodales turpis eget
                  lectus gravida consectetur.
                  Vestibulum vitae metus eget lacus
                  suscipit gravida id sit amet leo.`,
    cost: 99,
    packCost: 249,
    stripeId: 'price_1H6PXrD8YQ9Kv8aMVvg5w2Me',
    packStripeId: 'price_1HBwhYD8YQ9Kv8aM9hAY8mLA'
  },
  {
    id:'cdada41e-e465-4d7d-b41a-307247f7f81a',
    name: 'Black 3 ply',
    image: PlainBlack,
    description: `Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit.
                  Pellentesque sodales turpis eget
                  lectus gravida consectetur.
                  Vestibulum vitae metus eget lacus
                  suscipit gravida id sit amet leo.`,
    cost: 99,
    packCost: 249,
    stripeId: 'price_1HBwVPD8YQ9Kv8aMPZyNOUYu',
    packStripeId: 'price_1HBwdjD8YQ9Kv8aMvdDrTxxp'
  }
];

export default Products;
