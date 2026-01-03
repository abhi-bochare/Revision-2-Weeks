async function fetchData() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();

    let res = data
      .filter((user) => user.username.length > 6)
      .map((user) => ({ id: user.id, fullName: user.name, email: user.email }));

    console.log(res);
  } catch (err) {
    console.log(err);
  }
}

fetchData();
