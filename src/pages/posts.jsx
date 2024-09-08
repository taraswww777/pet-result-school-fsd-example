import { useQuery } from 'react-query';
import { PostApi } from '../api/postApi.js';
import { Loading } from '../components/Loading.jsx';
import { ErrorLoading } from '../components/ErrorLoading.jsx';

export const Posts = () => {
  const { isLoading, error, data } = useQuery(
    'repoData',
    () => PostApi.getPosts({ limit: 10 })
  );


  return (
    <div className="bg-blue-800">

      {isLoading && <Loading />}

      {error && <ErrorLoading error={error} />}

      {data && (
        <ul>
          {data.map(({ userId, id, title, body }) => (
            <li key={id} className="mt-1 py-1 px-0.5">
              <p>userId: {userId}</p>
              <p>id: {id}</p>
              <p>title: {title}</p>
              <p>body: {body}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
