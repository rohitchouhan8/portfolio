import FavIcon from '@/components/FavIcon';
import { ImageResponse } from 'next/server';
// Image metadata
export const size = {
  width: 32,
  height: 32,
};
export const contentType = 'image/png';

export default function Icon() {
  return new ImageResponse(<FavIcon />, { ...size });
}
