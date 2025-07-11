import React,{useEffect, useState} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container, AppBar, Toolbar, Typography } from '@mui/material';
import OfficeDetail from "./components/OfficeDetail.js"
import OfficeList from "./components/OfficeList.js"


function App() {
  // const [allOffices, setAllOffices] = useState([
  //   { id: '1', name: "Pi Tech Pune", address: "pune",  equipments :[{eqpId :Date.now().toString(),deskName:"Desk 1",Name : "rahul",camera: "Yes",latop : "hp", headSet : "yes"},{deskName:"Desk 2",Name : "suraj",camera: "yes",latop : "hp", headSet : "yes"}] },
  //   { id: '2', name: "Pi Tech Mumbai", address: "Mumbai",equipments :[{eqpId:Date.now().toString(), deskName:"Desk 1",Name : "pran",camera: "Yes",latop : "hp", headSet : "yes"}, {deskName:"Desk 2",Name : "prash",camera: "yes",latop : "hp", headSet : "yes"}] },
  //   { id: '3', name: "Pi Tech Kurla", address: "Daund", equipments :[{eqpId:Date.now().toString(), deskName:"Desk 1",Name : "rahul",camera: "Yes",latop : "hp", headSet : "yes"},{deskName:"Desk 2",Name : "suraj",camera: "yes",latop : "hp", headSet : "yes"}] }
  // ]);
  const [allOffices, setAllOffices] = useState(() => {
    const saved = localStorage.getItem('allOffices');
    return saved ? JSON.parse(saved) : 
      [
        { 
          id: '1', 
          name: "Pi Tech Pune", 
          address: "Pune",  
          equipments: [
            { eqpId: (Date.now()+1).toString(), deskName: "Desk 1", Name: "Rahul", camera: "Yes", latop: "HP", headSet: "Yes" },
            { eqpId: (Date.now()+2).toString(), deskName: "Desk 2", Name: "Suraj", camera: "Yes", latop: "Dell", headSet: "Yes" },
            { eqpId: (Date.now()+3).toString(), deskName: "Desk 3", Name: "Aarti", camera: "No", latop: "Lenovo", headSet: "No" },
            { eqpId: (Date.now()+4).toString(), deskName: "Desk 4", Name: "Vikas", camera: "Yes", latop: "Acer", headSet: "Yes" },
            { eqpId: (Date.now()+5).toString(), deskName: "Desk 5", Name: "Sneha", camera: "Yes", latop: "MacBook", headSet: "No" }
          ] 
        },
        { 
          id: '2', 
          name: "Pi Tech Mumbai", 
          address: "Mumbai",  
          equipments: [
            { eqpId: (Date.now()+6).toString(), deskName: "Desk 1", Name: "Pranav", camera: "Yes", latop: "Dell", headSet: "Yes" },
            { eqpId: (Date.now()+7).toString(), deskName: "Desk 2", Name: "Neha", camera: "No", latop: "HP", headSet: "Yes" },
            { eqpId: (Date.now()+8).toString(), deskName: "Desk 3", Name: "Kiran", camera: "Yes", latop: "Lenovo", headSet: "No" },
            { eqpId: (Date.now()+9).toString(), deskName: "Desk 4", Name: "Arjun", camera: "No", latop: "Acer", headSet: "Yes" },
            { eqpId: (Date.now()+10).toString(), deskName: "Desk 5", Name: "Prashant", camera: "Yes", latop: "Asus", headSet: "Yes" }
          ] 
        },
        { 
          id: '3', 
          name: "Pi Tech Bangalore", 
          address: "Bangalore",  
          equipments: [
            { eqpId: (Date.now()+11).toString(), deskName: "Desk 1", Name: "Amit", camera: "Yes", latop: "MacBook", headSet: "Yes" },
            { eqpId: (Date.now()+12).toString(), deskName: "Desk 2", Name: "Pooja", camera: "No", latop: "Dell", headSet: "No" },
            { eqpId: (Date.now()+13).toString(), deskName: "Desk 3", Name: "Ravi", camera: "Yes", latop: "HP", headSet: "Yes" },
            { eqpId: (Date.now()+14).toString(), deskName: "Desk 4", Name: "Snehal", camera: "Yes", latop: "Lenovo", headSet: "No" },
            { eqpId: (Date.now()+15).toString(), deskName: "Desk 5", Name: "Deepak", camera: "No", latop: "Acer", headSet: "Yes" }
          ] 
        }
      ]
      
    ;
  });
  
useEffect(() => {
  localStorage.setItem('allOffices', JSON.stringify(allOffices));
}, [allOffices]);

  return (
    <Router>
      <AppBar position="static" sx={{ bgcolor: '#FF9911' }}>
        <Toolbar>
          <Typography variant="h6">Office Management</Typography>
        </Toolbar>
      </AppBar>
      <Container sx={{ mt: 4 }}>
        <Routes>
          <Route path="/" 
                 element={<OfficeList allOffices={allOffices} setAllOffices={setAllOffices} />} 
          />
          <Route path="/office/:id" 
                 element={<OfficeDetail allOffices={allOffices} setAllOffices={setAllOffices} />} 
            /> 
        </Routes>
        
      </Container>
    </Router>
  );
}

export default App;
