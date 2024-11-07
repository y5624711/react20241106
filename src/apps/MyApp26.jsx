import React from 'react';
import { Button } from "../components/ui/button.jsx";

function MyApp26(props) {
  return (
    <div>
      <Button size="xs">click</Button>
      <Button size="sm">click</Button>
      <Button size="md">click</Button>
      <Button size="lg">click</Button>
      <hr/>
      <Button variant="solid"></Button>
      <Button variant="subtle"></Button>
      <Button variant="surface"></Button>
      <Button variant="outline"></Button>
      <Button variant="ghost"></Button>
      <Button variant="plain"></Button>
      <hr/>
      <Button loading>click</Button>
      <Button loading={true}>click</Button>
      <Button>click</Button>
      <Button loading={false}>click</Button>
      <hr/>
      <Button loading></Button>

    </div>
  );
}

export default MyApp26;