import React, { useState } from "react";
import IPipeline from "../../types/pipeline";
import PageContent from "../../components/page/PageContent";
import PageLayout from "../../components/page/PageLayout";
import { ListItem, Text, UnorderedList, } from "@chakra-ui/react";
import { useLocation } from "react-router-dom";


interface IPipelinesDetailState {
  pipeline: IPipeline,
}

function PipelinesShow() {
  const { state } = useLocation<IPipelinesDetailState>();
  const [pipeline] = useState<IPipeline>(state.pipeline);

  /*
  // can alternatively make an API call here to retrieve
  // data needed for this pipeline if not in the original data

  useEffect(() => {
    
  }, []);
  */

  return (
    <PageLayout headerTitle={pipeline.name}>
      <PageContent>
        <Text>{pipeline.description}</Text><br />
        <UnorderedList>
          <ListItem>State: {pipeline.state}</ListItem>
          <ListItem>Created At: {pipeline.created_at}</ListItem>
          <ListItem>Updated At: {pipeline.updated_at}</ListItem>
        </UnorderedList>
      </PageContent>
    </PageLayout>
  );
}

export default PipelinesShow;
