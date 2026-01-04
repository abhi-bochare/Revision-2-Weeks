const fs = require("fs");
const path = require("path");
const EventEmitter = require("events");

class FileWatcher extends EventEmitter {
  constructor(directory) {
    super();
    this.directory = directory;
    this.files = new Set();
  }

  initializeFiles() {
    try {
      const existingFiles = fs.readdirSync(this.directory);
      existingFiles.forEach((file) => this.files.add(file));
    } catch (error) {
      this.emit("error", error);
    }
  }

  startWatching() {
    this.initializeFiles();

    fs.watch(this.directory, (eventType, filename) => {
      if (!filename) return;

      const filePath = path.join(this.directory, filename);
      const exists = fs.existsSync(filePath);

      try {
        if (exists && !this.files.has(filename)) {
          this.files.add(filename);
          this.emit("file-added", filename);
        } else if (exists && this.files.has(filename)) {
          this.emit("file-modified", filename);
        } else if (!exists && this.files.has(filename)) {
          this.files.delete(filename);
          this.emit("file-deleted", filename);
        }
      } catch (error) {
        this.emit("error", error);
      }
    });
  }
}

module.exports = FileWatcher;
