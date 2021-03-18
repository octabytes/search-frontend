import React from "react";
import { useSelector } from "react-redux";
import Books from "views/HadithCollection/Books";
import Hadith from "views/HadithCollection/Hadith";
import Quran from "views/Quran";
import Surahs from "views/Quran/Surahs";

const Home = () => {
  const search = useSelector((state) => state.app.search);
  const loading = useSelector((state) => state.app.loading);

  if (search === undefined) {
    return <h1>Type to search...</h1>;
  }

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (search.type === "single_ayah") {
    return <Quran data={search.data} />;
  }

  if (search.type === "multi_ayah") {
    return <Quran data={search.data} />;
  }

  if (search.type === "surah_list") {
    return <Surahs names={search.data} />;
  }

  if (search.type === "single_hadith") {
    return <Hadith hadith={search.data} />;
  }

  if (search.type === "hadith_books") {
    return <Books collection={search.nlp.collection} bookList={search.data} />;
  }

  return <h1>Default Home</h1>;
};

export default Home;
