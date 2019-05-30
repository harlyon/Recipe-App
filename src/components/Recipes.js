import React from 'react'
import { Link } from 'react-router-dom'

export default function Recipes(props) {
  return (
    <div className="container">
      <div className="row">
            {props.recipes && props.recipes.map((recipe) => {
                return (
                <div className="col-md-4" key={recipe.recipe_id} style={{ marginBottom: '2rem' }}>
                    <div className="recipes__box">
                        <img className="recipe__box-img"
                        src={recipe.image_url}
                        alt={recipe.title} />
                        <div className="recipe__text">
                           <h5 className="recipes__title" style={{ whiteSpace: "nowrap", textOverflow: "ellipsis", overflow: "hidden" }}> { recipe.title } </h5>
                           <p className="recipes__subtitle">Publisher:
                            <span>{recipe.publisher}</span>
                           </p>
                        </div>
                        <button className="recipe_buttons">
                            <Link to={{ pathname: `/recipe/${recipe.recipe_id}`, state: recipe.title}} >View Recipe</Link>
                        </button>
                    </div>
                </div>
                );
            })}
      </div>
    </div>
  )
}

