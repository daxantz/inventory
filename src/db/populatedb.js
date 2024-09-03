require("dotenv").config({ path: "../../.env" });
const { Client } = require("pg");

console.log("DB_HOST:", process.env.DB_HOST);
console.log("DB_USER:", process.env.DB_USER);
console.log("DB_NAME:", process.env.DB_NAME);
console.log("DB_PASSWORD:", process.env.DB_PASSWORD);
console.log("DB_PORT:", process.env.DB_PORT);

const SQL = `
CREATE TABLE IF NOT EXISTS author (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  first_name VARCHAR (255) NOT NULL,
  last_name VARCHAR (255) NOT NULL,
  birth_date DATE
);

CREATE TABLE IF NOT EXISTS publisher (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  name VARCHAR ( 255 ) NOT NULL,
  date_established Date
);
CREATE TABLE IF NOT EXISTS genre (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  type VARCHAR (255) NOT NULL
);
CREATE TABLE IF NOT EXISTS manga (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  title VARCHAR ( 255 ) NOT NULL,
  release_date Date,
  publisher_id INTEGER,
  author_id INTEGER,
  genre_id INTEGER,
  FOREIGN KEY (publisher_id) REFERENCES publisher(id),
  FOREIGN KEY (author_id) REFERENCES author(id),
  FOREIGN KEY (genre_id) REFERENCES genre(id)

);







INSERT INTO author (first_name, last_name, birth_date)
VALUES ('masashi', 'kishimoto', '1974-11-08');

INSERT INTO publisher (name, date_established)
VALUES
  ('shueisha', '1926-08-08');
  INSERT INTO genre (type)
VALUES ('Shonen'), ('Shōjo'), ('Seinen'), ('Josei') , ('Supernatural'), ('Gekiga'), ('Silver & Golden') ;

INSERT INTO manga (title, release_date, publisher_id, author_id, genre_id)
VALUES
  ('naruto', '1999-09-14', (SELECT id FROM publisher WHERE name = 'shueisha'), (SELECT id FROM author WHERE first_name = 'masashi' AND last_name = 'kishimoto'),(SELECT id FROM genre WHERE type = 'Shonen'));





`;

async function main() {
  console.log("seeding...");
  const client = new Client({
    connectionString: `postgresql://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`,
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
}

main();
