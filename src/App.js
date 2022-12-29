import logo from './logo.svg';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './Routes';
import toast, { Toaster } from 'react-hot-toast';

import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from 'react-query';
const queryClient = new QueryClient()


function App() {


  return (
    <div className="">


      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router}>
        </RouterProvider>
      </QueryClientProvider>


      <Toaster></Toaster>
    </div>
  );
}

export default App;
