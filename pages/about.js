import { withRouter } from "next/router";

const About = ({ router }) => (
  <>
    <h1>
      About foo {router.query.foo} <br />
      <a href="/public.txt">Public asset</a>
      <br />
    </h1>
    <img href="/path.jpeg"></img>
  </>
);

export default withRouter(About);
