Q.1  What is CORS? Why does it exist?
->  CORS (Cross-Origin Resource Sharing) is a security mechanism enforced by web browsers that allows a web application running on one domain to access selected resources from a different domain.
    It exists to protect users from malicious websites. Without CORS, any website could make requests to any backend API using the user’s browser credentials, which would be a serious security risk. CORS allows servers to explicitly define which origins are allowed to access their resources.


Q.2  Explain the Same-Origin Policy.
->  The Same-Origin Policy is a core browser security rule that restricts web pages from making requests to a different origin than the one that served the page.

Two URLs are considered the same origin only if protocol, domain, and port are all the same.
This policy prevents malicious scripts from one site from accessing sensitive data on another site, such as cookies, tokens, or user data.


Q.3  What are preflight requests? When do they occur?
->  A preflight request is an OPTIONS HTTP request sent by the browser before the actual request.
It occurs when:
    - The request uses methods other than GET/POST (like PUT, DELETE)
    - Custom headers are used
    - The request sends JSON with Content-Type: application/json
The browser sends the preflight request to check if the server allows the actual request. If the server responds with proper CORS headers, only then the main request is sent.


Q.4  How do you configure CORS in Express?
->  In Express, CORS is usually configured using the cors middleware.
We can:
    - Allow specific origins
    - Allow specific HTTP methods
    - Allow credentials like cookies or authorization headers

Q.5  What is CSRF (Cross-Site Request Forgery)? How do you prevent it?
->  CSRF is an attack where a malicious website tricks a logged-in user’s browser into making an unwanted request to another website.
    Since cookies are automatically sent with requests, the server may think the request is legitimate.
Prevention methods:
    - CSRF tokens
    - SameSite cookies
    - Avoiding sensitive operations via GET requests
    - Verifying request origin and headers


Q.6  What is XSS (Cross-Site Scripting)? How do you prevent it?
->  XSS is an attack where malicious JavaScript code is injected into a web application and executed in the user’s browser.
    It can steal cookies, tokens, or manipulate the UI.
Prevention methods:
    - Proper input validation and sanitization
    - Escaping user-generated content
    - Using HTTP-only cookies
    - Implementing Content Security Policy (CSP)


Q.7  What is SQL Injection? How do you prevent it?
->  SQL Injection happens when malicious SQL queries are injected through user input, allowing attackers to read, modify, or delete database data.
Prevention methods:
    - Using prepared statements / parameterized queries
    - Avoiding dynamic SQL queries
    - Validating and sanitizing inputs
    - Using ORM frameworks

