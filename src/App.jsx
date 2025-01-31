import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { TabsContent, Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Check, Package, Building2, Rocket, Clock, DollarSign } from 'lucide-react';

const PricingPage = () => {
  const [currency, setCurrency] = useState('MWK');
  const [billingPeriod, setBillingPeriod] = useState('monthly');

    const mainPackages = [
    {
      title: "Startup Accelerator",
      icon: <Rocket className="h-6 w-6 text-blue-500" />,
      price: {
        MWK: { monthly: "350,000", annual: "1,000,000" },
        USD: { monthly: "210", annual: "600" }
      },
      features: [
        "Basic Website Development",
        "1 Year Web Hosting",
        "Domain Registration",
        "Basic IT Support (10 hours/month)",
        "Email Setup (5 accounts)"
      ],
      highlight: false
    },
    {
      title: "Business Growth",
      icon: <Package className="h-6 w-6 text-purple-500" />,
      price: {
        MWK: { monthly: "230,000", annual: "2,500,000" },
        USD: { monthly: "138", annual: "1,500" }
      },
      features: [
        "Professional Website with CMS",
        "Premium Hosting",
        "Network Setup (10 points)",
        "Security Implementation",
        "Monthly IT Support (20 hours)"
      ],
      highlight: true
    },
    {
      title: "Enterprise Solutions",
      icon: <Building2 className="h-6 w-6 text-green-500" />,
      price: {
        MWK: { monthly: "Custom", annual: "5,000,000+" },
        USD: { monthly: "Custom", annual: "3,000+" }
      },
      features: [
        "Custom Software Development",
        "Advanced Security Implementation",
        "Dedicated Support Team",
        "Priority Response Time",
        "Custom Payment Structure"
      ],
      highlight: false
    }
  ];

    const services = {
    web: [
      { name: "Basic Website", mwk: "500,000", usd: "300", duration: "2-3 weeks" },
      { name: "Professional", mwk: "1,500,000", usd: "900", duration: "4-6 weeks" },
      { name: "E-commerce", mwk: "2,500,000", usd: "1,500", duration: "6-8 weeks" }
    ],
    mobile: [
      { name: "Basic App", mwk: "1,000,000", usd: "600", duration: "4-6 weeks" },
      { name: "Professional", mwk: "2,000,000", usd: "1,200", duration: "8-10 weeks" },
      { name: "Enterprise", mwk: "3,000,000+", usd: "1,800+", duration: "Custom" }
    ],
    infrastructure: [
      { name: "Basic Hosting", mwk: "15,000", usd: "9", period: "Monthly" },
      { name: "VPS Hosting", mwk: "50,000", usd: "30", period: "Monthly" },
      { name: "IT Support", mwk: "150,000", usd: "90", period: "Monthly" }
    ]
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4">
        {/* ... (your header and currency/billing period toggle) */}
             <div className="text-center mb-12">
         <div className="bg-blue-500 text-white p-4">
           Tailwind CSS is working!
         </div>
           <h1 className="text-4xl font-bold text-gray-900 mb-4">
             Transparent Pricing for Every Business
           </h1>
           <p className="text-xl text-gray-600">
             Flexible solutions that scale with your needs
           </p>

           <div className="flex justify-center gap-4 mt-8">
             <div className="bg-white rounded-lg p-2 shadow-sm">
               <button
                 onClick={() => setCurrency('MWK')}
                 className={`px-4 py-2 rounded-md ${
                   currency === 'MWK' ? 'bg-blue-500 text-white' : 'text-gray-600'
                 }`}
               >
                 MWK
               </button>
               <button
                 onClick={() => setCurrency('USD')}
                 className={`px-4 py-2 rounded-md ${
                   currency === 'USD' ? 'bg-blue-500 text-white' : 'text-gray-600'
                 }`}
               >
                 USD
               </button>
             </div>
             <div className="bg-white rounded-lg p-2 shadow-sm">
               <button
                 onClick={() => setBillingPeriod('monthly')}
                 className={`px-4 py-2 rounded-md ${
                   billingPeriod === 'monthly' ? 'bg-blue-500 text-white' : 'text-gray-600'
                 }`}
               >
                 Monthly
               </button>
               <button
                 onClick={() => setBillingPeriod('annual')}
                 className={`px-4 py-2 rounded-md ${
                   billingPeriod === 'annual' ? 'bg-blue-500 text-white' : 'text-gray-600'
                 }`}
               >
                 Annual
               </button>
             </div>
           </div>
         </div>

        {/* Main Packages */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {mainPackages.map((pkg, index) => (
            <Card key={index} className={`relative ${pkg.highlight ? 'border-blue-500 border-2' : ''}`}>
              {/* ... (your card content) */}
              {pkg.highlight && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white px-4 py-1 rounded-full text-sm">
                  Most Popular
                </div>
              )}
              <CardHeader>
                <div className="flex items-center gap-4">
                  {pkg.icon}
                  <CardTitle>{pkg.title}</CardTitle>
                </div>
                <div className="mt-4">
                  <span className="text-3xl font-bold">
                    {currency === 'MWK' ? 'MWK ' : '$'}
                    {pkg.price[currency][billingPeriod]}
                  </span>
                  {billingPeriod === 'monthly' && <span className="text-gray-500">/month</span>}
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <Check className="h-5 w-5 text-green-500" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Detailed Services */}
        <Tabs defaultValue="web">
          <TabsList>
            <TabsTrigger value="web">Web Development</TabsTrigger>
            <TabsTrigger value="mobile">Mobile Development</TabsTrigger>
            <TabsTrigger value="infrastructure">Infrastructure</TabsTrigger>
          </TabsList>

          <TabsContent value="web">
            <div className="grid md:grid-cols-3 gap-8">
              {services.web.map((service, index) => (
                <Card key={index}>
                  {/* ... (your card content) */}
                     <CardHeader>
                       <CardTitle className="text-lg">{service.name}</CardTitle>
                     </CardHeader>
                     <CardContent>
                       <div className="mb-4">
                         <div className="text-2xl font-bold">
                           {currency === 'MWK' ? `MWK ${service.mwk}` : `$${service.usd}`}
                         </div>
                         {service.period && (
                          <div className="text-gray-500">per {service.period.toLowerCase()}</div>
                        )}
                      </div>
                      {service.duration && (
                        <div className="flex items-center gap-2 text-gray-600">
                          <Clock className="h-4 w-4" />
                          <span>{service.duration}</span>
                        </div>
                      )}
                    </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="mobile">
            <div className="grid md:grid-cols-3 gap-8">
              {services.mobile.map((service, index) => (
                <Card key={index}>
                  {/* ... (your card content) */}
                  
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="infrastructure">
            <div className="grid md:grid-cols-3 gap-8">
              {services.infrastructure.map((service, index) => (
                <Card key={index}>
                  {/* ... (your card content) */}
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* Payment Plans */}
        <div className="mt-16">
          {/* ... (your payment plans content) */}
        </div>
      </div>
    </div>
  );
};

export default PricingPage;



// import React, { useState } from 'react';
// import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
// import { TabsContent, Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
// import { Check, Package, Building2, Rocket, Clock, DollarSign } from 'lucide-react';

// const PricingPage = () => {
//   const [currency, setCurrency] = useState('MWK');
//   const [billingPeriod, setBillingPeriod] = useState('monthly');

//   const mainPackages = [
//     {
//       title: "Startup Accelerator",
//       icon: <Rocket className="h-6 w-6 text-blue-500" />,
//       price: {
//         MWK: { monthly: "350,000", annual: "1,000,000" },
//         USD: { monthly: "210", annual: "600" }
//       },
//       features: [
//         "Basic Website Development",
//         "1 Year Web Hosting",
//         "Domain Registration",
//         "Basic IT Support (10 hours/month)",
//         "Email Setup (5 accounts)"
//       ],
//       highlight: false
//     },
//     {
//       title: "Business Growth",
//       icon: <Package className="h-6 w-6 text-purple-500" />,
//       price: {
//         MWK: { monthly: "230,000", annual: "2,500,000" },
//         USD: { monthly: "138", annual: "1,500" }
//       },
//       features: [
//         "Professional Website with CMS",
//         "Premium Hosting",
//         "Network Setup (10 points)",
//         "Security Implementation",
//         "Monthly IT Support (20 hours)"
//       ],
//       highlight: true
//     },
//     {
//       title: "Enterprise Solutions",
//       icon: <Building2 className="h-6 w-6 text-green-500" />,
//       price: {
//         MWK: { monthly: "Custom", annual: "5,000,000+" },
//         USD: { monthly: "Custom", annual: "3,000+" }
//       },
//       features: [
//         "Custom Software Development",
//         "Advanced Security Implementation",
//         "Dedicated Support Team",
//         "Priority Response Time",
//         "Custom Payment Structure"
//       ],
//       highlight: false
//     }
//   ];

//   const services = {
//     web: [
//       { name: "Basic Website", mwk: "500,000", usd: "300", duration: "2-3 weeks" },
//       { name: "Professional", mwk: "1,500,000", usd: "900", duration: "4-6 weeks" },
//       { name: "E-commerce", mwk: "2,500,000", usd: "1,500", duration: "6-8 weeks" }
//     ],
//     mobile: [
//       { name: "Basic App", mwk: "1,000,000", usd: "600", duration: "4-6 weeks" },
//       { name: "Professional", mwk: "2,000,000", usd: "1,200", duration: "8-10 weeks" },
//       { name: "Enterprise", mwk: "3,000,000+", usd: "1,800+", duration: "Custom" }
//     ],
//     infrastructure: [
//       { name: "Basic Hosting", mwk: "15,000", usd: "9", period: "Monthly" },
//       { name: "VPS Hosting", mwk: "50,000", usd: "30", period: "Monthly" },
//       { name: "IT Support", mwk: "150,000", usd: "90", period: "Monthly" }
//     ]
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-12">
//       <div className="max-w-7xl mx-auto px-4">
//         <div className="text-center mb-12">
//         <div className="bg-blue-500 text-white p-4">
//           Tailwind CSS is working!
//         </div>
//           <h1 className="text-4xl font-bold text-gray-900 mb-4">
//             Transparent Pricing for Every Business
//           </h1>
//           <p className="text-xl text-gray-600">
//             Flexible solutions that scale with your needs
//           </p>

//           <div className="flex justify-center gap-4 mt-8">
//             <div className="bg-white rounded-lg p-2 shadow-sm">
//               <button
//                 onClick={() => setCurrency('MWK')}
//                 className={`px-4 py-2 rounded-md ${
//                   currency === 'MWK' ? 'bg-blue-500 text-white' : 'text-gray-600'
//                 }`}
//               >
//                 MWK
//               </button>
//               <button
//                 onClick={() => setCurrency('USD')}
//                 className={`px-4 py-2 rounded-md ${
//                   currency === 'USD' ? 'bg-blue-500 text-white' : 'text-gray-600'
//                 }`}
//               >
//                 USD
//               </button>
//             </div>

//             <div className="bg-white rounded-lg p-2 shadow-sm">
//               <button
//                 onClick={() => setBillingPeriod('monthly')}
//                 className={`px-4 py-2 rounded-md ${
//                   billingPeriod === 'monthly' ? 'bg-blue-500 text-white' : 'text-gray-600'
//                 }`}
//               >
//                 Monthly
//               </button>
//               <button
//                 onClick={() => setBillingPeriod('annual')}
//                 className={`px-4 py-2 rounded-md ${
//                   billingPeriod === 'annual' ? 'bg-blue-500 text-white' : 'text-gray-600'
//                 }`}
//               >
//                 Annual
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Main Packages */}
//         <div className="grid md:grid-cols-3 gap-8 mb-16">
//           {mainPackages.map((pkg, index) => (
//             <Card key={index} className={`relative ${pkg.highlight ? 'border-blue-500 border-2' : ''}`}>
//               {pkg.highlight && (
//                 <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white px-4 py-1 rounded-full text-sm">
//                   Most Popular
//                 </div>
//               )}
//               <CardHeader>
//                 <div className="flex items-center gap-4">
//                   {pkg.icon}
//                   <CardTitle>{pkg.title}</CardTitle>
//                 </div>
//                 <div className="mt-4">
//                   <span className="text-3xl font-bold">
//                     {currency === 'MWK' ? 'MWK ' : '$'}
//                     {pkg.price[currency][billingPeriod]}
//                   </span>
//                   {billingPeriod === 'monthly' && <span className="text-gray-500">/month</span>}
//                 </div>
//               </CardHeader>
//               <CardContent>
//                 <ul className="space-y-3">
//                   {pkg.features.map((feature, idx) => (
//                     <li key={idx} className="flex items-center gap-2">
//                       <Check className="h-5 w-5 text-green-500" />
//                       <span>{feature}</span>
//                     </li>
//                   ))}
//                 </ul>
//               </CardContent>
//             </Card>
//           ))}
//         </div>

//         {/* Detailed Services */}
//         <Tabs defaultValue="web" className="mt-12">
//           <TabsList className="flex justify-center mb-8">
//             <TabsTrigger value="web">Web Development</TabsTrigger>
//             <TabsTrigger value="mobile">Mobile Development</TabsTrigger>
//             <TabsTrigger value="infrastructure">Infrastructure</TabsTrigger>
//           </TabsList>

//           {Object.entries(services).map(([key, items]) => (
//             <TabsContent value={key} key={key}>
//               <div className="grid md:grid-cols-3 gap-8">
//                 {items.map((service, index) => (
//                   <Card key={index}>
//                     <CardHeader>
//                       <CardTitle className="text-lg">{service.name}</CardTitle>
//                     </CardHeader>
//                     <CardContent>
//                       <div className="mb-4">
//                         <div className="text-2xl font-bold">
//                           {currency === 'MWK' ? `MWK ${service.mwk}` : `$${service.usd}`}
//                         </div>
//                         {service.period && (
//                           <div className="text-gray-500">per {service.period.toLowerCase()}</div>
//                         )}
//                       </div>
//                       {service.duration && (
//                         <div className="flex items-center gap-2 text-gray-600">
//                           <Clock className="h-4 w-4" />
//                           <span>{service.duration}</span>
//                         </div>
//                       )}
//                     </CardContent>
//                   </Card>
//                 ))}
//               </div>
//             </TabsContent>
//           ))}
//         </Tabs>

//         {/* Payment Plans */}
//         <div className="mt-16">
//           <h2 className="text-2xl font-bold text-center mb-8">Flexible Payment Plans</h2>
//           <div className="grid md:grid-cols-2 gap-8">
//             <Card>
//               <CardHeader>
//                 <CardTitle>Startup Payment Options</CardTitle>
//               </CardHeader>
//               <CardContent>
//                 <ul className="space-y-3">
//                   <li className="flex items-center gap-2">
//                     <DollarSign className="h-5 w-5 text-green-500" />
//                     <span>30% down payment</span>
//                   </li>
//                   <li className="flex items-center gap-2">
//                     <DollarSign className="h-5 w-5 text-green-500" />
//                     <span>6-12 months payment plans</span>
//                   </li>
//                   <li className="flex items-center gap-2">
//                     <DollarSign className="h-5 w-5 text-green-500" />
//                     <span>No interest for first 6 months</span>
//                   </li>
//                 </ul>
//               </CardContent>
//             </Card>
//             <Card>
//               <CardHeader>
//                 <CardTitle>Enterprise Payment Options</CardTitle>
//               </CardHeader>
//               <CardContent>
//                 <ul className="space-y-3">
//                   <li className="flex items-center gap-2">
//                     <DollarSign className="h-5 w-5 text-green-500" />
//                     <span>Quarterly or annual billing</span>
//                   </li>
//                   <li className="flex items-center gap-2">
//                     <DollarSign className="h-5 w-5 text-green-500" />
//                     <span>Volume discounts available</span>
//                   </li>
//                   <li className="flex items-center gap-2">
//                     <DollarSign className="h-5 w-5 text-green-500" />
//                     <span>Customized payment schedules</span>
//                   </li>
//                 </ul>
//               </CardContent>
//             </Card>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PricingPage;