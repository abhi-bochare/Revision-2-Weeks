Q.1  What is a database? What are the types of databases?
->  A database is an organized collection of data that allows efficient storage, retrieval, insertion, updating, and deletion of data.
   There are mainly 2 types of Databases:
      1. Relational Database:
      2. Non-Relational Daatabase:
    
    1. Relational Database:
      A relational database stores data in structured tables with rows and columns and uses SQL for querying. It follows a fixed schema and maintains strong data integrity using primary and foreign keys. It is best suited for applications requiring accuracy and consistency, like banking or transaction systems.
      e.g: MySQL
    2. Non-Ralational Database:
      A non-relational database stores data in flexible formats like documents, key-value pairs, or graphs. It supports dynamic schemas and horizontal scaling, making it ideal for large-scale, real-time, and unstructured data applications such as social media or IoT systems.
      e.g: MongoDB


Q.2  What is the difference between SQL and NoSQL databases?
-> 
| Feature      | SQL                     | NoSQL                              |
| ------------ | ----------------------- | ---------------------------------- |
| Schema       | Fixed schema            | Dynamic / flexible schema          |
| Data Model   | Tables (rows & columns) | Document, Key-Value, Graph, Column |
| Scalability  | Vertical scaling        | Horizontal scaling                 |
| Transactions | ACID compliant          | BASE model                         |
| Use Case     | Structured data         | Large, unstructured data           |


Q.3  When would you choose SQL over NoSQL and vice versa?
->  
Choose SQL when:
    - Data is highly structured
    - Strong data consistency is required
    - Complex joins and transactions are needed
    - Banking, ERP, CRM systems
Choose NoSQL when:
    - Data is semi-structured or unstructured
    - High scalability and performance needed
    - Large-scale applications (Big Data, IoT)
    - Real-time analytics, social media apps


Q.4  What is ACID in databases? Explain each property.
->  ACID ensures reliable transactions in relational databases.
    A – Atomicity
        Transaction is all or nothing.
    C – Consistency
        Database moves from one valid state to another.
    I – Isolation
        Concurrent transactions don’t interfere.
    D – Durability
        Once committed, data is permanently saved.

    
Q.5  What is BASE in NoSQL databases?
->  BASE focuses on availability and scalability.
    B – Basically Available
        System remains operational.
    A – Soft State
        Data may change over time.
    S – Eventually Consistent
        Data becomes consistent after some time.


Q.6  What is database normalization? Explain 1NF, 2NF, 3NF.
->  Normalization is the process of reducing data redundancy and improving data integrity.
Normal Forms:
    1NF (First Normal Form)
        - Atomic values
        - No repeating groups
    2NF (Second Normal Form)
        - In 1NF
        - No partial dependency
    3NF (Third Normal Form)
        - In 2NF
        - No transitive dependency

Q.7  What is denormalization? When would you denormalize data?
->  Denormalization is the process of combining tables to improve read performance.
    Used When:
        - Read-heavy applications
        - Performance is more important than storage
        - Reporting and analytics systems

Q.8  What are database indexes? How do they improve performance?
->  Indexes are data structures that improve the speed of data retrieval.
    How They Improve Performance:
        - Reduce full table scans
        - Allow faster search, filtering, and sorting
        - Use structures like B-Tree or Hash Index


Q.9  What are the trade-offs of using indexes?
->  
Advantages:
    - Faster SELECT queries
    - Efficient filtering and sorting
Disadvantages:
    - Slower INSERT, UPDATE, DELETE
    - Extra storage space
    - Maintenance overhead

Q.10  What is a primary key? What is a foreign key?
->  
Primary Key:
    - Uniquely identifies each record
    - Cannot be NULL
    - Ensures entity integrity

Foreign Key:
    - Refers to primary key of another table
    - Maintains referential integrity