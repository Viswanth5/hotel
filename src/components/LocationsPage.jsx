import React, { useState, useMemo, useCallback, useEffect } from 'react';

/* ──────────────────────────────────────────────
   BRANCHES DATA — 16 Verified Restaurant Branches
   ────────────────────────────────────────────── */
export const restaurantBranches = [
  {
    id: 'mattuthavani',
    name: 'Mattuthavani',
    tamil: 'மாட்டுத்தாவணி',
    address: 'Near MGR Integrated Bus Terminus, Mattuthavani, Madurai 625007',
    hours: '6:00 AM – 11:00 PM',
    phone: '0452 2589333',
    phoneRaw: 'tel:04522589333',
    facilities: ['AC Dining', 'Pure Vegetarian', 'Car Parking', 'Takeaway'],
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80',
    mapUrl: 'https://maps.google.com/?q=Hotel+Temple+City+Mattuthavani+Madurai',
    corridor: 'Madurai City',
    lat: 9.9482,
    lng: 78.1561,
  },
  {
    id: 'uthangudi',
    name: 'Uthangudi',
    tamil: 'உத்தங்குடி',
    address: 'Madurai-Melur Main Road, Opp. Meenakshi Mission Hospital, Uthangudi, Madurai 625107',
    hours: '6:30 AM – 11:00 PM',
    phone: '0452 2422333',
    phoneRaw: 'tel:04522422333',
    facilities: ['AC Family Dining', 'Lodging & Stays', 'Ample Parking', 'Sweets & Bakes'],
    image: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=800&q=80',
    mapUrl: 'https://maps.google.com/?q=Hotel+Temple+City+Uthangudi+Madurai',
    corridor: 'Madurai City',
    lat: 9.9612,
    lng: 78.1685,
  },
  {
    id: 'bibikulam',
    name: 'Bibikulam',
    tamil: 'பீபிகுளம்',
    address: 'V.P. Rathinasamy Nadar Road, Opp. Reliance Super, Bibikulam, Madurai 625002',
    hours: '7:00 AM – 10:30 PM',
    phone: '6384899333',
    phoneRaw: 'tel:6384899333',
    facilities: ['AC Dining', 'Traditional Tiffin', 'Quick Service', 'Takeaway'],
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80',
    mapUrl: 'https://maps.google.com/?q=Hotel+Temple+City+Bibikulam+Madurai',
    corridor: 'Madurai City',
    lat: 9.9389,
    lng: 78.1324,
  },
  {
    id: 'ayyankottai',
    name: 'NH 44 — Ayyankottai',
    tamil: 'அய்யன்கோட்டை (NH 44)',
    address: 'NH 44 Madurai-Dindigul Highway, Ayyankottai, Dindigul-Madurai Border 624211',
    hours: '24 Hours Open',
    phone: '6384899333',
    phoneRaw: 'tel:6384899333',
    facilities: ['Highway Food Court', 'Petrol Pump', 'EV Fast Charging', 'Traveller Restrooms', 'Parking'],
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80',
    mapUrl: 'https://maps.google.com/?q=Hotel+Temple+City+Ayyankottai+NH44',
    corridor: 'NH 44 Highway',
    lat: 10.0824,
    lng: 77.9421,
  },
  {
    id: 'vadipatti',
    name: 'NH 44 — Vadipatti',
    tamil: 'வாடிப்பட்டி (NH 44)',
    address: 'NH 44 Highway, Near Vadipatti Toll, Vadipatti, Madurai 625218',
    hours: '6:00 AM – 11:30 PM',
    phone: '6384899333',
    phoneRaw: 'tel:6384899333',
    facilities: ['Box Stays', 'Swimming Pool', 'Banquet Hall', 'EV Charging', 'Garden Dining'],
    image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=800&q=80',
    mapUrl: 'https://maps.google.com/?q=Hotel+Temple+City+Vadipatti+NH44',
    corridor: 'NH 44 Highway',
    lat: 10.0543,
    lng: 77.9865,
  },
  {
    id: 'surveyor-colony',
    name: 'Surveyor Colony',
    tamil: 'சர்வேயர் காலனி',
    address: 'Plot No. 43, 120 Feet Main Road, Surveyor Colony, Madurai 625007',
    hours: '7:00 AM – 10:30 PM',
    phone: '6384899333',
    phoneRaw: 'tel:6384899333',
    facilities: ['AC Dining', 'Boutique Stays', 'Party Hall', 'EV Charging'],
    image: 'https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?auto=format&fit=crop&w=800&q=80',
    mapUrl: 'https://maps.google.com/?q=Hotel+Temple+City+Surveyor+Colony+Madurai',
    corridor: 'Madurai City',
    lat: 9.9535,
    lng: 78.1611,
  },
  {
    id: 'melur',
    name: 'NH 38 — Melur',
    tamil: 'மேலூர் (NH 38)',
    address: 'NH 38 Madurai-Trichy Highway, Near Melur By-Pass, Melur 625106',
    hours: '6:00 AM – 11:00 PM',
    phone: '6384899333',
    phoneRaw: 'tel:6384899333',
    facilities: ['Highway Dining', 'Comfort Stays', 'Ample Car Parking', 'Bakes & Coffee'],
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80',
    mapUrl: 'https://maps.google.com/?q=Hotel+Temple+City+Melur+NH38',
    corridor: 'NH 38 Highway',
    lat: 10.0465,
    lng: 78.3378,
  },
  {
    id: 'pandikovil',
    name: 'Pandikovil Junction',
    tamil: 'பாண்டிகோவில்',
    address: 'Ring Road, Seeman Nagar, Near Pandi Kovil Junction, Madurai 625020',
    hours: '6:30 AM – 11:00 PM',
    phone: '6384899333',
    phoneRaw: 'tel:6384899333',
    facilities: ['Family AC Dining', 'Large Parking', 'South Indian Thali', 'Takeaway'],
    image: 'https://images.unsplash.com/photo-1525610553991-2bede1a236e2?auto=format&fit=crop&w=800&q=80',
    mapUrl: 'https://maps.google.com/?q=Hotel+Temple+City+Pandikovil+Madurai',
    corridor: 'Madurai City',
    lat: 9.9248,
    lng: 78.1725,
  },
  {
    id: 'sivarakottai',
    name: 'NH 44 — Sivarakottai',
    tamil: 'சிவராக்கோட்டை (NH 44)',
    address: 'NH 44 Madurai-Tirunelveli Highway, Sivarakottai, Near Kalligudi 625706',
    hours: '6:00 AM – 11:30 PM',
    phone: '6384899333',
    phoneRaw: 'tel:6384899333',
    facilities: ['Highway Food Court', 'EV Fast Charging (60kW)', 'Clean Restrooms', 'Play Area'],
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80',
    mapUrl: 'https://maps.google.com/?q=Hotel+Temple+City+Sivarakottai+NH44',
    corridor: 'NH 44 Highway',
    lat: 9.6892,
    lng: 77.9621,
  },
  {
    id: 'alampatti',
    name: 'NH 744 — Alampatti',
    tamil: 'ஆலம்பட்டி (NH 744)',
    address: 'NH 744 Madurai-Tenkasi Highway, Alampatti Junction, Thirumangalam 625706',
    hours: '6:30 AM – 11:00 PM',
    phone: '6384899333',
    phoneRaw: 'tel:6384899333',
    facilities: ['Highway Dining', 'EV Charging', 'Fuel Station Nearby', 'Tea & Refreshments'],
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80',
    mapUrl: 'https://maps.google.com/?q=Hotel+Temple+City+Alampatti+NH744',
    corridor: 'NH 744 Highway',
    lat: 9.8251,
    lng: 77.9892,
  },
  {
    id: 'periyar',
    name: 'Periyar Bus Stand',
    tamil: 'பெரியார் பேருந்து நிலையம்',
    address: 'Opposite Periyar Central Bus Stand, Madurai Junction Area, Madurai 625001',
    hours: '6:00 AM – 11:00 PM',
    phone: '6384899333',
    phoneRaw: 'tel:6384899333',
    facilities: ['Quick Dining', 'AC Family Hall', 'Transit Rooms', 'Walkable to Railway Stn'],
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80',
    mapUrl: 'https://maps.google.com/?q=Hotel+Temple+City+Periyar+Bus+Stand+Madurai',
    corridor: 'Madurai City',
    lat: 9.9175,
    lng: 78.1147,
  },
  {
    id: 'batlagundu',
    name: 'Batlagundu By-Pass',
    tamil: 'வத்தலகுண்டு பைபாஸ்',
    address: 'Dindigul-Theni-Kodaikanal Highway, Batlagundu By-Pass 624202',
    hours: '6:00 AM – 11:00 PM',
    phone: '6384899333',
    phoneRaw: 'tel:6384899333',
    facilities: ['Kodaikanal Gateway Stop', 'EV Charging', 'Travel Oasis', 'Ample Parking'],
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80',
    mapUrl: 'https://maps.google.com/?q=Hotel+Temple+City+Batlagundu+By-Pass',
    corridor: 'Highway Corridor',
    lat: 10.1585,
    lng: 77.7612,
  },
  {
    id: 'teppakulam',
    name: 'Teppakulam',
    tamil: 'தெப்பக்குளம்',
    address: 'Near Vandiyur Mariamman Teppakulam, Madurai 625009',
    hours: '7:00 AM – 10:30 PM',
    phone: '6384899333',
    phoneRaw: 'tel:6384899333',
    facilities: ['Heritage View Dining', 'Traditional Breakfast', 'Sweet Stall', 'Takeaway'],
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80',
    mapUrl: 'https://maps.google.com/?q=Hotel+Temple+City+Teppakulam+Madurai',
    corridor: 'Madurai City',
    lat: 9.9142,
    lng: 78.1481,
  },
  {
    id: 'vandiyur',
    name: 'Vandiyur Toll Gate',
    tamil: 'வந்தியூர் டோல்கேட்',
    address: 'Ring Road, Near Vandiyur Toll Plaza, Madurai 625020',
    hours: '6:30 AM – 11:00 PM',
    phone: '6384899333',
    phoneRaw: 'tel:6384899333',
    facilities: ['Ring Road Stop', 'AC Dining', 'Refreshment Point', 'Easy Parking'],
    image: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=800&q=80',
    mapUrl: 'https://maps.google.com/?q=Hotel+Temple+City+Vandiyur+Madurai',
    corridor: 'Madurai City',
    lat: 9.9082,
    lng: 78.1634,
  },
  {
    id: 'karungalakudi',
    name: 'NH 38 — Karungalakudi',
    tamil: 'கருங்காலக்குடி (NH 38)',
    address: 'NH 38 Madurai-Trichy Highway, Karungalakudi Toll Gate, Madurai 625101',
    hours: '6:00 AM – Midnight',
    phone: '6384899333',
    phoneRaw: 'tel:6384899333',
    facilities: ['Highway Traveller Oasis', 'Spacious Food Court', 'Clean Restrooms', 'Parking'],
    image: 'https://images.unsplash.com/photo-1525610553991-2bede1a236e2?auto=format&fit=crop&w=800&q=80',
    mapUrl: 'https://maps.google.com/?q=Hotel+Temple+City+Karungalakudi+NH38',
    corridor: 'NH 38 Highway',
    lat: 10.2185,
    lng: 78.4412,
  },
  {
    id: 'keeladi',
    name: 'NH 87 — Keeladi',
    tamil: 'கீழடி (NH 87)',
    address: 'NH 87 Madurai-Rameswaram Highway, Near Keeladi Heritage Museum, Silaiman / Keeladi 630611',
    hours: '7:00 AM – 10:30 PM',
    phone: '6384899333',
    phoneRaw: 'tel:6384899333',
    facilities: ['Heritage Museum Gateway', 'Traditional Meals', 'Family Dining', 'Ample Parking'],
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80',
    mapUrl: 'https://maps.google.com/?q=Hotel+Temple+City+Keeladi+Madurai',
    corridor: 'NH 87 Highway',
    lat: 9.8654,
    lng: 78.1925,
  },
];

