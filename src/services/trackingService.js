let mockPackages = [
  {
    trackingNumber: "SH82352287",
    status: "Pending Payment",
    recipient: "Debra cox",
    destination: "312 ECKHARDT LANE FREDERICKSBURG,TX,78624,USA",
    weight: "1.3 kg",
    progress: 67,
    createdAt: new Date("2026-05-17T06:53:00Z"),
    estimatedDelivery: new Date("2026-05-20T13:00:00Z"),
    history: [
      {
        timestamp: new Date("2026-05-17T07:17:00Z"),
        location: "Geneva Warehouse",
        status: "Processed",
        coordinates: { lat: 46.2044, lng: 6.1432 },
        isCurrentLocation: false
      },
      {
        timestamp: new Date("2026-05-18T03:11:00Z"),
        location: "Dingle Warehouse",
        status: "Shipped",
        coordinates: { lat: 52.1409, lng: -10.2640 },
        isCurrentLocation: false
      },
      {
        timestamp: new Date("2026-05-20T13:28:00Z"),
        location: "New Jersey Warehouse",
        status: "Pending Payment",
        coordinates: { lat: 40.0583, lng: -74.4057 },
        isCurrentLocation: true
      }
    ] 
  },
  {
    trackingNumber: "SH82437295",
    status: "Pending Payment",
    recipient: "Austin Sharp",
    destination: "1405 S COUNTY ROAD 1110 MIDLAND,TX,79706,USA",
    weight: "1.3 kg",
    progress: 67,
    createdAt: new Date("2026-05-17T06:53:00Z"),
    estimatedDelivery: new Date("2026-05-20T13:00:00Z"),
    history: [
      {
        timestamp: new Date("2026-05-17T07:17:00Z"),
        location: "Geneva Warehouse",
        status: "Processed",
        coordinates: { lat: 46.2044, lng: 6.1432 },
        isCurrentLocation: false
      },
      {
        timestamp: new Date("2026-05-18T03:11:00Zc"),
        location: "Dingle Warehouse",
        status: "Shipped",
        coordinates: { lat: 52.1409, lng: -10.2640 },
        isCurrentLocation: false
      },
      {
        timestamp: new Date("2026-05-20T13:28:00Z"),
        location: "New Jersey Warehouse",
        status: "Pending Payment",
        coordinates: { lat: 40.0583, lng: -74.4057 },
        isCurrentLocation: true
      }
    ]
  },
  {
    trackingNumber: "SH86737495",
    status: "Pending Payment",
    recipient: "Jeffery Jacops",
    destination: "4216 MORNING DRIVE AMARILLO,TX,79108,USA",
    weight: "1.3 kg",
    progress: 67,
    createdAt: new Date("2026-05-17T06:53:00Z"),
    estimatedDelivery: new Date("2026-05-20T13:00:00Z"),
    history: [
      {
        timestamp: new Date("2026-05-17T07:17:00Z"),
        location: "Geneva Warehouse",
        status: "Processed",
        coordinates: { lat: 46.2044, lng: 6.1432 },
        isCurrentLocation: false
      },
      {
        timestamp: new Date("2026-05-18T03:11:00Z"),
        location: "Dingle Warehouse",
        status: "Shipped",
        coordinates: { lat: 52.1409, lng: -10.2640 },
        isCurrentLocation: false
      },
      {
        timestamp: new Date("2026-05-20T13:28:00Z"),
        location: "New Jersey Warehouse",
        status: "Pending Payment",
        coordinates: { lat: 40.0583, lng: -74.4057 },
        isCurrentLocation: true
      }
    ]
  },
  {
    trackingNumber: "SH82152286",
    status: "Pending Payment",
    recipient: "Linda Finger",
    destination: "PO BOX 278 D HANIS,TX,78850,USA",
    weight: "1.3 kg",
    progress: 67,
    createdAt: new Date("2026-05-17T06:53:00Z"),
    estimatedDelivery: new Date("2026-05-20T13:00:00Z"),
    history: [
      {
        timestamp: new Date("2026-05-17T07:17:00Z"),
        location: "Geneva Warehouse",
        status: "Processed",
        coordinates: { lat: 46.2044, lng: 6.1432 },
        isCurrentLocation: false
      },
      {
        timestamp: new Date("2026-05-18T03:11:00Z"),
        location: "Dingle Warehouse",
        status: "Shipped",
        coordinates: { lat: 52.1409, lng: -10.2640 },
        isCurrentLocation: false
      },
      {
        timestamp: new Date("2026-05-20T13:28:00Z"),
        location: "New Jersey Warehouse",
        status: "Pending Payment",
        coordinates: { lat: 40.0583, lng: -74.4057 },
        isCurrentLocation: true
      }
   ]
  },
  {
    trackingNumber: "SH82152576",
    status: "Pending Payment",
    recipient: "Paul Friedrichs",
    destination: "14403 STAR CROSS TRL HELOTES,TX,78023,USA",
    weight: "1.3 kg",
    progress: 67,
    createdAt: new Date("2026-05-17T06:53:00Z"),
    estimatedDelivery: new Date("2026-05-20T13:00:00Z"),
    history: [
      {
        timestamp: new Date("2026-05-17T07:17:00Z"),
        location: "Geneva Warehouse",
        status: "Processed",
        coordinates: { lat: 46.2044, lng: 6.1432 },
        isCurrentLocation: false
      },
      {
        timestamp: new Date("2026-05-18T03:11:00Z"),
        location: "Dingle Warehouse",
        status: "Shipped",
        coordinates: { lat: 52.1409, lng: -10.2640 },
        isCurrentLocation: false
      },
      {
        timestamp: new Date("2026-05-20T13:28:00Z"),
        location: "New Jersey Warehouse",
        status: "Pending Payment",
        coordinates: { lat: 40.0583, lng: -74.4057 },
        isCurrentLocation: true
      }
   ]
  },
  {
    trackingNumber: "SH82153346",
    status: "Pending Payment",
    recipient: "Tamara Huckaby",
    destination: "1801 W 6TH ST FORT STOCKTON,TX,79735,USA",
    weight: "1.3 kg",
    progress: 67,
    createdAt: new Date("2026-05-17T06:53:00Z"),
    estimatedDelivery: new Date("2026-05-20T13:00:00Z"),
    history: [
      {
        timestamp: new Date("2026-05-17T07:17:00Z"),
        location: "Geneva Warehouse",
        status: "Processed",
        coordinates: { lat: 46.2044, lng: 6.1432 },
        isCurrentLocation: false
      },
      {
        timestamp: new Date("2026-05-18T03:11:00Z"),
        location: "Dingle Warehouse",
        status: "Shipped",
        coordinates: { lat: 52.1409, lng: -10.2640 },
        isCurrentLocation: false
      },
      {
        timestamp: new Date("2026-05-20T13:28:00Z"),
        location: "New Jersey Warehouse",
        status: "Pending Payment",
        coordinates: { lat: 40.0583, lng: -74.4057 },
        isCurrentLocation: true
      }
   ]
  },
  {
    trackingNumber: "SH81764286",
    status: "Pending Payment",
    recipient: "Lovelyn Wharton",
    destination: "404 AGUA VERDE DEL RIO,TX,78840,USA",
    weight: "1.3 kg",
    progress: 67,
    createdAt: new Date("2026-05-17T06:53:00Z"),
    estimatedDelivery: new Date("2026-05-20T13:00:00Z"),
    history: [
      {
        timestamp: new Date("2026-05-17T07:17:00Z"),
        location: "Geneva Warehouse",
        status: "Processed",
        coordinates: { lat: 46.2044, lng: 6.1432 },
        isCurrentLocation: false
      },
      {
        timestamp: new Date("2026-05-18T03:11:00Z"),
        location: "Dingle Warehouse",
        status: "Shipped",
        coordinates: { lat: 52.1409, lng: -10.2640 },
        isCurrentLocation: false
      },
      {
        timestamp: new Date("2026-05-20T13:28:00Z"),
        location: "New Jersey Warehouse",
        status: "Pending Payment",
        coordinates: { lat: 40.0583, lng: -74.4057 },
        isCurrentLocation: true
      }
   ]
  },
];

