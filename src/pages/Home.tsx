import React, { useCallback, useEffect, useRef, useState } from "react";
import CardsSection from "../components/landingSections/CardsSection";
import HeroSection from "../components/landingSections/HeroSection";
import Footer from "../components/Footer";
import HomeHeader from "../components/HomeHeader";

const App = () => {
  const mainRef = useRef<HTMLElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isFooterVisible, setIsFooterVisible] = useState(false);

  const handleScroll = useCallback(() => {
    const main = mainRef.current;
    if (!main) return;

    const cards = main.querySelectorAll(".card-item");
    const lastCard = cards[cards.length - 1] as HTMLElement;
    const footer = main.querySelector("footer") as HTMLElement;

    const scrollHeight =
      lastCard.offsetTop +
      lastCard.offsetHeight -
      main.clientHeight +
      footer.offsetHeight;
    const progress = Math.min(main.scrollTop / scrollHeight, 1);
    setScrollProgress(progress);

    if (main.scrollTop > scrollHeight) {
      main.scrollTop = scrollHeight;
    }
  }, []);

  useEffect(() => {
    const main = mainRef.current;
    if (!main) return;

    const cards = main.querySelectorAll(".card-item");
    const footer = main.querySelector("footer");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("sticky");
          } else {
            entry.target.classList.remove("sticky");
          }
        });
      },
      { threshold: 0.3 }
    );

    cards.forEach((card, index) => {
      if (index === 0) {
        card.classList.add("sticky");
      }
      observer.observe(card);
    });

    const footerObserver = new IntersectionObserver(
      ([entry]) => {
        setIsFooterVisible(entry.isIntersecting);
      },
      { threshold: 1 }
    );

    if (footer) {
      footerObserver.observe(footer);
    }

    main.addEventListener("scroll", handleScroll);

    return () => {
      observer.disconnect();
      footerObserver.disconnect();
      main.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return (
    <>
      <HomeHeader scrollProgress={scrollProgress} isVisible={!isFooterVisible} />
      <main
        ref={mainRef}
        className="h-screen overflow-y-auto overflow-x-hidden bg-primary font-medium text-primary-foreground"
      >
        <div className="min-h-screen 2xl:px-0">
          <section className="mb-[101px] mt-[194px] 2xl:mb-[100px] 2xl:mt-[213px]">
            <HeroSection />
          </section>
          <section className="mx-auto w-[366px] md:w-[720px] lg:w-[960px] xl:w-[720px] 2xl:w-[1376px]">
            <CardsSection />
          </section>
        </div>
        <Footer scrollProgress={scrollProgress} />
      </main>
    </>
  );
};

export default React.memo(App);
