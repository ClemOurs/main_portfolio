import './app.scss'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Clem's Portfolio</title>
      </head>
      <body>{children}</body>
    </html>
  );
}