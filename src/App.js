import './App.css';
import styled from "styled-components";
import {Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header'
import Homepage from './components/Home/Homepage'
import Architecture from './components/Architecture/Architecture';
import InteriorDesign from './components/InteriorDesign/InteriorDesign';
import ArtandCraft from './components/ArtandCraft/ArtandCraft';
import PhotoEditing from './components/PhotoEditing/PhotoEditing';
import MyProjects from './components/MyProjects/MyProjects';
import Sideimg from './components/Sideimg/Sideimg';
import Sideimg2 from './components/Sideimg/Sideimg2';
import Navigate from './components/Home/Navigate'


function App() {
  return (
    <div className="App">
      <Header />

      <Partition>
        <Sideimg />
        <Navi>
          <Navigate />
          
          <Routes>
            <Route exact path="/" element={<Homepage />}/>
            <Route exact path="/Architecture" element={<Architecture />}/>
            <Route exact path="/InteriorDesign" element={<InteriorDesign />}/>
            <Route exact path="/ArtandCraft" element={<ArtandCraft />}/>
            <Route exact path="/PhotoEditing" element={<PhotoEditing />}/>
            <Route exact path="/MyProjects" element={<MyProjects />}/>
            {/* <Route path="*" element={<Navigate to="/Homepage" replace />} /> */}
          </Routes>
          
        </Navi>
        <Sideimg2 />
      </Partition>
       
    </div>
  );
}

export default App;

const Partition = styled.div`
  display:flex;
`
const Navi = styled.div`
  display:flex;
  flex:1;
  flex-direction:column;
  border: 0.5px solid black;
`