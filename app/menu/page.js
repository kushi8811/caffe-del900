"use client";
import { useState } from "react";
import menubg from "@/public/caffe-images/menu-bg2.jpg";
import ButtonMenu from "../_components/ButtonMenu";

const menuItems = {
  Caffetteria: [
    { name: "Espresso", price: "€2.6" },
    { name: "Doppio Espresso", price: "€5" },
    { name: "Macchiato", price: "€2.8" },
    { name: "Macchiato", price: "€2.8" },
    { name: "Espresso decafinato", price: "€3" },
    { name: "Correto", price: "€4" },
    { name: "Latte Bianco", price: { S: "€3", M: "€4", L: "€5" } },
    { name: "Americano", price: { S: "€3.2", M: "€4.2", L: "€6" } },
    { name: "Cappuccino", price: { S: "€3.4", M: "€4.4", L: "€6" } },
    { name: "Caffelatte", price: { S: "€3.5", M: "€4.5", L: "€6" } },
    { name: "Latte Macchiato", price: { S: "€3.5", M: "€4.5", L: "€6" } },
    { name: "Matcha latte", price: { S: "€5", M: "€6", L: "€8" } },
    { name: "Affogato", price: "€7" },
    { name: "Espresso Shakerato", price: "€5" },
    { name: "Iced Caffe", price: "€5" },
    { name: "Iced Latte", price: "€5" },
    { name: "Iced Matcha Latte", price: "€6" },
    { name: "Iced Chai Latte", price: "€6" },
  ],
  Drinks: [
    { name: "Water", price: { S: "€2", L: "€3" } },
    { name: "Smoothie", price: "€8" },
    { name: "Orange Juice", price: "€5" },
    { name: "Bottled beer", price: "€5" },
    { name: "Draft Beer", price: { S: "€4.5", L: "€7" } },
    { name: "Juices (Apple,Pineapple,Orange,Pear,Blueberries)", price: "€4.5" },
    { name: "Soft Drinks", price: "€5" },
    { name: "Hot Chocolate", price: "€5" },
    { name: "Hot Tee", price: "€5" },
  ],
  Brunch: [
    { name: "Ouva al tegamino", price: "€8", descprition: "Fried eggs" },
    {
      name: "Ouva sode alla Remoulade",
      price: "€10",
      descprition: "Boiled eggs Remoulade (mayonnaise,capers,tuna,parsley)",
    },
    {
      name: "Ouva strapazzate con bacon",
      price: "€9",
      descprition: "Scrambled eggs with bacon",
    },
    {
      name: "Ouva in camicia con wrustel e salsiccia",
      price: "€12",
      descprition: "Poached egg with wrustel and sausage",
    },
    {
      name: "Omelette prosciutto e formaggio",
      price: "€10",
      descprition: "Omelette ham and cheese",
    },
    {
      name: "Bagel con philadelphia , salmone affumicato,capperi, mix di semi",
      price: "€12",
      descprition: "Bagel philadelphia,smoked salmon,capers.mix seeds",
    },
    {
      name: "Bagel con Bacon , ouva,cheddar",
      price: "€10",
      descprition: "Bagel baco,egg,cheddar cheese",
    },
    {
      name: "Bagel con rucola,pomodoro e frittata",
      price: "€10",
      descprition: "Bagel rocket salad , tomato,egg omelette",
    },
    { name: "Toast avocado e bacon", price: "€9" },
    {
      name: "Toast philadelphia, avocado, ouva in camicia",
      price: "€11",
      descprition: "Toast philadelpia cheese, avocado, poached eggs",
    },
    {
      name: "Toast prosciutto e formaggio",
      price: "€7",
      descprition: "Toast ham and cheese",
    },
    {
      name: "Toast avocado, salmone affumicato, ouva in camicia, mix di semi",
      price: "€12",
      descprition: "Toast avocado, smoked salmon, poached egg,mix seeds",
    },
    {
      name: "French toast caffe e cannella",
      price: "€9",
      descprition: "French toast coffe and cinnamon",
    },
    {
      name: "Freanch toast sciroppo d'acero e frutta fresca",
      price: "€10",
      descprition: "French toast, maple syrup and fresh fruits",
    },
    { name: "Freanch toast nutella e banana", price: "€10" },
    {
      name: "Yogurt frutti rossi, granola, miele",
      price: "€9",
      descprition: "Yogurt berrie, granola, honey",
    },
    {
      name: "Yougurt 'Chunky Monkey': banana,gocce di cioccolato,burro d'arachidi ",
      price: "€10",
      descprition:
        "Yogurt 'Chunky Monkey':banana,chocolate drops,peanut butter",
    },
    {
      name: "Yogurt pesca , mirtilli, granola, scaglie di cocco, menta ",
      price: "€10",
      descprition: "Yogurt peach, blueberries, granola, coconut flakes,mint",
    },
    {
      name: "Yogurt ai mirtilli, granola, banana, melograno",
      price: "€10",
      descprition: "Blueberry yougurt, granola, banana, pomegranate",
    },
    {
      name: "Pancakes salati con fomraggio e speck",
      price: "€11",
      descprition: "Savory pancakes with cheese and speck",
    },
    {
      name: "Pancakes salati con salmone affumicato, formaggio,arancia",
      price: "€12",
      descprition: "Savory pancakes with smoked salmon, cheese and orange",
    },
    {
      name: "Pancakes sciroppo d'acero e burro",
      price: "€10",
      descprition: "Pancakes with maple syrup amd butter",
    },
    {
      name: "Pancakes nutella e granella di nocciola",
      price: "€9",
      descprition: "Pancakes with nutella and chopped hazelnuts",
    },
  ],
  Cocktails: [
    {
      name: "Classic Mojito",
      price: "€9",
      descprition: "Rum infused with fresh lime, mint and sugar",
    },
    {
      name: "Whiskey Sour",
      price: "€10",
      descprition: "Bourbon whiskey, lemon juice, egg whites",
    },
    {
      name: "Old Fashioned",
      price: "€10",
      descprition: "Bourbon whiskey, Angostura bitters, brown sugar",
    },
    {
      name: "Bloody Mery",
      price: "€12",
      descprition:
        "Vodka,tomato juice, lemon juice, tabasco and Worcester sauce",
    },
    {
      name: "Pina Colada",
      price: "€10",
      descprition: "White rum, coconut liquor, pineapple juice",
    },
    { name: "Spritz ", price: "€8", descprition: "Aperol/Campari/Hugo" },
    { name: "Bellini", price: "€8", descprition: "Peach juice and Prosecco" },
    { name: "Mimosa", price: "€8", descprition: "Orange juice and Prosecco" },
    {
      name: "RICKY x MADAME",
      price: "€12",
      descprition: "Aperol, fresh lime juice, strawberry pulp",
    },
    {
      name: "Other Side",
      price: "€11",
      descprition: "Gin,fresh lime juice, mint, cucumber, sugar syrup",
    },
    {
      name: "Viola Fizz",
      price: "€12",
      descprition:
        "Gin,Amaro Viola, fresh lemon juice, sugar syrup, tonic water",
    },
    {
      name: "L'espresso del 900'",
      price: "€10",
      descprition: "Vodka, coffe shot, Kalhua, vanilla liquor",
    },
    {
      name: "Fiorentino Spritz",
      price: "€10",
      descprition: "Prosecco, Amaro Viola, soda",
    },
    {
      name: "Mango Daiquiri",
      price: "€10",
      descprition: "White rum, fresh lime juice, mango pulp, sugar syrup ",
    },
    {
      name: "Negroni Giusto",
      price: "€10",
      descprition: "Campari,Sweet Vermouth, Gin, coffe liquor",
    },
  ],
};

