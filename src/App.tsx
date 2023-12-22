import { useEffect, useState } from 'react';

import { P, match } from 'ts-pattern';

import { AnimatePresence, motion } from 'framer-motion';
import { InfoForm } from './components/InfoForm';
import { Layout } from './components/Layout';
import { Result } from './components/Result';

import type { AppState } from './types';
import { ErrorFallback } from './components/ErrorFallback';

import { invoke } from '@tauri-apps/api';
import { Loader } from './components/Loader';

const initialState: AppState = Object.freeze({
  hash: null,
  info: null,
  isLoading: false
});

export const App = () => {
  const [state, setState] = useState<AppState>(initialState);

  useEffect(() => {
    if (state.info) {
      invoke<string>('hash', { text: 'Josh' }).then((hash) => {
        setState((prevState) => ({ ...prevState, hash, isLoading: true }));
      });
    }
  }, [state.info]);

  const content = match(state)
    .with({ info: P.nullish }, () => (
      <InfoForm
        key="info"
        onSubmit={(info) => {
          setState((prevState) => ({ ...prevState, info: info }));
        }}
      />
    ))
    .with({ isLoading: true }, () => (
      <Loader
        onComplete={() => {
          setState((prevState) => ({ ...prevState, isLoading: false }));
        }}
      />
    ))
    .with({ info: P.not(P.nullish), hash: P.string }, ({ hash }) => (
      <Result key="result" hash={hash} onComplete={() => setState(initialState)} />
    ))
    .otherwise(() => <ErrorFallback error={{ message: 'Unknown Error' }} key="error" />);

  return (
    <Layout>
      <AnimatePresence mode="wait">
        <motion.div
          animate={{ opacity: 1 }}
          className="flex flex-grow flex-col"
          key={content.key}
          exit={{ opacity: 0 }}
          initial={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {content}
        </motion.div>
      </AnimatePresence>
    </Layout>
  );
};
