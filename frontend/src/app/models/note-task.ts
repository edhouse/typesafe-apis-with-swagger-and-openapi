import { NoteStatus } from './note-status';

export interface NoteTask {

  id: number;
  title: string;
  status: NoteStatus;
}
