import { Lato } from "next/font/google";
import { DesktopNavigation } from "@/components/DesktopNavigation";
import { MobileNavigation } from "@/components/MobileNavigation";
import { Quote } from "@/components/Quote";
import { HeroContainer } from "@/components/HeroContainer";
import { HeroList } from "@/components/HeroList";
import { FullScreenVideoBackground } from "@/components/FullScreenVideoBackground";
import { ImageCard } from "@/components/ImageCard";
import { ImageCardGrid } from "@/components/ImageCardGrid";
import Head from "next/head";
import Image from "next/image";

const lato = Lato({ subsets: ["latin"], weight: "700" });

export default function Home() {
  return (
    <div className={`min-h-screen ${lato.className}`}>
      <Head>
        <title>Reactive Running Solutions</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Reactive Running Solutions is a running coaching service that helps runners of all levels achieve their goals"
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Reactive Running Solutions" />
        <meta property="og:image" content="/logo.webp" />
        <link rel="icon" href="/ReactiveRunningSolutionsLogo2.webp" />
      </Head>
      <DesktopNavigation
        links={[
          { url: "/", name: "Home" },
          { url: "#services", name: "Services" },
          { url: "#couches", name: "Coaches" },
          { url: "#facilityAndPartners", name: "Facility & Partners" },
          { url: "#contactUs", name: "Contact Us" },
        ]}
      />
      <MobileNavigation
        links={[
          { url: "/", name: "Home" },
          { url: "#services", name: "Services" },
          { url: "#couches", name: "Coaches" },
          { url: "#facilityAndPartners", name: "Facility & Partners" },
          { url: "#contactUs", name: "Contact Us" },
        ]}
      />
      <FullScreenVideoBackground />
      <main className="relative z-0 flex flex-col items-center">
        <h1 className="text-responsive-h1 text-center my-20">
          TAKE YOUR RUNNING
          <br />
          TO THE NEXT LEVEL
        </h1>
        <Quote quote="DON'T DREAM OF WINNING, TRAIN FOR IT" author="MO FARAH" />
        <HeroContainer backroundImage={"herobackgroundimage.webp"}>
          <div className="w-4/5 md:w-2/3">
            <h2
              id="services"
              className="text-responsive-h2 text-white font-bold text-center"
            >
              SERVICES
            </h2>
            <p className="my-4 text-responsive-p-mobile md:text-responsive-p">
              Through an integrated approach, we make sure that when the next
              race starts you are strong, fast, and pain-free.
            </p>
            <p className="my-4 text-responsive-p-mobile md:text-responsive-p">
              We utilize cutting edge methods to ensure training in the gym
              produces your next personal best!
            </p>
            <HeroList
              items={[
                {
                  itemNumber: "1",
                  itemText:
                    "Strength and coordinative training developed specifically for runners. " +
                    "No non-specific exercises. " +
                    "Strength work that makes you stronger and more efficient",
                },
                {
                  itemNumber: "2",
                  itemText:
                    "Technique drills designed to improve overall running abilities no matter the level. " +
                    "Minimize fatigue and accelerate improvements",
                },
                {
                  itemNumber: "3",
                  itemText:
                    "Functional Range Assessment and Conditioning to optimize joint health, " +
                    "improve mobility, and reduce injury risk",
                },
              ]}
            />
            <p className="my-4 text-responsive-p-mobile md:text-responsive-p">
              Using this system, we create highly individualized plans for your
              specific needs. Training alongside our highly skilled coaches in
              an athletic performance facility will help meet your goals
            </p>
          </div>
        </HeroContainer>
        <h2
          id="couches"
          className="text-responsive-h2 text-white font-bold text-center"
        >
          COUCHES
        </h2>
        <ImageCardGrid>
          <ImageCard image={"/harry.webp"} imageAlt={"Image of Harry"}>
            <h3 className="text-responsive-h3 text-white font-bold text-center my-3">
              WANKER
            </h3>
            <p className="my-4 text-responsive-p-mobile md:text-responsive-p">
              Harry is the founder of Reactive Running Solutions. Having
              previously competed at a high level, he turned his passion for
              running into a career helping other runners perform at their very
              best. He currently works with a wide variety of athletes from
              Ironman competitors to those looking to improve their 5k time. We
              can help you reach your full potential and make your running goal
              a reality!
            </p>
          </ImageCard>
          <ImageCard image={"/gabriel.webp"} imageAlt={"Image of Gabriel"}>
            <h3 className="text-responsive-h3 text-white font-bold text-center my-3">
              GABRIEL RAPLEY
            </h3>
            <p className="my-4 text-responsive-p-mobile md:text-responsive-p">
              Gabriel has an extensive background training athletes in all
              manners of field sports. He currently works with a spectrum of
              athletes remotely and in person ranging from young athletes to the
              NCAA level. Gabriel also enjoys working with many local
              competitive youth and recreational athletes to help develop
              agility and a stronger running ability. Whatever sport you are
              looking to get faster in, we have you covered!
            </p>
          </ImageCard>
        </ImageCardGrid>
        <div
          id="facilityAndPartners"
          className="w-full flex flex-col md:flex-row min-h-600px"
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
          <HeroContainer backgroundColor="bg-slate-700">
            <div className="flex flex-col justify-center items-center w-4/5 md:w-2/3">
              <Image
                src={"/PerformanceSportsTherapy.webp"}
                alt={"Performance Sports Therapy Logo"}
                width={200}
                height={200}
              />
              <p className="my-4 text-responsive-p-mobile md:text-responsive-p">
                As a team of experienced professionals, we offer services to
                sports teams, athletic organizations, schools, individual
                athletes, and everyday folks who require and appreciate the
                expertise, attention and care for which we are known.
              </p>
              <p className="my-4 text-responsive-p-mobile md:text-responsive-p">
                We use a professionally collaborative approach in our treatments
                and exercise our skills to the benefit of athletes. In
                particular, we are fully equipped to work directly with teams in
                any sport, and our expertise and qualifications puts us in a
                unique position.
              </p>
              <h3 className="text-2xl">Athletes Training Athletes</h3>
              <button className="bg-red-700 hover:bg-black p-4 my-4 rounded-md">
                <a
                  className="text-xl"
                  href="https://www.performancesportstherapy.ca/"
                >
                  Learn More
                </a>
              </button>
            </div>
          </HeroContainer>
        </div>
        <HeroContainer backgroundColor="bg-gray-950">
          <h2 className="text-responsive-h2">Contact Us</h2>
          <div className="flex items-center flex-wrap justify-center w-full my-4">
            <h3 className="m-0 text-xl text-center w-full my-2">
              Reactive Running Solutions
            </h3>
            <address className="text-xl">
              811 Shefford Rd <br />
              Ottawa, ON <br />
              K1J 8H9 <br />
            </address>
            <Image
              src="/ReactiveRunningSolutionsLogo2.webp"
              alt="Reactive Running Solutions Logo"
              width={100}
              height={100}
            />
          </div>
        </HeroContainer>
      </main>
    </div>
  );
}