/* ──────────────────────────────────────────────
   HOTEL STAYS DATA — 6 Verified Accommodation Locations
   ────────────────────────────────────────────── */
export const hotelStays = [
  {
    id: 'stay-uthangudi',
    name: 'Temple City Residency & Suites — Uthangudi',
    locationName: 'Uthangudi, Madurai',
    tamil: 'உத்தங்குடி ரெசிடென்சி',
    address: 'Madurai-Melur Road, Opp. Meenakshi Mission Hospital, Uthangudi 625107',
    rates: 'From ₹1,800 / night · Subject to availability',
    roomTypes: 'Deluxe AC, Executive Suites, Family 4-Bed Rooms',
    amenities: ['Free High-Speed Wi-Fi', '24/7 Room Service', 'Doctor on Call', 'Pure Veg Restaurant On-site', 'Elevator Access'],
    facilities: ['Banquet & Conference Hall', 'Free Valet Parking', 'Travel Desk'],
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80',
    phone: '6384899333',
    mapUrl: 'https://maps.google.com/?q=Temple+City+Residency+Uthangudi+Madurai',
  },
  {
    id: 'stay-ayyankottai',
    name: 'Temple City Highway Transit Inn — Ayyankottai',
    locationName: 'NH 44 — Ayyankottai',
    tamil: 'அய்யன்கோட்டை ஹைவே ஸ்டே',
    address: 'NH 44 Madurai-Dindigul Highway, Ayyankottai 624211',
    rates: 'Transit & Overnight Stays · Direct Enquiry',
    roomTypes: 'Comfort King AC, Twin Highway Transit Rooms',
    amenities: ['Soundproof Highway Glazing', '24-hr Check-in', 'Hot Water', 'In-room Dining'],
    facilities: ['EV Fast Charger Station', 'Travellers Lounge', '24/7 Food Court', 'Secured Parking'],
    image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=800&q=80',
    phone: '6384899333',
    mapUrl: 'https://maps.google.com/?q=Hotel+Temple+City+Ayyankottai+NH44',
  },
  {
    id: 'stay-surveyor',
    name: 'Temple City Executive Rooms — Surveyor Colony',
    locationName: 'Surveyor Colony, Madurai',
    tamil: 'சர்வேயர் காலனி தங்குமிடம்',
    address: 'Plot No. 43, 120 Feet Road, Surveyor Colony, Madurai 625007',
    rates: 'From ₹1,600 / night · Verified Tariffs',
    roomTypes: 'Executive Single AC, Standard Double AC',
    amenities: ['Smart TV with HD Channels', 'High-Speed Wi-Fi', 'Daily Housekeeping', 'Hot Water'],
    facilities: ['Mini Party Hall', 'Pure Veg Restaurant', 'EV Charger', 'CCTV Security'],
    image: 'https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?auto=format&fit=crop&w=800&q=80',
    phone: '6384899333',
    mapUrl: 'https://maps.google.com/?q=Hotel+Temple+City+Surveyor+Colony+Madurai',
  },
  {
    id: 'stay-melur',
    name: 'Temple City Highway Residency — Melur',
    locationName: 'NH 38 — Melur',
    tamil: 'மேலூர் ரெசிடென்சி',
    address: 'NH 38 Madurai-Trichy Highway, Melur By-Pass 625106',
    rates: 'Affordable Highway Accommodations · On Request',
    roomTypes: 'Deluxe AC, Semi-Deluxe, Family Suites',
    amenities: ['Quiet Highway Rooms', 'Air Conditioning', 'Power Backup', '24-hr Security'],
    facilities: ['Greenpark Banquet Hall', 'Highway Restaurant', 'Large Vehicle Parking'],
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80',
    phone: '6384899333',
    mapUrl: 'https://maps.google.com/?q=Hotel+Temple+City+Melur+NH38',
  },
  {
    id: 'stay-periyar',
    name: 'Temple City Central Transit Hotel — Periyar',
    locationName: 'Periyar Bus Stand, Madurai',
    tamil: 'பெரியார் சென்ட்ரல் ஸ்டே',
    address: 'Opp. Periyar Central Bus Stand, Madurai Junction Area 625001',
    rates: 'Budget & Transit Rooms · Prime City Location',
    roomTypes: 'Standard AC, Budget Non-AC, Transit Day-use',
    amenities: ['Walkable to Railway Station', '24-hr Front Desk', 'Luggage Storage', 'Room Service'],
    facilities: ['Express Vegetarian Restaurant', 'City Tour Desk', 'Doctor on Call'],
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80',
    phone: '6384899333',
    mapUrl: 'https://maps.google.com/?q=Hotel+Temple+City+Periyar+Bus+Stand+Madurai',
  },
  {
    id: 'stay-vadipatti',
    name: 'Temple City Box Stays & Resort — Vadipatti',
    locationName: 'NH 44 — Vadipatti',
    tamil: 'வாடிப்பட்டி பாக்ஸ் ஸ்டேஸ்',
    address: 'NH 44 Highway, Near Vadipatti Toll, Vadipatti, Madurai 625218',
    rates: 'Distinctive Container Suites · Advance Reservation',
    roomTypes: 'Eco Box Suites, Farm View Cabins, Family Cottages',
    amenities: ['Full Air Conditioning', 'Private Veranda', 'Scenic Farm Views', 'Artisanal Furnishings'],
    facilities: ['Swimming Pool', 'Open-Air Banquet Lawn', 'Farm Walk', 'Dual-Gun DC EV Charger'],
    image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=800&q=80',
    phone: '6384899333',
    mapUrl: 'https://maps.google.com/?q=Hotel+Temple+City+Vadipatti+NH44',
  },
];

