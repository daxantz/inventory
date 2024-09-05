const pool = require("./pool");

async function insertManga(title, releaseDate, publisher, author, genre) {
  await pool.query(
    "INSERT INTO manga (title, release_date, publisher_id, author_id, genre_id) VALUES ($1, $2, $3, $4, $5)",
    [title, releaseDate, publisher, author, genre]
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

async function getGenres() {
  const { rows } = await pool.query("SELECT * FROM genre");
  return rows;
}

async function getManga(id) {
  const result = await pool.query("SELECT * FROM manga where id = $1", [id]);

  return result.rows[0];
}

async function getFullMangaDetails() {
  const result = await pool.query(
    `SELECT manga.title,manga.release_date , manga.id,
    CONCAT(author.first_name, ' ', author.last_name) AS author_name,
     publisher.name AS publisher_name
     FROM manga
     JOIN author ON manga.author_id = author.id
     JOIN publisher ON manga.publisher_id = publisher.id;
    `
  );

  return result.rows;
}

async function updateManga(id, data) {
  const { title, release_date, author_id, publisher_id } = data;
  await pool.query(
    `UPDATE manga set title = $1, release_date = $2, author_id = $3, publisher_id = $4 WHERE id = $5`,
    [title, release_date, author_id, publisher_id, id]
  );

  console.log("update success");
}

async function deleteManga(id) {
  await pool.query(`DELETE FROM manga WHERE id = $1`, [id]);
  console.log(`the manga with the id:${id} has been deleted`);
}
module.exports = {
  insertManga,
  insertAuthor,
  insertPublisher,
  getAllAuthors,
  getAllPublishers,
  getAllManga,
  getGenres,
  getManga,
  getFullMangaDetails,
  updateManga,
  deleteManga,
};
