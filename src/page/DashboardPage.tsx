import React from "react";
import PageContent from "../components/page/PageContent";
import PageContentHeader from "../components/page/PageContentHeader";
import PageLayout from "../components/page/PageLayout";
import {
  Center,
} from "@chakra-ui/react"
import {
  ERouteNames,
} from "../routes";

function DashboardPage() {
  return (
    <PageLayout hasHeader headerTitle={ERouteNames.dashboard}>
      <PageContent>
        <PageContentHeader title="Example content header" />
        <Center height="full" width="full">This is the dashboard</Center>
      </PageContent>
    </PageLayout>
  );
}

export default DashboardPage;
