import Head from "next/head";
import React, { FC, ReactNode } from "react";
import { Box } from "@mui/material";
import Navbar from "@/components/ui/navbar/Navbar";
import Sidebar from "@/components/ui/sidebar/Sidebar";
type Props = {
  titleOpenJira?: string;
  children: ReactNode;
};

const Layout: FC<Props> = ({
  children,
  titleOpenJira = "Open Jira-NextJs",
}) => {
  return (
    <Box sx={{ flexFlow: 1 }}>
      <Head>
        <title>{titleOpenJira}</title>
      </Head>
      <Navbar />
      <Sidebar/>
      <Box padding={"10px 20px"}>{children}</Box>
    </Box>
  );
};

export default Layout;
