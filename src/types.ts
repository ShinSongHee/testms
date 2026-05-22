/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface RegionContent {
  id: string;
  color: string;
  name: string;
  title: string;
  desc: string;
  category: string;
  imageUrl?: string;
}

export interface HotspotRegion extends RegionContent {
  // SVG polygon or path element coordinates (normalized to 1000x1440 coordinates)
  points: string; 
  secondaryPoints?: string; // in case of multiple shapes (like orange and pink together)
  secondaryColor?: string;  // custom color for secondary shape (e.g. pink #FE00EE)
}
