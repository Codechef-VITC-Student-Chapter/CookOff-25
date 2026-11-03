import React from 'react';

interface SectionHeaderProps {
  children: React.ReactNode;
  align?: 'left' | 'center' | 'right';
  className?: string;
  subtitle?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
  children,
  align = 'center',
  className = '',
  subtitle,
}) => {
  const alignmentStyles = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  };

  return (
    <div className={`mb-12 ${alignmentStyles[align]} ${className}`}>
      <h2 className="text-4xl md:text-5xl font-cerapro font-medium lg:text-6xl  text-white tracking-wider mb-4">
        {children}
      </h2>
      {subtitle && (
        <p className="text-gray-400 text-lg md:text-xl mt-4 max-w-3xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;

// Example usage:
// <SectionHeader>FAQ'S</SectionHeader>
// <SectionHeader align="left">COUNTDOWN</SectionHeader>
// <SectionHeader subtitle="Learn more about our chapter">ABOUT US</SectionHeader>