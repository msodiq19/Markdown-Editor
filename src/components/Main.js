import React, { useEffect, useState } from 'react'
import Preview from './Preview';

function Main({ md }) {
    const [line, setLine] = useState(1)
    const [lists, setLists] = useState([line])
    const [markdown, setMarkdown] = useState(`# Heading1`)
    const [preview, setPreview] = useState('')

  useEffect(() => {
    const markdown = JSON.parse(localStorage.getItem('markdown'))
    if (markdown) {
      setMarkdown(markdown)
      const preview = md.render(markdown);
      setPreview(preview);
    }
  }, [md])

  useEffect(() => {
    localStorage.setItem('markdown', JSON.stringify(markdown))
    setPreview(md.render(markdown));
  }, [markdown,md])


  return (
    <>
      <div style={style.wrapper}>
        <div style={style.line}>
          {lists.map( (list, index) => <li key={index} style={style.li}>{list}</li> )}
        </div>
        <div style={style.container}>
          <div style={style.editor}>
            <textarea
              value={markdown}
              style={style.textEditor}
              onChange={(e) => {
                setMarkdown(e.target.value);
              }}
              onKeyUp={(e) => {
                setLine(e.key === "Enter" ? line+1 : line);
                setLists( e.key === "Enter" ? [...lists, line+1] : lists );
              }}
            ></textarea>
          </div>
          <div style={style.previewer}>
            <Preview preview={preview} />
          </div>
        </div>
      </div>
    </>
  );
}

const style = {
  wrapper: {
    display: "flex",
  },
  line: {
    textAlign: "center",
    backgroundColor: "#eee",
    width: "2.5em",
    fontSize: '14px'
  },
  li: {
    listStyle: "none",
    margin: '5px 0'
  },
  container: {
    width: "95%",
    height: '90vh',
    display: "flex",
  },
  editor: {
    width: "49%",
    height: "90%",
    border: "1px solid #ddd",
  },
  previewer: {
    width: "49%",
    height: "90%",
    border: "1px solid #ddd",
    overflow: 'auto',
    padding: '1em'
  },
  textEditor: {
    width: "100%",
    height: "100%",
    border: 'none',
    outline: 'none',
    fontSize: '18px',
    fontWeight: '100'
  },
};

export default Main
