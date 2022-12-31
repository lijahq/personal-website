import fs from "fs";
import path from "path";
import matter from "gray-matter";

export const getPath = (folder) => {
  return path.join(process.cwd(), `/${folder}`); // Get full path
};

export const getFileContent = (filename, folder) => {
  const POSTS_PATH = getPath(folder);
  return fs.readFileSync(path.join(POSTS_PATH, filename), "utf8");
};

export const getAllPosts = (folder) => {
  const POSTS_PATH = getPath(folder);
  console.log("hey");
  return fs
    .readdirSync(POSTS_PATH) // get files in directory
    .filter((path) => /\\.md?$/.test(path)) // only .md files
    .map((fileName) => {
      // map over each file
      const source = getFileContent(fileName, folder); // retrieve the file contents
      const slug = fileName.replace(/\\.md?$/, ""); // get the slug from the filename
      const { data } = matter(source); // extract frontmatter
      return {
        frontmatter: data,
        slug: slug,
      };
    });
};
