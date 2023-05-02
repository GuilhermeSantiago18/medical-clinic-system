import { Box, Button, Stack, TextField, Typography, FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import { useEffect, useState } from "react";
import { SelectChangeEvent } from "@mui/material/Select";
import { useRouter } from "next/router";


const HomeAdm = () => {
  const router = useRouter()
  const [doctors, setDoctors] = useState<string[]>([]);
  const [filteredDoctors, setFilteredDoctors] = useState<string[]>([]);
  const [nameFilter, setNameFilter] = useState('');
  const [specialtyFilter, setSpecialtyFilter] = useState('');

  useEffect(() => {
   //requisiçãoAPI obter todos os médicos
    setDoctors(['Médico 4 (Cardiologista)', 'Médico 2 (Urologista)', 'Médico 3 (Endócrinologista)', 'Médico 4 (Endócrinologista)']);
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
      <Stack spacing={2} sx={{ justifyContent: 'center', flexDirection: {xs: 'column', sm: 'row'}, alignItems: 'center' }}>
        <TextField
          fullWidth
          label="Nome do médico"
          variant="outlined"
          value={nameFilter}
          onChange={handleChangeNameFilter}
        />
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
      </Stack>
      <Box sx={{ mt: 4, justifyContent: "center" }}>
        {filteredDoctors.map(doctor => (
          <>
            <Typography key={doctor} variant="h6">
              {doctor}
            </Typography>
            <Button variant="contained" onClick={() => router.push('/doctor')}>Agenda</Button>
          </>
        ))}
      </Box>
    </Box>
  );
};

export default HomeAdm;
