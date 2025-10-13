import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="pt-BR">
      <Head />
      <body className="antialiased bg-gradient-to-b from-slate-800 via-purple-900 to-slate-950 text-slate-100">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
