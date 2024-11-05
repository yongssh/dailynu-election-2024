import React from 'react';
import { Divider, Box } from "@washingtonpost/wpds-ui-kit";
import "../App.css"; 

export default function HorizontalDivider() {
    return (
      <Box
        css={{
          width: "100%",
          margin: "0px"
        }}
      >
        <Box
          css={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            gap: "$100",
            marginBlock: "$200",
          }}
        >
          <Box css={{ color: "$accessible", fontWeight: "$normal" }}>
          </Box>
          <Divider variant="strong" />
        </Box>
        </Box>
        );
    }