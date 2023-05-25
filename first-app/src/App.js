import React, { useState } from 'react';
import './App.css';
import FifthCmp from './FifthCmp';
import { FisrtComp } from './FirstComp';
import FourthCmp from './FourthCmp';
import { SecondCmp } from './SecondCmp';
import ThirdCmp from './ThirdCmp';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';

function App() {
  const [component, setComponent] = useState('');

  const handleChange = (event) => {
    setComponent(event.target.value);
  };

  return (
    <div className="App">
      <FormControl fullWidth style={{marginTop:'50px'}}>
        <InputLabel id="demo-simple-select-label">컴포넌트 고르기</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={component}
          label="Select a Component"
          onChange={handleChange}
        >
          <MenuItem value="FirstComp">1번 컴포넌트</MenuItem>
          <MenuItem value="SecondComp">2번 컴포넌트</MenuItem>
          <MenuItem value="ThirdComp">3번 컴포넌트</MenuItem>
          <MenuItem value="FourthComp">4번 컴포넌트</MenuItem>
          <MenuItem value="FifthComp">5번 컴포넌트</MenuItem>
        </Select>
      </FormControl>

      <div>
        {/* 선택된 컴포넌트를 렌더링 */}
        {component === 'FirstComp' && <FisrtComp />}
        {component === 'SecondComp' && <SecondCmp />}
        {component === 'ThirdComp' && <ThirdCmp />}
        {component === 'FourthComp' && <FourthCmp />}
        {component === 'FifthComp' && <FifthCmp />}
      </div>
    </div>
  );
}

export default App;
