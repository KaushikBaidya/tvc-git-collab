import Footer from "../components/client/layout/Footer";
import Navbar from "../components/client/layout/Navbar";
import { AppProvider } from "../context/context";
import { QueryClient, QueryClientProvider } from "react-query";
import "../styles/globals.css";
import { Toaster } from "react-hot-toast";
import Private from "../components/common/Private";
import { useRouter } from "next/router";

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return (
    <QueryClientProvider client={queryClient}>
      <Toaster position="top-right" reverseOrder={false} />
      <AppProvider>
        {router.pathname.split("/")[1] !== "dashboard" ? (
          <div className="max-w-screen-3xl mx-auto">
            <Navbar />
            <Component {...pageProps} />
            <Footer />
          </div>
        ) : (
          <Private>
            <Component {...pageProps} />
          </Private>
        )}
      </AppProvider>
    </QueryClientProvider>
  );
}

export default MyApp;
