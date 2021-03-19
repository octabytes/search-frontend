import React from "react";
import { useSelector } from "react-redux";
import Typography from "@material-ui/core/Typography";
import Books from "views/HadithCollection/Books";
import Hadith from "views/HadithCollection/Hadith";
import Quran from "views/Quran";
import Surahs from "views/Quran/Surahs";

const Home = () => {
  const search = useSelector((state) => state.app.search);
  const loading = useSelector((state) => state.app.loading);

  if (loading) {
    return <Typography variant="h1">Loading...</Typography>;
  }

  if (search === undefined) {
    return (
      <div>
        <Typography variant="h2">Type to search...</Typography>
        <Typography variant="h4" color="textSecondary">
          Currently Support Query Types:
        </Typography>
        <Typography>
          <ul>
            <li>Get Single Ayah: E.g Quran surah 2 ayah 1</li>
            <li>Get Multi Ayah</li>
            <li>Get Ayah within Rage</li>
            <li>Get Surah</li>
            <li>Get All Quran Surahs</li>
            <li>Get Hadith Number</li>
            <li>Get Hadith Books</li>
            <li>
              Supported Hadith Books:
              <ol>
                <li>Sahih al-Bukhari</li>
                <li>Sahih Muslim</li>
                <li>Jami at-Tirmidhi</li>
                <li>Sunan an-Nasai</li>
                <li>Sunan Abi Dawud</li>
                <li>Sunan Ibn Majah</li>
              </ol>
            </li>
          </ul>
          {/* <ul>
            <li>
              Get Single Ayah: E.g Quran surah 2 ayah 1 OR Quran surah Al-Fatiha
              ayah 3
            </li>
            <li>
              Get Multi Ayah: E.g Quran surah 2 first 5 ayahs OR Quran surah 2
              last 3 ayahs
            </li>
            <li>Get Ayah within Rage: E.g Quran surah 2 ayah from 1 to 7</li>
            <li>Get Surah: E.g Quran surah Al-Baqarah</li>
            <li>Get All Quran Surahs: E.g Quran surahs</li>
            <li>Get Hadith Number: E.g Sahih Bukhari Hadith number 1</li>
            <li>Get Hadith Books: E.g Sahih Bukhari books</li>
            <li>
              Supported Hadith Books:
              <ol>
                <li>Sahih al-Bukhari</li>
                <li>Sahih Muslim</li>
                <li>Jami at-Tirmidhi</li>
                <li>Sunan an-Nasai</li>
                <li>Sunan Abi Dawud</li>
                <li>Sunan Ibn Majah</li>
              </ol>
            </li>
          </ul> */}
        </Typography>
        <Typography variant="h5">
          Note: Currently keyword search is not supported.
        </Typography>
        <Typography>
          Try some searches if you find any error or not relevant results.
          <a
            target="_blank"
            href="https://docs.google.com/forms/d/e/1FAIpQLSeMYVMsrgcy86wtczVGcR9FE9nbCNxzeA3HtcxPIZEL30wTfw/viewform?usp=sf_link"
          >
            Report Issue
          </a>
          , So we can make this search better.
        </Typography>
      </div>
    );
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

  return <h1>Unable to understand query, type something else</h1>;
};

export default Home;
