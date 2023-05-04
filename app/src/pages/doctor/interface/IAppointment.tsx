export interface IAppointment {
    id: number;
    patient: string;
    time: string | Date;
    reason: string;
    date: Date;
  }