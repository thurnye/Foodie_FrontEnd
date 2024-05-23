import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from './IngredientsList.module.css';




export default function IngredientsList({ingredients}) {
    
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
                {ingredients.map((el, index) => 
                   el.type === 'main' && <>
                            <tr key={index}>
                            <th scope="row" name="ingredient1" >
                                <FontAwesomeIcon icon={['far', 'circle']} />
                            </th>
                            <td>{el.name}</td>
                        </tr>
                   </>    
                    
                 )}
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
                {ingredients.map((el, index) => 
                   el.type !== 'main' && <>
                            <tr key={index}>
                            <th scope="row" name="ingredient1" >
                                <FontAwesomeIcon icon={['far', 'circle']} />
                            </th>
                            <td>{el.name}</td>
                        </tr>
                   </>    
                    
                 )}
                </tbody>
            </table>
        </div>
       
        </div>
    )
}
