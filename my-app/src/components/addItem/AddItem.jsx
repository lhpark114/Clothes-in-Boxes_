import React, { useRef } from "react";

export default function AddItem({ setData }) {
  const customerRef = useRef();
  const imageRef = useRef();
  const styleRef = useRef();
  const designRef = useRef();
  const descRef = useRef();
  const sampleRef = useRef();
  const qttRef = useRef();
  const cmtsRef = useRef();

  function handleValues(event) {
    event.preventDefault();
    const customer = event.target.elements.customer.value;
    const image = event.target.elements.image.value;
    const style = event.target.elements.style.value;
    const design = event.target.elements.design.value;
    const desc = event.target.elements.description.value;
    const sample = event.target.elements.sample.value;
    const qtt = event.target.elements.qtt.value;
    const cmts = event.target.elements.comments.value;
    const newItem = {
      id: 5,
      customer,
      image,
      style,
      design,
      desc,
      sample,
      qtt,
      cmts,
    };
    setData((preData) => preData.concat(newItem));
    customerRef.current.value = "";
    imageRef.current.value = "";
    styleRef.current.value = "";
    designRef.current.value = "";
    descRef.current.value = "";
    sampleRef.current.value = "";
    qttRef.current.value = "";
    cmtsRef.current.value = "";
  }

  return (
    <form className="addForm" onSubmit={handleValues}>
      <input
        type="text"
        name="customer"
        placeholder="Customer"
        ref={customerRef}
      />
      <input type="text" name="image" placeholder="CAD" ref={imageRef} />
      <input type="text" name="style" placeholder="Style#" ref={styleRef} />
      <input type="text" name="design" placeholder="Design#" ref={designRef} />
      <input type="text" name="description" placeholder="Description" ref={descRef} />
      <input type="text" name="sample" placeholder="Sample" ref={sampleRef} />
      <input type="text" name="qtt" placeholder="Qtt" ref={qttRef} />
      <input type="text" name="comments" placeholder="Comments" ref={cmtsRef} />
      <button>Add</button>
    </form>
  );
}
