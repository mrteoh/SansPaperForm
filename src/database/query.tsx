//storage create
export const QUERY_CREATE_STORAGE_TABLE = `CREATE TABLE IF NOT EXISTS storage (
  id TEXT PRIMARY KEY NOT NULL,
  createdAt TEXT,
  updatedAt TEXT,
  value TEXT
)
`;

//storage write
export const QUERY_WRITE_STORAGE_ROW = `INSERT INTO storage (
  id,
  createdAt,
  updatedAt,
  value
  ) VALUES ( ?, ?, ?, ?)
`;

//storage read
export const QUERY_READ_STORAGE_ROW = 'SELECT value FROM storage where id = ?';

//storage delete
export const QUERY_DELETE_STORAGE_ROW = 'DELETE from storage WHERE id = ?';
