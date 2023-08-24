import React, { Fragment } from "react";
import blogStyles from "./Blog.module.css";
import { ArticleContent } from "../components/articleContent";
import headerPhoto from "../media/img/blog.png";
import smallHeaderPhoto from "../media/img/blog-smaller.png";

function compareDates(a, b) {
  const dateA = new Date(a.date);
  const dateB = new Date(b.date);
  return dateB - dateA;
}

async function getArticles() {
  const importAll = (r) => r.keys().map(r);
  const markdownFiles = importAll(
    require.context("../media/blogPages", false, /\.md$/)
  )
    .sort()
    .reverse();

  const articles = [];
  for (const file of markdownFiles) {
    const article = await ArticleContent.fetchArticleContent(file);
    articles.push(article);
  }
  articles.sort(compareDates);
  console.log(articles);
  console.log(articles);
  return articles;
}

class Blog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
    };
  }

  async componentDidMount() {
    const articles = await getArticles();
    this.setState((state) => ({ ...state, articles }));
  }

  render() {
    const { articles } = this.state;

    return (
      <div className={blogStyles.blog}>
        <Fragment>
          <img
            src={headerPhoto}
            alt="trombone"
            className={blogStyles.large}
          ></img>
          <img
            src={smallHeaderPhoto}
            alt="small trombone"
            className={blogStyles.small}
          ></img>
          <div className={blogStyles.welcome}>
            The part of the website with my music and my occasional soapbox on making art.
          </div>
          <div className={blogStyles.welcome}>
            You can find me on <a href="https://open.spotify.com/artist/3r7lZG0xvpdp6RkBS5bkTK?si=5aecNbwgRpOyTI2UUfb1dg">Spotify</a> and <a href="https://www.youtube.com/@lijahq">YouTube</a>.
          </div>
          <div className={blogStyles.welcome}>Maybe some articles focused on engineering and programming someday.
          </div>
          <hr></hr>
          <h1>Articles</h1>
          <div className={blogStyles.container}>
            {articles.map((article, idx) => (
              <div className={blogStyles.card} key={idx}>
                <a href={`/blog/${article.fileName}`}>
                  <div className={blogStyles.content}>
                    <h2 className={blogStyles.title}>{article.title}</h2>
                    <h4 className={blogStyles.description}>
                      {article.description}
                    </h4>
                    <p className={blogStyles.date}>{article.date}</p>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </Fragment>
      </div>
    );
  }
}

export default Blog;
