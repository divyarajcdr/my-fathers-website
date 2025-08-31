'use client'; // Error components must be Client Components
 
export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html>
      <body>
        <h2>Something went wrong!</h2>
        <p>There was an error loading the application.</p>
        <button 
          onClick={() => reset()}
          style={{
            padding: '10px 20px', 
            marginTop: '10px', 
            cursor: 'pointer'
          }}
        >
          Try again
        </button>
      </body>
    </html>
  );
}