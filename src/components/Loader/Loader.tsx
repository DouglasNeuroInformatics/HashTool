import { type MotionValue, motion, useSpring, useTransform } from 'framer-motion';
import { useEffect, useState } from 'react';
import { match } from 'ts-pattern';

type Status = 'LOADING' | 'COMPUTING' | 'COMPLETE';

type LoaderProps = {
  onComplete: () => void;
};

export const Loader = ({ onComplete }: LoaderProps) => {
  const [status, setStatus] = useState<Status>('LOADING');

  const spring = useSpring(0, { bounce: 0 }) as MotionValue<number>;
  const rounded = useTransform(spring, (latest: number) => Math.floor(latest));

  useEffect(() => {
    let id: any;
    match(status)
      .with('LOADING', () => {
        id = setTimeout(() => {
          setStatus('COMPUTING');
        }, 1000);
      })
      .with('COMPUTING', () => {
        spring.set(100);
      })
      .with('COMPLETE', () => onComplete())
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
    <div className="flex flex-grow flex-col items-center justify-center">
      {match(status)
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
