import React from "react";
import { HStack } from "@chakra-ui/react";
import {
  PaginationItems,
  PaginationNextTrigger,
  PaginationPrevTrigger,
  PaginationRoot,
} from "../components/ui/pagination.jsx";

function MyApp29(props) {
  return (
    <div>
      <h5>pagination</h5>
      <PaginationRoot
        siblingCount={3}
        count={1024}
        pageSize={10}
        variant={"outline"}
      >
        <HStack>
          <PaginationPrevTrigger />
          <PaginationItems />
          <PaginationNextTrigger />
        </HStack>
      </PaginationRoot>
      <PaginationRoot count={1024} pageSize={10}>
        <HStack>
          <PaginationPrevTrigger />
          <PaginationItems />
          <PaginationNextTrigger />
        </HStack>
      </PaginationRoot>
    </div>
  );
}

export default MyApp29;
