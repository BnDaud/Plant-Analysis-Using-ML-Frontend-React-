import React, { useEffect, useState } from "react";

export default function Fetchdata() {
  const [Data, setData] = useState();

  useEffect(() => {
    fetch("http://localhost:8000/api_root/inputdata/")
      .then((response) => response.json())
      .then((data) => console.log(data));
  }, []);
  return <></>;
}
