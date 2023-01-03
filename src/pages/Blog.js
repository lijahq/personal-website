import React, { Fragment } from "react";
// import Helmet from "react-helmet";
import blogStyles from "./Blog.module.css";
import ReactMarkdown from "react-markdown";
import { Link } from "react-router-dom";
// import matter from "gray-matter";
// import markdown from "./test.md";
// import remarkGfm from "remark-gfm";
// import { getAllPosts } from "./md";

// const markdown = `Just a link: https://reactjs.com.`;

const importAll = (r) => r.keys().map(r);
const markdownFiles = importAll(require.context("./blogPages", false, /\.md$/))
  .sort()
  .reverse();

// for (const file of markdownFiles) {
//   fetch(file).then((res) => console.log(res.text()));
// }
// console.log(markdownFiles);

class Blog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
    };
  }

  async componentDidMount() {
    const posts = await Promise.all(
      markdownFiles.map((file) => fetch(file).then((res) => res.text()))
    ).catch((err) => console.error(err));

    this.setState((state) => ({ ...state, posts }));
  }

  render() {
    /* eslint-disable react/no-array-index-key */
    const { posts } = this.state;

    return (
      <Fragment>
        <Link to="/blog/test">Blog</Link>
        {/* <Helmet title="What's New" /> */}
        <section className="hero">... title stuff</section>
        <section className="section">
          <div className={`container ${blogStyles.test}`}>
            {posts.map((post, idx) => (
              <div className="card" key={idx}>
                <div className="card-content">
                  <div className="content">
                    <ReactMarkdown children={post} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </Fragment>
    );
    /* eslint-enable react/no-array-index-key */
  }
}

export default Blog;
