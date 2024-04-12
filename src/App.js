import React, { useEffect, useState } from "react";
import Cards from "./components/Cards";
import Navbar from "./components/Navbar";
import Filter from "./components/Filter"
import {toast} from  "react-toastify";
import { apiUrl,filterData } from "./data";
import Spinner from "./components/Spinner";
const App = () => {


  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(apiUrl);
        const output = await res.json();
        setCourses(output.data);
      } catch (err) {
        toast.error("Something went wrong");
        setCourses(null);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

 
  return <div className="flex flex-col min-h-screen">
     <div>  <Navbar/></div>
     <div><Filter filterData={filterData}/></div>
     <div className="w-11/12 max-w-max[1200px] mx-auto flex justify-center items-center min-h-[50vh]">  {loading ? (
        <Spinner/>
      ) : (
        <Cards courses={courses} />
      )}</div>
  </div>;
};

export default App;
