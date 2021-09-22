import React, { useState } from "react";
import {
  Avatar,
  Badge,
  Button,
  HStack,
  Icon,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Text,
} from "@chakra-ui/react"
import {
  RiDonutChartLine,
  RiAddLine,
} from "react-icons/ri";
import IPipeline, { EPipelineState } from "../types/pipeline";
import PageContent from "../components/page/PageContent";
import PageContentHeader from "../components/page/PageContentHeader";
import PageLayout from "../components/page/PageLayout";
import data from "../temp_data/pipelines.json";
import replace from "lodash/replace";

function DashboardPage() {
  const [pipelines] = useState<IPipeline[]>(data);

  function formatDate(datetime: string) {
    return new Date(datetime).toDateString();
  }

  return (
    <PageLayout hasHeader headerTitle="Dashboard">
      <PageContent>
        <PageContentHeader title="Pipelines">
          <Button size="sm" variant="outline" leftIcon={<RiAddLine />}>Add Pipeline</Button>
        </PageContentHeader>
        <Table fontSize="sm">
          <Thead>
            <Tr>
              <Th>Name</Th>
              <Th>State</Th>
              <Th>Updated On</Th>
            </Tr>
          </Thead>
          <Tbody>
            {pipelines.map((pipeline: IPipeline) => {
              let colorScheme = pipeline.state === EPipelineState.off 
                ? 'red' : pipeline.state === EPipelineState.on 
                ? 'green' : 'yellow';

              return (
                <Tr key={pipeline.id}>
                  <Td>
                    <HStack spacing={4}>
                      <Avatar size="sm" icon={<Icon as={RiDonutChartLine} boxSize={7} />} />
                      <Text>{pipeline.name}</Text>
                    </HStack>
                  </Td>
                  <Td><Badge colorScheme={colorScheme}>{replace(pipeline.state, '-', ' ')}</Badge></Td>
                  <Td>{formatDate(pipeline.updated_at)}</Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </PageContent>
    </PageLayout>
  );
}

export default DashboardPage;
