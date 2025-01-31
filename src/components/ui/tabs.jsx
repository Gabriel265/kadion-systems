import React, { useState } from 'react';

export const Tabs = ({ defaultValue, children }) => {
  const [activeTab, setActiveTab] = useState(defaultValue);

  return (
    <div className="tabs">
      {React.Children.map(children, child => {
        if (child.type === TabsList) {
          return React.cloneElement(child, { activeTab, setActiveTab });
        }
        if (child.type === TabsContent) {
          return React.cloneElement(child, { activeTab });
        }
        return child;
      })}
    </div>
  );
};

export const TabsList = ({ children, activeTab, setActiveTab }) => (
  <div className="flex gap-4 mb-4">
    {React.Children.map(children, child => {
      if (child.type === TabsTrigger) {
        return React.cloneElement(child, { activeTab, setActiveTab });
      }
      return child;
    })}
  </div>
);

export const TabsTrigger = ({ value, children, activeTab, setActiveTab }) => (
  <button
    className={`px-4 py-2 rounded-md ${
      activeTab === value ? 'bg-blue-500 text-white' : 'text-gray-600'
    }`}
    onClick={() => setActiveTab(value)}
  >
    {children}
  </button>
);

export const TabsContent = ({ value, children, activeTab }) => (
  <div className={`tab-content ${activeTab === value ? 'block' : 'hidden'}`}>
    {children}
  </div>
);