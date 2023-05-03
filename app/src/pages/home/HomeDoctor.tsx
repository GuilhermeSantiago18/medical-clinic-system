import { useState, useEffect } from "react";
import { useAuth } from "../../context/AuthContext"
import ScheduleTable from "@/components/ScheduleTable";
import { Typography } from "@mui/material";
import Header from "@/components/Header";

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
      <Header />
      <Typography>Agendamentos do dia:{`${DAY}/${MONTH}/${YEAR}`}</Typography>
      <ScheduleTable appointments={appointments} />
    </div>
  );
}
