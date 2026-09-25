(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __require = /* @__PURE__ */ ((x) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x, {
    get: (a, b) => (typeof require !== "undefined" ? require : a)[b]
  }) : x)(function(x) {
    if (typeof require !== "undefined") return require.apply(this, arguments);
    throw Error('Dynamic require of "' + x + '" is not supported');
  });
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));

  // src/data/photoSizes.js
  var PHOTO_SIZES = [
    {
      id: "passport-eu-uk",
      name: "35 \xD7 45 mm (Standard EU / UK / Schengen / Canada)",
      widthMm: 35,
      heightMm: 45,
      category: "Passport",
      country: "EU, UK, Schengen, Canada, Australia",
      displayLabel: "35 \xD7 45 mm",
      isPreset: true
    },
    {
      id: "passport-us-2x2",
      name: "2 \xD7 2 in \u2014 51 \xD7 51 mm (US Passport / US & India Visa)",
      widthMm: 50.8,
      heightMm: 50.8,
      category: "Passport",
      country: "US, India, Israel, Philippines",
      displayLabel: "2 \xD7 2 in (51 \xD7 51 mm)",
      isPreset: true
    },
    {
      id: "passport-25x35",
      name: "25 \xD7 35 mm (Small ID / Student Card)",
      widthMm: 25,
      heightMm: 35,
      category: "ID Card",
      country: "International",
      displayLabel: "25 \xD7 35 mm",
      isPreset: true
    },
    {
      id: "passport-30x40",
      name: "30 \xD7 40 mm (Asian Passport / Standard ID)",
      widthMm: 30,
      heightMm: 40,
      category: "Passport",
      country: "Japan, Thailand, Indonesia, China",
      displayLabel: "30 \xD7 40 mm",
      isPreset: true
    },
    {
      id: "passport-40x50",
      name: "40 \xD7 50 mm (Visa / Large Passport)",
      widthMm: 40,
      heightMm: 50,
      category: "Visa",
      country: "Greece, Brazil, Latin America",
      displayLabel: "40 \xD7 50 mm",
      isPreset: true
    },
    {
      id: "id-card-wallet",
      name: "2\u215B \xD7 3\u215C in \u2014 54 \xD7 86 mm (ID Card / Wallet Size)",
      widthMm: 53.98,
      heightMm: 85.6,
      category: "ID Card",
      country: "ISO 7810 ID-1 standard",
      displayLabel: "54 \xD7 86 mm",
      isPreset: true
    },
    {
      id: "photo-2.5x3.5",
      name: "2\xBD \xD7 3\xBD in \u2014 63.5 \xD7 88.9 mm (Wallet Photo)",
      widthMm: 63.5,
      heightMm: 88.9,
      category: "Standard Photo",
      displayLabel: "2\xBD \xD7 3\xBD in (64 \xD7 89 mm)",
      isPreset: true
    },
    {
      id: "photo-3.5x5",
      name: "3\xBD \xD7 5 in \u2014 88.9 \xD7 127 mm (3R / L Size)",
      widthMm: 88.9,
      heightMm: 127,
      category: "Standard Photo",
      displayLabel: "3\xBD \xD7 5 in (89 \xD7 127 mm)",
      isPreset: true
    },
    {
      id: "photo-4x6",
      name: "4 \xD7 6 in \u2014 101.6 \xD7 152.4 mm (4R)",
      widthMm: 101.6,
      heightMm: 152.4,
      category: "Standard Photo",
      displayLabel: "4 \xD7 6 in (102 \xD7 152 mm)",
      isPreset: true
    },
    {
      id: "photo-5x7",
      name: "5 \xD7 7 in \u2014 127 \xD7 177.8 mm (5R / 2L)",
      widthMm: 127,
      heightMm: 177.8,
      category: "Standard Photo",
      displayLabel: "5 \xD7 7 in (127 \xD7 178 mm)",
      isPreset: true
    },
    {
      id: "photo-6x8",
      name: "6 \xD7 8 in \u2014 152.4 \xD7 203.2 mm (6R)",
      widthMm: 152.4,
      heightMm: 203.2,
      category: "Standard Photo",
      displayLabel: "6 \xD7 8 in (152 \xD7 203 mm)",
      isPreset: true
    },
    {
      id: "photo-8x10",
      name: "8 \xD7 10 in \u2014 203.2 \xD7 254 mm (8R)",
      widthMm: 203.2,
      heightMm: 254,
      category: "Standard Photo",
      displayLabel: "8 \xD7 10 in (203 \xD7 254 mm)",
      isPreset: true
    },
    {
      id: "photo-8x12",
      name: "8 \xD7 12 in \u2014 203.2 \xD7 304.8 mm (S8R)",
      widthMm: 203.2,
      heightMm: 304.8,
      category: "Standard Photo",
      displayLabel: "8 \xD7 12 in (203 \xD7 305 mm)",
      isPreset: true
    },
    {
      id: "full-page",
      name: "Full Page Fit",
      widthMm: 0,
      heightMm: 0,
      category: "Special",
      displayLabel: "Full Page",
      isSpecial: true
    }
  ];
  
  var customPhotoSizesList = [];
  function setCustomPhotoSizes(sizes) {
    customPhotoSizesList = Array.isArray(sizes) ? sizes : [];
  }
  function getPhotoSizeById(id) {
    return PHOTO_SIZES.find((s) => s.id === id) || customPhotoSizesList.find((s) => s.id === id) || null;
  }
  function filterPhotoSizes(query) {
    const all = [...customPhotoSizesList, ...PHOTO_SIZES];
    if (!query || !query.trim()) return all;
    const q = query.toLowerCase().trim();
    return all.filter(
      (s) => s.name.toLowerCase().includes(q) || s.category.toLowerCase().includes(q) || (s.country && s.country.toLowerCase().includes(q)) || s.displayLabel.toLowerCase().includes(q)
    );
  }
// src/data/paperSizes.js
  var PAPER_SIZES = [
    // --- Standard Photo Paper ---
    {
      id: "paper-4x6",
      name: "4 \xD7 6 in \u2014 10 \xD7 15 cm (4R)",
      widthMm: 101.6,
      heightMm: 152.4,
      unit: "in",
      category: "Standard Photo Paper",
      borderlessSupported: true,
      orientationSupport: "both",
      displayLabel: "4 \xD7 6 in (101.6 \xD7 152.4 mm)",
      borderless: false
    },
    {
      id: "paper-4x6-borderless",
      name: "4 \xD7 6 in (Borderless)",
      widthMm: 101.6,
      heightMm: 152.4,
      unit: "in",
      category: "Standard Photo Paper",
      borderlessSupported: true,
      orientationSupport: "both",
      displayLabel: "4 \xD7 6 in Borderless",
      borderless: true
    },
    {
      id: "paper-5x7",
      name: "5 \xD7 7 in \u2014 13 \xD7 18 cm (5R / 2L)",
      widthMm: 127,
      heightMm: 177.8,
      unit: "in",
      category: "Standard Photo Paper",
      borderlessSupported: true,
      orientationSupport: "both",
      displayLabel: "5 \xD7 7 in (127 \xD7 177.8 mm)",
      borderless: false
    },
    {
      id: "paper-5x7-borderless",
      name: "5 \xD7 7 in (Borderless)",
      widthMm: 127,
      heightMm: 177.8,
      unit: "in",
      category: "Standard Photo Paper",
      borderlessSupported: true,
      orientationSupport: "both",
      displayLabel: "5 \xD7 7 in Borderless",
      borderless: true
    },
    {
      id: "paper-3.5x5-L",
      name: '3.5 \xD7 5 in "L" (89 \xD7 127 mm)',
      widthMm: 88.9,
      heightMm: 127,
      unit: "in",
      category: "Standard Photo Paper",
      borderlessSupported: true,
      orientationSupport: "both",
      displayLabel: "3.5 \xD7 5 in L",
      borderless: false
    },
    {
      id: "paper-3.5x5-L-borderless",
      name: '3.5 \xD7 5 in "L" (Borderless)',
      widthMm: 88.9,
      heightMm: 127,
      unit: "in",
      category: "Standard Photo Paper",
      borderlessSupported: true,
      orientationSupport: "both",
      displayLabel: "3.5 \xD7 5 in L Borderless",
      borderless: true
    },
    {
      id: "paper-3x5",
      name: "3 \xD7 5 in (76 \xD7 127 mm)",
      widthMm: 76.2,
      heightMm: 127,
      unit: "in",
      category: "Standard Photo Paper",
      borderlessSupported: true,
      orientationSupport: "both",
      displayLabel: "3 \xD7 5 in",
      borderless: false
    },
    {
      id: "paper-3x5-borderless",
      name: "3 \xD7 5 in (Borderless)",
      widthMm: 76.2,
      heightMm: 127,
      unit: "in",
      category: "Standard Photo Paper",
      borderlessSupported: true,
      orientationSupport: "both",
      displayLabel: "3 \xD7 5 in Borderless",
      borderless: true
    },
    {
      id: "paper-4x5",
      name: "4 \xD7 5 in (102 \xD7 127 mm)",
      widthMm: 101.6,
      heightMm: 127,
      unit: "in",
      category: "Standard Photo Paper",
      borderlessSupported: true,
      orientationSupport: "both",
      displayLabel: "4 \xD7 5 in",
      borderless: false
    },
    {
      id: "paper-4x5-borderless",
      name: "4 \xD7 5 in (Borderless)",
      widthMm: 101.6,
      heightMm: 127,
      unit: "in",
      category: "Standard Photo Paper",
      borderlessSupported: true,
      orientationSupport: "both",
      displayLabel: "4 \xD7 5 in Borderless",
      borderless: true
    },
    {
      id: "paper-4x12",
      name: "4 \xD7 12 in (102 \xD7 305 mm Panoramic)",
      widthMm: 101.6,
      heightMm: 304.8,
      unit: "in",
      category: "Standard Photo Paper",
      borderlessSupported: true,
      orientationSupport: "both",
      displayLabel: "4 \xD7 12 in",
      borderless: false
    },
    {
      id: "paper-4x12-borderless",
      name: "4 \xD7 12 in (Borderless)",
      widthMm: 101.6,
      heightMm: 304.8,
      unit: "in",
      category: "Standard Photo Paper",
      borderlessSupported: true,
      orientationSupport: "both",
      displayLabel: "4 \xD7 12 in Borderless",
      borderless: true
    },
    {
      id: "paper-8x10",
      name: "8 \xD7 10 in (203 \xD7 254 mm)",
      widthMm: 203.2,
      heightMm: 254,
      unit: "in",
      category: "Standard Photo Paper",
      borderlessSupported: true,
      orientationSupport: "both",
      displayLabel: "8 \xD7 10 in",
      borderless: false
    },
    {
      id: "paper-8x10-borderless",
      name: "8 \xD7 10 in (Borderless)",
      widthMm: 203.2,
      heightMm: 254,
      unit: "in",
      category: "Standard Photo Paper",
      borderlessSupported: true,
      orientationSupport: "both",
      displayLabel: "8 \xD7 10 in Borderless",
      borderless: true
    },
    {
      id: "paper-8.5x13",
      name: "8.5 \xD7 13 in (216 \xD7 330 mm Foolscap)",
      widthMm: 215.9,
      heightMm: 330.2,
      unit: "in",
      category: "Standard Photo Paper",
      borderlessSupported: false,
      orientationSupport: "both",
      displayLabel: "8.5 \xD7 13 in",
      borderless: false
    },
    // --- Standard Paper ---
    {
      id: "paper-a4",
      name: "A4 \u2014 210 \xD7 297 mm (International Standard)",
      widthMm: 210,
      heightMm: 297,
      unit: "mm",
      category: "Standard Paper",
      borderlessSupported: true,
      orientationSupport: "both",
      displayLabel: "A4 (210 \xD7 297 mm)",
      borderless: false
    },
    {
      id: "paper-a4-borderless",
      name: "A4 (Borderless)",
      widthMm: 210,
      heightMm: 297,
      unit: "mm",
      category: "Standard Paper",
      borderlessSupported: true,
      orientationSupport: "both",
      displayLabel: "A4 Borderless",
      borderless: true
    },
    {
      id: "paper-a5",
      name: "A5 \u2014 148 \xD7 210 mm",
      widthMm: 148,
      heightMm: 210,
      unit: "mm",
      category: "Standard Paper",
      borderlessSupported: true,
      orientationSupport: "both",
      displayLabel: "A5 (148 \xD7 210 mm)",
      borderless: false
    },
    {
      id: "paper-a5-borderless",
      name: "A5 (Borderless)",
      widthMm: 148,
      heightMm: 210,
      unit: "mm",
      category: "Standard Paper",
      borderlessSupported: true,
      orientationSupport: "both",
      displayLabel: "A5 Borderless",
      borderless: true
    },
    {
      id: "paper-a6",
      name: "A6 \u2014 105 \xD7 148 mm",
      widthMm: 105,
      heightMm: 148,
      unit: "mm",
      category: "Standard Paper",
      borderlessSupported: true,
      orientationSupport: "both",
      displayLabel: "A6 (105 \xD7 148 mm)",
      borderless: false
    },
    {
      id: "paper-a6-borderless",
      name: "A6 (Borderless)",
      widthMm: 105,
      heightMm: 148,
      unit: "mm",
      category: "Standard Paper",
      borderlessSupported: true,
      orientationSupport: "both",
      displayLabel: "A6 Borderless",
      borderless: true
    },
    {
      id: "paper-b5",
      name: "B5 (ISO) \u2014 176 \xD7 250 mm",
      widthMm: 176,
      heightMm: 250,
      unit: "mm",
      category: "Standard Paper",
      borderlessSupported: false,
      orientationSupport: "both",
      displayLabel: "B5 (176 \xD7 250 mm)",
      borderless: false
    },
    {
      id: "paper-jb5",
      name: "JB5 (JIS) \u2014 182 \xD7 257 mm",
      widthMm: 182,
      heightMm: 257,
      unit: "mm",
      category: "Standard Paper",
      borderlessSupported: true,
      orientationSupport: "both",
      displayLabel: "JB5 (182 \xD7 257 mm)",
      borderless: false
    },
    {
      id: "paper-jb5-borderless",
      name: "JB5 (JIS) Borderless",
      widthMm: 182,
      heightMm: 257,
      unit: "mm",
      category: "Standard Paper",
      borderlessSupported: true,
      orientationSupport: "both",
      displayLabel: "JB5 Borderless",
      borderless: true
    },
    {
      id: "paper-letter",
      name: "US Letter \u2014 8.5 \xD7 11 in (216 \xD7 279 mm)",
      widthMm: 215.9,
      heightMm: 279.4,
      unit: "in",
      category: "Standard Paper",
      borderlessSupported: true,
      orientationSupport: "both",
      displayLabel: "US Letter (8.5 \xD7 11 in)",
      borderless: false
    },
    {
      id: "paper-letter-borderless",
      name: "US Letter (Borderless)",
      widthMm: 215.9,
      heightMm: 279.4,
      unit: "in",
      category: "Standard Paper",
      borderlessSupported: true,
      orientationSupport: "both",
      displayLabel: "US Letter Borderless",
      borderless: true
    },
    {
      id: "paper-legal",
      name: "US Legal \u2014 8.5 \xD7 14 in (216 \xD7 356 mm)",
      widthMm: 215.9,
      heightMm: 355.6,
      unit: "in",
      category: "Standard Paper",
      borderlessSupported: false,
      orientationSupport: "both",
      displayLabel: "US Legal (8.5 \xD7 14 in)",
      borderless: false
    },
    {
      id: "paper-executive",
      name: "Executive \u2014 7.25 \xD7 10.5 in (184 \xD7 267 mm)",
      widthMm: 184.15,
      heightMm: 266.7,
      unit: "in",
      category: "Standard Paper",
      borderlessSupported: false,
      orientationSupport: "both",
      displayLabel: "Executive (7.25 \xD7 10.5 in)",
      borderless: false
    },
    {
      id: "paper-statement",
      name: "Statement \u2014 5.5 \xD7 8.5 in (140 \xD7 216 mm)",
      widthMm: 139.7,
      heightMm: 215.9,
      unit: "in",
      category: "Standard Paper",
      borderlessSupported: false,
      orientationSupport: "both",
      displayLabel: "Statement (5.5 \xD7 8.5 in)",
      borderless: false
    },
    // --- Envelope ---
    {
      id: "envelope-dl",
      name: "DL Envelope \u2014 110 \xD7 220 mm",
      widthMm: 110,
      heightMm: 220,
      unit: "mm",
      category: "Envelope",
      borderlessSupported: false,
      orientationSupport: "both",
      displayLabel: "DL Envelope (110 \xD7 220 mm)",
      borderless: false
    },
    {
      id: "envelope-c5",
      name: "C5 Envelope \u2014 162 \xD7 229 mm",
      widthMm: 162,
      heightMm: 229,
      unit: "mm",
      category: "Envelope",
      borderlessSupported: false,
      orientationSupport: "both",
      displayLabel: "C5 Envelope (162 \xD7 229 mm)",
      borderless: false
    },
    {
      id: "envelope-c6",
      name: "C6 Envelope \u2014 114 \xD7 162 mm",
      widthMm: 114,
      heightMm: 162,
      unit: "mm",
      category: "Envelope",
      borderlessSupported: false,
      orientationSupport: "both",
      displayLabel: "C6 Envelope (114 \xD7 162 mm)",
      borderless: false
    },
    {
      id: "envelope-10",
      name: "#10 Envelope \u2014 4.125 \xD7 9.5 in (105 \xD7 241 mm)",
      widthMm: 104.77,
      heightMm: 241.3,
      unit: "in",
      category: "Envelope",
      borderlessSupported: false,
      orientationSupport: "both",
      displayLabel: "#10 Envelope",
      borderless: false
    },
    {
      id: "envelope-monarch",
      name: "Monarch Envelope \u2014 3.875 \xD7 7.5 in (98 \xD7 190 mm)",
      widthMm: 98.425,
      heightMm: 190.5,
      unit: "in",
      category: "Envelope",
      borderlessSupported: false,
      orientationSupport: "both",
      displayLabel: "Monarch Envelope",
      borderless: false
    },
    // --- Index Card ---
    {
      id: "index-3x5",
      name: "Index Card 3 \xD7 5 in (76 \xD7 127 mm)",
      widthMm: 76.2,
      heightMm: 127,
      unit: "in",
      category: "Index Card",
      borderlessSupported: true,
      orientationSupport: "both",
      displayLabel: "Index Card 3 \xD7 5 in",
      borderless: false
    },
    {
      id: "index-3x5-borderless",
      name: "Index Card 3 \xD7 5 in (Borderless)",
      widthMm: 76.2,
      heightMm: 127,
      unit: "in",
      category: "Index Card",
      borderlessSupported: true,
      orientationSupport: "both",
      displayLabel: "Index Card 3 \xD7 5 in Borderless",
      borderless: true
    },
    {
      id: "index-4x6",
      name: "Index Card 4 \xD7 6 in (102 \xD7 152 mm)",
      widthMm: 101.6,
      heightMm: 152.4,
      unit: "in",
      category: "Index Card",
      borderlessSupported: true,
      orientationSupport: "both",
      displayLabel: "Index Card 4 \xD7 6 in",
      borderless: false
    },
    {
      id: "index-4x6-borderless",
      name: "Index Card 4 \xD7 6 in (Borderless)",
      widthMm: 101.6,
      heightMm: 152.4,
      unit: "in",
      category: "Index Card",
      borderlessSupported: true,
      orientationSupport: "both",
      displayLabel: "Index Card 4 \xD7 6 in Borderless",
      borderless: true
    },
    {
      id: "index-5x8",
      name: "Index Card 5 \xD7 8 in (127 \xD7 203 mm)",
      widthMm: 127,
      heightMm: 203.2,
      unit: "in",
      category: "Index Card",
      borderlessSupported: true,
      orientationSupport: "both",
      displayLabel: "Index Card 5 \xD7 8 in",
      borderless: false
    },
    {
      id: "index-5x8-borderless",
      name: "Index Card 5 \xD7 8 in (Borderless)",
      widthMm: 127,
      heightMm: 203.2,
      unit: "in",
      category: "Index Card",
      borderlessSupported: true,
      orientationSupport: "both",
      displayLabel: "Index Card 5 \xD7 8 in Borderless",
      borderless: true
    },
    // --- Other ---
    {
      id: "paper-hagaki",
      name: "Ofuku Hagaki \u2014 200 \xD7 148 mm (Postcard)",
      widthMm: 200,
      heightMm: 148,
      unit: "mm",
      category: "Other",
      borderlessSupported: true,
      orientationSupport: "both",
      displayLabel: "Ofuku Hagaki (200 \xD7 148 mm)",
      borderless: false
    }
  ];
  
  var customPaperSizesList = [];
  function setCustomPaperSizes(papers) {
    customPaperSizesList = Array.isArray(papers) ? papers : [];
  }
  function getPaperSizeById(id) {
    return PAPER_SIZES.find((p) => p.id === id) || customPaperSizesList.find((p) => p.id === id) || null;
  }
  function filterPaperSizes(category = "All", query = "") {
    let list = [...customPaperSizesList, ...PAPER_SIZES];
    if (category && category !== "All") {
      if (category === "Custom") {
        list = list.filter((p) => p.isCustom || p.category === "Custom" || p.category === "Custom Paper");
      } else {
        list = list.filter((p) => p.category === category);
      }
    }
    if (query && query.trim()) {
      const q = query.toLowerCase().trim();
      list = list.filter(
        (p) => p.name.toLowerCase().includes(q) || p.displayLabel.toLowerCase().includes(q) || p.category.toLowerCase().includes(q)
      );
    }
    return list;
  }
