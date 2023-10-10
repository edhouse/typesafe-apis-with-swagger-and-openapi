import { NoteStatus } from './note-status';
import { NoteTask } from './note-task';

export interface Note {

  id: number;
  title: string;
  status: NoteStatus;
  text?: string;
  list?: NoteTask[];
}
