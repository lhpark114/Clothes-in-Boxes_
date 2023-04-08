import React, { useState } from "react";
import AddItem from "../addItem/AddItem";
import EditItem from "../handleUpdate/EditItem";
import Data from "../../data/data.json";

export default function ItemList() {
  const [data, setData] = useState(Data);
  const [editState, setEditState] = useState(-1);
  return (
    <div className="item-container">
      <div>
        
        <form onSubmit={handleUpdate}>
          <table>
            <thead>
              <th>ID</th>
              <th>CUSTOMER</th>
              <th>IMAGE</th>
              <th>STYLE#</th>
              <th>DESIGN#</th>
              <th>DESCRIPTION</th>
              <th>SAMPLE</th>
              <th>QTT</th>
              <th>COMMENTS</th>
            </thead>
            {data.map((current) =>
              editState === current.id ? (
                <EditItem current={current} data={data} setData={setData} />
              ) : (
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
                  <td>
                    <button
                      type="button"
                      className="edit"
                      onClick={() => handleEdit(current.id)}
                    >
                      Edit
                    </button>
                    <button
                      type="button"
                      className="delete"
                      onClick={() => handleDelete(current.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              )
            )}
          </table>
        </form>
      </div>
      <AddItem setData={setData} />
    </div>
  );
  function handleUpdate(event) {
    event.preventDefault();
    const customer = event.target.elements.customer.value;
    const image = event.target.elements.image.value;
    const style = event.target.elements.style.value;
    const design = event.target.elements.design.value;
    const desc = event.target.elements.description.value;
    const sample = event.target.elements.sample.value;
    const qtt = event.target.elements.qtt.value;
    const cmts = event.target.elements.cmts.value;
    const updatedData = data.map((d) =>
      d.id === editState
        ? {
            ...d,
            customer: customer,
            image: image,
            style: style,
            design: design,
            desc: desc,
            sample: sample,
            qtt: qtt,
            cmts: cmts,
          }
        : d
    );

    setEditState(-1);
    setData(updatedData);
  }

  function handleEdit(id) {
    setEditState(id);
  }

  function handleDelete(id) {
    const updatedData = data.filter((d) => id !== d.id);
    setData(updatedData);
  }
}

