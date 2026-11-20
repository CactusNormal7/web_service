import { DatabaseSync } from 'node:sqlite'
import { mkdirSync } from 'node:fs'
import { dirname } from 'node:path'

let db: DatabaseSync | undefined

/** Connexion SQLite partagée (driver natif node:sqlite, aucune dépendance). */
export function useDb(): DatabaseSync {
  if (db) return db

  const path = process.env.DB_PATH ?? '.data/db.sqlite'
  mkdirSync(dirname(path), { recursive: true })

  db = new DatabaseSync(path)
  db.exec('PRAGMA journal_mode = WAL; PRAGMA foreign_keys = ON;')
  migrate(db)
  return db
}

function migrate(db: DatabaseSync) {
  // Ajouter les tables du projet ici
  db.exec(`
    CREATE TABLE IF NOT EXISTS _meta (
      key   TEXT PRIMARY KEY,
      value TEXT NOT NULL
    );
  `)
}
