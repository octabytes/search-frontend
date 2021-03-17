import React from "react";
import { useSelector } from "react-redux";
import Book from "views/HadithCollection/Book";
import Hadith from "views/HadithCollection/Hadith";
import Quran from "views/Quran";
import Surahs from "views/Quran/Surahs";

const Home = () => {
  const search = useSelector((state) => state.app.search);

  if (search === undefined) {
    return <h1>Type to search...</h1>;
  }

  if (search.type === "single_ayah") {
    return <Quran ayahList={[search.data]} />;
  }

  if (search.type === "multi_ayah") {
    return <Quran ayahList={search.data.ayahs} />;
  }

  if (search.type === "surah_list") {
    return <Surahs names={search.data} />;
  }

  if (search.type === "single_hadith") {
    return <Hadith hadithList={search.data} />;
  }

  if (search.type === "hadith_books") {
    return <Book bookList={search.data} />;
  }

  return <h1>Default Home</h1>;
};

export default Home;
