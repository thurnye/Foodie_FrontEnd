import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './table.css'
import $ from 'jquery'
import Tick from '../UI/tick'

export default function table() {

   


    return (
        <>
            <div className="table-container table-responsive">
            <table className="table caption-top">
                <thead>
                    <tr>
                    <th scope="col"></th>
                    <th scope="col"><h6>Ingredients</h6></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row" name="ingredient1" >
                            <Tick/>
                        </th>
                        <td>2 pisces </td>
                    </tr>
                    <tr>
                        <th scope="row">
                            <Tick/>
                        </th>
                        <td>200 g Ground Beef</td>
                    </tr>
                    <tr>
                        <th scope="row">
                            <Tick/>
                        </th>
                        <td>4 Eggs batches flax eggs* (2 flax eggs = 2 Tbsp flaxseed meal / 14 g + 5 Tbsp / 75 ml water)</td>
                    </tr>
                    <tr>
                        <th scope="row">
                            <Tick/>
                        </th>
                        <td>1 ½ cups peeled and chopped golden potato or sweet potato (large bite-size pieces)</td>
                    </tr>
                    <tr>
                        <th scope="row">
                            <Tick/>
                        </th>
                        <td>0.17 cup chopped walnuts or pecans (or sub other nut or seed of choice)</td>
                    </tr>
                </tbody>
            </table>
        </div>
       
            <div className="table-container table-responsive">
                <h5>For Dressing</h5>
            <table className="table caption-top">
                <thead>
                    <tr>
                    <th scope="col"></th>
                    <th scope="col"><h6>Ingredients</h6></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row" name="ingredient1" >
                            <Tick/>
                        </th>
                        <td>fresh herbs, such as chopped parsley and/or cilantro </td>
                    </tr>
                    <tr>
                        <th scope="row">
                            <Tick/>
                        </th>
                        <td>2 cups blueberries, washed and picked over for stems</td>
                    </tr>
                    <tr>
                        <th scope="row">
                            <Tick/>
                        </th>
                        <td>300 g Mayonaise </td>
                    </tr>
                    <tr>
                        <th scope="row">
                            <Tick/>
                        </th>
                        <td>1 tablespoon honey (light brown sugar or maple syrup also works)</td>
                    </tr>
                </tbody>
            </table>
        </div>
       
        </>
    )
}
