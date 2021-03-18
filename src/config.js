const configuration = {
  dev: {
    quran_website: "https://quran-frontend-dot-islamicnet.appspot.com/",
    hadith_website: "https://hadith-frontend-dot-islamicnet.appspot.com/",
  },
  prod: {
    quran_website: "https://quran-frontend-dot-islamicnet.appspot.com/",
    hadith_website: "https://hadith-frontend-dot-islamicnet.appspot.com/",
  },
};

let config;

if (!process.env.NODE_ENV || process.env.NODE_ENV === "development") {
  config = configuration.dev;
} else {
  config = configuration.prod;
}

export default config;
