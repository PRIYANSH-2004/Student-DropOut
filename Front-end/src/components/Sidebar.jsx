import React, { useState } from 'react';
import { RadioGroup, FormControlLabel, Radio, FormControl, FormLabel } from '@mui/material';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement } from 'chart.js';
import './Sidebar.css';

ChartJS.register(Title, Tooltip, Legend, ArcElement);

const Sidebar = () => {
  const [selectedFilter, setSelectedFilter] = useState('marital-status');

  const handleFilterChange = (event) => {
    setSelectedFilter(event.target.value);
  };

  const filterData = {
    'marital-status': {
      labels: ['Single', 'Married', 'Divorced'],
      datasets: [
        {
          label: 'Marital Status Distribution',
          data: [40, 35, 25],
          backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
          borderColor: ['#FF6384', '#36A2EB', '#FFCE56'],
          borderWidth: 1,
        },
      ],
    },
    'age': {
      labels: ['18-25', '26-35', '36-45', '46+'],
      datasets: [
        {
          label: 'Age Distribution',
          data: [20, 40, 25, 15],
          backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
          borderColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
          borderWidth: 1,
        },
      ],
    },
    // Add the rest of the filter data...
  };

  const data = filterData[selectedFilter];

  return (
    <div className="sidebar">
      <h2>Filters</h2>
      <FormControl component="fieldset">
        <RadioGroup
          aria-label="filter"
          value={selectedFilter}
          onChange={handleFilterChange}
          className="radio-group"
        >
          <div className="radio-row">
            <FormControlLabel value="marital-status" control={<Radio />} label="Marital Status" />
            <FormControlLabel value="age" control={<Radio />} label="Age" />
          </div>
          <div className="radio-row">
            <FormControlLabel value="gender" control={<Radio />} label="Gender" />
            <FormControlLabel value="academics" control={<Radio />} label="Academics" />
          </div>
          <div className="radio-row">
            <FormControlLabel value="financial" control={<Radio />} label="Financial" />
            <FormControlLabel value="health" control={<Radio />} label="Health" />
          </div>
          <div className="radio-row">
            <FormControlLabel value="abroad" control={<Radio />} label="Abroad" />
          </div>
        </RadioGroup>
      </FormControl>
      <div className="chart-container">
        <Pie data={data} />
      </div>
    </div>
  );
}

export default Sidebar;
