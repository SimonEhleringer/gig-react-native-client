// Requests
export interface CreateUpdateSongRequest {
  title: string;
  interpreter: string;
  tempo: number;
  notes: string;
}

// Responses
export interface SongResponse {
  songId: string;
  title: string;
  interpreter: string;
  tempo: number;
  notes: string;
}
