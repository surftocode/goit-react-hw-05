import React from "react";
import axios from "axios";

import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const MovieCast = () => {
  const APIKey = "0f552bbb3a7946c71382d336324ac39a";

  const { id } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const fetchCast = async () => {
      const response = await axios.get(
        "https://api.themoviedb.org/3/movie/${id}/${cast}?api_key={APIKey}"
      );
      setCast(response.data.cast);
    };
    fetchCast();
  }, [id]);
  return (
    <div>
      <ul>
        {cast.map((actor) => (
          <li key={actor.cast_id}>
            {actor.name} as {actor.character}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieCast;
