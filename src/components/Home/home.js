import React from 'react';
import {useSelector} from 'react-redux'
import NavBar from '../Nav/navbar';
import List from '../ListOfUsers/displayUsers'

const Home = () => {
    const user = useSelector(state => state.userLog.user)
    return (
        <React.Fragment>
            <NavBar/>
        <div>
            <h2>All Users</h2>
            {user && <List/>}
            <hr/>
           
        </div>
        </React.Fragment>
    );
}

export default Home;
