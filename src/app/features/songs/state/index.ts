import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';
import * as fromSongList from './reducers/song-list.reducer';

export const FEATURE_NAME = 'songsFeature';

export interface SongState {
  list: fromSongList.SongListState;
}

export const reducers: ActionReducerMap<SongState> = {
  list: fromSongList.reducer,
};

const selectFeature = createFeatureSelector<SongState>(FEATURE_NAME);