/* ──────────────────────────────────────────────
   FUEL & EV CHARGING DATA — 7 Verified Highway Facilities
   ────────────────────────────────────────────── */
export const fuelEvLocations = [
  {
    id: 'fe-ayyankottai',
    name: 'Ayyankottai — NH 44',
    tamil: 'அய்யன்கோட்டை (NH 44)',
    address: 'NH 44 Madurai-Dindigul Highway, Ayyankottai 624211',
    services: [
      { type: 'petrol', label: 'Bharat Petroleum Petrol Pump' },
      { type: 'ev-car', label: '60kW DC Fast EV Car Charger (CCS2)' },
      { type: 'ev-bike', label: '2-Wheeler EV Fast Point' },
      { type: 'air', label: 'Free Air & Tyre Care' },
    ],
    hours: '24 Hours Open',
    mapUrl: 'https://maps.google.com/?q=Hotel+Temple+City+Ayyankottai+NH44',
  },
  {
    id: 'fe-surveyor',
    name: 'Surveyor Colony',
    tamil: 'சர்வேயர் காலனி',
    address: 'Plot No. 43, 120 Feet Road, Surveyor Colony, Madurai 625007',
    services: [
      { type: 'ev-car', label: 'Fast EV Car Charging Station' },
      { type: 'ev-bike', label: '2-Wheeler Electric Charging' },
      { type: 'dining', label: 'AC Restaurant On-site' },
    ],
    hours: '7:00 AM – 11:00 PM',
    mapUrl: 'https://maps.google.com/?q=Hotel+Temple+City+Surveyor+Colony+Madurai',
  },
  {
    id: 'fe-vadipatti',
    name: 'Vadipatti — NH 44',
    tamil: 'வாடிப்பட்டி (NH 44)',
    address: 'NH 44 Highway, Near Vadipatti Toll, Vadipatti 625218',
    services: [
      { type: 'ev-car', label: 'Dual-Gun DC Fast EV Charger' },
      { type: 'ev-bike', label: 'EV Bike Charging Sockets' },
      { type: 'petrol', label: 'Fuel Station Adjacent' },
      { type: 'dining', label: 'Box Stays & Resort' },
    ],
    hours: '24/7 EV Station Access',
    mapUrl: 'https://maps.google.com/?q=Hotel+Temple+City+Vadipatti+NH44',
  },
  {
    id: 'fe-navinipatti',
    name: 'Navinipatti Junction — NH 38',
    tamil: 'நவினிப்பட்டி ஜங்ஷன் (NH 38)',
    address: 'NH 38 Madurai-Trichy Highway, Navinipatti Junction, Melur 625106',
    services: [
      { type: 'petrol', label: 'Highway Fuel Station' },
      { type: 'ev-car', label: 'Fast EV Car Charger' },
      { type: 'air', label: 'Air & Vehicle Check' },
    ],
    hours: '24 Hours Open',
    mapUrl: 'https://maps.google.com/?q=Hotel+Temple+City+Melur+NH38',
  },
  {
    id: 'fe-sivarakottai',
    name: 'Sivarakottai — NH 44',
    tamil: 'சிவராக்கோட்டை (NH 44)',
    address: 'NH 44 Madurai-Tirunelveli Highway, Sivarakottai 625706',
    services: [
      { type: 'ev-car', label: '60kW Dual DC Fast EV Charger' },
      { type: 'ev-bike', label: '2-Wheeler EV Charging' },
      { type: 'dining', label: 'Highway Pure Veg Food Court' },
      { type: 'rest', label: 'Clean Restrooms & Refreshments' },
    ],
    hours: '24 Hours Highway Support',
    mapUrl: 'https://maps.google.com/?q=Hotel+Temple+City+Sivarakottai+NH44',
  },
  {
    id: 'fe-alampatti',
    name: 'Alampatti — NH 744',
    tamil: 'ஆலம்பட்டி (NH 744)',
    address: 'NH 744 Madurai-Tenkasi Highway, Alampatti Junction, Thirumangalam 625706',
    services: [
      { type: 'petrol', label: 'Fuel Station' },
      { type: 'ev-car', label: 'High-speed EV Charging Point' },
      { type: 'dining', label: 'Highway Dining & Tea Point' },
    ],
    hours: '6:00 AM – Midnight',
    mapUrl: 'https://maps.google.com/?q=Hotel+Temple+City+Alampatti+NH744',
  },
  {
    id: 'fe-batlagundu',
    name: 'Batlagundu By-Pass',
    tamil: 'வத்தலகுண்டு பைபாஸ்',
    address: 'Dindigul-Theni-Kodaikanal Highway, Batlagundu By-Pass 624202',
    services: [
      { type: 'ev-car', label: 'Kodaikanal Travellers EV Fast Charger' },
      { type: 'petrol', label: 'Highway Petrol Station Nearby' },
      { type: 'dining', label: 'Fresh Coffee & South Indian Tiffin' },
    ],
    hours: '6:00 AM – 11:30 PM',
    mapUrl: 'https://maps.google.com/?q=Hotel+Temple+City+Batlagundu+By-Pass',
  },
];

