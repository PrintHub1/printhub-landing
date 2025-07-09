import '../styles/globals.css'

export const metadata = {
  title: 'PrintHub',
  description: 'Online printing marketplace',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
