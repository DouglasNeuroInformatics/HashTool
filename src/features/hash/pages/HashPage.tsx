import { useEffect, useState } from 'react';

import { cn } from '@douglasneuroinformatics/ui';
import { invoke } from '@tauri-apps/api';
import { type MotionValue, motion, useSpring, useTransform } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { match } from 'ts-pattern';

import { HashInfoForm } from '../components/HashInfoForm';
import { useHashStore } from '../store/hash-store';

type Status = 'COMPLETE' | 'COMPUTING' | 'INITIAL' | 'LOADING';

export const HashPage = () => {
  const navigate = useNavigate();
  const { setHash } = useHashStore();
  const [status, setStatus] = useState<Status>('INITIAL');

  const spring = useSpring(0, { bounce: 0 }) as MotionValue<number>;
  const rounded = useTransform(spring, (latest: number) => Math.floor(latest));

  useEffect(() => {
    let id: NodeJS.Timeout;
    match(status)
      .with('INITIAL', () => null)
      .with('LOADING', () => {
        id = setTimeout(() => {
          setStatus('COMPUTING');
        }, 1000);
      })
      .with('COMPUTING', () => {
        spring.set(100);
      })
      .with('COMPLETE', () => navigate('/hash/result'))
      .exhaustive();
    return () => {
      if (id) {
        clearTimeout(id);
      }
    };
  }, [spring, status]);

  useEffect(() => {
    rounded.on('change', (value) => {
      if (value === 100) {
        setStatus('COMPLETE');
      }
    });
  }, [rounded]);

  return (
    <div className={cn('flex-grow', status !== 'INITIAL' && 'flex flex-col items-center justify-center')}>
      {match(status)
        .with('INITIAL', () => (
          <HashInfoForm
            onSubmit={({ healthCardNumber }) => {
              void invoke<string>('hash', { text: healthCardNumber }).then((hash) => {
                setHash(hash);
                setStatus('LOADING');
              });
            }}
          />
        ))
        .with('LOADING', () => {
          return <h5 className="text-lg font-semibold">Loading SHA-256 Algorithm...</h5>;
        })
        .with('COMPUTING', () => (
          <div>
            <h5 className="inline text-lg font-semibold">
              <span>Computation Progress: </span>
              <motion.span>{rounded}</motion.span>
              <span>%</span>
            </h5>
          </div>
        ))
        .with('COMPLETE', () => null)
        .exhaustive()}
    </div>
  );
};
