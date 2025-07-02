import { auth } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';

export default async function DashboardPage() {
  const { userId } = auth();
  
  if (!userId) {
    redirect('/sign-in');
  }
  
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-2xl font-bold mb-5">Dashboard</h1>
      <p>This is a protected page. Only authenticated users can see this.</p>
    </div>
  );
}