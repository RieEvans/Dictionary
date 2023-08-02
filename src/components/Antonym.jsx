import React from "react";

export const Antonym = ({ antonym }) => {
  return (
    <div className="mb-5">
      {antonym.map((val) =>
        val.meanings.map((means) =>
          means.synonyms?.map((ant, index) => <div key={index}><li>{ant}</li></div>)
        )
      )}
    </div>
  );
};
