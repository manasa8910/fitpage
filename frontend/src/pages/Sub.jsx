import React from "react";
import { useParams } from "react-router-dom";

function Sub({ data }) {
  let { id } = useParams();

  // Filter the data based on the id
  const selectedItem = data.find((item) => item.id === parseInt(id));

  return (
    <>
      {selectedItem ? (
        <div className="sub-card">
          <div className="scan-name">{selectedItem.name}</div>
          <div style={{ color: `${selectedItem.color}` }} className="scan-tag">
            {selectedItem.tag}
          </div>
          {selectedItem.criteria && selectedItem.criteria.length > 0 && (
            <div>
              <div>
                {selectedItem.criteria.map((criterion, index) => (
                  <div key={index}>{criterion.text}</div>
                ))}
              </div>
            </div>
          )}
        </div>
      ) : (
        <div>Item not found</div>
      )}
    </>
  );
}

export default Sub;
