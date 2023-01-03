import React, { Fragment } from "react";
import blogStyles from "./Blog.module.css";
import { Link } from "react-router-dom";

const importAll = (r) => r.keys().map(r);
const markdownFiles = importAll(require.context("./blogPages", false, /\.md$/))
  .sort()
  .reverse();

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
    const { posts } = this.state;

    return (
      <div className={blogStyles.blog}>
        <Fragment>
          <Link to="/blog/one.md">Test Article!</Link>
          <div className={blogStyles.container}>
            {posts.map((post, idx) => (
              <div className={blogStyles.card} key={idx}>
                <div className={blogStyles.content}>
                  <h1 className={blogStyles.title}>
                    Something Profound to Consider
                  </h1>
                  <div className={blogStyles.description}>
                    Longer description that talks about the article.
                  </div>
                  <div className={blogStyles.date}>2023/01/02</div>
                </div>
              </div>
            ))}
          </div>
        </Fragment>
      </div>
    );
  }
}

export default Blog;
