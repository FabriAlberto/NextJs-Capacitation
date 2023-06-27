
export enum EntryStatus{
  PENDING='PENDING',
  IN_PROGRESS='IN_PROGRESS',
  FINISHED='FINISHED'
}
export type Entry={
  _id:string;
  description:string;
  createdAt:number;
  status:EntryStatus;
}