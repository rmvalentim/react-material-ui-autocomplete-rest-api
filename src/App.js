import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

function App() {

  const [value, setValue] = useState(null);
  const [inputValue, setInputValue] = useState('');
  const [options, setOptions] = useState([]);

  const handleInputChange = (event, newInputValue) => {

    setInputValue(newInputValue);    
    console.log('2');
    
    if( newInputValue.length >= 4 ) {

      fetch(`http://localhost:3001/${newInputValue}`)
        .then(response => response.json())
        .then(json => setOptions(json));
    } else {
      setOptions([]);
    }
  }

  return (
    <Container maxWidth="md">
      <div><Typography variant="h6"><strong>Autocomplete value:</strong> {`${value !== null ? `'${JSON.stringify(value)}'` : 'null'}`}</Typography></div>
      <div><Typography variant="h6"><strong>Autocomplete inputValue:</strong> {`'${inputValue}'`}</Typography></div>
      <br />
      <Autocomplete
        value={value}
        clearOnEscape
        getOptionSelected={(option, value)=>{
          return option.Codigo === value.Codigo
        }}
        getOptionLabel={(option) => option.Codigo + ' - ' + option.Descricao}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        inputValue={inputValue}
        onInputChange={handleInputChange}
        id="controllable-states-demo"
        options={options}
        style={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Item" variant="outlined" />}
      />
    </Container>
  );
}

export default App;
