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
    name: 'Anti-Viral Mask',
    image: PlainWhite,
    type: MaskCategory.Regular,
    description: `Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit.
                  Pellentesque sodales turpis eget
                  lectus gravida consectetur.
                  Vestibulum vitae metus eget lacus
                  suscipit gravida id sit amet leo.`,
    cost: 99,
    packCost: 299,
    stripeId: 'price_1H6PaAD8YQ9Kv8aMSflg1QV8',
    packStripeId: 'price_1H6PaAD8YQ9Kv8aMSflg1QV8'
  },
  {
    name: 'Anti-Viral Mask',
    image: PlainBlack,
    type: MaskCategory.Regular,
    description: `Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit.
                  Pellentesque sodales turpis eget
                  lectus gravida consectetur.
                  Vestibulum vitae metus eget lacus
                  suscipit gravida id sit amet leo.`,
    cost: 99,
    packCost: 299,
    stripeId: 'price_1H6PaAD8YQ9Kv8aMSflg1QV8',
    packStripeId: 'price_1H6PaAD8YQ9Kv8aMSflg1QV8'
  },
  {
    name: 'Plain Black N95',
    description: `Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit.
                  Pellentesque sodales turpis eget
                  lectus gravida consectetur.
                  Vestibulum vitae metus eget lacus
                  suscipit gravida id sit amet leo.`,
    image: PlainBlackN95,
    cost: 199,
    stripeId: ''
  },
  {
    name: 'Rick & Morty',
    description: `Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit.
                  Pellentesque sodales turpis eget
                  lectus gravida consectetur.
                  Vestibulum vitae metus eget lacus
                  suscipit gravida id sit amet leo.`,
    image: PlainRickAndMorty,
    cost: 150,
    stripeId: ''
  },
  {
    name: 'Shiny & Glossy',
    description: `Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit.
                  Pellentesque sodales turpis eget
                  lectus gravida consectetur.
                  Vestibulum vitae metus eget lacus
                  suscipit gravida id sit amet leo.`,
    image: PlainShinyAndGlossy,
    cost: 150,
    stripeId: ''
  },
  {
    name: 'Sustainability',
    description: `Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit.
                  Pellentesque sodales turpis eget
                  lectus gravida consectetur.
                  Vestibulum vitae metus eget lacus
                  suscipit gravida id sit amet leo.`,
    image: PlainSustainability,
    cost: 150,
    stripeId: ''
  }
];

export default Products;
