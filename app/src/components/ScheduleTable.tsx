import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";

interface Props {
  appointments: any[];
}

export default function ScheduleTable({ appointments }: Props) {
  return (
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
  );
}
