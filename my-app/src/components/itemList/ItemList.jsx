import React, { useState } from "react";
import AddItem from "../addItem/AddItem";
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
              <th>IMAGE</th>
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
                  <td>{current.desc}</td>
                  <td>{current.sample}</td>
                  <td>{current.qtt}</td>
                  <td>{current.cmts}</td>
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
    const desc = event.target.elements.desc.value;
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

function EditItem({ current, data, setData }) {
  function handleCustomer(event) {
    const customer = event.target.value;
    const updatedData = data.map((d) =>
      d.id === current.id ? { ...d, customer: customer } : d
    );
    setData(updatedData);
  }

  function handleImage(event) {
    const image = event.target.value;
    const updatedData = data.map((d) =>
      d.id === current.id ? { ...d, image: image } : d
    );
    setData(updatedData);
  }
  function handleStyle(event) {
    const style = event.target.value;
    const updatedData = data.map((d) =>
      d.id === current.id ? { ...d, style: style } : d
    );
    setData(updatedData);
  }

  function handleDesign(event) {
    const design = event.target.value;
    const updatedData = data.map((d) =>
      d.id === current.id ? { ...d, design: design } : d
    );
    setData(updatedData);
  }
  function handleDesc(event) {
    const desc = event.target.value;
    const updatedData = data.map((d) =>
      d.id === current.id ? { ...d, desc: desc } : d
    );
    setData(updatedData);
  }

  function handleSample(event) {
    const sample = event.target.value;
    const updatedData = data.map((d) =>
      d.id === current.id ? { ...d, sample: sample } : d
    );
    setData(updatedData);
  }
  function handleQtt(event) {
    const qtt = event.target.value;
    const updatedData = data.map((d) =>
      d.id === current.id ? { ...d, qtt: qtt } : d
    );
    setData(updatedData);
  }

  function handleCmts(event) {
    const cmts = event.target.value;
    const updatedData = data.map((d) =>
      d.id === current.id ? { ...d, cmts: cmts } : d
    );
    setData(updatedData);
  }
  return (
    <tr>
      <td>
        <input
          type="text"
          onChange={handleCustomer}
          value={current.customer}
          name="customer"
          placeholder="Customer"
        />
      </td>
      <td>
        <input
          type="text"
          onChange={handleImage}
          value={current.image}
          name="image"
          placeholder="CAD"
        />
      </td>
      <td>
        <input
          type="text"
          onChange={handleStyle}
          value={current.style}
          name="style"
          placeholder="Style#"
        />
      </td>
      <td>
        <input
          type="text"
          onChange={handleDesign}
          value={current.design}
          name="design"
          placeholder="Design#"
        />
      </td>
      <td>
        <input
          type="text"
          onChange={handleDesc}
          value={current.desc}
          name="desc"
          placeholder="Description"
        />
      </td>
      <td>
        <input
          type="text"
          onChange={handleSample}
          value={current.sample}
          name="sample"
          placeholder="Sample"
        />
      </td>
      <td>
        <input
          type="text"
          onChange={handleQtt}
          value={current.qtt}
          name="qtt"
          placeholder="Qtt"
        />
      </td>
      <td>
        <input
          type="text"
          onChange={handleCmts}
          value={current.cmts}
          name="cmts"
          placeholder="Comments"
        />
      </td>
      <td>
        <button type="submit">Update</button>
      </td>
    </tr>
  );
}
