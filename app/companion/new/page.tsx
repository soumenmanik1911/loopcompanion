import CompanionForm from '@/components/CompanionForm'
import { auth } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation'

const NewCompanionPage = async () => {
  const { userId } = await auth();
  
  // Redirect to sign-in page if user is not authenticated
  if (!userId) {
    redirect('/sign-in');
  }
  
  return (
    <main className='flex justify-center items-cente min-lg:w-1/3 min-md:w 2/3 '>
      <article className='companion-form w-full flex flex-col'>
        <h1 className='text-3xl font-bold'>Build Companion</h1>
      
        <CompanionForm />
      </article>
    </main>
  )
}

export default NewCompanionPage