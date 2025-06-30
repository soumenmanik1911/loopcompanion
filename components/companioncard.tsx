import React from "react";
import Image from "next/image";
import Link from "next/link";
interface CompanionCardProps {
  id: string;
  name: string;
  topic: string;
  duration: number;
  subject: string;
  color: string;
}

const companioncard = ({
  id,
  name,
  topic,
  duration,
  subject,
  color,
}: CompanionCardProps) => {
  return (
    <article className="companion-card" style={{ backgroundColor: color }}>
      <div className="flex justify-between items-center">
        <div className="subject-badge">{subject}</div>
        <div className="companion-bookmark">
          <Image
            src="/icons/bookmark.svg"
            alt="bookmark"
            width={12}
            height={15}
          />
        </div>
        </div>
        <h2 className="companion-name text-2xl font-bold">{name}</h2>
        <p className="companion-topic text-sm ">{topic}</p>
        <div className="flex items-center gap-2">
            <Image src="/icons/clock.svg" alt="timer" width={12} height={12} />
            <p className="companion-duration">{duration} minutes</p>
        </div>
        <Link className="w-full" href={`/companion/${id}`}>
           <button className="companion-button bg-black text-white px-4 py-2 rounded-md w-full">
            Start Learning
           
           </button>
        </Link>
      
    </article>
  );
};

export default companioncard;
