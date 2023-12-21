import { Form } from '@douglasneuroinformatics/ui';
import { z } from 'zod';

export const App = () => {
  return (
    <div className="container mx-auto px-3 py-6" id="app">
      <div className="flex flex-col items-center justify-center">
        <img className="" height={64} width={64} src="/icon.png" />
        <h1 className="py-3 text-center text-xl font-bold">DNP Secure Hash</h1>
      </div>
      <Form
        content={[
          {
            title: 'Confidential Information',
            description: 'For security reasons, this information is never saved on your computer or uploaded to a remote server.',
            fields: {
              healthCardNumber: {
                kind: 'text',
                label: 'RAMQ Number',
                variant: 'short'
              }
            }
          }
        ]}
        onSubmit={(data) => alert(JSON.stringify(data))}
        validationSchema={z.object({
          healthCardNumber: z.string().min(1)
        })}
      />
    </div>
  );
};
