import { cn } from '@douglasneuroinformatics/ui';
import { HomeIcon } from '@heroicons/react/24/solid';
import { Link, useLocation } from 'react-router-dom';

const PATH_LABELS = new Map<string, string>([
  ['hash', 'Generate Hash'],
  ['result', 'Result']
]);

export type NavProps = {
  className?: string;
};

export const Nav = ({ className }: NavProps) => {
  const location = useLocation();

  const paths = location.pathname.split('/').filter(Boolean);

  return (
    <nav className={cn('flex w-full', className)}>
      <ol className="flex items-center space-x-4">
        <li>
          <div>
            <Link className="text-slate-600 hover:text-slate-700 dark:text-slate-300 dark:hover:text-slate-200" to="/">
              <HomeIcon aria-hidden="true" className="h-5 w-5 flex-shrink-0" />
            </Link>
          </div>
        </li>
        {paths.map((path, i) => (
          <li key={path}>
            <div className="flex items-center">
              <svg
                aria-hidden="true"
                className="h-5 w-5 flex-shrink-0 text-slate-300 dark:text-slate-600"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z" />
              </svg>
              <Link
                className="ml-4 text-sm font-medium text-slate-600 hover:text-slate-700"
                to={`/${paths.slice(0, i + 1).join('/')}`}
              >
                {PATH_LABELS.get(path) ?? path}
              </Link>
            </div>
          </li>
        ))}
      </ol>
    </nav>
  );
};
