import { useState } from 'react';

import { P, match } from 'ts-pattern';

import { InfoForm } from './components/InfoForm';
import { Layout } from './components/Layout';
import { Result } from './components/Result';

import type { AppState } from './types';
import { ErrorFallback } from './components/ErrorFallback';

const initialState: AppState = Object.freeze({
  hash: null,
  info: null
});

export const App = () => {
  const [state, setState] = useState<AppState>(initialState);

  return (
    <Layout>
      {match(state)
        .with({ info: P.nullish }, () => (
          <InfoForm
            onSubmit={(info) => {
              setState((prevState) => ({ ...prevState, info: info, hash: '12345' }));
            }}
          />
        ))
        .with({ info: P.not(P.nullish), hash: P.string }, ({ hash }) => (
          <Result hash={hash} onComplete={() => setState(initialState)} />
        ))
        .otherwise(() => (
          <ErrorFallback />
        ))}
    </Layout>
  );
};
