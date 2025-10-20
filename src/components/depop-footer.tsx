"use client";

import Link from "next/link";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { DepopLogo, InstagramIcon, TiktokIcon, TwitterIcon } from "./icons";

const footerLinks = [
  {
    title: "Depop",
    links: [
      { text: "About us", href: "#" },
      { text: "Careers", href: "#" },
      { text: "Blog", href: "#" },
      { text: "News", href: "#" },
      { text: "Impact", href: "#" },
    ],
  },
  {
    title: "Sell",
    links: [
      { text: "Sell on Depop", href: "#" },
      { text: "Depop Amplified", href: "#" },
      { text: "Depop Affiliates", href: "#" },
      { text: "Become a Depop Insider", href: "#" },
    ],
  },
  {
    title: "Help",
    links: [
      { text: "Help Center", href: "#" },
      { text: "Depop Status", href: "#" },
    ],
  },
];

export default function DepopFooter() {
  return (
    <footer className="bg-card text-card-foreground border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Mobile View */}
        <div className="lg:hidden">
          <Accordion type="single" collapsible>
            {footerLinks.map((section) => (
              <AccordionItem key={section.title} value={section.title}>
                <AccordionTrigger className="font-bold text-md">{section.title}</AccordionTrigger>
                <AccordionContent>
                  <ul className="space-y-2">
                    {section.links.map((link) => (
                      <li key={link.text}>
                        <Link href={link.href} className="text-muted-foreground hover:text-foreground">
                          {link.text}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Desktop View */}
        <div className="hidden lg:grid grid-cols-5 gap-8">
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h3 className="font-bold text-md mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.text}>
                    <Link href={link.href} className="text-sm text-muted-foreground hover:text-foreground">
                      {link.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div>
            <h3 className="font-bold text-md mb-4">Follow us</h3>
            <div className="flex space-x-4">
              <Link href="#" aria-label="Twitter"><TwitterIcon className="h-6 w-6 text-muted-foreground hover:text-foreground" /></Link>
              <Link href="#" aria-label="Instagram"><InstagramIcon className="h-6 w-6 text-muted-foreground hover:text-foreground" /></Link>
              <Link href="#" aria-label="TikTok"><TiktokIcon className="h-6 w-6 text-muted-foreground hover:text-foreground" /></Link>
            </div>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
            <DepopLogo className="h-6 text-primary" />
            <div className="flex space-x-4 text-xs text-muted-foreground">
              <Link href="#" className="hover:text-foreground">Sitemaps</Link>
              <Link href="#" className="hover:text-foreground">Terms and Conditions</Link>
              <Link href="#" className="hover:text-foreground">Privacy</Link>
              <Link href="#" className="hover:text-foreground">Cookies</Link>
            </div>
          </div>
          <div className="w-full md:w-auto">
            <Select defaultValue="us">
              <SelectTrigger className="w-full md:w-[180px]">
                <SelectValue placeholder="Location" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="au">Australia</SelectItem>
                <SelectItem value="ca">Canada</SelectItem>
                <SelectItem value="fr">France</SelectItem>
                <SelectItem value="gb">United Kingdom</SelectItem>
                <SelectItem value="us">United States</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
    </footer>
  );
}
