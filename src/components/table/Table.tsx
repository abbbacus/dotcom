import React, { useEffect, useState } from "react";
import {
  Table as ChakraTable,
  Tbody,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/table";

function Table({ children, headers }: {
  children: React.ReactNode,
  headers?: Array<string>,
}) {
  const [showTableHeader, setShowTableHeader] = useState(false);

  useEffect(() => {
    if (!headers) return;

    headers.length ? setShowTableHeader(true) : setShowTableHeader(false); 
  }, [headers, setShowTableHeader])

  return (
    <ChakraTable fontSize="sm">
      {showTableHeader && headers && (
        <Thead>
          <Tr>
            {
              headers.map((header: string ) => <Th key={header}>{header}</Th>)
            }
          </Tr>
        </Thead>
      )}
      <Tbody>{children}</Tbody>
    </ChakraTable>
  );
}

export default Table;