import { useState, useEffect } from "react";
import "./boardOfDirectors.scss";

const BoardOfDirectors = ({ data }) => {
  console.log("data", data);
  const [activeBio, setActiveBio] = useState(null);

  return (
    <div className="bod">
      <div className="bod-wrapper">
        <div className="bod-title">
          <h2>Board of Directors</h2>
        </div>
        <div className="bod-bios">
          {data.directors.map((person, index) => {
            return (
              <div
                key={index}
                className="bod-bios-bio"
                onClick={() => {
                  setActiveBio(index);
                }}
              >
                <div className="bod-bios-bio-image">
                  <img src={person.image.sourceUrl} alt={person.name} />
                </div>
                <div className="bod-bios-bio-name">
                  <h3>{person.name}</h3>
                  <p>{person.title}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {activeBio !== null && (
        <div
          className={`bod-bios-modal ${activeBio !== null ? "bod-bios-modal-active" : ""}`}
        >
          <div className="bod-bios-modal-image">
            <div className="bod-bios-modal-image-wrapper">
              <img
                src={data.directors[activeBio].image.sourceUrl}
                alt={data.directors[activeBio].title}
                width="1000"
                height="500"
              />
            </div>
          </div>
          <div className="bod-bios-modal-bio">
            <div className="bod-bios-modal-bio-titles">
              <h3>{data.directors[activeBio]?.title}</h3>
              <p>{data.directors[activeBio].titlePosition}</p>
            </div>
            <div
              className="bod-bios-modal-bio-content"
              dangerouslySetInnerHTML={{
                __html: data.directors[activeBio].bio,
              }}
            />
          </div>
          <div className="bod-bios-modal-button">
            <button
              type="button"
              onClick={() => {
                setActiveBio(null);
              }}
            >
              Close
            </button>
          </div>
        </div>
      )}

      {activeBio >= 0 && activeBio !== null && (
        <div
          className="bod-blur"
          onClick={() => {
            setActiveBio(null);
          }}
        />
      )}
    </div>
  );
};

export default BoardOfDirectors;
