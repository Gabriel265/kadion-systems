export const Card = ({ children, className }) => (
  <div className={`bg-white rounded-lg shadow-md ${className}`}>
    {children}
  </div>
);

export const CardHeader = ({ children }) => (
  <div className="p-6 border-b border-gray-200">
    {children}
  </div>
);

export const CardTitle = ({ children }) => (
  <h3 className="text-xl font-semibold">
    {children}
  </h3>
);

export const CardContent = ({ children }) => (
  <div className="p-6">
    {children}
  </div>
);