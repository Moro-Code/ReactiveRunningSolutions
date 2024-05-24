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
        <h1 className="text-responsive-h1 text-center my-20">
          ELITE-LEVEL RUNNING TRAINING FOR EVERY RUNNER
        </h1>
        <p className="-mt-10 mb-5 text-responsive-p-mobile md:text-responsive-p p-10">
          Unlock your running potential with Ottawa&apos;s premier training
          program, crafted to enhance strength, speed, and performance while
          minimizing pain and injury
        </p>
        <HeroContainer backgroundColor="bg-red-700">
          <h2 className="text-responsive-h2 mb-3">OUR PHILOSOPHY</h2>
          <p className="mb-10 text-responsive-p-mobile md:text-responsive-p p10">
            At Reactive Running Solutions, we understand your passion for
            running, but we also recognize the importance of strength, mobility,
            and technique. Our highly specialized training includes cutting-edge
            strength and technical exercises, along with the world&apos;s
            leading mobility system. With our approach, your next run will be
            faster, stronger and injury free.
          </p>
          <div className="w-5/6 h-80 md:h-card">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube-nocookie.com/embed/NegX48rYsws?si=xKnvJB80mW8PS3xV"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </HeroContainer>
        <HeroContainer backroundImage={"herobackgroundimage.webp"}>
          <div className="w-4/5 md:w-2/3">
            <h2
              id="services"
              className="text-responsive-h2 text-white font-bold text-center"
            >
              YOUR JOURNEY STARTS HERE
            </h2>
            <p className="my-4 text-responsive-p-mobile md:text-responsive-p">
              We strongly believe in customizing your training to suit your
              individual requirements. Each runner who enrolls with Reactive
              Running Solutions begins with our introductory training package
            </p>
            <p className="my-4 text-responsive-p-mobile md:text-responsive-p">
              Over three sessions (priced at $149 + tax), we diligently evaluate
              your primary strengths and areas for enhancement through a
              detailed process
            </p>
            <HeroList
              items={[
                {
                  itemNumber: "Step #1: Assessment",
                  itemText:
                    "To ensure we address all your injury concerns comprehensively, we\n" +
                    "employ the Functional Range Assessment (FRA), the world’s premier diagnostic tool for evaluating your\n" +
                    "joint's ability to move. This enables us to gain insights into your body's functionality from head to toe,\n" +
                    "empowering us to craft a tailored plan targeting your key mobility needs.",
                },
                {
                  itemNumber: "Step #2: Training",
                  itemText:
                    "After assessing your current capabilities using the FRA, we promptly\n" +
                    "commence crafting your workouts. We incorporate a diverse array of cutting-edge strength and technical\n" +
                    "exercises. Regardless of age, ability or experience level, our sessions are challenging, enjoyable, and\n" +
                    "rewarding, aimed at enhancing your speed and optimizing your movement potential.",
                },
                {
                  itemNumber: "Step #3: Planning",
                  itemText:
                    "We meticulously tailor a comprehensive plan to seamlessly integrate\n" +
                    "with your existing training regimen, ensuring optimal performance without compromising your training or\n" +
                    "recovery. Whether you are focussed on running for the long haul, gearing up for a major race, or just\n" +
                    "starting your running journey, our expertise is here to guide you every step of the way.",
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
          id="ourTeam"
          className="text-responsive-h2 text-white font-bold text-center"
        >
          OUR TEAM
        </h2>
        <ImageCardGrid>
          <ImageCard image={"/harry.webp"} imageAlt={"Image of Harry"}>
            <h3 className="text-responsive-h3 text-white font-bold text-center my-3">
              HARRY HUSSAIN
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
        <HeroContainer backgroundColor="bg-gray-950">
          <h2 id="contactUs" className="text-2xl md:text-responsive-h3">
            CONTACT US
          </h2>
          <HeroContainer>
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSepLgjbGxzL9ofvEWjFj9sjbL4N1ZI04k8JC4yeAtb3ttmENg/viewform?embedded=true"
              width="400"
              height="1300"
              frameBorder="0"
              marginHeight="0"
              marginWidth="0"
            >
              Loading…
            </iframe>
          </HeroContainer>
          <div className="flex items-center flex-wrap justify-center w-full my-8">
            <h3 className="m-0 text-xl text-center w-full my-2">
              Reactive Running Solutions
            </h3>
            <address className="text-xl">
              813 Shefford Rd <br />
              Ottawa, ON <br />
              K1J 8H9 <br />
            </address>
            <Image
              className="pl-2"
              src="/ReactiveRunningSolutionsLogo2.webp"
              alt="Reactive Running Solutions Logo"
              width={100}
              height={100}
            />
            <div className="w-full flex justify-center items-center">
              <Link href={"https://www.facebook.com/reactiverunningsolutions"}>
                <i className="icon-facebook text-5xl px-2 lg:px-4 hover:text-black cursor-pointer" />
              </Link>
              <Link
                href={"https://www.instagram.com/reactiverunningsolutions/"}
              >
                <i className="icon-instagram text-4xl hover:text-black cursor-pointer" />
              </Link>
              <Link href={"mailto:contact@reactiverunningsolutions.com"}>
                <i className="icon-email text-5xl hover:text-black cursor-pointer px-2 lg:px-4" />
              </Link>
            </div>
          </div>
          <iframe
            width="400"
            height="450"
            loading="lazy"
            allowFullScreen
            src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJf_nXkToQzkwRY2MgMAXco-w&key=AIzaSyAb6KjvUPEM4nGXvZ-1zpjzP-1p7I0msAw"
          ></iframe>
          <p className="text-xs">
            &copy; 2023 Reactive Running Solutions. All Rights Reserved
          </p>
        </HeroContainer>
      </footer>
    </div>
  );
}
