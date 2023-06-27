import React from "react";
import { Grid, Card, CardHeader, CardContent } from "@mui/material";
import EntryList from "./EntryList";
import { EntryStatus } from "@/types/entry";
import NewEntry from "./newEntry/NewEntry";

type Props = {
  status: EntryStatus;
};

const EntryComponent = ({ status }: Props) => {
  return (
    <Grid item xs={12} sm={4} md={4}>
      <Card sx={{ height: "calc(100vh - 100px)" }}>
        <CardHeader title={status} />
        <CardContent>
          <EntryList status={status} />
          {status === EntryStatus.PENDING && <NewEntry />}
        </CardContent>
      </Card>
    </Grid>
  );
};

export default EntryComponent;
