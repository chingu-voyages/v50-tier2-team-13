
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
      <div className="welcome-bx">
        <h2>Team 13</h2>
        <h1>Voyage 50</h1>
        <h2>Tier 2</h2>
      </div>
    </div>
  );
}
