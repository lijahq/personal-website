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
            Welcome to my personal blog. At the time I'm making this, I'm
            planning on using this as a platform for my music projects. In time
            I imagine I'll also have some articles up related to engineering and
            programming. Either way, I'll try to stay in my lane.
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
