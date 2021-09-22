import React from "react";
import {
  Center,
} from "@chakra-ui/react";
import PageContent from "../components/page/PageContent";
import PageLayout from "../components/page/PageLayout";

function RankersPage() {
  return (
    <PageLayout hasHeader={false}>
      <PageContent>
        <Center height="full" width="full">This page doesn't have a header</Center>
      </PageContent>
    </PageLayout>
  );
}

export default RankersPage;
