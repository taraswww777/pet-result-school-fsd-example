export const PostApi = {
  getPosts: ({
    limit = 5,
  }) => (
    fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}`)
      .then((response) => response.json())
  )
}
