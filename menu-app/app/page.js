import MenuItem from "@/components/MenuItem";

export default async function Home() {

  const res = await fetch('https://menus-api.vercel.app/');
  const data = await res.json();
  const pizzas = data.pizzas;
  const burgers = data.burgers;
  const desserts = data.desserts;
  const drinks = data.drinks;
  const sandwiches = data.sandwiches;
  const bestFoods = data['best-foods'];


  return (
    <div>
      <div>
        {pizzas
        .map((item) => (
          <MenuItem key={item.id} item={item}/>
        ))}
      </div>
      <div>
        {burgers
        .map((item) => (
          <MenuItem key={item.id} item={item}/>
        ))}
      </div>
      <div>
        {desserts
        .map((item) => (
          <MenuItem key={item.id} item={item}/>
        ))}
      </div>
      <div>
        {drinks
        .map((item) => (
          <MenuItem key={item.id} item={item}/>
        ))}
      </div>
      <div>
        {sandwiches
        .map((item) => (
          <MenuItem key={item.id} item={item}/>
        ))}
      </div>
      <div>
        {bestFoods
        .map((item) => (
          <MenuItem key={item.id} item={item}/>
        ))}
      </div>

    </div>
  );
}
