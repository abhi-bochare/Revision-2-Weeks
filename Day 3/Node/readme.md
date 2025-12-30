Q.1  What is JWT (JSON Web Token)? Explain its structure (header, payload, signature).
->  JWT (JSON Web Token) is a compact, URL-safe token used for secure data transfer between a client and a server. It is mainly used for authentication and authorization.

A JWT has 3 parts, separated by dots(.):
    1. Header:
        - Header Contains metadata about the token.
        - Also it specifies the algorithm used for signing. (e.g. HS256, RS256).

    2. Payload:
        - Payload contains the user data.
        - e.g. userId, role, email, expiration time etc.
    
    3. Signature: 
        - Signature used to verify token integrity & authenticity.


Q.2  How does JWT authentication work? Explain the flow.
-> JWT authentication works in a stateless manner.

Flow of JWT:
    1. User logs in with credentials (email/password)
    2. Server verifies credentials
    3. Server generates a JWT and sends it to the client
    4. Client stores the JWT
    5. For every request, client sends JWT in the Authorization header
        Authorization: Bearer <token>
    6. Server verifies the token signature and expiration
    7. If valid → request is allowed
        If invalid/expired → request is rejected


Q.3  What are the advantages and disadvantages of JWT over sessions?
->  
Advantages:
    - Stateless (no server-side session storage)
    - Scales well for distributed systems
    - Faster authentication (no DB lookup per request)
    - Works well with microservices

Disadvantages:
    - Token cannot be easily revoked
    - Token size is larger than session ID
    - Security risk if token is exposed
    - Requires proper expiration and refresh handling


Q.4  Where should you store JWTs in the client? (localStorage vs cookies vs memory)
->  You should store JWT in cookies. 
    Because,
        - It is Most secure option.
        - Protected from XSS.

    - localstorage is vulnerable to XSS attacks so not     recommended for sensitive apps.
    - and in memory, token can be lost on page reload.


Q.5  What is the difference between access tokens and refresh tokens?
->
| Access Token            | Refresh Token                      |
| ----------------------- | ---------------------------------- |
| Short-lived             | Long-lived                         |
| Used for API access     | Used to generate new access tokens |
| Sent with every request | Sent only to refresh endpoint      |
| Expires quickly         | Stored securely                    |


Q.6  How do you handle JWT expiration and refresh?
->  
    1. Access token expires (e.g., 10 minutes)
    2. Client sends refresh token to /refresh-token endpoint
    3. Server verifies refresh token
    4. Server issues a new access token
    5. Client continues making requests


Q.7  What is Role-Based Access Control (RBAC)?
->  RBAC is an authorization strategy where access is controlled based on user roles.
    Ex. Admin can have full access where user can have limited access.


Q.8  How would you implement authorization in an API?
->  we implement the authorization by following steps:
    1. Firstly authenticate user using JWT
    2. Decode token and extract user role/permissions
    3. use middleware to check access.
    4. aloow or deny request based on role.

    