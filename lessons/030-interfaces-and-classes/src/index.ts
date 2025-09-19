// 030-interfaces-and-classes — interfaces and classes

console.log('Lesson 030-interfaces-and-classes: interfaces and classes');
// Write an interface here
interface Directory {
	addFile: (name: string) => void;
}

class DesktopDirectory implements Directory {
	addFile(name: string) {
		console.log(`Adding file: ${name}`);
	}

	showPreview(name: string) {
		console.log(`Opening preview of file: ${name}`);
	}
}

const Desktop = new DesktopDirectory();

Desktop.addFile('lesson-notes.txt');
Desktop.showPreview('lesson-notes.txt');
