import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { router } from "./router/router";
import './index.css'
import { ConfigProvider } from 'antd';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const client = new QueryClient();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={client}>
    <ConfigProvider theme={
      {
        token: {
          colorPrimary: '#0b421a',
        }
      }
    }>
      <RouterProvider router={router} />
    </ConfigProvider>
    </QueryClientProvider>
  </StrictMode>,
)
