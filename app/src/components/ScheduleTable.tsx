import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";

interface Props {
  appointments: any[];
}

export default function ScheduleTable({ appointments }: Props) {
  if (appointments.length < 1) return null
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell sx={{fontWeight: 'bold'}}>Hora</TableCell>
            <TableCell sx={{fontWeight: 'bold'}}>Paciente</TableCell>
            <TableCell sx={{fontWeight: 'bold'}}>Motivo</TableCell>
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
  );
}