// src/core/utils/unitConverter.js
  var MM_PER_INCH = 25.4;
  function inchToMm(inch) {
    if (typeof inch !== "number" || isNaN(inch)) return 0;
    return inch * MM_PER_INCH;
  }
  function mmToPx(mm, dpi = 300) {
    if (typeof mm !== "number" || isNaN(mm)) return 0;
    return Math.round(mm / MM_PER_INCH * dpi);
  }

  // src/core/errors/AppError.js
  var AppError = class extends Error {
    constructor(message, code = "UNKNOWN_ERROR", userFriendlyMessage = null) {
      super(message);
      this.name = "AppError";
      this.code = code;
      this.userFriendlyMessage = userFriendlyMessage || message;
    }
  };
  var ImageProcessingError = class extends AppError {
    constructor(message, userFriendlyMessage = "Unable to process the image. Please try another file.") {
      super(message, "IMAGE_PROCESSING_ERROR", userFriendlyMessage);
      this.name = "ImageProcessingError";
    }
  };

  // src/services/imageService.js
  function loadImage(source) {
    return new Promise((resolve, reject) => {
      if (!source) {
        return reject(new ImageProcessingError("No image source provided"));
      }
      const img = new Image();
      img.crossOrigin = "anonymous";
      let objectUrl = null;
      if (source instanceof File || source instanceof Blob) {
        objectUrl = URL.createObjectURL(source);
        img.src = objectUrl;
      } else if (typeof source === "string") {
        img.src = source;
      } else {
        return reject(new ImageProcessingError("Unsupported image source type"));
      }
      img.onload = () => {
        if (objectUrl) URL.revokeObjectURL(objectUrl);
        resolve(img);
      };
      img.onerror = () => {
        if (objectUrl) URL.revokeObjectURL(objectUrl);
        reject(new ImageProcessingError("Failed to load image file. File may be corrupted."));
      };
    });
  }
  function createWorkingCanvas(img, maxDim = 1200) {
    const canvas = document.createElement("canvas");
    let width = img.naturalWidth || img.width;
    let height = img.naturalHeight || img.height;
    if (width > maxDim || height > maxDim) {
      if (width > height) {
        height = Math.round(height * maxDim / width);
        width = maxDim;
      } else {
        width = Math.round(width * maxDim / height);
        height = maxDim;
      }
    }
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext("2d");
    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = "high";
    ctx.drawImage(img, 0, 0, width, height);
    return canvas;
  }
  function renderCroppedCanvas(image, cropBox, transform, targetWpx, targetHpx, bgColor = "original") {
    const canvas = document.createElement("canvas");
    canvas.width = targetWpx;
    canvas.height = targetHpx;
    const ctx = canvas.getContext("2d");
    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = "high";
    if (bgColor && bgColor !== "original") {
      if (bgColor === "white") ctx.fillStyle = "#FFFFFF";
      else if (bgColor === "light-blue") ctx.fillStyle = "#D0E4F7";
      else ctx.fillStyle = bgColor;
      ctx.fillRect(0, 0, targetWpx, targetHpx);
    }
    const { zoom = 1, panX = 0, panY = 0, rotation = 0 } = transform || {};
    ctx.save();
    ctx.translate(targetWpx / 2 + panX, targetHpx / 2 + panY);
    if (rotation !== 0) {
      ctx.rotate(rotation * Math.PI / 180);
    }
    const imgW = image.naturalWidth || image.width;
    const imgH = image.naturalHeight || image.height;
    const scale = Math.max(targetWpx / imgW, targetHpx / imgH) * zoom;
    const drawW = imgW * scale;
    const drawH = imgH * scale;
    ctx.drawImage(image, -drawW / 2, -drawH / 2, drawW, drawH);
    ctx.restore();
    return canvas;
  }
  function validateImageFile(file) {
    if (!file) return { valid: false, error: "No file provided" };
    const validTypes = ["image/jpeg", "image/png", "image/webp", "image/heic", "image/bmp"];
    if (!validTypes.includes(file.type) && !file.type.startsWith("image/")) {
      return { valid: false, error: "Invalid file format. Please upload a JPG, PNG, or WebP image." };
    }
    const maxSize = 25 * 1024 * 1024;
    if (file.size > maxSize) {
      return { valid: false, error: "File size exceeds 25MB limit." };
    }
    return { valid: true };
  }

  
  // src/services/layoutEngine.js
  function calculateLayout({
    photoWmm,
    photoHmm,
    paperWmm,
    paperHmm,
    marginMm = 5,
    marginTopMm,
    marginBottomMm,
    marginLeftMm,
    marginRightMm,
    gapMm = 2,
    borderMm = 0,
    orientation = "auto",
    copies = "max",
    borderless = false,
    ignoreMargins = false,
    photosList = null
  }) {
    const rawTop = marginTopMm !== undefined ? marginTopMm : marginMm;
    const rawBottom = marginBottomMm !== undefined ? marginBottomMm : marginMm;
    const rawLeft = marginLeftMm !== undefined ? marginLeftMm : marginMm;
    const rawRight = marginRightMm !== undefined ? marginRightMm : marginMm;

    const effTop = ignoreMargins ? 0 : (borderless ? Math.max(0, rawTop - 3) : Math.max(0, rawTop));
    const effBottom = ignoreMargins ? 0 : (borderless ? Math.max(0, rawBottom - 3) : Math.max(0, rawBottom));
    const effLeft = ignoreMargins ? 0 : (borderless ? Math.max(0, rawLeft - 3) : Math.max(0, rawLeft));
    const effRight = ignoreMargins ? 0 : (borderless ? Math.max(0, rawRight - 3) : Math.max(0, rawRight));

    const effectiveGap = Math.max(0, gapMm);
    const effectiveBorder = Math.max(0, borderMm);

    if (!photoWmm || !photoHmm || photoWmm <= 0 || photoHmm <= 0) {
      return createEmptyResult("Invalid photo dimensions");
    }
    if (!paperWmm || !paperHmm || paperWmm <= 0 || paperHmm <= 0) {
      return createEmptyResult("Invalid paper dimensions");
    }

    const baseW = Math.min(paperWmm, paperHmm);
    const baseH = Math.max(paperWmm, paperHmm);
    const cellW = photoWmm + effectiveBorder * 2;
    const cellH = photoHmm + effectiveBorder * 2;

    let candidateOrientations = [];
    if (orientation === "portrait") {
      candidateOrientations = [{ w: baseW, h: baseH, name: "portrait" }];
    } else if (orientation === "landscape") {
      candidateOrientations = [{ w: baseH, h: baseW, name: "landscape" }];
    } else {
      candidateOrientations = [
        { w: baseW, h: baseH, name: "portrait" },
        { w: baseH, h: baseW, name: "landscape" }
      ];
    }

    let bestLayout = null;
    for (const candidate of candidateOrientations) {
      const isCandidateLandscape = candidate.name === "landscape";
      const marginH = isCandidateLandscape ? (effTop + effBottom) : (effLeft + effRight);
      const marginV = isCandidateLandscape ? (effLeft + effRight) : (effTop + effBottom);

      const printableW = candidate.w - marginH;
      const printableH = candidate.h - marginV;
      if (printableW <= 0 || printableH <= 0) continue;

      const cols = Math.floor((printableW + effectiveGap) / (cellW + effectiveGap));
      const rows = Math.floor((printableH + effectiveGap) / (cellH + effectiveGap));
      if (cols <= 0 || rows <= 0) continue;

      const maxCapacity = cols * rows;
      const currentLayout = {
        orientation: candidate.name,
        paperW: candidate.w,
        paperH: candidate.h,
        printableW,
        printableH,
        cols,
        rows,
        maxCapacity,
        cellW,
        cellH,
        effLeft: isCandidateLandscape ? effTop : effLeft,
        effTop: isCandidateLandscape ? effLeft : effTop
      };
      if (!bestLayout || currentLayout.maxCapacity > bestLayout.maxCapacity) {
        bestLayout = currentLayout;
      }
    }

    if (!bestLayout || bestLayout.maxCapacity === 0) {
      return {
        isValid: false,
        error: "Photo size (with margins/border) is too large for the selected paper.",
        rows: 0,
        cols: 0,
        maxCopies: 0,
        requestedCopies: copies,
        actualCopies: 0,
        paperWmm: baseW,
        paperHmm: baseH,
        orientation: orientation === "landscape" ? "landscape" : "portrait",
        usedWmm: 0,
        usedHmm: 0,
        marginMm: rawTop,
        marginTopMm: effTop,
        marginBottomMm: effBottom,
        marginLeftMm: effLeft,
        marginRightMm: effRight,
        gapMm: effectiveGap,
        borderMm: effectiveBorder,
        photoRects: []
      };
    }

    const maxCopies = bestLayout.maxCapacity;
    let targetCount = maxCopies;
    if (copies !== "max" && typeof copies === "number" && copies > 0) {
      targetCount = Math.min(copies, maxCopies);
    }

    const totalGridW = bestLayout.cols * bestLayout.cellW + (bestLayout.cols - 1) * effectiveGap;
    const totalGridH = bestLayout.rows * bestLayout.cellH + (bestLayout.rows - 1) * effectiveGap;

    const startX = bestLayout.effLeft + Math.max(0, (bestLayout.printableW - totalGridW) / 2);
    const startY = bestLayout.effTop + Math.max(0, (bestLayout.printableH - totalGridH) / 2);

    const photoRects = [];
    let count = 0;
    for (let r = 0; r < bestLayout.rows && count < targetCount; r++) {
      for (let c = 0; c < bestLayout.cols && count < targetCount; c++) {
        const cellX = startX + c * (bestLayout.cellW + effectiveGap);
        const cellY = startY + r * (bestLayout.cellH + effectiveGap);
        const photoX = cellX + effectiveBorder;
        const photoY = cellY + effectiveBorder;
        let photoData = null;
        if (photosList && Array.isArray(photosList) && photosList.length > 0) {
          photoData = photosList[count] || null;
        }
        photoRects.push({
          id: `rect-${count}`,
          index: count,
          row: r,
          col: c,
          cellX,
          cellY,
          cellW: bestLayout.cellW,
          cellH: bestLayout.cellH,
          x: photoX,
          y: photoY,
          w: photoWmm,
          h: photoHmm,
          borderMm: effectiveBorder,
          photoData
        });
        count++;
      }
    }

    return {
      isValid: true,
      error: null,
      rows: bestLayout.rows,
      cols: bestLayout.cols,
      maxCopies,
      requestedCopies: copies,
      actualCopies: count,
      paperWmm: bestLayout.paperW,
      paperHmm: bestLayout.paperH,
      orientation: bestLayout.orientation,
      usedWmm: totalGridW,
      usedHmm: totalGridH,
      marginMm: rawTop,
      marginTopMm: effTop,
      marginBottomMm: effBottom,
      marginLeftMm: effLeft,
      marginRightMm: effRight,
      gapMm: effectiveGap,
      borderMm: effectiveBorder,
      photoRects
    };
  }

  function createEmptyResult(errorMsg) {
    return {
      isValid: false,
      error: errorMsg,
      rows: 0,
      cols: 0,
      maxCopies: 0,
      requestedCopies: 0,
      actualCopies: 0,
      paperWmm: 0,
      paperHmm: 0,
      orientation: "portrait",
      usedWmm: 0,
      usedHmm: 0,
      marginMm: 0,
      marginTopMm: 0,
      marginBottomMm: 0,
      marginLeftMm: 0,
      marginRightMm: 0,
      gapMm: 0,
      borderMm: 0,
      photoRects: []
    };
  }
// src/services/pdfService.js
  var jsPDFClass = null;
  async function getJsPDF() {
    if (jsPDFClass) return jsPDFClass;
    if (typeof window !== "undefined") {
      if (window.jspdf && window.jspdf.jsPDF) {
        jsPDFClass = window.jspdf.jsPDF;
        return jsPDFClass;
      }
      if (window.jsPDF) {
        jsPDFClass = window.jsPDF;
        return jsPDFClass;
      }
    }
    try {
      const module = await import("jspdf");
      jsPDFClass = module.jsPDF || module.default?.jsPDF || module.default;
    } catch (e) {
      if (typeof window !== "undefined" && window.jspdf && window.jspdf.jsPDF) {
        jsPDFClass = window.jspdf.jsPDF;
      } else if (typeof window !== "undefined" && window.jsPDF) {
        jsPDFClass = window.jsPDF;
      } else {
        throw new Error("jsPDF library is not loaded");
      }
    }
    return jsPDFClass;
  }
  async function generatePDF(layout, croppedPhotoCanvas, options = {}) {
    const { borderColor = "#000000", cuttingMarks = "none" } = options;
    const PDFConstructor = await getJsPDF();
    const paperW = layout.paperWmm;
    const paperH = layout.paperHmm;
    const isLandscape = layout.orientation === "landscape";
    const pdfOrientation = isLandscape ? "landscape" : "portrait";
    const doc = new PDFConstructor({
      orientation: pdfOrientation,
      unit: "mm",
      format: [paperW, paperH]
    });
    const photosList = Array.isArray(croppedPhotoCanvas) ? croppedPhotoCanvas : [croppedPhotoCanvas];
    for (let i = 0; i < layout.photoRects.length; i++) {
      const rect = layout.photoRects[i];
      const canvasItem = photosList[i];
      if (canvasItem && typeof canvasItem.toDataURL === "function") {
        const imgDataUrl = canvasItem.toDataURL("image/jpeg", 0.95);
        doc.addImage(imgDataUrl, "JPEG", rect.x, rect.y, rect.w, rect.h);
        if (rect.borderMm > 0) {
          doc.setLineWidth(rect.borderMm);
          const rgb = hexToRgb(borderColor);
          doc.setDrawColor(rgb.r, rgb.g, rgb.b);
          doc.rect(rect.cellX, rect.cellY, rect.cellW, rect.cellH, "S");
        }
        if (cuttingMarks && cuttingMarks !== "none") {
          drawCuttingMarks(doc, rect, cuttingMarks);
        }
      }
    }
    const pdfBlob = doc.output("blob");
    return pdfBlob;
  }
  function drawCuttingMarks(doc, rect, style) {
    doc.setLineWidth(0.15);
    doc.setDrawColor(120, 120, 120);
    const markLen = 3;
    const offset = 0.5;
    const x1 = rect.cellX;
    const y1 = rect.cellY;
    const x2 = rect.cellX + rect.cellW;
    const y2 = rect.cellY + rect.cellH;
    doc.line(x1 - offset - markLen, y1, x1 - offset, y1);
    doc.line(x1, y1 - offset - markLen, x1, y1 - offset);
    doc.line(x2 + offset, y1, x2 + offset + markLen, y1);
    doc.line(x2, y1 - offset - markLen, x2, y1 - offset);
    doc.line(x1 - offset - markLen, y2, x1 - offset, y2);
    doc.line(x1, y2 + offset, x1, y2 + offset + markLen);
    doc.line(x2 + offset, y2, x2 + offset + markLen, y2);
    doc.line(x2, y2 + offset, x2, y2 + offset + markLen);
  }
  function hexToRgb(hex) {
    let c = hex.replace("#", "");
    if (c.length === 3) c = c.split("").map((x) => x + x).join("");
    const num = parseInt(c, 16);
    return {
      r: num >> 16 & 255,
      g: num >> 8 & 255,
      b: num & 255
    };
  }

  // src/services/exportService.js
  function renderSheetToCanvas(layout, croppedCanvas, options = {}) {
    const { dpi = 300, borderColor = "#000000", cuttingMarks = "none" } = options;
    const canvas = document.createElement("canvas");
    const sheetWpx = mmToPx(layout.paperWmm, dpi);
    const sheetHpx = mmToPx(layout.paperHmm, dpi);
    canvas.width = sheetWpx;
    canvas.height = sheetHpx;
    const ctx = canvas.getContext("2d");
    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = "high";
    ctx.fillStyle = "#FFFFFF";
    ctx.fillRect(0, 0, sheetWpx, sheetHpx);
    const photosList = Array.isArray(croppedCanvas) ? croppedCanvas : [croppedCanvas];
    for (let i = 0; i < layout.photoRects.length; i++) {
      const rect = layout.photoRects[i];
      const sourceCanvas = Array.isArray(croppedCanvas) ? croppedCanvas[i] : i === 0 ? croppedCanvas : null;
      const pxX = mmToPx(rect.x, dpi);
      const pxY = mmToPx(rect.y, dpi);
      const pxW = mmToPx(rect.w, dpi);
      const pxH = mmToPx(rect.h, dpi);
      if (sourceCanvas && (typeof sourceCanvas.getContext === "function" || sourceCanvas instanceof HTMLCanvasElement)) {
        ctx.drawImage(sourceCanvas, pxX, pxY, pxW, pxH);
        if (rect.borderMm > 0) {
          const borderPx = Math.max(1, mmToPx(rect.borderMm, dpi));
          const cellPxX = mmToPx(rect.cellX, dpi);
          const cellPxY = mmToPx(rect.cellY, dpi);
          const cellPxW = mmToPx(rect.cellW, dpi);
          const cellPxH = mmToPx(rect.cellH, dpi);
          ctx.strokeStyle = borderColor;
          ctx.lineWidth = borderPx;
          ctx.strokeRect(cellPxX + borderPx / 2, cellPxY + borderPx / 2, cellPxW - borderPx, cellPxH - borderPx);
        }
        if (cuttingMarks && cuttingMarks !== "none") {
          drawCanvasCuttingMarks(ctx, rect, dpi);
        }
      }
    }
    return canvas;
  }
  function drawCanvasCuttingMarks(ctx, rect, dpi) {
    const markLenPx = mmToPx(3, dpi);
    const offsetPx = mmToPx(0.5, dpi);
    const strokeW = Math.max(1, mmToPx(0.15, dpi));
    ctx.strokeStyle = "#787878";
    ctx.lineWidth = strokeW;
    const cellX = mmToPx(rect.cellX, dpi);
    const cellY = mmToPx(rect.cellY, dpi);
    const cellW = mmToPx(rect.cellW, dpi);
    const cellH = mmToPx(rect.cellH, dpi);
    const x1 = cellX;
    const y1 = cellY;
    const x2 = cellX + cellW;
    const y2 = cellY + cellH;
    ctx.beginPath();
    ctx.moveTo(x1 - offsetPx - markLenPx, y1);
    ctx.lineTo(x1 - offsetPx, y1);
    ctx.moveTo(x1, y1 - offsetPx - markLenPx);
    ctx.lineTo(x1, y1 - offsetPx);
    ctx.moveTo(x2 + offsetPx, y1);
    ctx.lineTo(x2 + offsetPx + markLenPx, y1);
    ctx.moveTo(x2, y1 - offsetPx - markLenPx);
    ctx.lineTo(x2, y1 - offsetPx);
    ctx.moveTo(x1 - offsetPx - markLenPx, y2);
    ctx.lineTo(x1 - offsetPx, y2);
    ctx.moveTo(x1, y2 + offsetPx);
    ctx.lineTo(x1, y2 + offsetPx + markLenPx);
    ctx.moveTo(x2 + offsetPx, y2);
    ctx.lineTo(x2 + offsetPx + markLenPx, y2);
    ctx.moveTo(x2, y2 + offsetPx);
    ctx.lineTo(x2, y2 + offsetPx + markLenPx);
    ctx.stroke();
  }
  function canvasToBlob(canvas, mimeType = "image/jpeg", quality = 0.95) {
    return new Promise((resolve) => {
      canvas.toBlob((blob) => resolve(blob), mimeType, quality);
    });
  }
  function downloadBlob(blob, filename) {
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    setTimeout(() => {
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    }, 200);
  }

  // src/services/printService.js
  function printSheet(layout, croppedCanvas, options = {}) {
    const sheetCanvas = renderSheetToCanvas(layout, croppedCanvas, {
      dpi: 300,
      borderColor: options.borderColor || "#000000",
      cuttingMarks: options.cuttingMarks || "none"
    });
    const dataUrl = sheetCanvas.toDataURL("image/png");
    let printArea = document.getElementById("print-mount-area");
    if (printArea) {
      printArea.remove();
    }
    printArea = document.createElement("div");
    printArea.id = "print-mount-area";
    printArea.className = "print-mount-area";
    const img = document.createElement("img");
    img.src = dataUrl;
    img.style.width = `${layout.paperWmm}mm`;
    img.style.height = `${layout.paperHmm}mm`;
    img.style.display = "block";
    printArea.appendChild(img);
    document.body.appendChild(printArea);
    setTimeout(() => {
      try {
        window.print();
      } catch (e) {
        console.error("Browser print dialog error:", e);
      } finally {
        setTimeout(() => {
          if (printArea && printArea.parentNode) {
            printArea.parentNode.removeChild(printArea);
          }
        }, 1e3);
      }
    }, 150);
  }

  
  // src/services/storageService.js
  var DB_NAME = "PhotoPrintID_DB";
  var DB_VERSION = 2;
  var STORE_PROJECTS = "projects";
  var STORE_PRESETS = "presets";
  var STORE_CUSTOM_PAPERS = "custom_papers";
  var STORE_CUSTOM_PHOTOS = "custom_photos";
  var STORE_CUSTOM_PRINTS = "custom_prints";
  var SETTINGS_KEY = "photoprint_settings";
  var dbPromise = null;

  function getDB() {
    if (dbPromise) return dbPromise;
    dbPromise = new Promise((resolve, reject) => {
      const request = indexedDB.open(DB_NAME, DB_VERSION);
      request.onupgradeneeded = (event) => {
        const db = event.target.result;
        if (!db.objectStoreNames.contains(STORE_PROJECTS)) {
          const projectStore = db.createObjectStore(STORE_PROJECTS, { keyPath: "id" });
          projectStore.createIndex("updatedAt", "updatedAt", { unique: false });
        }
        if (!db.objectStoreNames.contains(STORE_PRESETS)) {
          db.createObjectStore(STORE_PRESETS, { keyPath: "id" });
        }
        if (!db.objectStoreNames.contains(STORE_CUSTOM_PAPERS)) {
          db.createObjectStore(STORE_CUSTOM_PAPERS, { keyPath: "id" });
        }
        if (!db.objectStoreNames.contains(STORE_CUSTOM_PHOTOS)) {
          db.createObjectStore(STORE_CUSTOM_PHOTOS, { keyPath: "id" });
        }
        if (!db.objectStoreNames.contains(STORE_CUSTOM_PRINTS)) {
          db.createObjectStore(STORE_CUSTOM_PRINTS, { keyPath: "id" });
        }
      };
      request.onsuccess = (event) => {
        resolve(event.target.result);
      };
      request.onerror = (event) => {
        console.error("IndexedDB open error:", event.target.error);
        reject(event.target.error);
      };
    });
    return dbPromise;
  }

  async function saveProject(project) {
    const db = await getDB();
    return new Promise((resolve, reject) => {
      const tx = db.transaction(STORE_PROJECTS, "readwrite");
      const store = tx.objectStore(STORE_PROJECTS);
      const record = { ...project, updatedAt: Date.now() };
      const request = store.put(record);
      request.onsuccess = () => resolve(record.id);
      request.onerror = (e) => reject(e.target.error);
    });
  }

  async function getAllProjects() {
    const db = await getDB();
    return new Promise((resolve, reject) => {
      const tx = db.transaction(STORE_PROJECTS, "readonly");
      const store = tx.objectStore(STORE_PROJECTS);
      const index = store.index("updatedAt");
      const request = index.getAll();
      request.onsuccess = () => {
        const results = request.result || [];
        results.sort((a, b) => (b.updatedAt || 0) - (a.updatedAt || 0));
        resolve(results);
      };
      request.onerror = (e) => reject(e.target.error);
    });
  }

  async function deleteProject(id) {
    const db = await getDB();
    return new Promise((resolve, reject) => {
      const tx = db.transaction(STORE_PROJECTS, "readwrite");
      const store = tx.objectStore(STORE_PROJECTS);
      const request = store.delete(id);
      request.onsuccess = () => resolve(true);
      request.onerror = (e) => reject(e.target.error);
    });
  }

  async function getAllPresets() {
    const db = await getDB();
    return new Promise((resolve, reject) => {
      const tx = db.transaction(STORE_PRESETS, "readonly");
      const store = tx.objectStore(STORE_PRESETS);
      const request = store.getAll();
      request.onsuccess = () => resolve(request.result || []);
      request.onerror = (e) => reject(e.target.error);
    });
  }

  // PHASE 3: Custom Papers IndexedDB CRUD
  async function saveCustomPaper(paper) {
    const db = await getDB();
    return new Promise((resolve, reject) => {
      const tx = db.transaction(STORE_CUSTOM_PAPERS, "readwrite");
      const store = tx.objectStore(STORE_CUSTOM_PAPERS);
      const record = { ...paper, updatedAt: Date.now() };
      const request = store.put(record);
      request.onsuccess = () => resolve(record.id);
      request.onerror = (e) => reject(e.target.error);
    });
  }

  async function getAllCustomPapers() {
    const db = await getDB();
    return new Promise((resolve, reject) => {
      const tx = db.transaction(STORE_CUSTOM_PAPERS, "readonly");
      const store = tx.objectStore(STORE_CUSTOM_PAPERS);
      const request = store.getAll();
      request.onsuccess = () => resolve(request.result || []);
      request.onerror = (e) => reject(e.target.error);
    });
  }

  async function deleteCustomPaper(id) {
    const db = await getDB();
    return new Promise((resolve, reject) => {
      const tx = db.transaction(STORE_CUSTOM_PAPERS, "readwrite");
      const store = tx.objectStore(STORE_CUSTOM_PAPERS);
      const request = store.delete(id);
      request.onsuccess = () => resolve(true);
      request.onerror = (e) => reject(e.target.error);
    });
  }

  // PHASE 4: Custom Photos IndexedDB CRUD
  async function saveCustomPhoto(photo) {
    const db = await getDB();
    return new Promise((resolve, reject) => {
      const tx = db.transaction(STORE_CUSTOM_PHOTOS, "readwrite");
      const store = tx.objectStore(STORE_CUSTOM_PHOTOS);
      const record = { ...photo, updatedAt: Date.now() };
      const request = store.put(record);
      request.onsuccess = () => resolve(record.id);
      request.onerror = (e) => reject(e.target.error);
    });
  }

  async function getAllCustomPhotos() {
    const db = await getDB();
    return new Promise((resolve, reject) => {
      const tx = db.transaction(STORE_CUSTOM_PHOTOS, "readonly");
      const store = tx.objectStore(STORE_CUSTOM_PHOTOS);
      const request = store.getAll();
      request.onsuccess = () => resolve(request.result || []);
      request.onerror = (e) => reject(e.target.error);
    });
  }

  async function deleteCustomPhoto(id) {
    const db = await getDB();
    return new Promise((resolve, reject) => {
      const tx = db.transaction(STORE_CUSTOM_PHOTOS, "readwrite");
      const store = tx.objectStore(STORE_CUSTOM_PHOTOS);
      const request = store.delete(id);
      request.onsuccess = () => resolve(true);
      request.onerror = (e) => reject(e.target.error);
    });
  }

  function loadSettings() {
    try {
      const data = localStorage.getItem(SETTINGS_KEY);
      if (data) {
        return JSON.parse(data);
      }
    } catch (e) {
      console.error("Failed to parse settings from localStorage", e);
    }
    return {
      theme: "system",
      defaultDpi: 300,
      defaultUnit: "mm",
      saveRecent: true,
      hapticFeedback: true,
      printShopMode: false,
      defaultPhotoSizeId: "passport-eu-uk",
      defaultPaperSizeId: "paper-a4"
    };
  }

  function saveSettings(settings) {
    try {
      localStorage.setItem(SETTINGS_KEY, JSON.stringify(settings));
    } catch (e) {
      console.error("Failed to save settings to localStorage", e);
    }
  }
