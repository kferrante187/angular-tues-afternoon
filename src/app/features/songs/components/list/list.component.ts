import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { SongListModel } from '../../models';
import { selectSongListModel } from '../../state';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {
  model$ = this.store.select(selectSongListModel);
  // model: SongListModel = {
  //   songs: [
  //     { id: '1', title: 'Song #1', artist: 'Fugazi' },
  //     {
  //       id: '2',
  //       title: 'National Anthem',
  //       artist: 'Radio Head',
  //       album: 'Kid A',
  //     },
  //   ],
  // };
  constructor(private store: Store) {}
}
