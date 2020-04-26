import React from 'react';
import Gallery from 'react-photo-gallery';
import { photos } from './photos';
const App = () => {
  function columns(containerWidth) {
    console.log(containerWidth);
    let columns = 1;
    if (containerWidth >= 500) columns = 2;
    if (containerWidth >= 900) columns = 3;
    if (containerWidth >= 1500) columns = 4;
    return columns;
  }

  return <Gallery direction='column' photos={photos} columns={columns} />;
};

export default App;
