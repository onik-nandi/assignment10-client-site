import React from 'react';
import Hero from './Hero';
import TopArtists from './TopArtists';
import Highlights from './Highlights';

const Home = () => {
    return (
        <div>
           <Hero></Hero> 
           <TopArtists></TopArtists>
           <Highlights></Highlights>
        </div>
    );
};

export default Home;