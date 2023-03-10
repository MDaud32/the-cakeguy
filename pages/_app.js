import Navbar from "@/components/Navbar";
import "@/styles/globals.css";
import "react-toastify/dist/ReactToastify.css";
import { ThemeProvider } from "next-themes";
import Layout from "@/components/Layout";

export default function App({ Component, pageProps }) {
  return (
    <div>
      <Layout>
        <ThemeProvider enableSystem={true} attribute="class">
          <Navbar />
          <Component {...pageProps} />
        </ThemeProvider>
      </Layout>
    </div>
  );
}
