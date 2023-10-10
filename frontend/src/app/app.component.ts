import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { Note } from './models/note';
import { NoteStatus } from './models/note-status';

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
    private httpClient: HttpClient,
  ) {
  }

  ngOnInit(): void {
    this.showArchivedCheckbox.valueChanges
      .subscribe(archivedVisible => this.archivedVisible = archivedVisible);

    this.notes$ = this.httpClient.get<Note[]>('/api/notes');
  }
}
