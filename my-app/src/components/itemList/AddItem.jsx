import React from "react";

export default function AddItem({ setData }) {
  function handleValues(event) {
    event.preventDefault();
    const customer = event.target.elements.Customer.value;
    const image = event.target.elements.Image.value;
    const style = event.target.elements.Style.value;
    const design = event.target.elements.Design.value;
    const desc = event.target.elements.Desc.value;
    const sample = event.target.elements.Sample.value;
    const qtt = event.target.elements.Qtt.value;
    const cmts = event.target.elements.Cmts.value;
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
    }
    setData(preData => preData.concat(newItem));
  }

  return (
    <form className="addForm" onSubmit={handleValues}>
      <input type="text" name="Customer" placeholder="Customer" />
      <input type="text" name="Image" placeholder="CAD" />
      <input type="text" name="Style" placeholder="Style#" />
      <input type="text" name="Design" placeholder="Design#" />
      <input type="text" name="Desc" placeholder="Description" />
      <input type="text" name="Sample" placeholder="Sample" />
      <input type="text" name="Qtt" placeholder="Qtt" />
      <input type="text" name="Cmts" placeholder="Comments" />
      <button>Add</button>
    </form>
  );
}
