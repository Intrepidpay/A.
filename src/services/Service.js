
const fakeShippingData = {
  SH82437295: {
    sender: 'Surprise Giftplug',
    recipient: 'Austin Sharp',
    contact: '+1(432)853-6978',
    address: '1405 S COUNTY ROAD 1110 MIDLAND,TX,79706,USA',
    method: 'Express (2-3 days)',
    stripe: 'https://buy.stripe.com',
    status: 'Pending Payment',
    trackingId: 'SH82437295',
    orderSummary: {
    shippingFee: { amount: 350.99, paid: true },
    clearance: { amount: 285.00, paid: false },
    tax: { amount: 23.22, paid: false },
    total: 318.22
   }
  },
 
  SH86737495: {
    sender: 'Olivia Tooley',
    recipient: 'Joe Happer',
    contact: '+1 (806) 3558-7843',
    address: 'Apt 204, 2-17-46 Dallas Park, Texas 169-0072, United States',
    method: 'Express (2-3 days)',
    stripe: 'https://buy.stripe.com',
    status: 'Pending Payment',
    trackingId: 'SH86737495',
    orderSummary: {
    shippingFee: { amount: 350.99, paid: true },
    clearance: { amount: 285.00, paid: false },
    tax: { amount: 23.22, paid: false },
    total: 318.22
    },
    SH82497268: {
    sender: 'Olivia Tooley',
    recipient: 'Steve lyer',
    contact: '---',
    address: 'Tokyo-to, Shinagawa-ku, Koyama 2-12-5 Room 101, Japan 142-0062',
    method: 'Express (2-3 days)',
    stripe: '',
    status: 'In Transit',
    trackingId: 'SH82497268',
    orderSummary: {
    shippingFee: { amount: 350.99, paid: true },
    clearance: { amount: 285.00, paid: false },
    tax: { amount: 23.22, paid: false },
    total: 318.22
    }
  }
};

export const getShippingDetails = async (shippingNumber) => {
  // simulate async (could be fetch from API or Firebase etc)
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const details = fakeShippingData[shippingNumber];
      if (details) {
        // Format the total with currency symbol
        const formattedDetails = {
          ...details,
          total: `$${details.orderSummary.total.toFixed(2)}`
        };
        resolve(formattedDetails);
      }
      else reject(new Error('Shipping number not found.'));
    }, 600);
  });
};
