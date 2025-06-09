'use client'

export default function GlobalError({
  error,
  reset,
}: Readonly<{ error: Error & { digest?: string }; reset: () => void }>) {
  return (
    <html lang="en">
      <body>
        <h2>Something went wrong!</h2>
        <p>{error?.message}</p>
        <button onClick={() => reset()}>Try again</button>
      </body>
    </html>
  )
}
