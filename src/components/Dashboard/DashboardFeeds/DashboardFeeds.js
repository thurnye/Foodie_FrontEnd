import React, {useState} from 'react';
import styles from './DashboardFeeds.module.css';
import Avatar from '../../Avatar/avatar';
import Img from '../../../public/images/recentRecipes/img8.jpeg';
import { Bookmark, Heart, Image, MessageCircle, Share2, Video } from 'react-feather';
import parser from 'html-react-parser';
import CompTextEditor from '../../CompTextEditor/CompTextEditor';
const DashboardFeeds = () => {
  const [post, setPost] = useState('');
  const [media, setMedia] = useState('');

  console.log(media);

  return(
    <div className={styles.DashboardFeeds}>
      <div className={styles.DashboardDesktopPost}>
        <div className="card">
          <div className="card-body p-0">
            <CompTextEditor setEditorData={setPost} show={false} placeholder='Lets know your latest venture...'/>
            <div className={styles.postActions}>
              <div className={styles.media}>
                <label for="file" className={`nav-link btn ${styles.postMedia}`} onClick={() => setMedia('image')}>
                <Image strokeWidth={1} size={18}/>
                </label> 
                <input type="file" 
                  id="file" 
                  accept="image/*"
                  style={{display: "none", visibility: 'hidden'}}
                />
                <label for="file" className={`nav-link btn ${styles.postMedia}`} onClick={() => setMedia('video')}>
                  <Video strokeWidth={1} size={18}/> 
                </label> 
                <input type="file" 
                  id="file" 
                  accept="video/*"
                  style={{display: "none", visibility: 'hidden'}}
                />
              </div>
              <div>
                <button className={`nav-link btn ${styles.postContent}`} onClick={() => console.log('posted')}>
                  Post
                </button>
              </div>
            </div>
            {parser(post)}
          </div>
        </div>
      </div>
      <div className={`${styles.DashboardFeedsContainer}`}>
      {Array.from(Array(6)).map((_, index) => (
        <div className={`row ${styles.feedsContainer}`} key={`feeds${index}`}>
          <div className={`col-2 p-0 `}>
            <div className={styles.imageContainer}>
              <Avatar/>
            </div>
          </div>
          <div className={`col ${styles.contentContainer}`}>
            <div className="card">
              <div className="card-body p-0">
                <p className={`pb-0 mb-0`}>
                  <span>John Doe </span>
                  <span className="card-subtitle  text-body-secondary">@JohnDoe 7h</span>
                </p>
                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              </div>
              <img src={Img} className="card-img-bottom" alt=""/>

              <div className={`${styles.feedActions}`}>
                <span>
                  <MessageCircle strokeWidth={1} size={18}/>
                  <small>1,200</small>
                </span>
                <span>
                  <Heart strokeWidth={1} size={18}/>
                  <small>200k</small>
                </span>
                <span>
                  <Bookmark strokeWidth={1} size={18}/>
                </span>
                <span>
                  <Share2 strokeWidth={1} size={18}/>
                </span>
              </div>
            </div>
          </div>
        </div>
  ))}
      </div>
    </div>
  )
};

export default DashboardFeeds;
