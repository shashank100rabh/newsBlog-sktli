import { useEffect, useState } from "react";
import "./App.css";
import { api } from "./constant";
import Card from "./Card";

function Home() {
  const [blogs, setBlogs] = useState([]);

  const getBlogData = async () => {
    const data = await fetch(api);
    const jsonFormData = await data.json();

    
    setBlogs(jsonFormData.data);
  };

  useEffect(() => {
    getBlogData();
  }, []);

  return (
    <>
      <div>
        <h1 className="text-3xl font-bold underline">
          News Blog System - The SkyTrail Assignment
        </h1>
      </div>

      <div className="flex flex-wrap gap-5 m-2">
        {blogs.length > 0 &&
          blogs.map((blog, idx) => {
            console.log("blog", blog);
            return <Card key={blog?.source?.id || idx} props={blog} />;
          })}
      </div>
    </>
  );
}

export default Home;
