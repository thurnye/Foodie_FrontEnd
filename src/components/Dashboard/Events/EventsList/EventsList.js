import React from 'react';
import styles from './EventsList.module.css';
import poster1 from '../../../../public/images/allRecipes/img1.jpeg'
import poster2 from '../../../../public/images/allRecipes/img2.jpeg'
import poster3 from '../../../../public/images/allRecipes/img3.jpeg'
import poster4 from '../../../../public/images/allRecipes/img4.jpeg'
import poster5 from '../../../../public/images/allRecipes/img5.jpeg'
import poster6 from '../../../../public/images/allRecipes/img6.jpeg'
import poster7 from '../../../../public/images/allRecipes/img7.jpeg'
import { getRandomInt, formatNumber, formatDateWithTimeZoneRegion } from '../../../../util/commons';
import { MdLocationPin } from "react-icons/md";
import { FaUserFriends} from "react-icons/fa";

const EventsList = () => {
  const currentDate = new Date();
  const formattedDate = formatDateWithTimeZoneRegion(currentDate);
  const posters = [poster1, poster2, poster3, poster4, poster5, poster6, poster7]

  
  
  return(
  <div className={styles.Events}>
    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
      {posters.map((el, index) => (
        <div className="col" key={`event_${getRandomInt()}`}>
          <div className="card">
            <img src={el} className={`card-img-top ${styles.Banner}`} alt="eventBanner"/>
            <div className="card-body">
              <h4 className={` ${styles.Title}`}>The Baking Event</h4>
              <h6 className={`${styles.Time}`}>{formattedDate}</h6>
              <h6 className={`${styles.Venue}`}>
                <span>
                  <MdLocationPin size={'20px'}/>
                </span>
                <span>Toronto</span>
                
              </h6>
              <h6 className={`${styles.Entry}`}>Free</h6>
              <h6 className={`${styles.Organiser}`}>Event Planner</h6>
              <h6 className={`${styles.Followers}`}>
                <span>
                <FaUserFriends size={'20px'}/>
                </span>
                <span> {formatNumber(307098)} Followers</span>
              </h6>
            </div>
          </div>        
        </div>
      ))}
    </div>
  </div>
)};


export default EventsList;
