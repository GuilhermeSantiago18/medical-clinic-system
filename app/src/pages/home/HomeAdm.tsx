import { Box, Button, Stack, TextField, Typography, FormControl, InputLabel, Select, MenuItem, Grid } from "@mui/material";
import { useEffect, useState } from "react";
import { SelectChangeEvent } from "@mui/material/Select";
import { useRouter } from "next/router";
import Header from "@/components/Header";
import MainContainer from "@/components/MainContainer";


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
    <MainContainer sx={{justifyContent: "flex-start"}}>
      <Stack spacing={1} mt={12}>
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
      <Grid container rowGap={2} columnGap={2} justifyContent="center" mt={4}>
        {filteredDoctors.map(doctor => (
          <>
          <Grid item md={6} sx={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
            <Typography key={doctor.id} variant="h6">
              {`${doctor.name} - Especialidade: ${doctor.specialty}`}
            </Typography>
            <Button variant="contained" onClick={() => router.push(`/doctor/${doctor.id}`)}>Agenda</Button>
            </Grid>
          </>
        ))}
      </Grid>
      </MainContainer>
  );
};

export default HomeAdm;
