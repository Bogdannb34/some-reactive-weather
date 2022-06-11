import React from "react";
import { ReactSearchAutocomplete } from "react-search-autocomplete";
import { useHistory } from "react-router-dom";

const Search = () => {
  const nextRoute = useHistory();
  const items = [
    {
      id: 0,
      name: "Paris",
      country: "fr",
    },
    {
      id: 1,
      name: "Guangzhou",
      country: "guangdong",
    },
    {
      id: 2,
      name: "Toronto",
      country: "on",
    },
    {
      id: 5,
      name: "Mykonos",
      country: "gr",
    },
    {
      id: 6,
      name: "Milan",
      country: "it",
    },
    {
      id: 7,
      name: "Madrid",
      country: "es",
    },
    {
      id: 8,
      name: "Stockholm",
      country: "se",
    },
  ];

  const handleOnSelect = (element) => {
    nextRoute.push(`/city/${element.name},${element.country}`);
  };

  return (
    <div style={{ width: 400 }}>
      <ReactSearchAutocomplete items={items} onSelect={handleOnSelect} />
    </div>
  );
};

export default Search;
