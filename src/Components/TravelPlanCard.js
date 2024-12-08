import React from 'react';
import { Card, CardContent, Typography, Button } from '@mui/material';

const TravelPlanCard = ({ title, description, onView }) => (
  <Card sx={{ maxWidth: 345, margin: 2 }}>
    <CardContent>
      <Typography variant="h5">{title}</Typography>
      <Typography variant="body2" sx={{ my: 2 }}>{description}</Typography>
      <Button variant="contained" color="primary" onClick={onView}>
        View Details
      </Button>
    </CardContent>
  </Card>
);

export default TravelPlanCard;
