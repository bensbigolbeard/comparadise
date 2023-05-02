import * as React from 'react';
import './App.css';
import { MainPage } from './components/main-page';
import { ClientProvider } from './providers/client-provider';
import { QueryParamProvider } from 'use-query-params';
import { WindowHistoryAdapter } from 'use-query-params/adapters/window';

function App({ queryParamAdapter = WindowHistoryAdapter }) {
  return (
    <ClientProvider>
      <QueryParamProvider adapter={queryParamAdapter}>
        <MainPage />
      </QueryParamProvider>
    </ClientProvider>
  );
}

export default App;
