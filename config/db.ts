import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('Gig');

export default db;

export const configureDb = () => {
  db.transaction((tx) => {
    tx.executeSql(`
      CREATE TABLE IF NOT EXISTS Playlists (
        PlaylistId INTEGER PRIMARY KEY AUTOINCREMENT, 
        Name TEXT NOT NULL
      );

      CREATE TABLE IF NOT EXISTS Songs (
        SongId INTEGER PRIMARY KEY AUTOINCREMENT, 
        Name TEXT NOT NULL,
        Artist TEXT,
        Tempo INTEGER
      );

      CREATE TABLE IF NOT EXISTS PlaylistSongs (
        PlaylistId INTEGER NOT NULL, 
        SongId INTEGER NOT NULL,
        Position INTEGER NOT NULL,
        FOREIGN KEY (PlaylistId)
          REFERENCES Playlists (PlaylistId)
            ON UPDATE CASCADE
            ON DELETE CASCADE,
        FOREIGN KEY (SongId)
          REFERENCES Songs (SongId)
            ON UPDATE CASCADE
            ON DELETE CASCADE
      );
    `);
  });
};
