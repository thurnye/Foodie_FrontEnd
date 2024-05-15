import React from 'react'
import { getRandomInt } from '../../util/commons'
import styles from './NutrientTable.module.css'

export default function NutrientsTable({nutrients}) {
    return (
        <div className={styles.NutrientTable}>
           <div className={`card`}>
                <div className={`${styles.nutrientContainer}`}>
                    <h5 className={`text-center`}>Nutritional Information</h5>
                    <div className={`card-body ${styles.nutrientsContents} container`}>
                        {nutrients.map((el,index )=> {
                            return(
                                <p className="col-4 col-sm-4 col-md-2" key={getRandomInt()}>
                                <span>{el.amount}{el.unit}</span>
                                <span>{el.name}</span>
                            </p>
                            )
                        }) }
                        </div>
                 </div>
            
            </div> 
        </div>
    )
}