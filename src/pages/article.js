import articleStyles from "./article.module.css";
import { useParams } from "react-router-dom";
import { ArticleContent } from "./articleContent";
import ReactMarkdown from "react-markdown";
import { Component } from "react";

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
      article: [],
    };
  }

  async componentDidMount() {
    const articles = await getArticles();
    const article = findArticle(this.props.params.fileName, articles);
    this.setState((state) => ({ ...state, article }));
  }

  render() {
    const { article } = this.state;

    return (
      <div className={articleStyles.main}>
        <header>
          <h1 className={articleStyles.title}>{article.title}</h1>
          <h3>{article.description}</h3>
          <h4 className={articleStyles.italicized}>
            <span>published </span>
            {article.date}
          </h4>
        </header>
        {/* <div>test</div> */}
        <ReactMarkdown children={article.content} />
      </div>
    );
  }
}

export default withParams(Article);
