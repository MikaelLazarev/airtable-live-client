import React from "react";
import {ClientLogoBlockLanding} from "../components/ClientLogo/ClientLogoBlockLanding";
import {CounterBlockLanding} from "../components/Counter/CoutnerBlockLanding";
import {HeroBlockLanding} from "../components/Hero/HeroBlockLanding";
import {ServiceBlockLanding} from "../components/Service/ServiceBlockLanding";
import {TestimonialBlockLanding} from "../components/Testimonials/TestimonialBlockLanding";
import {FooterBlockLanding} from "../components/Footer/FooterBlockLanding";

export type BlockType =
  | "Hero"
  | "Clients"
  | "Counter"
  | "Services"
  | "Features"
  | "Testimonials"
  | "Footer"

export interface BlockRender {
  blockLanding?: React.FC<BlockLandingData>;
  renderInSection: boolean;
}

export const LandingsBlocks: Record<BlockType, BlockRender> = {
  Hero: {
    blockLanding: HeroBlockLanding,
    renderInSection: false,
  },
  Clients: {
    blockLanding: ClientLogoBlockLanding,
    renderInSection: true,
  },
  Counter: {
    blockLanding: CounterBlockLanding,
    renderInSection: true,
  },
  Services: {
    blockLanding: ServiceBlockLanding,
    renderInSection: true,
  },
  Features: {
    blockLanding: ServiceBlockLanding,
    renderInSection: true,
  },
  Testimonials: {
    blockLanding: TestimonialBlockLanding,
    renderInSection: true,
  },
  Footer: {
    blockLanding: FooterBlockLanding,
    renderInSection: false,
  },
};

export class Block {
  id: string;
  type: BlockType;

  showInMenu: boolean;
  menuTitle?: string;

  index: number;

  subtitle?: string;
  title?: string;
  desc?: string;

}

export function getSectionId(b: Block): string {
  return b.menuTitle === undefined
    ? ""
    : b.menuTitle.toLowerCase().replace(" ", "_");
}


export interface BlockLandingData {
  json: string
}

