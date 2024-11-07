import React from "react";
import { HStack, Input, Textarea } from "@chakra-ui/react";
import { Field } from "../components/ui/field.jsx";
import { Checkbox } from "../components/ui/checkbox.jsx";
import { HiOutlinePlus } from "react-icons/hi";
import { Radio, RadioGroup } from "../components/ui/radio.jsx";
import { Switch } from "../components/ui/switch.jsx";
import {
  RadioCardItem,
  RadioCardLabel,
  RadioCardRoot,
} from "../components/ui/radio-card.jsx";

function MyApp28(props) {
  return (
    <div style={{ margin: "10px" }}>
      <h5>radio card</h5>
      <RadioCardRoot>
        <RadioCardLabel>결제 수단</RadioCardLabel>
        <HStack>
          <RadioCardItem indicator={false} value={1} label="Apple Pay" />
          <RadioCardItem indicator={false} value={2} label="Samsung Pay" />
          <RadioCardItem indicator={false} value={3} label="Naver Pay" />
          <RadioCardItem indicator={false} value={4} label="Kakao Pay" />
        </HStack>
      </RadioCardRoot>
      <h5>switch</h5>
      <Switch>동의</Switch>
      <Switch variant="raised">동의</Switch>
      <h5>radio button</h5>
      <RadioGroup>
        <Radio value={1}>option1</Radio>
        <Radio value={2}>option2</Radio>
        <Radio value={3}>option3</Radio>
      </RadioGroup>
      <hr />
      <h5>checkbox</h5>
      <Checkbox icon={<HiOutlinePlus />}>동의</Checkbox>
      <hr />
      <Checkbox variant="outline" checked>
        동의
      </Checkbox>
      <hr />
      <Checkbox variant="solid"> 동의 </Checkbox>
      <hr />
      <Checkbox variant="subtle"> 동의 </Checkbox>
      <hr />
      <input type="checkbox" id="check1" />
      <label htmlFor="check1">동의</label>
      <hr />
      <Textarea placeholder="자기소개 1000자 제한" variant="flushed"></Textarea>
      <hr />
      <Field label="Email" required helperText="이메일을 입력해주세요.">
        <Input />
      </Field>
      <Input variant="subtle" placeholder="이메일을 입력해주세요." />
      <Input variant="outline" placeholder="이메일을 입력해주세요." />
      <Input variant="flushed" placeholder="이메일을 입력해주세요." />
      <hr />
      <input type="text" placeholder="이메일을 입력해주세요." />
    </div>
  );
}

export default MyApp28;
