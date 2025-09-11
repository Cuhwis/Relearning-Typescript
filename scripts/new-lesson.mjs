#!/usr/bin/env node
import fs from 'fs';
import path from 'path';

const [, , firstArg, ...restTitleParts] = process.argv;

if (!firstArg) {
	console.error('❌ Usage: npm run new:lesson <lesson-id-or-title>');
	console.error('   Examples:');
	console.error('     npm run new:lesson arrays intro');
	console.error('     npm run new:lesson 007-tuples');
	process.exit(1);
}

const lessonsRoot = path.join('lessons');
fs.mkdirSync(lessonsRoot, { recursive: true });

/** Slugify a title into kebab-case */
function slugify(s) {
	return s
		.toLowerCase()
		.trim()
		.replace(/[^a-z0-9]+/g, '-')
		.replace(/^-+|-+$/g, '');
}

/** Get the next numeric prefix and padding width */
function nextNumberAndWidth() {
	const entries = fs
		.readdirSync(lessonsRoot, { withFileTypes: true })
		.filter((d) => d.isDirectory())
		.map((d) => d.name);

	const nums = [];
	let maxWidth = 3; // default to 3-digit padding

	for (const name of entries) {
		const m = /^(\d+)(?:-|$)/.exec(name);
		if (m) {
			const n = parseInt(m[1], 10);
			if (!Number.isNaN(n)) {
				nums.push(n);
				if (m[1].length > maxWidth) maxWidth = m[1].length;
			}
		}
	}

	if (nums.length === 0) {
		return { next: 1, width: maxWidth };
	}

	const maxNum = Math.max(...nums);
	return {
		next: maxNum + 1,
		width: Math.max(maxWidth, String(maxNum).length),
	};
}

/** Ensure an id is unique (if exists, keep incrementing until free) */
function ensureUniqueId(baseNum, width, slug) {
	let num = baseNum;
	while (true) {
		const id = `${String(num).padStart(width, '0')}-${slug}`;
		const dir = path.join(lessonsRoot, id);
		if (!fs.existsSync(dir)) {
			return { id, dir };
		}
		num += 1;
	}
}

// Determine if the user provided an explicit id like "020-some-lesson"
const explicitIdMatch = /^(\d+)-(.+)$/.exec(firstArg);

// Build title + slug
const rawTitle = [
	explicitIdMatch ? explicitIdMatch[2] : firstArg,
	...restTitleParts,
].join(' ');
const title =
	rawTitle.trim() || (explicitIdMatch ? explicitIdMatch[2] : firstArg);
const slug = slugify(title);

// Compute id/dir
let id, lessonDir;
if (explicitIdMatch) {
	// Use the explicit id as-is (but still ensure it doesn't collide)
	const n = parseInt(explicitIdMatch[1], 10);
	const width = explicitIdMatch[1].length;
	({ id, dir: lessonDir } = ensureUniqueId(n, width, slug));
} else {
	// Auto-number based on existing lessons
	const { next, width } = nextNumberAndWidth();
	({ id, dir: lessonDir } = ensureUniqueId(next, width, slug));
}

// Create structure
const srcDir = path.join(lessonDir, 'src');
const indexPath = path.join(srcDir, 'index.ts');
const readmePath = path.join(lessonDir, 'README.md');

fs.mkdirSync(srcDir, { recursive: true });

if (!fs.existsSync(indexPath)) {
	fs.writeFileSync(
		indexPath,
		`// ${id} — ${title}

console.log("Lesson ${id}: ${title}");
`
	);
}

if (!fs.existsSync(readmePath)) {
	fs.writeFileSync(
		readmePath,
		`# Lesson ${id}: ${title}

Notes go here.
`
	);
}

console.log(`✅ Created lesson ${id} at ${srcDir}`);
console.log('\nNext steps:');
console.log(`  tsx ${path.join('lessons', id, 'src', 'index.ts')}`);
console.log(`  # or`);
console.log(`  cd ${path.join('lessons', id)} && tsx src/index.ts`);
