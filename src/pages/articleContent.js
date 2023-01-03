const matter = require("gray-matter");

export class ArticleContent {
  constructor(metadata, content) {
    this.fileName = metadata.fileName;
    this.title = metadata.title;
    this.description = metadata.description;
    this.date = metadata.publishedDate;
    this.content = content;
  }

  static async fetchArticleContent(slug) {
    let response = await fetch(slug);
    let result = await response.text();
    const extractedFile = matter(result);

    return new ArticleContent(extractedFile.data, extractedFile.content);
  }
}
