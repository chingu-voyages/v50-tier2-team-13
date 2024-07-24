const Categories = ({pizzaMenuItems, burgerMenuItems, sandwichesMenuItems, dessertsMenuItems, drinksMenuItems, popularMenuItems,  filterCategory}) => {

    return(
        <div className="categories-box">
            <div className="category-item">
                <img onClick={() => filterCategory(popularMenuItems)} src="/popular-food.svg"/>
                <h5>Popular</h5>
            </div>
            <div className="category-item">
                <img onClick={() => filterCategory(pizzaMenuItems)} src="/pizza.svg"/>
                <h5>Pizza</h5>
            </div>
            <div className="category-item">
                <img onClick={() => filterCategory(burgerMenuItems)} src="/burger.svg"/>
                <h5>Burgers</h5>
            </div>
            <div className="category-item">
                <img onClick={() => filterCategory(sandwichesMenuItems)} src="/sandwich.svg"/>
                <h5>Sandwiches</h5>
            </div>
            <div className="category-item">
                <img onClick={() => filterCategory(dessertsMenuItems)} src="/doughnut.svg"/>
                <h5>Desserts</h5>
            </div>
            <div className="category-item">
                <img onClick={() => filterCategory(drinksMenuItems)} src="/cola.svg"/>
                <h5>Drinks</h5>
            </div>
        </div>
    )
}

export default Categories;