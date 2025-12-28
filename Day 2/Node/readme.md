Q.1  What is HTTPS? How does it differ from HTTP?
->  HTTPS (HyperText Transfer Protocol Secure) is a secure version of HTTP. It uses SSL/TLS encryption to protect data during transmission.
    Differences:
    -  HTTP data is not encrypted, HTTPS data is encrypted.
    -  HTTPS ensures data confidentiality, integrity, and authenticity.
    -  HTTP is vulnerable to man-in-the-middle attacks.


Q.2  Explain SSL/TLS. What is the SSL handshake process?
->  SSL (Secure Socket Layer) and TLS (Transport Layer Security) both are the cryptograpic protocols, used to secure communication over a network.
    TSL is a latest and more secure version of SSL.
SSL/TSL Handshake Process:
    1. Client sends a Hello request to the server.
    2. Server responds with its SSL certificate.
    3. Client verifies the certificate using a Certificate Authority (CA)
    4. Client generates a session key and encrypts it using the server’s public key
    5. Server decrypts the session key using its private key
    6. Secure communication begins using symmetric encryption.


Q.3  What is encryption? Explain symmetric vs asymmetric encryption.
->  Encryption is a process of converting plain text (readable data) into ciphertext (unreadable data) to protect it from unauthorized access.

Symmetric Encryption: In Symmetric Encryption same key is used for encryption and decryption of a perticular message. 
    -   It uses one key for both encryption and decryption.
    -   Faster and more efficient for large amounts of data.
    -   Less secure.
    -   Requires a secure method to share the key between sender and receiver.
    -   Common algorithms include AES, DES, Blowfish.

Asymmetric Encryption: In asymmetric Encryption one key is used to encrypt data and the second one is used to decrypt an encrypted text. The second key is kept highly secret, while the first one which is called a public key can be freely distributed among the service’s users.
    -   It uses two keys a public key for encryption and a private key for decryption.
    -   More secure but slower than symmetric encryption.
    -   No need to share the private key, reducing the risk of exposure.
    -   Common algorithms include RSA, ECC, Diffie-Hellman
    -   It is used in digital signatures, SSL/TLS, and secure email communication.


Q.4  What are certificates? What is a Certificate Authority (CA)?
->  A digital certificate is an electronic document that verifies the identity of a website or server. It contains Public key, Domain name, issuer details and validity period.
    A Certificate Authority (CA) is a trusted organization that issues and verifies digital certificates.
    Role of CA:
    -   Verifies website identity
    -   Signs certificates
    -   Builds trust between client and server


Q.5  What is the difference between authentication and authorization?
->  Authentication: Confirms the user’s identity (proves who the user is).
Authorization: Controls what the verified user is allowed to do (decides what they can access).

Q.6  Explain session-based authentication. How do sessions work?
->  Session-based authentication stores user authentication state on the server side.
How Session works:
1. User logs in with credentials
2. Server creates a session entry in memory or database
3. Server sends a session ID to the client via cookies
4. Client sends the session ID on every request
5. Server matches the session ID and validates the user

Characteristics:
- Stateful authentication
- Server maintains session data
- Common in traditional web applications


Q.7  What are cookies? What are the security attributes of cookies (HttpOnly, Secure, SameSite)?
->  Cookies are small key-value data stored in the browser and sent automatically with HTTP requests.

Important Security Attributes:
- HttpOnly: Prevents access via JavaScript (protects against XSS)
- Secure: Ensures cookie is sent only over HTTPS
- SameSite:
    - Strict: Cookie sent only for same-site requests
    - Lax: Allows limited cross-site requests.
    - None: Allows cross-site requests (must be Secure)


Q.8  What is token-based authentication? How does it differ from session-based auth?
->  Token-based authentication is a modern security method where a server issues a temporary, encrypted "token" after a user successfully logs in with credentials, which the user then presents for subsequent requests to access resources, eliminating repeated password entry and allowing for stateless, scalable systems, common in APIs and mobile apps.

How Token Based Authentication works:
1. User logs in
2. Server issues a signed token
3. Client stores token (localStorage/cookie)
4. Client sends token in Authorization header
5. Server validates token signature and payload.

Difference:

| Session-Based Auth    | Token-Based Auth     |
| --------------------- | -------------------- |
| Server stores session | Stateless            |
| Uses cookies          | Uses headers         |
| Harder to scale       | Easily scalable      |
| Server-managed state  | Client-managed state |
