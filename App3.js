import React, { useState, useEffect } from "react"; 
 
function App() { 
  const [books, setBooks] = useState([]); 
  const [form, setForm] = useState({ title: "", author: "", price: "" }); 
  const [editId, setEditId] = useState(null); 
  const [showDetails, setShowDetails] = useState(false); 
 
  useEffect(() => { 
    setBooks(JSON.parse(localStorage.getItem("books")) || []); 
  }, []); 
 
  useEffect(() => { 
    localStorage.setItem("books", JSON.stringify(books)); 
  }, [books]); 
 
  const handleAddOrEdit = () => { 
    if (!form.title || !form.author || !form.price) return; 
    if (editId) { 
      setBooks(books.map(b => (b.id === editId ? { ...b, ...form } : b))); 
      setEditId(null); 
    } else setBooks([...books, { id: Date.now(), ...form }]); 
    setForm({ title: "", author: "", price: "" }); 
  }; 
 
  return ( 
    <div style={{ padding: "20px", fontFamily: "Arial" }}> 
      <h1>Book Cart</h1> 
      <input placeholder="Title" value={form.title} onChange={e => setForm({ 
...form, title: e.target.value })} /> 
      <input placeholder="Author" value={form.author} onChange={e => setForm({ 
...form, author: e.target.value })} /> 
      <input placeholder="Price" type="number" value={form.price} onChange={e 
=> setForm({ ...form, price: e.target.value })} /> 
      <button onClick={handleAddOrEdit}>{editId ? "Update" : "Add"}</button> 
 
      {books.length > 0 && ( 
        <div> 
          <button onClick={() => setShowDetails(!showDetails)} style={{ 
marginTop: "10px" }}> 
            {showDetails ? "Hide Details" : "View Details"} 
          </button> 
          {showDetails && ( 
            <table border="1" cellPadding="10" style={{ marginTop: "10px" }}> 
              <thead> 
                <tr> 
                  <th>Title</th><th>Author</th><th>Price</th><th>Actions</th> 
                </tr> 
              </thead> 
              <tbody> 
                {books.map(b => ( 
                  <tr key={b.id}> 
                    <td>{b.title}</td><td>{b.author}</td><td>{b.price}</td> 
                    <td> 
                      <button onClick={() => { setForm({ title: b.title, 
author: b.author, price: b.price }); setEditId(b.id); }}>Edit</button> 
                      <button onClick={() => setBooks(books.filter(book => 
book.id !== b.id))}>Delete</button> 
                    </td> 
                  </tr> 
                ))} 
              </tbody> 
            </table> 
          )} 
        </div> 
      )} 
    </div> 
  ); 
} 
 
export default App;
