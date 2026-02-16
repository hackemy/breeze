export interface MenuCategory {
  id: string
  title: string
  description: string
  image: string
  alt: string
}

export const menuCategories: MenuCategory[] = [
  {
    id: 'coffee',
    title: 'Coffee and Beverages',
    description:
      'Rich espressos, smooth lattes, refreshing milkshakes, plus hot and cold beverages to start the day right.',
    image: new URL('@/assets/images/breeze-coffee.png', import.meta.url).href,
    alt: 'Coffee drinks served at Breeze Café'
  },
  {
    id: 'breakfast',
    title: 'Breakfast and Brunch',
    description:
      'Daily 8am–1pm brunch with omelettes, pancakes, scrambled eggs, and signature breakfast plates.',
    image: new URL('@/assets/images/brunch-breakfast.png', import.meta.url).href,
    alt: 'Breakfast dishes from Breeze Café'
  },
  {
    id: 'pinsa',
    title: 'Pinsa and Pizza',
    description:
      'Made-to-order pinsas and pizzas with airy dough, vibrant sauces, and plenty of toppings.',
    image: new URL('@/assets/images/pizza-and-pinsa-chania3.png', import.meta.url).href,
    alt: 'Fresh pinsa from Breeze Café'
  },
  {
    id: 'desserts',
    title: 'Desserts and Waffles',
    description:
      'Crepes, waffles, and patisserie desserts with premium toppings for any time of day.',
    image: new URL('@/assets/images/desserts-menu1.png', import.meta.url).href,
    alt: 'Dessert plate from Breeze Café'
  },
  {
    id: 'smoothies',
    title: 'Smoothies and Juices',
    description:
      'Cold-pressed juices and vibrant smoothies blended with seasonal fruit for a natural boost.',
    image: new URL('@/assets/images/smoothies2.png', import.meta.url).href,
    alt: 'Colorful smoothies from Breeze Café'
  },
  {
    id: 'snacks',
    title: 'All Day Snacks',
    description:
      'Sandwiches, tortillas, bruschette, and quick bites served throughout the day.',
    image: new URL('@/assets/images/breeze-brunch.png', import.meta.url).href,
    alt: 'Snack platter from Breeze Café'
  },
  {
    id: 'mains',
    title: 'Salads and Mains',
    description:
      'From 13:30 enjoy salads, burgers, pasta, risotto, chicken fillet, and hearty daily dishes.',
    image: new URL('@/assets/images/main-courses-breeze2.png', import.meta.url).href,
    alt: 'Main course dish from Breeze Café'
  },
  {
    id: 'cocktails',
    title: 'Cocktails and Drinks',
    description:
      'Signatures, classics, chilled beers, and wines to sip while looking over the Kissamos bay.',
    image: new URL('@/assets/images/cocktails-breeze.png', import.meta.url).href,
    alt: 'Cocktail flight at Breeze Café'
  }
]
