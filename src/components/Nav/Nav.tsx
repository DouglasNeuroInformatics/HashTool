import { HomeIcon } from '@heroicons/react/24/solid';

const pages = [
  { name: 'Projects', href: '#', current: false },
  { name: 'Project Nero', href: '#', current: true }
];

export type NavProps = {
  items: {
    label: string;
    path: string;
  }[];
};

export const Nav = ({ items }: NavProps) => {
  return (
    <nav className="flex" aria-label="Breadcrumb">
      <ol role="list" className="flex items-center space-x-4">
        <li>
          <div>
            <a href="#" className="text-slate-600 hover:text-slate-700 dark:text-slate-300 dark:hover:text-slate-200">
              <HomeIcon className="h-5 w-5 flex-shrink-0" aria-hidden="true" />
            </a>
          </div>
        </li>
        {items.map((page) => (
          <li key={page.name}>
            <div className="flex items-center">
              <svg
                className="h-5 w-5 flex-shrink-0 text-slate-300 dark:text-slate-600"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
                aria-hidden="true"
              >
                <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z" />
              </svg>
              <a
                href={page.href}
                className="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700"
                aria-current={page.current ? 'page' : undefined}
              >
                {page.name}
              </a>
            </div>
          </li>
        ))}
      </ol>
    </nav>
  );
};
