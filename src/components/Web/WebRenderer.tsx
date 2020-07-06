import React from "react";
import { Webpage } from "../../core/webpage";
import { DataScreenComponentProps } from "../DataLoader/DataScreen";
import { LandingsBlocks } from "../../core/block";
import { NavbarPage } from "../Navbar/Navbar";
import {SectionWrapper} from "../Section/SectionWrapper";

export interface WebRendererProps extends DataScreenComponentProps<Webpage> {}

export const WebRenderer: React.FC<WebRendererProps> = ({ data }) => {
  console.log("KOOOLA", data);

  const blocks = data.blocks
    .sort((a, b) => (a.index > b.index ? 1 : -1))
    .map((block) => ({
      index: block.index,
      block: JSON.parse(block.content),
    }));

  const realBlocks = blocks.map((b) => b.block.block);
  console.log("KKOLA", realBlocks);
  // @ts-ignore
  const renderedBlocks = blocks.map((b) => {
          // @ts-ignore
       const renderedBlock = LandingsBlocks[b.block.block.type].blockLanding({
              // @ts-ignore
              json: JSON.stringify(b.block.data),
          })
        // @ts-ignore
      return LandingsBlocks[b.block.block.type].renderInSection ? (
          // @ts-ignore
          <SectionWrapper data={b.block.block}>{renderedBlock}</SectionWrapper>
      ) : (
          renderedBlock
      );
      }
  );
  return (
    <div>
      <NavbarPage data={realBlocks} />
      {renderedBlocks}
    </div>
  );
};
