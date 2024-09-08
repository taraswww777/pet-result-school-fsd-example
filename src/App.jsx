import './App.css'
import { QueryClient, QueryClientProvider } from 'react-query';
import { Posts } from './pages/posts.jsx';

const queryClient = new QueryClient();

export const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Posts />
    </QueryClientProvider>
  )
}


