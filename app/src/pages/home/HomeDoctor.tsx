import { useState, useEffect } from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";
import { useAuth } from "../../context/AuthContext"

interface Schedule {
  time: string;
  patient: string;
  reason: string;
}

const now: Date = new Date();
const DAY: string = now.getDate().toString().padStart(2, "0");
const MONTH: string = (now.getMonth() + 1).toString().padStart(2, "0");
const YEAR: string = now.getFullYear().toString();

export default function HomeDoctor() {
  const [appointments, setAppointments] = useState<Schedule[]>([]);
  const {userName} = useAuth()

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
    <div>
      <h1>Bem-vindo, {userName}!</h1>
      <h2>Agendamentos do dia:{`${DAY}/${MONTH}/${YEAR}`}</h2>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Hora</TableCell>
              <TableCell>Paciente</TableCell>
              <TableCell>Motivo</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {appointments.map((appointment) => (
              <TableRow key={appointment.time}>
                <TableCell>{appointment.time}</TableCell>
                <TableCell>{appointment.patient}</TableCell>
                <TableCell>{appointment.reason}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
