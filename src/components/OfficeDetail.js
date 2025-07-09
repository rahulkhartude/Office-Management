import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { TextField, Button, List, ListItem, ListItemText, Card, CardContent, Typography } from '@mui/material';

export default function OfficeDetail() {
  const location = useLocation();
  const office = location.state?.office;
  const [desks, setDesks] = useState([]);
  const [deskName, setDeskName] = useState('');
  const [equipmentNote, setEquipmentNote] = useState('');

  const handleAddDesk = () => {
    if (deskName.trim()) {
      setDesks([...desks, { id: Date.now().toString(), name: deskName, note: equipmentNote }]);
      setDeskName('');
      setEquipmentNote('');
    }
  };

  if (!office) return <Typography>Office not found</Typography>;

  return (
    <Card>
      <CardContent>
        <Typography variant="h5">{office.name} – Desks & Equipment</Typography>
        <TextField
          label="Desk Name"
          value={deskName}
          onChange={e => setDeskName(e.target.value)}
          size="small"
          sx={{ mr: 2, mt: 2 }}
        />
        <TextField
          label="Equipment Note"
          value={equipmentNote}
          onChange={e => setEquipmentNote(e.target.value)}
          size="small"
          sx={{ mr: 2, mt: 2 }}
        />
        <Button variant="contained" onClick={handleAddDesk} sx={{ mt: 2 }}>Add Desk</Button>
        <List sx={{ mt: 2 }}>
          {desks.map(desk => (
            <ListItem key={desk.id}>
              <ListItemText primary={desk.name} secondary={desk.note} />
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  );
}
