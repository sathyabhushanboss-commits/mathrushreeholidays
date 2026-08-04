export const site = {
  name: "Mathrushree Holidays",
  kannadaName: "ಮಾತೃಶ್ರೀ ಹಾಲಿಡೇಸ್",
  tagline: "South India, mapped by people who've actually driven it",
  phone: "+91 94803 99555",
  phoneDisplay: "094803 99555",
  whatsapp: "919480399555",
  email: "hello@mathrushreeholidays.in",
  address: {
    line1: "43, Muneshwara Temple St, Mookambika Nagar",
    line2: "Banashankari 3rd Stage, Hosakerehalli",
    city: "Bengaluru",
    state: "Karnataka",
    pin: "560085",
    country: "IN",
  },
  hours: "Mon–Sat, 9:30 AM – 8:00 PM",
  founded: 2011,
  url: "https://www.mathrushreeholidays.in",
};

export type Destination = {
  code: string; // route code, postcard style e.g. BLR-COR
  slug: string;
  name: string;
  region: string;
  nights: number;
  from: number; // starting price per person INR
  blurb: string;
  highlights: string[];
};

export const destinations: Destination[] = [
  {
    code: "BLR–COR",
    slug: "coorg",
    name: "Coorg",
    region: "Western Ghats, Karnataka",
    nights: 3,
    from: 6499,
    blurb:
      "Coffee estates, waterfalls after the monsoon, and a homestay breakfast that runs long on purpose.",
    highlights: ["Abbey Falls & Mallalli Falls", "Estate stay with plantation walk", "Raja's Seat sunset point", "Dubare elephant camp"],
  },
  {
    code: "BLR–CKM",
    slug: "chikmagalur",
    name: "Chikmagalur",
    region: "Western Ghats, Karnataka",
    nights: 2,
    from: 5299,
    blurb:
      "Hill drives, Mullayanagiri sunrise treks, and hot filter coffee at 5,600 ft.",
    highlights: ["Mullayanagiri sunrise trek", "Hebbe Falls jeep trail", "Baba Budangiri caves", "Coffee estate tour"],
  },
  {
    code: "BLR–OOT",
    slug: "ooty-wayanad",
    name: "Ooty & Wayanad",
    region: "Nilgiris, Tamil Nadu / Kerala",
    nights: 4,
    from: 8999,
    blurb:
      "Toy-train hills into rainforest — botanical gardens one day, spice plantations and caves the next.",
    highlights: ["Nilgiri toy train", "Wayanad caves & wildlife sanctuary", "Botanical Garden & Ooty Lake", "Spice plantation walk"],
  },
  {
    code: "BLR–ALP",
    slug: "kerala-backwaters",
    name: "Kerala Backwaters",
    region: "Alleppey & Kumarakom",
    nights: 3,
    from: 9499,
    blurb:
      "A houseboat, a slow river, and a kitchen that cooks whatever the day's catch was.",
    highlights: ["Overnight houseboat stay", "Kumarakom bird sanctuary", "Village canoe ride", "Traditional Kerala sadya meal"],
  },
  {
    code: "BLR–HMP",
    slug: "hampi",
    name: "Hampi",
    region: "Bellary, Karnataka",
    nights: 2,
    from: 5999,
    blurb:
      "Boulders, ruins, and a river crossing by coracle — history you walk through, not read about.",
    highlights: ["Virupaksha Temple complex", "Vittala Temple & stone chariot", "Tungabhadra coracle ride", "Matanga Hill sunrise"],
  },
  {
    code: "BLR–GOK",
    slug: "gokarna",
    name: "Gokarna",
    region: "Uttara Kannada, Karnataka",
    nights: 3,
    from: 6999,
    blurb:
      "Beach-hop on foot between five coves, then let the temple town slow you back down.",
    highlights: ["Om Beach & Kudle Beach trail", "Mahabaleshwar Temple", "Half Moon & Paradise Beach hike", "Sunset beach shacks"],
  },
];

