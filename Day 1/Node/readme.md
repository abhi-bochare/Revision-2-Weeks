Q.1 What is HTTP and how does it work? Explain the request-response cycle.
-> HTTP (HyperText Transfer Protocol) is an application-layer protocol used for communication between a client (browser/app) and a server.
    Request-Response Cycle:
        1. Client sends an HTTP request (URL, method, headers, body).
        2. Server processes the request.
        3. Server sends an HTTP response (status code, headers, body).
        4. Client renders or processes the response.


Q.2 What are the different HTTP methods and when should each be used?
-> There are several HTTP methods like Get, Put, Post, Patch, Delete, etc.
Where:
    GET → Fetch data (read-only, no side effects)
    POST → Create a new resource
    PUT → Update/replace an entire resource
    PATCH → Partially update a resource
    DELETE → Remove a resource


Q.3  Explain HTTP status codes. What's the difference between 2xx, 3xx, 4xx, and 5xx?
-> HTTP status codes are the codes which are used to indicate the stauts of the perticular request.
Where:
    - 2xx (Success) → Request handled successfully (e.g., 200 OK, 201 Created)
    - 3xx (Redirection) → Further action needed (e.g., 301 Moved Permanently)
    - 4xx (Client Error) → Invalid request from client (e.g., 400, 401, 404)
    - 5xx (Server Error) → Server failed to process request (e.g., 500, 502)


Q.4 What are HTTP headers? Name some important request and response headers.
-> HTTP headers provide the metadata about the request or response.
Request Headers:
    - Authorization
    - Content-Type
    - Accept
    - User-Agent
Response Headers:
    - Content-Type
    - Set-Cookie
    - Cache-Control
    - Content-Length


Q.5 What is the difference between stateless and stateful protocols? Is HTTP stateless?
->  Stateless → Each request is independent (no memory of previous requests)
Stateful → Server remembers client state across requests
    HTTP is stateless, but state can be managed using cookies, sessions, or tokens (JWT).


Q.6 Explain idempotency in REST APIs. Which HTTP methods are idempotent?
-> Idempotency means making the same request multiple times results in the same outcome.
There are several methods which are Indepotent.
e.g.
    - GET
    - PUT
    - DELETE
    - PATCH (usually)
POST is not idempotent.

Q.7 What is REST? What are the principles of RESTful API design?
->  REST (Representational State Transfer) is an architectural style for designing web APIs.
    - Core Principles:
    - Client-Server separation
    - Statelessness
    - Resource-based URLs
    - Uniform interface (HTTP methods)
    - Cacheability
    - Layered system


Q.8 How would you version a REST API? What are the different approaches?
-> Common API Versioning Strategies:
    1. URL Versioning → /api/v1/users
    2. Query Params → /users?version=1
    3. Headers → Accept: application/vnd.v1+json
    4. Subdomain → v1.api.example.com
Most common & simple: URL versioning.