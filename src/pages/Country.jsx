import { useEffect, useTransition } from "react";
import { getCountryData } from "../api/postApi";
import { useState } from "react";
import { Loader } from "../components/UI/Loader";
import { CountryCard } from "../components/Layout/CountryCard";
import { SearchFilter } from "../components/UI/SearchFilter";

export const Country = () => {
  const [isPending, startTransition] = useTransition();
  const [countryData, setCountryData] = useState([]);

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");
  useEffect(() => {
    startTransition(async () => {
      try {
        const res = await getCountryData();
        console.log(res.data);
        setCountryData(res.data);
      } catch (error) {
        console.log(error.message);
      }
    });
  }, []);
  if (isPending) return <Loader></Loader>;
  //search and filter logic main logic universal
  console.log(search, filter);

  const searchCountry = (country) => {
    if (search) {
      return country.name.common.toLowerCase().includes(search.toLowerCase());
    }
    return country;
  };
const filterRegion =(country)=>{
   if(filter==="all") return country;
   return country.region == filter;
}
  const filterCountries = countryData.filter((country) =>
    searchCountry(country)  && filterRegion(country)
  );

  return (
    <section className="country-section">
      <SearchFilter
        search={search}
        setSearch={setSearch}
        filter={filter}
        setFilter={setFilter}
        countryData={countryData}
        setCountryData={setCountryData}
      ></SearchFilter>
      <ul className="grid grid-four-cols">
        {filterCountries.map((currCountry, index) => {
          return <CountryCard key={index} country={currCountry}></CountryCard>;
        })}
      </ul>
    </section>
  );
};

// const [countryData, setCountryData] = useState([]);
// const getCountries = async () => {
//   try {
//     const res = await getCountryData();
//     console.log(res.data);
//     setCountryData(res.data);
//   } catch (error) {
//     console.log(error.message);
//   }
// };

// useEffect(() => {
//   getCountries();
// }, []);
