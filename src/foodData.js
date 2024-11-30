import croissant from "./Images/Croissant.jpg";
import ratatouille from "./Images/Ratatouille.jpg";
import CrèmeBrûlée from "./Images/CrèmeBrûlée.jpg";
import frenchBaguette from "./Images/FrenchBaguette.jpg";
import macarons from "./Images/Macarons.jpg";
import coqAuVin from "./Images/CoqAuVin.jpg";

const foodData = [
  {
    id: 1,
    name: "Croissant",
    description:
      "A croissant is a laminated, yeast-leavened bakery product that contains dough/roll-in fat layers to create a flaky, crispy texture. Croissants belong to the Viennoiserie or pastry category of baked goods along with brioche, Danish, and puff pastries.",
    image: croissant,
  },
  {
    id: 2,
    name: "Ratatouille",
    description:
      "A traditional French vegetable stew made with zucchini, eggplant, bell peppers, and tomatoes, simmered in olive oil and herbs. Ratatouille is a summer vegetable stew that originated as a French Provencal dish from Nice.",
    image: ratatouille,
  },
  {
    id: 3,
    name: "Crème Brûlée",
    description:
      "A rich custard dessert topped with a layer of caramelized sugar. A classic and elegant French treat. Crème brûlée is composed of a rich and creamy custard base with a layer of hard caramel for added crunch.",
    image: CrèmeBrûlée,
  },
  {
    id: 4,
    name: "French Baguette",
    description:
      "An iconic French bread, crispy on the outside and soft on the inside, perfect for pairing with cheese or jam. It is distinguishable by its length, crisp crust, and soft inner core.",
    image: frenchBaguette,
  },
  {
    id: 5,
    name: "Macarons",
    description:
      "Macarons are sweet meringue-based confections made with egg whites, sugar, and almond flour, filled with ganache, buttercream, or jam. They are famous for their vibrant colors and delicate texture.",
    image: macarons,
  },
  {
    id: 6,
    name: "Coq Au Vin",
    description:
      "Coq au vin is a classic French dish made by slow-cooking chicken in red wine with mushrooms, onions, and lardons (small strips of bacon). This dish is deeply flavorful and a staple in French cuisine.",
    image: coqAuVin,
  },
];

export default foodData;
