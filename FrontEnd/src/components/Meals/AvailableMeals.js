import classes from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";

const DUMMY_MEALS = [
  {
    id: 1,
    name: 'Sambar Idly',
    category: 'breakfast',
    price: 49,
    itempic: '/images/sambaridli.png',
    description: `Idli sambar is a popular South Indian breakfast combination. It consists of fluffy soft steamed cakes known as idli served with sambar, a vegetable lentil stew. `,
  },
  {
    id: 2,
    name: 'Meals',
    category: 'lunch',
    price: 199,
    itempic: '/images/meals.jpg',
    description: `Each dish is a culinary masterpiece, where flavors dance on your palate and memories are created with every bite. `,
  },
  {
    id: 3,
    name: 'Vanilla milkshake',
    category: 'shakes',
    price: 89,
    itempic: '/images/vanilla.png',
    description: `Indulge in a creamy symphony of Madagascar's finest vanilla, dancing in a chilled embrace of pure delight, a sip of our vanilla milkshake is a voyage to the heart of sweetness.`,
  },
  {
    id: 4,
    name: 'Dosa',
    category: 'breakfast',
    price: 69,
    itempic: '/images/dosa.jpg',
    description: `Experience the perfect marriage of crispy delight and savory satisfaction with our signature dosa, a delicate canvas of South Indian flavors that will leave your taste buds dancing. `,
  },
  {
    id: 5,
    name: 'Fry Piece Biryani',
    category: 'lunch',
    price: 329,
    itempic: '/images/frypiece.jpeg',
    description: `Indulge in a symphony of flavors with our Fry Piece Biryani – where succulent, golden-brown treasures of fried goodness dance in aromatic harmony with fragrant basmati rice, creating a culinary masterpiece that's a feast for your senses. `,
  },
  {
    id: 6,
    name: 'Oreo Milkshake',
    category: 'shakes',
    price: 149,
    itempic: '/images/oreom.jpg',
    description: `Indulge in a creamy dance of cookies and dreams, where Oreo cookies take a whirl with velvety milk, creating an enchanting Oreo Milkshake that's a sip of pure delight. `,
  },
  {
    id: 7,
    name: 'Upma-Pesarattu',
    category: 'breakfast',
    price: 89,
    itempic: '/images/upmap.jpg',
    description: `Experience the perfect harmony of South Indian flavors in every bite with our Upma Pesarattu – a delightful fusion of crispy lentil crepes topped with a savory semolina twist! `,
  },
  {
    id: 8,
    name: 'Mutton Biryani',
    category: 'lunch',
    price: 399,
    itempic: '/images/mutton.jpg',
    description: `Savor the symphony of spices in every aromatic bite of our exquisite Mutton Biryani, where tender meat and fragrant rice unite in a tantalizing dance of flavors.  `,
  },
  {
    id: 9,
    name: 'Blue Mojito',
    category: 'shakes',
    price: 59,
    itempic: '/images/bmj.webp',
    description: `Indulge in the refreshing embrace of our Blue Mojito, where the vibrant hues of the Caribbean meet the cool, crisp kiss of mint and lime.`,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      id={meal.id}
      key={meal.id}
      itempic={meal.itempic}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
