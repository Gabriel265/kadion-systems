export const Tabs = ({ defaultValue, children }) => (
    <div className="tabs" data-default-value={defaultValue}>
      {children}
    </div>
  );
  
  export const TabsList = ({ children }) => (
    <div className="flex gap-4 mb-4">
      {children}
    </div>
  );
  
  export const TabsTrigger = ({ value, children }) => (
    <button className="px-4 py-2 rounded-md" data-value={value}>
      {children}
    </button>
  );
  
  export const TabsContent = ({ value, children }) => (
    <div className="tab-content" data-value={value}>
      {children}
    </div>
  );