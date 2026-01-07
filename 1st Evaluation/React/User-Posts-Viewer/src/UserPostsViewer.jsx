import { useEffect, useState } from "react";

export default function UserPostsViewer() {
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await res.json();
        setUsers(data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchUsers();
  });

  return (
    <div>
      <h1>User Posts Viewer</h1>
    </div>
  );
}
