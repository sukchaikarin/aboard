import { Input, Select } from "antd";
import React from "react";
import { FaSearch } from "react-icons/fa";

const SearchBar = () => {
  //const [age, setAge] = React.useState("");
  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };
  return (
    <div className="flex items-center   rounded-md  gap-6">
      {/* Search Input */}
      <div className="flex items-center flex-grow">
        <Input size="large" placeholder="Search" prefix={<FaSearch />} />
      </div>
      <Select
        defaultValue="lucy"
        style={{ width: 120 }}
        onChange={handleChange}
        options={[
          { value: "All", label: "All" },
          { value: "lucy", label: "Lucy" },
          { value: "Yiminghe", label: "yiminghe" },
        ]}
      />
      {/* Dropdown */}

      {/* Create Button */}
      <button className="px-6 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition-all ml-2">
        Create +
      </button>
    </div>
  );
};

export default SearchBar;
