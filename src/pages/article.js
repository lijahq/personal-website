import articleStyles from "./article.module.css";
import { useParams } from "react-router-dom";
import { ArticleContent } from "./articleContent";
import ReactMarkdown from "react-markdown";
import { Component, Fragment } from "react";
import { useState } from "react";

async function getArticles() {
  const importAll = (r) => r.keys().map(r);
  const markdownFiles = importAll(
    require.context("./blogPages", false, /\.md$/)
  )
    .sort()
    .reverse();

  const articles = [];
  for (const file of markdownFiles) {
    const article = await ArticleContent.fetchArticleContent(file);
    // console.log(article);
    articles.push(article);
  }
  return articles;
}

function withParams(Component) {
  return (props) => <Component {...props} params={useParams()} />;
}

function findArticle(url, articles) {
  for (const article of articles) {
    if (article.fileName === url) {
      return article;
    }
  }
  return undefined;
}

class Article extends Component {
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
    const test = findArticle(this.props.params.fileName, articles);
    console.log(test);

    return (
      <Fragment>
        <div className={articleStyles.test}>
          {articles.map((article, idx) => (
            <div className="card">
              <div className="card-content">
                <div className="content">
                  <ReactMarkdown children={test.content} />
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* <ReactMarkdown children={articles[0]} /> */}
      </Fragment>
    );
  }
}

export default withParams(Article);
