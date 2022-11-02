import markdownIt from "markdown-it";
import Header from "../components/Header";
import Details from "../components/Details";
import Main from "../components/Main";

function Home() {

  const md = new markdownIt({
    html: false,
    linkify: true,
    typographer: true,
    breaks: true,
  });

  return (
    <>
        <Header />
        <Details />
        <Main md={md} />
    </>
  );
}

export default Home;
