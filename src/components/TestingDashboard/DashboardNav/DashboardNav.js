import React from 'react';
import { Link } from 'react-router-dom';
import { Bell, ChevronsDown, Trash2, FileMinus, Cast, Bookmark } from 'react-feather';
import styles from './DashboardNav.module.css';
import Avatar from '../../../public/images/imgPlaceholder.jpeg'

const DashboardNav = () => {
  const navItems = [
    {
      name: 'Dashboard',
      path: 'dashboard',
      icon: <Trash2  strokeWidth={1} size={18}/>
    },
    {
      name: 'Recipe Manager',
      path: 'recipeManager',
      icon: <Trash2  strokeWidth={1} size={18}/>,
      subMenu: [
        {
          name: 'Manage Recipe',
          path: 'manage-recipe',
          badge: 2,
          icon: <Bell strokeWidth={1} size={18}/>
          
        },
        {
          name: 'New Recipe',
          path: 'add-recipe',
          icon: <Trash2  strokeWidth={1} size={18}/>
    
        }
      ]
    },
    // {
    //   name: 'Posts',
    //   path: 'blog-manager',
    //   icon: <FileMinus strokeWidth={1} size={18} />,
    //   subMenu: [
    //     {
    //     name: 'Manage Post',
    //     path: '/',
    //     badge: 2,
    //     icon: <Bell strokeWidth={1} size={18}/>
        
    //   },
    //   {
    //     name: 'Add Post',
    //     path: '/',
    //     icon: <Trash2  strokeWidth={1} size={18}/>
  
    //   }]
    // },
    {
      name: 'Events',
      path: 'events/all',
      icon: <Cast strokeWidth={1} size={18}/>,
      // subMenu: [
      //   {
      //     name: 'Manage Events',
      //     path: 'manage-events',
      //     badge: 2,
      //     icon: <Bell strokeWidth={1} size={18}/>
          
      //   },
      //   {
      //     name: 'New Event',
      //     path: 'new-event',
      //     icon: <Trash2  strokeWidth={1} size={18}/>
    
      //   },
      //   {
      //     name: 'Scheduled Event',
      //     path: 'scheduled-events',
      //     icon: <Trash2  strokeWidth={1} size={18}/>
    
      //   }
      // ]
      
    },
    {
      name: 'Notification',
      path: 'notification',
      badge: 2,
      icon: <Bell strokeWidth={1} size={18}/>
      
    },
    {
      name: 'Profile',
      path: 'profile',
      icon: <Trash2  strokeWidth={1} size={18}/>

    },
    {
      name: 'Saves and Bookmarks',
      path: 'saves-and-bookmarks',
      icon: <Bookmark  strokeWidth={1} size={18}/>

    },
  ]

    return (
    <div className={styles.DashboardNav}>
      
      <div className={styles.logoContainer}>
        <a className={`navbar-brand ${styles.brandLink}`} href="/">
          FOODIE
        </a>
      </div>
      <div className={`${styles.dashboardNavContainer}`}>
        <nav>
          <ul className='p-0'>
            {navItems.map((el, i) => el.subMenu ? 
            
            <React.Fragment key={`dashboard_${el.name}`}>
            {/* With SubMenu */}
              <li className={`${styles.DropNavItems}`}>
                <a className={styles.item} data-bs-toggle="collapse" href={`#collapseExample${i}`} role="button" aria-expanded="false" aria-controls="collapseExample">
                <span>
                  {el.icon}
                </span>
                <span className={styles.DropNavItem}>
                  {el.name}
                </span>
                <ChevronsDown strokeWidth={1} size={14}/>
                </a>
              </li>
              <div className="collapse" id={`collapseExample${i}`}>
                  <ul>
                    {el.subMenu.map((sub) => 
                    <li 
                    key={`dashboard_${sub.name}`} 
                    className={`${styles.subNavItems}`}>
                          <Link to={sub.path}>{sub.name}</Link>
                    </li>)}
                  </ul>
              </div>
            </React.Fragment>
            :
            // Without SubMenu
            <li 
            key={`dashboard_${el.name}`} 
            className={`${styles.navItems}`}>
              <div>
                <span>
                  {el.icon}
                </span>
                  <Link to={el.path} className={styles.item}>{el.name}</Link>
              </div>
              {el.badge && <span className={`badge  ${styles.badge}`}>{el.badge}</span>
              }
            </li>
            )}
          </ul> 
        </nav>
        <div className={styles.dashboardUserContainer}>
              <Link to={{
                  pathname: `/` ,
                }}
                state= {{postId: ''}}
                  className={styles.imageContent}>
                      <img src={Avatar} alt="author-avatar" />
              </Link>
              <h6 className='mb-0'>John Doe</h6>
              <p className={`text-small muted ${styles.dashboardUserName}`}>Johndoe@johndoe.com</p>
        </div>
      </div>
    </div>
  )

};



export default DashboardNav;
