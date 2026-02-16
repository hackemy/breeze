export interface MenuCategory {
  id: string
  title: string
  description: string
  image: string
  alt: string
  align: 'left' | 'right'
}

export const menuCategories: MenuCategory[] = [
  {
    id: 'coffee',
    title: 'Coffee and Beverages',
    description:
      'Breeze offers a variety of coffees, along with hot and cold beverages. Rich espressos, smooth lattes, refreshing milkshakes and more, perfect for starting your day.',
    image: new URL('@/assets/images/breeze-coffee.png', import.meta.url).href,
    alt: 'Coffee drinks served at Breeze Café',
    align: 'left'
  },
  {
    id: 'smoothies',
    title: 'Smoothies and Juices',
    description:
      'Our menu features a variety of fresh smoothies and juices, perfect for a refreshing boost to start your day. Vibrant blends to set a positive tone for the day ahead.',
    image: new URL('@/assets/images/smoothies2.png', import.meta.url).href,
    alt: 'Colorful smoothies from Breeze Café',
    align: 'right'
  },
  {
    id: 'breakfast',
    title: 'Breakfast and Brunch',
    description:
      'Join us for breakfast or brunch from 8am to 1pm everyday. Start your day with our delicious selection of omelettes, scrambled eggs, pancakes and many special dishes.',
    image: new URL('@/assets/images/brunch-breakfast.png', import.meta.url).href,
    alt: 'Breakfast dishes from Breeze Café',
    align: 'left'
  },
  {
    id: 'snacks',
    title: 'All Day Snacks',
    description:
      'We also offer all-day snacks, including sandwiches, tortillas, brusquetas and many more delicious options, available throughout the day to satisfy your cravings anytime.',
    image: new URL('@/assets/images/breeze-brunch.png', import.meta.url).href,
    alt: 'Snack platter from Breeze Café',
    align: 'right'
  },
  {
    id: 'pinsa',
    title: 'Pinsa and Pizza',
    description:
      'Enjoy our fresh, made-to-order pinsas and pizzas, available in a variety of flavors and crafted with freshly made dough for a delicious experience any time of day.',
    image: new URL('@/assets/images/pizza-and-pinsa-chania3.png', import.meta.url).href,
    alt: 'Fresh pinsa from Breeze Café',
    align: 'left'
  },
  {
    id: 'mains',
    title: 'Salads and Mains',
    description:
      'Everyday from 1:30pm, you can enjoy our selection of salads and main dishes, including mouthwatering burgers, pasta, risotto, chicken fillet and more flavorful choices.',
    image: new URL('@/assets/images/main-courses-breeze2.png', import.meta.url).href,
    alt: 'Main course dish from Breeze Café',
    align: 'right'
  },
  {
    id: 'desserts',
    title: 'Desserts and Waffles',
    description:
      'Savor delicious crepes and waffles, featuring premium toppings and flavors or choose from our exclusive desserts. Enjoy a delightful treat at any time of day.',
    image: new URL('@/assets/images/desserts-menu1.png', import.meta.url).href,
    alt: 'Dessert plate from Breeze Café',
    align: 'left'
  },
  {
    id: 'cocktails',
    title: 'Cocktails and Drinks',
    description:
      'We also offer a selection of cocktails, cold beers, wines, and other refreshing drinks to enjoy throughout the day. Relish your beverage while taking in the magnificent sea view.',
    image: new URL('@/assets/images/cocktails-breeze.png', import.meta.url).href,
    alt: 'Cocktail flight at Breeze Café',
    align: 'right'
  }
]
