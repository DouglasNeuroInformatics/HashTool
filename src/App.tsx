import { useEffect, useState } from 'react';

import { P, match } from 'ts-pattern';

import { InfoForm } from './components/InfoForm';
import { Layout } from './components/Layout';
import { Result } from './components/Result';

import type { AppState } from './types';
import { ErrorFallback } from './components/ErrorFallback';

import { invoke } from '@tauri-apps/api';

const initialState: AppState = Object.freeze({
  hash: null,
  info: null
});

export const App = () => {
  const [state, setState] = useState<AppState>(initialState);

  useEffect(() => {
    if (state.info) {
      invoke<string>('hash', { text: 'Josh' }).then((hash) => {
        setState((prevState) => ({ ...prevState, hash }));
      });
    }
  }, [state.info]);

  return (
    <Layout>
      {match(state)
        .with({ info: P.nullish }, () => (
          <InfoForm
            onSubmit={(info) => {
              setState((prevState) => ({ ...prevState, info: info }));
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