// src/features/faceDetection/faceGuide.js
  function analyzeFacePosition(canvas) {
    if (!canvas || !canvas.width || !canvas.height) {
      return { detected: false, message: "Face guide active (manual positioning)", statusColor: "neutral" };
    }
    const ctx = canvas.getContext("2d");
    const width = canvas.width;
    const height = canvas.height;
    const imgData = ctx.getImageData(0, 0, width, height);
    const data = imgData.data;
    let minX = width, maxX = 0, minY = height, maxY = 0;
    let skinPixelCount = 0;
    for (let y = 0; y < height; y += 4) {
      for (let x = 0; x < width; x += 4) {
        const idx = (y * width + x) * 4;
        const r = data[idx];
        const g = data[idx + 1];
        const b = data[idx + 2];
        if (isSkinPixel(r, g, b)) {
          skinPixelCount++;
          if (x < minX) minX = x;
          if (x > maxX) maxX = x;
          if (y < minY) minY = y;
          if (y > maxY) maxY = y;
        }
      }
    }
    const totalSampledPixels = width / 4 * (height / 4);
    const skinRatio = skinPixelCount / totalSampledPixels;
    if (skinRatio < 0.05 || minX >= maxX || minY >= maxY) {
      return {
        detected: false,
        message: "Face guide active (align head in top half of oval)",
        statusColor: "neutral"
      };
    }
    const faceW = maxX - minX;
    const faceH = maxY - minY;
    const faceCenterX = minX + faceW / 2;
    const faceCenterY = minY + faceH / 2;
    const targetCenterY = height * 0.42;
    const faceHeightRatio = faceH / height;
    let message = "\u2713 Face position looks good";
    let statusColor = "success";
    if (faceCenterY < targetCenterY - height * 0.1) {
      message = "Move face slightly downward";
      statusColor = "warning";
    } else if (faceCenterY > targetCenterY + height * 0.1) {
      message = "Move face slightly upward";
      statusColor = "warning";
    } else if (faceHeightRatio < 0.35) {
      message = "Zoom in: face is too small relative to frame";
      statusColor = "warning";
    } else if (faceHeightRatio > 0.8) {
      message = "Zoom out: face is too large relative to frame";
      statusColor = "warning";
    }
    return {
      detected: true,
      message,
      statusColor,
      box: {
        x: minX / width,
        y: minY / height,
        w: faceW / width,
        h: faceH / height,
        centerX: faceCenterX / width,
        centerY: faceCenterY / height
      }
    };
  }
  function isSkinPixel(r, g, b) {
    return r > 95 && g > 40 && b > 20 && Math.max(r, g, b) - Math.min(r, g, b) > 15 && Math.abs(r - g) > 15 && r > g && r > b;
  }
  function drawBiometricOvalGuide(ctx, width, height) {
    ctx.save();
    ctx.strokeStyle = "rgba(16, 185, 129, 0.7)";
    ctx.lineWidth = Math.max(2, Math.round(width * 6e-3));
    ctx.setLineDash([6, 6]);
    const centerX = width / 2;
    const centerY = height * 0.44;
    const radiusX = width * 0.28;
    const radiusY = height * 0.32;
    ctx.beginPath();
    ctx.ellipse(centerX, centerY, radiusX, radiusY, 0, 0, Math.PI * 2);
    ctx.stroke();
    ctx.strokeStyle = "rgba(59, 130, 246, 0.6)";
    ctx.beginPath();
    ctx.moveTo(centerX - radiusX * 1.2, centerY - radiusY * 0.15);
    ctx.lineTo(centerX + radiusX * 1.2, centerY - radiusY * 0.15);
    ctx.stroke();
    ctx.restore();
  }

  
  // src/services/toastService.js
  function showToast(message, type = "info") {
    const shelf = document.getElementById("toast-shelf");
    if (!shelf) {
      console.log(`[${type}] ${message}`);
      return;
    }
    const toast = document.createElement("div");
    toast.className = `toast-message toast-${type}`;
    const icon = type === "success" ? "✓" : type === "error" ? "⚠️" : "ℹ️";
    toast.innerHTML = `<span style="font-size: 16px;">${icon}</span><span>${message}</span>`;
    shelf.appendChild(toast);
    setTimeout(() => {
      toast.style.opacity = "0";
      toast.style.transform = "translateY(12px) scale(0.95)";
      toast.style.transition = "all 0.25s ease";
      setTimeout(() => {
        if (toast.parentNode) toast.parentNode.removeChild(toast);
      }, 260);
    }, 3200);
  }
// src/services/pdfPrintService.js
  var pdfPrintState = {
    pdfDoc: null,
    fileBuffer: null,
    fileName: "",
    totalPages: 0,
    pages: [], // Array of { pageNum, widthPt, heightPt, widthMm, heightMm, isLandscape, selected, canvas }
    isRendering: false
  };

  function initPdfPrintService() {
    if (typeof pdfjsLib !== "undefined") {
      pdfjsLib.GlobalWorkerOptions.workerSrc = "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js";
    }

    const btnBrowse = document.getElementById("btn-browse-pdf");
    const inputPdf = document.getElementById("input-pdf-file");
    const dropzone = document.getElementById("pdf-dropzone");

    btnBrowse?.addEventListener("click", () => inputPdf?.click());
    inputPdf?.addEventListener("change", (e) => {
      if (e.target.files && e.target.files.length > 0) {
        handlePdfFile(e.target.files[0]);
      }
    });

    if (dropzone) {
      dropzone.addEventListener("dragover", (e) => {
        e.preventDefault();
        dropzone.classList.add("drag-over");
      });
      dropzone.addEventListener("dragleave", () => {
        dropzone.classList.remove("drag-over");
      });
      dropzone.addEventListener("drop", (e) => {
        e.preventDefault();
        dropzone.classList.remove("drag-over");
        if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
          handlePdfFile(e.dataTransfer.files[0]);
        }
      });
    }

    document.getElementById("btn-pdf-select-all")?.addEventListener("click", () => {
      setAllPdfPagesSelection(true);
    });
    document.getElementById("btn-pdf-deselect-all")?.addEventListener("click", () => {
      setAllPdfPagesSelection(false);
    });
    document.getElementById("btn-pdf-change-file")?.addEventListener("click", () => {
      resetPdfPrintManager();
    });

    document.getElementById("btn-pdf-apply-range")?.addEventListener("click", () => {
      const rangeInput = document.getElementById("input-pdf-range");
      applyPdfPageRange(rangeInput?.value || "");
    });

    document.getElementById("input-pdf-range")?.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        applyPdfPageRange(e.target.value || "");
      }
    });

    document.getElementById("btn-pdf-print-selected")?.addEventListener("click", () => {
      printSelectedPdfPages();
    });

    document.getElementById("btn-pdf-download-subset")?.addEventListener("click", () => {
      downloadSelectedPdfSubset();
    });

    document.getElementById("btn-dismiss-pdf-error")?.addEventListener("click", () => {
      document.getElementById("pdf-error-banner")?.classList.add("hidden");
    });
  }

  function resetPdfPrintManager() {
    pdfPrintState.pdfDoc = null;
    pdfPrintState.fileBuffer = null;
    pdfPrintState.fileName = "";
    pdfPrintState.totalPages = 0;
    pdfPrintState.pages = [];

    document.getElementById("pdf-upload-panel")?.classList.remove("hidden");
    document.getElementById("pdf-loading-panel")?.classList.add("hidden");
    document.getElementById("pdf-manager-panel")?.classList.add("hidden");
    document.getElementById("pdf-error-banner")?.classList.add("hidden");
    const grid = document.getElementById("pdf-pages-grid");
    if (grid) grid.innerHTML = "";
    const inputPdf = document.getElementById("input-pdf-file");
    if (inputPdf) inputPdf.value = "";
  }

  async function handlePdfFile(file) {
    if (!file) return;
    if (file.type && file.type !== "application/pdf" && !file.name.toLowerCase().endsWith(".pdf")) {
      showPdfError("Invalid File Format", "Please select a valid PDF document (.pdf).");
      return;
    }

    document.getElementById("pdf-error-banner")?.classList.add("hidden");
    document.getElementById("pdf-upload-panel")?.classList.add("hidden");
    document.getElementById("pdf-loading-panel")?.classList.remove("hidden");
    const progressBar = document.getElementById("pdf-progress-bar");
    if (progressBar) progressBar.style.width = "10%";

    try {
      const buffer = await file.arrayBuffer();
      pdfPrintState.fileBuffer = buffer;
      pdfPrintState.fileName = file.name;

      if (typeof pdfjsLib === "undefined") {
        throw new Error("PDF.js library is not available. Check your internet connection.");
      }

      const loadingTask = pdfjsLib.getDocument({ data: buffer });
      const pdf = await loadingTask.promise;
      pdfPrintState.pdfDoc = pdf;
      pdfPrintState.totalPages = pdf.numPages;

      document.getElementById("pdf-doc-name").textContent = file.name;
      if (progressBar) progressBar.style.width = "30%";

      await renderPdfPageGrid(pdf);

      document.getElementById("pdf-loading-panel")?.classList.add("hidden");
      document.getElementById("pdf-manager-panel")?.classList.remove("hidden");
      updatePdfSelectionBadge();
      showToast(`Loaded ${pdf.numPages} PDF pages successfully.`, "success");
    } catch (err) {
      console.error("PDF Parsing error:", err);
      document.getElementById("pdf-loading-panel")?.classList.add("hidden");
      document.getElementById("pdf-upload-panel")?.classList.remove("hidden");
      showPdfError("PDF Load Error", err.message || "Failed to parse PDF document. It may be corrupt or encrypted.");
    }
  }

  function showPdfError(title, message) {
    const banner = document.getElementById("pdf-error-banner");
    const tEl = document.getElementById("pdf-error-title");
    const mEl = document.getElementById("pdf-error-message");
    if (banner && tEl && mEl) {
      tEl.textContent = title;
      mEl.textContent = message;
      banner.classList.remove("hidden");
    }
    showToast(message, "error");
  }

  async function renderPdfPageGrid(pdf) {
    const grid = document.getElementById("pdf-pages-grid");
    if (!grid) return;
    grid.innerHTML = "";
    pdfPrintState.pages = [];

    const total = pdf.numPages;
    const progressBar = document.getElementById("pdf-progress-bar");

    for (let i = 1; i <= total; i++) {
      const page = await pdf.getPage(i);
      const viewport = page.getViewport({ scale: 1.0 });

      const widthMm = Math.round((viewport.width / 72) * 25.4 * 10) / 10;
      const heightMm = Math.round((viewport.height / 72) * 25.4 * 10) / 10;
      const isLandscape = viewport.width > viewport.height;

      const pageItem = {
        pageNum: i,
        widthPt: viewport.width,
        heightPt: viewport.height,
        widthMm,
        heightMm,
        isLandscape,
        selected: true,
        canvas: null
      };
      pdfPrintState.pages.push(pageItem);

      // Create card element
      const card = document.createElement("div");
      card.className = "pdf-page-card selected";
      card.dataset.page = String(i);

      const thumbWrap = document.createElement("div");
      thumbWrap.className = "pdf-page-thumb-wrap";

      const pageBadge = document.createElement("div");
      pageBadge.className = "pdf-page-badge";
      pageBadge.textContent = `Page ${i}`;

      const checkmark = document.createElement("div");
      checkmark.className = "pdf-select-indicator";
      checkmark.textContent = "✓";

      const thumbCanvas = document.createElement("canvas");
      // Render preview thumbnail with 160px max width
      const scale = 160 / viewport.width;
      const thumbViewport = page.getViewport({ scale });
      thumbCanvas.width = thumbViewport.width;
      thumbCanvas.height = thumbViewport.height;

      const ctx = thumbCanvas.getContext("2d");
      await page.render({ canvasContext: ctx, viewport: thumbViewport }).promise;
      pageItem.canvas = thumbCanvas;

      thumbWrap.appendChild(pageBadge);
      thumbWrap.appendChild(checkmark);
      thumbWrap.appendChild(thumbCanvas);

      const meta = document.createElement("div");
      meta.className = "pdf-page-meta";
      meta.innerHTML = `<span>${isLandscape ? "Landscape" : "Portrait"}</span><span>${widthMm}×${heightMm} mm</span>`;

      card.appendChild(thumbWrap);
      card.appendChild(meta);

      card.addEventListener("click", () => {
        togglePdfPageSelection(i);
      });

      grid.appendChild(card);

      if (progressBar) {
        const pct = Math.round(30 + (i / total) * 70);
        progressBar.style.width = `${pct}%`;
      }
    }
  }

  function togglePdfPageSelection(pageNum) {
    const pageItem = pdfPrintState.pages.find((p) => p.pageNum === pageNum);
    if (!pageItem) return;
    pageItem.selected = !pageItem.selected;

    const card = document.querySelector(`.pdf-page-card[data-page="${pageNum}"]`);
    if (card) {
      if (pageItem.selected) {
        card.classList.add("selected");
      } else {
        card.classList.remove("selected");
      }
    }
    updatePdfSelectionBadge();
  }

  function setAllPdfPagesSelection(selected) {
    pdfPrintState.pages.forEach((p) => {
      p.selected = selected;
      const card = document.querySelector(`.pdf-page-card[data-page="${p.pageNum}"]`);
      if (card) {
        if (selected) card.classList.add("selected");
        else card.classList.remove("selected");
      }
    });
    updatePdfSelectionBadge();
    showToast(selected ? "All pages selected" : "All pages deselected", "info");
  }

  function updatePdfSelectionBadge() {
    const total = pdfPrintState.pages.length;
    const selected = pdfPrintState.pages.filter((p) => p.selected).length;
    const badge = document.getElementById("pdf-selection-badge");
    if (badge) {
      badge.textContent = `Selected: ${selected} / ${total} pages`;
      badge.className = `status-badge ${selected > 0 ? "success" : "warning"}`;
    }
  }

  function applyPdfPageRange(rangeStr) {
    if (!rangeStr || !rangeStr.trim()) {
      showToast("Please enter a page range (e.g. 1, 3, 5-8).", "warning");
      return;
    }

    const total = pdfPrintState.pages.length;
    if (total === 0) return;

    const selectedSet = new Set();
    const parts = rangeStr.split(",");

    for (const part of parts) {
      const trimmed = part.trim();
      if (!trimmed) continue;
      if (trimmed.includes("-")) {
        const [startStr, endStr] = trimmed.split("-");
        const start = parseInt(startStr.trim(), 10);
        const end = parseInt(endStr.trim(), 10);
        if (isNaN(start) || isNaN(end) || start < 1 || end > total || start > end) {
          showToast(`Invalid range "${trimmed}". Total pages: ${total}.`, "error");
          return;
        }
        for (let p = start; p <= end; p++) selectedSet.add(p);
      } else {
        const pageNum = parseInt(trimmed, 10);
        if (isNaN(pageNum) || pageNum < 1 || pageNum > total) {
          showToast(`Invalid page number "${trimmed}". Must be between 1 and ${total}.`, "error");
          return;
        }
        selectedSet.add(pageNum);
      }
    }

    pdfPrintState.pages.forEach((p) => {
      p.selected = selectedSet.has(p.pageNum);
      const card = document.querySelector(`.pdf-page-card[data-page="${p.pageNum}"]`);
      if (card) {
        if (p.selected) card.classList.add("selected");
        else card.classList.remove("selected");
      }
    });

    updatePdfSelectionBadge();
    showToast(`Applied page range: selected ${selectedSet.size} pages.`, "success");
  }

  async function printSelectedPdfPages() {
    const selectedPages = pdfPrintState.pages.filter((p) => p.selected);
    if (selectedPages.length === 0) {
      showToast("Select at least one page before printing.", "warning");
      return;
    }

    showToast(`Preparing ${selectedPages.length} pages for printing...`, "info");

    let printArea = document.getElementById("print-mount-area");
    if (printArea) printArea.remove();

    printArea = document.createElement("div");
    printArea.id = "print-mount-area";
    printArea.className = "print-mount-area";

    try {
      for (let i = 0; i < selectedPages.length; i++) {
        const pItem = selectedPages[i];
        const page = await pdfPrintState.pdfDoc.getPage(pItem.pageNum);
        // Print scale ~2.5 for crisp physical print detail (approx 180-300 DPI)
        const printScale = 2.0;
        const viewport = page.getViewport({ scale: printScale });

        const printCanvas = document.createElement("canvas");
        printCanvas.width = viewport.width;
        printCanvas.height = viewport.height;
        printCanvas.style.width = `${pItem.widthMm}mm`;
        printCanvas.style.height = `${pItem.heightMm}mm`;
        printCanvas.style.display = "block";
        printCanvas.style.margin = "0 auto";
        if (i < selectedPages.length - 1) {
          printCanvas.style.pageBreakAfter = "always";
          printCanvas.style.breakAfter = "page";
        }

        const ctx = printCanvas.getContext("2d");
        await page.render({ canvasContext: ctx, viewport }).promise;

        const img = document.createElement("img");
        img.src = printCanvas.toDataURL("image/png");
        img.style.width = `${pItem.widthMm}mm`;
        img.style.height = `${pItem.heightMm}mm`;
        img.style.display = "block";
        img.style.margin = "0 auto";
        if (i < selectedPages.length - 1) {
          img.style.pageBreakAfter = "always";
          img.style.breakAfter = "page";
        }

        printArea.appendChild(img);
      }

      document.body.appendChild(printArea);

      setTimeout(() => {
        try {
          window.print();
        } catch (e) {
          console.error("Window print error:", e);
        } finally {
          setTimeout(() => {
            if (printArea && printArea.parentNode) {
              printArea.parentNode.removeChild(printArea);
            }
          }, 1500);
        }
      }, 250);
    } catch (e) {
      console.error("Print rendering failed:", e);
      showToast("Error preparing pages for print.", "error");
    }
  }

  async function downloadSelectedPdfSubset() {
    const selectedPages = pdfPrintState.pages.filter((p) => p.selected);
    if (selectedPages.length === 0) {
      showToast("Select at least one page before exporting.", "warning");
      return;
    }

    if (typeof PDFLib === "undefined") {
      showToast("PDF-Lib is required for lossless export.", "error");
      return;
    }

    showToast(`Generating PDF with ${selectedPages.length} pages...`, "info");

    try {
      const srcDoc = await PDFLib.PDFDocument.load(pdfPrintState.fileBuffer);
      const newDoc = await PDFLib.PDFDocument.create();

      const pageIndices = selectedPages.map((p) => p.pageNum - 1);
      const copiedPages = await newDoc.copyPages(srcDoc, pageIndices);

      for (const p of copiedPages) {
        newDoc.addPage(p);
      }

      const pdfBytes = await newDoc.save();
      const blob = new Blob([pdfBytes], { type: "application/pdf" });
      const safeName = pdfPrintState.fileName.replace(/\\.pdf$/i, "");
      downloadBlob(blob, `${safeName}_Selected_${selectedPages.length}pages.pdf`);
      showToast(`Exported ${selectedPages.length} pages successfully!`, "success");
    } catch (err) {
      console.error("PDF-Lib subset creation error:", err);
      showToast("Failed to create subset PDF: " + err.message, "error");
    }
  }

