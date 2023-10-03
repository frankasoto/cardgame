create database cardgame;

\c cardgame

create table if not exists schools(
  id SERIAL UNIQUE,
  school_name text
);

create table if not exists characters(
  id SERIAL UNIQUE,
  school_id SMALLINT REFERENCES schools(id),
  character_name TEXT
);

create table if not exists cards(
  id SERIAL UNIQUE,
  school_id SMALLINT REFERENCES schools(id),
  card_name TEXT,
  element VARCHAR(5),
  description TEXT,
  damage SMALLINT,
  guardUP BOOLEAN,
  isChase BOOLEAN,
  effect TEXT default 'none',
  used_by TEXT DEFAULT 'all',
  image_link TEXT
);