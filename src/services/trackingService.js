let mockPackages = [
  {
    trackingNumber: "SH82437295",
    status: "Pending Payment",
    recipient: "Austin Sharp",
    destination: "1405 S COUNTY ROAD 1110 MIDLAND,TX,79706,USA",
    weight: "1.3 kg",
    progress: 78,
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
        status: "onHold",
        coordinates: { lat: 40.0583, lng: -74.4057 },
        isCurrentLocation: true
      }
    ]
  },
  
  {
  trackingNumber: "SH86737495",
    status: "Pending Payment",
    recipient: "Joe Happer",
    destination: "Apt 204, 2-17-46 Dallas Park, Texas 169-0072, United States",
    weight: "800 g",
    progress: 87,
    createdAt: new Date("2025-09-20T23:53:00Z"),
    estimatedDelivery: new Date("2025-09-24T13:00:00Z"),
    history: [
      {
        timestamp: new Date("2025-09-21T20:17:00Z"),
        location: "Amman Warehouse",
        status: "processed",
        coordinates: { lat: 31.9539, lng: 35.9106 },
        isCurrentLocation: false
      },
      {
        timestamp: new Date("2025-09-22T22:37:00Z"),
        location: "Istanbul Warehouse",
        status: "shipped",
        coordinates: { lat: 41.0082, lng: 28.9784 },
        isCurrentLocation: false
      },
      {
        timestamp: new Date("2025-09-24T09:21:33Z"),
        location: "Miyazaki Warehouse",
        status: "onHold",
        coordinates: { lat: 31.9111, lng: 131.4239 },
        isCurrentLocation: true
        }
      ]
     },

      {
    trackingNumber: "SH82497268",
    status: "In Transit",
    recipient: "Steve lyer",
    destination: "Tokyo-to, Shinagawa-ku, Koyama 2-12-5 Room 101, Japan 142-0062",
    weight: "800 g",
    progress: 17,
    createdAt: new Date("2026-09-11T18:33:00Z"),
    estimatedDelivery: new Date("2026-09-13T13:00:00Z"),
    history: [
      {
        timestamp: new Date("2026-09-11T20:17:00Z"),
        location: "Amman Warehouse",
        status: "processed",
        coordinates: { lat: 31.9539, lng: 35.9106 },
        isCurrentLocation: true
      }
    ]
  },
];

export const trackingService = {
  validateTrackingNumber: async (trackingNumber) => {
    const cleanedNumber = trackingNumber.trim().toUpperCase();

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const foundPackage = mockPackages.find(pkg => 
          pkg.trackingNumber.toUpperCase() === cleanedNumber
        );

        if (foundPackage) {
          resolve(foundPackage);
        }
        else reject(new Error('Tracking number not found in our system'));
      }, 600);
    });
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
