import { useState, useEffect } from "react";
import ScheduleTable from "@/components/ScheduleTable";
import { IconButton, Stack, Typography } from "@mui/material";
import MainContainer from "@/components/MainContainer";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';

interface Schedule {
  time: string;
  patient: string;
  reason: string;
}

const Now: Date = new Date();
const DAY: string = Now.getDate().toString().padStart(2, "0");
const MONTH: string = (Now.getMonth() + 1).toString().padStart(2, "0");
const YEAR: string = Now.getFullYear().toString();

export default function HomeDoctor() {
  const [appointments, setAppointments] = useState<Schedule[]>([]);

  useEffect(() => {
    const fetchSchedules: Schedule[] = [
      {
        time: "10:00",
        patient: "Arthur Lacerda",
        reason: "Consulta de rotina",
      },
      {
        time: "11:00",
        patient: "Joao",
        reason: "Dor de cabeça",
      },
      {
        time: "12:00",
        patient: "Ana",
        reason: "Exame de sangue",
      },
    ];
    setAppointments(fetchSchedules);
  }, []);
  

  return (
    <MainContainer sx={{justifyContent: "flex-start" }}>
      <Stack flexDirection="row" alignItems="center" mt={10}>
      <IconButton sx={{mr: 2}}><NavigateBeforeIcon color="primary"/></IconButton>
      <Typography  variant="h6">Agendamentos do dia: {`${DAY}/${MONTH}/${YEAR}`}</Typography>
      <IconButton  sx={{ml: 2}}><NavigateNextIcon color="primary"/></IconButton>
      </Stack>
      <ScheduleTable appointments={appointments} />
    </MainContainer>
  );
}
