import React from 'react'
import parse from 'html-react-parser'

function Preview({ preview }) {
  console.log(preview)
  return (
    <>
      { parse(preview) }
    </>
  );
}

export default Preview
