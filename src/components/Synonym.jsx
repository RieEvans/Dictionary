import React from 'react'

export const Synonym = ({synonym}) => {
  return (
    <div>{synonym.map(val => val.meanings.map(means => means.definitions.map(def => {
        return def.synonyms?.map(syn => (
          <li>{syn}</li>
        ))
      })))}</div>
  )
}
