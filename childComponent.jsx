import { useState } from "react";

// TODO: Define a 'Book' component that accepts 'onBorrow' prop and calls it when the borrow button is clicked
const Book = ({ onBorrow }) => {
  const [book, setBook] = useState("");

  return (
    <>
      <input onChange={(e) => setBook(e.target.value)} value={book} />
      <button onClick={() => onBorrow(book)}>Borrow</button>
    </>
  );
};

const Library = () => {
  const handleBorrow = (book) => {
    alert(`You've borrowed ${book}`);
  };

  return <Book onBorrow={handleBorrow} />;
};

export default Library;
