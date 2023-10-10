import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
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

  notes: Note[] = [
    {
      id: 1,
      title: 'EdConnect',
      status: NoteStatus.Archived,
      text: 'Create a demo application and learn Kotlin basics',
    },
    {
      id: 2,
      title: 'EdConnect',
      status: NoteStatus.Open,
      text: 'Show a demo application to the audience',
    },
    {
      id: 3,
      title: 'Shopping list',
      status: NoteStatus.Open,
      list: [
        {
          id: 1,
          title: 'Flour',
          status: NoteStatus.Open,
        },
        {
          id: 2,
          title: 'Sugar',
          status: NoteStatus.Open,
        },
        {
          id: 3,
          title: 'Salt',
          status: NoteStatus.Closed,
        },
        {
          id: 4,
          title: 'Oil',
          status: NoteStatus.Archived,
        },
      ],
    },
  ];

  ngOnInit(): void {
    this.showArchivedCheckbox.valueChanges
      .subscribe(archivedVisible => this.archivedVisible = archivedVisible);
  }
}
