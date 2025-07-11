
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
  const [isEditDeskOpen, setIsEditDeskOpen] = useState(false);
  const [editingDesk, setEditingDesk] = useState(null); // store the desk object we want to edit


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

  const handleEditDesk = (desk) => {
    setEditingDesk(desk);
    setIsEditDeskOpen(true);
  };
  
  const handleUpdateDesk = () => {
    if (!editingDesk) return;
  
    setAllOffices(prev =>
      prev.map(o =>
        o.id === office.id
          ? {
              ...o,
              equipments: o.equipments.map(d =>
                d.eqpId === editingDesk.eqpId ? editingDesk : d
              )
            }
          : o
      )
    );
  
    setIsEditDeskOpen(false);
    setEditingDesk(null);
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

      {/* Desk cards
      <Box display="flex" flexWrap="wrap" gap={2}>
        {office.equipments.map(eqp => (
          <DeskCard key={eqp.eqpId} eqpment={eqp} />
          <Button size="small" variant="outlined" onClick={() => handleEditDesk(eqp)}>
          Edit
        </Button>
        ))}
      </Box> */}

<Box display="flex" flexWrap="wrap" gap={2}>
  {office.equipments.map(eqp => (
    <Box key={eqp.eqpId}>
      <DeskCard eqpment={eqp} />
      <Button size="small" variant="outlined" onClick={() => handleEditDesk(eqp)}>
        Edit
      </Button>
    </Box>
  ))}
</Box>


<Dialog open={isEditDeskOpen} onClose={() => setIsEditDeskOpen(false)}>
  <DialogTitle>Edit Desk</DialogTitle>
  <DialogContent>
    <TextField
      margin="dense"
      label="Desk Name"
      fullWidth
      value={editingDesk?.deskName || ''}
      onChange={e => setEditingDesk(prev => ({ ...prev, deskName: e.target.value }))}
    />
    <TextField
      margin="dense"
      label="Name"
      fullWidth
      value={editingDesk?.Name || ''}
      onChange={e => setEditingDesk(prev => ({ ...prev, Name: e.target.value }))}
    />
    <TextField
      margin="dense"
      label="Camera"
      fullWidth
      value={editingDesk?.camera || ''}
      onChange={e => setEditingDesk(prev => ({ ...prev, camera: e.target.value }))}
    />
    <TextField
      margin="dense"
      label="Laptop"
      fullWidth
      value={editingDesk?.latop || ''}
      onChange={e => setEditingDesk(prev => ({ ...prev, latop: e.target.value }))}
    />
    <TextField
      margin="dense"
      label="Headset"
      fullWidth
      value={editingDesk?.headSet || ''}
      onChange={e => setEditingDesk(prev => ({ ...prev, headSet: e.target.value }))}
    />
  </DialogContent>
  <DialogActions>
    <Button onClick={() => setIsEditDeskOpen(false)}>Cancel</Button>
    <Button onClick={handleUpdateDesk}>Update</Button>
  </DialogActions>
</Dialog>

    </>
  );
}
