import React from 'react'
import { Bookmark, Heart, Printer} from 'react-feather';


export default function favBkmkPrt() {
    const handleFavorite = (e) => {
        e.preventDefault()
        // if checkbox is true ---add to favorite
        // if checkbox is false ---remove from favorite
    }
    const handleBookmark = (e) => {
        e.preventDefault()
        // if checkbox is true ---add to bookmark
        // if checkbox is false ---remove from bookmark
    }

    return (
        <div className="favBkmkPrt">
            <form>
                <input className="form-control" id="disabledInput" type="hidden" value=""/>
                <button className="launch  heart" onClick={(e)=>handleFavorite(e)}><Heart/> Favorite</button>
            </form>
            {/* create a js file for the document to print */}
            <button  className="btn" onClick={()=> window.print()}><Printer/> Print</button>
            <form>
                <input className="form-control" id="disabledInput" type="hidden" value=""/>
                <button className="launch" onClick={(e) => handleBookmark(e)}><Bookmark/> Bookmark</button>
            </form>
        </div>
    )
}
