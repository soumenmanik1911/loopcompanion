import CompanionCard from '@/components/companioncard'
import CTA from '@/components/CTA'
import CompanionsList from '@/components/Companionlist'
import {getAllCompanions, getRecentSessions} from "@/lib/actions/companion.action";
import {getSubjectColor} from "@/lib/utils";

const Page = async () => {
    const companions = await getAllCompanions({ limit: 3 });
    const recentSessionsCompanions = await getRecentSessions(10);

  return (
    <main >
      
   
  <h1>Popular Companions</h1>

        <section className="home-section">
            {companions.map((companion) => (
                <CompanionCard
                    key={companion.id}
                    {...companion}
                    color={getSubjectColor(companion.subject)}
                />
            ))}

        </section>

      <section className='home-section'>
       <CompanionsList
       title ="Recently Completed Sessions"
     companions={recentSessionsCompanions}
       />
        <CTA />
      </section>  
      
    </main>
    
  )
}

export default Page