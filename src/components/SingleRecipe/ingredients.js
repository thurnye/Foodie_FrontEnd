import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from './ingredients.module.css'
import Tick from '../UI/tick'
import {useSelector} from 'react-redux'

export default function Ingredients() {

    const recipe = useSelector(state => state.recipesData.singleRecipe)

    
    return (
        <div className={styles.Ingredients}>
            <div className={`table-responsive ${styles.tableContainer}`}>
            <h5>Main Ingredients</h5>
            <table className={`table caption-top ${styles.IngredientsTable}`}>
                <thead>
                    <tr>
                    <th scope="col"></th>
                    <th scope="col"><h6>Ingredients</h6></th>
                    </tr>
                </thead>
                <tbody>
                {recipe && recipe.mainIngredients.map((el, index) => {
                    return(
                        <tr key={index}>
                        <th scope="row" name="ingredient1" >
                            <Tick/>
                        </th>
                        <td>{el.mainList}</td>
                    </tr>
                    )
                } )}
                </tbody>
            </table>
        </div>
       
            <div className={`table-responsive ${styles.tableContainer}`}>
                <h5>For Dressing</h5>
            <table className={`table caption-top ${styles.IngredientsTable}`}>
                <thead>
                    <tr>
                    <th scope="col"></th>
                    <th scope="col"><h6>Ingredients</h6></th>
                    </tr>
                </thead>
                <tbody>
                {recipe && recipe.dressingIngredients.map((el, index) => {
                    return(
                        <tr key={index}>
                        <th scope="row" name="ingredient1" >
                            <Tick/>
                        </th>
                        <td>{el.dressingList}</td>
                    </tr>
                    )
                } )}
                </tbody>
            </table>
        </div>
       
        </div>
    )
}
