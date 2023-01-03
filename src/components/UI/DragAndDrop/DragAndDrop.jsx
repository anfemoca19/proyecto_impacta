import React, { useState, useEffect, useRef } from "react";
const DragAndDrop = ({ handleDrop, children }) => {
  const [drag, setDrag] = useState(false);

  const dropRef = useRef(null);
  const dragCounter = useRef(0);
  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };
  useEffect(() => {
    let div = dropRef.current;
    div.addEventListener("dragenter", handleDragIn);
    div.addEventListener("dragleave", handleDragOut);
    div.addEventListener("dragover", handleDrag);
    div.addEventListener("drop", handleDropInner);
    return () => {
      let div = dropRef.current;
      div.removeEventListener("dragenter", handleDragIn);
      div.removeEventListener("dragleave", handleDragOut);
      div.removeEventListener("dragover", handleDrag);
      div.removeEventListener("drop", handleDropInner);
    };
  }, []);

  const handleDragIn = (e) => {
    e.preventDefault();
    e.stopPropagation();
    dragCounter.current++;
    if (e.dataTransfer.items && e.dataTransfer.items.length > 0) {
      setDrag(true);
    }
  };
  const handleDragOut = (e) => {
    e.preventDefault();
    e.stopPropagation();
    dragCounter.current--;
    if (dragCounter.current === 0) {
      setDrag(false);
    }
  };
  const handleDropInner = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDrag(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      handleDrop(e.dataTransfer.files);
      e.dataTransfer.clearData();
      dragCounter.current = 0;
    }
  };

  return (
    <div ref={dropRef}>
      {drag && (
        <div
          style={{
            border: "dashed grey 4px",
            backgroundColor: "rgba(255,255,255,.8)",
            position: "absolute",
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            zIndex: 9999,
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "25%",
              right: 0,
              left: 0,
              textAlign: "center",
              color: "grey",
              fontSize: 36,
            }}
          >
            <div>Upload Here</div>
          </div>
        </div>
      )}
      <div style={{ height: 100, width: 250 }}>{children}</div>
    </div>
  );
};

export default DragAndDrop;
