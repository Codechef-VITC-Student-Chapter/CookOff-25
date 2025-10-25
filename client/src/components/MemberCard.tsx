"use client";

interface MemberCardProps {
  className?: string;
}

export default function MemberCard({ className = "" }: MemberCardProps) {
  return (
    <div
      className={`bg-white rounded-xl shadow-lg w-[120px] h-[100px] md:w-[160px] md:h-[120px] lg:w-[200px] lg:h-[150px] flex flex-col items-center justify-center text-black hover:scale-105 transition-transform duration-300 ${className}`}
    >
      <h3 className="font-semibold text-xs md:text-sm lg:text-lg mb-1">
        Code chef
      </h3>
      <p className="text-[10px] md:text-xs lg:text-sm text-gray-600">
        Cook Off
      </p>
    </div>
  );
}
