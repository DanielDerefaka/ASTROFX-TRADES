// import { onGetBlogPosts } from '@/actions/landing'
import { InvestmentAccordion } from "@/components/Faq";
import { CardHoverEffectDemo } from "@/components/hover";
import NavBar from "@/components/navbar";
import Addsection from "@/components/site/Addsection";
import { AppleCardsCarouselDemo } from "@/components/site/apple-ui";
import Footer from "@/components/site/Footer";
import { BentoGridSecondDemo } from "@/components/site/grid";
import Hero from "@/components/site/Hero";
import AboutSection from "@/components/site/pages/AboutSection";
import Features from "@/components/site/pages/Feature";
import Guide from "@/components/site/pages/Section2";
import TradingViewWidget from "@/components/tradeWidgets/TradeWidget";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { MacbookScroll } from "@/components/ui/macbookscroll";
// import { pricingCards } from '@/constants/landing-page'
import clsx from "clsx";
import { ArrowRightCircleIcon, Check } from "lucide-react";
import Image from "next/image";
import Link from "next/link";


export default async function Home() {

  return (
    <main>
     <Hero/>
     <AboutSection />
     <Guide/>
     <Features/>
      
    </main>
  );
}
