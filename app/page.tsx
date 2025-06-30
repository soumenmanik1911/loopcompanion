import CompanionCard from '@/components/companioncard'
import CTA from '@/components/CTA'
import CompanionsList from '@/components/Comnpanionlist'
import React from 'react'

const Page = () => {
  const recentSession = [
    {
      id: "3",
      subject: "language",
      name: "Verba the Vocabulary Builder",
      topic: "English Literature",
      duration: 30,
      color: "#BDE7FF",
    },
    // ...add more if needed
  ];

  return (
    <main >
      
   
      <section className='home-section'>
        <CompanionCard 
        id="2554"
        name="AI tutorial"
        topic="AI"
        duration={10}
        subject="AI"
        color="#3B82F6"
        />
        <CompanionCard 
        id="9658"
        name="NEURON fundamentals"
        topic="NEURON"
        duration={15}
        subject="NEURON science"
        color="#10B981"
     
        />
        <CompanionCard 
        id="9648"
        name="social media"
        topic="social media"
        duration={12}
        subject="social media marketing"
        color="#8B5CF6"
     
        />
        
       
      </section>
      <section className='home-section'>
       <CompanionsList
       title ="recently completed session"
       companions={recentSession} 
       />
        <CTA />
      </section>  
      
    </main>
    
  )
}

export default Page