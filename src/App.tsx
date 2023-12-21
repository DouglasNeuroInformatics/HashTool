import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { InfoForm } from './components/InfoForm';
import { Layout } from './components/Layout';

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<InfoForm />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