export type Trek = {
  slug: string;
  name: string;
  kannadaName?: string;
  note: string;
};

// Weekend / seasonal adventure treks
export const treks: Trek[] = [
  { slug: "dudhsagar-falls", name: "Dudhsagar Falls Trek", note: "Monsoon jungle trek to a four-tier waterfall on the Karnataka–Goa border." },
  { slug: "gangadikal", name: "Gangadikal Trek", note: "Western Ghats ridge trek with a grassy summit camp." },
  { slug: "bandaje-falls", name: "Bandaje (Bandage) Falls Trek", note: "A steep descent past a two-tier waterfall near Karkala." },
  { slug: "kyathanamakki", name: "Kyathanamakki Trek", note: "A lesser-crowded Sahyadri trail with sweeping ghat views." },
  { slug: "kudremukh", name: "Kudremukh Peak Trek", note: "The classic Western Ghats summit trek through rolling grasslands." },
  { slug: "netravathi-peak", name: "Netravathi Peak Trek", note: "A river-source trek through shola forest, best after the monsoon." },
  { slug: "gokarna-beach", name: "Gokarna Beach Trek", note: "The coastal trail hopping between Om, Kudle, Half Moon and Paradise beaches." },
  { slug: "kumara-parvata", name: "Kumara Parvata Trek", note: "One of Karnataka's toughest climbs — Pushpagiri hill range, overnight camp." },
];

// Extra adventure activity, not a trek but booked alongside these trips
export const scubaDiving = {
  name: "Scuba Diving",
  note: "Guided dives off Netrani Island, usually paired with a Gokarna or Murudeshwar trip.",
};

export type PilgrimageStop = {
  name: string;
  kannadaName?: string;
};

// Monthly departures tied to the lunar calendar
export const pilgrimages = {
  amavasya: {
    label: "Amavasya special (monthly)",
    stops: [
      { name: "Sigandur Chowdeshwari & Kollur Mookambika" },
      { name: "Melmaruvathur Om Sakthi" },
      { name: "Male Mahadeshwara Betta" },
    ] as PilgrimageStop[],
  },
  pournami: {
    label: "Pournami special (monthly)",
    stops: [
      { name: "Tiruvannamalai — Giri Pradakshina", kannadaName: "ಗಿರಿ ಪ್ರದಕ್ಷಿಣೆ" },
    ] as PilgrimageStop[],
  },
};

export const tirupatiPackage = {
  name: "Tirupati — Sarva Darshana",
  note: "Door-to-door Tirupati trip with Sarva Darshana arranged, travelling overnight both ways.",
};

// General booking services beyond fixed-itinerary packages
export const services = [
  { name: "Airport pickup & drop", note: "Bengaluru airport transfers, any time of day." },
  { name: "Local & outstation vehicle rental", note: "AC and Non-AC deluxe vehicles, self-drive routes or with driver." },
  { name: "Friends & family tours", note: "Custom itineraries for any group size." },
  { name: "Corporate bookings", note: "Offsites, team outings and staff travel, billed to your company." },
  { name: "Events booking", note: "Transport and stay bundled for weddings, functions and reunions." },
];

export const testimonials = [
  {
    name: "Ramesh & family, Basavanagudi",
    trip: "Coorg, 3N/4D",
    quote:
      "The itinerary had breathing room — nobody rushed us between stops, and the homestay recommendation was better than the resort we asked for.",
  },
  {
    name: "Deepa N., JP Nagar",
    trip: "Kerala Backwaters, 3N/4D",
    quote:
      "Booked eleven years ago for our honeymoon, booked again this year for our anniversary. Same care both times.",
  },
  {
    name: "Suresh Traders, staff outing",
    trip: "Hampi, 2N/3D",
    quote:
      "Organised transport, guide, and stay for 22 of us with zero back-and-forth. That's the part we needed handled.",
  },
];
