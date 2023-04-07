import React, { useState } from "react";
import Data from "../../data/data.json";

export default function ItemList() {
  const [data, setData] = useState(Data);
  return (
    <section>
      <div className="item-container">
        <table>
          <thead>
            <th>ID</th>
            <th>CUSTOMER</th>
            <th>IMAGE</th>
            <th>STYLE#</th>
            <th>DESIGN#</th>
            <th>DESCRIPTION</th>
            <th>SAMPLE</th>
            <th>IMAGE</th>
            <th>QTT</th>
            <th>COMMENTS</th>
          </thead>
          {data.map((current) => (
            <tr>
              <td>{current.id}</td>
              <td>{current.customer}</td>
              <td>{current.image}</td>
              <td>{current.style}</td>
              <td>{current.design}</td>
              <td>{current.description}</td>
              <td>{current.sample}</td>
              <td>{current.qtt}</td>
              <td>{current.comments}</td>
              <td></td>
              <td>
                <button>Edit</button>
                <button>Delete</button>
              </td>
            </tr>
          ))}
        </table>
      </div>
      <AddItem setData={setData} />
    </section>
  );
}

function AddItem({ setData }) {
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
    };
    setData((preData) => preData.concat(newItem));
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
