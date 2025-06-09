// pages/_app.js
import '../styles/globals.css';
import AccessGuard from '../components/AccessGuard';
import { useRouter } from 'next/router';

export default function MyApp({ Component, pageProps }) {
  const router = useRouter();

  const isAccessPage = router.pathname === '/';

  return isAccessPage ? (
    <Component {...pageProps} />
  ) : (
    <AccessGuard>
      <Component {...pageProps} />
    </AccessGuard>
  );
}
