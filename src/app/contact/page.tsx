import Head from "next/head";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";

const Contact = () => {
  return (
    <>
      <Head>
        <title>Contact</title>
      </Head>
      <Navbar />
      <div className="flex flex-col items-center justify-center min-h-screen bg-background">
        <h1 className="text-4xl font-bold text-primary">Contact Me</h1>
        <ContactForm />
      </div>
      <Footer />
    </>
  );
};

export default Contact;
