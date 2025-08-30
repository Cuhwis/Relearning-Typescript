#!/usr/bin/env node
import fs from 'fs';
import path from 'path';

const [, , id, ...titleParts] = process.argv;

if (!id) {
	console.error('Usage: npm run new:lesson <lesson-id> [title]');
	process.exit(1);
}

const title = titleParts.join(' ') || id;
const lessonDir = path.join('lessons', id, 'src');

// make folder
fs.mkdirSync(lessonDir, { recursive: true });

// create index.ts
const indexPath = path.join(lessonDir, 'index.ts');
if (!fs.existsSync(indexPath)) {
	fs.writeFileSync(
		indexPath,
		`// ${id} — ${title}\n\nconsole.log("Lesson ${id} running...");\n`
	);
}

// create README.md
const readmePath = path.join('lessons', id, 'README.md');
if (!fs.existsSync(readmePath)) {
	fs.writeFileSync(
		readmePath,
		`# Lesson ${id} — ${title}\n\nNotes go here.\n`
	);
}

console.log(`✅ Created lesson ${id} at ${lessonDir}`);
