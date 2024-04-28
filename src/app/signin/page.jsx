import Signin from '@/components/page/Signin';
import { cookies } from 'next/headers';

export default function SigninPage() {
  const cookieStore = cookies();
  const csrfToken = cookieStore.get('next-auth.csrf-token');
  return <Signin csrfToken={csrfToken?.value} />;
}
