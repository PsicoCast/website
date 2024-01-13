import Link from 'next/link';

interface MediaButtonProps {
  link: string,
  icon: any,
};

export function mediaButton({link, icon}: MediaButtonProps) {
  const Icon = icon;
    return (
      <Link
        href={link}
        className="flex h-10 items-center rounded-lg bg-blue-600 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
      >
        <Icon />
      </Link>
    );
  }
  
  