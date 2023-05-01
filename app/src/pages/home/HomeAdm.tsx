import { Box, Button, Grid, TextField, Typography, FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import { useEffect, useState } from "react";
import { SelectChangeEvent } from "@mui/material/Select";

type FormValues = {
  name: string;
  specialty: string;
};

const HomeAdm = () => {
  const [doctors, setDoctors] = useState<string[]>([]);
  const [filteredDoctors, setFilteredDoctors] = useState<string[]>([]);
  const [nameFilter, setNameFilter] = useState('');
  const [specialtyFilter, setSpecialtyFilter] = useState('');

  useEffect(() => {
   //requisiçãoAPI obter todos os médicos
    setDoctors(['Médico 1 (Cardiologista)', 'Médico 2 (Urologista)', 'Médico 3 (Endócrinologista)']);
  }, []);

  useEffect(() => {
    let filtered = [...doctors];
    if (nameFilter) {
      filtered = filtered.filter(doctor => doctor.toLowerCase().includes(nameFilter.toLowerCase()));
    }
    if (specialtyFilter) {
      filtered = filtered.filter(doctor => doctor.toLowerCase().includes(specialtyFilter.toLowerCase()));
    }
    setFilteredDoctors(filtered);
  }, [doctors, nameFilter, specialtyFilter]);

  const handleChangeNameFilter = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNameFilter(event.target.value);
  };

  const handleChangeSpecialtyFilter = (event: SelectChangeEvent<string>) => {
    setSpecialtyFilter(event.target.value);
  };

  return (
    <Box sx={{ mt: 4 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            label="Nome do médico"
            variant="outlined"
            value={nameFilter}
            onChange={handleChangeNameFilter}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <FormControl fullWidth variant="outlined">
            <InputLabel>Especialidade</InputLabel>
            <Select
              value={specialtyFilter}
              onChange={handleChangeSpecialtyFilter}
              label="Especialidade"
            >
              <MenuItem value="">Selecione</MenuItem>
              <MenuItem value="cardiologista">Cardiologista</MenuItem>
              <MenuItem value="urologista">Urologista</MenuItem>
              <MenuItem value="endócrinologista">Endócrinologista</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained">Filtrar</Button>
        </Grid>
      </Grid>
      <Box sx={{ mt: 4 }}>
        {filteredDoctors.map(doctor => (
            <>
          <Typography key={doctor} variant="h6">
            {doctor}
          </Typography>
           <Button variant="contained">Agenda</Button>
            </>
        ))}
      </Box>
    </Box>
  );
};

export default HomeAdm;
