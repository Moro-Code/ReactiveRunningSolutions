import { Lato } from "next/font/google";
import { DesktopNavigation } from "@/components/DesktopNavigation";
import { MobileNavigation } from "@/components/MobileNavigation";
import { HeroContainer } from "@/components/HeroContainer";
import { HeroList } from "@/components/HeroList";
import { FullScreenVideoBackground } from "@/components/FullScreenVideoBackground";
import { ImageCard } from "@/components/ImageCard";
import { ImageCardGrid } from "@/components/ImageCardGrid";
import { ToTheTopButton } from "@/components/ToTheTopButton";
import { InstagramGrid } from "@/components/InstagramGrid";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

const lato = Lato({ subsets: ["latin"], weight: "700" });

export default function Home() {
  return (
    <div className={`min-h-screen text-white ${lato.className}`}>
      <Head>
        <title>Reactive Running Solutions</title>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <meta
            name="description"
            content="Reactive Running Solutions is a running coaching service that helps runners of all levels achieve their goals"
        />
        <meta property="og:type" content="website"/>
        <meta property="og:title" content="Reactive Running Solutions"/>
        <meta property="og:image" content="/logo.webp"/>
        <link rel="icon" href="/ReactiveRunningSolutionsLogo2.webp"/>
        <script
            dangerouslySetInnerHTML={{
              __html:
                  '(function(d, s, id) {var js; if (d.getElementById(id)) {return;} js = d.createElement(s); js.id = id; js.src = "https://embedsocial.com/cdn/ht.js"; d.getElementsByTagName("head")[0].appendChild(js);}(document, "script", "EmbedSocialHashtagScript"));',
            }}
        />
      </Head>
      <DesktopNavigation
          links={[
            {url: "/", name: "Home"},
            {url: "#services", name: "Services"},
            {url: "#ourTeam", name: "Our Team"},
            {url: "#facilityAndPartners", name: "Facility & Partners"},
            {url: "#contactUs", name: "Contact Us"},
          ]}
      />
      <MobileNavigation
          links={[
          { url: "/", name: "Home" },
          { url: "#services", name: "Services" },
          { url: "#ourTeam", name: "Our Team" },
          { url: "#facilityAndPartners", name: "Facility & Partners" },
          { url: "#contactUs", name: "Contact Us" },
        ]}
      />
      <FullScreenVideoBackground />
      <main className="relative z-0 flex flex-col items-center">
        <ToTheTopButton />
        <div className="w-full max-w-7xl mx-auto px-4 md:px-8">
          <h1 className="text-responsive-h1 text-center font-bold my-20 animate-fade-in">
            ELITE-LEVEL RUNNING TRAINING 
            <span className="block text-red-500">FOR EVERY RUNNER</span>
          </h1>
          <p className="text-responsive-p-mobile md:text-responsive-p text-center max-w-3xl mx-auto mb-20 animate-fade-in-delay">
            Unlock your running potential with Ottawa&apos;s premier training
            program, crafted to enhance strength, speed, and performance while
            minimizing pain and injury
          </p>
        </div>

        <HeroContainer backgroundColor="bg-gradient-to-br from-red-800 to-red-700">
          <div className="w-full max-w-7xl mx-auto">
            <h2 className="text-responsive-h2 mb-8 text-center font-bold">OUR PHILOSOPHY</h2>
            <p className="text-responsive-p-mobile md:text-responsive-p text-center max-w-3xl mx-auto mb-12">
              At Reactive Running Solutions, we understand your passion for
              running, but we also recognize the importance of strength, mobility,
              and technique. Our highly specialized training includes cutting-edge
              strength and technical exercises, along with the world&apos;s
              leading mobility system. With our approach, your next run will be
              faster, stronger and injury free.
            </p>
            <div className="w-full max-w-4xl mx-auto aspect-video rounded-lg overflow-hidden shadow-2xl">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube-nocookie.com/embed/NegX48rYsws?si=xKnvJB80mW8PS3xV"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="w-full h-full object-cover"
              ></iframe>
            </div>
          </div>
        </HeroContainer>
        <HeroContainer backgroundColor="bg-gradient-to-br from-slate-900 to-slate-800">
          <div id="services" className="w-full max-w-7xl mx-auto px-4 md:px-8 py-16">
            <h2 className="text-responsive-h2 text-white font-bold text-center mb-16">
              OUR SERVICES
            </h2>

            {/* General Training Program */}
            <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 p-4 sm:p-6 md:p-12 rounded-2xl mb-12 md:mb-20 shadow-xl">
              <h3 className="text-responsive-h3 text-red-500 font-bold text-center mb-6 md:mb-8">
                YOUR JOURNEY STARTS HERE
              </h3>
              <div className="max-w-4xl mx-auto">
                <p className="mb-6 md:mb-8 text-responsive-p-mobile md:text-responsive-p px-2 sm:px-4">
                  We strongly believe in customizing your training to suit your
                  individual requirements. Each runner who enrolls with Reactive
                  Running Solutions begins with our introductory training package
                </p>
                <p className="mb-8 md:mb-12 text-responsive-p-mobile md:text-responsive-p px-2 sm:px-4">
                  Over three sessions (priced at $199 + tax), we diligently evaluate
                  your primary strengths and areas for enhancement through a
                  detailed process
                </p>
                
                {/* Steps Cards */}
                <div className="space-y-6 md:space-y-8 px-2 sm:px-4 mb-8">
                  {/* Step 1 */}
                  <div className="bg-gradient-to-br from-slate-700/50 to-slate-800/50 p-4 sm:p-6 rounded-xl shadow-lg transform hover:scale-[1.01] transition-all duration-300">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="text-red-500 text-xl md:text-2xl font-bold">Step #1:</span>
                      <h4 className="text-lg md:text-xl font-bold text-gray-200">Assessment</h4>
                    </div>
                    <p className="text-responsive-p-mobile md:text-responsive-p text-gray-300">
                      To ensure we address all your injury concerns comprehensively, we employ the Functional Range Assessment (FRA), the world&apos;s premier diagnostic tool for evaluating your joint&apos;s ability to move. This enables us to gain insights into your body&apos;s functionality from head to toe, empowering us to craft a tailored plan targeting your key mobility needs.
                    </p>
                  </div>

                  {/* Step 2 */}
                  <div className="bg-gradient-to-br from-slate-700/50 to-slate-800/50 p-4 sm:p-6 rounded-xl shadow-lg transform hover:scale-[1.01] transition-all duration-300">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="text-red-500 text-xl md:text-2xl font-bold">Step #2:</span>
                      <h4 className="text-lg md:text-xl font-bold text-gray-200">Training</h4>
                    </div>
                    <p className="text-responsive-p-mobile md:text-responsive-p text-gray-300">
                      After assessing your current capabilities using the FRA, we promptly commence crafting your workouts. We incorporate a diverse array of cutting-edge strength and technical exercises. Regardless of age, ability or experience level, our sessions are challenging, enjoyable, and rewarding, aimed at enhancing your speed and optimizing your movement potential.
                    </p>
                  </div>

                  {/* Step 3 */}
                  <div className="bg-gradient-to-br from-slate-700/50 to-slate-800/50 p-4 sm:p-6 rounded-xl shadow-lg transform hover:scale-[1.01] transition-all duration-300">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="text-red-500 text-xl md:text-2xl font-bold">Step #3:</span>
                      <h4 className="text-lg md:text-xl font-bold text-gray-200">Planning</h4>
                    </div>
                    <p className="text-responsive-p-mobile md:text-responsive-p text-gray-300">
                      We meticulously tailor a comprehensive plan to seamlessly integrate with your existing training regimen, ensuring optimal performance without compromising your training or recovery. Whether you are focussed on running for the long haul, gearing up for a major race, or just starting your running journey, our expertise is here to guide you every step of the way.
                    </p>
                  </div>
                </div>

                <p className="mt-8 md:mt-12 text-responsive-p-mobile md:text-responsive-p px-2 sm:px-4">
                  Using this system, we create highly individualized plans for your
                  specific needs. Training alongside our highly skilled coaches in
                  an athletic performance facility will help meet your goals
                </p>
              </div>
            </div>

            {/* Shuttle Run Program */}
            <div id="shuttleRun" className="bg-gradient-to-br from-red-800/90 to-red-900/90 p-4 sm:p-6 md:p-12 rounded-2xl shadow-xl">
              <h3 className="text-responsive-h3 font-bold text-center mb-3 md:mb-4">
                Shuttle Run Training Program
              </h3>
              <h4 className="text-lg md:text-xl text-gray-300 text-center mb-8 md:mb-12 px-2">
                Achieve Your Best Shuttle/Beep/Pin Test Score
              </h4>
              
              <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-4 sm:p-6 md:p-8 rounded-xl mb-8 md:mb-12">
                <p className="text-responsive-p-mobile md:text-responsive-p text-center mb-6 md:mb-8 px-2">
                  Are you preparing for a career in law enforcement, paramedicine, or any profession requiring a successful Shuttle Run (Beep Test) result?
                </p>
                <p className="text-responsive-p-mobile md:text-responsive-p text-center px-2">
                  Reactive Running Solutions (RRS) offers a comprehensive training program designed to maximize your performance and ensure your success.
                </p>
              </div>

              <div className="mb-8 md:mb-12 px-2">
                <h4 className="text-lg md:text-xl font-bold text-center text-gray-300 mb-4 md:mb-6">Why Choose Reactive Running Solutions?</h4>
                <p className="text-responsive-p-mobile md:text-responsive-p text-center max-w-4xl mx-auto">
                  We understand the importance of passing the Shuttle Run. Our program is built on a foundation of expert coaching and proven methodologies, providing you with the tools and support you need to excel.
                </p>
              </div>

              <h4 className="text-lg md:text-xl font-bold text-center text-gray-300 mb-6 md:mb-8">Our Program Includes:</h4>
              
              <div className="grid md:grid-cols-2 gap-4 md:gap-8 mb-8 md:mb-12 px-2">
                <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-4 sm:p-6 rounded-xl transform hover:scale-[1.02] transition-all duration-300">
                  <h5 className="text-base md:text-lg font-bold text-gray-300 mb-3 md:mb-4">Technical Running Instruction</h5>
                  <ul className="space-y-3 md:space-y-4 text-responsive-p-mobile md:text-responsive-p">
                    <li>Running is a skill, and we treat it as such. Our program incorporates cutting-edge strength and technical exercises to optimize your running form and efficiency.</li>
                    <li>Whether you&apos;re a seasoned runner or a beginner, our expert coaches will refine your technique for peak performance.</li>
                  </ul>
                </div>
                
                <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-4 sm:p-6 rounded-xl transform hover:scale-[1.02] transition-all duration-300">
                  <h5 className="text-base md:text-lg font-bold text-gray-300 mb-3 md:mb-4">Mobility Enhancement</h5>
                  <ul className="space-y-3 md:space-y-4 text-responsive-p-mobile md:text-responsive-p">
                    <li>Optimal mobility is crucial for efficient running and injury prevention.</li>
                    <li>Our coaches are certified in leading mobility enhancement systems, addressing flexibility in the spine, hips, and other critical joints.</li>
                    <li>Improve your range of motion and reduce your risk of pain or injury, giving you a competitive edge.</li>
                  </ul>
                </div>
              </div>

              <div className="text-center max-w-4xl mx-auto bg-white/10 p-4 sm:p-6 md:p-8 rounded-xl shadow-xl backdrop-blur-sm">
                <h4 className="text-lg md:text-xl font-bold mb-3 md:mb-4">Prepare for Success. Prepare with Reactive Running Solutions.</h4>
                <p className="text-responsive-p-mobile md:text-responsive-p mb-6 px-2">
                  Don&apos;t leave your Shuttle Test results to chance. Invest in a proven training program that will equip you with the skills and confidence to succeed.
                </p>
                <Link href="#contactUs" className="inline-block bg-white text-red-700 px-6 sm:px-8 py-2 sm:py-3 rounded-full font-bold text-base md:text-lg hover:bg-gray-100 transform hover:scale-105 transition-all duration-300">
                  Contact Us Today
                </Link>
              </div>
            </div>
          </div>
        </HeroContainer>

        <h2
          id="ourTeam"
          className="text-responsive-h2 text-white font-bold text-center"
        >
          OUR TEAM
        </h2>
        <ImageCardGrid>
          <ImageCard image={"/team.png"} imageAlt={"Image of the Reactive Running Solutions Team"}>
            <p className="my-4 text-responsive-p-mobile md:text-responsive-p">
              Reactive Running Solutions was founded by coaches Harry Hussain and Gabriel Rapley, driven by the vision
              of providing elite running training to both athletes and individuals. Their venture has led them to
              collaborate with NFL/CFL athletes, world championship-level track and field competitors, and numerous
              members of Ottawa&apos;s athletics clubs. Their pride lies in the hundreds of everyday runners committed to
              enhancing their speed, strength, and injury resilience. Whether you seek world-class strength training,
              improved mobility for pain-free running, or surpassing personal records, our team of expert coaches is
              dedicated to supporting you every step of the way.
            </p>
          </ImageCard>
        </ImageCardGrid>
        <div
          id="facilityAndPartners"
          className="w-full flex flex-col"
        >
          <HeroContainer backroundImage="TitanGymImage.webp">
            <div className="flex flex-col justify-center items-center w-4/5 md:w-2/3 bg-slate-700/90 p-8">
              <Image
                src={"/TitanGymLogo.gif"}
                alt={"Titan Gym Logo"}
                width={200}
                height={200}
              />
              <p className="my-4 text-responsive-p-mobile md:text-responsive-p">
                Titan Performance Centre is a privately owned gym focused on
                improving athletic performance with a thorough cleaning regime
                and improved safety protocol.
              </p>
              <p className="my-4 text-responsive-p-mobile md:text-responsive-p">
                Featuring individual training pods, athletes have the comfort
                and safety of their own workout station within the gym space
              </p>
            </div>
          </HeroContainer>
          <div className="bg-slate-100">
            <InstagramGrid />
          </div>
        </div>
      </main>
      <footer className="w-full">
        <HeroContainer backgroundColor="bg-gradient-to-br from-slate-900 to-slate-800">
          <div className="w-full max-w-7xl mx-auto px-4 md:px-8 py-16">
            <h2 id="contactUs" className="text-responsive-h2 text-center font-bold mb-16">
              CONTACT US
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 items-start">
              {/* Contact Form */}
              <div className="w-full bg-gradient-to-br from-slate-800/80 to-slate-900/80 p-6 rounded-xl shadow-xl">
                <div className="w-full overflow-hidden rounded-lg">
                  <iframe
                    src="https://docs.google.com/forms/d/e/1FAIpQLSepLgjbGxzL9ofvEWjFj9sjbL4N1ZI04k8JC4yeAtb3ttmENg/viewform?embedded=true"
                    className="w-full min-h-[800px] md:min-h-[700px]"
                    frameBorder="0"
                    marginHeight="0"
                    marginWidth="0"
                  >
                    Loading…
                  </iframe>
                </div>
              </div>

              {/* Contact Information */}
              <div className="space-y-8">
                <div className="bg-gradient-to-br from-red-800/90 to-red-900/90 p-6 rounded-xl shadow-xl">
                  <h3 className="text-xl font-bold mb-4">Visit Us</h3>
                  <address className="text-lg not-italic">
                    813 Shefford Rd<br />
                    Ottawa, ON<br />
                    K1J 8H9
                  </address>
                </div>

                <div className="bg-gradient-to-br from-red-800/90 to-red-900/90 p-6 rounded-xl shadow-xl">
                  <h3 className="text-xl font-bold mb-4">Connect With Us</h3>
                  <div className="flex gap-4">
                    <Link 
                      href="https://www.facebook.com/reactiverunningsolutions"
                      className="text-white hover:text-gray-200 transition-colors duration-200"
                    >
                      <i className="icon-facebook text-4xl" />
                    </Link>
                    <Link 
                      href="https://www.instagram.com/reactiverunningsolutions/"
                      className="text-white hover:text-gray-200 transition-colors duration-200"
                    >
                      <i className="icon-instagram text-4xl" />
                    </Link>
                    <Link 
                      href="mailto:contact@reactiverunningsolutions.com"
                      className="text-white hover:text-gray-200 transition-colors duration-200"
                    >
                      <i className="icon-email text-4xl" />
                    </Link>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-red-800/90 to-red-900/90 p-6 rounded-xl shadow-xl">
                  <h3 className="text-xl font-bold mb-4">Location</h3>
                  <div className="w-full rounded-lg overflow-hidden shadow-lg">
                    <iframe
                      className="w-full aspect-video"
                      loading="lazy"
                      allowFullScreen
                      src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJf_nXkToQzkwRY2MgMAXco-w&key=AIzaSyAb6KjvUPEM4nGXvZ-1zpjzP-1p7I0msAw"
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center mt-16">
              <Image
                src="/ReactiveRunningSolutionsLogo2.webp"
                alt="Reactive Running Solutions Logo"
                width={100}
                height={100}
                className="mx-auto mb-4"
              />
              <p className="text-sm text-gray-400">
                &copy; {new Date().getFullYear()} Reactive Running Solutions. All Rights Reserved
              </p>
            </div>
          </div>
        </HeroContainer>
      </footer>
    </div>
  );
}
