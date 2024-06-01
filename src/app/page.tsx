import Footer from './components/footer';
import Navbar from './components/Navbar';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex flex-col items-center justify-center flex-grow pt-20 lg:pt-40 ml-8 lg:ml-16">
       
        <div className="flex items-start justify-center w-full lg:w-3/4">
          <div className="relative w-full lg:w-auto">
            <img src="/LandingPageAPP-Illustration.svg" alt="Logo" className="w-full lg:w-auto h-auto" />
          </div>
          <div className="text-center ml-8">
            <h1 className="text-5xl lg:text-6xl font-bold text-black">Welcome to YellowShuttl</h1>
            <p className="mt-4 text-xl lg:text-2xl text-black">
              Your companion for bus tracking. At YellowShuttl, we're transforming your daily commute with state-of-the-art real-time bus tracking for organizational buses. Our groundbreaking SaaS platform keeps you updated on your bus’s exact location, ensuring a smooth and stress-free journey. Say goodbye to the uncertainty and hello to efficient, worry-free commuting with YellowShuttl!
            </p>
          </div>
        </div>
        <section className="mt-16 text-center w-full px-4 lg:px-0 lg:w-3/4">
          <h3 className="text-3xl lg:text-4xl font-semibold text-black mt-12 mb-4">Why YellowShuttl?</h3>
          <ul className="list-disc list-inside text-lg lg:text-xl text-gray-700 text-left mx-auto lg:mx-0 lg:w-3/4">
            <li className="mb-4">Real-Time Bus Tracking: Stay informed with live updates on your bus's exact location.</li>
            <li className="mb-4">Interactive Map Interface: View your route and bus stops on a dynamic and user-friendly map.</li>
            <li className="mb-4">Timely Notifications: Receive instant alerts about your bus’s arrival, delays, and more.</li>
            <li className="mb-4">Reliable and Safe: Enhance the safety and reliability of your daily commute with accurate information.</li>
          </ul>
          <h3 className="text-3xl lg:text-4xl font-semibold text-black mt-12 mb-4">Key Features:</h3>
          <ul className="list-disc list-inside text-lg lg:text-xl text-gray-700 text-left mx-auto lg:mx-0 lg:w-3/4">
            <li className="mb-4">Seamless Commute Experience: Enjoy a hassle-free commute with precise bus tracking.</li>
            <li className="mb-4">Smart Planning: Optimize your schedule and reduce waiting times with real-time updates.</li>
            <li className="mb-4">User-Friendly Interface: Navigate through our intuitive platform effortlessly.</li>
          </ul>
          <h3 className="text-3xl lg:text-4xl font-semibold text-black mt-12 mb-4">Join the Future of Commuting</h3>
          <p className="text-lg lg:text-xl text-gray-700">
            Experience a smarter, more efficient, and stress-free way to travel. Whether you're heading to work or returning home, let YellowShuttl be your reliable companion on the road.
          </p>
          <p className="text-lg lg:text-xl font-semibold text-black mt-8">YellowShuttl – Your Partner in Efficient Commuting.</p>
        </section>
      </main>
      <Footer />
    </div>
  );
}
