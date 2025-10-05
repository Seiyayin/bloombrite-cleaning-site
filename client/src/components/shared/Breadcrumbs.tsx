import { Link } from 'wouter';
import { ChevronRight } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  href: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

const Breadcrumbs = ({ items }: BreadcrumbsProps) => {
  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      <ol className="flex items-center space-x-2 text-sm text-gray-600">
        {items.map((item, index) => (
          <li key={item.href} className="flex items-center">
            {index > 0 && (
              <ChevronRight className="w-4 h-4 mx-2 text-gray-400" />
            )}
            {index === items.length - 1 ? (
              <span className="text-gray-900 font-medium" data-testid={`breadcrumb-current`}>
                {item.label}
              </span>
            ) : (
              <Link href={item.href}>
                <a className="hover:text-primary transition-colors" data-testid={`breadcrumb-link-${index}`}>
                  {item.label}
                </a>
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
