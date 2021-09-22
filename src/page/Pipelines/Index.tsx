import React, { useEffect, useState } from "react";
import {
  Avatar,
  Badge,
  Button,
  HStack,
  Icon,
  Link,
  Td,
  Text,
  Tr,
} from "@chakra-ui/react";
import { ERouteNames } from "../../routes";
import { Link as ReactRouterLink, useRouteMatch } from "react-router-dom";
import { RiAddLine, RiDonutChartFill } from "react-icons/ri";
import IPipeline, { EPipelineState } from "../../types/pipeline";
import PageContent from "../../components/page/PageContent";
import PageLayout from "../../components/page/PageLayout";
import Table from "../../components/table/Table";
import data from "../../temp_data/pipelines.json";
import replace from "lodash/replace";
import TableRowSkeleton from "../../components/table/TableRowSkeleton";

function PipelinesIndex() {
  const [loading, setLoading] = useState<boolean>(true);
  const [pipelines, setPipelines] = useState<IPipeline[]>([]);
  let match = useRouteMatch();

  function formatDate(datetime: string) {
    return new Date(datetime).toDateString();
  }

  // should make an actual API call here
  useEffect(() => {
    if(!loading) {
      return;
    }

    setTimeout(() => {
      setPipelines(data);
      setLoading(false);
    }, 3000);
  }, [loading, setLoading, setPipelines])

  return (
    <PageLayout 
      headerTitle={ERouteNames.pipelines}
      headerActions={<Button size="sm" variant="outline" leftIcon={<RiAddLine />}>Add Pipeline</Button>}
    >
      <PageContent>
        <Table headers={["Name", "State", "Updated At"]}>
          { loading ?
            (
              <TableRowSkeleton />
            ):(
              pipelines.map((pipeline: IPipeline) => {
                let colorScheme = pipeline.state === EPipelineState.off
                  ? 'red' : pipeline.state === EPipelineState.on
                  ? 'green' : 'yellow';
                return (
                  <Tr key={pipeline.id}>
                    <Td>
                      <HStack spacing={4}>
                        <Avatar size="sm" icon={<Icon as={RiDonutChartFill} boxSize={7} />} />
                        <Link 
                          as={ReactRouterLink}
                          to={{
                            pathname: `${match.url}/${pipeline.id}`,
                            state: { 
                              pipeline,
                            },
                          }}
                        >
                          <Text>{pipeline.name}</Text>
                        </Link>
                      </HStack>
                    </Td>
                    <Td><Badge colorScheme={colorScheme}>{replace(pipeline.state, '-', ' ')}</Badge></Td>
                    <Td>{formatDate(pipeline.updated_at)}</Td>
                  </Tr>
                );
              })
            )
          }
        </Table>
      </PageContent>
    </PageLayout>
  );
}

export default PipelinesIndex;