// src/services/customPrintService.js
  var cpState = {
    paperKey: "A4",
    paperWmm: 210,
    paperHmm: 297,
    orientation: "portrait",
    marginTopMm: 10,
    marginBottomMm: 10,
    marginLeftMm: 10,
    marginRightMm: 10,
    marginsLinked: true,
    marginsIgnored: false,
    header: {
      enabled: false,
      heightMm: 15,
      left: "Company Name",
      center: "Document Title",
      right: "Date"
    },
    footer: {
      enabled: false,
      heightMm: 15,
      left: "",
      center: "",
      right: "Page 1 of 1"
    },
    objects: [], // { id, img, workingCanvas, naturalW, naturalH, xMm, yMm, wMm, hMm, rotationDeg, cropRect: null, zIndex: 1 }
    selectedObjId: null,
    lockAspectRatio: true,
    gridSnap: false,
    gridStepMm: 5,
    cropActiveObjId: null,
    cropAspect: "free",
    cropZoom: 1,
    undoStack: [],
    redoStack: []
  };

  const CP_PRESETS = {
    A4: { w: 210, h: 297, name: "A4 (210 × 297 mm)" },
    A5: { w: 148, h: 210, name: "A5 (148 × 210 mm)" },
    A6: { w: 105, h: 148, name: "A6 (105 × 148 mm)" },
    Letter: { w: 215.9, h: 279.4, name: "US Letter (8.5 × 11 in)" },
    Legal: { w: 215.9, h: 355.6, name: "US Legal (8.5 × 14 in)" },
    "4x6": { w: 101.6, h: 152.4, name: "Photo 4 × 6 in (101.6 × 152.4 mm)" },
    "5x7": { w: 127, h: 177.8, name: "Photo 5 × 7 in (127 × 177.8 mm)" }
  };

  function initCustomPrintService() {
    // Paper select
    document.getElementById("cp-select-paper")?.addEventListener("change", (e) => {
      const val = e.target.value;
      if (val === "custom") {
        const w = parseFloat(prompt("Enter Paper Width in mm:", String(cpState.paperWmm)));
        const h = parseFloat(prompt("Enter Paper Height in mm:", String(cpState.paperHmm)));
        if (w > 0 && h > 0) {
          cpState.paperWmm = w;
          cpState.paperHmm = h;
          cpState.paperKey = "custom";
        }
      } else if (CP_PRESETS[val]) {
        cpState.paperKey = val;
        const p = CP_PRESETS[val];
        if (cpState.orientation === "landscape") {
          cpState.paperWmm = Math.max(p.w, p.h);
          cpState.paperHmm = Math.min(p.w, p.h);
        } else {
          cpState.paperWmm = Math.min(p.w, p.h);
          cpState.paperHmm = Math.max(p.w, p.h);
        }
      }
      renderCustomPrintCanvas();
    });

    // Orientation buttons
    const btnPort = document.getElementById("cp-btn-orient-portrait");
    const btnLand = document.getElementById("cp-btn-orient-landscape");
    btnPort?.addEventListener("click", () => {
      if (cpState.orientation !== "portrait") {
        cpState.orientation = "portrait";
        btnPort.classList.add("active");
        btnLand?.classList.remove("active");
        const w = Math.min(cpState.paperWmm, cpState.paperHmm);
        const h = Math.max(cpState.paperWmm, cpState.paperHmm);
        cpState.paperWmm = w;
        cpState.paperHmm = h;
        renderCustomPrintCanvas();
      }
    });
    btnLand?.addEventListener("click", () => {
      if (cpState.orientation !== "landscape") {
        cpState.orientation = "landscape";
        btnLand.classList.add("active");
        btnPort?.classList.remove("active");
        const w = Math.max(cpState.paperWmm, cpState.paperHmm);
        const h = Math.min(cpState.paperWmm, cpState.paperHmm);
        cpState.paperWmm = w;
        cpState.paperHmm = h;
        renderCustomPrintCanvas();
      }
    });

    // Margins modal triggers
    document.getElementById("cp-btn-open-margins")?.addEventListener("click", () => {
      document.getElementById("modal-cp-margins")?.classList.remove("hidden");
    });
    document.getElementById("btn-close-cp-margins")?.addEventListener("click", () => {
      document.getElementById("modal-cp-margins")?.classList.add("hidden");
    });
    document.getElementById("btn-apply-cp-margins")?.addEventListener("click", () => {
      document.getElementById("modal-cp-margins")?.classList.add("hidden");
      renderCustomPrintCanvas();
    });

    // Link margins toggle
    document.getElementById("cp-btn-link-margins")?.addEventListener("click", () => {
      cpState.marginsLinked = !cpState.marginsLinked;
      const text = document.getElementById("cp-text-link");
      if (text) text.textContent = cpState.marginsLinked ? "Linked Margins" : "Unlinked Margins";
      showToast(cpState.marginsLinked ? "Margins linked together" : "Margins unlinked for independent control", "info");
    });

    // Ignore margins checkbox
    const chkIgnore = document.getElementById("cp-chk-ignore-margins");
    chkIgnore?.addEventListener("change", (e) => {
      cpState.marginsIgnored = e.target.checked;
      renderCustomPrintCanvas();
    });

    // 4 margin inputs
    ["top", "bottom", "left", "right"].forEach((side) => {
      const input = document.getElementById(`cp-margin-${side}`);
      input?.addEventListener("input", (e) => {
        const val = parseFloat(e.target.value) || 0;
        if (cpState.marginsLinked) {
          cpState.marginTopMm = val;
          cpState.marginBottomMm = val;
          cpState.marginLeftMm = val;
          cpState.marginRightMm = val;
          ["top", "bottom", "left", "right"].forEach((s) => {
            const el = document.getElementById(`cp-margin-${s}`);
            if (el && el !== e.target) el.value = val;
          });
        } else {
          if (side === "top") cpState.marginTopMm = val;
          if (side === "bottom") cpState.marginBottomMm = val;
          if (side === "left") cpState.marginLeftMm = val;
          if (side === "right") cpState.marginRightMm = val;
        }
        updateMarginsSummaryBadge();
        renderCustomPrintCanvas();
      });
    });

    // Header & footer modal triggers
    document.getElementById("cp-btn-open-header-footer")?.addEventListener("click", () => {
      document.getElementById("modal-cp-header-footer")?.classList.remove("hidden");
    });
    document.getElementById("btn-close-cp-hf")?.addEventListener("click", () => {
      document.getElementById("modal-cp-header-footer")?.classList.add("hidden");
    });
    document.getElementById("btn-apply-cp-hf")?.addEventListener("click", () => {
      document.getElementById("modal-cp-header-footer")?.classList.add("hidden");
      renderCustomPrintCanvas();
    });

    // Header & Footer inputs binding
    document.getElementById("cp-enable-header")?.addEventListener("change", (e) => {
      cpState.header.enabled = e.target.checked;
      renderCustomPrintCanvas();
    });
    document.getElementById("cp-header-height")?.addEventListener("input", (e) => {
      cpState.header.heightMm = parseFloat(e.target.value) || 15;
      renderCustomPrintCanvas();
    });
    document.getElementById("cp-header-left")?.addEventListener("input", (e) => {
      cpState.header.left = e.target.value;
      renderCustomPrintCanvas();
    });
    document.getElementById("cp-header-center")?.addEventListener("input", (e) => {
      cpState.header.center = e.target.value;
      renderCustomPrintCanvas();
    });
    document.getElementById("cp-header-right")?.addEventListener("input", (e) => {
      cpState.header.right = e.target.value;
      renderCustomPrintCanvas();
    });

    document.getElementById("cp-enable-footer")?.addEventListener("change", (e) => {
      cpState.footer.enabled = e.target.checked;
      renderCustomPrintCanvas();
    });
    document.getElementById("cp-footer-height")?.addEventListener("input", (e) => {
      cpState.footer.heightMm = parseFloat(e.target.value) || 15;
      renderCustomPrintCanvas();
    });
    document.getElementById("cp-footer-left")?.addEventListener("input", (e) => {
      cpState.footer.left = e.target.value;
      renderCustomPrintCanvas();
    });
    document.getElementById("cp-footer-center")?.addEventListener("input", (e) => {
      cpState.footer.center = e.target.value;
      renderCustomPrintCanvas();
    });
    document.getElementById("cp-footer-right")?.addEventListener("input", (e) => {
      cpState.footer.right = e.target.value;
      renderCustomPrintCanvas();
    });

    // Add Image Button
    const btnAddImg = document.getElementById("cp-btn-add-image");
    const inputImg = document.getElementById("cp-image-file-input");
    btnAddImg?.addEventListener("click", () => inputImg?.click());
    inputImg?.addEventListener("change", (e) => {
      if (e.target.files && e.target.files.length > 0) {
        addCustomPrintImageFile(e.target.files[0]);
      }
    });

    // Alignment tools
    document.getElementById("cp-align-left")?.addEventListener("click", () => alignCustomPrintObject("left"));
    document.getElementById("cp-align-center")?.addEventListener("click", () => alignCustomPrintObject("center"));
    document.getElementById("cp-align-right")?.addEventListener("click", () => alignCustomPrintObject("right"));
    document.getElementById("cp-align-top")?.addEventListener("click", () => alignCustomPrintObject("top"));
    document.getElementById("cp-align-middle")?.addEventListener("click", () => alignCustomPrintObject("middle"));
    document.getElementById("cp-align-bottom")?.addEventListener("click", () => alignCustomPrintObject("bottom"));

    // Undo / Redo
    document.getElementById("cp-btn-undo")?.addEventListener("click", () => undoCustomPrintState());
    document.getElementById("cp-btn-redo")?.addEventListener("click", () => redoCustomPrintState());

    // Grid toggle
    document.getElementById("cp-btn-toggle-grid")?.addEventListener("click", () => {
      cpState.gridSnap = !cpState.gridSnap;
      const overlay = document.getElementById("cp-grid-overlay");
      if (overlay) {
        if (cpState.gridSnap) overlay.classList.remove("hidden");
        else overlay.classList.add("hidden");
      }
      showToast(cpState.gridSnap ? "Grid snapping enabled (5mm)" : "Grid snapping disabled", "info");
    });

    // Inspector field two-way binding
    document.getElementById("cp-input-w")?.addEventListener("input", (e) => {
      const obj = getSelectedCpObject();
      if (!obj) return;
      const newW = parseFloat(e.target.value);
      if (newW > 0) {
        if (cpState.lockAspectRatio) {
          const ratio = obj.hMm / obj.wMm;
          obj.hMm = Math.round(newW * ratio * 10) / 10;
          const hInput = document.getElementById("cp-input-h");
          if (hInput) hInput.value = obj.hMm;
        }
        obj.wMm = newW;
        renderCustomPrintCanvas();
      }
    });

    document.getElementById("cp-input-h")?.addEventListener("input", (e) => {
      const obj = getSelectedCpObject();
      if (!obj) return;
      const newH = parseFloat(e.target.value);
      if (newH > 0) {
        if (cpState.lockAspectRatio) {
          const ratio = obj.wMm / obj.hMm;
          obj.wMm = Math.round(newH * ratio * 10) / 10;
          const wInput = document.getElementById("cp-input-w");
          if (wInput) wInput.value = obj.wMm;
        }
        obj.hMm = newH;
        renderCustomPrintCanvas();
      }
    });

    document.getElementById("cp-input-x")?.addEventListener("input", (e) => {
      const obj = getSelectedCpObject();
      if (!obj) return;
      obj.xMm = parseFloat(e.target.value) || 0;
      renderCustomPrintCanvas();
    });

    document.getElementById("cp-input-y")?.addEventListener("input", (e) => {
      const obj = getSelectedCpObject();
      if (!obj) return;
      obj.yMm = parseFloat(e.target.value) || 0;
      renderCustomPrintCanvas();
    });

    document.getElementById("cp-slider-rotation")?.addEventListener("input", (e) => {
      const obj = getSelectedCpObject();
      if (!obj) return;
      obj.rotationDeg = parseInt(e.target.value, 10) || 0;
      const valRot = document.getElementById("cp-val-rotation");
      if (valRot) valRot.textContent = `${obj.rotationDeg}°`;
      renderCustomPrintCanvas();
    });

    [0, 90, 180, 270].forEach((deg) => {
      document.getElementById(`cp-btn-rot-${deg}`)?.addEventListener("click", () => {
        const obj = getSelectedCpObject();
        if (!obj) return;
        obj.rotationDeg = deg;
        const slider = document.getElementById("cp-slider-rotation");
        const valRot = document.getElementById("cp-val-rotation");
        if (slider) slider.value = deg;
        if (valRot) valRot.textContent = `${deg}°`;
        renderCustomPrintCanvas();
      });
    });

    document.getElementById("cp-chk-lock-aspect")?.addEventListener("change", (e) => {
      cpState.lockAspectRatio = e.target.checked;
    });

    document.getElementById("cp-btn-layer-forward")?.addEventListener("click", () => {
      const obj = getSelectedCpObject();
      if (!obj) return;
      obj.zIndex = (obj.zIndex || 1) + 1;
      renderCustomPrintCanvas();
    });

    document.getElementById("cp-btn-layer-backward")?.addEventListener("click", () => {
      const obj = getSelectedCpObject();
      if (!obj) return;
      obj.zIndex = Math.max(1, (obj.zIndex || 1) - 1);
      renderCustomPrintCanvas();
    });

    document.getElementById("cp-btn-duplicate")?.addEventListener("click", () => {
      const obj = getSelectedCpObject();
      if (!obj) return;
      saveCustomPrintHistory();
      const clone = {
        ...obj,
        id: `cp-obj-${Date.now()}`,
        xMm: obj.xMm + 10,
        yMm: obj.yMm + 10,
        zIndex: (obj.zIndex || 1) + 1
      };
      cpState.objects.push(clone);
      cpSelectObject(clone.id);
      showToast("Duplicated image object", "success");
    });

    document.getElementById("cp-btn-reset-size")?.addEventListener("click", () => {
      const obj = getSelectedCpObject();
      if (!obj) return;
      saveCustomPrintHistory();
      obj.wMm = 60;
      obj.hMm = Math.round((60 * (obj.naturalH / obj.naturalW)) * 10) / 10;
      obj.rotationDeg = 0;
      renderCustomPrintCanvas();
      updateCpInspector();
    });

    document.getElementById("cp-btn-delete-obj")?.addEventListener("click", () => {
      deleteSelectedCpObject();
    });

    // Keyboard support for fine movement & delete
    window.addEventListener("keydown", (e) => {
      if (document.activeElement && (document.activeElement.tagName === "INPUT" || document.activeElement.tagName === "SELECT")) return;
      const obj = getSelectedCpObject();
      if (!obj) return;

      const step = e.shiftKey ? 5 : 1;
      if (e.key === "ArrowUp") { e.preventDefault(); obj.yMm -= step; renderCustomPrintCanvas(); updateCpInspector(); }
      else if (e.key === "ArrowDown") { e.preventDefault(); obj.yMm += step; renderCustomPrintCanvas(); updateCpInspector(); }
      else if (e.key === "ArrowLeft") { e.preventDefault(); obj.xMm -= step; renderCustomPrintCanvas(); updateCpInspector(); }
      else if (e.key === "ArrowRight") { e.preventDefault(); obj.xMm += step; renderCustomPrintCanvas(); updateCpInspector(); }
      else if (e.key === "Delete" || e.key === "Backspace") { e.preventDefault(); deleteSelectedCpObject(); }
      else if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "z") {
        e.preventDefault();
        if (e.shiftKey) redoCustomPrintState();
        else undoCustomPrintState();
      }
    });

    // Custom Crop Modal
    initCustomCropModal();

    // Export & Print actions
    document.getElementById("cp-btn-export-pdf")?.addEventListener("click", () => exportCustomPrintPDF());
    document.getElementById("cp-btn-export-img")?.addEventListener("click", () => exportCustomPrintImage());
    document.getElementById("cp-btn-print")?.addEventListener("click", () => printCustomPrintDirect());
    document.getElementById("cp-btn-preview-sheet")?.addEventListener("click", () => openCustomPrintPreviewModal());
    document.getElementById("btn-close-cp-preview")?.addEventListener("click", () => {
      document.getElementById("modal-cp-preview")?.classList.add("hidden");
    });
    document.getElementById("btn-close-cp-preview-footer")?.addEventListener("click", () => {
      document.getElementById("modal-cp-preview")?.classList.add("hidden");
    });
    document.getElementById("btn-print-from-preview")?.addEventListener("click", () => {
      document.getElementById("modal-cp-preview")?.classList.add("hidden");
      printCustomPrintDirect();
    });

    renderCustomPrintCanvas();
  }

  function saveCustomPrintHistory() {
    const snapshot = JSON.stringify(cpState.objects);
    cpState.undoStack.push(snapshot);
    if (cpState.undoStack.length > 20) cpState.undoStack.shift();
    cpState.redoStack = [];
  }

  function undoCustomPrintState() {
    if (cpState.undoStack.length === 0) return;
    const current = JSON.stringify(cpState.objects);
    cpState.redoStack.push(current);
    const prev = cpState.undoStack.pop();
    cpState.objects = JSON.parse(prev);
    renderCustomPrintCanvas();
    updateCpInspector();
    showToast("Undo", "info");
  }

  function redoCustomPrintState() {
    if (cpState.redoStack.length === 0) return;
    const current = JSON.stringify(cpState.objects);
    cpState.undoStack.push(current);
    const next = cpState.redoStack.pop();
    cpState.objects = JSON.parse(next);
    renderCustomPrintCanvas();
    updateCpInspector();
    showToast("Redo", "info");
  }

  function updateMarginsSummaryBadge() {
    const badge = document.getElementById("cp-badge-margin-summary");
    if (badge) {
      if (cpState.marginsIgnored) {
        badge.textContent = "0mm (Ignored)";
      } else if (cpState.marginTopMm === cpState.marginBottomMm && cpState.marginTopMm === cpState.marginLeftMm && cpState.marginTopMm === cpState.marginRightMm) {
        badge.textContent = `${cpState.marginTopMm}mm`;
      } else {
        badge.textContent = `${cpState.marginTopMm}/${cpState.marginRightMm}/${cpState.marginBottomMm}/${cpState.marginLeftMm}mm`;
      }
    }
  }

  function getSelectedCpObject() {
    return cpState.objects.find((o) => o.id === cpState.selectedObjId) || null;
  }

  function cpSelectObject(id) {
    cpState.selectedObjId = id;
    renderCustomPrintCanvas();
    updateCpInspector();
  }

  function deleteSelectedCpObject() {
    const obj = getSelectedCpObject();
    if (!obj) return;
    saveCustomPrintHistory();
    cpState.objects = cpState.objects.filter((o) => o.id !== obj.id);
    cpState.selectedObjId = null;
    renderCustomPrintCanvas();
    updateCpInspector();
    showToast("Deleted object", "info");
  }

  function updateCpInspector() {
    const emptyEl = document.getElementById("cp-inspector-empty");
    const activeEl = document.getElementById("cp-inspector-active");
    const badge = document.getElementById("cp-obj-status-badge");
    const obj = getSelectedCpObject();

    if (!obj) {
      emptyEl?.classList.remove("hidden");
      activeEl?.classList.add("hidden");
      if (badge) {
        badge.textContent = "No selection";
        badge.className = "status-badge";
      }
      return;
    }

    emptyEl?.classList.add("hidden");
    activeEl?.classList.remove("hidden");
    if (badge) {
      badge.textContent = `Selected: ${obj.wMm}×${obj.hMm}mm`;
      badge.className = "status-badge success";
    }

    const inputW = document.getElementById("cp-input-w");
    const inputH = document.getElementById("cp-input-h");
    const inputX = document.getElementById("cp-input-x");
    const inputY = document.getElementById("cp-input-y");
    const sliderRot = document.getElementById("cp-slider-rotation");
    const valRot = document.getElementById("cp-val-rotation");

    if (inputW) inputW.value = obj.wMm;
    if (inputH) inputH.value = obj.hMm;
    if (inputX) inputX.value = obj.xMm;
    if (inputY) inputY.value = obj.yMm;
    if (sliderRot) sliderRot.value = obj.rotationDeg || 0;
    if (valRot) valRot.textContent = `${obj.rotationDeg || 0}°`;
  }

  async function addCustomPrintImageFile(file) {
    if (!file) return;
    try {
      const img = await loadImage(file);
      saveCustomPrintHistory();

      const naturalW = img.naturalWidth || img.width || 800;
      const naturalH = img.naturalHeight || img.height || 600;

      // Initial size: 60mm width with proportional height
      const initW = 60;
      const initH = Math.round((initW * (naturalH / naturalW)) * 10) / 10;

      // Position centered within printable area
      const effLeft = cpState.marginsIgnored ? 0 : cpState.marginLeftMm;
      const effTop = cpState.marginsIgnored ? 0 : cpState.marginTopMm;
      const effRight = cpState.marginsIgnored ? 0 : cpState.marginRightMm;
      const effBottom = cpState.marginsIgnored ? 0 : cpState.marginBottomMm;

      const printW = cpState.paperWmm - (effLeft + effRight);
      const printH = cpState.paperHmm - (effTop + effBottom);

      const xMm = Math.max(effLeft, Math.round((effLeft + (printW - initW) / 2) * 10) / 10);
      const yMm = Math.max(effTop, Math.round((effTop + (printH - initH) / 2) * 10) / 10);

      const newObj = {
        id: `cp-obj-${Date.now()}`,
        img,
        naturalW,
        naturalH,
        xMm,
        yMm,
        wMm: initW,
        hMm: initH,
        rotationDeg: 0,
        cropRect: null,
        zIndex: cpState.objects.length + 1
      };

      cpState.objects.push(newObj);
      cpSelectObject(newObj.id);
      showToast("Added image to printable page", "success");
    } catch (e) {
      console.error("Failed to load image for Custom Print:", e);
      showToast("Failed to load image", "error");
    }
  }

  function alignCustomPrintObject(alignType) {
    const obj = getSelectedCpObject();
    if (!obj) {
      showToast("Select an image first to align", "warning");
      return;
    }
    saveCustomPrintHistory();

    const effLeft = cpState.marginsIgnored ? 0 : cpState.marginLeftMm;
    const effTop = cpState.marginsIgnored ? 0 : cpState.marginTopMm;
    const effRight = cpState.marginsIgnored ? 0 : cpState.marginRightMm;
    const effBottom = cpState.marginsIgnored ? 0 : cpState.marginBottomMm;

    const printW = cpState.paperWmm - (effLeft + effRight);
    const printH = cpState.paperHmm - (effTop + effBottom);

    if (alignType === "left") obj.xMm = effLeft;
    else if (alignType === "center") obj.xMm = Math.round((effLeft + (printW - obj.wMm) / 2) * 10) / 10;
    else if (alignType === "right") obj.xMm = Math.round((cpState.paperWmm - effRight - obj.wMm) * 10) / 10;
    else if (alignType === "top") obj.yMm = effTop;
    else if (alignType === "middle") obj.yMm = Math.round((effTop + (printH - obj.hMm) / 2) * 10) / 10;
    else if (alignType === "bottom") obj.yMm = Math.round((cpState.paperHmm - effBottom - obj.hMm) * 10) / 10;

    renderCustomPrintCanvas();
    updateCpInspector();
  }

  function renderCustomPrintCanvas() {
    const viewport = document.getElementById("cp-canvas-viewport");
    const sheetEl = document.getElementById("cp-paper-sheet");
    const objectsLayer = document.getElementById("cp-objects-layer");
    if (!viewport || !sheetEl || !objectsLayer) return;

    // Rulers update
    const rulerW = document.getElementById("cp-ruler-val-w");
    const rulerH = document.getElementById("cp-ruler-val-h");
    if (rulerW) rulerW.textContent = `${cpState.paperWmm} mm`;
    if (rulerH) rulerH.textContent = `${cpState.paperHmm} mm`;

    // Calculate responsive sheet display dimensions
    const maxViewW = Math.min(viewport.clientWidth - 80, 680);
    const aspect = cpState.paperWmm / cpState.paperHmm;
    let sheetPxW = maxViewW;
    let sheetPxH = Math.round(sheetPxW / aspect);

    // Limit height if too tall
    const maxViewH = 680;
    if (sheetPxH > maxViewH) {
      sheetPxH = maxViewH;
      sheetPxW = Math.round(sheetPxH * aspect);
    }

    sheetEl.style.width = `${sheetPxW}px`;
    sheetEl.style.height = `${sheetPxH}px`;

    const pxPerMm = sheetPxW / cpState.paperWmm;

    // Margins Safe Overlay
    const safeBox = document.getElementById("cp-safe-margin-box");
    if (safeBox) {
      if (cpState.marginsIgnored) {
        safeBox.style.display = "none";
      } else {
        safeBox.style.display = "block";
        safeBox.style.top = `${cpState.marginTopMm * pxPerMm}px`;
        safeBox.style.bottom = `${cpState.marginBottomMm * pxPerMm}px`;
        safeBox.style.left = `${cpState.marginLeftMm * pxPerMm}px`;
        safeBox.style.right = `${cpState.marginRightMm * pxPerMm}px`;
      }
    }

    // Header Zone
    const headerZone = document.getElementById("cp-header-zone");
    if (headerZone) {
      if (cpState.header.enabled) {
        headerZone.classList.remove("hidden");
        headerZone.style.height = `${cpState.header.heightMm * pxPerMm}px`;
        document.getElementById("cp-header-text-left").textContent = cpState.header.left || "";
        document.getElementById("cp-header-text-center").textContent = cpState.header.center || "";
        document.getElementById("cp-header-text-right").textContent = cpState.header.right || "";
      } else {
        headerZone.classList.add("hidden");
      }
    }

    // Footer Zone
    const footerZone = document.getElementById("cp-footer-zone");
    if (footerZone) {
      if (cpState.footer.enabled) {
        footerZone.classList.remove("hidden");
        footerZone.style.height = `${cpState.footer.heightMm * pxPerMm}px`;
        document.getElementById("cp-footer-text-left").textContent = cpState.footer.left || "";
        document.getElementById("cp-footer-text-center").textContent = cpState.footer.center || "";
        document.getElementById("cp-footer-text-right").textContent = cpState.footer.right || "Page 1 of 1";
      } else {
        footerZone.classList.add("hidden");
      }
    }

    // Objects Rendering
    objectsLayer.innerHTML = "";

    cpState.objects.forEach((obj) => {
      const objEl = document.createElement("div");
      objEl.className = `cp-object-item ${obj.id === cpState.selectedObjId ? "selected" : ""}`;
      objEl.style.left = `${obj.xMm * pxPerMm}px`;
      objEl.style.top = `${obj.yMm * pxPerMm}px`;
      objEl.style.width = `${obj.wMm * pxPerMm}px`;
      objEl.style.height = `${obj.hMm * pxPerMm}px`;
      objEl.style.transform = `rotate(${obj.rotationDeg || 0}deg)`;
      objEl.style.zIndex = obj.zIndex || 1;

      // Image canvas or img element
      const canvasEl = document.createElement("canvas");
      canvasEl.className = "cp-object-img";
      canvasEl.width = Math.round(obj.wMm * pxPerMm * 2);
      canvasEl.height = Math.round(obj.hMm * pxPerMm * 2);
      drawCroppedObjectToCanvas(obj, canvasEl);
      objEl.appendChild(canvasEl);

      // Selection handles (nw, n, ne, e, se, s, sw, w, rot)
      if (obj.id === cpState.selectedObjId) {
        const handleTypes = ["nw", "n", "ne", "e", "se", "s", "sw", "w"];
        handleTypes.forEach((type) => {
          const hEl = document.createElement("div");
          hEl.className = `cp-handle cp-handle-${type}`;
          hEl.addEventListener("pointerdown", (e) => startCpHandleResize(e, obj, type, pxPerMm));
          objEl.appendChild(hEl);
        });

        // Rotation Handle
        const rotLine = document.createElement("div");
        rotLine.className = "cp-handle-rot-line";
        const rotHandle = document.createElement("div");
        rotHandle.className = "cp-handle cp-handle-rot";
        rotHandle.title = "Rotate Object";
        rotHandle.addEventListener("pointerdown", (e) => startCpHandleRotate(e, obj, sheetEl));
        objEl.appendChild(rotLine);
        objEl.appendChild(rotHandle);
      }

      // Drag to move
      objEl.addEventListener("pointerdown", (e) => {
        if (e.target.classList.contains("cp-handle")) return;
        e.stopPropagation();
        cpSelectObject(obj.id);
        startCpObjectDrag(e, obj, pxPerMm);
      });

      objectsLayer.appendChild(objEl);
    });
  }

  function drawCroppedObjectToCanvas(obj, canvas) {
    const ctx = canvas.getContext("2d");
    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = "high";
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const img = obj.img;
    if (!img) return;

    const natW = obj.naturalW;
    const natH = obj.naturalH;

    let sx = 0, sy = 0, sw = natW, sh = natH;
    if (obj.cropRect) {
      sx = obj.cropRect.xRatio * natW;
      sy = obj.cropRect.yRatio * natH;
      sw = obj.cropRect.wRatio * natW;
      sh = obj.cropRect.hRatio * natH;
    }

    ctx.drawImage(img, sx, sy, sw, sh, 0, 0, canvas.width, canvas.height);
  }

  function startCpObjectDrag(e, obj, pxPerMm) {
    saveCustomPrintHistory();
    const startPointerX = e.clientX;
    const startPointerY = e.clientY;
    const startObjX = obj.xMm;
    const startObjY = obj.yMm;

    function onPointerMove(moveEvent) {
      const dxPx = moveEvent.clientX - startPointerX;
      const dyPx = moveEvent.clientY - startPointerY;

      let newX = startObjX + (dxPx / pxPerMm);
      let newY = startObjY + (dyPx / pxPerMm);

      if (cpState.gridSnap) {
        newX = Math.round(newX / cpState.gridStepMm) * cpState.gridStepMm;
        newY = Math.round(newY / cpState.gridStepMm) * cpState.gridStepMm;
      }

      obj.xMm = Math.round(newX * 10) / 10;
      obj.yMm = Math.round(newY * 10) / 10;
      renderCustomPrintCanvas();
      updateCpInspector();
    }

    function onPointerUp() {
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerup", onPointerUp);
    }

    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("pointerup", onPointerUp);
  }

  function startCpHandleResize(e, obj, handleType, pxPerMm) {
    e.stopPropagation();
    saveCustomPrintHistory();

    const startPointerX = e.clientX;
    const startPointerY = e.clientY;
    const startW = obj.wMm;
    const startH = obj.hMm;
    const startX = obj.xMm;
    const startY = obj.yMm;
    const aspect = startW / startH;

    function onPointerMove(moveEvent) {
      const dxMm = (moveEvent.clientX - startPointerX) / pxPerMm;
      const dyMm = (moveEvent.clientY - startPointerY) / pxPerMm;

      let newW = startW;
      let newH = startH;
      let newX = startX;
      let newY = startY;

      if (handleType.includes("e")) newW = Math.max(5, startW + dxMm);
      if (handleType.includes("w")) {
        const delta = Math.min(dxMm, startW - 5);
        newW = startW - delta;
        newX = startX + delta;
      }
      if (handleType.includes("s")) newH = Math.max(5, startH + dyMm);
      if (handleType.includes("n")) {
        const delta = Math.min(dyMm, startH - 5);
        newH = startH - delta;
        newY = startY + delta;
      }

      if (cpState.lockAspectRatio) {
        if (handleType === "e" || handleType === "w") {
          newH = newW / aspect;
        } else if (handleType === "n" || handleType === "s") {
          newW = newH * aspect;
        } else {
          // Corner resize
          newH = newW / aspect;
        }
      }

      obj.wMm = Math.round(newW * 10) / 10;
      obj.hMm = Math.round(newH * 10) / 10;
      obj.xMm = Math.round(newX * 10) / 10;
      obj.yMm = Math.round(newY * 10) / 10;

      renderCustomPrintCanvas();
      updateCpInspector();
    }

    function onPointerUp() {
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerup", onPointerUp);
    }

    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("pointerup", onPointerUp);
  }

  function startCpHandleRotate(e, obj, sheetEl) {
    e.stopPropagation();
    saveCustomPrintHistory();

    const sheetRect = sheetEl.getBoundingClientRect();
    const pxPerMm = sheetRect.width / cpState.paperWmm;
    const centerScreenX = sheetRect.left + (obj.xMm + obj.wMm / 2) * pxPerMm;
    const centerScreenY = sheetRect.top + (obj.yMm + obj.hMm / 2) * pxPerMm;

    function onPointerMove(moveEvent) {
      const dx = moveEvent.clientX - centerScreenX;
      const dy = moveEvent.clientY - centerScreenY;
      let angleDeg = Math.round((Math.atan2(dy, dx) * 180) / Math.PI) + 90;
      if (angleDeg < 0) angleDeg += 360;
      if (angleDeg > 180) angleDeg -= 360;

      // Snap to 45 degree increments if shift key is pressed
      if (moveEvent.shiftKey) {
        angleDeg = Math.round(angleDeg / 45) * 45;
      }

      obj.rotationDeg = angleDeg;
      renderCustomPrintCanvas();
      updateCpInspector();
    }

    function onPointerUp() {
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerup", onPointerUp);
    }

    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("pointerup", onPointerUp);
  }

  // Custom Crop Tool Implementation with Full Draggable Crop Box & Resize
  var cropState = {
    box: { x: 40, y: 30, w: 260, h: 260 },
    panX: 0,
    panY: 0,
    zoom: 1,
    aspect: "free", // "free" | "1:1" | "4:3" | "3:4" | "16:9" | "custom"
    activeDrag: null, // null | "move" | "nw" | "ne" | "sw" | "se" | "n" | "s" | "e" | "w" | "pan"
    startPointer: { x: 0, y: 0 },
    startBox: { x: 0, y: 0, w: 0, h: 0 },
    startPan: { x: 0, y: 0 },
    imgDraw: { x: 0, y: 0, w: 0, h: 0 },
    isPointerDown: false
  };

  function getCropCanvasCoords(canvas, clientX, clientY) {
    const rect = canvas.getBoundingClientRect();
    const scaleX = rect.width ? (canvas.width / rect.width) : 1;
    const scaleY = rect.height ? (canvas.height / rect.height) : 1;
    return {
      x: (clientX - rect.left) * scaleX,
      y: (clientY - rect.top) * scaleY
    };
  }

  function initCustomCropModal() {
    document.getElementById("cp-btn-crop")?.addEventListener("click", () => {
      openCustomCropModal();
    });
    document.getElementById("btn-close-crop-modal")?.addEventListener("click", () => {
      document.getElementById("modal-cp-crop")?.classList.add("hidden");
    });
    document.getElementById("btn-cancel-crop")?.addEventListener("click", () => {
      document.getElementById("modal-cp-crop")?.classList.add("hidden");
    });

    // Aspect presets
    document.querySelectorAll("#crop-aspect-chips .chip").forEach((chip) => {
      chip.addEventListener("click", () => {
        document.querySelectorAll("#crop-aspect-chips .chip").forEach((c) => c.classList.remove("selected"));
        chip.classList.add("selected");
        cropState.aspect = chip.dataset.aspect || "free";
        resetCropBoxForAspect();
        renderCustomCropPreview();
      });
    });

    const zoomSlider = document.getElementById("crop-slider-zoom");
    zoomSlider?.addEventListener("input", (e) => {
      cropState.zoom = parseFloat(e.target.value) || 1;
      renderCustomCropPreview();
    });

    document.getElementById("crop-btn-rot-90")?.addEventListener("click", () => {
      const obj = getSelectedCpObject();
      if (!obj) return;
      obj.rotationDeg = ((obj.rotationDeg || 0) + 90) % 360;
      renderCustomCropPreview();
    });

    document.getElementById("crop-btn-reset")?.addEventListener("click", () => {
      cropState.zoom = 1;
      cropState.panX = 0;
      cropState.panY = 0;
      if (zoomSlider) zoomSlider.value = 1;
      resetCropBoxForAspect();
      renderCustomCropPreview();
      showToast("Reset crop view", "info");
    });

    document.getElementById("btn-apply-crop")?.addEventListener("click", () => {
      applyCustomCropResult();
    });

    // Interactive pointer & touch events on custom-crop-canvas
    const canvas = document.getElementById("custom-crop-canvas");
    if (canvas) {
      canvas.style.touchAction = "none";

      // Pointer events
      canvas.addEventListener("pointerdown", handleCropPointerDown);
      canvas.addEventListener("pointermove", handleCropPointerMove);
      canvas.addEventListener("pointerup", handleCropPointerUp);
      canvas.addEventListener("pointercancel", handleCropPointerUp);

      // Window level listeners as safety net during active drag
      window.addEventListener("pointermove", handleCropPointerMove);
      window.addEventListener("pointerup", handleCropPointerUp);

      // Mouse event fallbacks
      canvas.addEventListener("mousedown", (e) => {
        if (e.button === 0) handleCropPointerDown(e);
      });
      window.addEventListener("mousemove", (e) => {
        if (cropState.isPointerDown) handleCropPointerMove(e);
      });
      window.addEventListener("mouseup", (e) => {
        if (cropState.isPointerDown) handleCropPointerUp(e);
      });

      // Touch fallbacks
      canvas.addEventListener("touchstart", (e) => {
        if (e.touches.length === 1) {
          e.preventDefault();
          const t = e.touches[0];
          handleCropPointerDown({ clientX: t.clientX, clientY: t.clientY, pointerId: 1 });
        }
      }, { passive: false });

      window.addEventListener("touchmove", (e) => {
        if (cropState.isPointerDown && e.touches.length === 1) {
          e.preventDefault();
          const t = e.touches[0];
          handleCropPointerMove({ clientX: t.clientX, clientY: t.clientY });
        }
      }, { passive: false });

      window.addEventListener("touchend", () => {
        if (cropState.isPointerDown) handleCropPointerUp();
      });

      // Wheel zoom
      canvas.addEventListener("wheel", (e) => {
        e.preventDefault();
        const delta = e.deltaY < 0 ? 0.08 : -0.08;
        cropState.zoom = Math.max(0.5, Math.min(4, cropState.zoom + delta));
        if (zoomSlider) zoomSlider.value = cropState.zoom;
        renderCustomCropPreview();
      }, { passive: false });
    }
  }

  function openCustomCropModal() {
    const obj = getSelectedCpObject();
    if (!obj || !obj.img) {
      showToast("Select an image first to crop", "warning");
      return;
    }
    cpState.cropActiveObjId = obj.id;
    cropState.zoom = 1;
    cropState.panX = 0;
    cropState.panY = 0;
    cropState.aspect = "free";
    cropState.isPointerDown = false;
    cropState.activeDrag = null;

    const zoomSlider = document.getElementById("crop-slider-zoom");
    if (zoomSlider) zoomSlider.value = 1;

    document.querySelectorAll("#crop-aspect-chips .chip").forEach((c) => {
      if (c.dataset.aspect === "free") c.classList.add("selected");
      else c.classList.remove("selected");
    });

    const canvas = document.getElementById("custom-crop-canvas");
    if (canvas) {
      const containerW = Math.min(window.innerWidth - 64, 520);
      const containerH = 340;
      canvas.width = containerW;
      canvas.height = containerH;
    }

    document.getElementById("modal-cp-crop")?.classList.remove("hidden");

    // Initialize box centered on canvas or restoring existing crop
    resetCropBoxForAspect();
    renderCustomCropPreview();
  }

  function resetCropBoxForAspect() {
    const canvas = document.getElementById("custom-crop-canvas");
    if (!canvas) return;
    const cw = canvas.width || 480;
    const ch = canvas.height || 340;

    let bw = cw * 0.72;
    let bh = ch * 0.72;

    if (cropState.aspect === "1:1") {
      bw = bh = Math.min(cw * 0.65, ch * 0.65);
    } else if (cropState.aspect === "4:3") {
      bh = (bw * 3) / 4;
      if (bh > ch * 0.8) { bh = ch * 0.75; bw = (bh * 4) / 3; }
    } else if (cropState.aspect === "3:4") {
      bw = (bh * 3) / 4;
      if (bw > cw * 0.8) { bw = cw * 0.75; bh = (bw * 4) / 3; }
    } else if (cropState.aspect === "16:9") {
      bh = (bw * 9) / 16;
      if (bh > ch * 0.8) { bh = ch * 0.75; bw = (bh * 16) / 9; }
    }

    cropState.box = {
      x: Math.round((cw - bw) / 2),
      y: Math.round((ch - bh) / 2),
      w: Math.round(bw),
      h: Math.round(bh)
    };
  }

  function getCropHandleAt(px, py) {
    const b = cropState.box;
    const handleSize = 16;
    const edgeMargin = 10;

    // 1. Check 4 corners first (highest priority)
    if (Math.abs(px - b.x) <= handleSize && Math.abs(py - b.y) <= handleSize) return "nw";
    if (Math.abs(px - (b.x + b.w)) <= handleSize && Math.abs(py - b.y) <= handleSize) return "ne";
    if (Math.abs(px - b.x) <= handleSize && Math.abs(py - (b.y + b.h)) <= handleSize) return "sw";
    if (Math.abs(px - (b.x + b.w)) <= handleSize && Math.abs(py - (b.y + b.h)) <= handleSize) return "se";

    // 2. Check 4 midpoints
    if (Math.abs(px - (b.x + b.w / 2)) <= handleSize && Math.abs(py - b.y) <= handleSize) return "n";
    if (Math.abs(px - (b.x + b.w / 2)) <= handleSize && Math.abs(py - (b.y + b.h)) <= handleSize) return "s";
    if (Math.abs(px - b.x) <= handleSize && Math.abs(py - (b.y + b.h / 2)) <= handleSize) return "w";
    if (Math.abs(px - (b.x + b.w)) <= handleSize && Math.abs(py - (b.y + b.h / 2)) <= handleSize) return "e";

    // 3. Check edges (allow dragging borders to resize)
    if (px >= b.x && px <= b.x + b.w) {
      if (Math.abs(py - b.y) <= edgeMargin) return "n";
      if (Math.abs(py - (b.y + b.h)) <= edgeMargin) return "s";
    }
    if (py >= b.y && py <= b.y + b.h) {
      if (Math.abs(px - b.x) <= edgeMargin) return "w";
      if (Math.abs(px - (b.x + b.w)) <= edgeMargin) return "e";
    }

    // 4. Inside crop box -> move box
    if (px >= b.x && px <= b.x + b.w && py >= b.y && py <= b.y + b.h) {
      return "move";
    }

    // 5. Outside crop box -> pan the image
    return "pan";
  }

  function handleCropPointerDown(e) {
    const canvas = document.getElementById("custom-crop-canvas");
    if (!canvas) return;
    const coords = getCropCanvasCoords(canvas, e.clientX, e.clientY);
    const px = coords.x;
    const py = coords.y;

    const action = getCropHandleAt(px, py);
    cropState.isPointerDown = true;
    cropState.activeDrag = action;
    cropState.startPointer = { x: px, y: py };
    cropState.startBox = { ...cropState.box };
    cropState.startPan = { x: cropState.panX, y: cropState.panY };

    if (e.pointerId !== undefined) {
      try {
        canvas.setPointerCapture(e.pointerId);
      } catch (err) {}
    }
  }

  function handleCropPointerMove(e) {
    const canvas = document.getElementById("custom-crop-canvas");
    if (!canvas) return;
    const coords = getCropCanvasCoords(canvas, e.clientX, e.clientY);
    const px = coords.x;
    const py = coords.y;

    if (!cropState.isPointerDown || !cropState.activeDrag) {
      // Hover feedback cursor
      const hover = getCropHandleAt(px, py);
      if (hover === "nw" || hover === "se") canvas.style.cursor = "nwse-resize";
      else if (hover === "ne" || hover === "sw") canvas.style.cursor = "nesw-resize";
      else if (hover === "n" || hover === "s") canvas.style.cursor = "ns-resize";
      else if (hover === "e" || hover === "w") canvas.style.cursor = "ew-resize";
      else if (hover === "move") canvas.style.cursor = "grab";
      else canvas.style.cursor = "crosshair";
      return;
    }

    const dx = px - cropState.startPointer.x;
    const dy = py - cropState.startPointer.y;
    const cw = canvas.width;
    const ch = canvas.height;
    const sb = cropState.startBox;

    if (cropState.activeDrag === "move") {
      canvas.style.cursor = "grabbing";
      const maxX = Math.max(0, cw - sb.w);
      const maxY = Math.max(0, ch - sb.h);
      cropState.box.x = Math.max(0, Math.min(maxX, sb.x + dx));
      cropState.box.y = Math.max(0, Math.min(maxY, sb.y + dy));
    } else if (cropState.activeDrag === "pan") {
      canvas.style.cursor = "grabbing";
      cropState.panX = cropState.startPan.x + dx;
      cropState.panY = cropState.startPan.y + dy;
    } else {
      // Resizing handle
      let newX = sb.x;
      let newY = sb.y;
      let newW = sb.w;
      let newH = sb.h;

      if (cropState.activeDrag.includes("e")) {
        newW = Math.max(30, Math.min(cw - sb.x, sb.w + dx));
      }
      if (cropState.activeDrag.includes("s")) {
        newH = Math.max(30, Math.min(ch - sb.y, sb.h + dy));
      }
      if (cropState.activeDrag.includes("w")) {
        const delta = Math.min(dx, sb.w - 30);
        newX = Math.max(0, sb.x + delta);
        newW = sb.w - (newX - sb.x);
      }
      if (cropState.activeDrag.includes("n")) {
        const delta = Math.min(dy, sb.h - 30);
        newY = Math.max(0, sb.y + delta);
        newH = sb.h - (newY - sb.y);
      }

      // Maintain aspect ratio if fixed aspect selected
      if (cropState.aspect && cropState.aspect !== "free" && cropState.aspect !== "custom") {
        let ratio = 1;
        if (cropState.aspect === "1:1") ratio = 1;
        else if (cropState.aspect === "4:3") ratio = 4 / 3;
        else if (cropState.aspect === "3:4") ratio = 3 / 4;
        else if (cropState.aspect === "16:9") ratio = 16 / 9;

        if (cropState.activeDrag === "e" || cropState.activeDrag === "w") {
          newH = Math.max(30, Math.round(newW / ratio));
        } else if (cropState.activeDrag === "n" || cropState.activeDrag === "s") {
          newW = Math.max(30, Math.round(newH * ratio));
        } else {
          // corner handle
          if (newW / newH > ratio) {
            newW = Math.round(newH * ratio);
          } else {
            newH = Math.round(newW / ratio);
          }
          if (cropState.activeDrag.includes("w")) newX = sb.x + sb.w - newW;
          if (cropState.activeDrag.includes("n")) newY = sb.y + sb.h - newH;
        }
      }

      cropState.box.x = Math.max(0, Math.min(cw - 30, newX));
      cropState.box.y = Math.max(0, Math.min(ch - 30, newY));
      cropState.box.w = Math.max(30, Math.min(cw - cropState.box.x, newW));
      cropState.box.h = Math.max(30, Math.min(ch - cropState.box.y, newH));
    }

    renderCustomCropPreview();
  }

  function handleCropPointerUp(e) {
    if (cropState.isPointerDown) {
      cropState.isPointerDown = false;
      cropState.activeDrag = null;
      const canvas = document.getElementById("custom-crop-canvas");
      if (canvas) {
        canvas.style.cursor = "default";
        if (e && e.pointerId !== undefined) {
          try {
            canvas.releasePointerCapture(e.pointerId);
          } catch (err) {}
        }
      }
    }
  }

  function renderCustomCropPreview() {
    const obj = getSelectedCpObject();
    const canvas = document.getElementById("custom-crop-canvas");
    if (!obj || !canvas) return;

    const ctx = canvas.getContext("2d");
    const containerW = canvas.width || 520;
    const containerH = canvas.height || 340;

    ctx.clearRect(0, 0, containerW, containerH);

    // Draw background canvas texture
    ctx.fillStyle = "#0c1322";
    ctx.fillRect(0, 0, containerW, containerH);

    // Subtle background grid
    ctx.strokeStyle = "rgba(255, 255, 255, 0.05)";
    ctx.lineWidth = 1;
    for (let x = 0; x < containerW; x += 20) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, containerH);
      ctx.stroke();
    }
    for (let y = 0; y < containerH; y += 20) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(containerW, y);
      ctx.stroke();
    }

    // Draw image centered with zoom & pan
    const img = obj.img;
    const natW = obj.naturalW || 800;
    const natH = obj.naturalH || 600;
    const scale = Math.min((containerW * 0.9) / natW, (containerH * 0.9) / natH) * cropState.zoom;
    const drawW = natW * scale;
    const drawH = natH * scale;
    const drawX = (containerW - drawW) / 2 + cropState.panX;
    const drawY = (containerH - drawH) / 2 + cropState.panY;

    cropState.imgDraw = { x: drawX, y: drawY, w: drawW, h: drawH };

    ctx.save();
    if (obj.rotationDeg && obj.rotationDeg !== 0) {
      ctx.translate(drawX + drawW / 2, drawY + drawH / 2);
      ctx.rotate((obj.rotationDeg * Math.PI) / 180);
      ctx.drawImage(img, -drawW / 2, -drawH / 2, drawW, drawH);
    } else {
      ctx.drawImage(img, drawX, drawY, drawW, drawH);
    }
    ctx.restore();

    // Darken exterior outside crop box
    const b = cropState.box;
    ctx.fillStyle = "rgba(0, 0, 0, 0.65)";
    ctx.fillRect(0, 0, containerW, b.y);
    ctx.fillRect(0, b.y + b.h, containerW, containerH - (b.y + b.h));
    ctx.fillRect(0, b.y, b.x, b.h);
    ctx.fillRect(b.x + b.w, b.y, containerW - (b.x + b.w), b.h);

    // Draw rule-of-thirds grid inside crop box
    ctx.strokeStyle = "rgba(255, 255, 255, 0.35)";
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(b.x + b.w / 3, b.y);
    ctx.lineTo(b.x + b.w / 3, b.y + b.h);
    ctx.moveTo(b.x + (b.w * 2) / 3, b.y);
    ctx.lineTo(b.x + (b.w * 2) / 3, b.y + b.h);
    ctx.moveTo(b.x, b.y + b.h / 3);
    ctx.lineTo(b.x + b.w, b.y + b.h / 3);
    ctx.moveTo(b.x, b.y + (b.h * 2) / 3);
    ctx.lineTo(b.x + b.w, b.y + (b.h * 2) / 3);
    ctx.stroke();

    // Draw bright cyan border
    ctx.strokeStyle = "#00c2ff";
    ctx.lineWidth = 2.5;
    ctx.strokeRect(b.x, b.y, b.w, b.h);

    // Draw 8 interactive handles
    const handlePoints = [
      { x: b.x, y: b.y },
      { x: b.x + b.w / 2, y: b.y },
      { x: b.x + b.w, y: b.y },
      { x: b.x + b.w, y: b.y + b.h / 2 },
      { x: b.x + b.w, y: b.y + b.h },
      { x: b.x + b.w / 2, y: b.y + b.h },
      { x: b.x, y: b.y + b.h },
      { x: b.x, y: b.y + b.h / 2 }
    ];

    ctx.fillStyle = "#FFFFFF";
    ctx.strokeStyle = "#00c2ff";
    ctx.lineWidth = 2.5;
    for (const hp of handlePoints) {
      ctx.fillRect(hp.x - 6, hp.y - 6, 12, 12);
      ctx.strokeRect(hp.x - 6, hp.y - 6, 12, 12);
    }

    // Subtle drag indicator in center
    ctx.fillStyle = "rgba(255, 255, 255, 0.4)";
    ctx.font = "11px sans-serif";
    ctx.textAlign = "center";
    ctx.fillText("Drag to move • Drag corners to crop", b.x + b.w / 2, b.y + b.h / 2 + 4);
  }

  function applyCustomCropResult() {
    const obj = getSelectedCpObject();
    if (!obj) return;
    saveCustomPrintHistory();

    const b = cropState.box;
    const imgD = cropState.imgDraw;

    // Calculate normalized crop ratios relative to the drawn image
    const rawX = (b.x - imgD.x) / imgD.w;
    const rawY = (b.y - imgD.y) / imgD.h;
    const rawW = b.w / imgD.w;
    const rawH = b.h / imgD.h;

    const xRatio = Math.max(0, Math.min(0.95, rawX));
    const yRatio = Math.max(0, Math.min(0.95, rawY));
    const wRatio = Math.max(0.05, Math.min(1 - xRatio, rawW));
    const hRatio = Math.max(0.05, Math.min(1 - yRatio, rawH));

    obj.cropRect = { xRatio, yRatio, wRatio, hRatio };
    document.getElementById("modal-cp-crop")?.classList.add("hidden");
    renderCustomPrintCanvas();
    showToast("Crop applied successfully!", "success");
  }

  // Export PDF with exact physical millimeters
  async function exportCustomPrintPDF() {
    const PDFConstructor = await getJsPDF();
    const doc = new PDFConstructor({
      orientation: cpState.orientation,
      unit: "mm",
      format: [cpState.paperWmm, cpState.paperHmm]
    });

    // Draw Header
    if (cpState.header.enabled) {
      doc.setFontSize(10);
      doc.setTextColor(80, 80, 80);
      const headerY = (cpState.marginsIgnored ? 0 : cpState.marginTopMm) / 2 + 3;
      const leftX = cpState.marginsIgnored ? 5 : cpState.marginLeftMm;
      const rightX = cpState.marginsIgnored ? (cpState.paperWmm - 5) : (cpState.paperWmm - cpState.marginRightMm);

      if (cpState.header.left) doc.text(cpState.header.left, leftX, Math.max(8, headerY));
      if (cpState.header.center) doc.text(cpState.header.center, cpState.paperWmm / 2, Math.max(8, headerY), { align: "center" });
      if (cpState.header.right) doc.text(cpState.header.right, rightX, Math.max(8, headerY), { align: "right" });
    }

    // Draw Footer
    if (cpState.footer.enabled) {
      doc.setFontSize(9);
      doc.setTextColor(110, 110, 110);
      const footerY = cpState.paperHmm - ((cpState.marginsIgnored ? 0 : cpState.marginBottomMm) / 2);
      const leftX = cpState.marginsIgnored ? 5 : cpState.marginLeftMm;
      const rightX = cpState.marginsIgnored ? (cpState.paperWmm - 5) : (cpState.paperWmm - cpState.marginRightMm);

      if (cpState.footer.left) doc.text(cpState.footer.left, leftX, footerY);
      if (cpState.footer.center) doc.text(cpState.footer.center, cpState.paperWmm / 2, footerY, { align: "center" });
      if (cpState.footer.right) doc.text(cpState.footer.right, rightX, footerY, { align: "right" });
    }

    // Sort objects by zIndex
    const sortedObjects = [...cpState.objects].sort((a, b) => (a.zIndex || 1) - (b.zIndex || 1));

    for (const obj of sortedObjects) {
      const tempCanvas = document.createElement("canvas");
      // Render at 300 DPI for vector PDF image embed
      const targetWpx = Math.round((obj.wMm / 25.4) * 300);
      const targetHpx = Math.round((obj.hMm / 25.4) * 300);
      tempCanvas.width = targetWpx;
      tempCanvas.height = targetHpx;
      drawCroppedObjectToCanvas(obj, tempCanvas);

      const dataUrl = tempCanvas.toDataURL("image/jpeg", 0.95);
      if (obj.rotationDeg && obj.rotationDeg !== 0) {
        doc.addImage(dataUrl, "JPEG", obj.xMm, obj.yMm, obj.wMm, obj.hMm, undefined, undefined, obj.rotationDeg);
      } else {
        doc.addImage(dataUrl, "JPEG", obj.xMm, obj.yMm, obj.wMm, obj.hMm);
      }
    }

    const pdfBlob = doc.output("blob");
    downloadBlob(pdfBlob, `Custom_Print_${cpState.paperWmm}x${cpState.paperHmm}mm.pdf`);
    showToast("PDF exported with exact mm dimensions!", "success");
  }

  // Export 300 DPI Image
  async function exportCustomPrintImage() {
    const dpi = 300;
    const canvas = document.createElement("canvas");
    const sheetWpx = mmToPx(cpState.paperWmm, dpi);
    const sheetHpx = mmToPx(cpState.paperHmm, dpi);
    canvas.width = sheetWpx;
    canvas.height = sheetHpx;

    const ctx = canvas.getContext("2d");
    ctx.fillStyle = "#FFFFFF";
    ctx.fillRect(0, 0, sheetWpx, sheetHpx);

    // Header
    if (cpState.header.enabled) {
      ctx.font = `${mmToPx(3.5, dpi)}px sans-serif`;
      ctx.fillStyle = "#555555";
      const headerY = mmToPx((cpState.marginsIgnored ? 0 : cpState.marginTopMm) / 2 + 3, dpi);
      const leftX = mmToPx(cpState.marginsIgnored ? 5 : cpState.marginLeftMm, dpi);
      const rightX = mmToPx(cpState.marginsIgnored ? (cpState.paperWmm - 5) : (cpState.paperWmm - cpState.marginRightMm), dpi);

      if (cpState.header.left) ctx.fillText(cpState.header.left, leftX, headerY);
      if (cpState.header.center) {
        ctx.textAlign = "center";
        ctx.fillText(cpState.header.center, sheetWpx / 2, headerY);
        ctx.textAlign = "left";
      }
      if (cpState.header.right) {
        ctx.textAlign = "right";
        ctx.fillText(cpState.header.right, rightX, headerY);
        ctx.textAlign = "left";
      }
    }

    // Objects
    const sorted = [...cpState.objects].sort((a, b) => (a.zIndex || 1) - (b.zIndex || 1));
    for (const obj of sorted) {
      const objCanvas = document.createElement("canvas");
      objCanvas.width = mmToPx(obj.wMm, dpi);
      objCanvas.height = mmToPx(obj.hMm, dpi);
      drawCroppedObjectToCanvas(obj, objCanvas);

      const pxX = mmToPx(obj.xMm, dpi);
      const pxY = mmToPx(obj.yMm, dpi);
      const pxW = mmToPx(obj.wMm, dpi);
      const pxH = mmToPx(obj.hMm, dpi);

      ctx.save();
      if (obj.rotationDeg && obj.rotationDeg !== 0) {
        ctx.translate(pxX + pxW / 2, pxY + pxH / 2);
        ctx.rotate((obj.rotationDeg * Math.PI) / 180);
        ctx.drawImage(objCanvas, -pxW / 2, -pxH / 2, pxW, pxH);
      } else {
        ctx.drawImage(objCanvas, pxX, pxY, pxW, pxH);
      }
      ctx.restore();
    }

    // Footer
    if (cpState.footer.enabled) {
      ctx.font = `${mmToPx(3.2, dpi)}px sans-serif`;
      ctx.fillStyle = "#777777";
      const footerY = mmToPx(cpState.paperHmm - ((cpState.marginsIgnored ? 0 : cpState.marginBottomMm) / 2), dpi);
      const leftX = mmToPx(cpState.marginsIgnored ? 5 : cpState.marginLeftMm, dpi);
      const rightX = mmToPx(cpState.marginsIgnored ? (cpState.paperWmm - 5) : (cpState.paperWmm - cpState.marginRightMm), dpi);

      if (cpState.footer.left) ctx.fillText(cpState.footer.left, leftX, footerY);
      if (cpState.footer.center) {
        ctx.textAlign = "center";
        ctx.fillText(cpState.footer.center, sheetWpx / 2, footerY);
        ctx.textAlign = "left";
      }
      if (cpState.footer.right) {
        ctx.textAlign = "right";
        ctx.fillText(cpState.footer.right, rightX, footerY);
        ctx.textAlign = "left";
      }
    }

    const blob = await canvasToBlob(canvas, "image/png");
    downloadBlob(blob, `Custom_Print_${cpState.paperWmm}x${cpState.paperHmm}mm.png`);
    showToast("Downloaded 300 DPI high-resolution image!", "success");
  }

  // Direct Print
  async function printCustomPrintDirect() {
    showToast("Preparing document for direct print...", "info");
    const dpi = 300;
    const canvas = document.createElement("canvas");
    canvas.width = mmToPx(cpState.paperWmm, dpi);
    canvas.height = mmToPx(cpState.paperHmm, dpi);

    const ctx = canvas.getContext("2d");
    ctx.fillStyle = "#FFFFFF";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Objects
    const sorted = [...cpState.objects].sort((a, b) => (a.zIndex || 1) - (b.zIndex || 1));
    for (const obj of sorted) {
      const objCanvas = document.createElement("canvas");
      objCanvas.width = mmToPx(obj.wMm, dpi);
      objCanvas.height = mmToPx(obj.hMm, dpi);
      drawCroppedObjectToCanvas(obj, objCanvas);

      const pxX = mmToPx(obj.xMm, dpi);
      const pxY = mmToPx(obj.yMm, dpi);
      const pxW = mmToPx(obj.wMm, dpi);
      const pxH = mmToPx(obj.hMm, dpi);

      ctx.save();
      if (obj.rotationDeg && obj.rotationDeg !== 0) {
        ctx.translate(pxX + pxW / 2, pxY + pxH / 2);
        ctx.rotate((obj.rotationDeg * Math.PI) / 180);
        ctx.drawImage(objCanvas, -pxW / 2, -pxH / 2, pxW, pxH);
      } else {
        ctx.drawImage(objCanvas, pxX, pxY, pxW, pxH);
      }
      ctx.restore();
    }

    let printArea = document.getElementById("print-mount-area");
    if (printArea) printArea.remove();

    printArea = document.createElement("div");
    printArea.id = "print-mount-area";
    printArea.className = "print-mount-area";

    const img = document.createElement("img");
    img.src = canvas.toDataURL("image/png");
    img.style.width = `${cpState.paperWmm}mm`;
    img.style.height = `${cpState.paperHmm}mm`;
    img.style.display = "block";
    img.style.margin = "0 auto";

    printArea.appendChild(img);
    document.body.appendChild(printArea);

    setTimeout(() => {
      try {
        window.print();
      } catch (e) {
        console.error("Window print error:", e);
      } finally {
        setTimeout(() => {
          if (printArea && printArea.parentNode) {
            printArea.parentNode.removeChild(printArea);
          }
        }, 1200);
      }
    }, 200);
  }

  function openCustomPrintPreviewModal() {
    const modal = document.getElementById("modal-cp-preview");
    const canvas = document.getElementById("cp-full-preview-canvas");
    if (!modal || !canvas) return;

    modal.classList.remove("hidden");
    const previewScale = 2.0;
    const previewW = Math.round(cpState.paperWmm * previewScale);
    const previewH = Math.round(cpState.paperHmm * previewScale);

    canvas.width = previewW;
    canvas.height = previewH;
    canvas.style.width = `${Math.min(previewW, 580)}px`;
    canvas.style.height = "auto";

    const ctx = canvas.getContext("2d");
    ctx.fillStyle = "#FFFFFF";
    ctx.fillRect(0, 0, previewW, previewH);

    // Objects
    const sorted = [...cpState.objects].sort((a, b) => (a.zIndex || 1) - (b.zIndex || 1));
    for (const obj of sorted) {
      const objCanvas = document.createElement("canvas");
      objCanvas.width = Math.round(obj.wMm * previewScale);
      objCanvas.height = Math.round(obj.hMm * previewScale);
      drawCroppedObjectToCanvas(obj, objCanvas);

      const pxX = obj.xMm * previewScale;
      const pxY = obj.yMm * previewScale;
      const pxW = obj.wMm * previewScale;
      const pxH = obj.hMm * previewScale;

      ctx.save();
      if (obj.rotationDeg && obj.rotationDeg !== 0) {
        ctx.translate(pxX + pxW / 2, pxY + pxH / 2);
        ctx.rotate((obj.rotationDeg * Math.PI) / 180);
        ctx.drawImage(objCanvas, -pxW / 2, -pxH / 2, pxW, pxH);
      } else {
        ctx.drawImage(objCanvas, pxX, pxY, pxW, pxH);
      }
      ctx.restore();
    }
  }


  // src/app.js
  var state = {
    currentStep: 1,
    activeWorkflow: "photo", // "photo" | "pdf" | "custom"
    activeNav: "home",
    photoTray: [],
    activeTrayId: null,
    photoSize: getPhotoSizeById("passport-eu-uk"),
    paperSize: getPaperSizeById("paper-a4"),
    orientation: "auto",
    marginMm: 5,
    marginTopMm: 5,
    marginBottomMm: 5,
    marginLeftMm: 5,
    marginRightMm: 5,
    marginsLinked: true,
    ignoreMargins: false,
    gapMm: 2,
    borderMm: 0.5,
    borderColor: "#000000",
    cuttingMarks: "crop-marks",
    copies: "max",
    dpi: 300,
    borderless: false,
    layoutResult: null,
    placedCells: new Map(),
    currentEditItem: null,
    cameraStream: null,
    settings: loadSettings(),
    savedCustomPhotos: [],
    savedCustomPapers: []
  };

  var elements = {
    // Top Workflow Tabs
    btnModePhoto: document.getElementById("btn-mode-photo"),
    btnModePdf: document.getElementById("btn-mode-pdf"),
    btnModeCustom: document.getElementById("btn-mode-custom"),
    btnThemeToggle: document.getElementById("btn-theme-toggle"),
    themeIcon: document.getElementById("theme-icon"),
    stepperBar: document.getElementById("stepper-bar"),
    mobileStepIndicator: document.getElementById("mobile-step-indicator"),

    // Views
    viewHome: document.getElementById("view-home"),
    viewEditor: document.getElementById("view-editor"),
    viewLayout: document.getElementById("view-layout"),
    viewExport: document.getElementById("view-export"),
    viewPdfPrint: document.getElementById("view-pdf-print"),
    viewCustomPrint: document.getElementById("view-custom-print"),

    // Legacy or Home View Elements
    cardSelectFile: document.getElementById("card-select-file"),
    fileInputHidden: document.getElementById("file-input-hidden"),
    cardTakePhoto: document.getElementById("card-take-photo"),
    modalCamera: document.getElementById("modal-camera"),
    cameraVideo: document.getElementById("camera-video"),
    btnCameraSnap: document.getElementById("btn-camera-snap"),
    btnCameraClose: document.getElementById("btn-camera-close"),

    // Editor Controls
    cropCanvas: document.getElementById("crop-canvas"),
    faceGuideBanner: document.getElementById("face-guide-banner"),
    sliderZoom: document.getElementById("slider-zoom"),
    badgeZoomVal: document.getElementById("badge-zoom-val"),
    btnZoomIn: document.getElementById("btn-zoom-in"),
    btnZoomOut: document.getElementById("btn-zoom-out"),
    btnNudgeUp: document.getElementById("btn-nudge-up"),
    btnNudgeDown: document.getElementById("btn-nudge-down"),
    btnNudgeLeft: document.getElementById("btn-nudge-left"),
    btnNudgeRight: document.getElementById("btn-nudge-right"),
    sliderFineRotate: document.getElementById("slider-fine-rotate"),
    valFineRotate: document.getElementById("val-fine-rotate"),
    btnUndo: document.getElementById("btn-undo"),
    btnRedo: document.getElementById("btn-redo"),
    btnRotate90: document.getElementById("btn-rotate-90"),
    btnResetCrop: document.getElementById("btn-reset-crop"),
    btnEditorNext: document.getElementById("btn-editor-next"),

    // Photo Tray
    btnAddTrayPhoto: document.getElementById("btn-add-tray-photo"),
    trayFileInputHidden: document.getElementById("tray-file-input-hidden"),
    photoTrayStrip: document.getElementById("photo-tray-strip"),

    // Layout Controls
    btnOptimizeLayout: document.getElementById("btn-optimize-layout"),
    btnClearGrid: document.getElementById("btn-clear-grid"),
    btnOpenPhotoSizeModal: document.getElementById("btn-open-photo-size-modal"),
    labelSelectedPhotoSize: document.getElementById("label-selected-photo-size"),
    btnOpenPaperSizeModal: document.getElementById("btn-open-paper-size-modal"),
    labelSelectedPaperSize: document.getElementById("label-selected-paper-size"),
    copiesInfoText: document.getElementById("copies-info-text"),
    inputCustomCopies: document.getElementById("input-custom-copies"),
    toggleAdvancedSettings: document.getElementById("toggle-advanced-settings"),
    bodyAdvancedSettings: document.getElementById("body-advanced-settings"),

    // 4-Way Margin Controls
    inputMarginTop: document.getElementById("input-margin-top"),
    inputMarginBottom: document.getElementById("input-margin-bottom"),
    inputMarginLeft: document.getElementById("input-margin-left"),
    inputMarginRight: document.getElementById("input-margin-right"),
    btnToggleLinkMargins: document.getElementById("btn-toggle-link-margins"),
    iconLinkMargins: document.getElementById("icon-link-margins"),
    textLinkMargins: document.getElementById("text-link-margins"),
    chkIgnoreMargins: document.getElementById("chk-ignore-margins"),

    sliderGap: document.getElementById("slider-gap"),
    valGap: document.getElementById("val-gap"),
    selectBorderThickness: document.getElementById("select-border-thickness"),
    selectCuttingMarks: document.getElementById("select-cutting-marks"),
    selectOrientation: document.getElementById("select-orientation"),
    selectDpi: document.getElementById("select-dpi"),
    btnLayoutNext: document.getElementById("btn-layout-next"),

    // Preview Canvas
    previewCanvas: document.getElementById("preview-canvas"),
    paperFrame: document.getElementById("paper-frame"),
    previewSummaryStrip: document.getElementById("preview-summary-strip"),
    qualityCheckBadge: document.getElementById("quality-check-badge"),
    rulerX: document.getElementById("ruler-x"),
    rulerY: document.getElementById("ruler-y"),

    // Export
    btnExportPdf: document.getElementById("btn-export-pdf"),
    btnExportJpg: document.getElementById("btn-export-jpg"),
    btnExportPng: document.getElementById("btn-export-png"),
    btnPrintDirect: document.getElementById("btn-print-direct"),
    expValPhotoSize: document.getElementById("exp-val-photo-size"),
    expValPaperSize: document.getElementById("exp-val-paper-size"),
    expValCopies: document.getElementById("exp-val-copies"),
    expValDpi: document.getElementById("exp-val-dpi"),

    // Modals
    modalPhotoSize: document.getElementById("modal-photo-size"),
    btnClosePhotoModal: document.getElementById("btn-close-photo-modal"),
    inputSearchPhotoSize: document.getElementById("input-search-photo-size"),
    photoSizesList: document.getElementById("photo-sizes-list"),
    savedPhotoSizesSection: document.getElementById("saved-photo-sizes-section"),
    savedPhotoSizesList: document.getElementById("saved-photo-sizes-list"),
    customPhotoName: document.getElementById("custom-photo-name"),
    customPhotoW: document.getElementById("custom-photo-w"),
    customPhotoH: document.getElementById("custom-photo-h"),
    customPhotoUnit: document.getElementById("custom-photo-unit"),
    customPhotoDpi: document.getElementById("custom-photo-dpi"),
    btnApplyCustomPhoto: document.getElementById("btn-apply-custom-photo"),
    btnSaveCustomPhoto: document.getElementById("btn-save-custom-photo"),

    modalPaperSize: document.getElementById("modal-paper-size"),
    btnClosePaperModal: document.getElementById("btn-close-paper-modal"),
    selectPaperCategory: document.getElementById("select-paper-category"),
    inputSearchPaperSize: document.getElementById("input-search-paper-size"),
    paperSizesList: document.getElementById("paper-sizes-list"),
    savedPaperSizesSection: document.getElementById("saved-paper-sizes-section"),
    savedPaperSizesList: document.getElementById("saved-paper-sizes-list"),
    customPaperName: document.getElementById("custom-paper-name"),
    customPaperW: document.getElementById("custom-paper-w"),
    customPaperH: document.getElementById("custom-paper-h"),
    btnApplyCustomPaper: document.getElementById("btn-apply-custom-paper"),
    btnSaveCustomPaper: document.getElementById("btn-save-custom-paper"),

    mobileStepTitle: document.getElementById("mobile-step-title"),
    mobileStepProgress: document.getElementById("mobile-step-progress")
  };

  document.addEventListener("DOMContentLoaded", () => {
    initApp();
  });

  async function initApp() {
    applyTheme(state.settings.theme || "system");
    await loadSavedPresetsFromDB();
    bindEvents();
    renderPhotoSizesModalList();
    renderPaperSizesModalList();
    initPdfPrintService();
    initCustomPrintService();
    registerServiceWorker();
  }

  async function loadSavedPresetsFromDB() {
    try {
      const savedPhotos = await getAllCustomPhotos();
      state.savedCustomPhotos = savedPhotos || [];
      setCustomPhotoSizes(savedPhotos);

      const savedPapers = await getAllCustomPapers();
      state.savedCustomPapers = savedPapers || [];
      setCustomPaperSizes(savedPapers);
    } catch (e) {
      console.warn("Could not load custom presets from DB:", e);
    }
  }

  function registerServiceWorker() {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.getRegistrations().then((registrations) => {
        for (const registration of registrations) registration.unregister();
      });
    }
  }

  function bindEvents() {
    // Mode Switching (Photo Print, PDF Print, Custom Print)
    elements.btnModePhoto?.addEventListener("click", () => switchWorkflow("photo"));
    elements.btnModePdf?.addEventListener("click", () => switchWorkflow("pdf"));
    elements.btnModeCustom?.addEventListener("click", () => switchWorkflow("custom"));

    // Theme toggle button
    elements.btnThemeToggle?.addEventListener("click", () => {
      const currentTheme = document.documentElement.getAttribute("data-theme") || "light";
      const newTheme = currentTheme === "dark" ? "light" : "dark";
      state.settings.theme = newTheme;
      saveSettings(state.settings);
      applyTheme(newTheme);
      showToast(`Switched to ${newTheme} theme`, "info");
    });

    // Stepper navigation in Photo Print
    document.querySelectorAll(".step-item").forEach((el) => {
      el.addEventListener("click", () => {
        const step = parseInt(el.dataset.step, 10);
        if (step === 1) switchView("home");
        else if (step === 2 && state.currentEditItem) switchView("editor");
        else if (step >= 3 && step <= 5 && state.photoTray.length > 0) switchView("layout");
        else if (step === 6 && state.photoTray.length > 0) switchView("export");
      });
    });

    // Photo upload & capture
    elements.cardSelectFile?.addEventListener("click", () => elements.fileInputHidden?.click());
    elements.fileInputHidden?.addEventListener("change", handleFileSelected);

    if (elements.cardSelectFile) {
      elements.cardSelectFile.addEventListener("dragover", (e) => {
        e.preventDefault();
        elements.cardSelectFile.style.borderColor = "var(--primary-700)";
      });
      elements.cardSelectFile.addEventListener("dragleave", () => {
        elements.cardSelectFile.style.borderColor = "var(--border-color)";
      });
      elements.cardSelectFile.addEventListener("drop", (e) => {
        e.preventDefault();
        elements.cardSelectFile.style.borderColor = "var(--border-color)";
        if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
          processImageFile(e.dataTransfer.files[0]);
        }
      });
    }

    elements.btnAddTrayPhoto?.addEventListener("click", () => elements.trayFileInputHidden?.click());
    elements.trayFileInputHidden?.addEventListener("change", (e) => {
      if (e.target.files && e.target.files.length > 0) {
        processImageFile(e.target.files[0]);
      }
    });

    elements.cardTakePhoto?.addEventListener("click", openCameraModal);
    elements.btnCameraClose?.addEventListener("click", closeCameraModal);
    elements.btnCameraSnap?.addEventListener("click", captureCameraSnapshot);

    // Quick templates
    document.querySelectorAll("#quick-templates-grid .chip").forEach((chip) => {
      chip.addEventListener("click", () => {
        const t = chip.dataset.template;
        if (t === "passport-eu-uk") state.photoSize = getPhotoSizeById("passport-eu-uk");
        else if (t === "passport-us-2x2") state.photoSize = getPhotoSizeById("passport-us-2x2");
        else if (t === "passport-30x40") state.photoSize = getPhotoSizeById("passport-30x40");
        else if (t === "id-card-wallet") state.photoSize = getPhotoSizeById("id-card-wallet");
        else if (t === "a4-sheet") state.paperSize = getPaperSizeById("paper-a4");
        updateSelectedSizeLabels();
        elements.fileInputHidden?.click();
      });
    });

    // Zoom slider
    elements.sliderZoom?.addEventListener("input", (e) => {
      if (!state.currentEditItem) return;
      state.currentEditItem.zoom = parseFloat(e.target.value);
      if (elements.badgeZoomVal) elements.badgeZoomVal.textContent = `Zoom: ${Math.round(state.currentEditItem.zoom * 100)}%`;
      renderEditorCanvas();
    });

    elements.btnZoomIn?.addEventListener("click", () => {
      if (!state.currentEditItem) return;
      state.currentEditItem.zoom = Math.min(3, state.currentEditItem.zoom + 0.1);
      if (elements.sliderZoom) elements.sliderZoom.value = state.currentEditItem.zoom;
      if (elements.badgeZoomVal) elements.badgeZoomVal.textContent = `Zoom: ${Math.round(state.currentEditItem.zoom * 100)}%`;
      renderEditorCanvas();
    });

    elements.btnZoomOut?.addEventListener("click", () => {
      if (!state.currentEditItem) return;
      state.currentEditItem.zoom = Math.max(0.5, state.currentEditItem.zoom - 0.1);
      if (elements.sliderZoom) elements.sliderZoom.value = state.currentEditItem.zoom;
      if (elements.badgeZoomVal) elements.badgeZoomVal.textContent = `Zoom: ${Math.round(state.currentEditItem.zoom * 100)}%`;
      renderEditorCanvas();
    });

    if (elements.cropCanvas) {
      elements.cropCanvas.addEventListener("wheel", (e) => {
        e.preventDefault();
        if (!state.currentEditItem) return;
        const delta = e.deltaY < 0 ? 0.05 : -0.05;
        state.currentEditItem.zoom = Math.max(0.5, Math.min(3, state.currentEditItem.zoom + delta));
        if (elements.sliderZoom) elements.sliderZoom.value = state.currentEditItem.zoom;
        if (elements.badgeZoomVal) elements.badgeZoomVal.textContent = `Zoom: ${Math.round(state.currentEditItem.zoom * 100)}%`;
        renderEditorCanvas();
      }, { passive: false });
    }

    elements.btnNudgeUp?.addEventListener("click", () => nudgePan(0, -5));
    elements.btnNudgeDown?.addEventListener("click", () => nudgePan(0, 5));
    elements.btnNudgeLeft?.addEventListener("click", () => nudgePan(-5, 0));
    elements.btnNudgeRight?.addEventListener("click", () => nudgePan(5, 0));

    // Drag canvas to pan
    let isDragging = false;
    let startX = 0, startY = 0;
    const handlePointerStart = (clientX, clientY) => {
      isDragging = true;
      startX = clientX;
      startY = clientY;
      if (elements.cropCanvas) elements.cropCanvas.style.cursor = "grabbing";
    };
    const handlePointerMove = (clientX, clientY) => {
      if (!isDragging || !state.currentEditItem) return;
      const dx = clientX - startX;
      const dy = clientY - startY;
      startX = clientX;
      startY = clientY;
      state.currentEditItem.panX += dx;
      state.currentEditItem.panY += dy;
      renderEditorCanvas();
    };
    const handlePointerEnd = () => {
      if (isDragging) {
        isDragging = false;
        if (elements.cropCanvas) elements.cropCanvas.style.cursor = "grab";
      }
    };

    elements.cropCanvas?.addEventListener("mousedown", (e) => handlePointerStart(e.clientX, e.clientY));
    window.addEventListener("mousemove", (e) => handlePointerMove(e.clientX, e.clientY));
    window.addEventListener("mouseup", handlePointerEnd);

    elements.cropCanvas?.addEventListener("touchstart", (e) => {
      e.preventDefault();
      if (e.touches.length === 1) handlePointerStart(e.touches[0].clientX, e.touches[0].clientY);
    }, { passive: false });
    window.addEventListener("touchmove", (e) => {
      if (isDragging) e.preventDefault();
      if (e.touches.length === 1) handlePointerMove(e.touches[0].clientX, e.touches[0].clientY);
    }, { passive: false });
    window.addEventListener("touchend", handlePointerEnd);

    elements.sliderFineRotate?.addEventListener("input", (e) => {
      if (!state.currentEditItem) return;
      state.currentEditItem.fineRotation = parseFloat(e.target.value);
      if (elements.valFineRotate) elements.valFineRotate.textContent = state.currentEditItem.fineRotation;
      renderEditorCanvas();
    });

    elements.btnRotate90?.addEventListener("click", () => {
      if (!state.currentEditItem) return;
      state.currentEditItem.fineRotation = (state.currentEditItem.fineRotation + 90) % 360;
      if (elements.sliderFineRotate) elements.sliderFineRotate.value = state.currentEditItem.fineRotation;
      if (elements.valFineRotate) elements.valFineRotate.textContent = state.currentEditItem.fineRotation;
      renderEditorCanvas();
    });

    elements.btnResetCrop?.addEventListener("click", () => {
      if (!state.currentEditItem) return;
      state.currentEditItem.zoom = 1;
      state.currentEditItem.fineRotation = 0;
      state.currentEditItem.panX = 0;
      state.currentEditItem.panY = 0;
      if (elements.sliderZoom) elements.sliderZoom.value = 1;
      if (elements.badgeZoomVal) elements.badgeZoomVal.textContent = "Zoom: 100%";
      if (elements.sliderFineRotate) elements.sliderFineRotate.value = 0;
      if (elements.valFineRotate) elements.valFineRotate.textContent = "0";
      renderEditorCanvas();
    });

    document.querySelectorAll("#bg-fill-chips .chip").forEach((chip) => {
      chip.addEventListener("click", () => {
        document.querySelectorAll("#bg-fill-chips .chip").forEach((c) => c.classList.remove("selected"));
        chip.classList.add("selected");
        if (state.currentEditItem) {
          state.currentEditItem.bgColor = chip.dataset.bg;
          renderEditorCanvas();
        }
      });
    });

    document.getElementById("bg-custom-color")?.addEventListener("input", (e) => {
      if (state.currentEditItem) {
        state.currentEditItem.bgColor = e.target.value;
        renderEditorCanvas();
      }
    });

    elements.btnEditorNext?.addEventListener("click", () => {
      generateCroppedPhotoForActiveItem();
      switchView("layout");
    });

    elements.previewCanvas?.addEventListener("click", handlePreviewCanvasClick);
    elements.btnOpenPhotoSizeModal?.addEventListener("click", () => {
      renderPhotoSizesModalList();
      elements.modalPhotoSize?.classList.remove("hidden");
    });
    elements.btnClosePhotoModal?.addEventListener("click", () => elements.modalPhotoSize?.classList.add("hidden"));
    elements.btnOpenPaperSizeModal?.addEventListener("click", () => {
      renderPaperSizesModalList();
      elements.modalPaperSize?.classList.remove("hidden");
    });
    elements.btnClosePaperModal?.addEventListener("click", () => elements.modalPaperSize?.classList.add("hidden"));

    elements.inputSearchPhotoSize?.addEventListener("input", (e) => {
      renderPhotoSizesModalList(filterPhotoSizes(e.target.value));
    });
    elements.inputSearchPaperSize?.addEventListener("input", (e) => {
      const category = elements.selectPaperCategory?.value || "All";
      renderPaperSizesModalList(filterPaperSizes(category, e.target.value));
    });
    elements.selectPaperCategory?.addEventListener("change", (e) => {
      const query = elements.inputSearchPaperSize?.value || "";
      renderPaperSizesModalList(filterPaperSizes(e.target.value, query));
    });

    // PHASE 4: Apply Custom Photo (once)
    elements.btnApplyCustomPhoto?.addEventListener("click", () => {
      const w = parseFloat(elements.customPhotoW?.value);
      const h = parseFloat(elements.customPhotoH?.value);
      const unit = elements.customPhotoUnit?.value || "mm";
      if (w > 0 && h > 0) {
        const wMm = unit === "in" ? inchToMm(w) : w;
        const hMm = unit === "in" ? inchToMm(h) : h;
        state.photoSize = {
          id: `custom-${Date.now()}`,
          name: `Custom (${w}×${h} ${unit})`,
          widthMm: wMm,
          heightMm: hMm,
          displayLabel: `${w} × ${h} ${unit}`,
          category: "Custom",
          isCustom: true
        };
        updateSelectedSizeLabels();
        elements.modalPhotoSize?.classList.add("hidden");
        state.photoTray.forEach((t) => generateCroppedPhotoForItem(t));
        recalculateLayoutAndPreview();
        showToast("Applied custom photo size", "success");
      }
    });

    // PHASE 4: Save Custom Photo Preset (persistent to IndexedDB)
    elements.btnSaveCustomPhoto?.addEventListener("click", async () => {
      const name = elements.customPhotoName?.value?.trim() || "My Photo Preset";
      const w = parseFloat(elements.customPhotoW?.value);
      const h = parseFloat(elements.customPhotoH?.value);
      const unit = elements.customPhotoUnit?.value || "mm";
      const dpi = parseInt(elements.customPhotoDpi?.value, 10) || 300;

      if (!w || w <= 0 || !h || h <= 0) {
        showToast("Width and Height must be greater than 0.", "warning");
        return;
      }

      const wMm = unit === "in" ? inchToMm(w) : w;
      const hMm = unit === "in" ? inchToMm(h) : h;

      const newPreset = {
        id: `cphoto-${Date.now()}`,
        name: `${name} (${w}×${h}${unit})`,
        widthMm: wMm,
        heightMm: hMm,
        displayLabel: `${w} × ${h} ${unit}`,
        category: "Custom",
        dpi,
        unit,
        isCustom: true
      };

      try {
        await saveCustomPhoto(newPreset);
        await loadSavedPresetsFromDB();
        renderPhotoSizesModalList();
        showToast(`Saved custom size "${name}" to presets!`, "success");
      } catch (err) {
        console.error("Save custom photo error:", err);
        showToast("Failed to save custom photo size.", "error");
      }
    });

    // PHASE 3: Apply Custom Paper (once)
    elements.btnApplyCustomPaper?.addEventListener("click", () => {
      const w = parseFloat(elements.customPaperW?.value);
      const h = parseFloat(elements.customPaperH?.value);
      const isPortrait = document.getElementById("custom-paper-orient-portrait")?.checked ?? true;
      if (w > 0 && h > 0) {
        state.paperSize = {
          id: `cpaper-${Date.now()}`,
          name: `Custom Paper (${w}×${h} mm)`,
          widthMm: isPortrait ? Math.min(w, h) : Math.max(w, h),
          heightMm: isPortrait ? Math.max(w, h) : Math.min(w, h),
          displayLabel: `Custom (${w} × ${h} mm)`,
          category: "Custom",
          isCustom: true
        };
        updateSelectedSizeLabels();
        elements.modalPaperSize?.classList.add("hidden");
        recalculateLayoutAndPreview();
        showToast("Applied custom paper size", "success");
      }
    });

    // PHASE 3: Save Custom Paper Preset (persistent to IndexedDB)
    elements.btnSaveCustomPaper?.addEventListener("click", async () => {
      const name = elements.customPaperName?.value?.trim() || "My Paper Preset";
      const w = parseFloat(elements.customPaperW?.value);
      const h = parseFloat(elements.customPaperH?.value);
      const isPortrait = document.getElementById("custom-paper-orient-portrait")?.checked ?? true;

      if (!w || w <= 0 || !h || h <= 0) {
        showToast("Width and Height must be greater than 0.", "warning");
        return;
      }

      const newPaper = {
        id: `cpaper-${Date.now()}`,
        name: `${name} (${w}×${h} mm)`,
        widthMm: isPortrait ? Math.min(w, h) : Math.max(w, h),
        heightMm: isPortrait ? Math.max(w, h) : Math.min(w, h),
        displayLabel: `${w} × ${h} mm`,
        category: "Custom",
        orientationSupport: isPortrait ? "portrait" : "landscape",
        isCustom: true
      };

      try {
        await saveCustomPaper(newPaper);
        await loadSavedPresetsFromDB();
        renderPaperSizesModalList();
        showToast(`Saved custom paper "${name}" to presets!`, "success");
      } catch (err) {
        console.error("Save custom paper error:", err);
        showToast("Failed to save custom paper preset.", "error");
      }
    });

    elements.btnOptimizeLayout?.addEventListener("click", () => autoFillGrid());
    elements.btnClearGrid?.addEventListener("click", () => {
      state.placedCells.clear();
      state.copies = 0;
      recalculateLayoutAndPreview();
    });

    elements.toggleAdvancedSettings?.addEventListener("click", () => {
      elements.bodyAdvancedSettings?.classList.toggle("hidden");
    });

    document.querySelectorAll("#copies-chips .chip").forEach((chip) => {
      chip.addEventListener("click", () => {
        document.querySelectorAll("#copies-chips .chip").forEach((c) => c.classList.remove("selected"));
        chip.classList.add("selected");
        const val = chip.dataset.copies;
        state.copies = val === "max" ? "max" : parseInt(val, 10);
        autoFillGrid();
      });
    });

    elements.inputCustomCopies?.addEventListener("input", (e) => {
      const val = parseInt(e.target.value, 10);
      if (val > 0) {
        document.querySelectorAll("#copies-chips .chip").forEach((c) => c.classList.remove("selected"));
        state.copies = val;
        autoFillGrid();
      }
    });

    // PHASE 6: 4-Way Margin Inputs Binding
    elements.btnToggleLinkMargins?.addEventListener("click", () => {
      state.marginsLinked = !state.marginsLinked;
      if (elements.textLinkMargins) elements.textLinkMargins.textContent = state.marginsLinked ? "Linked" : "Unlinked";
      showToast(state.marginsLinked ? "Photo Print margins linked" : "Photo Print margins unlinked", "info");
    });

    elements.chkIgnoreMargins?.addEventListener("change", (e) => {
      state.ignoreMargins = e.target.checked;
      recalculateLayoutAndPreview();
    });

    ["top", "bottom", "left", "right"].forEach((side) => {
      const input = document.getElementById(`input-margin-${side}`);
      input?.addEventListener("input", (e) => {
        const val = parseFloat(e.target.value) || 0;
        if (state.marginsLinked) {
          state.marginTopMm = val;
          state.marginBottomMm = val;
          state.marginLeftMm = val;
          state.marginRightMm = val;
          state.marginMm = val;
          ["top", "bottom", "left", "right"].forEach((s) => {
            const el = document.getElementById(`input-margin-${s}`);
            if (el && el !== e.target) el.value = val;
          });
        } else {
          if (side === "top") state.marginTopMm = val;
          if (side === "bottom") state.marginBottomMm = val;
          if (side === "left") state.marginLeftMm = val;
          if (side === "right") state.marginRightMm = val;
        }
        recalculateLayoutAndPreview();
      });
    });

    elements.sliderGap?.addEventListener("input", (e) => {
      state.gapMm = parseFloat(e.target.value);
      if (elements.valGap) elements.valGap.textContent = state.gapMm;
      recalculateLayoutAndPreview();
    });

    elements.selectBorderThickness?.addEventListener("change", (e) => {
      state.borderMm = parseFloat(e.target.value);
      recalculateLayoutAndPreview();
    });

    document.querySelectorAll("#border-color-chips .chip").forEach((chip) => {
      chip.addEventListener("click", () => {
        document.querySelectorAll("#border-color-chips .chip").forEach((c) => c.classList.remove("selected"));
        chip.classList.add("selected");
        state.borderColor = chip.dataset.color;
        recalculateLayoutAndPreview();
      });
    });

    elements.selectCuttingMarks?.addEventListener("change", (e) => {
      state.cuttingMarks = e.target.value;
      recalculateLayoutAndPreview();
    });

    elements.selectOrientation?.addEventListener("change", (e) => {
      state.orientation = e.target.value;
      recalculateLayoutAndPreview();
    });

    elements.selectDpi?.addEventListener("change", (e) => {
      state.dpi = parseInt(e.target.value, 10);
      recalculateLayoutAndPreview();
    });

    elements.btnLayoutNext?.addEventListener("click", () => {
      updateExportSummary();
      switchView("export");
    });

    // Exports
    elements.btnExportPdf?.addEventListener("click", async () => {
      if (!state.layoutResult || state.photoTray.length === 0) return;
      try {
        const croppedList = getOrderedCroppedCanvasesForExport();
        const pdfBlob = await generatePDF(state.layoutResult, croppedList, {
          borderColor: state.borderColor,
          cuttingMarks: state.cuttingMarks
        });
        const filename = `PhotoPrint_Sheet_${state.photoSize.widthMm}x${state.photoSize.heightMm}mm.pdf`;
        downloadBlob(pdfBlob, filename);
        showToast("PDF downloaded successfully!", "success");
      } catch (err) {
        console.error("PDF export error:", err);
        showToast("Could not generate PDF file.", "error");
      }
    });

    elements.btnExportJpg?.addEventListener("click", async () => {
      if (!state.layoutResult || state.photoTray.length === 0) return;
      const croppedList = getOrderedCroppedCanvasesForExport();
      const canvas = renderSheetToCanvas(state.layoutResult, croppedList, {
        dpi: state.dpi,
        borderColor: state.borderColor,
        cuttingMarks: state.cuttingMarks
      });
      const blob = await canvasToBlob(canvas, "image/jpeg", 0.95);
      downloadBlob(blob, `PhotoPrint_Sheet_${state.dpi}DPI.jpg`);
      showToast("JPG sheet downloaded!", "success");
    });

    elements.btnExportPng?.addEventListener("click", async () => {
      if (!state.layoutResult || state.photoTray.length === 0) return;
      const croppedList = getOrderedCroppedCanvasesForExport();
      const canvas = renderSheetToCanvas(state.layoutResult, croppedList, {
        dpi: state.dpi,
        borderColor: state.borderColor,
        cuttingMarks: state.cuttingMarks
      });
      const blob = await canvasToBlob(canvas, "image/png");
      downloadBlob(blob, `PhotoPrint_Sheet_${state.dpi}DPI.png`);
      showToast("PNG sheet downloaded!", "success");
    });

    elements.btnPrintDirect?.addEventListener("click", () => {
      if (!state.layoutResult || state.photoTray.length === 0) return;
      const croppedList = getOrderedCroppedCanvasesForExport();
      printSheet(state.layoutResult, croppedList, {
        borderColor: state.borderColor,
        cuttingMarks: state.cuttingMarks
      });
    });
  }

  // Top Workflow Switcher
  function switchWorkflow(mode) {
    state.activeWorkflow = mode;

    [elements.btnModePhoto, elements.btnModePdf, elements.btnModeCustom].forEach((b) => b?.classList.remove("active"));
    if (mode === "photo") elements.btnModePhoto?.classList.add("active");
    else if (mode === "pdf") elements.btnModePdf?.classList.add("active");
    else if (mode === "custom") elements.btnModeCustom?.classList.add("active");

    const allViews = [
      elements.viewHome,
      elements.viewEditor,
      elements.viewLayout,
      elements.viewExport,
      elements.viewPdfPrint,
      elements.viewCustomPrint
    ];
    allViews.forEach((v) => v?.classList.add("hidden"));

    if (mode === "photo") {
      elements.stepperBar?.classList.remove("hidden");
      elements.mobileStepIndicator?.classList.remove("hidden");
      switchView(state.activeNav || "home");
    } else if (mode === "pdf") {
      elements.stepperBar?.classList.add("hidden");
      elements.mobileStepIndicator?.classList.add("hidden");
      elements.viewPdfPrint?.classList.remove("hidden");
    } else if (mode === "custom") {
      elements.stepperBar?.classList.add("hidden");
      elements.mobileStepIndicator?.classList.add("hidden");
      elements.viewCustomPrint?.classList.remove("hidden");
      renderCustomPrintCanvas();
    }
  }

  function nudgePan(dx, dy) {
    if (!state.currentEditItem) return;
    state.currentEditItem.panX += dx;
    state.currentEditItem.panY += dy;
    renderEditorCanvas();
  }

  function switchView(viewName) {
    state.activeNav = viewName;
    const views = [elements.viewHome, elements.viewEditor, elements.viewLayout, elements.viewExport];
    views.forEach((v) => v && v.classList.add("hidden"));

    if (viewName === "home") {
      elements.viewHome?.classList.remove("hidden");
      updateStepper(1);
    } else if (viewName === "editor") {
      elements.viewEditor?.classList.remove("hidden");
      updateStepper(2);
      renderEditorCanvas();
    } else if (viewName === "layout") {
      elements.viewLayout?.classList.remove("hidden");
      updateStepper(4);
      renderPhotoTrayStrip();
      recalculateLayoutAndPreview();
    } else if (viewName === "export") {
      elements.viewExport?.classList.remove("hidden");
      updateStepper(6);
    }
  }

  function updateStepper(stepNum) {
    state.currentStep = stepNum;
    const stepTitles = {
      1: "Select Photo",
      2: "Photo Editor",
      3: "Photo Size",
      4: "Layout Settings",
      5: "Paper Preview",
      6: "Export & Print"
    };
    if (elements.mobileStepTitle) {
      elements.mobileStepTitle.textContent = `Step ${stepNum} of 6: ${stepTitles[stepNum] || ""}`;
    }
    if (elements.mobileStepProgress) {
      elements.mobileStepProgress.textContent = `${stepNum} / 6`;
    }
    document.querySelectorAll(".step-item").forEach((el) => {
      const s = parseInt(el.dataset.step, 10);
      el.classList.remove("active", "completed");
      if (s === stepNum) el.classList.add("active");
      else if (s < stepNum) el.classList.add("completed");
    });
  }

  function updateSelectedSizeLabels() {
    if (elements.labelSelectedPhotoSize) {
      elements.labelSelectedPhotoSize.textContent = state.photoSize.name || state.photoSize.displayLabel;
    }
    if (elements.labelSelectedPaperSize) {
      elements.labelSelectedPaperSize.textContent = state.paperSize.name || state.paperSize.displayLabel;
    }
  }

  function handleFileSelected(e) {
    if (e.target.files && e.target.files.length > 0) {
      processImageFile(e.target.files[0]);
    }
  }

  async function processImageFile(file) {
    const check = validateImageFile(file);
    if (!check.valid) {
      showToast(check.error, "error");
      return;
    }
    try {
      const img = await loadImage(file);
      const itemIndex = state.photoTray.length + 1;
      const trayItem = {
        id: `photo-${Date.now()}-${Math.random().toString(36).substring(2, 6)}`,
        name: `Person ${itemIndex}`,
        rawImage: img,
        workingCanvas: createWorkingCanvas(img, 1200),
        croppedCanvas: null,
        zoom: 1,
        fineRotation: 0,
        panX: 0,
        panY: 0,
        bgColor: "original"
      };
      state.photoTray.push(trayItem);
      state.activeTrayId = trayItem.id;
      state.currentEditItem = trayItem;
      if (elements.sliderZoom) elements.sliderZoom.value = 1;
      if (elements.badgeZoomVal) elements.badgeZoomVal.textContent = "Zoom: 100%";
      if (elements.sliderFineRotate) elements.sliderFineRotate.value = 0;
      if (elements.valFineRotate) elements.valFineRotate.textContent = "0";
      switchView("editor");
      showToast("Photo loaded into editor", "info");
    } catch (err) {
      console.error("Image load failed:", err);
      showToast("Unable to load the selected image file.", "error");
    }
  }

  function getActiveTrayItem() {
    return state.photoTray.find((item) => item.id === state.activeTrayId) || state.photoTray[0] || null;
  }

  function renderPhotoTrayStrip() {
    if (!elements.photoTrayStrip) return;
    elements.photoTrayStrip.innerHTML = "";

    state.photoTray.forEach((item) => {
      const itemEl = document.createElement("div");
      itemEl.className = `card card-interactive ${item.id === state.activeTrayId ? "selected" : ""}`;
      itemEl.style.minWidth = "90px";
      itemEl.style.padding = "6px";
      itemEl.style.textAlign = "center";
      itemEl.style.position = "relative";
      itemEl.draggable = true;

      itemEl.addEventListener("dragstart", (e) => {
        e.dataTransfer.setData("text/plain", item.id);
        state.activeTrayId = item.id;
        state.currentEditItem = item;
      });

      const removeBtn = document.createElement("button");
      removeBtn.className = "tray-remove-btn";
      removeBtn.innerHTML = "✕";
      removeBtn.title = "Remove photo from tray";
      removeBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        removePhotoFromTray(item.id);
      });

      const canvasThumb = document.createElement("canvas");
      canvasThumb.width = 80;
      canvasThumb.height = 100;
      canvasThumb.style.width = "100%";
      canvasThumb.style.borderRadius = "4px";
      if (item.croppedCanvas) {
        const ctx = canvasThumb.getContext("2d");
        ctx.drawImage(item.croppedCanvas, 0, 0, 80, 100);
      }

      const nameLabel = document.createElement("div");
      nameLabel.style.fontSize = "11px";
      nameLabel.style.fontWeight = "600";
      nameLabel.style.marginTop = "4px";
      nameLabel.style.whiteSpace = "nowrap";
      nameLabel.style.overflow = "hidden";
      nameLabel.style.textOverflow = "ellipsis";
      nameLabel.textContent = item.name;

      itemEl.appendChild(removeBtn);
      itemEl.appendChild(canvasThumb);
      itemEl.appendChild(nameLabel);

      itemEl.addEventListener("click", () => {
        state.activeTrayId = item.id;
        state.currentEditItem = item;
        renderPhotoTrayStrip();
      });

      elements.photoTrayStrip.appendChild(itemEl);
    });
  }

  function removePhotoFromTray(photoId) {
    const index = state.photoTray.findIndex((p) => p.id === photoId);
    if (index !== -1) {
      state.photoTray.splice(index, 1);
    }
    for (const [cellIndex, placedId] of state.placedCells.entries()) {
      if (placedId === photoId) {
        state.placedCells.delete(cellIndex);
      }
    }
    if (state.activeTrayId === photoId) {
      if (state.photoTray.length > 0) {
        const newActive = state.photoTray[Math.min(index, state.photoTray.length - 1)];
        state.activeTrayId = newActive.id;
        state.currentEditItem = newActive;
      } else {
        state.activeTrayId = null;
        state.currentEditItem = null;
      }
    }
    renderPhotoTrayStrip();
    if (state.photoTray.length === 0) {
      state.placedCells.clear();
      switchView("home");
    } else {
      recalculateLayoutAndPreview();
    }
  }

  async function openCameraModal() {
    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
      showToast("Camera API is not supported on this browser or device.", "error");
      return;
    }
    try {
      state.cameraStream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: "user" } });
      if (elements.cameraVideo) elements.cameraVideo.srcObject = state.cameraStream;
      elements.modalCamera?.classList.remove("hidden");
    } catch (err) {
      console.error("Camera access denied:", err);
      showToast("Could not access camera. Check device permissions.", "error");
    }
  }

  function closeCameraModal() {
    if (state.cameraStream) {
      state.cameraStream.getTracks().forEach((t) => t.stop());
      state.cameraStream = null;
    }
    elements.modalCamera?.classList.add("hidden");
  }

  function captureCameraSnapshot() {
    if (!elements.cameraVideo || !elements.cameraVideo.videoWidth) return;
    const canvas = document.createElement("canvas");
    canvas.width = elements.cameraVideo.videoWidth;
    canvas.height = elements.cameraVideo.videoHeight;
    const ctx = canvas.getContext("2d");
    ctx.drawImage(elements.cameraVideo, 0, 0);
    closeCameraModal();

    const itemIndex = state.photoTray.length + 1;
    const trayItem = {
      id: `photo-${Date.now()}`,
      name: `Person ${itemIndex}`,
      rawImage: canvas,
      workingCanvas: createWorkingCanvas(canvas, 1200),
      croppedCanvas: null,
      zoom: 1,
      fineRotation: 0,
      panX: 0,
      panY: 0,
      bgColor: "original"
    };
    state.photoTray.push(trayItem);
    state.activeTrayId = trayItem.id;
    state.currentEditItem = trayItem;
    switchView("editor");
  }

  function renderEditorCanvas() {
    if (!state.currentEditItem || !state.currentEditItem.workingCanvas || !elements.cropCanvas) return;
    const canvas = elements.cropCanvas;
    const ctx = canvas.getContext("2d");
    const item = state.currentEditItem;
    const targetW = state.photoSize.widthMm;
    const targetH = state.photoSize.heightMm;
    const aspect = targetW / targetH;
    const maxContainerW = Math.min(window.innerWidth - 48, 480);
    const canvasW = maxContainerW;
    const canvasH = Math.round(canvasW / aspect);
    canvas.width = canvasW;
    canvas.height = canvasH;

    const tempCropped = renderCroppedCanvas(
      item.workingCanvas,
      { x: 0, y: 0, width: canvasW, height: canvasH },
      { zoom: item.zoom, panX: item.panX, panY: item.panY, rotation: item.fineRotation },
      canvasW,
      canvasH,
      item.bgColor
    );
    ctx.drawImage(tempCropped, 0, 0);
    drawBiometricOvalGuide(ctx, canvasW, canvasH);
    const faceAnalysis = analyzeFacePosition(tempCropped);
    if (elements.faceGuideBanner) {
      elements.faceGuideBanner.textContent = faceAnalysis.message;
      elements.faceGuideBanner.className = `status-badge ${faceAnalysis.statusColor}`;
    }
  }

  function generateCroppedPhotoForActiveItem() {
    if (!state.currentEditItem) return;
    generateCroppedPhotoForItem(state.currentEditItem);
  }

  function generateCroppedPhotoForItem(item) {
    if (!item || !item.workingCanvas) return;
    const targetWpx = Math.round((state.photoSize.widthMm / 25.4) * 300);
    const targetHpx = Math.round((state.photoSize.heightMm / 25.4) * 300);
    item.croppedCanvas = renderCroppedCanvas(
      item.workingCanvas,
      { x: 0, y: 0, width: targetWpx, height: targetHpx },
      { zoom: item.zoom, panX: item.panX, panY: item.panY, rotation: item.fineRotation },
      targetWpx,
      targetHpx,
      item.bgColor
    );
  }

  function recalculateLayoutAndPreview() {
    if (!state.photoSize || !state.paperSize) return;

    const layout = calculateLayout({
      photoWmm: state.photoSize.widthMm,
      photoHmm: state.photoSize.heightMm,
      paperWmm: state.paperSize.widthMm,
      paperHmm: state.paperSize.heightMm,
      marginMm: state.marginMm,
      marginTopMm: state.marginTopMm,
      marginBottomMm: state.marginBottomMm,
      marginLeftMm: state.marginLeftMm,
      marginRightMm: state.marginRightMm,
      gapMm: state.gapMm,
      borderMm: state.borderMm,
      orientation: state.orientation,
      copies: state.copies,
      borderless: state.paperSize.borderless || state.borderless,
      ignoreMargins: state.ignoreMargins
    });

    state.layoutResult = layout;
    if (layout.isValid) {
      initialPlaceTrayPhotos();
    }
    const activeCount = state.placedCells.size;
    if (layout.isValid) {
      if (elements.copiesInfoText) {
        elements.copiesInfoText.textContent = `${activeCount} / ${layout.maxCopies} cells filled on ${layout.orientation} ${state.paperSize.displayLabel}`;
      }
      if (elements.previewSummaryStrip) {
        elements.previewSummaryStrip.textContent = `${state.photoSize.displayLabel} · ${state.paperSize.displayLabel} · ${activeCount} photos`;
      }
      if (elements.qualityCheckBadge) {
        elements.qualityCheckBadge.textContent = "✓ Print Quality Good";
        elements.qualityCheckBadge.className = "status-badge success";
      }
    } else {
      if (elements.copiesInfoText) elements.copiesInfoText.textContent = layout.error || "Photo is too large for selected paper.";
      if (elements.previewSummaryStrip) elements.previewSummaryStrip.textContent = "Invalid Layout";
      if (elements.qualityCheckBadge) {
        elements.qualityCheckBadge.textContent = "❌ Photo exceeds paper boundary";
        elements.qualityCheckBadge.className = "status-badge danger";
      }
    }

    if (elements.rulerX) elements.rulerX.textContent = `${layout.paperWmm} mm`;
    if (elements.rulerY) elements.rulerY.textContent = `${layout.paperHmm} mm`;
    renderLivePreviewCanvas(layout);
  }

  function initialPlaceTrayPhotos() {
    if (!state.layoutResult || !state.layoutResult.isValid) return;
    const max = state.layoutResult.maxCopies;
    state.photoTray.forEach((item) => {
      const isAlreadyPlaced = Array.from(state.placedCells.values()).includes(item.id);
      if (!isAlreadyPlaced) {
        for (let i = 0; i < max; i++) {
          if (!state.placedCells.has(i)) {
            state.placedCells.set(i, item.id);
            break;
          }
        }
      }
    });
  }

  function autoFillGrid() {
    if (!state.layoutResult || !state.layoutResult.isValid) return;
    state.placedCells.clear();
    const max = state.layoutResult.maxCopies;
    const target = state.copies === "max" ? max : Math.min(state.copies, max);
    const trayIds = state.photoTray.map((t) => t.id);
    if (trayIds.length === 0) return;
    for (let i = 0; i < target; i++) {
      const photoId = trayIds[i % trayIds.length];
      state.placedCells.set(i, photoId);
    }
    recalculateLayoutAndPreview();
  }

  function renderLivePreviewCanvas(layout) {
    if (!elements.previewCanvas) return;
    const canvas = elements.previewCanvas;
    const ctx = canvas.getContext("2d");
    const maxDisplayW = Math.min(window.innerWidth - 48, 450);
    const aspect = layout.paperWmm / layout.paperHmm;
    let frameW = maxDisplayW;
    let frameH = Math.round(frameW / aspect);
    canvas.width = frameW;
    canvas.height = frameH;

    if (elements.paperFrame) {
      elements.paperFrame.style.width = `${frameW}px`;
      elements.paperFrame.style.height = `${frameH}px`;
    }

    ctx.fillStyle = "#FFFFFF";
    ctx.fillRect(0, 0, frameW, frameH);
    if (!layout.isValid) return;

    const scaleFactor = frameW / layout.paperWmm;
    for (let i = 0; i < layout.photoRects.length; i++) {
      const rect = layout.photoRects[i];
      const pxCellX = rect.cellX * scaleFactor;
      const pxCellY = rect.cellY * scaleFactor;
      const pxCellW = rect.cellW * scaleFactor;
      const pxCellH = rect.cellH * scaleFactor;
      const pxX = rect.x * scaleFactor;
      const pxY = rect.y * scaleFactor;
      const pxW = rect.w * scaleFactor;
      const pxH = rect.h * scaleFactor;

      ctx.save();
      ctx.strokeStyle = "#cbd5e1";
      ctx.lineWidth = 1;
      ctx.setLineDash([4, 4]);
      ctx.strokeRect(pxCellX, pxCellY, pxCellW, pxCellH);
      ctx.restore();

      const assignedPhotoId = state.placedCells.get(i);
      const photoItem = state.photoTray.find((p) => p.id === assignedPhotoId);
      if (photoItem && photoItem.croppedCanvas) {
        ctx.drawImage(photoItem.croppedCanvas, pxX, pxY, pxW, pxH);
        if (rect.borderMm > 0) {
          ctx.strokeStyle = state.borderColor;
          ctx.lineWidth = Math.max(1, rect.borderMm * scaleFactor);
          ctx.strokeRect(pxCellX, pxCellY, pxCellW, pxCellH);
        }
        if (state.cuttingMarks !== "none") {
          ctx.strokeStyle = "#94a3b8";
          ctx.lineWidth = 1;
          ctx.strokeRect(pxCellX, pxCellY, pxCellW, pxCellH);
        }
      } else {
        ctx.fillStyle = "#f8fafc";
        ctx.fillRect(pxX, pxY, pxW, pxH);
        ctx.fillStyle = "#94a3b8";
        ctx.font = `${Math.max(12, Math.round(pxW * 0.3))}px sans-serif`;
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText("+", pxCellX + pxCellW / 2, pxCellY + pxCellH / 2);
      }
    }
  }

  function handlePreviewCanvasClick(e) {
    if (!state.layoutResult || !state.layoutResult.isValid || !elements.previewCanvas) return;
    const rect = elements.previewCanvas.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const clickY = e.clientY - rect.top;
    const frameW = elements.previewCanvas.width;
    const scaleFactor = frameW / state.layoutResult.paperWmm;

    for (let i = 0; i < state.layoutResult.photoRects.length; i++) {
      const photoRect = state.layoutResult.photoRects[i];
      const cellX = photoRect.cellX * scaleFactor;
      const cellY = photoRect.cellY * scaleFactor;
      const cellW = photoRect.cellW * scaleFactor;
      const cellH = photoRect.cellH * scaleFactor;
      if (clickX >= cellX && clickX <= cellX + cellW && clickY >= cellY && clickY <= cellY + cellH) {
        if (state.placedCells.has(i)) {
          state.placedCells.delete(i);
        } else {
          state.placedCells.set(i, state.activeTrayId);
        }
        recalculateLayoutAndPreview();
        break;
      }
    }
  }

  function getOrderedCroppedCanvasesForExport() {
    const result = [];
    if (!state.layoutResult) return result;
    for (let i = 0; i < state.layoutResult.photoRects.length; i++) {
      const photoId = state.placedCells.get(i);
      if (photoId) {
        const item = state.photoTray.find((p) => p.id === photoId);
        result.push(item ? item.croppedCanvas : null);
      } else {
        result.push(null);
      }
    }
    return result;
  }

  function updateExportSummary() {
    if (!state.layoutResult) return;
    if (elements.expValPhotoSize) elements.expValPhotoSize.textContent = state.photoSize.displayLabel;
    if (elements.expValPaperSize) elements.expValPaperSize.textContent = state.paperSize.displayLabel;
    if (elements.expValCopies) {
      elements.expValCopies.textContent = `${state.placedCells.size} placed photos (${state.layoutResult.cols} cols × ${state.layoutResult.rows} rows max capacity)`;
    }
    if (elements.expValDpi) elements.expValDpi.textContent = `${state.dpi} DPI`;
  }

  // PHASE 4: Render Photo Sizes Modal with Saved Presets
  function renderPhotoSizesModalList(sizes = filterPhotoSizes("")) {
    if (!elements.photoSizesList) return;
    elements.photoSizesList.innerHTML = "";

    // Saved custom sizes list
    if (elements.savedPhotoSizesSection && elements.savedPhotoSizesList) {
      if (state.savedCustomPhotos.length > 0) {
        elements.savedPhotoSizesSection.classList.remove("hidden");
        elements.savedPhotoSizesList.innerHTML = "";

        state.savedCustomPhotos.forEach((preset) => {
          const item = document.createElement("div");
          item.className = "saved-preset-item";

          const info = document.createElement("div");
          info.className = "saved-preset-info";
          info.innerHTML = `<strong>${preset.name}</strong><span style="color:var(--text-secondary);">${preset.displayLabel}</span>`;

          const actions = document.createElement("div");
          actions.className = "saved-preset-actions";

          const btnUse = document.createElement("button");
          btnUse.className = "btn btn-primary btn-xs";
          btnUse.textContent = "Use";
          btnUse.onclick = () => {
            state.photoSize = preset;
            updateSelectedSizeLabels();
            elements.modalPhotoSize?.classList.add("hidden");
            state.photoTray.forEach((t) => generateCroppedPhotoForItem(t));
            recalculateLayoutAndPreview();
            showToast(`Selected "${preset.name}"`, "info");
          };

          const btnRename = document.createElement("button");
          btnRename.className = "btn btn-secondary btn-xs";
          btnRename.textContent = "✏️";
          btnRename.title = "Rename Preset";
          btnRename.onclick = async () => {
            const newName = prompt("Rename preset to:", preset.name);
            if (newName && newName.trim()) {
              preset.name = newName.trim();
              await saveCustomPhoto(preset);
              await loadSavedPresetsFromDB();
              renderPhotoSizesModalList();
              showToast("Preset renamed", "success");
            }
          };

          const btnDuplicate = document.createElement("button");
          btnDuplicate.className = "btn btn-secondary btn-xs";
          btnDuplicate.textContent = "📋";
          btnDuplicate.title = "Duplicate Preset";
          btnDuplicate.onclick = async () => {
            const clone = { ...preset, id: `cphoto-${Date.now()}`, name: `${preset.name} (Copy)` };
            await saveCustomPhoto(clone);
            await loadSavedPresetsFromDB();
            renderPhotoSizesModalList();
            showToast("Preset duplicated", "success");
          };

          const btnDelete = document.createElement("button");
          btnDelete.className = "btn btn-danger btn-xs";
          btnDelete.textContent = "🗑️";
          btnDelete.title = "Delete Preset";
          btnDelete.onclick = async () => {
            if (confirm(`Delete preset "${preset.name}"?`)) {
              await deleteCustomPhoto(preset.id);
              await loadSavedPresetsFromDB();
              renderPhotoSizesModalList();
              showToast("Preset deleted", "info");
            }
          };

          actions.appendChild(btnUse);
          actions.appendChild(btnRename);
          actions.appendChild(btnDuplicate);
          actions.appendChild(btnDelete);

          item.appendChild(info);
          item.appendChild(actions);
          elements.savedPhotoSizesList.appendChild(item);
        });
      } else {
        elements.savedPhotoSizesSection.classList.add("hidden");
      }
    }

    // Built-in presets list
    sizes.forEach((s) => {
      const item = document.createElement("div");
      item.className = "card card-interactive";
      item.style.padding = "var(--space-2) var(--space-3)";
      item.style.cursor = "pointer";
      item.innerHTML = `
        <div style="font-weight: 600; font-size: 14px;">${s.name}</div>
        <div style="font-size: 12px; color: var(--text-secondary);">${s.country || s.category || ""}</div>
      `;
      item.addEventListener("click", () => {
        state.photoSize = s;
        updateSelectedSizeLabels();
        elements.modalPhotoSize?.classList.add("hidden");
        state.photoTray.forEach((t) => generateCroppedPhotoForItem(t));
        recalculateLayoutAndPreview();
      });
      elements.photoSizesList.appendChild(item);
    });
  }

  // PHASE 3: Render Paper Sizes Modal with Saved Presets
  function renderPaperSizesModalList(papers = filterPaperSizes("All", "")) {
    if (!elements.paperSizesList) return;
    elements.paperSizesList.innerHTML = "";

    // Saved custom papers list
    if (elements.savedPaperSizesSection && elements.savedPaperSizesList) {
      if (state.savedCustomPapers.length > 0) {
        elements.savedPaperSizesSection.classList.remove("hidden");
        elements.savedPaperSizesList.innerHTML = "";

        state.savedCustomPapers.forEach((preset) => {
          const item = document.createElement("div");
          item.className = "saved-preset-item";

          const info = document.createElement("div");
          info.className = "saved-preset-info";
          info.innerHTML = `<strong>${preset.name}</strong><span style="color:var(--text-secondary);">${preset.displayLabel}</span>`;

          const actions = document.createElement("div");
          actions.className = "saved-preset-actions";

          const btnUse = document.createElement("button");
          btnUse.className = "btn btn-primary btn-xs";
          btnUse.textContent = "Use";
          btnUse.onclick = () => {
            state.paperSize = preset;
            updateSelectedSizeLabels();
            elements.modalPaperSize?.classList.add("hidden");
            recalculateLayoutAndPreview();
            showToast(`Selected "${preset.name}"`, "info");
          };

          const btnRename = document.createElement("button");
          btnRename.className = "btn btn-secondary btn-xs";
          btnRename.textContent = "✏️";
          btnRename.title = "Rename Preset";
          btnRename.onclick = async () => {
            const newName = prompt("Rename paper preset to:", preset.name);
            if (newName && newName.trim()) {
              preset.name = newName.trim();
              await saveCustomPaper(preset);
              await loadSavedPresetsFromDB();
              renderPaperSizesModalList();
              showToast("Paper preset renamed", "success");
            }
          };

          const btnDuplicate = document.createElement("button");
          btnDuplicate.className = "btn btn-secondary btn-xs";
          btnDuplicate.textContent = "📋";
          btnDuplicate.title = "Duplicate Preset";
          btnDuplicate.onclick = async () => {
            const clone = { ...preset, id: `cpaper-${Date.now()}`, name: `${preset.name} (Copy)` };
            await saveCustomPaper(clone);
            await loadSavedPresetsFromDB();
            renderPaperSizesModalList();
            showToast("Paper preset duplicated", "success");
          };

          const btnDelete = document.createElement("button");
          btnDelete.className = "btn btn-danger btn-xs";
          btnDelete.textContent = "🗑️";
          btnDelete.title = "Delete Preset";
          btnDelete.onclick = async () => {
            if (confirm(`Delete paper preset "${preset.name}"?`)) {
              await deleteCustomPaper(preset.id);
              await loadSavedPresetsFromDB();
              renderPaperSizesModalList();
              showToast("Paper preset deleted", "info");
            }
          };

          actions.appendChild(btnUse);
          actions.appendChild(btnRename);
          actions.appendChild(btnDuplicate);
          actions.appendChild(btnDelete);

          item.appendChild(info);
          item.appendChild(actions);
          elements.savedPaperSizesList.appendChild(item);
        });
      } else {
        elements.savedPaperSizesSection.classList.add("hidden");
      }
    }

    papers.forEach((p) => {
      const item = document.createElement("div");
      item.className = "card card-interactive";
      item.style.padding = "var(--space-2) var(--space-3)";
      item.style.cursor = "pointer";
      item.innerHTML = `
        <div style="font-weight: 600; font-size: 14px;">${p.name}</div>
        <div style="font-size: 12px; color: var(--text-secondary);">${p.category} ${p.borderless ? "• Borderless" : ""}</div>
      `;
      item.addEventListener("click", () => {
        state.paperSize = p;
        updateSelectedSizeLabels();
        elements.modalPaperSize?.classList.add("hidden");
        recalculateLayoutAndPreview();
      });
      elements.paperSizesList.appendChild(item);
    });
  }

  function applyTheme(theme) {
    if (theme === "dark") {
      document.documentElement.setAttribute("data-theme", "dark");
      if (elements.themeIcon) elements.themeIcon.textContent = "☀️";
    } else if (theme === "light") {
      document.documentElement.setAttribute("data-theme", "light");
      if (elements.themeIcon) elements.themeIcon.textContent = "🌙";
    } else {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      document.documentElement.setAttribute("data-theme", prefersDark ? "dark" : "light");
      if (elements.themeIcon) elements.themeIcon.textContent = prefersDark ? "☀️" : "🌙";
    }
  }
})();
