import React, { useState } from 'react'

function Details() {
  const [doc, setDoc] = useState('Untitled')

  return (
    <>
      <div style={style.container}>
        <div style={style.name}>
          <h6 style={style.h5}>Document Name</h6>
          <input type='text' value={doc} style={style.input} onChange={(e) => setDoc(e.value)} />
        </div>
        <div style={style.details}>
          <p>Reading Time: <span>{ }</span></p>
          <p>Words: <span>{ }</span></p>
        </div>
      </div>
    </>
  )
}

const style = {
  container: {
    width: '90%',
    margin: 'auto',
    display: 'flex',
    justifyContent: 'space-between',
  },
  name: {
    color: '#999',
    lineHeight: '0.2'
  },
  details: {
    color: '#555',
    textTransform: 'uppercase',
    fontSize: '14px'
  },
  input: {
    border: 'none',
    outline: 'none',
    fontSize: '20px',
    color: '#666',
  },
  h5: {
    textTransform: 'uppercase',
  }
}

export default Details
