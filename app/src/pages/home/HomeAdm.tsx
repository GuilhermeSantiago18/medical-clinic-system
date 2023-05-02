import { Box, Button, Stack, TextField, Typography, FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import { useEffect, useState } from "react";
import { SelectChangeEvent } from "@mui/material/Select";
import { useRouter } from "next/router";


type DoctorValues = {
  id: number;
  name: string;
  specialty: string;
}

const HomeAdm = () => {
  const router = useRouter()
  const [doctors, setDoctors] = useState<DoctorValues[]>([]);
  const [filteredDoctors, setFilteredDoctors] = useState<DoctorValues[]>([]);
  const [nameFilter, setNameFilter] = useState('');
  const [specialtyFilter, setSpecialtyFilter] = useState('');
  const [specialties, setSpecialties] = useState<string[]>([]);


  useEffect(() => {
   //requisiçãoAPI obter todos os médicos
    setDoctors([
      { id: 1, name: 'Médico 4', specialty: 'Cardiologista' },
      { id: 2, name: 'Médico 2', specialty: 'Urologista' },
      { id: 3, name: 'Médico 3', specialty: 'Endócrinologista' },
      { id: 4, name: 'Médico 4', specialty: 'Endócrinologista' }
    ]);
  }, []);

  useEffect(() => {
    let filtered = [...doctors];
    if (nameFilter) {
      filtered = filtered.filter(doctor => doctor.name.toLowerCase().includes(nameFilter.toLowerCase()));
    }
    if (specialtyFilter) {
      filtered = filtered.filter(doctor => doctor.specialty.toLowerCase().includes(specialtyFilter.toLowerCase()));
    }
    setFilteredDoctors(filtered);
  }, [doctors, nameFilter, specialtyFilter]);


  useEffect(() => {
    const uniqueSpecialties = [...new Set(doctors.map(doctor => doctor.specialty))];
    setSpecialties(uniqueSpecialties);
  }, [doctors]);


  const handleChangeNameFilter = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNameFilter(event.target.value);
  };

  const handleChangeSpecialtyFilter = (event: SelectChangeEvent<string>) => {
    setSpecialtyFilter(event.target.value);
  };

  return (
    <Box sx={{ mt: 4 }}>
      <Stack spacing={2} sx={{ flexDirection: "row", alignItems: 'center', width: "100%", justifyContent: "space-between" }}>
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
            {specialties.map((specialty, id) => (
            <MenuItem key={id} value={specialty}>{specialty}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </Stack>
      <Stack sx={{ flexDirection: "column", alignItems: 'center', width: "100%", justifyContent: "space-between"}}>
        {filteredDoctors.map(doctor => (
          <>
          <Stack display="flex">
            <Typography key={doctor.id} variant="h6">
              {doctor.name}
            </Typography>
            <Typography variant="h6">
              {doctor.specialty}
            </Typography>
            </Stack>
            <Button variant="contained" onClick={() => router.push(`/doctor/${doctor.id}`)}>Agenda</Button>
          </>
        ))}
      </Stack>
    </Box>
  );
};

export default HomeAdm;
