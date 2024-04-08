import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Scan({ data }) {
  const navigate = useNavigate();

  const handleNavigate = (id) => {
    navigate(`/${id}`);
  };

  useEffect(() => {
    console.log(data);
  });
  return (
    <>
      {data &&
        data.map((scan) => {
          return (
            <div
              key={scan.id}
              className="card"
              onClick={() => handleNavigate(scan.id)}
            >
              <div className="bg"></div>

              <p className="scan-name">{scan.name}</p>
              <p style={{ color: `${scan.color}` }} className="scan-tag">
                {scan.tag}
              </p>
            </div>
          );
        })}
    </>
  );
}

export default Scan;
