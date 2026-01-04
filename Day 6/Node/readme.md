Q.1  What are core modules in Node.js? Name at least 10.
->  Core modules are built-in modules provided by Node.js. They come bundled with Node, so we don’t need to install them using npm. These modules provide essential functionalities like file handling, networking, OS interaction, and process management.

Examples of core modules:
1. fs – File system operations
2. path – File and directory path utilities
3. http – Creating HTTP servers and clients
4. https – Secure HTTP communication
5. os – Operating system-related information
6. events – Event-driven programming
7. stream – Handling streaming data
8. url – URL parsing and formatting
9. crypto – Cryptographic operations
10. child_process – Running external processes
11. cluster – Multi-core process management
12. timers – setTimeout, setInterval utilities


Q.2  Explain the 'fs' module. What's the difference between fs and fs/promises?
->  The fs (File System) module is used to read, write, update, delete, and manage files and directories.

fs Module: 
    - fs module Supports callback-based and sync APIs
    - It is older and wisely used.
    - It can lead to callback nesting if not handled properly

fs/promises:
    - It introduced to support Promise-based APIs
    - It Works well with async/await
    - It has cleaner and more readable code

Key Difference:
fs/promises returns promises, while fs mainly uses callbacks or synchronous methods.


Q.3  What is the 'path' module used for?
->  The path module is used to handle and transform file paths in a cross-platform way.
    It ensures compatibility between operating systems

Common use cases are:
- Joining paths safely
- Resolving absolute paths
- Extracting file names or extensions


Q.4  Explain the EventEmitter class. How do you use it?
->  EventEmitter is a class from the events module that enables event-driven architecture in Node.js.

It allows:
    - Emitting custom events
    - Listening to those events
    - Decoupling logic


Q.5  What is the difference between on() and once() in EventEmitter?
->  on() → Listens to an event every time it is emitted
    once() → Listens to an event only once, then automatically removes the listener


Q.6  How does error handling work with EventEmitters?
->  In EventEmitters, errors are handled using a special error event.
    If an error event is emitted and no listener is attached, Node.js will crash.


Q.7  What is the 'cluster' module? Why would you use it?
->  The cluster module allows Node.js to utilize multiple CPU cores by creating child worker processes that share the same server port.

Why it’s needed:
    - Node.js runs on a single thread
    - Clustering improves performance and scalability
    - Useful for high-traffic applications


Q.8  What are child processes? When would you spawn one?
->  Child processes allow Node.js to execute system-level commands or scripts outside the main event loop.

Use cases:
    - Running shell commands
    - Heavy CPU tasks
    - Executing other programs (Python scripts, build tools, etc.)
They prevent blocking the main thread.

Q.9 What is the difference between spawn, exec, and fork?
-> 
| Method  | Use Case               | Output Handling |
| ------- | ---------------------- | --------------- |
| `spawn` | Long-running processes | Stream-based    |
| `exec`  | Short commands         | Buffered        |
| `fork`  | Node.js scripts        | IPC supported   |

Key differences:
spawn → Efficient for large output
exec → Simpler, but limited buffer
fork → Best for Node-to-Node communication
