import React from 'react';
import { Card, CardContent, Typography,Box } from '@mui/material';

export default function DeskCard({eqpment}) {
   
  return (
    
<Card sx={{ minHeight: 150, m: 1, minWidth: 200 }}>
  <CardContent>
    {[
      { label: 'Desk Name', value: eqpment.deskName },
      { label: 'Name', value: eqpment.Name },
      { label: 'Camera', value: eqpment.camera },
      { label: 'Laptop', value: eqpment.latop },
      { label: 'Headset', value: eqpment.headSet }
      
    ].map((item, index) => (
      <Box 
        key={index} 
        display="flex" 
        mb={0.5} // small vertical spacing between rows
      >
        <Typography 
          variant="subtitle2" 
          fontWeight="bold" 
          sx={{ width: '90px', textAlign: 'left' }}
        >
          {item.label}:
        </Typography>
        <Typography 
          variant="subtitle2" 
          sx={{ textAlign: 'left' }}
        >
          {item.value || 'N/A'}
        </Typography>
      </Box>
    ))}
  </CardContent>
</Card>

  );
}
