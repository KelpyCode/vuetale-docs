/**
 * Copy all markdown from docs to hytalemoddingdev and remove the frontmatter code
 */

import { readdirSync, readFileSync, writeFileSync, mkdirSync, rmSync, existsSync } from "fs";
import { join, relative, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const SRC_DIR = join(__dirname, "..", "docs");
const DEST_DIR = join(__dirname, "..", "hytalemoddingdev");

function stripFrontmatter(content: string): string {
  if (!content.startsWith("---")) return content;
  const end = content.indexOf("---", 3);
  if (end === -1) return content;
  return content.slice(end + 3).replace(/^\n/, "");
}

function copyMarkdownFiles(srcDir: string, destDir: string): void {
  const entries = readdirSync(srcDir, { withFileTypes: true });

  for (const entry of entries) {
    const srcPath = join(srcDir, entry.name);
    const destPath = join(destDir, entry.name);

    if (entry.isDirectory()) {
      copyMarkdownFiles(srcPath, destPath);
    } else if (entry.isFile() && entry.name.endsWith(".md")) {
      const raw = readFileSync(srcPath, "utf-8");
      const stripped = stripFrontmatter(raw);
      mkdirSync(dirname(destPath), { recursive: true });
      writeFileSync(destPath, stripped, "utf-8");
      console.log(`Copied: ${relative(SRC_DIR, srcPath)}`);
    }
  }
}


if (existsSync(DEST_DIR)) {
  rmSync(DEST_DIR, { recursive: true, force: true });
  console.log("Cleared destination.");
}

copyMarkdownFiles(SRC_DIR, DEST_DIR);
console.log("Done.");
