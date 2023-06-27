import React, { ReactNode } from "react";
import { Grid, Typography, Card, CardHeader } from "@mui/material";
import Layout from "@/layouts/Layout";
import EntryComponent from "@/components/index/EntryComponent";
import { useEntriesContext } from "@/context/entries";
import { EntryStatus } from "@/types/entry";

/* HomePage.getLayout = function getLayout(page: ReactNode) {
  return <Layout titleOpenJira="Home">{page}</Layout>;
}; */
const ENTRIES = ["PENDING", "IN_PROGRESS", "FINISHED"];
export default function HomePage() {

  const { entries } = useEntriesContext();
  return (
    <Layout titleOpenJira="Home">
      <Grid container spacing={2}>
        {ENTRIES.map((entrie) => (
          <EntryComponent key={entrie} status={entrie as EntryStatus} />
        ))}
      </Grid>
    </Layout>
  );
}
