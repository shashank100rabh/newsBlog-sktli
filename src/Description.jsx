import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { sourceApi} from "./constant";
const Description = () => {
  const { id } = useParams();
  const [desc, setDesc] = useState("");

  const getDescriptionDetails = async () => {
    try {
      const data = await fetch(sourceApi.replace("{ID}", id));
      const jsonFormData = await data.json(data);

      setDesc(jsonFormData.data);
    } catch (error) {
      console.log("error", error.message);
    }
  };

  useEffect(() => {
    getDescriptionDetails();
  }, []);

  return (
    <>
      <div>
        {desc &&
          desc.map((des, idx) => (
            <div
              className="card card-side bg-base-300 shadow-xl my-3"
              key={idx}
            >
              <div className="card-body py-2">
                <div className="flex">
                  <div
                    className={`badge ${
                      des?.category === "not-found"
                        ? "badge-secondary"
                        : "badge-primary"
                      }`}
                      >
                        {des?.category}
                      </div>
                      <h2 className="card-title text-red-400">{des?.title}</h2>
                    </div>
    
                    <p>{des?.description}</p>
                  </div>
                </div>
              ))}
          </div>
        </>
      );
    };
    
    export default Description;