import { Form } from '@douglasneuroinformatics/ui';
import { z } from 'zod';

export const InfoForm = () => {
  return (
    <Form
      content={[
        {
          title: 'Confidential Information',
          description:
            'For security reasons, this information is never saved on your computer or uploaded to a remote server.',
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
  );
};
