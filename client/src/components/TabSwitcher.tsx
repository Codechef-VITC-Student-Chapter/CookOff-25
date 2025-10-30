'use client';

import React from 'react';

interface TabSwitcherProps {
  tabs: string[];
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const TabSwitcher: React.FC<TabSwitcherProps> = ({
  tabs,
  activeTab,
  setActiveTab,
}) => {
  return (
    <div className="flex items-center justify-center gap-2 flex-wrap">
      {tabs.map((tab, index) => (
        <React.Fragment key={tab}>
          <button
            onClick={() => setActiveTab(tab)}
            className={`
              px-6 py-3 text-base font-semibold tracking-wider transition-all duration-200
              ${
                activeTab === tab
                  ? 'text-white border-b-2 border-white'
                  : 'text-gray-400 hover:text-gray-200'
              }
            `}
          >
            {tab}
          </button>
          {index < tabs.length - 1 && (
            <span className="text-gray-600 text-xl">|</span>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default TabSwitcher;