export const trackingService = {
  validateTrackingNumber: async (trackingNumber) => {
    const cleanedNumber = trackingNumber.trim().toUpperCase();
    
    const foundPackage = mockPackages.find(pkg => 
      pkg.trackingNumber.toUpperCase() === cleanedNumber
    );
    
    if (!foundPackage) {
      throw new Error("Tracking number not found in our system");
    }
    
    return foundPackage;
  },
  
  getAllPackages: async () => {
    return mockPackages;
  },
  
  addNewPackage: async (newPackage) => {
    if (!newPackage.trackingNumber) {
      throw new Error("Tracking number is required");
    }

    const cleanedNumber = newPackage.trackingNumber.trim().toUpperCase();
    
    if (mockPackages.some(pkg => pkg.trackingNumber.toUpperCase() === cleanedNumber)) {
      throw new Error("Tracking number already exists");
    }

    const now = new Date();
    const packageToAdd = {
      ...newPackage,
      trackingNumber: cleanedNumber,
      status: newPackage.status || "Processing",
      progress: newPackage.progress || 0,
      createdAt: now,
      estimatedDelivery: newPackage.estimatedDelivery || new Date(now.getTime() + 5 * 24 * 60 * 60 * 1000),
      history: [
        {
          timestamp: now,
          location: newPackage.origin || "Main Warehouse",
          status: newPackage.status || "Processing",
          coordinates: newPackage.coordinates || { lat: 40.7128, lng: -74.0060 },
          isCurrentLocation: true
        }
      ]
    };

    mockPackages.push(packageToAdd);
    return packageToAdd;
  },

  deletePackage: async (trackingNumber) => {
    const cleanedNumber = trackingNumber.trim().toUpperCase();
    mockPackages = mockPackages.filter(pkg => 
      pkg.trackingNumber.toUpperCase() !== cleanedNumber
    );
    return true;
  },

  updatePackageStatus: async (trackingNumber, newStatus, location, coordinates, progress) => {
    const cleanedNumber = trackingNumber.trim().toUpperCase();
    const pkgIndex = mockPackages.findIndex(pkg => 
      pkg.trackingNumber.toUpperCase() === cleanedNumber
    );
    
    if (pkgIndex === -1) {
      throw new Error("Package not found");
    }

    const now = new Date();
    
    // Mark all previous locations as not current
    mockPackages[pkgIndex].history.forEach(item => {
      item.isCurrentLocation = false;
    });

    // Add new history item marked as current
    mockPackages[pkgIndex].history.push({
      timestamp: now,
      location: location || mockPackages[pkgIndex].history.slice(-1)[0].location,
      status: newStatus,
      coordinates: coordinates || mockPackages[pkgIndex].history.slice(-1)[0].coordinates,
      isCurrentLocation: true
    });

    mockPackages[pkgIndex].status = newStatus;
    
    if (progress !== undefined) {
      mockPackages[pkgIndex].progress = progress;
    }

    return mockPackages[pkgIndex];
  },

  getStatusOptions: () => [
    "Processing",
    "In Transit",
    "Out for Delivery",
    "Delivered",
    "Returned",
    "Cancelled"
  ]
};
