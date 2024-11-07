import React from 'react';
import { Input } from "@chakra-ui/react"

function MyApp28(props) {
  return (
    <div>
      <Input variant="subtle" placeholder="이메일을 입력해 주세요"/>
      <Input variant="outline" placeholder="이메일을 입력해 주세요"/>
      <Input variant="flushed" placeholder="이메일을 입력해 주세요"/>
      <hr/>
      <input type="text" placeholder="이메일을 입력해주세요"/>
    </div>
  );
}

export default MyApp28;