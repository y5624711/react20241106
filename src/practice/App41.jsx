import React, { useState } from "react";
import { Field } from "../components/ui/field.jsx";
import { Input, Textarea } from "@chakra-ui/react";

function App41(props) {
  const [book, setBook] = useState({ title: "", content: "" });

  const handleInputTitle = (e) => {
    const newBook = { ...book };
    newBook.title = e.target.value;
    setBook(newBook);
  };

  const handleInputContent = (e) => {
    const newBook = { ...book };
    newBook.content = e.target.value;
    setBook(newBook);
  };

  return (
    <div>
      <Field label={"제목"}>
        <Input onKeyUp={handleInputTitle} />
      </Field>
      <Field label={"본문"}>
        <Textarea onKeyUp={handleInputContent} />
      </Field>
      <hr />

      <Field label={"제목"} readOnly>
        <Input value={book.title} />
      </Field>
      <Field label={"본문"} readOnly>
        <Textarea value={book.content} />
      </Field>
    </div>
  );
}

export default App41;
