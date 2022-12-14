import React, { useState } from "react";

const Addplant = () => {
  const [plantname, setPlantname] = useState("");
  const [description, setDescription] = useState("");
  const [type, setType] = useState("");
  const [location, setLocation] = useState("");
  const [waterFreq, setWaterfreq] = useState("");
  const [fertiliseFreq, setFertilisefreq] = useState("");
  const [repotFreq, setRepotfreq] = useState("");

  const handlePlantName = (e) => {
    setPlantname(e.target.value);
  };
  const handleDescription = (e) => {
    setDescription(e.target.value);
  };
  const handleType = (e) => {
    setType(e.target.value);
  };
  const handleLocation = (e) => {
    setLocation(e.target.value);
  };
  const handleWater = (e) => {
    setWaterfreq(e.target.value);
  };
  const handleFertiliser = (e) => {
    setFertilisefreq(e.target.value);
  };
  const handleRepot = (e) => {
    setRepotfreq(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      name: plantname,
      description: description,
      type: type,
      location: location,
      water_freq: waterFreq,
      fertilise_freq: fertiliseFreq,
      repot_freq: repotFreq
    };

    const JSONdata = JSON.stringify(data);
    const endpoint = "/api/form";
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSONdata,
    };
    const response = await fetch(endpoint, options);
    const result = await response.json();
    console.log(result);
  };

  return (
    <>
      <h1>Add A New Plant</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div>
          <div>
            <label>Plant name </label>
            <input
              id="plantname"
              name="plantname"
              type="text"
              placeholder="Plant name"
              value={plantname}
              required
            />
          </div>
          <div>
            <label>Plant description </label>
            <input
              id="description"
              name="description"
              type="text"
              placeholder="Description"
              value={description}
            />
          </div>
          <div>
            <label>Plant type </label>
            <input
              id="type"
              name="type"
              type="text"
              placeholder="Type"
              value={type}
            />
          </div>
          <div>
            <label>Location </label>
            <input
              id="location"
              name="location"
              type="text"
              placeholder="Where it grows best"
              value={location}
            />
          </div>
          <div>
            <label>Water Frequency </label>
            <input
              id="waterFreq"
              name="waterFreq"
              type="text"
              placeholder="How often does it need to be watered?"
              value={waterFreq}
            />
          </div>
          <div>
            <label>Fertiliser Frequency </label>
            <input
              id="fertiliseFreq"
              name="fertiliseFreq"
              type="text"
              placeholder="How often does ferilisers need to be added?"
              value={fertiliseFreq}
            />
          </div>
          <div>
            <label>Re-pot Frequency </label>
            <input
              id="repotFreq"
              name="fertilrepotFreqiseFreq"
              type="text"
              placeholder="How often does it need to be repotted?"
              value={repotFreq}
            />
          </div>
          <button>Submit</button>
        </div>
      </form>
    </>
  );
};

export default Addplant;
