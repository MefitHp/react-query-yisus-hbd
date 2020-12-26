import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCharacters } from "../redux/Characters/character.actions";
import {
  getCharactersSelector,
  getCharactersLoadingSelector,
  getCharactersErrorSelector,
} from "../redux/Characters/character.selectors";

export default function Characters() {
  const dispatch = useDispatch();
  const isLoading = useSelector(getCharactersLoadingSelector);
  const characters = useSelector(getCharactersSelector);
  const error = useSelector(getCharactersErrorSelector);

  useEffect(() => {
    dispatch(getCharacters());
  }, []);

  return (
    <section>
      <h2 className="subtitle is-size-3 has-text-centered">Characters</h2>
      <div
        style={{
          display: "grid",
          gap: 20,
          gridTemplateColumns: "repeat(auto-fill, minmax(350px, 1fr))",
        }}
      >
        {/* Mostrar los datos */}
        {isLoading && (
          <div className="is-full-width is-justify-content-center is-flex">
            <button className="button is-warning is-light">Cargando</button>
          </div>
        )}
        {error && (
          <div className="is-full-width is-justify-content-center is-flex">
            <button className="button is-error is-light">Hubo un error</button>
          </div>
        )}
        {!isLoading &&
          !!characters &&
          characters
            .filter((item) => item.name)
            .map((item) => <SingleCharacter key={item.id} character={item} />)}
      </div>
    </section>
  );
}

const SingleCharacter = ({ character }) => {
  return (
    <div className="card">
      <div className="card-image">
        <figure className="image is-4by3">
          <img src={character.image} alt={character.name} />
        </figure>
      </div>
      <div className="card-content">
        <div className="media">
          <div className="media-content">
            <p className="title is-4">{character.name}</p>
            <p className="subtitle is-6">
              @{character.name?.split(" ").join("_")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
