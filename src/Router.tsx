import { AnimatePresence, motion } from 'framer-motion';
import { BrowserRouter, Route, Routes, useLocation, useOutlet } from 'react-router-dom';

import { ErrorFallback } from './components/ErrorFallback';
import { Layout } from './components/Layout';
import { HashLayout, HashPage, HashResultPage } from './features/hash';
import { HomePage } from './features/home';

const Root = () => {
  const outlet = useOutlet();
  const location = useLocation();
  const paths = location.pathname.split('/').filter(Boolean);

  return (
    <AnimatePresence initial={false} mode="wait">
      <motion.div
        animate={{ opacity: 1 }}
        className="flex min-h-screen flex-grow flex-col bg-slate-50"
        exit={{ opacity: 0 }}
        initial={{ opacity: 0 }}
        key={paths[0]}
        transition={{ duration: 0.2 }}
      >
        {outlet}
      </motion.div>
    </AnimatePresence>
  );
};

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Root />}>
          <Route element={<Layout />}>
            <Route index element={<HomePage />} path="/" />
            <Route element={<HashLayout />} path="hash">
              <Route index element={<HashPage />} />
              <Route element={<HashResultPage />} path="result" />
            </Route>
          </Route>
          <Route element={<ErrorFallback error={{ message: 'No Matching Route' }} />} path="*" />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
