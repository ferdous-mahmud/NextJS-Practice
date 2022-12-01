import { Head, Html, Main, NextScript } from "next/document";
import PageLink from "../components/page-link";

export default function Document() {
  return (
    <Html>
      <Head />
      <body>
        <PageLink />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
