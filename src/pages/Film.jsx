import React, { useEffect, useState } from "react";
import filmService from "../services/film.service";
import commentService from "../services/comment.service";
import { useParams } from "react-router-dom";
import FilmCard from "../components/cards/FilmCard";
import Comments from "./Comments";

export default function Film() {
  const { id } = useParams();
  const [film, setFilm] = useState({});
  const [films, setFilms] = useState([]);
  const [comments, setComments] = useState([]);
  const [rating, setRating] = useState({});

  useEffect(() => {
    const fetchFilm = async () => {
      try {
        const film = await filmService.oneFilm(id);
        setFilm(film);
      } catch (error) {
        console.error(error);
      }
    };

    fetchFilm();
  }, [id]);

  useEffect(() => {
    const fetchFilms = async () => {
      try {
        const films = await filmService.allFilms();
        setFilms(films);
      } catch (error) {
        console.error(error);
      }
    };
    const fetchRating = async () => {
      try {
        const rating = await filmService.getAverageRating(id);
        setRating(rating);
      } catch (error) {
        console.error(error);
      }
    };
    const fetchComments = async () => {
      try {
        const comments = await commentService.getComments(id);
        setComments(comments);
      } catch (error) {
        console.error(error);
      }
    };
    fetchRating();
    fetchFilms();
    fetchComments();
  }, []);

  console.log(comments);

  // Filter similar films based on category
  const similarFilms = films.filter(
    (f) => f.category === film.category && f._id !== film._id
  );

  return (
    <div className="bg-[#181d25]">
      {/* Current Film Section */}
      <section className="p-8">
        <h2 className="text-white text-center text-3xl mb-4">{film.name}</h2>
        <div className="flex justify-center">
          <video
            controls
            className="w-full h-[400px] max-w-4xl rounded-lg shadow-lg"
            poster={film.image}
            src={film.video}
            type="video/mp4"
          >
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="flex p-8 items-center justify-between">
          <div className="flex flex-row items-center justify-center">
            <img
              width="48"
              height="48"
              src="https://img.icons8.com/emoji/48/star-emoji.png"
              alt="star-emoji"
            />
            <p className="text-white text-2xl">{rating.averageRating}</p>
          </div>
          <p className="text-white">Total Ratings : {rating.totalRatings}</p>
        </div>
      </section>

      {/* Similar Films Section */}
      <section className="p-8">
        <h3 className="text-2xl font-semibold mb-4 text-white text-center">
          Similar Films
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {similarFilms.map((similarFilm) => (
            <FilmCard key={similarFilm._id} film={similarFilm} />
          ))}
        </div>
      </section>

      <section>
        <h3 className="text-2xl font-semibold mb-4 text-white text-center">
          Comments
        </h3>
        <Comments comments={comments} />
      </section>
    </div>
  );
}
