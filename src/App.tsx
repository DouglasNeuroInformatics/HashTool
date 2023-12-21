import { P, match } from 'ts-pattern';

import { InfoForm } from './components/InfoForm';
import { Layout } from './components/Layout';
import { useAppStore } from './stores/app-store';

export const App = () => {
  const store = useAppStore();
  return (
    <Layout>
      {match(store)
        .with({ info: P.nullish }, () => <InfoForm />)
        .with({ info: P.not(P.nullish) }, () => null)
        .exhaustive()}
    </Layout>
  );
};
