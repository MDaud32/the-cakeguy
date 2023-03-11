import Navbar from "@/components/Navbar";
import "@/styles/globals.css";
import "react-toastify/dist/ReactToastify.css";
import Layout from "@/components/Layout";
import { AnimatePresence, motion } from "framer-motion";

export default function App({ Component, pageProps, router }) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={router.route}
        initial="pageInitial"
        animate="pageAnimate"
        exit="pageExit"
        variants={{
          pageInitial: {
            opacity: 0,
            x: -50,
          },
          pageAnimate: {
            opacity: 1,
            x: 0,
            transition: {
              duration: 0.5,
              ease: [0.16, 1, 0.3, 1], // custom easing
            },
          },
          pageExit: {
            opacity: 0,
            x: 50,
            transition: {
              duration: 0.5,
              ease: [0.16, 1, 0.3, 1], // custom easing
            },
          },
        }}>
        <div>
          <Layout>
            <Navbar />
            <Component {...pageProps} />
          </Layout>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
