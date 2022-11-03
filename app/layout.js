import './app.scss';
import Navbar from '../components/navbar';


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Next.js</title>
      </head>
      <body id='base'>
        <Navbar />
        {children}
      </body>
    </html>
  );
}