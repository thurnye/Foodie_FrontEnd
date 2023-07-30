import React from 'react';
import styles from './DashboardInfo.module.css';
import { Search } from 'react-feather';

const DashboardInfo = () => {
  const today = new Date();
  const event = new Date(Date.UTC(today.getUTCFullYear(), today.getUTCMonth(),
  today.getUTCDate(), today.getUTCHours(),
  today.getUTCMinutes(), today.getUTCSeconds()));
  const options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };
  const date = event.toLocaleDateString({}, options);

  return(
  <div className={styles.DashboardInfo}>
    <div className={styles.searchContanier}>
      <div className="container">
        <div className="row">
          <div className={`col-12 col-lg-9`}>
            <div className="input-group mb-3 mt-3">
              <input type="text" className={`form-control ${styles.searchInput}`} aria-label="Amount (to the nearest dollar)"/>
              <span className={`input-group-text ${styles.searchGlass}`}><Search/></span>
            </div>
          </div>
          <div className={`col-3 ${styles.dashboardDate}`}>
            <div className='mb-3 mt-4'>
              <p className='text-muted text-small'>
                <em>{date}</em>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className={styles.mainContent}>
      <div className="container text-center">
        <div className="row">
          <div className={`col-md-6 ${styles.feedContents}`}>
            <div className={`card`}>
              <div className="card-body">
                <h5 className="card-title">News Feed</h5>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className={`container text-center ${styles.mainContent_Container}`}>
              <div className="row">
                <div className="col">
                  <div className={`card ${styles.dashboardInfo_Card} ${styles.most_recent_task}`}>
                    <div className="card-body">
                      <h5 className="card-title">Recent Activity</h5>
                      <h6 className="card-subtitle mb-2 text-body-secondary">Card subtitle</h6>
                      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                      <a href="#" className="card-link">Card link</a>
                      <a href="#" className="card-link">Another link</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md">
                  <div className={`card ${styles.dashboardInfo_Card}`}>
                    <div className="card-body">
                      <h5 className="card-title">Featured Chefs and Bloggers</h5>
                      <h6 className="card-subtitle mb-2 text-body-secondary">Card subtitle</h6>
                      <ul class="list-group">
                        <li class="list-group-item">Featured Chefs and Bloggers: Introduce users to guest chefs or food bloggers by featuring their profiles and recipes on the dashboard.
                        </li>
                      </ul>
                      <a href="#" className="card-link">Card link</a>
                      <a href="#" className="card-link">Another link</a>
                    </div>
                  </div>
                </div>
                <div className="col-md">
                  <div className={`card ${styles.dashboardInfo_Card}`}>
                    <div className="card-body">
                      <h5 className="card-title">UpComing Events</h5>
                      <h6 className="card-subtitle mb-2 text-body-secondary">Card subtitle</h6>
                      <ul class="list-group">
                        <li class="list-group-item">Display a calendar of upcoming cooking events, food festivals, or culinary workshops in the user's region or online.
                        </li>
                      </ul>
                      <a href="#" className="card-link">Card link</a>
                      <a href="#" className="card-link">Another link</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className='row'>
                <div className="col-md">
                  <div className={`card ${styles.dashboardInfo_Card}`}>
                    <div className="card-body">
                      <h5 className="card-title">Most Viewed / most Rated</h5>
                      <h6 className="card-subtitle mb-2 text-body-secondary">Card subtitle</h6>
                      toggle between each
                      <ul class="list-group">
                        <li class="list-group-item">show most viewed recipe and also most rated top 5 each
                        </li>
                        <li class="list-group-item">User Reviews and Ratings: Allow users to rate and review recipes they have tried. Display these ratings and reviews to help others in the community make better-informed decisions about which recipes to try.
                        </li>
                      </ul>
                      <a href="#" className="card-link">Card link</a>
                      <a href="#" className="card-link">Another link</a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md">
                  <div className={`card ${styles.dashboardInfo_Card}`}>
                    <div className="card-body">
                      <h5 className="card-title">Location of Local Farmers</h5>
                      <h6 className="card-subtitle mb-2 text-body-secondary">Card subtitle</h6>
                      <ul class="list-group">
                        <li class="list-group-item">Local Farmers' Market Locator: Integrate a tool that helps users find nearby farmers' markets to source fresh ingredients locally.
                        </li>
                      </ul>
                      <a href="#" className="card-link">Card link</a>
                      <a href="#" className="card-link">Another link</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


    </div>
    <div className={styles.dashboardFooterContent}>

    </div>
  </div>
)
};


export default DashboardInfo;
