import React, { useState, useEffect, useRef } from "react";
import "./DragAndDrop.scss";

const DragAndDrop = ({ handleDrop, children }) => {
  const [drag, setDrag] = useState(false);

  const dropRef = useRef(null);
  const dragCounter = useRef(0);
  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };
  useEffect(() => {
    if (dropRef.current) {
      const div = dropRef.current;
      div.addEventListener("dragenter", handleDragIn);
      div.addEventListener("dragleave", handleDragOut);
      div.addEventListener("dragover", handleDrag);
      div.addEventListener("drop", handleDropInner);
      return () => {
        div.removeEventListener("dragenter", handleDragIn);
        div.removeEventListener("dragleave", handleDragOut);
        div.removeEventListener("dragover", handleDrag);
        div.removeEventListener("drop", handleDropInner);
      };
    }
  }, [dropRef.current]);

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
        <div className={"style-cointaner-upload"}>
          <div className="style-title-upload">
            <div>Cargar Imagen</div>
          </div>
        </div>
      )}
      <div className="container-DragAndDrop">{children}</div>
    </div>
  );
};

export default DragAndDrop;
