import "@/styles/globals.css";
import { Roboto } from "next/font/google";
const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto",
  weight: ["400", "300", "700"],
});
export default function App({ Component, pageProps }) {
  if (Component.getLayout) {
    return Component.getLayout(
      <main className={`${roboto.variable} font-sans`}>
        <Component {...pageProps} />
      </main>
    );
  }
  return (
    <div className={`${roboto.variable} font-sans`}>
      <Component {...pageProps} />;
    </div>
  );
}
