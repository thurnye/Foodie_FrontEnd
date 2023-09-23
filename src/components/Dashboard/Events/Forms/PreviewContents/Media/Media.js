import React from 'react';
import styles from './Media.module.css';
import {AiOutlineLike} from 'react-icons/ai';
import {BiComment, BiDotsHorizontalRounded} from 'react-icons/bi'
import {PiShareFat} from 'react-icons/pi';
import ad from '../../../../../../public/images/adverts/cookingClass.jpeg'

const Media = () => {
  return(
  <div className={styles.Media}>
    <div className={`card mt-4 ${styles.MediaCardContainer}`} style={{width: "18rem"}}>
        <div className="card-body">
          <div className="">
            <div className="row g-0">
              <div className="col">
                <div className={styles.MediaAccountHeader}>
                  <div className={styles.mediaAvatar}>&#128075;</div>
                  <div className={styles.yourPage}>
                    <div>Your Page</div>
                    <div>Sponsored</div>
                  </div>
                  <div className={styles.dotIcon}>
                    <BiDotsHorizontalRounded/>
                  </div>
                </div>
                <div>
                  <span>Tickets for</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img src={ad} className="card-img-top" alt="..."/>
        <div className="card-body p-0">
          <div className={`p-2 ${styles.mediaDescContainer}`}>
            <div className="row g-0">
              <div className="col">
                <div className={styles.MediaDesc}>
                  <div className={styles.mediaName}>FOODIE.COM</div>
                  <div className={styles.buyTicket}>
                    Buy Tickets
                </div>
                </div>
                <div>
                  <span>Some quick example text to build on the card title and make up the bulk of the card's content.</span>
                </div>
              </div>
            </div>
          </div>
          <hr/>
          <div className={`p-2`}>
            <span><AiOutlineLike className={styles.circleLikeIcon}/></span>
            <span>105 Likes</span>
          </div>
          <hr/>
          <div className={`p-3 ${styles.MediaInteraction}`}>
            <div>
              <span> <AiOutlineLike className={styles.circleLikeIcon}/></span>
              <span>Like</span>
            </div>
            <div>
              <span><BiComment/></span>
              <span>Comment</span>
            </div>
            <div>
              <span><PiShareFat/></span>
              <span>Share</span>
            </div>
          </div>
        </div>
      </div>
  </div>
)};


export default Media;
