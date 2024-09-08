import { useQuery } from 'react-query';
import { PostApi } from '../api/postApi.js';

export const useGetPosts = ({
  limit = 5,
}) => (
  useQuery(
    'repoData',
    () => PostApi.getPosts({ limit })
  )
)
