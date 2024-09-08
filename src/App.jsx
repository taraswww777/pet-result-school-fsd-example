import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { QueryClient, QueryClientProvider, useQuery } from 'react-query';

const queryClient = new QueryClient();

export const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Example />
    </QueryClientProvider>
  )
}


function Example() {
  const { isLoading, error, data } = useQuery(
    'repoData',
    () =>
      fetch('https://jsonplaceholder.typicode.com/posts?_limit=10',).then((response) => response.json())
  );

  if (isLoading) return <p>Загрузка...</p>;

  if (error) return <p>Ошибка: {error.message}</p>;

  return (
    <div>
      <ul>
        {data.map(({ userId, id, title, body }) => (
          <li>
            <p>userId: {userId}</p>
            <p>id: {id}</p>
            <p>title: {title}</p>
            <p>body: {body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