export default function LocationsPage({ onNavigate }) {
  const [search, setSearch] = useState('');
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedMapBranch, setSelectedMapBranch] = useState(restaurantBranches[0]);

  const q = search.trim().toLowerCase();

  // Filtered branches
  const filteredRestaurants = useMemo(() => {
    if (activeFilter === 'stays' || activeFilter === 'fuel-ev') return [];
    if (!q) return restaurantBranches;
    return restaurantBranches.filter((b) =>
      b.name.toLowerCase().includes(q) ||
      b.tamil.toLowerCase().includes(q) ||
      b.address.toLowerCase().includes(q) ||
      b.corridor.toLowerCase().includes(q) ||
      b.facilities.some((f) => f.toLowerCase().includes(q))
    );
  }, [q, activeFilter]);

  const filteredStays = useMemo(() => {
    if (activeFilter === 'restaurants' || activeFilter === 'fuel-ev') return [];
    if (!q) return hotelStays;
    return hotelStays.filter((s) =>
      s.name.toLowerCase().includes(q) ||
      s.locationName.toLowerCase().includes(q) ||
      s.address.toLowerCase().includes(q) ||
      s.roomTypes.toLowerCase().includes(q) ||
      s.amenities.some((a) => a.toLowerCase().includes(q)) ||
      s.facilities.some((f) => f.toLowerCase().includes(q))
    );
  }, [q, activeFilter]);

  const filteredFuelEv = useMemo(() => {
    if (activeFilter === 'restaurants' || activeFilter === 'stays') return [];
    if (!q) return fuelEvLocations;
    return fuelEvLocations.filter((f) =>
      f.name.toLowerCase().includes(q) ||
      f.address.toLowerCase().includes(q) ||
      f.services.some((s) => s.label.toLowerCase().includes(q))
    );
  }, [q, activeFilter]);

  const filteredCount = filteredRestaurants.length + filteredStays.length + filteredFuelEv.length;

  useEffect(() => {
    const makeVisible = () => {
      const reveals = document.querySelectorAll(
        '#locations-hero [data-reveal], #locations-search [data-reveal], #restaurants-section [data-reveal], #stays-section [data-reveal], #box-stays-section [data-reveal], #fuel-section [data-reveal], #map-section [data-reveal], #locations-cta [data-reveal], .location-card'
      );
      reveals.forEach((el) => el.classList.add('is-visible'));
    };
    makeVisible();
    const t1 = setTimeout(makeVisible, 50);
    const t2 = setTimeout(makeVisible, 250);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [activeFilter, search]);

  const scrollToSection = useCallback((e, sectionId) => {
    if (e && e.preventDefault) e.preventDefault();
    const target = document.querySelector(sectionId);
    if (target) {
      if (window.__lenis) {
        window.__lenis.scrollTo(target, { offset: -70, duration: 0.85 });
      } else {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, []);

  return (
    <>
      {/* ════════════ 1. LOCATIONS HERO SECTION ════════════ */}
      <section className="hero hero--dark-blue" id="locations-hero">
        <div className="hero__media">
          <img
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=2200&q=80"
            alt="The Temple City Madurai restaurant and locations"
            fetchPriority="high"
          />
        </div>
        <div className="hero__veil"></div>

        <div className="hero__inner container">
          <p className="hero__eyebrow">
            <span className="tamil">எங்கள் கிளைகள்</span>
            <span className="dot" aria-hidden="true"></span>
            <span>OUR LOCATIONS</span>
          </p>
          <h1 className="hero__title">
            <span className="line"><span className="li">Find Your <em>Temple City</em></span></span>
          </h1>
          <p className="hero__sub">
            From the heart of Madurai to destinations along the highway, discover a Temple City location for your next meal, family gathering, or comfortable stay.
          </p>
          <div className="hero__actions">
            <a
              className="btn btn--solid magnetic"
              href="#restaurants-section"
              onClick={(e) => scrollToSection(e, '#restaurants-section')}
            >
              <span>Explore Restaurants</span>
              <span className="btn__arrow" aria-hidden="true">→</span>
            </a>
            <a
              className="btn btn--outline-gold magnetic"
              href="#stays-section"
              onClick={(e) => scrollToSection(e, '#stays-section')}
            >
              <span>Explore Stays</span>
              <span className="btn__arrow" aria-hidden="true">→</span>
            </a>
          </div>
        </div>

        <div className="hero__foot container">
          <span>
            <a
              href="#hero"
              onClick={(e) => onNavigate && onNavigate(e, '#hero')}
              style={{ color: 'var(--gold-soft)', textDecoration: 'none' }}
            >
              Home
            </a>
            {' / '}
            <span style={{ color: 'var(--cream)' }}>Locations</span>
          </span>
          <a
            className="scroll-cue"
            href="#locations-search"
            aria-label="Scroll to search"
            onClick={(e) => scrollToSection(e, '#locations-search')}
          >
            <span className="scroll-cue__line" aria-hidden="true"></span>
            <span>Scroll</span>
          </a>
        </div>
      </section>

      <div className="tile-band tile-band--dark-blue" aria-hidden="true"></div>

      {/* ════════════ 2. LOCATION SEARCH SECTION ════════════ */}
      <section className="section section--cream section--lp" id="locations-search" style={{ paddingBottom: '1rem' }}>
        <div className="container">
          <div className="sec-head" data-reveal>
            <span className="label">
              Find Your Nearest Branch <span className="tamil">கிளை தேர்வு</span>
            </span>
            <span className="rule" aria-hidden="true"></span>
          </div>

          <h2 className="display sec-title" data-reveal style={{ '--d': '.08s', fontSize: 'clamp(1.5rem, 3.2vw, 2.6rem)' }}>
            Your Next Visit <em>Starts Here</em>
          </h2>

          <p
            className="lede"
            data-reveal
            style={{ '--d': '.14s', marginTop: '0.5rem', marginBottom: '1.2rem', fontSize: '0.88rem' }}
          >
            Looking for your favourite dining spot or a comfortable place to stay? Explore our locations and find the one that suits your journey.
          </p>

          {/* Search Field */}
          <div style={{ marginBottom: '1rem' }}>
            <label
              htmlFor="locationsSearch"
              className="label"
              style={{ display: 'block', marginBottom: '.6rem' }}
            >
              Find a branch or highway facility
            </label>
            <div className="menu-search-wrap" style={{ maxWidth: '480px' }}>
              <input
                id="locationsSearch"
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search branches (e.g. Mattuthavani, Vadipatti, NH 44, Stay, EV)…"
                className="menu-search"
                autoComplete="off"
              />
              {search && (
                <button
                  type="button"
                  className="menu-search-clear"
                  onClick={() => setSearch('')}
                  aria-label="Clear search"
                >
                  ✕
                </button>
              )}
            </div>
            {q && (
              <p style={{ marginTop: '.6rem', fontSize: '.84rem', color: 'var(--maroon)' }}>
                Showing {filteredCount} matching destination{filteredCount === 1 ? '' : 's'}
              </p>
            )}
          </div>

          {/* Category Tabs: All Locations, Restaurants, Hotels & Stays, Fuel & EV Charging */}
          <div className="menu__tabs" role="tablist" aria-label="Location categories">
            {[
              { id: 'all', label: 'All Locations', tamil: 'அனைத்து கிளைகள்' },
              { id: 'restaurants', label: 'Restaurants', tamil: 'உணவகங்கள்' },
              { id: 'stays', label: 'Hotels & Stays', tamil: 'தங்குமிடங்கள்' },
              { id: 'fuel-ev', label: 'Fuel & EV Charging', tamil: 'எரிபொருள் & சார்ஜிங்' },
            ].map((cat) => (
              <button
                key={cat.id}
                className={`tab ${activeFilter === cat.id ? 'is-active' : ''}`}
                role="tab"
                aria-selected={activeFilter === cat.id}
                onClick={() => setActiveFilter(cat.id)}
              >
                <span>{cat.label}</span>
                <span className="tamil">{cat.tamil}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════ 3. RESTAURANT LOCATIONS ════════════ */}
      {(activeFilter === 'all' || activeFilter === 'restaurants') && (
        <section className="section section--cream section--lp" id="restaurants-section">
          <div className="container">
            <div className="sec-head" data-reveal>
              <span className="label">
                01 — Restaurants <span className="tamil">உணவகங்கள்</span>
              </span>
              <span className="rule" aria-hidden="true"></span>
            </div>

            <h2 className="display sec-title" data-reveal style={{ '--d': '.08s' }}>
              Discover Our <em>Restaurants</em>
            </h2>

            <p className="lede locations__lede" data-reveal style={{ '--d': '.14s' }}>
              Enjoy authentic South Indian flavours and warm hospitality at our restaurants across Madurai and surrounding destinations.
            </p>

            {filteredRestaurants.length === 0 ? (
              <p style={{ padding: '2rem 0', color: 'rgba(30,18,12,0.7)' }}>
                No restaurants found matching "<strong>{search}</strong>".
              </p>
            ) : (
              <div className="lp-grid">
                {filteredRestaurants.map((b, idx) => (
                  <article
                    key={b.id}
                    className="location-card"
                    data-reveal
                    style={{ '--d': `${((idx % 9) * 0.06).toFixed(2)}s` }}
                  >
                    <div className="location-card__media arch-wrap">
                      <div className="arch">
                        <img
                          src={b.image}
                          alt={`Temple City - ${b.name} branch`}
                          loading="lazy"
                          decoding="async"
                        />
                      </div>
                    </div>

                    <div className="location-card__body">
                      <h3 className="display location-card__name">
                        {b.name}
                        <span className="tamil location-card__tamil">{b.tamil}</span>
                      </h3>

                      <address className="location-card__address">
                        {b.address}
                      </address>

                      <div className="location-card__meta">
                        <div className="location-card__meta-item">
                          <span style={{ fontSize: '0.72rem' }}>🕒</span>
                          <span style={{ marginLeft: '0.25rem' }}>{b.hours}</span>
                        </div>
                        <div className="location-card__meta-item">
                          <span style={{ fontSize: '0.72rem' }}>📞</span>
                          <a href={b.phoneRaw} style={{ marginLeft: '0.25rem', textDecoration: 'underline' }}>{b.phone}</a>
                        </div>
                      </div>

                      <ul className="location-card__tags">
                        {b.facilities.slice(0, 3).map((fac) => (
                          <li key={fac}>{fac}</li>
                        ))}
                      </ul>

                      <div className="location-card__actions">
                        <a
                          className="btn btn--outline-gold magnetic"
                          href={b.mapUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <span>Get Directions</span>
                          <span className="btn__arrow" aria-hidden="true">→</span>
                        </a>
                        <a
                          className="btn--call magnetic"
                          href={b.phoneRaw}
                          aria-label={`Call ${b.name}`}
                        >
                          <span>Call</span>
                        </a>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </div>
        </section>
      )}

      {(activeFilter === 'all' || activeFilter === 'restaurants') && (
        <div className="tile-band" aria-hidden="true"></div>
      )}

      {/* ════════════ 4. HOTEL STAYS ════════════ */}
      {(activeFilter === 'all' || activeFilter === 'stays') && (
        <section className="section section--dark-blue section--lp" id="stays-section">
          <div className="container">
            <div className="sec-head" data-reveal>
              <span className="label">
                02 — Accommodation <span className="tamil">தங்கும் விடுதிகள்</span>
              </span>
              <span className="rule" aria-hidden="true"></span>
            </div>

            <h2 className="display sec-title" data-reveal style={{ '--d': '.08s' }}>
              Stay Comfortably, <em>Travel Freely</em>
            </h2>

            <p className="lede locations__lede" data-reveal style={{ '--d': '.14s' }}>
              Make your journey more comfortable with Temple City accommodation and distinctive stay experiences. Explore our available properties and find the right place to unwind.
            </p>

            <div className="lp-grid">
              {filteredStays.map((s, idx) => (
                <article
                  key={s.id}
                  className="location-card"
                  data-reveal
                  style={{ '--d': `${((idx % 9) * 0.06).toFixed(2)}s` }}
                >
                  <div className="location-card__media arch-wrap">
                    <div className="arch">
                      <img
                        src={s.image}
                        alt={`Temple City Stay - ${s.name}`}
                        loading="lazy"
                        decoding="async"
                      />
                    </div>
                  </div>

                  <div className="location-card__body">
                    <h3 className="display location-card__name">
                      {s.name}
                      <span className="tamil location-card__tamil">{s.tamil}</span>
                    </h3>

                    <address className="location-card__address">
                      {s.address}
                    </address>

                    <div className="location-card__meta">
                      <div className="location-card__meta-item">
                        <span style={{ color: 'var(--gold-soft)', fontSize: '0.72rem' }}>🛏️</span>
                        <span style={{ marginLeft: '0.25rem' }}>{s.roomTypes}</span>
                      </div>
                      <div className="location-card__meta-item">
                        <span style={{ color: 'var(--gold-soft)', fontSize: '0.72rem' }}>💳</span>
                        <span style={{ marginLeft: '0.25rem', color: 'var(--turmeric)', fontWeight: 500 }}>{s.rates}</span>
                      </div>
                    </div>

                    <ul className="location-card__tags">
                      {s.amenities.slice(0, 2).map((a) => (
                        <li key={a}>{a}</li>
                      ))}
                      {s.facilities.slice(0, 1).map((f) => (
                        <li key={f}>{f}</li>
                      ))}
                    </ul>

                    <div className="location-card__actions">
                      <a
                        className="btn btn--solid magnetic"
                        href="#cta"
                        onClick={(e) => onNavigate && onNavigate(e, '#cta')}
                      >
                        <span>Explore Stay</span>
                        <span className="btn__arrow" aria-hidden="true">→</span>
                      </a>
                      <a
                        className="btn--call magnetic"
                        href={`tel:${s.phone}`}
                        aria-label={`Enquire for ${s.name}`}
                      >
                        <span>Enquire</span>
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ════════════ 5. TEMPLE CITY BOX STAYS ════════════ */}
      {(activeFilter === 'all' || activeFilter === 'stays') && (
        <section className="section section--dark-blue section--lp" id="box-stays-section">
          <div className="container">
            <div className="box-stays-feature" data-reveal>
              <div className="box-stays-feature__media arch-wrap">
                <div className="arch">
                  <img
                    src="https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1200&q=80"
                    alt="Temple City Box Stays in Vadipatti"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </div>

              <div className="box-stays-feature__body">
                <div className="sec-head">
                  <span className="label">
                    Distinctive Stays <span className="tamil">பாக்ஸ் ஸ்டேஸ்</span>
                  </span>
                </div>

                <h2 className="display" style={{ color: 'var(--cream)', marginBlock: '0.5rem 0.6rem', fontSize: 'clamp(1.3rem, 2.4vw, 1.9rem)' }}>
                  A Different Kind of <em>Stay</em>
                </h2>

                <p className="lede" style={{ color: 'rgba(244, 234, 218, 0.78)', marginBottom: '0.9rem', fontSize: '0.84rem' }}>
                  Discover Temple City Box Stays in Vadipatti, offering a distinctive stay experience surrounded by agricultural landscapes. Explore the available accommodation, facilities, and spaces designed for relaxation.
                </p>

                <ul className="location-card__tags" style={{ marginBottom: '1rem' }}>
                  <li>Eco-Container Suites</li>
                  <li>Swimming Pool</li>
                  <li>Banquet Lawn &amp; Events</li>
                  <li>Agricultural Landscapes</li>
                  <li>Dual EV Charging Station</li>
                  <li>Garden Vegetarian Dining</li>
                </ul>

                <div>
                  <a
                    className="btn btn--solid magnetic"
                    href="#cta"
                    onClick={(e) => onNavigate && onNavigate(e, '#cta')}
                  >
                    <span>Enquire About Your Stay</span>
                    <span className="btn__arrow" aria-hidden="true">→</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {(activeFilter === 'all' || activeFilter === 'stays') && (
        <div className="tile-band tile-band--dark-blue" aria-hidden="true"></div>
      )}

      {/* ════════════ 6. FUEL & EV CHARGING LOCATIONS ════════════ */}
      {(activeFilter === 'all' || activeFilter === 'fuel-ev') && (
        <section className="section section--cream section--lp" id="fuel-section">
          <div className="container">
            <div className="sec-head" data-reveal>
              <span className="label">
                03 — Travel Facilities <span className="tamil">பயண வசதிகள்</span>
              </span>
              <span className="rule" aria-hidden="true"></span>
            </div>

            <h2 className="display sec-title" data-reveal style={{ '--d': '.08s' }}>
              Convenience Along <em>Your Journey</em>
            </h2>

            <p className="lede locations__lede" data-reveal style={{ '--d': '.14s' }}>
              Planning a road trip? Explore Temple City locations offering fuel services and electric vehicle charging facilities at selected destinations.
            </p>

            <div className="lp-grid">
              {filteredFuelEv.map((f, idx) => (
                <article
                  key={f.id}
                  className="location-card"
                  data-reveal
                  style={{ '--d': `${((idx % 9) * 0.06).toFixed(2)}s` }}
                >
                  <div className="location-card__body">
                    <span
                      className="location-card__badge"
                      style={{
                        fontSize: '0.52rem',
                        letterSpacing: '0.18em',
                        textTransform: 'uppercase',
                        color: 'var(--turmeric)',
                        marginBottom: '0.25rem',
                        display: 'block',
                      }}
                    >
                      Highway Travel Hub
                    </span>

                    <h3 className="display location-card__name">
                      {f.name}
                      <span className="tamil location-card__tamil">{f.tamil}</span>
                    </h3>

                    <address className="location-card__address" style={{ marginBlock: '0.25rem 0.5rem' }}>
                      {f.address}
                    </address>

                    <div className="location-card__meta">
                      <div className="location-card__meta-item">
                        <span style={{ color: 'var(--gold)', fontSize: '0.72rem' }}>🕒</span>
                        <span style={{ marginLeft: '0.25rem' }}>{f.hours}</span>
                      </div>
                    </div>

                    <div style={{ marginBottom: '0.7rem' }}>
                      <span className="location-card__sublabel" style={{ fontSize: '0.52rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(244,234,218,0.5)', display: 'block', marginBottom: '0.3rem' }}>
                        Verified Available Services:
                      </span>
                      <ul className="location-card__tags">
                        {f.services.map((srv, sIdx) => (
                          <li key={sIdx}>{srv.label}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="location-card__actions" style={{ marginTop: 'auto' }}>
                      <a
                        className="btn btn--outline-gold magnetic"
                        href={f.mapUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span>Get Directions</span>
                        <span className="btn__arrow" aria-hidden="true">→</span>
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {(activeFilter === 'all' || activeFilter === 'fuel-ev') && (
        <div className="tile-band" aria-hidden="true"></div>
      )}

      {/* ════════════ 7. INTERACTIVE MAP SECTION ════════════ */}
      <section className="section section--dark-blue section--lp" id="map-section">
        <div className="container">
          <div className="sec-head" data-reveal>
            <span className="label">
              04 — Map Navigation <span className="tamil">வரைபடம்</span>
            </span>
            <span className="rule" aria-hidden="true"></span>
          </div>

          <h2 className="display sec-title" data-reveal style={{ '--d': '.08s' }}>
            Explore Us on <em>the Map</em>
          </h2>

          <p className="lede locations__lede" data-reveal style={{ '--d': '.14s' }}>
            Find the nearest Temple City restaurant, stay, or travel facility and plan your visit with ease.
          </p>

          <div className="locations-map" data-reveal>
            {/* Embedded Responsive Map */}
            <div className="locations-map__frame">
              <iframe
                title={`Map of Temple City ${selectedMapBranch.name}`}
                src={`https://maps.google.com/maps?q=${encodeURIComponent('Hotel Temple City ' + selectedMapBranch.name + ' ' + selectedMapBranch.address)}&t=&z=13&ie=UTF8&iwloc=&output=embed`}
                loading="lazy"
                allowFullScreen
              ></iframe>
            </div>

            {/* Selected Branch Detail & Quick List */}
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <div
                style={{
                  background: 'rgba(20, 36, 68, 0.75)',
                  border: '1px solid rgba(185, 139, 63, 0.4)',
                  borderRadius: '4px',
                  padding: '1.2rem',
                  marginBottom: '1rem',
                }}
              >
                <span style={{ fontSize: '0.62rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--turmeric)' }}>
                  Selected Location
                </span>
                <h4 style={{ fontFamily: 'var(--serif)', fontSize: '1.1rem', color: 'var(--cream)', marginBlock: '0.2rem 0.15rem' }}>
                  {selectedMapBranch.name}
                </h4>
                <p style={{ fontSize: '0.76rem', color: 'rgba(244, 234, 218, 0.72)', marginBottom: '0.5rem' }}>
                  {selectedMapBranch.address}
                </p>
                <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
                  <a
                    className="btn btn--solid magnetic"
                    href={selectedMapBranch.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ padding: '0.4rem 0.7rem', fontSize: '0.56rem' }}
                  >
                    <span>Get Directions ↗</span>
                  </a>
                  <a
                    className="btn--call magnetic"
                    href={selectedMapBranch.phoneRaw}
                    style={{ padding: '0.4rem 0.6rem' }}
                  >
                    <span>Call {selectedMapBranch.phone}</span>
                  </a>
                </div>
              </div>

              <span style={{ fontSize: '0.52rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(244, 234, 218, 0.5)', marginBottom: '0.3rem' }}>
                Select a Destination:
              </span>

              <div className="locations-map__list">
                {restaurantBranches.map((b) => (
                  <button
                    key={b.id}
                    type="button"
                    className={`locations-map__item ${selectedMapBranch.id === b.id ? 'is-selected' : ''}`}
                    onClick={() => setSelectedMapBranch(b)}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                      <strong style={{ color: selectedMapBranch.id === b.id ? 'var(--turmeric)' : 'var(--cream)', fontSize: '0.82rem' }}>
                        {b.name}
                      </strong>
                      <span style={{ fontSize: '0.62rem', color: 'var(--gold-soft)' }}>{b.corridor}</span>
                    </div>
                    <span style={{ fontSize: '0.66rem', color: 'rgba(244, 234, 218, 0.55)', display: 'block', marginTop: '0.1rem' }}>
                      {b.hours}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="tile-band tile-band--dark-blue" aria-hidden="true"></div>

      {/* ════════════ 8. CLOSING CALL TO ACTION ════════════ */}
      <section className="section section--beige" id="locations-cta">
        <div className="container" style={{ textAlign: 'center' }}>
          <div className="sec-head" data-reveal style={{ justifyContent: 'center' }}>
            <span className="label">
              Welcome to Temple City <span className="tamil">நல்வரவு</span>
            </span>
          </div>

          <h2
            className="display sec-title"
            data-reveal
            style={{ '--d': '.08s', marginInline: 'auto' }}
          >
            We Look Forward to <em>Welcoming You</em>
          </h2>

          <p
            className="lede"
            data-reveal
            style={{
              '--d': '.14s',
              marginInline: 'auto',
              marginTop: '1rem',
              marginBottom: '2.5rem',
            }}
          >
            Whether you are stopping by for a delicious meal, planning a comfortable stay, or travelling through the region, Temple City is here to make your experience memorable.
          </p>

          <div data-reveal style={{ '--d': '.2s', display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a
              className="btn btn--solid magnetic"
              href="#menu"
              onClick={(e) => onNavigate && onNavigate(e, '#menu')}
            >
              <span>Explore Our Menu</span>
              <span className="btn__arrow" aria-hidden="true">→</span>
            </a>
            <a
              className="btn btn--outline-gold magnetic"
              href="#cta"
              onClick={(e) => onNavigate && onNavigate(e, '#cta')}
            >
              <span>Contact Us</span>
              <span className="btn__arrow" aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </section>

      <div className="tile-band" aria-hidden="true"></div>

      <div className="kolam-rule" aria-hidden="true" style={{ background: '#070e1c', color: 'var(--gold-soft)', borderBottom: '1px solid rgba(86, 126, 185, 0.2)' }}>
        <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.1">
          <circle cx="20" cy="20" r="3" />
          <circle cx="20" cy="8" r="1.4" fill="currentColor" stroke="none" />
          <circle cx="20" cy="32" r="1.4" fill="currentColor" stroke="none" />
          <circle cx="8" cy="20" r="1.4" fill="currentColor" stroke="none" />
          <circle cx="32" cy="20" r="1.4" fill="currentColor" stroke="none" />
          <path d="M20 3 Q26 13 20 20 Q14 27 20 37 Q26 27 20 20 Q14 13 20 3Z" />
          <path d="M3 20 Q13 26 20 20 Q27 14 37 20 Q27 26 20 20 Q13 14 3 20Z" />
        </svg>
      </div>
    </>
  );
}
