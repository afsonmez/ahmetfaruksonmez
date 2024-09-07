import { cn } from "@/lib/utils";
import { Facebook, Linkedin, Twitter, ExternalLink, Instagram } from "lucide-react";
import { buttonVariants } from "./ui/button";
import Link from "next/link";
import FramerWrapper from "./FramerWrapper";

const SocialLinks = () => {
  const links = [
    { name: "Instagram", link: "https://www.instagram.com/faruuks_?igsh=MWo4bHFnMHAwYTU3eQ==", icon: <Instagram /> },
    { name: "Twitter", link: "https://x.com/ahmet2faruk5", icon: <Twitter /> },
    { name: "Linkedin", link: "https://tr.linkedin.com/in/ahmet-faruk-s%C3%B6nmez-ba0743286", icon: <Linkedin /> },
    
  ];
  return (
    <>
      {links.map((itm, indx) => {
        const timing = 0.55 + indx * 0.125
        
        return (
          <FramerWrapper key={indx} delay={timing} y={50}>

          <Link  target="blank"
            href={itm.link}
            className={cn(buttonVariants({ variant: "outline", size: "icon" }))}
            >{itm.icon}</Link>
            </FramerWrapper>
        );
      })}
    </>
  );
};

export default SocialLinks;
