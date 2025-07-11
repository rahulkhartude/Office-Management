// import React, { useState } from 'react';
// import { TextField, Button, List, ListItem, ListItemText, Card, CardContent, Typography } from '@mui/material';
// import { useParams } from 'react-router-dom';
// import DeskCard from "./Deskcard"
// import { Box } from '@mui/material';

// export default function OfficeDetail({allOffices,setAllOffices}) {
//   const [desks, setDesks] = useState([]);
//   const [deskName, setDeskName] = useState('');
//   const [equipmentNote, setEquipmentNote] = useState('');

//   const { id } = useParams();  
//   console.log("Id",id)
//   const office = allOffices.find(o => o.id === id);
// console.log("office",office);
//   const handleAddDesk = () => {
//     if (deskName.trim()) {
//       setDesks([...desks, { id: Date.now().toString(), name: deskName, note: equipmentNote }]);
//       setDeskName('');
//       setEquipmentNote('');
//     }
//   };

//   if (!office) return <Typography>Office not found</Typography>;

//   return (
//     <>
    
// <Typography variant="h5" sx={{ mb: 2 }} align="center">
// {office.name}
//   </Typography>
// <Box display="flex" flexWrap="wrap" gap={2}>
//     {office.equipments.map(eqp => (
//       <DeskCard key={eqp.eqpId} eqpment={eqp} />
//     ))}
//   </Box>
//   </>
//   )
// }



import React, { useState } from 'react';
import { TextField, Button, Typography, Dialog, DialogTitle, DialogContent, DialogActions, Box } from '@mui/material';
import { useParams } from 'react-router-dom';
import DeskCard from "./Deskcard";

export default function OfficeDetail({ allOffices, setAllOffices }) {
  const { id } = useParams();
  const office = allOffices.find(o => o.id === id);

  const [isAddDeskOpen, setIsAddDeskOpen] = useState(false);
  const [deskName, setDeskName] = useState('');
  const [name, setName] = useState('');
  const [camera, setCamera] = useState('');
  const [latop, setLatop] = useState('');
  const [headSet, setHeadSet] = useState('');

  if (!office) return <Typography>Office not found</Typography>;

  const handleAddDesk = () => {
    if (deskName.trim()) {
      const newDesk = {
        eqpId: Date.now().toString(),
        deskName,
        Name: name,
        camera,
        latop,
        headSet
      };

      setAllOffices(prev =>
        prev.map(o =>
          o.id === office.id
            ? { ...o, equipments: [...o.equipments, newDesk] }
            : o
        )
      );

      // Clear fields and close dialog
      setDeskName('');
      setName('');
      setCamera('');
      setLatop('');
      setHeadSet('');
      setIsAddDeskOpen(false);
    }
  };

  return (
    <>
      <Typography variant="h5" sx={{ mb: 2 }} align="center">
        {office.name} – Desks & Equipment
      </Typography>

      <Button
        variant="contained"
        color="primary"
        sx={{ mb: 2 }}
        onClick={() => setIsAddDeskOpen(true)}
      >
        Add Desk
      </Button>

      {/* Add Desk Dialog */}
      <Dialog open={isAddDeskOpen} onClose={() => setIsAddDeskOpen(false)}>
        <DialogTitle>Add New Desk</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Desk Name"
            fullWidth
            value={deskName}
            onChange={e => setDeskName(e.target.value)}
          />
          <TextField
            margin="dense"
            label="Name"
            fullWidth
            value={name}
            onChange={e => setName(e.target.value)}
          />
          <TextField
            margin="dense"
            label="Camera"
            fullWidth
            value={camera}
            onChange={e => setCamera(e.target.value)}
          />
          <TextField
            margin="dense"
            label="Laptop"
            fullWidth
            value={latop}
            onChange={e => setLatop(e.target.value)}
          />
          <TextField
            margin="dense"
            label="Headset"
            fullWidth
            value={headSet}
            onChange={e => setHeadSet(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setIsAddDeskOpen(false)}>Cancel</Button>
          <Button onClick={handleAddDesk}>Add</Button>
        </DialogActions>
      </Dialog>

      {/* Desk cards */}
      <Box display="flex" flexWrap="wrap" gap={2}>
        {office.equipments.map(eqp => (
          <DeskCard key={eqp.eqpId} eqpment={eqp} />
        ))}
      </Box>
    </>
  );
}
