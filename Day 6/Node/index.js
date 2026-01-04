const FileWatcher = require("./FileWatcher");
const logWithTimestamp = require("./utils/logger");

const DIRECTORY_TO_WATCH = "./watched-folder";

const watcher = new FileWatcher(DIRECTORY_TO_WATCH);

watcher.on("file-added", (file) => {
  logWithTimestamp(`File added: ${file}`);
});

watcher.on("file-modified", (file) => {
  logWithTimestamp(`File modified: ${file}`);
});

watcher.on("file-deleted", (file) => {
  logWithTimestamp(`File deleted: ${file}`);
});

watcher.on("error", (error) => {
  logWithTimestamp(`Error: ${error.message}`);
});

watcher.startWatching();
