import React, { useEffect } from 'react';

const ArtWorks = () => {
    useEffect(()=>{
        fetch(`http://localhost:3000/artworks?visibility=Public`)
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
          });
    },[])
    return (
        <div>
            ALl artworks
        </div>
    );
};

export default ArtWorks;