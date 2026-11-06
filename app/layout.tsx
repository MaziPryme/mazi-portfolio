import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = { title: 'Mazi Kelvin — Frontend Developer', description: 'The portfolio of Mazi Kelechukwu Kelvin, a frontend developer building thoughtful web experiences.' };
export default function RootLayout({ children }: Readonly<{children: React.ReactNode}>) { return <html lang="en"><body>{children}</body></html>; }
