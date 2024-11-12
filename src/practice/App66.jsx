import React, { useState } from "react";
import {
  NumberInputField,
  NumberInputRoot,
} from "../components/ui/number-input.jsx";
import { Field } from "../components/ui/field.jsx";
import { Button } from "../components/ui/button.jsx";
import axios from "axios";
import { Box, Input } from "@chakra-ui/react";

function App66(props) {
  const [supplierId, setSupplierId] = useState(0);
  const [supplier, setSupplier] = useState(null);

  const handleButtonClick = () => {
    axios
      .get(`/api/main6/sub2/${supplierId}`)
      .then((res) => setSupplier(res.data));
  };

  return (
    <div>
      <Field label={"고객번호"}>
        <NumberInputRoot
          value={supplierId}
          onValueChange={(e) => setSupplierId(e.value)}
        >
          <NumberInputField />
        </NumberInputRoot>
      </Field>
      <Button onClick={handleButtonClick}>조회</Button>
      <hr />
      <SupplierView supplier={supplier} />
    </div>
  );
}

function SupplierView({ supplier }) {
  if (!supplier) {
    return (
      <Box>
        <p>조회된 공급자가 없습니다</p>
      </Box>
    );
  }

  return (
    <Box>
      <Field label={"ID"} readOnly>
        <Input value={supplier.id} />
      </Field>
      <Field label={"이름"} readOnly>
        <Input value={supplier.name} />
      </Field>
      <Field label={"계약명"} readOnly>
        <Input value={supplier.contact} />
      </Field>
      <Field label={"주소"} readOnly>
        <Input value={supplier.address} />
      </Field>
      <Field label={"도시"} readOnly>
        <Input value={supplier.city} />
      </Field>
      <Field label={"우편번호"} readOnly>
        <Input value={supplier.postalCode} />
      </Field>
      <Field label={"연락처"} readOnly>
        <Input value={supplier.country} />
      </Field>
      <Field label={"연락처"} readOnly>
        <Input value={supplier.phone} />
      </Field>
    </Box>
  );
}

export default App66;
