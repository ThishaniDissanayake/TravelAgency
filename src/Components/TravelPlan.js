// src/components/TravelPlan.js
import React from 'react';
import { Card, CardContent, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const TravelPlan = () => {
  const navigate = useNavigate();

  return (
    <Card sx={{ margin: 2 }}>
      <CardContent>
        <Typography variant="h5">Discover Sri Lanka</Typography>
        <Typography variant="body1">Experience the beauty of Sri Lanka with our 7-day tour package.</Typography>
        <Button variant="contained" color="primary" onClick={() => navigate('/travel-plan')}>
          View Details
        </Button>
      </CardContent>
    </Card>
  );
};

export default TravelPlan;
