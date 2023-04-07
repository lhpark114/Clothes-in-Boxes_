import React, { useRef, useState } from "react";
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
  const customerRef = useRef()
  const imageRef = useRef()
  const styleRef = useRef()
  const designRef = useRef()
  const descRef = useRef()
  const sampleRef = useRef()
  const qttRef = useRef()
  const cmtsRef = useRef()


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
    setData((preData) => preData.concat(newItem))
    customerRef.current.value = ""
    imageRef.current.value = ""
    styleRef.current.value = ""
    designRef.current.value = ""
    descRef.current.value = ""
    sampleRef.current.value = ""
    qttRef.current.value = ""
    cmtsRef.current.value = ""
  }

  return (
    <form className="addForm" onSubmit={handleValues}>
      <input type="text" name="Customer" placeholder="Customer" ref={customerRef}/>
      <input type="text" name="Image" placeholder="CAD" ref={imageRef}/>
      <input type="text" name="Style" placeholder="Style#" ref={styleRef}/>
      <input type="text" name="Design" placeholder="Design#" ref={designRef}/>
      <input type="text" name="Desc" placeholder="Description" ref={descRef}/>
      <input type="text" name="Sample" placeholder="Sample" ref={sampleRef}/>
      <input type="text" name="Qtt" placeholder="Qtt" ref={qttRef}/>
      <input type="text" name="Cmts" placeholder="Comments" ref={cmtsRef}/>
      <button>Add</button>
    </form>
  );
}
