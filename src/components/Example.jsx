import React from 'react'

export const Example=({example}) => {
    console.log(example);
  return (
    <div className='mt-2'>
        {example.map((value) => value.meanings.map((sample) => sample.definitions.map((samp, index) =>(
            <div key={index}>
                {samp.example ? <li>{samp.example}</li>: ""}
            </div>
        ))))}
    </div>
  )
}
