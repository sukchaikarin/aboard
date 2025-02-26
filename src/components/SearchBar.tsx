import { Input, Select } from "antd";
import React, { useEffect, useState } from "react";
import { FaCheck, FaSearch } from "react-icons/fa";

const selectOptions = [
  { value: "all", label: "All" },
  { value: "history", label: "History" },
  { value: "food", label: "Food" },
  { value: "pets", label: "Pets" },
  { value: "health", label: "Health" }, // เพิ่มตัวเลือกใหม่
  { value: "fashion", label: "Fashion" }, // เพิ่มตัวเลือกใหม่
  { value: "excercise", label: "Excercise" }, // เพิ่มตัวเลือกใหม่
  { value: "others", label: "Others" }, // เพิ่มตัวเลือกใหม่
];

const SearchBar = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };
  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 520); // กำหนดว่าหน้าจอเล็กคือ < 520px
    };

    handleResize(); // เรียกครั้งแรกเพื่อตรวจสอบหน้าจอ
    window.addEventListener("resize", handleResize); // ตรวจสอบเมื่อหน้าจอเปลี่ยนขนาด

    return () => window.removeEventListener("resize", handleResize); // Cleanup
  }, []);

  return (
    <>
      <div className="flex items-center justify-center rounded-md  gap-6 ">
        {isSmallScreen && (
          <button
            className="p-2 rounded-full bg-gray-200 hover:bg-gray-300"
            onClick={() => setIsSmallScreen(false)}
          >
            <FaSearch className="text-xl text-gray-600" />
          </button>
        )}

        <FaSearch className="text-xl text-gray-600 sm:hidden" />
        <div className="flex items-center flex-grow">
          <Input
            size="large"
            placeholder="Search"
            prefix={<FaSearch className="cursor-pointer" />}
            className="transition-all duration-300"
          />
        </div>

        <Select
          menuItemSelectedIcon={<FaCheck />}
          defaultValue="all"
          variant="borderless"
          className="min-w-[105px] sm:w-[128px] "
          style={{ width: 120 }}
          onChange={handleChange}
          options={selectOptions}
        />
        <button className="min-w-[105px]  p-2 bg-success text-white rounded-md hover:bg-green-600 transition-all ">
          Create +
        </button>
      </div>
    </>
  );
};

export default SearchBar;
