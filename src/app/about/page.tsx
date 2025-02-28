// import Head from "next/head";
// import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";

// const About = () => {
//   return (
//     <>
//       <Head>
//         <title>About Me</title>
//       </Head>
//       <Navbar />
//       <div className="flex flex-col items-center justify-center min-h-screen bg-background">
//         <h1 className="text-4xl font-bold text-primary">About Me</h1>
//         <p className="text-lg text-text mt-4">
//           I'm an IT undergraduate with a focus on cutting-edge technology and
//           software development.
//         </p>
//         <p className="text-lg text-text mt-4">
//           I have experience in technology-related projects, including AI
//           development, full-stack software systems, and entrepreneurial
//           ventures.
//         </p>
//         <p className="text-lg text-text mt-4">
//           I aspire to entrepreneurship through my company 'Zephyr Matrix,' which
//           represents agility and robust infrastructure, delivering technology
//           solutions with graceful efficiency.
//         </p>
//       </div>
//       <Footer />
//     </>
//   );
// };

// export default About;

import Head from "next/head";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image"; // Import the Image component

const About = () => {
  return (
    <>
      <Head>
        <title>About Me</title>
      </Head>
      <Navbar />
      <div className="flex flex-col items-center justify-center min-h-screen bg-background px-4">
        <h1 className="text-4xl font-bold text-primary mb-6">About Me</h1>
        {/* Add your photo using Next.js Image component */}
        <div className="relative w-48 h-48 mb-6">
          <Image
            src="/images/isuru.jpg"
            // Update with the correct path to your image
            alt="Your Name"
            layout="fill" // Ensures the image takes up the container dimensions
            objectFit="cover" // Maintains aspect ratio and covers the container
            className="rounded-full shadow-custom"
            priority={false} // Enable lazy loading by default (optional)
          />
        </div>
        <p className="text-lg text-text mt-4 text-center">
          I'm an IT undergraduate with a focus on cutting-edge technology and
          software development.
        </p>
        <p className="text-lg text-text mt-4 text-center">
          I have experience in technology-related projects, including AI
          development, full-stack software systems, and entrepreneurial
          ventures.
        </p>
        <p className="text-lg text-text mt-4 text-center">
          I aspire to entrepreneurship through my company 'Zephyr Matrix,' which
          represents agility and robust infrastructure, delivering technology
          solutions with graceful efficiency.
        </p>
      </div>
      <Footer />
    </>
  );
};

export default About;
