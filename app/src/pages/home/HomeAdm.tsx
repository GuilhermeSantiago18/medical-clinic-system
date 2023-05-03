import { Box, Button, Stack, TextField, Typography, FormControl, InputLabel, Select, MenuItem, Grid } from "@mui/material";
import { useEffect, useState } from "react";
import { SelectChangeEvent } from "@mui/material/Select";
import { useRouter } from "next/router";
import Header from "@/components/Header";


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
    <>
    <Header />
    <Grid container 
    p={2}
    rowGap={1}
    justifyContent="center"
    alignItems="center"
    >
      <Stack spacing={1}>
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
      <Stack sx={{ flexDirection: "column", alignItems: 'center', width: "100%", p: 2}}>
        {filteredDoctors.map(doctor => (
          <>
          <Stack sx={{flexDirection: "row", width: "30%", justifyContent: "space-between", margin: 2}}>
            <Typography key={doctor.id} variant="h6">
              {`${doctor.name} - Especialidade: ${doctor.specialty}`}
            </Typography>
            <Button variant="contained" onClick={() => router.push(`/doctor/${doctor.id}`)}>Agenda</Button>
            </Stack>
          </>
        ))}
      </Stack>
    </Grid>
    </>
  );
};

export default HomeAdm;
