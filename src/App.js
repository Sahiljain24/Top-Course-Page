import React, { useEffect, useState } from "react";
import Cards from "./components/Cards";
import Navbar from "./components/Navbar";
import Filter from "./components/Filter"
import {toast} from  "react-toastify";
import { apiUrl,filterData } from "./data";
const App = () => {


  const [courses,setCourse] =useState(null);
  useEffect(()=>{
    const fetchData =async()=>{
      try{
         const res = await fetch(apiUrl);
         const output =await res.json();
         setCourse(output.data);
      }
      catch(err){
            toast.err("something went wrong");
      }
      
    }
    fetchData();
  },[]);

 
  return <div>
    <h1>hello</h1>
    <Navbar/>
    <Filter filterData={filterData}/>
    <Cards courses={courses}/>
  </div>;
};

export default App;
