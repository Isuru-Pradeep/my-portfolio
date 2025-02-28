import Head from "next/head";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Business = () => {
  return (
    <>
      <Head>
        <title>Business Ventures</title>
      </Head>
      <Navbar />
      <div className="flex flex-col items-center justify-center min-h-screen bg-background">
        <h1 className="text-4xl font-bold text-primary">Business Ventures</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          <div className="bg-white shadow-lg p-6 rounded-lg">
            <h2 className="text-2xl font-bold text-primary">Zephyr Matrix</h2>
            <p className="text-gray-600">
              Delivering creative, agile, and efficient technology solutions.
            </p>
          </div>
          <div className="bg-white shadow-lg p-6 rounded-lg">
            <h2 className="text-2xl font-bold text-primary">
              Valentina Clothing
            </h2>
            <p className="text-gray-600">
              An online clothing shop catering to a local audience with
              fashionable canvas handbags, floral dresses, and unique seasonal
              collections.
            </p>
          </div>
          <div className="bg-white shadow-lg p-6 rounded-lg">
            <h2 className="text-2xl font-bold text-primary">IP Market</h2>
            <p className="text-gray-600">
              A technology-driven company concept with a focus on IT
              innovations.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Business;
