import { Route, Routes } from 'react-router-dom';
import './App.css';

import Home from './components/pages/Home';
import FilmDetails from './components/pages/FilmDetails';
import { useState } from 'react';

function App() {

  const [films, setFilms] = useState(
  
      [
        { id : 1,title: "Les Simpson" ,image: "https://leclaireur.fnac.com/wp-content/uploads/2022/01/simpson.jpeg" ,description:"TV series " ,duration: "2h54" ,movieLink: "https://youtu.be/3DFRCQwd-eY",},
        { id : 2,title: "Jumanji" ,image: "https://m.media-amazon.com/images/M/MV5BODQ0NDhjYWItYTMxZi00NTk2LWIzNDEtOWZiYWYxZjc2MTgxXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_FMjpg_UX1000_.jpg" ,description:"Adventure" ,duration: "2h01" ,movieLink: "https://youtu.be/jgESNVEvjLs",},
        { id : 3,title: "Les Supa Strikas" ,image: "https://techpoint.africa/wp-content/uploads/2015/12/Supa-Strikas.jpg" ,description:"Children's series" ,duration: "1h01" ,movieLink: "https://youtu.be/ldmCamYnNyQ",},
        { id : 4,title: "Titeuf" ,image: "https://yt3.googleusercontent.com/ytc/AGIKgqNXBQihMJYCuKjqS6d_gLqg50DL4ceQbJiX6eoP=s900-c-k-c0x00ffffff-no-rj" ,description:"Children's series" ,duration: "42min" ,movieLink: "https://youtu.be/J5n70B3A4Nw",},
        { id : 5,title: "Open Grave" ,image: "https://images-na.ssl-images-amazon.com/images/S/pv-target-images/726287760cf1a69205f6e46418eda52cc6e7e7c0d75132415193bdb2c9f4ff91._RI_TTW_.jpg" ,description:"Horror" ,duration: "1h27" ,movieLink: "https://youtu.be/UfpBLFZEGZ4",},
        { id : 6,title: "Think Like A Man Too" ,image: "https://m.media-amazon.com/images/M/MV5BMjE2NjMxNjU1OF5BMl5BanBnXkFtZTgwMTI1OTgxMTE@._V1_FMjpg_UX1000_.jpg" ,description:"Comedy" ,duration: "1h46" ,movieLink: "https://youtu.be/LPQZpECDqwU",},
        { id : 7,title: "Billionaire club" ,image: "https://pbs.twimg.com/media/C64-LHOW0AARUMV.jpg" ,description:"Horror" ,duration: "5h06" ,movieLink: "https://youtu.be/cUxyuedTcuM",},
        { id : 8,title: "ORPHELIA" ,image: "https://fr.web.img6.acsta.net/pictures/19/05/07/09/22/1396956.jpg" ,description:"Fantasy" ,duration: "1h45" ,movieLink: "https://youtu.be/x5KQ6b4qJmc",},
    
  ])
  return (
      <Routes>
        <Route path='/' element ={<Home films = {films}/>} />
        <Route path='detail/:id' element ={<FilmDetails films = {films}/>} />
      </Routes>
  );
}

export default App;
