import { useState } from "react";
import { DatePicker, LocalizationProvider, TimePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Button, Stack, TextField, Typography } from "@mui/material";
import { IAppointment } from "./interface/IAppointment";
import getDoctorAppointments from "./mock";
import ScheduleTable from "@/components/ScheduleTable";
import MainContainer from "@/components/MainContainer";

export default function DoctorCalendly() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [appointments, setAppointments] = useState<IAppointment[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [patientName, setPatientName] = useState('');
  const [appointmentTime, setAppointmentTime] = useState<Date | string>('');
  const [appointmentReason, setAppointmentReason] = useState('');

  const handleDateChange = async (date: Date | null) => {
    setSelectedDate(date);
    if (date) {
      const getAppointments = await getDoctorAppointments();
      const filterByDateAppointments = getAppointments.filter(
        (appointment) =>
          appointment.date.toISOString().slice(0, 10) ===
          date.toISOString().slice(0, 10)
      );
      setAppointments(filterByDateAppointments);
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newAppointment: IAppointment = {
      id: appointments.length + 1,
      date: selectedDate!,
      time: appointmentTime,
      patient: patientName,
      reason: appointmentReason,
    };
    setAppointments([...appointments, newAppointment]);
    setShowForm(false);
  };

  return (
    <MainContainer sx={{justifyContent: "flex-start"}}>
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Stack alignItems="center" mt={10}>
        <DatePicker
          label="Selecionar data"
          value={selectedDate}
          onChange={handleDateChange}
          format="DD/MM/YYYY"
        />
      </Stack>
      {showForm ? (
        <form onSubmit={handleSubmit}>
          <Stack spacing={2} direction="column" sx={{ mt: 4 }}>
            <TextField
              required
              label="Nome do paciente"
              variant="outlined"
              value={patientName}
              onChange={(event) => setPatientName(event.target.value)}
            />
            <TimePicker
              label="Horário"
              format="hh:mm"
              ampm={false}
              value={appointmentTime}
              onChange={(newValue) =>
                newValue !== null
                  ? setAppointmentTime(
                      new Date(newValue).toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                      })
                    )
                  : null
              }
            />
            <TextField
              required
              label="Motivo"
              variant="outlined"
              value={appointmentReason}
              onChange={(event) => setAppointmentReason(event.target.value)}
            />
            <Button variant="contained" type="submit">
              Confirmar
            </Button>
          </Stack>
        </form>
      ) : selectedDate ? (
        <>
        <Button sx={{my: 2}} variant="contained" onClick={() => setShowForm(true)}>
          Inserir novo Paciente
        </Button> 
        <ScheduleTable appointments={appointments} />
        </>
      ) : ( <Typography mt={2} color="secondary">Escolhe uma data</Typography> )}
    </LocalizationProvider> 
    </MainContainer>
  );
}
