import Signin from '@/components/page/Signin';
import { cookies } from 'next/headers';
import { getServerAuthSession } from '@/server/auth';
import { redirect } from 'next/navigation';

export default async function SigninPage() {
  const session = await getServerAuthSession();

  if (session?.user) {
    return redirect('/dashboard');
  }

  const cookieStore = cookies();
  const csrfToken = cookieStore.get('next-auth.csrf-token');

  return <Signin csrfToken={csrfToken?.value} />;
}
