import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] gap-6 px-4">
      <h2 className="h2-bold text-4xl text-center">404 - Page Not Found</h2>
      <p className="text-muted-foreground text-lg text-center">Oops! Could not find the requested resource</p>
      <Link 
        href="/" 
        className="mt-4 inline-flex items-center px-6 py-3 rounded-lg bg-primary text-white hover:bg-primary/90 transition-colors"
      >
        Back to Home
      </Link>
    </div>
  );
}
