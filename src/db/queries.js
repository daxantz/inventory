const pool = require("./pool");

async function insertManga(title, releaseDate, publisher, author) {
  await pool.query(
    "INSERT INTO manga (title, release_date, publisher_id, author_id) VALUES ($1, $2, $3, $4)",
    [title, releaseDate, publisher, author]
  );
}
async function insertAuthor(firstName, lastName, birthDate) {
  await pool.query(
    "INSERT INTO author (first_name, last_name, birth_date) VALUES ($1, $2, $3)",
    [firstName, lastName, birthDate]
  );
}

async function insertPublisher(name, dateEstablished) {
  await pool.query(
    "INSERT INTO publisher (name, date_established) VALUES ($1, $2)",
    [name, dateEstablished]
  );
}

async function getAllAuthors() {
  const { rows } = await pool.query("SELECT * FROM author");
  return rows;
}

async function getAllPublishers() {
  const { rows } = await pool.query("SELECT * FROM publisher");
  return rows;
}

async function getAllManga() {
  const { rows } = await pool.query("SELECT * FROM manga");
  return rows;
}

module.exports = {
  insertManga,
  insertAuthor,
  insertPublisher,
  getAllAuthors,
  getAllPublishers,
  getAllManga,
};
