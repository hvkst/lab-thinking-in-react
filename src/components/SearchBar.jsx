import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';

function SearchBar({ inStockSwitch, handleSearch, searchInput }) {
  return (
    <div>
      <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 3, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          onChange={handleSearch}
          value={searchInput}
          label="Search Products"
          color="primary"
        />
      </Box>

      <FormControlLabel
        control={
          <Switch
            color="primary"
            onChange={inStockSwitch}
            inputProps={{ 'aria-label': 'controlled' }}
          />
        }
        label="Only show products with stock"
      />
    </div>
  );
}
export default SearchBar;
