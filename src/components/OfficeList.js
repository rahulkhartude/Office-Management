import React, { useState } from 'react';
import { TextField, Button, List, ListItem, ListItemText, Card, CardContent } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import AddOfficeDialog from "../components/addOffice.js"

export default function OfficeList() {
  const [officeName, setOfficeName] = useState('');
  const [officeAddress, setOfficeAddress] = useState('');
  const [isAddOffice,setIsAddOffice] = useState(false);
  const [allOffices,setAllOffices] = useState([{id: Date.now().toString(),name : "Pi Tech A", address : "pune"},{id: Date.now().toString(),name : "Pi Tech B", address : "Mumbai"}]);
  const navigate = useNavigate();

  const handleAddOffice = () => {
    if (officeName.trim()) {
      setAllOffices([...allOffices, { id: Date.now().toString(), name: officeName , address :officeAddress }]);
      setOfficeName('');
    }
  };

  const handleGoToOffice =()=>{
    navigate("/office")
  }

  return ( 
  <>
    <Card>
      <CardContent>
        <h2>Offices</h2>
        <TextField
          label="New Office Name"
          value={officeName}
          onChange={e => setOfficeName(e.target.value)}
          size="small"
        />
        <Button sx={{ ml: 2 }} variant="contained" onClick={handleAddOffice}>Add</Button>
        <List>
          {allOffices.map((office,index) => (
            <ListItem button key={office.id} onClick={() => handleGoToOffice(office)} >
              <ListItemText primary={index+1} />
              <ListItemText primary={office.name} />
              <ListItemText primary={office.address} />
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>

   {isAddOffice && 
  <AddOfficeDialog 
    open={isAddOffice} 
    onClose={() => setIsAddOffice(false)} 
    handleAdd={handleAddOffice} 
  />
}


    </>
  );
}
