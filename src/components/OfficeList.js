import React, { useState } from 'react';
import { TextField, Button, List, ListItem, ListItemText, Card, CardContent } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import AddOfficeDialog from "../components/addOffice.js"
import OfficeDetail from '../components/OfficeDetail.js';

export default function OfficeList({allOffices,setAllOffices}) {
  const [officeName,setOfficeName] = useState([]);
  const [officeAddress,setOfficeAddress] = useState([]);
  const navigate = useNavigate();
console.log("all Off in det",allOffices);
  const handleAddOffice = (officeName) => {
    if (officeName.trim()) {
      setAllOffices([...allOffices, { id: Date.now().toString(), name: officeName , address :officeAddress }]);
      setOfficeName('');
    }
  };

  const handleGoToOffice = (office) => {
    console.log("my office",office);
    navigate(`/office/${office.id}`);

  };

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

   {/* {isAddOffice && 
  <AddOfficeDialog 
    open={isAddOffice} 
    onClose={() => setIsAddOffice(false)} 
    handleAdd={handleAddOffice} 
  />
}

{selectedOffice ? (
        <OfficeDetail 
          office={selectedOffice} 
          allOffices={allOffices} 
          setAllOffices={setAllOffices} 
        />
      ) : (
        <OfficeList onSelect={handleGoToOffice} />
      )} */}


    </>
  );

}
