CREATE DATABASE localomdb;

CREATE TABLE movies (
    id SERIAL PRIMARY KEY,
    imdbid TEXT,
    title TEXT,
    release_year INTEGER,
    poster_url TEXT
);