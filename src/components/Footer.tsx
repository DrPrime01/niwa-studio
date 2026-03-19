import { Link } from "react-router";
import {
  FaYoutube,
  FaTwitter,
  FaLinkedinIn,
  FaFacebookF,
} from "react-icons/fa";
import Logo from "./vectors/Logo";

export default function Footer() {
  return (
    <footer className="bg-black py-34.25 pb-15">
      <div className="flex flex-col container max-w-7xl mx-auto">
        <div className="flex flex-col gap-y-16.75 w-1/2">
          <p className="leading-full text-5xl -tracking-[5%] text-white">
            Every Collaboration is a chance to grow. Let's get one started.
          </p>
          <button className="flex items-center gap-x-8">
            <span className="leading-6 text-2xl -tracking-[5%] text-white font-bricolage-grotesque">
              Contact Us
            </span>
            <div className="size-12 rounded-full bg-brand-fun-green grid place-items-center">
              <img
                src="/icons/right-arrow.svg"
                alt="arrow right"
                className="object-contain animate-back-n-forth"
              />
            </div>
          </button>
        </div>
        <div className="mt-9.5 mb-25 py-12 flex items-center justify-between border-y border-grey-13">
          <Link to="/" className="text-white footer-navtexts">
            Niwa
          </Link>
          <Link to="/work" className="text-white footer-navtexts">
            Work
          </Link>
          <Link to="/plant" className="text-white footer-navtexts">
            Plant
          </Link>
          <Link to="/contact" className="text-white footer-navtexts">
            Contact
          </Link>
        </div>
        <div className="flex items-center justify-between mb-25">
          <div className="text-white">
            <span className="font-bold text-[114.63px] leading-full font-lc-moji leading-none">
              Niwa
            </span>
            <sup className="font-extralight text-[75px] leading-full -tracking-[5%]">
              &copy;
            </sup>
          </div>
          <div>
            <Logo className="w-25 h-13.5" />
          </div>
        </div>
        <div className="flex items-end justify-between border-t border-grey-13">
          <span className="text-[14.2px] font-medium leading-[21.75px] tracking-[0.3px] uppercase text-white">
            © 2025 NIWA STUDIOS. All rights reserved.
          </span>
          <div className="bg-white px-3 flex items-center gap-x-1 h-13">
            <div className="px-2">
              <FaYoutube height={26} width={25} color="#2A393A" />
            </div>
            <div className="px-2">
              <FaTwitter height={26} width={20} color="#2A393A" />
            </div>
            <div className="px-2">
              <FaLinkedinIn height={26} width={20} color="#2A393A" />
            </div>
            <div className="px-2">
              <FaFacebookF height={26} width={11} color="#2A393A" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
