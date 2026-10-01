/**
 * Placeholder photography — all Unsplash, swap the ids later for real
 * Broadarks field photography without touching any component.
 */
const U = "https://images.unsplash.com/photo-";

export const img = (id: string, w = 1600, q = 72) =>
  `${U}${id}?auto=format&fit=crop&w=${w}&q=${q}`;

export const IMG = {
  // field + community
  kidsGroup: "1497486751825-1233686d5d80",
  kidsPlaying: "1594708767771-a7502209ff51",
  kidsLaughing: "1509099836639-18ba1795216d",
  kidsPointing: "1488521787991-ed7bbaae773c",
  kidsBackpacks: "1594608661623-aa0bd3a69d98",
  kidsBoots: "1540479859555-17af45c78602",
  classroomFloor: "1542810634-71277d95dcbb",
  classroomTeacher: "1577896851231-70ef18881754",
  classroomDesks: "1509062522246-3755977927d7",
  studentStudying: "1516534775068-ba3e7458af70",
  graduation: "1541339907198-e08756dedf3f",
  library: "1427504494785-3a9ca7044f45",
  books: "1497633762265-9d179a990aa6",

  // health
  clinician: "1532938911079-1b06ac7ceec7",
  clinicianPhone: "1576091160399-112ba8d25d1d",
  careHands: "1615461066159-fea0960485d5",

  // livelihood + skills
  workshop: "1521737604893-d14cc237f11d",
  collaborate: "1543269865-cbf427effbad",
  laptopsTeam: "1522202176988-66273c2fd55f",
  meetingRoom: "1517048676732-d65bc937f952",
  handshake: "1521791136064-7986c2920216",

  // relief + volunteers
  foodRelief: "1593113646773-028c64a8f1b8",
  reliefTruck: "1593113630400-ea4288922497",
  volunteerBack: "1559027615-cd4628902d4a",
  volunteersGroup: "1526976668912-1a811878dd37",
  handsCircle: "1531206715517-5c0ba140b2b8",
  handsHeart: "1469571486292-0ba58a3f068b",
  handsReaching: "1544027993-37dbfe43562a",
  coinsChange: "1532629345422-7515f3d16bb6",
  groupHug: "1522543558187-768b6df7c25c",
  sunsetFriends: "1529333166437-7750a6dd5a70",
  townhall: "1524178232363-1fb2b075b655",
  speaker: "1580894732444-8ecded7900cd",

  // environment / infrastructure
  solar: "1497435334941-8c899ee9e8e9",
  indiaGate: "1587474260584-136574528ed5",

  // portraits
  p1: "1507003211169-0a1dd7228f2d",
  p2: "1494790108377-be9c29b29330",
  p3: "1500648767791-00dcc994a43e",
  p4: "1544005313-94ddf0286df2",
  p5: "1531123897727-8f129e1688ce",
  p6: "1517841905240-472988babdf9",
  p7: "1573496359142-b8d87734a5a2",
  p8: "1580489944761-15a19d654956",
  p9: "1573497019940-1c28c88b4f3e",
  p10: "1610216705422-caa3fcb6d158",
} as const;
