async function fetchPostsWithComments() {
  // Your implementation here
  try {
    const [postsRes, commentsRes] = await Promise.all([
      fetch("https://jsonplaceholder.typicode.com/posts"),
      fetch("https://jsonplaceholder.typicode.com/comments"),
    ]);

    const posts = await postsRes.json();
    const comments = await commentsRes.json();

    const commentMap = comments.reduce((acc, comment) => {
      if (!acc[comment.postId]) {
        acc[comment.postId] = [];
      }

      acc[comment.postId].push(comment);
      return acc;
    }, {});

    const result = posts
      .filter((post) => commentMap[post.id])
      .map((post) => ({
        postId: post.id,
        title: post.title,
        commentCount: commentMap[post.id].length,
        firstCounterEmail: commentMap[post.id][0].email,
      }))
      .sort((a, b) => b.commentCount - a.commentCount)
      .slice(0, 5);

    return result;
  } catch (err) {
    console.log(err);
  }
}

fetchPostsWithComments().then((result) => console.log(result));