function Menu({}) {
  const [activeTab, setActiveTab] = useState("Caffetteria");

  const formatPrice = (price) => {
    if (!price) return "";
    if (typeof price === "object") {
      return (
        <div className="text-right">
          <div className="flex justify-end gap-8 text-xs text-gray-500 font-normal">
            <span>S</span>
            <span>M</span>
            <span>L</span>
          </div>
          <div>{`${price.S} / ${price.M} / ${price.L}`}</div>
        </div>
      );
    }
    return <span>{price}</span>;
  };

  return (
    <div
      style={{
        backgroundImage: `url(${menubg.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
      }}
    >
      {/* Coperto Badge */}
      <div className="absolute top-4 right-4 bg-yellow-200 text-black px-3 py-1 rounded shadow-lg font-semibold text-sm">
        Coperto / Table Charge €2
      </div>

      <div className="p-4 bg-cover bg-center">
        <div className="max-w-4xl mx-auto bg-white bg-opacity-80 rounded-lg p-6">
          {/* Tabs */}
          <div className="grid grid-cols-2 gap-4 mb-6 md:grid-cols-4">
            {Object.keys(menuItems).map((section) => (
              <ButtonMenu
                key={section}
                onClick={() => setActiveTab(section)}
                className={`px-4 py-2 ${
                  activeTab === section
                    ? "bg-primary-700 text-white"
                    : "bg-gray-200 text-black"
                } rounded`}
              >
                {section}
              </ButtonMenu>
            ))}
          </div>

          {/* Menu Items */}
          <div className="grid gap-4">
            {menuItems[activeTab].map((item, index) => (
              <div
                key={index}
                className="flex justify-between border-b py-2 text-black font-semibold"
              >
                <div className="flex-1">
                  <span>{item.name}</span>
                  {item.descprition ? (
                    <span className="block mt-1 text-sm text-gray-500">
                      {item.descprition}
                    </span>
                  ) : null}
                </div>
                <span>{formatPrice(item.price)}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Menu;
