import './globals.css';

export const metadata = {
  title: 'Komol & Riti — Wedding Invitation',
  description: 'Wedding invitation of Tawhid Ahmed Komol and Rinvi Jaman Riti',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
