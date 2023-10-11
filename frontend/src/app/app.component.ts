import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { Note, NoteStatus, NotesControllerService } from './generated';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {

  readonly NoteStatus = NoteStatus;

  showArchivedCheckbox = new FormControl(false, { nonNullable: true });
  archivedVisible = false;

  notes$?: Observable<Note[]>;

  constructor(
    private notesControllerService: NotesControllerService,
  ) {
  }

  ngOnInit(): void {
    this.showArchivedCheckbox.valueChanges
      .subscribe(archivedVisible => this.archivedVisible = archivedVisible);

    this.notes$ = this.notesControllerService.getNotes();
  }
}
