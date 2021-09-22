import React, { 
  useEffect,
  useCallback,
  useState,
} from "react";
import {
  Skeleton,
  Td,
  Tr,
} from "@chakra-ui/react";

function TableRowSkeleton({rowCount = 5, colCount = 3}: {
  rowCount?: number,
  colCount?: number,
}) {
  const [rows, setRows] = useState<React.ReactNode[]>([]);

  const generateColumns = useCallback(() => {
    let columns = [];

    for(let i = 0; i < colCount; i++) {
      columns.push(
        <Td key={`${i}-skeleton-col`}>
          <Skeleton height={8}/>
        </Td>
      );
    }

    return columns;
  }, [colCount]);

  const generateRows = useCallback(() => {
    let rows = [];

    for(let i = 0; i < rowCount; i++) {
      rows.push(
        <Tr key={`${i}-skeleton-row`}>
          {generateColumns()}
        </Tr>
      );
    }

    return rows;
  }, [rowCount, generateColumns]);

  useEffect(() => {
    setRows(generateRows());
  }, [generateRows, setRows])

  return rows.length ? <>{rows}</> : <></>;
}

export default TableRowSkeleton;
