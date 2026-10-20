/**
 * Field photography from Broadarks programmes (2026-27), served from
 * /public/photos. Vision screening shots are from the Right to See programme
 * in Arunachal Pradesh; health camp and stove shots are from the Clean
 * Cooking Initiative in Karnataka. GPS-camera stamps have been cropped off.
 */
const P = "/photos/";

/** Local files are already sized; next/image picks the width from `sizes`. */
// eslint-disable-next-line @typescript-eslint/no-unused-vars -- width kept so call sites stay unchanged
export const img = (id: string, _w?: number) => `${P}${id}.webp`;

export const IMG = {
  // home
  heroPoster: "heroPoster",
  schoolAssembly: "schoolAssembly",
  chartsCorridor: "chartsCorridor",
  womenHall: "womenHall",

  // gallery
  chartHills: "chartHills",
  outdoorTest: "outdoorTest",
  bpCheckBanner: "bpCheckBanner",
  chartsClassroom: "chartsClassroom",
  chartWomen: "chartWomen",
  spectaclesFitting: "spectaclesFitting",
  stoveFilm: "stoveFilm",
  chartsGroup: "chartsGroup",
  rooftopTest: "rooftopTest",
  examGirl: "examGirl",
  redUniforms: "redUniforms",
  queueTrees: "queueTrees",

  // programmes
  studentsClassroom: "studentsClassroom",
  trainerTalk: "trainerTalk",
  trialFrame: "trialFrame",
  bpUnderTrees: "bpUnderTrees",
  leafletsHall: "leafletsHall",
  stoveTalk: "stoveTalk",
  doctorCamp: "doctorCamp",
  campQueue: "campQueue",
  cleanStoveSlide: "cleanStoveSlide",
  stoveScreening: "stoveScreening",

  // stories
  coverEye: "coverEye",
  womenLeaflets: "womenLeaflets",
  bpCheckMan: "bpCheckMan",
  kidsOnGrass: "kidsOnGrass",
  stovePresenter: "stovePresenter",

  // journal
  classDesks: "classDesks",
  chartGirl: "chartGirl",
  schoolBuildingGroup: "schoolBuildingGroup",
  trainingBanner: "trainingBanner",
  spectaclesBanner: "spectaclesBanner",
  spectacleBoxes: "spectacleBoxes",

  // page heroes, CTA bands, inline frames
  trainingHall: "trainingHall",
  trainingGroup: "trainingGroup",
  newGlasses: "newGlasses",
  receivingGlasses: "receivingGlasses",
  trainerScreen: "trainerScreen",
  schoolGroupLarge: "schoolGroupLarge",
  seatedWomen: "seatedWomen",
  studentsGroup: "studentsGroup",
  seatedBanner: "seatedBanner",
  trainees: "trainees",
  trainingRows: "trainingRows",
  chartDemo: "chartDemo",
  campBanner: "campBanner",
  glassesKids: "glassesKids",
} as const;
