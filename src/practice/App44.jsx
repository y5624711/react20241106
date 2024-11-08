import React from "react";
import { useImmer } from "use-immer";
import { Field } from "../components/ui/field.jsx";
import { Input } from "@chakra-ui/react";
import { Button } from "../components/ui/button.jsx";

const originInfo = { name: "홍길동", items: ["모니터", "Cpu"] };
function App44(props) {
  const [info, updateInfo] = useImmer(originInfo);

  const handleButtonClick = (item) => {
    updateInfo((draft) => {
      draft.items.push(item);
    });
  };

  return (
    <div>
      <Field label={"이름"}>
        <Input
          value={info.name}
          onChange={(e) =>
            updateInfo((draft) => {
              draft.name = e.target.value;
            })
          }
        />
      </Field>
      <Button onClick={(e) => handleButtonClick(e.target.innerHTML)}>
        키보드
      </Button>
      <Button onClick={(e) => handleButtonClick(e.target.innerHTML)}>
        마우스
      </Button>
      <Button onClick={(e) => handleButtonClick(e.target.innerHTML)}>
        핸드폰
      </Button>
      <Button
        onClick={() => {
          updateInfo(originInfo);
        }}
        colorPalette={"red"}
      >
        리셋
      </Button>
      <hr />
      <ul>
        {info.items.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App44;
