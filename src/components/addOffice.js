import React, { useState } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button
} from '@mui/material';

export default function AddOfficeDialog({ open, onClose, handleAdd }) {
  const [officeName, setOfficeName] = useState('');
  const [officeAddress, setOfficeAddress] = useState('');


  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Add New Office</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          label="Office Name"
          fullWidth
          value={officeName}
          onChange={(e) => setOfficeName(e.target.value)}
        />
        <TextField
          margin="dense"
          label="Office Address"
          fullWidth
          value={officeAddress}
          onChange={(e) => setOfficeAddress(e.target.value)}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button variant="contained" onClick={handleAdd}>Add</Button>
      </DialogActions>
    </Dialog>
  );
}
