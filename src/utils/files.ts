import { readdirSync } from "fs";

export const getFilesPaths = (dirName: string): string[] => {
  const files = [];
  const items = readdirSync(dirName, { withFileTypes: true });

  for (const item of items) {
    const path = `${dirName}/${item.name}`;

    if (item.isDirectory()) {
      files.push(...getFilesPaths(path));
    } else if (item.isFile()) {
      files.push(path);
    }
  }

  return files;
}
