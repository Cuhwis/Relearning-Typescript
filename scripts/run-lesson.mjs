#!/usr/bin/env node
import { spawn } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';

const id = process.argv[2];
if (!id) {
	console.error('Usage: npm run lesson <lesson-id>');
	process.exit(1);
}

const entry = path.join('lessons', id, 'src', 'index.ts');
if (!fs.existsSync(entry)) {
	console.error(`Missing: ${entry}`);
	process.exit(1);
}

spawn(process.platform === 'win32' ? 'npx.cmd' : 'npx', ['tsx', entry], {
	stdio: 'inherit',
});
