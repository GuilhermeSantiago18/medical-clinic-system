import dayjs from "dayjs";
import { IAppointment } from "./IAppointment";

export default async function getDoctorAppointments(dateStr: Date): Promise<IAppointment[]> {
  const date = dayjs("10/05/2023", 'DD/MM/YYYY').toDate(); 
  const date2 = dayjs("11/05/2023", 'DD/MM/YYYY').toDate(); 
  const appointments: IAppointment[] = [
    {
      id: 1,
      patient: "João Silva",
      time: "9:00",
      reason: "Consulta de rotina",
      date: date2
    },
    {
      id: 2,
      patient: "Maria Souza",
      time: "10:00",
      reason: "Exame de sangue",
      date: date
    },
    {
      id: 3,
      patient: "Pedro Oliveira",
      time: "11:00",
      reason: "Avaliação de dor nas costas",
      date: date2
    },
    {
      id: 4,
      patient: "Pedro Oliveira",
      time: "11:30",
      reason: "Avaliação de dor nas costas",
      date: date
    },
  ];
  return appointments;
}
