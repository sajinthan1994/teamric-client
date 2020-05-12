import React, { useEffect, useState } from "react";

import SearchBar from "./SearchBar";
import Results from "./Results";

import "./styles/search.css";

const data = {
  employees: [
    { id: 1, name: "Sylvia Palmer", avatar: "https://i.imgur.com/LpaY82x.png" },
    { id: 2, name: "Tori Malcolm", avatar: "https://i.imgur.com/Nmx0Qxo.png" },
    { id: 3, name: "Mildred Nazir", avatar: "https://i.imgur.com/T2WwVfS.png" },
    { id: 4, name: "Cohana Roy", avatar: "https://i.imgur.com/FK8V841.jpg" },
    { id: 5, name: "Sven Jones", avatar: "https://i.imgur.com/twYrpay.jpg" },
    { id: 6, name: "Dave Smith", avatar: "https://i.imgur.com/LpaY82x.png" },
    { id: 7, name: "Jack Doherty", avatar: "https://i.imgur.com/Nmx0Qxo.png" },
    { id: 8, name: "Shannon Baker", avatar: "https://i.imgur.com/T2WwVfS.png" },
    { id: 9, name: "Thomas Mike", avatar: "https://i.imgur.com/FK8V841.jpg" },
    { id: 10, name: "Peter Pan", avatar: "https://i.imgur.com/twYrpay.jpg" },
  ],
};

const getEmployeePage = (id) => {
  // This is where the axios request will go to get the employees feedback summary page
  console.log("hello", id);
};

const Search = (props) => {
  const [term, setTerm] = useState("");
  const [results, setResults] = useState(data.employees);
  const [searchResults, setSearchResults] = useState(data.employees);

  useEffect(() => {
    const liveResults = results.filter(
      (result) => result.name.toLowerCase().includes(term) && result
    );
    setSearchResults(liveResults);
  }, [term, results]);

  return (
    <main className="container">
      <SearchBar onSearch={(term) => setTerm(term)} term={term} />
      <div className="results_container">
        <Results results={searchResults} onClick={getEmployeePage} />
      </div>
    </main>
  );
};

export default Search;
