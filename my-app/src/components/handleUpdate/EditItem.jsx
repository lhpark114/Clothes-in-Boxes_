import React from "react";

export default function EditItem({ current, data, setData }) {
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
            value={current.description}
            name="description"
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
            value={current.comments}
            name="comments"
            placeholder="Comments"
          />
        </td>
        <td>
          <button type="submit">Update</button>
        </td>
      </tr>
    );
  }