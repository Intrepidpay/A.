
const fakeShippingData = {
 SH82352287: {
    sender: 'Surprise Giftplug',
    recipient: 'Debra cox',
    contact: '+1(830)992-0290',
    address: '312 ECKHARDT LANE FREDERICKSBURG,TX,78624,USA',
    method: 'Express (2-3 days)',
    status: 'Pending Payment',
    trackingId: 'SH82352287',
    orderSummary: {
      shippingFee: { amount: 350.99, paid: true },
      clearance: { amount: 285.00, paid: false },
      tax: { amount: 23.22, paid: false },
      total: 318.22
    }
   },
  SH82437295: {
    sender: 'Surprise Giftplug',
    recipient: 'Austin Sharp',
    contact: '+1(432)853-6978',
    address: '1405 S COUNTY ROAD 1110 MIDLAND,TX,79706,USA',
    method: 'Express (2-3 days)',
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
    sender: 'Surprise Giftplug',
    recipient: 'Jeffery Jacops',
    contact: '+1(703)980-9043',
    address: '4216 MORNING DRIVE AMARILLO,TX,79108,USA',
    method: 'Express (2-3 days)',
    status: 'Pending Payment',
    trackingId: 'SH86737495',
    orderSummary: {
      shippingFee: { amount: 350.99, paid: true },
      clearance: { amount: 285.00, paid: false },
      tax: { amount: 23.22, paid: false },
      total: 318.22
     }
    },
    SH82152286: {
    sender: 'Surprise Giftplug',
    recipient: 'Linda Finger',
    contact: '+1(210)912-0940',
    address: 'PO BOX 278 D HANIS,TX,78850,USA',
    method: 'Express (2-3 days)',
    status: 'Pending Payment',
    trackingId: 'SH82152286',
    orderSummary: {
      shippingFee: { amount: 350.99, paid: true },
      clearance: { amount: 285.00, paid: false },
      tax: { amount: 23.22, paid: false },
      total: 318.22
    }
  },
    SH82152576: {
    sender: 'Surprise Giftplug',
    recipient: 'Paul Friedrichs',
    contact: '+1(210)617-8061',
    address: '14403 STAR CROSS TRL HELOTES,TX,78023,USA',
    method: 'Express (2-3 days)',
    status: 'Pending Payment',
    trackingId: 'SH82152576',
    orderSummary: {
      shippingFee: { amount: 350.99, paid: true },
      clearance: { amount: 285.00, paid: false },
      tax: { amount: 23.22, paid: false },
      total: 318.22
    }
  },
    SH82153346: {
    sender: 'Surprise Giftplug',
    recipient: 'Tamara Huckaby',
    contact: '+1(432)360-9217',
    address: '1801 W 6TH ST FORT STOCKTON,TX,79735,USA',
    method: 'Express (2-3 days)',
    status: 'Pending Payment',
    trackingId: 'SH82153346',
    orderSummary: {
      shippingFee: { amount: 350.99, paid: true },
      clearance: { amount: 285.00, paid: false },
      tax: { amount: 23.22, paid: false },
      total: 318.22
    }
  }, 
    SH81764286: {
    sender: 'Surprise Giftplug',
    recipient: 'Lovelyn Wharton',
    contact: '+1(830)719-0716',
    address: '404 AGUA VERDE DEL RIO,TX,78840,USA',
    method: 'Express (2-3 days)',
    status: 'Pending Payment',
    trackingId: 'SH81764286',
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
    }, 500);
  });
};
