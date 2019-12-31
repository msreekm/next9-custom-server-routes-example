import { withRouter } from "next/router";

const About = ({ router }) => (
  <h1>
    About foo {router.query.foo} <br />
    <a href="/public.txt">Public asset</a>
    <br />
    <a href="/static/images/fake-image.txt">test</a>
  </h1>
);

export default withRouter(About);
