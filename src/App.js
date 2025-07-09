import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container, AppBar, Toolbar, Typography } from '@mui/material';
import OfficeDetail from "./components/OfficeDetail.js"
import OfficeList from "./components/OfficeList.js"

function App() {
  return (
    <Router>
      <AppBar position="static" sx={{ bgcolor: '#FF9911' }}>
        <Toolbar>
          <Typography variant="h6">Office Management</Typography>
        </Toolbar>
      </AppBar>
      <Container sx={{ mt: 4 }}>
        <Routes>
          <Route path="/" element={<OfficeList />} />
          <Route path="/office" element={<OfficeDetail />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
