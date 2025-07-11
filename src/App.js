import React,{useState} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container, AppBar, Toolbar, Typography } from '@mui/material';
import OfficeDetail from "./components/OfficeDetail.js"
import OfficeList from "./components/OfficeList.js"

function App() {
  const [allOffices, setAllOffices] = useState([
    { id: '1', name: "Pi Tech Pune", address: "pune",  equipments :[{eqpId :Date.now().toString(),deskName:"Desk 1",Name : "rahul",camera: "Yes",latop : "hp", headSet : "yes"},{deskName:"Desk 2",Name : "suraj",camera: "yes",latop : "hp", headSet : "yes"}] },
    { id: '2', name: "Pi Tech Mumbai", address: "Mumbai",equipments :[{eqpId:Date.now().toString(), deskName:"Desk 1",Name : "pran",camera: "Yes",latop : "hp", headSet : "yes"}, {deskName:"Desk 2",Name : "prash",camera: "yes",latop : "hp", headSet : "yes"}] },
    { id: '3', name: "Pi Tech Kurla", address: "Daund", equipments :[{eqpId:Date.now().toString(), deskName:"Desk 1",Name : "rahul",camera: "Yes",latop : "hp", headSet : "yes"},{deskName:"Desk 2",Name : "suraj",camera: "yes",latop : "hp", headSet : "yes"}] }
  ]);
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
