import React from "react";

export const Meanings = ({ meaning }) => {
  console.log(meaning);
  return (
    <div>
      {meaning.map((val) =>
        val.meanings.map((means) =>
          means.definitions.map((def) => (
            <div key={def.definition}>
              <li>{def.definition}</li>
            </div>
          ))
        )
      )}
    </div>
  );
};
