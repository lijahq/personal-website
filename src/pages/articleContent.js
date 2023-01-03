const matter = require("gray-matter");

export class ArticleContent {
  constructor(metadata, content) {
    this.fileName = metadata.fileName;
    this.title = metadata.title;
    this.description = metadata.description;
    this.date = metadata.publishedDate;
    this.content = content;
    console.log("article constructed!");
  }

  static async fetchArticleContent(slug) {
    let response = await fetch(slug);
    let result = await response.text();

    // const post = fetch(this.file).then((res) => res.text());
    // console.log(`Post: ${result}`);

    console.log("before matter");
    // console.log(result);
    const extractedFile = matter(result);

    return new ArticleContent(extractedFile.data, extractedFile.content);
  }

  // extractFile() {
  //   console.log("before matter");
  //   console.log(this.post);
  //   const extractedFile = matter(this.post);
  //   console.log(extractedFile);
  //   const metadata = extractedFile.data;
  //   return [
  //     metadata.fileName,
  //     metadata.title,
  //     metadata.description,
  //     metadata.publishedDate,
  //     extractedFile.content,
  //   ];
  // }
}
