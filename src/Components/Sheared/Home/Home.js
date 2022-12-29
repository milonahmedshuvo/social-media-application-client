import React from 'react';
import AddPost from '../../Pages/AddPost/AddPost';
import Reactions from '../../Pages/Rections/Reactions';

const Home = () => {
    
    return (
        <div>
            <AddPost></AddPost>
            <h1>Home components</h1>
            <Reactions></Reactions>
        </div>
    );
};

export default Home;