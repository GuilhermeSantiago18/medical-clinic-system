import { useState } from "react";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Paper, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { IAppointment } from "./IAppointment";
import getDoctorAppointments from "./mock";


export default function DoctorCalendly() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [appointments, setAppointments] = useState<IAppointment[]>([]);

  const handleDateChange = async (date: Date | null) => {
    console.log(date.toISOString())
    setSelectedDate(date);
    if (date) {
      const getAppointments = await getDoctorAppointments(date);
     const filterByDateAppointments = getAppointments.filter(appointment => appointment.date.toISOString().slice(0,10) === date.toISOString().slice(0,10))
     console.log(filterByDateAppointments)
      setAppointments(filterByDateAppointments);
    }
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Stack alignItems="center">
      <DatePicker
        label="Selecionar data"
        value={selectedDate}
        onChange={handleDateChange}
        format="DD/MM/YYYY"
      />
      </Stack>
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
    </LocalizationProvider>
  );
}
