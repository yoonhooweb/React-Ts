import { useState } from "react";
import Recipe from "./Recipe";

function RecipeList() {
    const [resipe, setResipe] = useState([
        {
            id: "greek-salad",
            name: "Greek Salad",
            ingredients: ["tomatoes", "cucumber", "onion", "olives", "feta"],
        },
        {
            id: "hawaiian-pizza",
            name: "Hawaiian Pizza",
            ingredients: [
                "pizza crust",
                "pizza sauce",
                "mozzarella",
                "ham",
                "pineapple",
            ],
        },
        {
            id: "hummus",
            name: "Hummus",
            ingredients: [
                "chickpeas",
                "olive oil",
                "garlic cloves",
                "lemon",
                "tahini",
            ],
        },
    ]);

    const handleDelete = (id:string) => {
        return setResipe(resipe.filter((item => item.id !== id)));
    }

    return (
        <div>
            <h1>Resipe</h1>
            <ul>
                {resipe.map((item) => {
                    return ( 
                        <>
                            <li key={item.id}>
                                {item.name},<br />
                                <Recipe resipe = {item.ingredients}/>
                            </li>
                            <button onClick={() => handleDelete(item.id)}>삭제</button>
                        </>
                    )
                })}
            </ul>
            
        </div>
    );
}

export default RecipeList;
