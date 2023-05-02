import { useState } from "react";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Stack } from "@mui/material";
import { IAppointment } from "./interface/IAppointment";
import getDoctorAppointments from "./mock";
import ScheduleTable from "@/components/ScheduleTable";


export default function DoctorCalendly() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [appointments, setAppointments] = useState<IAppointment[]>([]);

  const handleDateChange = async (date: Date | null) => {
    setSelectedDate(date);
    if (date) {
      const getAppointments = await getDoctorAppointments();
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
      <ScheduleTable appointments={appointments} />
    </LocalizationProvider>
  );
}
