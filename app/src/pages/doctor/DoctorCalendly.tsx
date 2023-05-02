import { useState } from "react";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Stack } from "@mui/system";


export default function DoctorCalendly() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
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
    </LocalizationProvider>
  );
}
