import React from 'react'
import { Bookmark, Heart, Printer} from 'react-feather';


export default function favBkmkPrt() {
    const handleClick = (e) => {
        e.preventDefault()
    }
    // const submitHandler = (e) => {
    //     e.preventDefault()
        

    // }
    return (
        <div className="favBkmkPrt">
            <form>
                <input className="form-control" id="disabledInput" type="hidden" value=""/>
                <button className="launch  heart" onClick={(e)=>handleClick(e)}><Heart/> 0 </button>

            </form>
            {/* create a js file for the document to print */}
            <button  className="btn" onClick={()=> window.print()}><Printer/> Print</button>
            <form>
                <input className="form-control" id="disabledInput" type="hidden" value=""/>
                <button className="launch" onClick={(e) => handleClick(e)}><Bookmark/> Bookmark</button>
            </form>
        </div>
    )
}
