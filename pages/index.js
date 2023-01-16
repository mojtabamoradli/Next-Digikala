import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

import asset0 from "../public/images/asset0.jpeg"
import asset00 from "../public/images/asset00.jpg"

import fresh from "../public/images/fresh.png"

import SalesAdd1 from "../public/images/salesadd1.jpg"
import SalesAdd2 from "../public/images/salesadd2.jpg"
import SalesAdd3 from "../public/images/salesadd3.gif"
import SalesAdd4 from "../public/images/salesadd4.jpg"

import SalesAdd5 from "../public/images/salesadd5.jpg"
import SalesAdd6 from "../public/images/salesadd6.jpg"

import digipluslogo from "../public/images/digiplus-logo.svg"
import digiplus from "../public/images/asset25.png"

import Banner1 from "../public/images/banner1.jpg"
import Banner2 from "../public/images/banner2.jpg"

import logo from "../public/images/digi.svg"

import FooterLogo2 from "../public/images/footerlogo2.png"

import app1 from "../public/images/app/coffe-bazzar.svg"
import app2 from "../public/images/app/google-play.svg"
import app3 from "../public/images/app/myket.svg"
import app4 from "../public/images/app/sib-app.svg"

import Enamad from "../public/images/certificates/enamad.png"
import Kasbokar from "../public/images/certificates/kasbokar.png"
import Rezi from "../public/images/certificates/rezi.png"
import ScrollContainer from 'react-indiana-drag-scroll'

import digiclub from "../public/images/digiclub.svg"
import digiclub1 from "../public/images/digiclub1.jpg"
import digiclub2 from "../public/images/digiclub2.png"
import digiclub3 from "../public/images/digiclub3.png"


const carousel = [
  {title: "img1", src: "/images/asset3.jpeg", link: ""},
  {title: "img1", src: "/images/asset4.jpeg", link: ""},
  {title: "img1", src: "/images/asset5.jpeg", link: ""},
  {title: "img1", src: "/images/asset6.jpeg", link: ""},
  {title: "img1", src: "/images/asset7.jpeg", link: ""},
  {title: "img1", src: "/images/asset8.jpeg", link: ""},
  {title: "img1", src: "/images/asset9.jpeg", link: ""},
  {title: "img1", src: "/images/asset10.jpeg", link: ""},
  {title: "img1", src: "/images/asset11.jpeg", link: ""},
]


const amazingCarousel = [
  {link: "", src: "/images/asset19.jpg", price: "2032000", offPercent: "20" },
  {link: "", src: "/images/asset20.jpg", price: "449000", offPercent: "22" },
  {link: "", src: "/images/asset21.jpg", price: "299000", offPercent: "47" },
  {link: "", src: "/images/asset22.jpg", price: "219000", offPercent: "27" },
  {link: "", src: "/images/asset23.jpg", price: "65800", offPercent: "26" },
  {link: "", src: "/images/asset24.jpg", price: "399000", offPercent: "21" },
  {link: "", src: "/images/asset25.jpg", price: "4246700", offPercent: "31" },
  {link: "", src: "/images/asset26.jpg", price: "3895000", offPercent: "28" },
  {link: "", src: "/images/asset27.jpg", price: "82650", offPercent: "41" },
  {link: "", src: "/images/asset28.jpg", price: "5999000", offPercent: "45" },
  {link: "", src: "/images/asset29.jpg", price: "1169000", offPercent: "21" },
  {link: "", src: "/images/asset30.jpg", price: "21999000", offPercent: "39" },
]

const superMarketAmazing = [
  {link: "", src: "/images/supermarketamazing1.jpg", offPercent: ""},
  {link: "", src: "/images/supermarketamazing2.jpg", offPercent: ""},
  {link: "", src: "/images/supermarketamazing3.jpg", offPercent: ""},
  {link: "", src: "/images/supermarketamazing4.jpg", offPercent: ""},
  {link: "", src: "/images/supermarketamazing5.jpg", offPercent: ""}

]


const mainMenu = [
  {title: "خودرو، ابزار و تجهیزات صنعتی", link: "", img: "/images/menu/sanati.png", logo: "/images/menu/10.svg", innerTitle: ["تیتر یک", "تیتر دو"], options: ["گزینه یک یک", "گزینه دو", "گزینه سه", "گزینه چهار", "گزینه پنج", "گزینه شش"]},
  {title: "کالای دیجیتال", link: "", img: "/images/menu/digital.png", logo: "/images/menu/11.svg", innerTitle: ["تیتر چهار", "تیتر سه"], options: ["گزینه یک", "گزینه دو", "گزینه سه", "گزینه چهار", "گزینه پنج", "گزینه شش"]},
  {title: "موبایل", link: "", img: "/images/menu/mobile.png", logo: "/images/menu/1.svg", innerTitle: ["تیتر شش", "تیتر پنج"], options: ["گزینه یک", "گزینه دو", "گزینه سه", "گزینه چهار", "گزینه پنج", "گزینه شش"]},
  {title: "مد و پوشاک", link: "", img: "/images/menu/mod.png", logo: "/images/menu/9.svg", innerTitle: ["تیتر هشت", "تیتر هفت"], options: ["گزینه یک", "گزینه دو", "گزینه سه", "گزینه چهار", "گزینه پنج", "گزینه شش"]},
  {title: "کالاهای سوپرمارکتی", link: "", img: "/images/menu/super.png", logo: "/images/menu/8.svg", innerTitle: ["تیتر ده", "تیتر نه"], options: ["گزینه یک", "گزینه دو", "گزینه سه", "گزینه چهار", "گزینه پنج", "گزینه شش"]},
  {title: "محصولات بومی و محلی", link: "", img: "/images/menu/bumi.png", logo: "/images/menu/7.svg", innerTitle: [" یک", "تیتر یازده"], options: ["گزینه یک", "گزینه دو", "گزینه سه", "گزینه چهار", "گزینه پنج", "گزینه شش"]},
  {title: "اسباب بازی، کودک و نوزاد", link: "", img: "/images/menu/toy.png", logo: "/images/menu/6.svg", innerTitle: ["تیتر چهارده", "تیتر سیزده"], options: ["گزینه یک", "گزینه دو", "گزینه سه", "گزینه چهار", "گزینه پنج", "گزینه شش"]},
  {title: "زیبایی و سلامت", link: "", img: "/images/menu/salamat.png", logo: "/images/menu/5.svg", innerTitle: ["تیتر شانزده", "تیتر پانزده"], options: ["گزینه یک", "گزینه دو", "گزینه سه", "گزینه چهار", "گزینه پنج", "گزینه شش"]},
  {title: "خانه و آشپزخانه", link: "", img: "/images/menu/khaneh.png", logo: "/images/menu/4.svg", innerTitle: ["تیتر بیست و یک", "بیست دو"], options: ["گزینه یک", "گزینه دو", "گزینه سه", "گزینه چهار", "گزینه پنج", "گزینه شش"]},
  {title: "کتاب، لوازم تحریر و هنر", link: "", img: "/images/menu/tahrir.png", logo: "/images/menu/3.svg", innerTitle: ["تیتر بیست و سه", "تیتر بیست و دو"], options: ["گزینه یک", "گزینه دو", "گزینه سه", "گزینه چهار", "گزینه پنج", "گزینه شش"]},
  {title: "ورزش و سفر", link: "", img: "/images/menu/safar.png", logo: "/images/menu/2.svg", innerTitle: ["تیتر بیست و پنج", "تیتر بیست و چهار"], options: ["گزینه یک", "گزینه دو", "گزینه سه", "گزینه چهار", "گزینه پنج", "گزینه شش"]},
]




const blog = [
  {title: "پنج کاری که برای ارتقای کامپیوتر می‌توانید انجام دهید", img: "/images/blog/1.jpg"},
  {title: "بررسی هدفون بی‌سیم سامسونگ گلکسی بادز ۲؛ یکی از بهترین‌ها", img: "/images/blog/2.jpg"},
  {title: "بررسی اسپیکر بلوتوثی تسکو TS 2307؛ پرفروش‌ترین اسپیکر تسکو", img: "/images/blog/3.jpg"},
  {title: "بررسی هدفون بی‌سیم وان مور Piston Buds؛ باکیفیت و رضایت‌بخش", img: "/images/blog/4.jpg"},
]

const matto = [
  {title: "امکان تحویل اکسپرس", img: "/images/matto/days-return.svg"},
  {title: "امکان پرداخت در محل", img: "/images/matto/cash-on-delivery.svg"},
  {title: "۷ روز هفته، ۲۴ ساعته", img: "/images/matto/support.svg"},
  {title: "هفت روز ضمانت بازگشت کالا", img: "/images/matto/days-return.svg"},
  {title: "ضمانت اصل بودن کالا", img: "/images/matto/original-products.svg"},

]

const customers = [
  {link: "", img: "/images/customers/digiclub.svg"},
  {link: "", img: "/images/customers/digiexpress.svg"},
  {link: "", img: "/images/customers/digify.svg"},
  {link: "", img: "/images/customers/digikala-business.svg"},
  {link: "", img: "/images/customers/digimag.svg"},
  {link: "", img: "/images/customers/digiMehr.svg"},
  {link: "", img: "/images/customers/diginext.svg"},
  {link: "", img: "/images/customers/digipay.svg"},
  {link: "", img: "/images/customers/digiplus.svg"},
  {link: "", img: "/images/customers/digistyle.svg"},
  {link: "", img: "/images/customers/fidibo.svg"},
  {link: "", img: "/images/customers/ganjeh.svg"},
  {link: "", img: "/images/customers/komodaa.svg"},
  {link: "", img: "/images/customers/magnet.svg"},
  {link: "", img: "/images/customers/pindo.svg"},
  {link: "", img: "/images/customers/smartech.svg"},
  {link: "", img: "/images/customers/jet.svg"},

]

const salesProducts = [
  {link: "", title: "پوشک بچه مولفیکس مدل اقتصادی سایز 4 بسته 72 عددی  ", img: "/images/salesProducts/1.jpg", price: "1000", offPercent: "40"},
  {link: "", title: "هندزفری بلوتوثی مدل  inpods 12", img: "/images/salesProducts/2.jpg", price: "15000", offPercent: "27"},
  {link: "", title: "گوشی موبایل سامسونگ مدل Galaxy A13 دو سیم کارت ظرفیت 64 گیگابایت و رم 4 گیگابایت به همراه شارژر", img: "/images/salesProducts/3.jpg", price: "198000", offPercent: "4"},
  {link: "", title: "پوشک بچه مولفیکس مدل اقتصادی سایز 5 بسته 60 عددی", img: "/images/salesProducts/4.jpg", price: "567000", offPercent: "57"},
  {link: "", title: "زعفران درجه یک مصطفوی - 4.608 گرم", img: "/images/salesProducts/5.jpg", price: "1526000", offPercent: "12"},
  {link: "", title: "کنسرو ماهی تون در روغن گیاهی طبیعت - 180 گرم بسته 4 عددی", img: "/images/salesProducts/6.jpg", price: "690000", offPercent: "17"},
  {link: "", title: "کرم مرطوب کننده و آبرسان ایباگ مدل شیر گاو وزن 80 گرم", img: "/images/salesProducts/7.jpg", price: "24000", offPercent: "19"},
  {link: "", title: "هدفون بلوتوثی کیو سی وای مدل T13 TWS", img: "/images/salesProducts/8.jpg", price: "78000", offPercent: "40"},
  {link: "", title: "پنیر فتا دوشه هراز- 400 گرم", img: "/images/salesProducts/9.jpg", price: "55000", offPercent: "31"},
  {link: "", title: "خامه صباح - 200 میلی لیتر", img: "/images/salesProducts/10.jpg", price: "5500", offPercent: "50"},
  {link: "", title: "پنیر تازه پاک - 400 گرم", img: "/images/salesProducts/11.jpg", price: "2000", offPercent: "50"},
  {link: "", title: "روغن آفتابگردان حاوی توکوفرول غنچه پلاس - 1800 میلی لیتر", img: "/images/salesProducts/12.jpg", price: "62400", offPercent: "70"},
  {link: "", title: "کنسرو ماهی تون مکنزی در روغن گیاهی - 180 گرم", img: "/images/salesProducts/13.jpg", price: "609000", offPercent: "27"},
  {link: "", title: "گوشی موبایل سامسونگ مدل Galaxy A13 دو سیم کارت ظرفیت 128 گیگابایت و رم 4 گیگابایت به همراه شارژر", img: "/images/salesProducts/14.jpg", price: "50000", offPercent: "22"},
  {link: "", title: "روغن آفتابگردان حاوی توکوفرول غنچه پلاس", img: "/images/salesProducts/15.jpg", price: "43000", offPercent: "10"},

]


const brands = [
  {title: "", logo: "/images/brands/1.png", link: ""},
  {title: "", logo: "/images/brands/2.png", link: ""},
  {title: "", logo: "/images/brands/3.png", link: ""},
  {title: "", logo: "/images/brands/4.jpg", link: ""},
  {title: "", logo: "/images/brands/5.jpg", link: ""},
  {title: "", logo: "/images/brands/6.png", link: ""},
  {title: "", logo: "/images/brands/7.png", link: ""},
  {title: "", logo: "/images/brands/8.png", link: ""},
  {title: "", logo: "/images/brands/9.png", link: ""},
  {title: "", logo: "/images/brands/10.jpg", link: ""},
  {title: "", logo: "/images/brands/11.png", link: ""},
  {title: "", logo: "/images/brands/12.png", link: ""},
  {title: "", logo: "/images/brands/13.png", link: ""},
  {title: "", logo: "/images/brands/14.jpg", link: ""},
  {title: "", logo: "/images/brands/15.png", link: ""},
  {title: "", logo: "/images/brands/16.png", link: ""},
  {title: "", logo: "/images/brands/17.jpg", link: ""},
  {title: "", logo: "/images/brands/18.jpg", link: ""},
  {title: "", logo: "/images/brands/19.png", link: ""},


]

const suggestions = [
  {title: "گوشی موبایل", link: "", img: "/images/suggestions/1.webp"},
  {title: "هدفون، هدست و هندزفری", link: "", img: "/images/suggestions/2.webp"},
  {title: "لپ تاپ و الترابوک", link: "", img: "/images/suggestions/3.webp"},
  {title: "ماوس (موشواره)", link: "", img: "/images/suggestions/4.webp"},
  {title: "کنسول خانگی", link: "", img: "/images/suggestions/5.webp"},
  {title: "اسپیکر (بلندگو)", link: "", img: "/images/suggestions/6.webp"},
  {title: "کیبورد (صفحه کلید)", link: "", img: "/images/suggestions/7.webp"},
  {title: "کیف و کاور گوشی", link: "", img: "/images/suggestions/8.webp"},
  {title: "ساعت هوشمند", link: "", img: "/images/suggestions/9.webp"},
  {title: "تبلت", link: "", img: "/images/suggestions/10.webp"},
  {title: "جوراب مردانه", link: "", img: "/images/suggestions/11.webp"},
  {title: "آشنایی با فنون", link: "", img: "/images/suggestions/12.webp"},
  {title: "جوراب زنانه", link: "", img: "/images/suggestions/13.webp"},
  {title: "ماساژور", link: "", img: "/images/suggestions/14.webp"},

]

export default function Home() {

  const [currentIndex, setCurrentIndex] = useState(0);
  const [open, setOpen] = useState(false);
  const [currentMenu, setCurrentMenu] = useState(0);
  const [openSmallMenu, setOpenSmallMenu] = useState(false);

  const previous = (prop) => {
    if (currentIndex < carousel.length - 1) {
      const isFirstSlide = currentIndex === 0;
      const newIndex = isFirstSlide ? prop - 1 : currentIndex - 1;
      setCurrentIndex(newIndex);
    } else setCurrentIndex(0)
  }
  
  const next = (prop) => {
    if (currentIndex < carousel.length -1 ) {
      const isLastSlide = currentIndex === prop - 1;
      const newIndex = isLastSlide ? 0 : currentIndex + 1;
      setCurrentIndex(newIndex)
    } else setCurrentIndex(0)
  }

  setTimeout(() => {
    const isLastSlide = currentIndex === carousel.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
    }, 10000)
  

  const ConvertToArabicNumbers = (num) => {
    const arabicNumbers = '\u0660\u0661\u0662\u0663\u0664\u0665\u0666\u0667\u0668\u0669';
   return new String(num).replace(/[0123456789]/g, (d)=>{return arabicNumbers[d]});
  }


  if (typeof window === "object") {




  const nav = document.querySelector(".nav");
  let lastScrollY = window.scrollY;
  
  window.addEventListener("scroll", () => {
    if (lastScrollY < window.scrollY) {
        if (lastScrollY > 300) {
  
      nav.classList.add("nav--hidden");
    }
    } else {
      nav.classList.remove("nav--hidden");
    }
  
    lastScrollY = window.scrollY;
  });



  }

  if (typeof window === "object") {
    const body = document.querySelector("body");

    if (open) {
      body.style.overflow = "hidden"
    } else {
      body.style.overflow = "scroll"

    }


  }


  return (
    <div dir='rtl' >
      <Head>
        <title>{"دیجی‌کالا کلون"}</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      


      <header onClick={() => {openSmallMenu && setOpenSmallMenu(false)}} className='lg:fixed w-full flex flex-col font-IRANYekan z-[100] bg-white  '>
        {/* Header Sales Image */}
   
        <Link  target="_blank" href="" height="35" className={`w-[100%] h-[60px] `}>
          <Image className='w-full h-[60px] bg-cover object-cover max-lg:hidden' height={60}  src={asset0} alt="" title=""/>
          <Image className='w-full h-[60px] bg-cover object-cover lg:hidden' height={60}  src={asset00} alt="" title=""/>

        </Link>
      {/* Responsive first line */}
        <div className='lg:hidden flex justify-between items-center mx-[15px] pb-3 pt-3 border-b-[1px] border-[#ecf0ee]'>
          <svg onClick={() => setOpenSmallMenu(true)} fillRule="evenodd" className=' mt-[2px] cursor-pointer' width="20px" height="20px"><path  d="M19 8V6H5v2h14zm0 3v2H5v-2h14zm0 5v2H5v-2h14z" clip-rule="evenodd"></path></svg>
          <svg fillRule="evenodd" className={` mr-4`} width="90" height="30" viewBox="0 0 115 30" fill='#ee384e'><path d="M76.916 19.024h6.72v-8.78h-6.72c-1.16 0-2.24 1.061-2.24 2.195v4.39c0 1.134 1.08 2.195 2.24 2.195zm26.883 0h6.72v-8.78h-6.72c-1.16 0-2.24 1.061-2.24 2.195v4.39c0 1.134 1.08 2.195 2.24 2.195zM88.117 6.951v15.366c0 .484-.625 1.098-1.12 1.098l-2.24.023c-.496 0-1.12-.637-1.12-1.12v-.733l-1.017 1.196c-.31.413-1.074.634-1.597.634h-4.107c-3.604 0-6.721-3.063-6.721-6.586v-4.39c0-3.523 3.117-6.585 6.72-6.585h10.082c.495 0 1.12.613 1.12 1.097zm26.883 0v15.366c0 .484-.624 1.098-1.12 1.098l-2.24.023c-.496 0-1.12-.637-1.12-1.12v-.733l-1.017 1.196c-.31.413-1.074.634-1.597.634h-4.107c-3.604 0-6.721-3.063-6.721-6.586v-4.39c0-3.523 3.117-6.585 6.72-6.585h10.082c.495 0 1.12.613 1.12 1.097zm-74.675 3.293h-6.721c-1.16 0-2.24 1.061-2.24 2.195v4.39c0 1.134 1.08 2.195 2.24 2.195h6.72v-8.78zm4.48-3.293V23.78c0 3.523-3.117 6.22-6.72 6.22H34.62c-.515 0-1-.236-1.311-.638l-1.972-2.55c-.327-.424-.144-1.202.399-1.202h6.347c1.16 0 2.24-.696 2.24-1.83v-.365h-6.72c-3.604 0-6.72-3.063-6.72-6.586v-4.39c0-3.523 3.116-6.585 6.72-6.585h4.107c.514 0 1.074.405 1.437.731l1.177 1.098V6.95c0-.483.625-1.097 1.12-1.097h2.24c.496 0 1.12.613 1.12 1.097zM4.481 16.83c0 1.134 1.08 2.195 2.24 2.195h6.72v-8.78h-6.72c-1.16 0-2.24 1.061-2.24 2.195v4.39zM16.8 0c.497 0 1.121.613 1.121 1.098v21.22c0 .483-.624 1.097-1.12 1.097h-2.24c-.496 0-1.12-.613-1.12-1.098v-.732l-1.175 1.232c-.318.346-.932.598-1.44.598H6.722C3.117 23.415 0 20.352 0 16.829v-4.356c0-3.523 3.117-6.62 6.72-6.62h6.722V1.099c0-.485.624-1.098 1.12-1.098h2.24zm46.3 14.634L69.336 6.9c.347-.421.04-1.048-.513-1.048h-3.566c-.27 0-.525.119-.696.323l-6.314 7.727V1.098c0-.485-.625-1.098-1.12-1.098h-2.24c-.496 0-1.12.613-1.12 1.098v21.22c0 .483.624 1.097 1.12 1.097h2.24c.495 0 1.12-.614 1.12-1.098v-6.951l6.317 7.744c.17.207.428.328.7.328h3.562c.554 0 .86-.627.514-1.048l-6.24-7.756zM48.166 0c-.496 0-1.12.613-1.12 1.098v2.195c0 .484.624 1.097 1.12 1.097h2.24c.495 0 1.12-.613 1.12-1.097V1.098c0-.485-.625-1.098-1.12-1.098h-2.24zm0 5.854c-.496 0-1.12.613-1.12 1.097v15.366c0 .484.8 1.12 1.295 1.12l2.065-.022c.495 0 1.12-.614 1.12-1.098V6.951c0-.484-.625-1.097-1.12-1.097h-2.24zM21.282 0c-.495 0-1.12.613-1.12 1.098v2.195c0 .484.625 1.097 1.12 1.097h2.24c.496 0 1.12-.613 1.12-1.097V1.098c0-.485-.624-1.098-1.12-1.098h-2.24zm0 5.854c-.495 0-1.12.613-1.12 1.097v15.366c0 .484.625 1.098 1.12 1.098h2.24c.496 0 1.12-.614 1.12-1.098V6.951c0-.484-.624-1.097-1.12-1.097h-2.24zm73.556-4.756v21.22c0 .483-.625 1.097-1.12 1.097h-2.24c-.496 0-1.12-.614-1.12-1.098V1.097c0-.484.624-1.097 1.12-1.097h2.24c.495 0 1.12.613 1.12 1.098z" transform="translate(-1235 -19) translate(-238) translate(1473 19)" /></svg>
          <svg fillRule="evenodd" className='' width="24px" height="24px"><path fill='black' viewBox="0 0 24 24"  d="M8 2h8a6 6 0 016 6v8a6 6 0 01-6 6H8a6 6 0 01-6-6V8a6 6 0 016-6zm0 2a4 4 0 00-4 4v8a4 4 0 004 4h8a4 4 0 004-4V8a4 4 0 00-4-4H8zm2 6H8V9a3 3 0 013-3h2a3 3 0 013 3v.93a3 3 0 01-1.336 2.496l-1.219.812a1 1 0 00-.445.832V15h-2v-.93a3 3 0 011.336-2.496l1.219-.812A1 1 0 0014 9.93V9a1 1 0 00-1-1h-2a1 1 0 00-1 1v1zm1 6h2v2h-2v-2z" clip-rule="evenodd"></path></svg>
        </div>


        <div className={`flex mb-4`}>
        {/* Logo */}
        <svg fillRule="evenodd" className={`mt-5 mr-4 max-lg:hidden`} width="115" height="30" viewBox="0 0 115 30" fill='#ee384e'><path d="M76.916 19.024h6.72v-8.78h-6.72c-1.16 0-2.24 1.061-2.24 2.195v4.39c0 1.134 1.08 2.195 2.24 2.195zm26.883 0h6.72v-8.78h-6.72c-1.16 0-2.24 1.061-2.24 2.195v4.39c0 1.134 1.08 2.195 2.24 2.195zM88.117 6.951v15.366c0 .484-.625 1.098-1.12 1.098l-2.24.023c-.496 0-1.12-.637-1.12-1.12v-.733l-1.017 1.196c-.31.413-1.074.634-1.597.634h-4.107c-3.604 0-6.721-3.063-6.721-6.586v-4.39c0-3.523 3.117-6.585 6.72-6.585h10.082c.495 0 1.12.613 1.12 1.097zm26.883 0v15.366c0 .484-.624 1.098-1.12 1.098l-2.24.023c-.496 0-1.12-.637-1.12-1.12v-.733l-1.017 1.196c-.31.413-1.074.634-1.597.634h-4.107c-3.604 0-6.721-3.063-6.721-6.586v-4.39c0-3.523 3.117-6.585 6.72-6.585h10.082c.495 0 1.12.613 1.12 1.097zm-74.675 3.293h-6.721c-1.16 0-2.24 1.061-2.24 2.195v4.39c0 1.134 1.08 2.195 2.24 2.195h6.72v-8.78zm4.48-3.293V23.78c0 3.523-3.117 6.22-6.72 6.22H34.62c-.515 0-1-.236-1.311-.638l-1.972-2.55c-.327-.424-.144-1.202.399-1.202h6.347c1.16 0 2.24-.696 2.24-1.83v-.365h-6.72c-3.604 0-6.72-3.063-6.72-6.586v-4.39c0-3.523 3.116-6.585 6.72-6.585h4.107c.514 0 1.074.405 1.437.731l1.177 1.098V6.95c0-.483.625-1.097 1.12-1.097h2.24c.496 0 1.12.613 1.12 1.097zM4.481 16.83c0 1.134 1.08 2.195 2.24 2.195h6.72v-8.78h-6.72c-1.16 0-2.24 1.061-2.24 2.195v4.39zM16.8 0c.497 0 1.121.613 1.121 1.098v21.22c0 .483-.624 1.097-1.12 1.097h-2.24c-.496 0-1.12-.613-1.12-1.098v-.732l-1.175 1.232c-.318.346-.932.598-1.44.598H6.722C3.117 23.415 0 20.352 0 16.829v-4.356c0-3.523 3.117-6.62 6.72-6.62h6.722V1.099c0-.485.624-1.098 1.12-1.098h2.24zm46.3 14.634L69.336 6.9c.347-.421.04-1.048-.513-1.048h-3.566c-.27 0-.525.119-.696.323l-6.314 7.727V1.098c0-.485-.625-1.098-1.12-1.098h-2.24c-.496 0-1.12.613-1.12 1.098v21.22c0 .483.624 1.097 1.12 1.097h2.24c.495 0 1.12-.614 1.12-1.098v-6.951l6.317 7.744c.17.207.428.328.7.328h3.562c.554 0 .86-.627.514-1.048l-6.24-7.756zM48.166 0c-.496 0-1.12.613-1.12 1.098v2.195c0 .484.624 1.097 1.12 1.097h2.24c.495 0 1.12-.613 1.12-1.097V1.098c0-.485-.625-1.098-1.12-1.098h-2.24zm0 5.854c-.496 0-1.12.613-1.12 1.097v15.366c0 .484.8 1.12 1.295 1.12l2.065-.022c.495 0 1.12-.614 1.12-1.098V6.951c0-.484-.625-1.097-1.12-1.097h-2.24zM21.282 0c-.495 0-1.12.613-1.12 1.098v2.195c0 .484.625 1.097 1.12 1.097h2.24c.496 0 1.12-.613 1.12-1.097V1.098c0-.485-.624-1.098-1.12-1.098h-2.24zm0 5.854c-.495 0-1.12.613-1.12 1.097v15.366c0 .484.625 1.098 1.12 1.098h2.24c.496 0 1.12-.614 1.12-1.098V6.951c0-.484-.624-1.097-1.12-1.097h-2.24zm73.556-4.756v21.22c0 .483-.625 1.097-1.12 1.097h-2.24c-.496 0-1.12-.614-1.12-1.098V1.097c0-.484.624-1.097 1.12-1.097h2.24c.495 0 1.12.613 1.12 1.098z" transform="translate(-1235 -19) translate(-238) translate(1473 19)" /></svg>

        {/* Search Input */}
<div className='w-full   '>
<div className="block relative max-lg:ml-[170px] lg:ml-[350px]">
<svg fillRule="evenodd" className={`absolute mt-[23px] mr-6`}  fill="#777891" width="24px" height="24px"><path  d="M10.5 18a7.5 7.5 0 115.973-2.963l4.369 4.246-1.394 1.434-4.387-4.263A7.467 7.467 0 0110.5 18zm5.5-7.5a5.5 5.5 0 11-11 0 5.5 5.5 0 0111 0z" clip-rule="evenodd"></path></svg>
        <input className="w-full mt-3 mr-3  placeholder:text-[#777891] text-[12px] font-[400]  h-[45px] text-[#8e8fa4] outline-none bg-[#f1f2f4] rounded-lg indent-[50px] " placeholder={"جستجو"}/>
</div>
</div>


        {/* Login Button */}

<div className='flex absolute lg:left-[80px] max-lg:left-[50px]  whitespace-nowrap gap-3 w-fit border-[1px] mt-3 max-lg:border-none border-[#f1f2f4] sm:px-5  rounded-lg h-[45px] justify-center text-center items-center'>
<svg fillRule="evenodd" width="24px" height="24px" viewBox="0 0 24 24" fill='#3f4064'><path  d="M16 15h-2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V7a2 2 0 012-2h6a2 2 0 012 2v2h2V7a4 4 0 00-4-4H6a4 4 0 00-4 4v10a4 4 0 004 4h6a4 4 0 004-4v-2zm6-4H9.414l2.293-2.293-1.414-1.414-4 4a1 1 0 000 1.414l4 4 1.414-1.414L9.414 13H22v-2z" clip-rule="evenodd"></path></svg>
<Link className='text-[12px] font-[700]   ' href=""><span className='max-lg:hidden'>{"ورود | ثبت‌نام"}</span><span className='lg:hidden'>{"ورود  "}</span></Link>
</div>

        {/* Cart Icon */}

<div className='flex absolute lg:left-6 max-lg:left-[15px]  float-left '>
  <div className='border-r-[1px] mt-5 h-[30px] mr-[15px] border-[#f1f2f4] max-lg:hidden'></div>
<svg fillRule="evenodd" className='mt-6 mr-[15px] pr-[-10px] ' height="24px" width="24px"><path fill='#3f4064'  d="M20 4h2V2h-3a1 1 0 00-1 1v1H3a1 1 0 00-.995 1.1l1 10A1 1 0 004 16h15a1 1 0 001-1V4zm-2 17a2 2 0 110-4 2 2 0 010 4zM5 21a2 2 0 110-4 2 2 0 010 4zm13-7V6H4.105l.8 8H18z" clip-rule="evenodd"></path></svg>
</div>


        </div>
      {/* Last Line Responsive */}
        <div className='flex mx-[15px] lg:hidden border-t-[1px] pb-3 pt-3 mt-3 border-[#ecf0ee]'>
      <svg fillRule="evenodd" width="24px" height="24px" fill='#f9a825'><path  d="M4 9.611C4 5.391 7.59 2 12 2s8 3.39 8 7.611c0 2.818-1.425 5.518-3.768 8.034a23.496 23.496 0 01-2.514 2.322c-.517.413-.923.706-1.166.867L12 21.2l-.552-.366c-.243-.16-.65-.454-1.166-.867a23.499 23.499 0 01-2.514-2.322C5.425 15.129 4 12.428 4 9.61zm8.47 8.794c.784-.627 1.569-1.34 2.298-2.124C16.8 14.101 18 11.827 18 9.611 18 6.521 15.33 4 12 4S6 6.522 6 9.611c0 2.215 1.2 4.49 3.232 6.67A21.536 21.536 0 0012 18.769c.148-.111.305-.233.47-.364zM12 14a4.001 4.001 0 010-8 4.001 4.001 0 010 8zm0-2a2.001 2.001 0 000-4 2.001 2.001 0 000 4z" clip-rule="evenodd"></path></svg>
      <Link className='text-[12px] font-[500] mr-1 text-[#777891] mt-1' href="">{"لطفا شهر خود را انتخاب کنید"}</Link>
      <svg fillRule="evenodd" className='absolute left-[15px] h-[20px] w-6' fill='black'><path d="M11.414 12l4.293 4.293-1.414 1.414-5-5a1 1 0 010-1.414l5-5 1.414 1.414L11.414 12z"></path></svg>

  </div>
                {/* Menu / Hambergur Menu */}






      </header>

<nav  className={`nav flex border-b-[1px] z-[90]  border-b-[#8e8fa4]  h-[35px] max-lg:hidden transition duration-1000 animate-appear `}>

  <div onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}  className='flex hover:border-b-[#ee384e] pb-2 mt-[3px] hover:border-b-[2px] border-b-[2px] border-b-[#fff] transition duration-100 rounded-b-sm'>
    <svg fillRule="evenodd" className='mt-[2px]' width="20px" height="20px"><path  d="M19 8V6H5v2h14zm0 3v2H5v-2h14zm0 5v2H5v-2h14z" clip-rule="evenodd"></path></svg>
    <Link className='flex justify-center items-center text-[12px] font-[700] mt-1 ' href="">{"دسته‌بندی کالاها"}</Link>
  </div>

  <div className='border-r-[1px] mt-1  h-[20px] mr-[20px] border-[#f1f2f4]'></div>

  <div className='flex gap-3 mr-3 '>
    <div className=' hover:border-b-[#ee384e] h-[35px] hover:border-b-[2px] transition duration-100 rounded-b-sm'>
      <Link className='flex justify-center items-center text-[11px]  font-[500] mr-1 text-[#8e8fa4] mt-1' href="">
      <svg fillRule="evenodd" className='inline ml-1' width="24px" height="24px"><path fill='#8e8fa4'  d="M18 4a2 2 0 00-2-2h-3a2 2 0 00-2 2v1.535a4.007 4.007 0 00-1.874 2.467A5.108 5.108 0 009 8l-.217.005A5 5 0 004 13H3a1 1 0 00-.99 1.141l1 7A1 1 0 004 22h16a1 1 0 00.99-.859l1-7A1 1 0 0021 13h-1V9l-.007-.232a4 4 0 00-1.992-3.232L18 4zM4.867 20l-.714-5h15.694l-.714 5H4.867zM16 7h-3a2 2 0 00-1.924 1.45 5.003 5.003 0 012.919 4.318L14 13h4V9a2 2 0 00-1.85-1.995L16 7zm-9.995 5.824A3 3 0 0112 13H6l.005-.176zM16 4h-3v1h3V4zm-1 14v-2H9v2h6z" clip-rule="evenodd"></path></svg>
        {"سوپرمارکت"}</Link>
    </div>
    <div className=' hover:border-b-[#ee384e] h-[35px] hover:border-b-[2px] transition duration-100 rounded-b-sm'>
      <Link className='flex justify-center items-center text-[11px] font-[500] mr-1 text-[#8e8fa4] mt-1  ' href="">
    <svg fillRule="evenodd" className='inline ml-1' width="24px" height="24px"><path fill='#8e8fa4'  d="M12.015 9.105c.222.397.41.73.466.842.361.724.519 1.31.519 2.053a2 2 0 01-4 0l.003-4.557c0-.953-1.206-1.367-1.79-.613C5.087 9.572 4 11.906 4 13.889 4 18.365 7.578 22 12 22c4.422 0 8-3.635 8-8.111 0-2.968-2.45-6.78-7.295-11.598a1 1 0 00-1.6.262c-.807 1.615-.807 3.28 0 4.894.178.356.582 1.076.91 1.658zM7 12a4 4 0 108 0c0-1.078-.238-1.962-.73-2.947-.079-.156-.31-.569-.566-1.024a50.532 50.532 0 01-.81-1.476c-.273-.546-.404-1.079-.393-1.612C16.18 8.811 18 11.834 18 13.889 18 17.267 15.31 20 12 20s-6-2.733-6-6.111c0-.87.33-1.925 1-3.154V12z" clip-rule="evenodd"></path></svg>
        {"پرفروش‌ترین‌ها"}</Link>
    </div>
    <div className=' hover:border-b-[#ee384e] h-[35px] hover:border-b-[2px] transition duration-100 rounded-b-sm'>
      <Link className='flex justify-center items-center text-[11px] font-[500] mr-1 text-[#8e8fa4] mt-1  ' href="">
    <svg fillRule="evenodd" className='inline ml-1' width="24px" height="24px"><path fill='#8e8fa4'  d="M22 4a1 1 0 011 1v14a1 1 0 01-1 1H6a1 1 0 01-.707-.293l-4-4A1 1 0 011 15V9a1 1 0 01.293-.707l4-4A1 1 0 016 4h16zm-1 2H6.414L3 9.414v5.172L6.414 18H21V6zm-6 3.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm2.5 6.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM10 12a3 3 0 11-6 0 3 3 0 016 0zm-4 0a1 1 0 102 0 1 1 0 00-2 0zm12.848-3.47l-5 8-1.696-1.06 5-8 1.696 1.06z" clip-rule="evenodd"></path></svg>
        {"تخفیف‌ها و پیشنهادها"}</Link>
    </div>
    <div className=' hover:border-b-[#ee384e] h-[35px] hover:border-b-[2px] transition duration-100 rounded-b-sm'>
      <Link className='flex justify-center items-center text-[11px] font-[500] mr-1 text-[#8e8fa4] mt-1  ' href="">
      <svg fillRule="evenodd" className='inline ml-1' width="24px" height="24px"><path fill='#8e8fa4'  d="M15.112 2.234c.687.231 1.153.525 1.895 1.171l.536.474.109.09.142.104.653.42c.837.54 1.244.9 1.663 1.495.381.542.579 1 .794 1.841l.226.941.053.185.049.142.285.719c.36.914.483 1.457.483 2.184 0 .728-.124 1.27-.483 2.184l-.246.615-.08.22-.06.211-.227.941c-.215.842-.413 1.3-.795 1.843-.416.59-.822.95-1.646 1.483l-.67.431-.14.104-.176.147-.471.417c-.742.646-1.208.94-1.898 1.172-.688.23-1.206.272-2.224.199l-.687-.052-.197-.006-.086.001-.212.01-.586.047c-1.018.073-1.537.03-2.23-.201-.686-.231-1.152-.524-1.893-1.17l-.594-.522-.144-.111-.103-.072-.619-.395c-.821-.532-1.229-.894-1.643-1.483-.417-.593-.614-1.085-.855-2.085l-.146-.621-.061-.225-.06-.179-.285-.719C2.123 13.27 2 12.729 2 12c0-.727.124-1.27.483-2.184l.285-.717.082-.258.039-.147.146-.621.118-.46c.195-.707.39-1.131.737-1.624.414-.59.82-.95 1.643-1.483l.552-.352.153-.104.16-.123.124-.105.47-.417c.743-.646 1.209-.94 1.897-1.171.69-.232 1.209-.274 2.227-.2l.7.052.228.005.275-.013.564-.044c1.02-.074 1.539-.031 2.229.2zm-1.931 1.784l-.89.065c-.105.006-.2.008-.291.008l-.275-.007-.156-.009-.563-.044-.385-.024c-.514-.024-.767.012-1.094.122l-.108.039c-.35.132-.62.313-1.138.767l-.55.486-.155.125-.142.107-.23.158-.72.462c-.517.343-.733.545-.958.866-.23.326-.347.596-.51 1.247l-.193.815-.05.19-.05.17-.094.271-.345.87C4.061 11.287 4 11.594 4 12l.002.12c.012.35.082.65.282 1.18l.37.934.07.21.074.257.219.914c.162.65.28.92.51 1.247.247.352.485.564 1.121.973l.559.356c.118.077.204.138.296.207l.073.056.241.2.464.411c.569.5.839.67 1.241.805.404.135.694.159 1.484.1l.306-.025.555-.034.133-.002c.09 0 .186.003.291.008l.166.01.536.043c.79.059 1.08.035 1.478-.098.407-.138.678-.308 1.247-.807l.387-.344.212-.182.181-.142.186-.133.108-.073.721-.462c.518-.342.735-.546.96-.866.25-.357.367-.644.554-1.431l.091-.391c.032-.138.059-.245.084-.34l.075-.26.094-.273.345-.869c.223-.587.284-.894.284-1.299 0-.405-.061-.712-.284-1.299l-.37-.934-.095-.293-.075-.274-.149-.631-.098-.39c-.109-.402-.203-.64-.34-.865l-.115-.175c-.226-.32-.441-.523-.96-.866l-.624-.4a7.664 7.664 0 01-.255-.17l-.212-.157-.155-.126-.697-.613c-.42-.357-.669-.516-.977-.634l-.218-.074c-.322-.098-.603-.12-1.195-.081zM16 15.5a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0zm-1.8-8.1l1.6 1.2-6 8-1.6-1.2 6-8zM11 8.5a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0z" clip-rule="evenodd"></path></svg>
        {"شگفت‌انگیزها"}</Link>
    </div>


  <div className='border-r-[1px] mt-[3px] h-[20px] border-[#f1f2f4]'></div>

    <Link className='text-[10px] font-[500] mt-2  text-[#777891] hover:border-b-[#ee384e] pb-2 hover:border-b-[2px] transition duration-100 rounded-b-sm' href="">{"سوالی دارید؟"}</Link>
    <Link className='text-[10px] font-[500] mt-2 mr-1 text-[#777891] hover:border-b-[#ee384e] pb-2 hover:border-b-[2px] transition duration-100 rounded-b-sm' href="">{" در دیجی‌کالا بفروشید!"}</Link>

  </div>



  <div className='flex absolute mt-0 left-7 float-left '>
      <svg fillRule="evenodd" width="24px" height="24px"><path  d="M4 9.611C4 5.391 7.59 2 12 2s8 3.39 8 7.611c0 2.818-1.425 5.518-3.768 8.034a23.496 23.496 0 01-2.514 2.322c-.517.413-.923.706-1.166.867L12 21.2l-.552-.366c-.243-.16-.65-.454-1.166-.867a23.499 23.499 0 01-2.514-2.322C5.425 15.129 4 12.428 4 9.61zm8.47 8.794c.784-.627 1.569-1.34 2.298-2.124C16.8 14.101 18 11.827 18 9.611 18 6.521 15.33 4 12 4S6 6.522 6 9.611c0 2.215 1.2 4.49 3.232 6.67A21.536 21.536 0 0012 18.769c.148-.111.305-.233.47-.364zM12 14a4.001 4.001 0 010-8 4.001 4.001 0 010 8zm0-2a2.001 2.001 0 000-4 2.001 2.001 0 000 4z" clip-rule="evenodd"></path></svg>
      <Link className='text-[11px] font-[500] mr-1 text-[#777891] mt-1' href="">{"لطفا شهر خود را انتخاب کنید"}</Link>

  </div>

</nav>






{/* Big Screen Menu */}
<div onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)} className={`max-lg:hidden fixed right-0 top-[166px] ${!open && "hidden"} h-[500px] w-[96%] bg-white drop-shadow-lg z-[100] justify-center items-center ml-[2%] mr-[2%] overflow-scroll`}>

<div className='flex '>

<div className="flex flex-col">
{mainMenu && mainMenu.map(({title, logo, innerTitle, options},index) => 
  <div onMouseEnter={() => setCurrentMenu(index)} className='flex relative pr-3 pt-3 gap-2 h-[60px] w-[200px] hover:bg-[#f1f2f46a] hover:text-[#ee384e]  text-[15px] cursor-pointer overflow-scroll border-l-[1px] border-[#f1f2f4] '>
  <Image key={index} className='z-[120] relative hover:fill-[#ee384e]' src={logo} width={24} height={24}/>
  <p className='flex'>{title}</p>
    </div>)}
    </div>
  
    <div className='flex flex-col'>

    <div className='flex mr-[20px] mt-5'>
  <p className=''>{`همه محصولات ${mainMenu && mainMenu[currentMenu].title}`} </p>
  <svg fillRule="evenodd" className=' h-[20px] w-6' fill='black'><path d="M11.414 12l4.293 4.293-1.414 1.414-5-5a1 1 0 010-1.414l5-5 1.414 1.414L11.414 12z"></path></svg>
  </div>

<div className='flex'>
  
{mainMenu && mainMenu[currentMenu].innerTitle.map((item, index) => 
<div>
  <p className='border-r-[2px] border-[#ee384e] pr-2 mr-5 mt-5'>{item}</p>
  {    mainMenu[currentMenu].options.map((item, index) => <p className='text-[12px] font-[400] text-[#777891] mr-7 mt-2 gap-2'>{item}</p>)}
</div>

  )}
</div>


  
  
  
  </div>

    </div>

</div>

{/* Small Screen menu */}
<div className={`lg:hidden fixed right-0 top-0  w-[90%] h-[100vh] bg-white z-[150] ${!openSmallMenu && "hidden"} overflow-scroll drop-shadow-lg`}>
        <Link  target="_blank" href=""  className={`block object-cover`}>
          <Image className={`w-[100px] mr-5 mt-5 object-cover `} height={90} width={90} src={logo} alt="" title=""/>
        </Link>
        <div className='  h-[1px] w-[90%] ml-[5%] mr-[5%] mt-5 bg-[#f1f2f4]'></div>

        <div className='flex flex-col gap-1 mr-4 mt-4 '>
    <div className='  h-[35px]  rounded-b-sm'>
      <Link className='flex text-[13px]  font-[500] mr-1 text-[#000] mt-1' href="">
      <svg fillRule="evenodd" className='inline ml-1' width="24px" height="24px"><path fill='#8e8fa4'  d="M18 4a2 2 0 00-2-2h-3a2 2 0 00-2 2v1.535a4.007 4.007 0 00-1.874 2.467A5.108 5.108 0 009 8l-.217.005A5 5 0 004 13H3a1 1 0 00-.99 1.141l1 7A1 1 0 004 22h16a1 1 0 00.99-.859l1-7A1 1 0 0021 13h-1V9l-.007-.232a4 4 0 00-1.992-3.232L18 4zM4.867 20l-.714-5h15.694l-.714 5H4.867zM16 7h-3a2 2 0 00-1.924 1.45 5.003 5.003 0 012.919 4.318L14 13h4V9a2 2 0 00-1.85-1.995L16 7zm-9.995 5.824A3 3 0 0112 13H6l.005-.176zM16 4h-3v1h3V4zm-1 14v-2H9v2h6z" clip-rule="evenodd"></path></svg>
        {"سوپرمارکت"}</Link>
    </div>
    <div className='  h-[35px]  rounded-b-sm'>
      <Link className='flex text-[13px] font-[500] mr-1 text-[#000] mt-1  ' href="">
    <svg fillRule="evenodd" className='inline ml-1' width="24px" height="24px"><path fill='#8e8fa4'  d="M12.015 9.105c.222.397.41.73.466.842.361.724.519 1.31.519 2.053a2 2 0 01-4 0l.003-4.557c0-.953-1.206-1.367-1.79-.613C5.087 9.572 4 11.906 4 13.889 4 18.365 7.578 22 12 22c4.422 0 8-3.635 8-8.111 0-2.968-2.45-6.78-7.295-11.598a1 1 0 00-1.6.262c-.807 1.615-.807 3.28 0 4.894.178.356.582 1.076.91 1.658zM7 12a4 4 0 108 0c0-1.078-.238-1.962-.73-2.947-.079-.156-.31-.569-.566-1.024a50.532 50.532 0 01-.81-1.476c-.273-.546-.404-1.079-.393-1.612C16.18 8.811 18 11.834 18 13.889 18 17.267 15.31 20 12 20s-6-2.733-6-6.111c0-.87.33-1.925 1-3.154V12z" clip-rule="evenodd"></path></svg>
        {"پرفروش‌ترین‌ها"}</Link>
    </div>
    <div className='  h-[35px] rounded-b-sm'>
      <Link className='flex text-[13px] font-[500] mr-1 text-[#000] mt-1  ' href="">
    <svg fillRule="evenodd" className='inline ml-1' width="24px" height="24px"><path fill='#8e8fa4'  d="M22 4a1 1 0 011 1v14a1 1 0 01-1 1H6a1 1 0 01-.707-.293l-4-4A1 1 0 011 15V9a1 1 0 01.293-.707l4-4A1 1 0 016 4h16zm-1 2H6.414L3 9.414v5.172L6.414 18H21V6zm-6 3.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm2.5 6.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM10 12a3 3 0 11-6 0 3 3 0 016 0zm-4 0a1 1 0 102 0 1 1 0 00-2 0zm12.848-3.47l-5 8-1.696-1.06 5-8 1.696 1.06z" clip-rule="evenodd"></path></svg>
        {"تخفیف‌ها و پیشنهادها"}</Link>
    </div>
    <div className='  h-[35px]  rounded-b-sm'>
      <Link className='flex text-[13px] font-[500] mr-1 text-[#000] mt-1  ' href="">
      <svg fillRule="evenodd" className='inline ml-1' width="24px" height="24px"><path fill='#8e8fa4'  d="M15.112 2.234c.687.231 1.153.525 1.895 1.171l.536.474.109.09.142.104.653.42c.837.54 1.244.9 1.663 1.495.381.542.579 1 .794 1.841l.226.941.053.185.049.142.285.719c.36.914.483 1.457.483 2.184 0 .728-.124 1.27-.483 2.184l-.246.615-.08.22-.06.211-.227.941c-.215.842-.413 1.3-.795 1.843-.416.59-.822.95-1.646 1.483l-.67.431-.14.104-.176.147-.471.417c-.742.646-1.208.94-1.898 1.172-.688.23-1.206.272-2.224.199l-.687-.052-.197-.006-.086.001-.212.01-.586.047c-1.018.073-1.537.03-2.23-.201-.686-.231-1.152-.524-1.893-1.17l-.594-.522-.144-.111-.103-.072-.619-.395c-.821-.532-1.229-.894-1.643-1.483-.417-.593-.614-1.085-.855-2.085l-.146-.621-.061-.225-.06-.179-.285-.719C2.123 13.27 2 12.729 2 12c0-.727.124-1.27.483-2.184l.285-.717.082-.258.039-.147.146-.621.118-.46c.195-.707.39-1.131.737-1.624.414-.59.82-.95 1.643-1.483l.552-.352.153-.104.16-.123.124-.105.47-.417c.743-.646 1.209-.94 1.897-1.171.69-.232 1.209-.274 2.227-.2l.7.052.228.005.275-.013.564-.044c1.02-.074 1.539-.031 2.229.2zm-1.931 1.784l-.89.065c-.105.006-.2.008-.291.008l-.275-.007-.156-.009-.563-.044-.385-.024c-.514-.024-.767.012-1.094.122l-.108.039c-.35.132-.62.313-1.138.767l-.55.486-.155.125-.142.107-.23.158-.72.462c-.517.343-.733.545-.958.866-.23.326-.347.596-.51 1.247l-.193.815-.05.19-.05.17-.094.271-.345.87C4.061 11.287 4 11.594 4 12l.002.12c.012.35.082.65.282 1.18l.37.934.07.21.074.257.219.914c.162.65.28.92.51 1.247.247.352.485.564 1.121.973l.559.356c.118.077.204.138.296.207l.073.056.241.2.464.411c.569.5.839.67 1.241.805.404.135.694.159 1.484.1l.306-.025.555-.034.133-.002c.09 0 .186.003.291.008l.166.01.536.043c.79.059 1.08.035 1.478-.098.407-.138.678-.308 1.247-.807l.387-.344.212-.182.181-.142.186-.133.108-.073.721-.462c.518-.342.735-.546.96-.866.25-.357.367-.644.554-1.431l.091-.391c.032-.138.059-.245.084-.34l.075-.26.094-.273.345-.869c.223-.587.284-.894.284-1.299 0-.405-.061-.712-.284-1.299l-.37-.934-.095-.293-.075-.274-.149-.631-.098-.39c-.109-.402-.203-.64-.34-.865l-.115-.175c-.226-.32-.441-.523-.96-.866l-.624-.4a7.664 7.664 0 01-.255-.17l-.212-.157-.155-.126-.697-.613c-.42-.357-.669-.516-.977-.634l-.218-.074c-.322-.098-.603-.12-1.195-.081zM16 15.5a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0zm-1.8-8.1l1.6 1.2-6 8-1.6-1.2 6-8zM11 8.5a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0z" clip-rule="evenodd"></path></svg>
        {"شگفت‌انگیزها"}</Link>
    </div>
    <div className='  h-[35px]  rounded-b-sm'>
      <Link className='flex text-[13px] font-[500] mr-1 text-[#000] mt-1  ' href="">
      <svg fillRule="evenodd" fill='#8e8fa4' className='inline ml-1' width="24px" height="24px"><path fillRule="evenodd" d="M9.998 20.8l1.17 1.755a1 1 0 001.664 0l1.17-1.756A10.004 10.004 0 0022 11c0-5.523-4.477-10-10-10S2 5.477 2 11c0 4.79 3.389 8.863 7.998 9.8zm3.253-1.897a1 1 0 00-.677.433l-.574.861-.574-.86a1 1 0 00-.677-.434A8.002 8.002 0 014 11a8 8 0 1116 0 8.002 8.002 0 01-6.749 7.903zM10 9H8V8a3 3 0 013-3h2a3 3 0 013 3v.93a3 3 0 01-1.336 2.496l-1.219.812a1 1 0 00-.445.832V14h-2v-.93a3 3 0 011.336-2.496l1.219-.812A1 1 0 0014 8.93V8a1 1 0 00-1-1h-2a1 1 0 00-1 1v1zm3 6h-2v2h2v-2z" clip-rule="evenodd"></path></svg>
        {"سوالی دارید؟"}</Link>
    </div>
    <div className='  h-[35px]  rounded-b-sm'>
      <Link className='flex text-[13px] font-[500] mr-1 text-[#000] mt-1  ' href="">
      <svg fillRule="evenodd" className='inline ml-1' width="24px" height="24px">
        
        <path fill='#8e8fa4' fillRule="evenodd" d="M19.5 3h-15a1 1 0 00-.959.715l-1.5 5.053A1 1 0 002 9.053V12a1 1 0 001 1h.006l.038 7.006A1 1 0 004.048 21l9.956-.035a1 1 0 00.996-1V13h4v8h2v-8a1 1 0 001-1V9.053a1 1 0 00-.041-.285l-1.5-5.053A1 1 0 0019.5 3zm.5 8V9.198L18.754 5H5.246L4 9.198V11h16zm-7 2H5.006l.033 5.997L13 18.968V13z" clip-rule="evenodd"></path>
        </svg>
        {" در دیجی‌کالا بفروشید!"}</Link>
    </div>


  </div>
  <div className='  h-[1px] w-[90%] ml-[5%] mr-[5%] mt-5 bg-[#f1f2f4]'></div>


  <div className="flex flex-col gap-3">
    <p className='mt-4 mr-5 font-[500]'>{"دسته‌بندی کالا‌ها"}</p>
{mainMenu && mainMenu.map(({title, logo, innerTitle, options},index) => 
    <div>
  <div onMouseEnter={() => setCurrentMenu(index)} className='group/title    mt-4  w-[100%] text-[13px] cursor-pointer   '>
  <p className='flex pr-4 hover:text-[#ee384e]'>{title}</p>
<svg className='group-hover/title:flex hidden absolute left-4 mt-[-22px] rotate-[180deg] ' width="24px" height="24px" fill="#ee384e"><path d="M7.707 9.29l-1.414 1.414 5 5a1 1 0 001.414 0l5-5-1.414-1.414L12 13.583 7.707 9.29z"></path></svg>
  <svg className='absolute  group-hover/title:hidden   left-4 mt-[-22px]' fill="black" width="20px" height="20px"><path d="M7.707 9.29l-1.414 1.414 5 5a1 1 0 001.414 0l5-5-1.414-1.414L12 13.583 7.707 9.29z"></path></svg>
      <div className='bg-[#f1f2f4] w-full group-hover/title:flex group-hover/title:flex-col pr-7 mt-2 pt-2 pb-2 gap-2 hidden'>
        <div className="flex"><p className='text-[#8e8fa4]'>{"همه موارد این دسته"}</p>
        <svg className='rotate-[90deg] ' fill="#8e8fa4" width="18px" height="18px"><path d="M7.707 9.29l-1.414 1.414 5 5a1 1 0 001.414 0l5-5-1.414-1.414L12 13.583 7.707 9.29z"></path></svg>

        </div>
        {mainMenu && mainMenu[currentMenu].innerTitle.map((item, index) => 
      <div className='group/option'>
        <div className='hover:text-[#ee384e]'><div>
          <p>{item}</p>
          <svg className='group-hover/option:flex hidden absolute left-8 mt-[-22px] rotate-[180deg] ' width="24px" height="24px" fill="#ee384e"><path d="M7.707 9.29l-1.414 1.414 5 5a1 1 0 001.414 0l5-5-1.414-1.414L12 13.583 7.707 9.29z"></path></svg>
          <svg className='absolute  group-hover/option:hidden   left-8 mt-[-22px]' fill="black" width="20px" height="20px"><path d="M7.707 9.29l-1.414 1.414 5 5a1 1 0 001.414 0l5-5-1.414-1.414L12 13.583 7.707 9.29z"></path></svg>
        
        </div></div>
        <div className='group-hover/option:flex group-hover/option:flex-col hidden gap-1 pr-9 mt-1'>{mainMenu && mainMenu[currentMenu].options.map((item, index) => <p>{item}</p>)}</div>
      </div>
      
      )}</div>
                

    </div>



    
    <div>

    </div>
    
    
    </div> )}

    </div>



</div>



      <main onClick={() => {openSmallMenu && setOpenSmallMenu(false)}} className={`h-full w-full lg:pt-[157px] ${open || openSmallMenu && "opacity-50"} `} >

      {/* Image Carousel */}
     <div className={`relative h-full  w-full  transition duration-300    `}>
      <Link href={carousel && carousel[currentIndex].link}>
  <Image className={`w-full h-[300px] bg-cover object-cover transition-all duration-300`} draggable="false" src={carousel && carousel[currentIndex].src} width={2880} height={600} alt="" title=""/>
      </Link>


  {/* < */}
  <div  className={`absolute top-[50%] left-[1.3%] z-50 transition-all duration-300 hover:scale-[110%]`} title="Previous Slide">
  <div className={`flex flex-col cursor-pointer  gap-1 p-1  `} onClick={() => previous(carousel && carousel[currentIndex].src)}>
      <div className={`w-[20px] h-[4px] max-md:w-[15px] max-md:h-[2px]  rounded-full origin-[-4.3px] max-md:origin-[-3.5px] rotate-[45deg] bg-neutral-400 `}></div>
      <div className={`w-[20px] h-[4px] max-md:w-[15px] max-md:h-[2px]  rounded-full origin-[-4.3px] max-md:origin-[-3.5px] rotate-[-45deg] bg-neutral-400`}></div>
    </div>
    </div>
    

  {/* > */}

    <div  className={`absolute top-[50%] right-[1%] z-50 transition-all duration-300 hover:scale-[110%]`} title="Next Slide">
  <div className={`flex flex-col cursor-pointer  gap-1 p-1 `}  onClick={() => next(carousel && carousel[currentIndex].src)}>
      <div className={`w-[20px] h-[4px] max-md:w-[15px] max-md:h-[2px]  rounded-full origin-[13px] max-md:origin-[10px] rotate-[45deg] bg-neutral-400`}></div>
      <div className={`w-[20px] h-[4px] max-md:w-[15px] max-md:h-[2px]  rounded-full origin-[13px] max-md:origin-[10px] rotate-[-45deg] bg-neutral-400`}></div>
    </div>
    </div> 
    

<div className={`text-neutral-300 relative mt-[-30px]  gap-2 max-w-[600px] flex flex-wrap ml-auto mr-auto w-[100%] justify-center`}>{carousel && carousel.map((item, index) => 
<div key={index}   className={`transition-all  duration-300 flex rounded-sm cursor-pointer`} >{(index == currentIndex) ? <div className='h-[5px] w-[15px] bg-white rounded-md'></div> : <div className='h-[5px] w-[5px] bg-gray-600 rounded-[50%]'></div>}</div>
)}</div>

      </div>


      {/* Buttons */}
      <div className='grid gap-[22px] lg:grid-cols-8 max-lg:grid-rows-2 max-lg:grid-cols-4 whitespace-nowrap justify-center items-center  mx-[20px]  mt-[60px]'>
        
 
          <Link className='flex flex-col items-center' href="">
            <Image src="/images/asset12.png" width={50} height={50} alt='' title=''/>
            <p className='text-[10px]  font-IRANYekan mt-2 font-[700]'>{"دیجی‌کالا جت"}</p>
          </Link>

          <Link className='flex flex-col items-center' href="">
            <Image src="/images/asset13.png" width={50} height={50} alt='' title=''/>
            <p className='text-[10px] font-IRANYekan mt-2 font-[700]'>{"حراج استایل"}</p>
          </Link>

          <Link className='flex flex-col items-center' href="">
            <Image src="/images/asset14.png" width={50} height={50} alt='' title=''/>
            <p className='text-[10px] font-IRANYekan mt-2 font-[700]'>{"خرید اقساطی"}</p>
          </Link>


          <Link className='flex flex-col items-center ' href="">
            <Image src="/images/asset15.png" width={50} height={50} alt='' title=''/>
            <p className='text-[10px] font-IRANYekan mt-2 font-[700]'>{"خرید عمده و سازمانی"}</p>
          </Link>

          <Link className='flex flex-col items-center' href="">
            <Image src="/images/asset16.png" width={50} height={50} alt='' title=''/>
            <p className='text-[10px] font-IRANYekan mt-2 font-[700]'>{"پیشنهاد روز زن"}</p>
          </Link>

          <Link className='flex flex-col items-center' href="">
            <Image src="/images/asset17.png" width={50} height={50} alt='' title=''/>
            <p className='text-[10px] font-IRANYekan mt-2 font-[700]'>{"کارت هدیه"}</p>
          </Link>

          <Link className='flex flex-col items-center' href="">
            <Image src="/images/asset18.png" width={50} height={50} alt='' title=''/>
            <p className='text-[10px] font-IRANYekan mt-2 font-[700]'>{"حراج طلا"}</p>
          </Link>

          <Link className='flex flex-col items-center' href="">
            <div className='bg-[#f1f2f4] gap-1 rounded-[50%] w-[50px] h-[50px] flex items-center justify-center'>
              <div className='bg-[#8e8fa4] rounded-[50%] w-[5px] h-[5px]'></div>
              <div className='bg-[#8e8fa4] rounded-[50%] w-[5px] h-[5px]'></div>
              <div className='bg-[#8e8fa4] rounded-[50%] w-[5px] h-[5px]'></div>
            </div>
            <p className='text-[10px] font-IRANYekan mt-2 font-[700]'>{"بیشتر"}</p>
          </Link>

      </div>


      {/* Sales Card Items */}

      <ScrollContainer className=' flex w-[96%] ml-auto mr-auto bg-[#ee384e] border-[2px] border-[#ee384e] h-[250px] rounded-2xl mt-8'>

        <div className='pt-3 pb-7 px-5 '>
            <svg fillRule="evenodd"  width="90" height="90" fill="white" viewBox="0 0 120 120" ><path d="M77.7524 14.9378C77.8003 15.3691 78.1744 15.7052 78.6289 15.7052H84.8224L84.9185 15.7001C85.3603 15.6533 85.7041 15.2876 85.7041 14.844V12.8462L85.699 12.7524C85.6511 12.3209 85.2769 11.9851 84.8224 11.9851L81.9819 11.9853L81.9811 10.8612L81.9759 10.7673C81.928 10.3358 81.5539 10 81.0991 10H78.6291L78.533 10.0051C78.0912 10.0518 77.7474 10.4172 77.7474 10.8612L77.7472 14.844L77.7524 14.9378Z" fill="white"/><path d="M110.254 34.586C110.207 34.1547 109.832 33.8186 109.378 33.8186H103.184L103.088 33.8237C102.647 33.8705 102.303 34.2362 102.303 34.6798V36.6776L102.308 36.7714C102.356 37.2029 102.73 37.5387 103.184 37.5387L106.025 37.5385L106.026 38.6626L106.031 38.7565C106.079 39.188 106.453 39.5238 106.908 39.5238H109.378L109.474 39.5188C109.916 39.472 110.259 39.1066 110.259 38.6626L110.26 34.6798L110.254 34.586Z" fill="white"/><path d="M97.2623 33.8399C97.7021 33.8399 98.0262 34.1259 98.0702 34.5371L98.0753 34.6342V37.0171C98.0753 37.4467 97.7827 37.7633 97.3617 37.8063L97.2623 37.8114H90.7581C90.3182 37.8114 89.9942 37.5255 89.9501 37.1141L89.945 37.0171V34.6342C89.945 34.2046 90.2377 33.8879 90.6587 33.8449L90.7581 33.8399H97.2623Z" fill="white"/><path d="M59.4446 12.2931C59.4005 11.8819 59.0763 11.5959 58.6367 11.5959H55.7911L55.6917 11.6009C55.2708 11.6439 54.978 11.9607 54.978 12.3902V14.7731L54.9831 14.8702C55.0272 15.2815 55.3514 15.5674 55.7911 15.5674H58.6367L58.736 15.5624C59.1569 15.5193 59.4497 15.2028 59.4497 14.7731V12.3902L59.4446 12.2931Z" fill="white"/><path d="M15.1303 15.571C18.502 15.571 20.7273 17.6765 20.8186 20.9224L20.8215 21.1311V25.8969C20.8215 29.1909 18.6664 31.365 15.3439 31.4541L15.1303 31.457H7.81302C7.37382 31.457 7.04926 31.1707 7.00512 30.7597L7 30.6627V28.2798C7 27.8504 7.29319 27.5336 7.71378 27.4905L7.81302 27.4855H15.1303C16.1905 27.4855 16.7102 27.0224 16.7534 26.0348L16.7564 25.8969V21.1311C16.7564 20.0955 16.2827 19.5876 15.2715 19.5454L15.1303 19.5425H7.81302C7.37382 19.5425 7.04926 19.2561 7.00512 18.8452L7 18.7482V16.3653C7 15.9361 7.29319 15.6191 7.71378 15.576L7.81302 15.571H15.1303Z" fill="white"/><path  clip-rule="evenodd" d="M31.3956 22.7671V27.5547H29.7692C28.4219 27.5547 27.3296 26.4829 27.3296 25.1609V11.5959C27.3296 11.1552 26.9656 10.7979 26.5165 10.7979H24.0769C23.6278 10.7979 23.2637 11.1552 23.2637 11.5959V25.1609C23.2637 28.6864 26.1763 31.5444 29.7692 31.5444H47.2527C48.7276 31.5444 50.0802 31.0307 51.1349 30.1756L51.8581 31.2007C52.01 31.4159 52.2598 31.5444 52.5267 31.5444H57.3863C59.2369 31.5444 60.907 30.7862 62.0916 29.5691L63.2427 31.2007C63.3946 31.4159 63.6444 31.5444 63.9113 31.5444H68.7709C70.3782 31.5444 71.8493 30.9725 72.9844 30.0247L73.8141 31.2007C73.966 31.4159 74.2159 31.5444 74.4827 31.5444H77.7042C79.3185 31.5444 80.7954 30.9675 81.9325 30.0123L82.7709 31.2007C82.9228 31.4159 83.1727 31.5444 83.4395 31.5444H84.2215C85.9164 31.5444 87.4599 30.9084 88.6177 29.8664L89.3082 31.1248C89.45 31.3832 89.725 31.5444 90.0242 31.5444H95.6373C97.2412 31.5444 98.6902 30.8935 99.7249 29.8462L100.681 31.2007C100.832 31.4159 101.082 31.5444 101.349 31.5444H106.209C109.802 31.5444 112.714 28.6864 112.714 25.1609V20.3732C112.714 19.9325 112.35 19.5753 111.901 19.5753H109.462C109.012 19.5753 108.648 19.9325 108.648 20.3732V25.1609C108.648 26.4829 107.556 27.5547 106.209 27.5547H101.094C101.247 27.049 101.33 26.5134 101.33 25.9588V20.3732C101.33 19.9325 100.966 19.5753 100.516 19.5753H98.0769C97.6278 19.5753 97.2637 19.9325 97.2637 20.3732V25.9588C97.2637 26.8402 96.5356 27.5547 95.6373 27.5547H90.7582V20.3732C90.7582 19.9325 90.3941 19.5753 89.945 19.5753H87.4743C87.0252 19.5753 86.6611 19.9325 86.6611 20.3732V25.1609C86.6611 26.4829 85.5688 27.5547 84.2215 27.5547H83.7369C84.0418 26.8155 84.2097 26.0074 84.2097 25.1609V20.3732C84.2097 19.9325 83.8456 19.5753 83.3965 19.5753H80.957C80.5079 19.5753 80.1438 19.9325 80.1438 20.3732V25.1609C80.1438 26.4829 79.0516 27.5547 77.7042 27.5547H74.8035C75.1085 26.8155 75.2764 26.0074 75.2764 25.1609V20.3732C75.2764 19.9325 74.9123 19.5753 74.4632 19.5753H72.0237C71.5745 19.5753 71.2105 19.9325 71.2105 20.3732V25.1609C71.2105 26.4829 70.1182 27.5547 68.7709 27.5547H63.4189C63.7239 26.8155 63.8918 26.0074 63.8918 25.1609V20.3732C63.8918 19.9325 63.5277 19.5753 63.0786 19.5753H60.6391C60.1899 19.5753 59.8259 19.9325 59.8259 20.3732V25.1609C59.8259 26.4829 58.7336 27.5547 57.3863 27.5547H53.0046C53.2293 26.9307 53.3516 26.2593 53.3516 25.5598C53.3516 22.2547 50.6211 19.5753 47.2527 19.5753L43.5363 19.5753C42.4114 17.6673 40.309 16.3835 37.9011 16.3835C34.3082 16.3835 31.3956 19.2415 31.3956 22.7671ZM37.9011 20.3732C36.5538 20.3732 35.4615 21.445 35.4615 22.7671V27.5547H40.3406V22.7671C40.3406 21.445 39.2484 20.3732 37.9011 20.3732ZM44.4066 27.5547V23.565H47.2527C48.3755 23.565 49.2857 24.4581 49.2857 25.5598C49.2857 26.6616 48.3755 27.5547 47.2527 27.5547H44.4066Z" fill="white"/><path d="M98.7052 53.1463C98.7538 53.5875 99.1339 53.9314 99.5957 53.9314H105.889L105.986 53.9262C106.435 53.8783 106.784 53.5042 106.784 53.0504V51.0065L106.779 50.9105C106.731 50.4691 106.35 50.1255 105.889 50.1255L103.003 50.1257L103.002 48.9757L102.996 48.8797C102.948 48.4383 102.568 48.0947 102.106 48.0947H99.5958L99.4983 48.0999C99.0494 48.1477 98.7001 48.5216 98.7001 48.9757L98.6999 53.0504L98.7052 53.1463Z" fill="white"/><path d="M28.8538 55.3387C28.809 54.918 28.4798 54.6253 28.0329 54.6253H21.4242L21.3233 54.6305C20.8955 54.6745 20.5982 54.9985 20.5982 55.4379V57.8757L20.6034 57.9751C20.6481 58.3959 20.9774 58.6883 21.4242 58.6883H28.0329L28.1339 58.6832C28.5616 58.6392 28.859 58.3153 28.859 57.8757V55.4379L28.8538 55.3387Z" fill="white"/><path d="M56.2172 48.0947C56.6639 48.0947 56.9933 48.3874 57.0381 48.8081L57.0433 48.9073V51.3451C57.0433 51.7847 56.7458 52.1086 56.3181 52.1526L56.2172 52.1577H53.3259C52.8792 52.1577 52.5498 51.8652 52.5051 51.4444L52.4998 51.3451V48.9073C52.4998 48.4679 52.7973 48.1439 53.225 48.0999L53.3259 48.0947H56.2172Z" fill="white"/><path d="M68.7287 48.0947C68.4737 48.0947 68.233 48.211 68.0765 48.4099L62.8002 55.1123C62.6946 55.2463 62.7913 55.4417 62.9632 55.4417H63.7892C64.0442 55.4417 64.2849 55.3254 64.4414 55.1265L69.7177 48.4241C69.8233 48.2901 69.7266 48.0947 69.5547 48.0947H68.7287Z" fill="white"/><path  clip-rule="evenodd" d="M61.108 66.8702H74.1047C76.4689 66.8702 78.2351 65.1248 78.2351 62.7886C78.2351 60.4524 76.4689 58.707 74.1047 58.707H64.6048C63.8613 58.707 63.718 58.0486 64.1917 57.4825L71.1489 48.7026C71.4711 48.3177 71.9504 48.0947 72.4557 48.0947H75.6293C76.2678 48.0947 76.6176 48.8294 76.2107 49.3155L72.0395 54.6253H74.1047C78.5618 54.6253 81.9451 57.7084 82.3291 61.9723H82.3655V63.6049H82.3291C82.2215 64.8001 81.8782 65.9025 81.3417 66.8702H90.4057C91.7747 66.8702 92.8844 65.7738 92.8844 64.4213V59.5233C92.8844 59.0725 93.2544 58.707 93.7107 58.707H96.1894C96.6457 58.707 97.0156 59.0725 97.0156 59.5233V64.4213C97.0156 65.2873 96.845 66.114 96.5352 66.8702H99.4824C100.851 66.8702 101.961 65.7738 101.961 64.4213V59.5233C101.961 59.0725 102.331 58.707 102.787 58.707H105.266C105.722 58.707 106.092 59.0725 106.092 59.5233V64.4213C106.092 65.2873 105.922 66.114 105.612 66.8702H106.104C107.473 66.8702 108.583 65.7738 108.583 64.4213V59.5233C108.583 59.0725 108.953 58.707 109.409 58.707H111.888C112.344 58.707 112.714 59.0725 112.714 59.5233V64.4213C112.714 68.028 109.755 70.9519 106.104 70.9519H105.31C105.039 70.9519 104.785 70.8204 104.63 70.6002L103.779 69.3845C102.623 70.3617 101.123 70.9519 99.4824 70.9519H96.2092C95.9381 70.9519 95.6842 70.8204 95.5299 70.6002L94.6869 69.3971C93.5335 70.3668 92.0388 70.9519 90.4057 70.9519H80.7062C80.435 70.9519 80.1812 70.8204 80.0268 70.6002L79.1554 69.3566C77.7811 70.3678 76.0446 70.9519 74.1047 70.9519H41.6206C41.3495 70.9519 41.0956 70.8204 40.9413 70.6002L40.0982 69.3971C38.9449 70.3667 37.4501 70.9519 35.817 70.9519H13.6099C9.95936 70.9519 7 68.028 7 64.4213V59.5233C7 59.0725 7.36992 58.707 7.82624 58.707H10.305C10.7613 58.707 11.1312 59.0725 11.1312 59.5233V64.4213C11.1312 65.7738 12.241 66.8702 13.6099 66.8702H35.817C37.186 66.8702 38.2958 65.7738 38.2958 64.4213V59.5233C38.2958 59.0725 38.6657 58.707 39.122 58.707H41.6007C42.057 58.707 42.427 59.0725 42.427 59.5233V64.4213C42.427 65.2873 42.2563 66.114 41.9465 66.8702H48.8491C48.5393 66.114 48.3686 65.2873 48.3686 64.4213V61.9723C48.3686 58.3655 51.328 55.4417 54.9786 55.4417C58.6291 55.4417 61.5885 58.3655 61.5885 61.9723V64.4213C61.5885 65.2873 61.4179 66.114 61.108 66.8702ZM57.4573 61.9723V64.4213C57.4573 65.7738 56.3475 66.8702 54.9786 66.8702C53.6096 66.8702 52.4998 65.7738 52.4998 64.4213V61.9723C52.4998 60.6197 53.6096 59.5233 54.9786 59.5233C56.3475 59.5233 57.4573 60.6197 57.4573 61.9723Z" fill="white"/><path d="M15.1277 91.7882C14.6548 91.7882 14.3149 92.1215 14.3149 92.5851V103.741C14.3149 104.828 13.7973 105.335 12.6892 105.335H7.81285C7.3398 105.335 7 105.669 7 106.132V108.523C7 108.987 7.3398 109.32 7.81285 109.32H12.6892C16.347 109.32 18.3791 107.327 18.3791 103.741V102.055L19.3279 103.398C19.4797 103.613 19.7295 103.741 19.9963 103.741H40.6273C42.2581 103.741 43.7488 103.153 44.8904 102.181L46.1367 103.741H70.6434C73.0628 103.741 75.1606 102.826 76.6188 101.306L78.0967 103.398C78.2486 103.613 78.4984 103.741 78.7652 103.741H99.6749C103.267 103.741 106.179 100.887 106.179 97.3664V92.5851C106.179 92.145 105.815 91.7882 105.366 91.7882H102.927C102.478 91.7882 102.114 92.145 102.114 92.5851V97.3664C102.114 98.6867 101.022 99.757 99.6749 99.757H77.7645C78.2924 98.8124 78.6302 97.7362 78.7361 96.5695H78.772V95.7726C78.772 91.203 75.3045 87.8038 70.6434 87.8038H68.6113L72.7157 82.6204C73.116 82.1459 72.7718 81.4287 72.1436 81.4287H69.0209C68.5236 81.4287 68.052 81.6463 67.7349 82.0221L60.8892 90.5929C60.4231 91.1456 60.5641 91.7882 61.2956 91.7882H70.6434C72.9697 91.7882 74.7077 93.492 74.7077 95.7726C74.7077 98.0532 72.9697 99.757 70.6434 99.757H46.6585C46.9634 99.0188 47.1313 98.2118 47.1313 97.3664V92.5851C47.1313 92.145 46.7673 91.7882 46.3183 91.7882H43.8793C43.4303 91.7882 43.0663 92.145 43.0663 92.5851V97.3664C43.0663 98.6867 41.9743 99.757 40.6273 99.757H18.3791V92.5851C18.3791 92.1215 18.0393 91.7882 17.5663 91.7882H15.1277Z" fill="white"/><path d="M35.3325 106.73C35.2884 106.32 34.9644 106.034 34.5247 106.034H28.0219L27.9226 106.039C27.5016 106.082 27.2091 106.398 27.2091 106.827V109.207L27.2142 109.304C27.2582 109.715 27.5822 110 28.0219 110H34.5247L34.6241 109.995C35.045 109.952 35.3376 109.636 35.3376 109.207V106.827L35.3325 106.73Z" fill="white"/><path d="M17.5693 83.8194C18.0088 83.8194 18.3329 84.105 18.377 84.5157L18.3821 84.6126V86.9923C18.3821 87.4215 18.0894 87.7376 17.6686 87.7806L17.5693 87.7856H15.1299C14.6904 87.7856 14.3663 87.5001 14.3222 87.0893L14.3171 86.9923V84.6126C14.3171 84.1836 14.6098 83.8674 15.0306 83.8244L15.1299 83.8194H17.5693Z" fill="white"/><path d="M100.112 83.8194C100.552 83.8194 100.876 84.105 100.92 84.5157L100.925 84.6126V86.9923C100.925 87.4215 100.632 87.7376 100.211 87.7806L100.112 87.7856H97.267C96.8274 87.7856 96.5033 87.5001 96.4592 87.0893L96.4541 86.9923V84.6126C96.4541 84.1836 96.7468 83.8674 97.1676 83.8244L97.267 83.8194H100.112Z" fill="white"/><path d="M65.3535 81.4287C65.1026 81.4287 64.8658 81.5422 64.7117 81.7364L59.5199 88.2791C59.4161 88.41 59.5112 88.6007 59.6804 88.6007H60.4932C60.7441 88.6007 60.9809 88.4871 61.1349 88.293L66.3267 81.7502C66.4306 81.6194 66.3354 81.4287 66.1663 81.4287H65.3535Z" fill="white"/><path d="M108.649 83.8194C108.649 83.3793 109.013 83.0225 109.462 83.0225H111.901C112.35 83.0225 112.714 83.3793 112.714 83.8194V102.945C112.714 103.385 112.35 103.741 111.901 103.741H109.462C109.013 103.741 108.649 103.385 108.649 102.945V83.8194Z" /></svg>
            <Image src="/images/box.png" width={120} height={120} />
            <Link className='font-IRANYekan font-[500] text-white flex whitespace-nowrap' href="">{"مشاهده همه"}
            <svg fillRule="evenodd" className=' h-[20px] w-6' fill='white'><path d="M11.414 12l4.293 4.293-1.414 1.414-5-5a1 1 0 010-1.414l5-5 1.414 1.414L11.414 12z"></path></svg>
            </Link>
        </div>

<div className='flex gap-1 my-4 '>

{ amazingCarousel && amazingCarousel.map(({link, src, price, offPercent}, index) => 

  <Link key={index}  href={link} className='bg-white first:rounded-r-lg last:rounded-l-lg w-[200px] overflow-clip justify-center items-center flex flex-col'>

            <Image className='  '  src={src} width={160} height={160} alt=''/>

            <div className='flex gap-20 relative bottom-[5px] left-[2px] font-IRANYekan text-center justify-center items-center'>
                        <p  className='bg-[#ee384e] rounded-3xl w-[30px] h-[20px] text-center text-white text-[13px] justify-center items-center pt-[1px]'>%{ConvertToArabicNumbers(offPercent)}</p>
                        <p className='flex justify-center items-center'>
                          {ConvertToArabicNumbers((price*offPercent/100).toLocaleString())}

                          </p>

                      </div>
                          <p className=' relative bottom-[10px] right-[45px] line-through flex justify-end  text-[#8e8fa4]'>{ConvertToArabicNumbers(Number(price).toLocaleString())}</p>
        </Link>
)
  
        }
 

        </div>
</ScrollContainer>



      {/* Super Market Promo */}

      <div className=' items-center ml-auto mr-auto w-[96%] bg-[#ecf0ee] bg-freshPattern bg-cover  rounded-3xl h-fit py-3 mx-[2%] overflow-hidden p-1 mt-[10px] '>
        <Link href="" className='flex flex-wrap gap-5  lg:justify-center   items-center'>
          <div className='flex justify-center items-center '>
          <Image className='w-[60px] h-[60px]' src={fresh} width={80} height={80} alt=''/>
            <p className='justify-center items-center text-[#39ae00] whitespace-nowrap lg:text-[25px] max-lg:text-[18px] font-IRANYekan font-[800]'>{"شگفت‌انگیز سوپرمارکتی"}</p>
          </div>
          <div className='flex gap-2 mr-5'>
              {superMarketAmazing && superMarketAmazing.slice(0,3).map(({link, src, offPercent}, index) => 
              <div key={index}  className='flex bg-white w-[70px] h-[70px] rounded-[50%] justify-center items-center ml-auto mr-auto'>
              <Image className='w-[60px] h-[60px] rounded-[50%]' src={src} width={50} height={50} alt=''/>
              <span>{offPercent}</span>
              </div>
              )}
          <div className='flex bg-white w-fit h-fit p-3 rounded-3xl items-center  mt-4 text-center'>
            <p className='max-md:hidden text-[#39ae00] text-[14px] whitespace-nowrap ml-2  font-IRANYekan font-[400]'>{"بیش از ۲۰۰ کالا"}</p>
            <svg fillRule="evenodd" className='w-[20px] h-[20px]' fill='#39ae00'><path  d="M11.293 19.707l1.414-1.414L7.414 13H20v-2H7.414l5.293-5.293-1.414-1.414-7 7a1 1 0 000 1.414l7 7z" clip-rule="evenodd"></path></svg>
          </div>
          </div>
        </Link>
      </div>


      {/* Sales Cards Images */}
      <div className='grid md:grid-cols-4 max-md:grid-cols-2  mx-6 mt-6 gap-4 justify-around'>
        <Image className='rounded-2xl' src={SalesAdd1} alt='' width={500} height={400} />
        <Image className='rounded-2xl' src={SalesAdd2} alt='' width={500} height={400} />
        <Image className='rounded-2xl' src={SalesAdd3} alt='' width={500} height={400} />
        <Image className='rounded-2xl' src={SalesAdd4} alt='' width={500} height={400} />
      </div>


      {/* Menu Items */}

      <p className='font-IRANYekan font-[600] text-[20px] text-center justify-center my-7'>{"دسته‌بندی‌های دیجی‌کالا"}</p>
      <div className='flex flex-wrap justify-center gap-y-6'>
      {mainMenu && mainMenu.map(({title, src, img}, index) => 
      <div key={index}  className='text-center items-center flex flex-col lg:mx-5 max-lg:mx-1'>
        <Image className='max-lg:w-[120px] max-lg:h-[120px] max-md:w-[100px] max-md:h-[100px] ' src={img} width={170} height={170}  alt=''/>
        <p className='font-IRANYekan font-[500] text-[15px] max-lg:text-[12px]'>{title}</p>
      </div>)}

      </div>

      {/* Banner1 */}
      <div className='flex w-[96%] ml-auto mr-auto justify-center items-center mt-14'>
        <Image className=' rounded-3xl' src={Banner1} width={1300} height={600} />
      </div>


      {/* Digi Suggestions */}

      <p className='font-IRANYekan font-[600] text-[20px] text-center justify-center mt-8'>{" پیشنهاد دیجی‌کالا"}</p>
      <div className=' w-[96%] ml-auto mr-auto border-[1px] border-[#ecf0ee] rounded-lg mt-8'>
        
            <ScrollContainer className='grid grid-rows-2  grid-flow-col  overflow-x-scroll  '>
        {
          suggestions && suggestions.map(({title, img},index) => 
          <Link key={index}  className='flex flex-col justify-center w-[180px] text-center items-center border-l-[1px] border-b-[1px] border-[#ecf0ee] ' href="" >
            <div className='bg-[#f2f2f2] rounded-[50%] m-2'>
            <Image className='p-4  ' src={img} width={110} height={110} />
            </div>
            <p className='font-IRANYekan font-[400] text-[14px] text-center justify-center m-1 mb-3'>{title}</p>
          </Link>)
        }

        </ScrollContainer>
      
      </div>

      {/* Best Brands */}
      <div className=' w-[96%] ml-auto mr-auto border-[1px] border-[#ecf0ee] rounded-lg mt-8'>
      <p className='font-IRANYekan font-[600] text-[20px] text-center justify-center mt-8'>{"محبوب‌ترین برندها"}</p>

      <ScrollContainer className='grid grid-rows-1 gap-4 grid-flow-col mt-4 mr-2 h-[100px] overflow-x-scroll'>
        {
          brands && brands.map(({logo},index) => 
          <Link key={index} href="" className='justify-center items-center my-auto border-l-[1px] w-[100px] border-[#ecf0ee] '>
            <Image  src={logo} width={80} height={80}/>

          </Link>)
        }
      </ScrollContainer>



      </div>


            {/* Sales Cards Images */}
            <div className='grid md:grid-cols-2 max-md:grid-cols-1 mx-6 mt-6 gap-4 justify-around'>
        <Image className='rounded-2xl' src={SalesAdd5} alt='' width={900} height={500} />
        <Image className='rounded-2xl' src={SalesAdd6} alt='' width={900} height={500} />

      </div>


      {/* Different Menu Items */}
      {/* Different Menu Items */}

      <div className=' w-[96%] ml-auto mr-auto lg:border-[1px] border-[#ecf0ee] rounded-lg mt-8'>
      <ScrollContainer className='lg:flex max-lg:flex-col   gap-3 p-4 '>

        <div>
        <p className='font-IRANYekan font-[500] text-[18px]'>{"گوشی موبایل"}</p>
        <p className='font-IRANYekan font-[400] text-[10px] text-[#777891] mb-3'>{" بر اساس بازدیدهای شما"}</p>
      <div className='flex flex-col divide-y  lg:border-l-[1px] border-[#ecf0ee] pl-2 max-lg:justify-center max-lg:items-center max-lg:mx-auto'>
            <div className='grid grid-rows-1 grid-flow-col gap-4  '>
        {mainMenu && mainMenu.slice(0,2).map(({title, img, link},index) => 
          <Link key={index}  href={link} className='flex flex-col  text-center justify-center items-center mx-auto  [&:nth-child(odd)]:border-l-[1px] border-[#ecf0ee] lg:max-w-[134px] lg:w-[150px]'>
            <Image className='p-1 w-[400px] h-auto' src={img} width={110} height={110} />
          </Link>)}
            </div>
            <div className='grid grid-rows-1 grid-flow-col gap-4 '>
        {mainMenu && mainMenu.slice(2,4).map(({title, img, link},index) => 
          <Link key={index}  href={link} className='flex flex-col  text-center justify-center items-center mx-auto  [&:nth-child(odd)]:border-l-[1px] border-[#ecf0ee] lg:max-w-[134px] lg:w-[150px]'>
            <Image className='p-1 w-[400px] h-auto' src={img} width={110} height={110} />
          </Link>)}
            </div>
          </div>

          <Link className='font-IRANYekan font-[400] text-[14px] mt-5  text-[#77d7e4] flex whitespace-nowrap text-center justify-center items-center' href="">{"مشاهده "}
            <svg fillRule="evenodd" className=' h-[20px] w-6' fill='#77d7e4'><path d="M11.414 12l4.293 4.293-1.414 1.414-5-5a1 1 0 010-1.414l5-5 1.414 1.414L11.414 12z"></path></svg>
            </Link>
        </div>

        <div>
        <p className='font-IRANYekan font-[500] text-[18px]'>{"گوشی موبایل"}</p>
        <p className='font-IRANYekan font-[400] text-[10px] text-[#777891] mb-3'>{" بر اساس بازدیدهای شما"}</p>
      <div className='flex flex-col divide-y  lg:border-l-[1px] border-[#ecf0ee] pl-2 max-lg:justify-center max-lg:items-center max-lg:mx-auto'>
            <div className='grid grid-rows-1 grid-flow-col gap-4  '>
        {mainMenu && mainMenu.slice(4,6).map(({title, img, link},index) => 
          <Link key={index}  href={link} className='flex flex-col  text-center justify-center items-center mx-auto  [&:nth-child(odd)]:border-l-[1px] border-[#ecf0ee] lg:max-w-[134px] lg:w-[150px]'>
            <Image className='p-1 w-[400px] h-auto' src={img} width={110} height={110} />
          </Link>)}
            </div>
            <div className='grid grid-rows-1 grid-flow-col gap-4 '>
        {mainMenu && mainMenu.slice(6,8).map(({title, img, link},index) => 
          <Link key={index}  href={link} className='flex flex-col  text-center justify-center items-center mx-auto  [&:nth-child(odd)]:border-l-[1px] border-[#ecf0ee] lg:max-w-[134px] lg:w-[150px]'>
            <Image className='p-1 w-[400px] h-auto' src={img} width={110} height={110} />
          </Link>)}
            </div>
          </div>

          <Link className='font-IRANYekan font-[400] text-[14px] mt-5  text-[#77d7e4] flex whitespace-nowrap text-center justify-center items-center' href="">{"مشاهده "}
            <svg fillRule="evenodd" className=' h-[20px] w-6' fill='#77d7e4'><path d="M11.414 12l4.293 4.293-1.414 1.414-5-5a1 1 0 010-1.414l5-5 1.414 1.414L11.414 12z"></path></svg>
            </Link>
        </div>

        <div>
        <p className='font-IRANYekan font-[500] text-[18px]'>{"گوشی موبایل"}</p>
        <p className='font-IRANYekan font-[400] text-[10px] text-[#777891] mb-3'>{" بر اساس بازدیدهای شما"}</p>
      <div className='flex flex-col divide-y  lg:border-l-[1px] border-[#ecf0ee] pl-2 max-lg:justify-center max-lg:items-center max-lg:mx-auto'>
            <div className='grid grid-rows-1 grid-flow-col gap-4  '>
        {mainMenu && mainMenu.slice(8,10).map(({title, img, link},index) => 
          <Link key={index}  href={link} className='flex flex-col  text-center justify-center items-center mx-auto  [&:nth-child(odd)]:border-l-[1px] border-[#ecf0ee] lg:max-w-[134px] lg:w-[150px]'>
            <Image className='p-1 w-[400px] h-auto' src={img} width={110} height={110} />
          </Link>)}
            </div>
            <div className='grid grid-rows-1 grid-flow-col gap-4 '>
        {mainMenu && mainMenu.slice(9,11).map(({title, img, link},index) => 
          <Link key={index}  href={link} className='flex flex-col  text-center justify-center items-center mx-auto  [&:nth-child(odd)]:border-l-[1px] border-[#ecf0ee] lg:max-w-[134px] lg:w-[150px]'>
            <Image className='p-1 w-[400px] h-auto' src={img} width={110} height={110} />
          </Link>)}
            </div>
          </div>

          <Link className='font-IRANYekan font-[400] text-[14px] mt-5  text-[#77d7e4] flex whitespace-nowrap text-center justify-center items-center' href="">{"مشاهده "}
            <svg fillRule="evenodd" className=' h-[20px] w-6' fill='#77d7e4'><path d="M11.414 12l4.293 4.293-1.414 1.414-5-5a1 1 0 010-1.414l5-5 1.414 1.414L11.414 12z"></path></svg>
            </Link>
        </div>

        <div>
        <p className='font-IRANYekan font-[500] text-[18px]'>{"گوشی موبایل"}</p>
        <p className='font-IRANYekan font-[400] text-[10px] text-[#777891] mb-3'>{" بر اساس بازدیدهای شما"}</p>
      <div className='flex flex-col divide-y  lg:border-l-[1px] border-[#ecf0ee] pl-2 max-lg:justify-center max-lg:items-center max-lg:mx-auto'>
            <div className='grid grid-rows-1 grid-flow-col gap-4  '>
        {mainMenu && mainMenu.slice(3,5).map(({title, img, link},index) => 
          <Link key={index}  href={link} className='flex flex-col  text-center justify-center items-center mx-auto  [&:nth-child(odd)]:border-l-[1px] border-[#ecf0ee] lg:max-w-[134px] lg:w-[150px]'>
            <Image className='p-1 w-[400px] h-auto' src={img} width={110} height={110} />
          </Link>)}
            </div>
            <div className='grid grid-rows-1 grid-flow-col gap-4 '>
        {mainMenu && mainMenu.slice(5,7).map(({title, img, link},index) => 
          <Link key={index}  href={link} className='flex flex-col  text-center justify-center items-center mx-auto  [&:nth-child(odd)]:border-l-[1px] border-[#ecf0ee] lg:max-w-[134px] lg:w-[150px]'>
            <Image className='p-1 w-[400px] h-auto' src={img} width={110} height={110} />
          </Link>)}
            </div>
          </div>

          <Link className='font-IRANYekan font-[400] text-[14px] mt-5  text-[#77d7e4] flex whitespace-nowrap text-center justify-center items-center' href="">{"مشاهده "}
            <svg fillRule="evenodd" className=' h-[20px] w-6' fill='#77d7e4'><path d="M11.414 12l4.293 4.293-1.414 1.414-5-5a1 1 0 010-1.414l5-5 1.414 1.414L11.414 12z"></path></svg>
            </Link>
        </div>
          
      </ScrollContainer>

          

      </div>

      {/* Digi Plus Add */}

      <div className='flex max-lg:flex-col w-[96%] ml-auto mr-auto  bg-[#941b80] whitespace-nowrap rounded-2xl mt-8'>

        <div className='flex pt-10 pb-7 px-10 justify-between'>
          <div className='z-50 '>

          <Image src={digipluslogo} width={115} height={30}/>
          <p className='text-white font-IRANYekan mt-1 text-[15px] max-lg:text-[12px]'>{"خدمات ویژه برای اعضای دیجی‌پلاس"}</p>
          <div className='flex relative top-0 right-[-50px] whitespace-nowrap gap-1 w-fit border-[1px] mt-3 mr-[50px]  border-[#f1f2f4] px-5 rounded-lg h-[40px] justify-center text-center items-center'>
            <Link className='text-[12px] font-[700] font-IRANYekan text-white  ' href="">{"  عضویت"}</Link>
            <svg fillRule="evenodd" width="24px" height="24px" viewBox="0 0 24 24" fill='white'><path  d="M11.293 19.707l1.414-1.414L7.414 13H20v-2H7.414l5.293-5.293-1.414-1.414-7 7a1 1 0 000 1.414l7 7z" clip-rule="evenodd"></path>              </svg>
            </div>
          </div>
          <Image className='md:relative md:right-[-200px] max-md:relative max-md:w-[200px] max-md:top-[50px] grow max-md:right-[-110px] md:top-[40px]' src={digiplus} width={450} height={400}/>
        </div>

<div className='flex max-lg:flex-col gap-1 my-5 mx-3 whitespace-nowrap'>

        <div className='bg-white lg:rounded-r-lg max-lg:rounded-t-lg lg:w-[300px]  h-full '>
        <div className='flex justify-between mx-10  h-[40px] mt-5'>
        <p className='font-IRANYekan font-[500] '>{"هدیه نقدی"}</p>
        <Link className='font-IRANYekan font-[500] text-[#941b80] flex whitespace-nowrap' href="">{" مشاهده همه    "}
            <svg fillRule="evenodd" className='  w-6' fill='#941b80'><path d="M11.414 12l4.293 4.293-1.414 1.414-5-5a1 1 0 010-1.414l5-5 1.414 1.414L11.414 12z"></path></svg>
            </Link>
      </div>
      <div className='flex lg:flex-col pl-2 lg:justify-center max-lg:justify-around items-center'>
            <div className='grid lg:grid-rows-1 max-lg:grid-cols-1 lg:grid-flow-col gap-4  '>
        {salesProducts && salesProducts.slice(0,2).map(({title, img, link},index) => 
          <Link key={index}  href={link} className='flex flex-col  text-center justify-center items-center mx-auto max-w-[134px]'>
            <Image className='p-1' src={img} width={140} height={140} />
          </Link>)}
            </div>
            <div className='grid lg:grid-rows-1 max-lg:grid-cols-1 lg:grid-flow-col gap-4 '>
        {salesProducts && salesProducts.slice(2,4).map(({title, img, link},index) => 
          <Link key={index}  href={link} className='flex flex-col  text-center justify-center items-center mx-auto max-w-[134px]'>
            <Image className='p-1' src={img} width={140} height={140} />
          </Link>)}
            </div>
            <div className='grid lg:grid-rows-1 max-lg:grid-cols-1 lg:grid-flow-col gap-4 '>
        {salesProducts && salesProducts.slice(4,6).map(({title, img, link},index) => 
          <Link key={index}  href={link} className='flex flex-col  text-center justify-center items-center mx-auto max-w-[134px]'>
            <Image className='p-1' src={img} width={140} height={140} />
          </Link>)}
            </div>

          </div>
          
          </div>
          <div className='bg-white lg:rounded-l-lg max-lg:rounded-b-lg lg:w-[300px]  h-full '>
          <div className='flex justify-between mx-10  h-[40px] mt-5'>
        <p className='font-IRANYekan font-[500]'>{"ارسال فوری"}</p>
        <Link className='font-IRANYekan font-[500] text-[#941b80] flex whitespace-nowrap' href="">{" مشاهده همه    "}
            <svg fillRule="evenodd" className='  w-6' fill='#941b80'><path d="M11.414 12l4.293 4.293-1.414 1.414-5-5a1 1 0 010-1.414l5-5 1.414 1.414L11.414 12z"></path></svg>
            </Link>
      </div>
      <div className='flex lg:flex-col pl-2 lg:justify-center max-lg:justify-around items-center'>
            <div className='grid lg:grid-rows-1 max-lg:grid-cols-1 lg:grid-flow-col gap-4  '>
        {salesProducts && salesProducts.slice(6,8).map(({title, img, link},index) => 
          <Link key={index}  href={link} className='flex flex-col  text-center justify-center items-center mx-auto max-w-[134px]'>
            <Image className='p-1' src={img} width={140} height={140} />
          </Link>)}
            </div>
            <div className='grid lg:grid-rows-1 max-lg:grid-cols-1 lg:grid-flow-col gap-4 '>
        {salesProducts && salesProducts.slice(8,10).map(({title, img, link},index) => 
          <Link key={index}  href={link} className='flex flex-col  text-center justify-center items-center mx-auto max-w-[134px]'>
            <Image className='p-1' src={img} width={140} height={140} />
          </Link>)}
            </div>
            <div className='grid lg:grid-rows-1 max-lg:grid-cols-1 lg:grid-flow-col gap-4 '>
        {salesProducts && salesProducts.slice(10,12).map(({title, img, link},index) => 
          <Link key={index}  href={link} className='flex flex-col  text-center justify-center items-center mx-auto max-w-[134px]'>
            <Image className='p-1' src={img} width={140} height={140} />
          </Link>)}
            </div>
          </div>
          
          </div>
          

        </div>
</div>


      {/* Digi Club Add */}

      <div className='flex w-[96%]  bg-gradient-to-l from-[#007194] to-[#35a5c8] rounded-2xl h-fit mx-[2%] overflow-hidden p-1 m-3'>
        <div className='flex max-lg:flex-col justify-between w-full mx-3 max-lg:mt-5'>
          <Image className='mr-5' src={digiclub} width={115} height={30} />
          <div className='flex gap-1 my-[15px] overflow-hidden justify-center '>

          <Link href="" className='bg-white rounded-r-lg w-fit  h-fit '>
        <div className='flex max-md:flex-col max-md:pt-2  text-center items-center text-[13px]'>
          <p className='font-IRANYekan whitespace-nowrap md:pr-4'>{"چرخ و بخت"}</p>
          <Image className='p-[2px] ' src={digiclub1} width={120} height={50} />
          </div>
          
          </Link>
          <Link href="" className=' bg-white  w-fit  h-fit '>
        <div className='flex max-md:flex-col max-md:pt-2  text-center items-center text-[13px]'>
        <p className='font-IRANYekan whitespace-nowrap md:pr-4'>{"  ماموریت‌ها"}</p>
          <Image className='p-[2px]' src={digiclub2} width={120} height={50} />
          </div>
          
          </Link>
          <Link href="" className='bg-white rounded-l-lg w-fit  h-fit '>
        <div className='flex max-md:flex-col max-md:pt-2  text-center items-center text-[13px]'>
        <p className='font-IRANYekan whitespace-nowrap md:pr-4'>{"جایزه‌ها"}</p>
          <Image className='p-[2px] ' src={digiclub3} width={120} height={50} />
          </div>
          
          </Link>

          </div>

        </div>
      </div>


      {/* Different Menu Items */}

      <div className=' w-[96%] ml-auto mr-auto lg:border-[1px] border-[#ecf0ee] rounded-lg mt-8'>
      <ScrollContainer className='lg:flex max-lg:flex-col   gap-3 p-4 '>

        <div>
        <p className='font-IRANYekan font-[500] text-[18px]'>{"گوشی موبایل"}</p>
        <p className='font-IRANYekan font-[400] text-[10px] text-[#777891] mb-3'>{" بر اساس بازدیدهای شما"}</p>
      <div className='flex flex-col divide-y  lg:border-l-[1px] border-[#ecf0ee] pl-2 max-lg:justify-center max-lg:items-center max-lg:mx-auto'>
            <div className='grid grid-rows-1 grid-flow-col gap-4  '>
        {mainMenu && mainMenu.slice(0,2).map(({title, img, link},index) => 
          <Link key={index}  href={link} className='flex flex-col  text-center justify-center items-center mx-auto  [&:nth-child(odd)]:border-l-[1px] border-[#ecf0ee] lg:max-w-[134px] lg:w-[150px]'>
            <Image className='p-1 w-[400px] h-auto' src={img} width={110} height={110} />
          </Link>)}
            </div>
            <div className='grid grid-rows-1 grid-flow-col gap-4 '>
        {mainMenu && mainMenu.slice(2,4).map(({title, img, link},index) => 
          <Link key={index}  href={link} className='flex flex-col  text-center justify-center items-center mx-auto  [&:nth-child(odd)]:border-l-[1px] border-[#ecf0ee] lg:max-w-[134px] lg:w-[150px]'>
            <Image className='p-1 w-[400px] h-auto' src={img} width={110} height={110} />
          </Link>)}
            </div>
          </div>

          <Link className='font-IRANYekan font-[400] text-[14px] mt-5  text-[#77d7e4] flex whitespace-nowrap text-center justify-center items-center' href="">{"مشاهده "}
            <svg fillRule="evenodd" className=' h-[20px] w-6' fill='#77d7e4'><path d="M11.414 12l4.293 4.293-1.414 1.414-5-5a1 1 0 010-1.414l5-5 1.414 1.414L11.414 12z"></path></svg>
            </Link>
        </div>

        <div>
        <p className='font-IRANYekan font-[500] text-[18px]'>{"گوشی موبایل"}</p>
        <p className='font-IRANYekan font-[400] text-[10px] text-[#777891] mb-3'>{" بر اساس بازدیدهای شما"}</p>
      <div className='flex flex-col divide-y  lg:border-l-[1px] border-[#ecf0ee] pl-2 max-lg:justify-center max-lg:items-center max-lg:mx-auto'>
            <div className='grid grid-rows-1 grid-flow-col gap-4  '>
        {mainMenu && mainMenu.slice(4,6).map(({title, img, link},index) => 
          <Link key={index}  href={link} className='flex flex-col  text-center justify-center items-center mx-auto  [&:nth-child(odd)]:border-l-[1px] border-[#ecf0ee] lg:max-w-[134px] lg:w-[150px]'>
            <Image className='p-1 w-[400px] h-auto' src={img} width={110} height={110} />
          </Link>)}
            </div>
            <div className='grid grid-rows-1 grid-flow-col gap-4 '>
        {mainMenu && mainMenu.slice(6,8).map(({title, img, link},index) => 
          <Link key={index}  href={link} className='flex flex-col  text-center justify-center items-center mx-auto  [&:nth-child(odd)]:border-l-[1px] border-[#ecf0ee] lg:max-w-[134px] lg:w-[150px]'>
            <Image className='p-1 w-[400px] h-auto' src={img} width={110} height={110} />
          </Link>)}
            </div>
          </div>

          <Link className='font-IRANYekan font-[400] text-[14px] mt-5  text-[#77d7e4] flex whitespace-nowrap text-center justify-center items-center' href="">{"مشاهده "}
            <svg fillRule="evenodd" className=' h-[20px] w-6' fill='#77d7e4'><path d="M11.414 12l4.293 4.293-1.414 1.414-5-5a1 1 0 010-1.414l5-5 1.414 1.414L11.414 12z"></path></svg>
            </Link>
        </div>

        <div>
        <p className='font-IRANYekan font-[500] text-[18px]'>{"گوشی موبایل"}</p>
        <p className='font-IRANYekan font-[400] text-[10px] text-[#777891] mb-3'>{" بر اساس بازدیدهای شما"}</p>
      <div className='flex flex-col divide-y  lg:border-l-[1px] border-[#ecf0ee] pl-2 max-lg:justify-center max-lg:items-center max-lg:mx-auto'>
            <div className='grid grid-rows-1 grid-flow-col gap-4  '>
        {mainMenu && mainMenu.slice(8,10).map(({title, img, link},index) => 
          <Link key={index}  href={link} className='flex flex-col  text-center justify-center items-center mx-auto  [&:nth-child(odd)]:border-l-[1px] border-[#ecf0ee] lg:max-w-[134px] lg:w-[150px]'>
            <Image className='p-1 w-[400px] h-auto' src={img} width={110} height={110} />
          </Link>)}
            </div>
            <div className='grid grid-rows-1 grid-flow-col gap-4 '>
        {mainMenu && mainMenu.slice(9,11).map(({title, img, link},index) => 
          <Link key={index}  href={link} className='flex flex-col  text-center justify-center items-center mx-auto  [&:nth-child(odd)]:border-l-[1px] border-[#ecf0ee] lg:max-w-[134px] lg:w-[150px]'>
            <Image className='p-1 w-[400px] h-auto' src={img} width={110} height={110} />
          </Link>)}
            </div>
          </div>

          <Link className='font-IRANYekan font-[400] text-[14px] mt-5  text-[#77d7e4] flex whitespace-nowrap text-center justify-center items-center' href="">{"مشاهده "}
            <svg fillRule="evenodd" className=' h-[20px] w-6' fill='#77d7e4'><path d="M11.414 12l4.293 4.293-1.414 1.414-5-5a1 1 0 010-1.414l5-5 1.414 1.414L11.414 12z"></path></svg>
            </Link>
        </div>

        <div>
        <p className='font-IRANYekan font-[500] text-[18px]'>{"گوشی موبایل"}</p>
        <p className='font-IRANYekan font-[400] text-[10px] text-[#777891] mb-3'>{" بر اساس بازدیدهای شما"}</p>
      <div className='flex flex-col divide-y  lg:border-l-[1px] border-[#ecf0ee] pl-2 max-lg:justify-center max-lg:items-center max-lg:mx-auto'>
            <div className='grid grid-rows-1 grid-flow-col gap-4  '>
        {mainMenu && mainMenu.slice(3,5).map(({title, img, link},index) => 
          <Link key={index}  href={link} className='flex flex-col  text-center justify-center items-center mx-auto  [&:nth-child(odd)]:border-l-[1px] border-[#ecf0ee] lg:max-w-[134px] lg:w-[150px]'>
            <Image className='p-1 w-[400px] h-auto' src={img} width={110} height={110} />
          </Link>)}
            </div>
            <div className='grid grid-rows-1 grid-flow-col gap-4 '>
        {mainMenu && mainMenu.slice(5,7).map(({title, img, link},index) => 
          <Link key={index}  href={link} className='flex flex-col  text-center justify-center items-center mx-auto  [&:nth-child(odd)]:border-l-[1px] border-[#ecf0ee] lg:max-w-[134px] lg:w-[150px]'>
            <Image className='p-1 w-[400px] h-auto' src={img} width={110} height={110} />
          </Link>)}
            </div>
          </div>

          <Link className='font-IRANYekan font-[400] text-[14px] mt-5  text-[#77d7e4] flex whitespace-nowrap text-center justify-center items-center' href="">{"مشاهده "}
            <svg fillRule="evenodd" className=' h-[20px] w-6' fill='#77d7e4'><path d="M11.414 12l4.293 4.293-1.414 1.414-5-5a1 1 0 010-1.414l5-5 1.414 1.414L11.414 12z"></path></svg>
            </Link>
        </div>
          
      </ScrollContainer>

          

      </div>


      {/* Best Sellers */}
      <div className=' w-[96%] ml-auto mr-auto border-[1px] border-[#ecf0ee] rounded-lg mt-8'>

      <p className='font-IRANYekan font-[600] text-[20px] text-center justify-center mt-8'>{"   پرفروش‌ترین کالاها"}</p>
  
      <ScrollContainer className='grid grid-rows-3 grid-flow-col gap-10 m-2  h-[260px] mt-8 justify-right items-center overflow-x-scroll'>

            {salesProducts && salesProducts.map(({img, title}, index) =>
      
              <Link key={index}  href="" className='flex  w-[300px]   '>
                <Image className='' src={img} width={50} height={50} />
                <p className='text-[#35a5c8] text-[30px] px-3 font-[700]'>{ConvertToArabicNumbers(index + 1)}</p>
                <div className='border-b-[#ecf0ee] border-b-[1px] w-[80%] '>

                <p className='text-[12px]  '>{title}</p>
                </div>

              </Link>)}


      </ScrollContainer>

      </div>

      {/* Banner2 */}
      <div className='flex w-[96%]  ml-auto mr-auto justify-center items-center mt-14'>
        <Image className=' rounded-3xl' src={Banner2} width={1300} height={600} />
      </div>


 
      {/* Supermarket Best Sellers */}
      <div className=' w-[96%] ml-auto mr-auto  mt-8 '>
      <p className='font-IRANYekan font-[600] text-[20px] text-center justify-center mt-8'>{"منتخب محصولات تخفیف و حراج"}</p>

      <div className='lg:hidden w-full flex  '>
      <div className='grid grid-cols-2 grid-flow-rows mt-8 w-full '>
                  {
                    salesProducts && salesProducts.map(({img, price, offPercent}, index) =>
                    <div key={index} className='flex flex-col   justify-center items-center  border-b-[1px] border-[#ecf0ee] last:border-none odd:border-l-[1px] '>
                      <Image className='p-8 ' src={img} width={200} height={200} />
                      <div className='relative bottom-[50px] left-[30%]  border-[1px] w-[30px] h-[30px] border-[#ee384e] m-2 rounded-[50%] justify-center items-center flex'><svg fillRule="evenodd" width="24px" height="24px" ><path fill="#ee384e" d="M13 4h-2v7H4v2h7v7h2v-7h7v-2h-7V4z" clip-rule="evenodd"></path></svg></div>
                      <div className='flex gap-10 max-sm:gap-5 grow relative bottom-[40px] left-[10px] font-IRANYekan text-center justify-around items-center'>
                        <p  className='bg-[#ee384e] rounded-3xl w-[30px] h-[20px] text-center text-white text-[13px] justify-center items-center pt-[1px]'>%{ConvertToArabicNumbers(offPercent)}</p>
                        <p className='flex justify-center items-center'>
                          {ConvertToArabicNumbers((price*offPercent/100).toLocaleString())}
                          <svg fillRule="evenodd" className='w-[20px] h-[20px] '><path  d="M3.057 1.742L3.821 1l.78.75-.776.741-.768-.749zm3.23 2.48c0 .622-.16 1.111-.478 1.467-.201.221-.462.39-.783.505a3.251 3.251 0 01-1.083.163h-.555c-.421 0-.801-.074-1.139-.223a2.045 2.045 0 01-.9-.738A2.238 2.238 0 011 4.148c0-.059.001-.117.004-.176.03-.55.204-1.158.525-1.827l1.095.484c-.257.532-.397 1-.419 1.403-.002.04-.004.08-.004.12 0 .252.055.458.166.618a.887.887 0 00.5.354c.085.028.178.048.278.06.079.01.16.014.243.014h.555c.458 0 .769-.081.933-.244.14-.139.21-.383.21-.731V2.02h1.2v2.202zm5.433 3.184l-.72-.7.709-.706.735.707-.724.7zm-2.856.308c.542 0 .973.19 1.293.569.297.346.445.777.445 1.293v.364h.18v-.004h.41c.221 0 .377-.028.467-.084.093-.055.14-.14.14-.258v-.069c.004-.243.017-1.044 0-1.115L13 8.05v1.574a1.4 1.4 0 01-.287.863c-.306.405-.804.607-1.495.607h-.627c-.061.733-.434 1.257-1.117 1.573-.267.122-.58.21-.937.265a5.845 5.845 0 01-.914.067v-1.159c.612 0 1.072-.082 1.38-.247.25-.132.376-.298.376-.499h-.515c-.436 0-.807-.113-1.113-.339-.367-.273-.55-.667-.55-1.18 0-.488.122-.901.367-1.24.296-.415.728-.622 1.296-.622zm.533 2.226v-.364c0-.217-.048-.389-.143-.516a.464.464 0 00-.39-.187.478.478 0 00-.396.187.705.705 0 00-.136.449.65.65 0 00.003.067c.008.125.066.22.177.283.093.054.21.08.352.08h.533zM9.5 6.707l.72.7.724-.7L10.209 6l-.709.707zm-6.694 4.888h.03c.433-.01.745-.106.937-.29.024.012.065.035.12.068l.074.039.081.042c.135.073.261.133.379.18.345.146.67.22.977.22a1.216 1.216 0 00.87-.34c.3-.285.449-.714.449-1.286a2.19 2.19 0 00-.335-1.145c-.299-.457-.732-.685-1.3-.685-.502 0-.916.192-1.242.575-.113.132-.21.284-.294.456-.032.062-.06.125-.084.191a.504.504 0 00-.03.078 1.67 1.67 0 00-.022.06c-.103.309-.171.485-.205.53-.072.09-.214.14-.427.147-.123-.005-.209-.03-.256-.076-.057-.054-.085-.153-.085-.297V7l-1.201-.5v3.562c0 .261.048.496.143.703.071.158.168.296.29.413.123.118.266.211.43.28.198.084.42.13.665.136v.001h.036zm2.752-1.014a.778.778 0 00.044-.353.868.868 0 00-.165-.47c-.1-.134-.217-.201-.35-.201-.18 0-.33.103-.447.31-.042.071-.08.158-.114.262a2.434 2.434 0 00-.04.12l-.015.053-.015.046c.142.118.323.216.544.293.18.062.325.092.433.092.044 0 .086-.05.125-.152z" clip-rule="evenodd"></path></svg>
                          </p>
                      </div>
                      <p className=' relative bottom-[40px] line-through flex justify-end mr-7 text-[#8e8fa4]'>{ConvertToArabicNumbers(Number(price).toLocaleString())}</p>
                    </div>)
                  }
            </div>

      </div>

      <div className='max-lg:hidden w-full divide-y'>

            <div className='grid grid-cols-5 grid-flow-rows mt-8  '>
                  {
                    salesProducts && salesProducts.slice(0,5).map(({img, price, offPercent}, index) =>
                    <div key={index} className=' justify-center items-center ml-auto mr-auto  w-[200px] h-[280px] border-l-[1px] border-[#ecf0ee] last:border-none'>
                      <Image className='p-8' src={img} width={200} height={200} />
                      <div className='relative bottom-[60px]  border-[1px] w-[30px] h-[30px] border-[#ee384e] m-2 rounded-[50%] justify-center items-center flex'><svg fillRule="evenodd" width="24px" height="24px" ><path fill="#ee384e" d="M13 4h-2v7H4v2h7v7h2v-7h7v-2h-7V4z" clip-rule="evenodd"></path></svg></div>
                      <div className='flex gap-20 relative bottom-[40px] left-[10px] font-IRANYekan text-center justify-center items-center'>
                        <p  className='bg-[#ee384e] rounded-3xl w-[30px] h-[20px] text-center text-white text-[13px] justify-center items-center pt-[1px]'>%{ConvertToArabicNumbers(offPercent)}</p>
                        <p className='flex justify-center items-center'>
                          {ConvertToArabicNumbers((price*offPercent/100).toLocaleString())}
                          <svg fillRule="evenodd" className='w-[20px] h-[20px] '><path  d="M3.057 1.742L3.821 1l.78.75-.776.741-.768-.749zm3.23 2.48c0 .622-.16 1.111-.478 1.467-.201.221-.462.39-.783.505a3.251 3.251 0 01-1.083.163h-.555c-.421 0-.801-.074-1.139-.223a2.045 2.045 0 01-.9-.738A2.238 2.238 0 011 4.148c0-.059.001-.117.004-.176.03-.55.204-1.158.525-1.827l1.095.484c-.257.532-.397 1-.419 1.403-.002.04-.004.08-.004.12 0 .252.055.458.166.618a.887.887 0 00.5.354c.085.028.178.048.278.06.079.01.16.014.243.014h.555c.458 0 .769-.081.933-.244.14-.139.21-.383.21-.731V2.02h1.2v2.202zm5.433 3.184l-.72-.7.709-.706.735.707-.724.7zm-2.856.308c.542 0 .973.19 1.293.569.297.346.445.777.445 1.293v.364h.18v-.004h.41c.221 0 .377-.028.467-.084.093-.055.14-.14.14-.258v-.069c.004-.243.017-1.044 0-1.115L13 8.05v1.574a1.4 1.4 0 01-.287.863c-.306.405-.804.607-1.495.607h-.627c-.061.733-.434 1.257-1.117 1.573-.267.122-.58.21-.937.265a5.845 5.845 0 01-.914.067v-1.159c.612 0 1.072-.082 1.38-.247.25-.132.376-.298.376-.499h-.515c-.436 0-.807-.113-1.113-.339-.367-.273-.55-.667-.55-1.18 0-.488.122-.901.367-1.24.296-.415.728-.622 1.296-.622zm.533 2.226v-.364c0-.217-.048-.389-.143-.516a.464.464 0 00-.39-.187.478.478 0 00-.396.187.705.705 0 00-.136.449.65.65 0 00.003.067c.008.125.066.22.177.283.093.054.21.08.352.08h.533zM9.5 6.707l.72.7.724-.7L10.209 6l-.709.707zm-6.694 4.888h.03c.433-.01.745-.106.937-.29.024.012.065.035.12.068l.074.039.081.042c.135.073.261.133.379.18.345.146.67.22.977.22a1.216 1.216 0 00.87-.34c.3-.285.449-.714.449-1.286a2.19 2.19 0 00-.335-1.145c-.299-.457-.732-.685-1.3-.685-.502 0-.916.192-1.242.575-.113.132-.21.284-.294.456-.032.062-.06.125-.084.191a.504.504 0 00-.03.078 1.67 1.67 0 00-.022.06c-.103.309-.171.485-.205.53-.072.09-.214.14-.427.147-.123-.005-.209-.03-.256-.076-.057-.054-.085-.153-.085-.297V7l-1.201-.5v3.562c0 .261.048.496.143.703.071.158.168.296.29.413.123.118.266.211.43.28.198.084.42.13.665.136v.001h.036zm2.752-1.014a.778.778 0 00.044-.353.868.868 0 00-.165-.47c-.1-.134-.217-.201-.35-.201-.18 0-.33.103-.447.31-.042.071-.08.158-.114.262a2.434 2.434 0 00-.04.12l-.015.053-.015.046c.142.118.323.216.544.293.18.062.325.092.433.092.044 0 .086-.05.125-.152z" clip-rule="evenodd"></path></svg>
                          </p>
                      </div>
                      <p className=' relative bottom-[40px] line-through flex justify-end ml-10 text-[#8e8fa4]'>{ConvertToArabicNumbers(Number(price).toLocaleString())}</p>
                    </div>)
                  }
            </div>
            <div className='grid grid-cols-5 grid-flow-rows  '>
                  {
                    salesProducts && salesProducts.slice(5,10).map(({img, price, offPercent}, index) =>
                    <div key={index}  className=' justify-center items-center ml-auto mr-auto  w-[200px] h-[280px] border-l-[1px] border-[#ecf0ee] last:border-none'>
                      <Image className='p-8' src={img} width={200} height={200} />
                      <div className='relative bottom-[60px]  border-[1px] w-[30px] h-[30px] border-[#ee384e] m-2 rounded-[50%] justify-center items-center flex'><svg fillRule="evenodd" width="24px" height="24px" ><path fill="#ee384e" d="M13 4h-2v7H4v2h7v7h2v-7h7v-2h-7V4z" clip-rule="evenodd"></path></svg></div>
                      <div className='flex gap-20 relative bottom-[40px] left-[10px] font-IRANYekan text-center justify-center items-center'>
                        <p  className='bg-[#ee384e] rounded-3xl w-[30px] h-[20px] text-center text-white text-[13px] justify-center items-center pt-[1px]'>%{ConvertToArabicNumbers(offPercent)}</p>
                        <p className='flex justify-center items-center'>
                          {ConvertToArabicNumbers((price*offPercent/100).toLocaleString())}
                          <svg fillRule="evenodd" className='w-[20px] h-[20px] '><path  d="M3.057 1.742L3.821 1l.78.75-.776.741-.768-.749zm3.23 2.48c0 .622-.16 1.111-.478 1.467-.201.221-.462.39-.783.505a3.251 3.251 0 01-1.083.163h-.555c-.421 0-.801-.074-1.139-.223a2.045 2.045 0 01-.9-.738A2.238 2.238 0 011 4.148c0-.059.001-.117.004-.176.03-.55.204-1.158.525-1.827l1.095.484c-.257.532-.397 1-.419 1.403-.002.04-.004.08-.004.12 0 .252.055.458.166.618a.887.887 0 00.5.354c.085.028.178.048.278.06.079.01.16.014.243.014h.555c.458 0 .769-.081.933-.244.14-.139.21-.383.21-.731V2.02h1.2v2.202zm5.433 3.184l-.72-.7.709-.706.735.707-.724.7zm-2.856.308c.542 0 .973.19 1.293.569.297.346.445.777.445 1.293v.364h.18v-.004h.41c.221 0 .377-.028.467-.084.093-.055.14-.14.14-.258v-.069c.004-.243.017-1.044 0-1.115L13 8.05v1.574a1.4 1.4 0 01-.287.863c-.306.405-.804.607-1.495.607h-.627c-.061.733-.434 1.257-1.117 1.573-.267.122-.58.21-.937.265a5.845 5.845 0 01-.914.067v-1.159c.612 0 1.072-.082 1.38-.247.25-.132.376-.298.376-.499h-.515c-.436 0-.807-.113-1.113-.339-.367-.273-.55-.667-.55-1.18 0-.488.122-.901.367-1.24.296-.415.728-.622 1.296-.622zm.533 2.226v-.364c0-.217-.048-.389-.143-.516a.464.464 0 00-.39-.187.478.478 0 00-.396.187.705.705 0 00-.136.449.65.65 0 00.003.067c.008.125.066.22.177.283.093.054.21.08.352.08h.533zM9.5 6.707l.72.7.724-.7L10.209 6l-.709.707zm-6.694 4.888h.03c.433-.01.745-.106.937-.29.024.012.065.035.12.068l.074.039.081.042c.135.073.261.133.379.18.345.146.67.22.977.22a1.216 1.216 0 00.87-.34c.3-.285.449-.714.449-1.286a2.19 2.19 0 00-.335-1.145c-.299-.457-.732-.685-1.3-.685-.502 0-.916.192-1.242.575-.113.132-.21.284-.294.456-.032.062-.06.125-.084.191a.504.504 0 00-.03.078 1.67 1.67 0 00-.022.06c-.103.309-.171.485-.205.53-.072.09-.214.14-.427.147-.123-.005-.209-.03-.256-.076-.057-.054-.085-.153-.085-.297V7l-1.201-.5v3.562c0 .261.048.496.143.703.071.158.168.296.29.413.123.118.266.211.43.28.198.084.42.13.665.136v.001h.036zm2.752-1.014a.778.778 0 00.044-.353.868.868 0 00-.165-.47c-.1-.134-.217-.201-.35-.201-.18 0-.33.103-.447.31-.042.071-.08.158-.114.262a2.434 2.434 0 00-.04.12l-.015.053-.015.046c.142.118.323.216.544.293.18.062.325.092.433.092.044 0 .086-.05.125-.152z" clip-rule="evenodd"></path></svg>
                          </p>
                      </div>
                      <p className=' relative bottom-[40px] line-through flex justify-end ml-10 text-[#8e8fa4]'>{ConvertToArabicNumbers(Number(price).toLocaleString())}</p>
                    </div>)
                  }
            </div>
            <div className='grid grid-cols-5 grid-flow-rows  '>
                  {
                    salesProducts && salesProducts.slice(10,15).map(({img, price, offPercent}, index) =>
                    <div key={index} className=' justify-center items-center ml-auto mr-auto  w-[200px] h-[280px] border-l-[1px] border-[#ecf0ee] last:border-none'>
                      <Image className='p-8' src={img} width={200} height={200} />
                      <div className='relative bottom-[60px]  border-[1px] w-[30px] h-[30px] border-[#ee384e] m-2 rounded-[50%] justify-center items-center flex'><svg fillRule="evenodd" width="24px" height="24px" ><path fill="#ee384e" d="M13 4h-2v7H4v2h7v7h2v-7h7v-2h-7V4z" clip-rule="evenodd"></path></svg></div>
                      <div className='flex gap-20 relative bottom-[40px] left-[10px] font-IRANYekan text-center justify-center items-center'>
                        <p  className='bg-[#ee384e] rounded-3xl w-[30px] h-[20px] text-center text-white text-[13px] justify-center items-center pt-[1px]'>%{ConvertToArabicNumbers(offPercent)}</p>
                        <p className='flex justify-center items-center'>
                          {ConvertToArabicNumbers((price*offPercent/100).toLocaleString())}
                          <svg fillRule="evenodd" className='w-[20px] h-[20px] '><path  d="M3.057 1.742L3.821 1l.78.75-.776.741-.768-.749zm3.23 2.48c0 .622-.16 1.111-.478 1.467-.201.221-.462.39-.783.505a3.251 3.251 0 01-1.083.163h-.555c-.421 0-.801-.074-1.139-.223a2.045 2.045 0 01-.9-.738A2.238 2.238 0 011 4.148c0-.059.001-.117.004-.176.03-.55.204-1.158.525-1.827l1.095.484c-.257.532-.397 1-.419 1.403-.002.04-.004.08-.004.12 0 .252.055.458.166.618a.887.887 0 00.5.354c.085.028.178.048.278.06.079.01.16.014.243.014h.555c.458 0 .769-.081.933-.244.14-.139.21-.383.21-.731V2.02h1.2v2.202zm5.433 3.184l-.72-.7.709-.706.735.707-.724.7zm-2.856.308c.542 0 .973.19 1.293.569.297.346.445.777.445 1.293v.364h.18v-.004h.41c.221 0 .377-.028.467-.084.093-.055.14-.14.14-.258v-.069c.004-.243.017-1.044 0-1.115L13 8.05v1.574a1.4 1.4 0 01-.287.863c-.306.405-.804.607-1.495.607h-.627c-.061.733-.434 1.257-1.117 1.573-.267.122-.58.21-.937.265a5.845 5.845 0 01-.914.067v-1.159c.612 0 1.072-.082 1.38-.247.25-.132.376-.298.376-.499h-.515c-.436 0-.807-.113-1.113-.339-.367-.273-.55-.667-.55-1.18 0-.488.122-.901.367-1.24.296-.415.728-.622 1.296-.622zm.533 2.226v-.364c0-.217-.048-.389-.143-.516a.464.464 0 00-.39-.187.478.478 0 00-.396.187.705.705 0 00-.136.449.65.65 0 00.003.067c.008.125.066.22.177.283.093.054.21.08.352.08h.533zM9.5 6.707l.72.7.724-.7L10.209 6l-.709.707zm-6.694 4.888h.03c.433-.01.745-.106.937-.29.024.012.065.035.12.068l.074.039.081.042c.135.073.261.133.379.18.345.146.67.22.977.22a1.216 1.216 0 00.87-.34c.3-.285.449-.714.449-1.286a2.19 2.19 0 00-.335-1.145c-.299-.457-.732-.685-1.3-.685-.502 0-.916.192-1.242.575-.113.132-.21.284-.294.456-.032.062-.06.125-.084.191a.504.504 0 00-.03.078 1.67 1.67 0 00-.022.06c-.103.309-.171.485-.205.53-.072.09-.214.14-.427.147-.123-.005-.209-.03-.256-.076-.057-.054-.085-.153-.085-.297V7l-1.201-.5v3.562c0 .261.048.496.143.703.071.158.168.296.29.413.123.118.266.211.43.28.198.084.42.13.665.136v.001h.036zm2.752-1.014a.778.778 0 00.044-.353.868.868 0 00-.165-.47c-.1-.134-.217-.201-.35-.201-.18 0-.33.103-.447.31-.042.071-.08.158-.114.262a2.434 2.434 0 00-.04.12l-.015.053-.015.046c.142.118.323.216.544.293.18.062.325.092.433.092.044 0 .086-.05.125-.152z" clip-rule="evenodd"></path></svg>
                          </p>
                      </div>
                      <p className=' relative bottom-[40px] line-through flex justify-end ml-10 text-[#8e8fa4]'>{ConvertToArabicNumbers(Number(price).toLocaleString())}</p>
                    </div>)
                  }
            </div>



      </div>

            <Link className='font-IRANYekan font-[400] text-[14px] mt-8 mb-8  text-[#77d7e4] flex whitespace-nowrap text-center justify-center items-center' href="">{"مشاهده بیشتر "}
            <svg fillRule="evenodd" className=' h-[20px] w-6' fill='#77d7e4'><path d="M11.414 12l4.293 4.293-1.414 1.414-5-5a1 1 0 010-1.414l5-5 1.414 1.414L11.414 12z"></path></svg>
            </Link>
    

      </div>



      {/* Blog */}

      <div className='flex justify-between mx-10 mt-10 h-[40px] text-[12px]'>
        <p className='font-IRANYekan font-[500] '>{"خواندنی‌ها"}</p>
        <Link className='font-IRANYekan font-[500] text-[#77d7e4] flex whitespace-nowrap' href="">{" مطالب بیشتر در دیجیکالا مگ"}
            <svg fillRule="evenodd" className='  w-6' fill='#77d7e4'><path d="M11.414 12l4.293 4.293-1.414 1.414-5-5a1 1 0 010-1.414l5-5 1.414 1.414L11.414 12z"></path></svg>
            </Link>
      </div>

      <div className='flex max-lg:flex-col gap-3 justify-around w-[96%] ml-auto mr-auto items-center'>
        {blog && blog.map(({title, img, link}, index) =>
         <div key={index}  className='border-[1px] border-[#ecf0ee] rounded-xl w-full h-fit overflow-hidden'>
          <Image src={img} width={1000} height={200} alt=''/>
          <p className='font-IRANYekan font-[400] m-3 text-[12px]'>{title}</p>

        </div>)}


      </div>

<div className='bg-[#ee384e] cursor-pointer rounded-[50%] w-[50px] h-[50px] justify-center items-center fixed bottom-[10px] left-[50px] z-[100]'>
  <svg fillRule="evenodd" className='z-[101] fixed bottom-[-104px] left-[63px]' fill='white'><path d="M18 17a4.001 4.001 0 01-3.14 3.907A3 3 0 1012 23h2a6 6 0 006-6v-.256a4.502 4.502 0 000-8.488V7a6 6 0 00-6-6h-4a6 6 0 00-6 6v1.256A4.502 4.502 0 005.5 17H7a1 1 0 001-1V9a1 1 0 00-1-1H6V7a4 4 0 014-4h4a4 4 0 014 4v1h-1a1 1 0 00-1 1v7a1 1 0 001 1h1zm.5-2H18v-5h.5a2.5 2.5 0 010 5zM6 10h-.5a2.5 2.5 0 000 5H6v-5zm7 10a1 1 0 11-2 0 1 1 0 012 0z" clip-rule="evenodd"></path></svg>
</div>


      </main>

      <footer onClick={() => {openSmallMenu && setOpenSmallMenu(false)}} className={` border-t-[1px] border-[#ecf0ee] mt-10 ${open || openSmallMenu && "opacity-50"}`}>


        {/* Logo */}
        {/* Text */}

        <div className='flex justify-between items-center mt-10 mx-5 '>
        <Link  target="_blank" href=""  className={`block object-cover`}>
          <Image className={`w-[100px] object-cover `} height={90} width={90}  src={logo} alt="" title=""/>
        </Link>
        <div onClick={typeof window === "object" && window.scrollTo({ y: 0, behavior: 'smooth' })} className='flex cursor-pointer  whitespace-nowrap gap-3 w-fit border-[1px]    border-[#f1f2f4] px-3 rounded-lg h-[45px] justify-center text-center items-center'>
          <Link  className='text-[12px] font-[700] font-IRANYekan  ' href="">{"بازگشت به بالا "}</Link>
          <svg fillRule="evenodd" width="24px" height="24px" viewBox="0 0 24 24" fill='#3f4064'><path d="M7.707 14.707l-1.414-1.414 5-5a1 1 0 011.414 0l5 5-1.414 1.414L12 10.414l-4.293 4.293z"></path></svg>
        </div>

        </div>

        {/* Matto */}

        <div className='mt-2 mx-5 '>
          <p className='font-IRANYekan text-[12px]'>{"تلفن پشتیبانی ۶۱۹۳۰۰۰۰ -  ۰۲۱ | ۷ روز هفته، ۲۴ ساعته پاسخگوی شما هستیم"}</p>
        </div>

        <div className='flex flex-wrap justify-around mx-16 mt-10 max-lg:hidden'>
      {matto && matto.map(({title, img}, index) => 
      <div key={index}  className='text-center items-center flex flex-col '>
        <Image src={img} width={50} height={50}  alt=''/>
        <p className='font-IRANYekan font-[400] text-[12px]'>{title}</p>
      </div>)}

      </div>

        {/* Links */}

        <div className='flex justify-around mt-10 max-lg:flex-col'>

          <div className='flex gap-10 max-lg:mx-5'>
  

          <div className='flex flex-col font-IRANYekan gap-3'>
            <p className='font-IRANYekan font-[600] text-[15px]'>{"با دیجی‌کالا"}</p>
            <Link className='font-[500] text-[15px] text-[#777891] max-lg:text-[12px]' href="" alt="">{"اتاق خبر دیجی‌کالا"}</Link>
            <Link className='font-[500] text-[15px] text-[#777891] max-lg:text-[12px]' href="" alt="">{"فروش در دیجی‌کالا"}</Link>
            <Link className='font-[500] text-[15px] text-[#777891] max-lg:text-[12px]' href="" alt="">{"فرصت‌های شغلی"}</Link>
            <Link className='font-[500] text-[15px] text-[#777891] max-lg:text-[12px]' href="" alt="">{"گزارش تخلف در دیجی‌کالا"}</Link>
            <Link className='font-[500] text-[15px] text-[#777891] max-lg:text-[12px]' href="" alt="">{"تماس با دیجی‌کالا"}</Link>
            <Link className='font-[500] text-[15px] text-[#777891] max-lg:text-[12px]' href="" alt="">{"درباره دیجی‌کالا"}</Link>

          </div>

          <div className='flex flex-col font-IRANYekan gap-3'>
          <p className='font-IRANYekan font-[600] text-[15px]'>{"خدمات مشتریان"}</p>
          <Link className='font-[500] text-[15px] text-[#777891] max-lg:text-[12px]' href="" alt="">{"پاسخ به پرسش‌های متداول"}</Link>
          <Link className='font-[500] text-[15px] text-[#777891] max-lg:text-[12px]' href="" alt="">{"رویه‌های بازگرداندن کالا"}</Link>
          <Link className='font-[500] text-[15px] text-[#777891] max-lg:text-[12px]' href="" alt="">{"شرایط استفاده"}</Link>
          <Link className='font-[500] text-[15px] text-[#777891] max-lg:text-[12px]' href="" alt="">{"حریم خصوصی"}</Link>
          <Link className='font-[500] text-[15px] text-[#777891] max-lg:text-[12px]' href="" alt="">{"گزارش باگ"}</Link>

            
            </div>

            <div className='flex flex-col font-IRANYekan gap-3 max-lg:hidden'>
            <p className='font-IRANYekan font-[600] text-[15px]'>{"راهنمای خرید از دیجی‌کالا"}</p>
            <Link className='font-[500] text-[15px] text-[#777891] max-lg:text-[12px]' href="" alt="">{"نحوه ثبت سفارش"}</Link>
            <Link className='font-[500] text-[15px] text-[#777891] max-lg:text-[12px]' href="" alt="">{"رویه ارسال سفارش"}</Link>
            <Link className='font-[500] text-[15px] text-[#777891] max-lg:text-[12px]' href="" alt="">{"شیوه‌های پرداخت"}</Link>

            
            </div>

            </div>

            <div className='flex flex-col  max-lg:mx-5 max-lg:mt-5'>
              <div className='max-lg:flex justify-between'>
            <p className='font-IRANYekan font-[600] text-[15px]'>{"همراه ما باشید!"}</p>
            <div className='flex gap-5 h-[50px]  mt-5'>
              <Link href=""><svg fillRule="evenodd" className='w-[30px] h-[30px]' fill='#9e9fb1'><path  d="M16.033 3H7.967A4.973 4.973 0 003 7.967v8.066A4.973 4.973 0 007.967 21h8.066A4.973 4.973 0 0021 16.033V7.967A4.973 4.973 0 0016.033 3zm3.37 13.033a3.374 3.374 0 01-3.37 3.37H7.967a3.374 3.374 0 01-3.37-3.37V7.967a3.374 3.374 0 013.37-3.37h8.066a3.374 3.374 0 013.37 3.37v8.066zM7.362 12A4.643 4.643 0 0112 7.362 4.643 4.643 0 0116.638 12 4.643 4.643 0 0112 16.638 4.643 4.643 0 017.362 12zM12 15.041a3.044 3.044 0 01-3.041-3.04A3.045 3.045 0 0112 8.958 3.045 3.045 0 0115.041 12 3.044 3.044 0 0112 15.041zm4.005-8.69c.218-.219.52-.343.828-.343.308 0 .61.124.828.343a1.176 1.176 0 010 1.656c-.218.218-.52.343-.828.343a1.18 1.18 0 01-.828-.343 1.18 1.18 0 01-.343-.828c0-.309.125-.611.343-.828z" clip-rule="evenodd"></path></svg></Link>
              <Link href=""><svg fillRule="evenodd" className='w-[30px] h-[30px]' fill='#9e9fb1'><path d="M21 6.73a7.374 7.374 0 01-2.12.581 3.708 3.708 0 001.623-2.041 7.444 7.444 0 01-2.346.896 3.693 3.693 0 00-6.292 3.367 10.483 10.483 0 01-7.61-3.858 3.665 3.665 0 00-.5 1.856 3.69 3.69 0 001.642 3.073 3.692 3.692 0 01-1.673-.464v.046a3.696 3.696 0 002.962 3.621c-.31.083-.636.13-.973.13-.238 0-.47-.024-.695-.07a3.695 3.695 0 003.448 2.565 7.409 7.409 0 01-4.585 1.579c-.298 0-.592-.018-.881-.051a10.437 10.437 0 005.66 1.661c6.793 0 10.506-5.626 10.506-10.505l-.013-.478A7.373 7.373 0 0021 6.73z"></path></svg></Link>
              <Link href=""><svg fillRule="evenodd" className='w-[30px] h-[30px]' fill='#9e9fb1'><path  d="M6.4 4h19.2C26.92 4 28 5.08 28 6.4v19.2c0 1.32-1.08 2.4-2.4 2.4H6.4C5.08 28 4 26.92 4 25.6V6.4C4 5.08 5.08 4 6.4 4zm1.2 20.4h3.6V13.6H7.6v10.8zm1.8-12.84c-1.2 0-2.16-.96-2.16-2.16 0-1.2.96-2.16 2.16-2.16 1.2 0 2.16.96 2.16 2.16 0 1.2-.96 2.16-2.16 2.16zM20.8 24.4h3.6v-6.84c0-2.28-1.92-4.2-4.2-4.2-1.08 0-2.4.72-3 1.68V13.6h-3.6v10.8h3.6v-6.36c0-.96.84-1.8 1.8-1.8.96 0 1.8.84 1.8 1.8v6.36z" clip-rule="evenodd"></path></svg></Link>
              <Link href=""><svg fillRule="evenodd" className='w-[30px] h-[30px]' fill='#9e9fb1'><path  d="M10.58 4.07a5.768 5.768 0 00-.804.33c-.66.324-1.321.978-1.626 1.609-.172.347-.546 1.597-.804 2.667-.029.11.184-.075.781-.671 1.184-1.192 2.31-1.95 3.763-2.546.65-.266 1.92-.625 2.47-.7.168-.024.294-.052.277-.064a28.734 28.734 0 00-1.195-.347c-1.046-.284-1.241-.319-1.856-.342-.494-.017-.781 0-1.005.064zm1.207 2.523a10.498 10.498 0 013.493-.984 10.5 10.5 0 016.877 1.76c2.333 1.573 3.861 3.911 4.436 6.77.149.746.149 2.957 0 3.703-.575 2.859-2.103 5.197-4.436 6.77a10.405 10.405 0 01-10.37.776 10.4 10.4 0 01-5.831-7.899c-.11-.74-.11-2.257 0-2.997a10.399 10.399 0 015.831-7.9zm4.395 5.463c.408-1.592-.643-3.276-2.258-3.611-.994-.209-1.947.086-2.688.827-1.173 1.18-1.178 2.969-.018 4.138 1.615 1.626 4.39.868 4.964-1.354zm5.332-2.142c1.333.348 2.223 1.482 2.223 2.83 0 .874-.247 1.499-.833 2.09-.402.404-.89.682-1.413.81-.724.167-1.333.092-2.04-.261-1.149-.567-1.81-1.898-1.557-3.13.132-.649.35-1.06.816-1.534.603-.608 1.224-.874 2.068-.886.224-.005.558.035.736.081zm-3.982 6.111c0-.463-.27-.885-.706-1.11-1.08-.562-2.264.566-1.758 1.683.155.347.258.457.597.614.902.428 1.867-.186 1.867-1.187zm-5.165.284c.173.029.523.162.776.289 1.149.567 1.81 1.898 1.557 3.13-.132.649-.35 1.06-.816 1.534-.942.955-2.258 1.163-3.464.55-1.546-.787-2.057-2.83-1.069-4.277.66-.954 1.85-1.44 3.016-1.226zm9.813 4.93c.316-1.522-.643-3.055-2.154-3.449a2.991 2.991 0 00-2.838.776 2.935 2.935 0 00.017 4.172c.89.897 2.24 1.11 3.43.532.695-.335 1.379-1.238 1.545-2.031zM23.48 7.212c-.144-.104-.259-.208-.259-.231 0-.024.172.011.39.069.213.058.8.214 1.305.347 1.23.319 1.746.579 2.327 1.152a3.627 3.627 0 011.091 2.639c0 .457-.046.694-.367 1.932a46.007 46.007 0 01-.397 1.435c-.017.012-.057-.167-.098-.399-.235-1.504-.89-3.165-1.723-4.41-.609-.92-1.614-2.036-2.27-2.534zM4.893 17.831c0 .023-.144.578-.316 1.238-.27 1.036-.316 1.273-.316 1.725 0 1.024.373 1.92 1.086 2.632.614.608 1.028.81 2.545 1.216.672.179 1.235.318 1.246.312.012-.011-.051-.08-.143-.15-.322-.25-1.362-1.296-1.707-1.725-1.05-1.302-1.867-3.026-2.223-4.664-.103-.492-.172-.717-.172-.584zm19.442 6.151c.287-.295.626-.671.752-.84.127-.161.236-.277.247-.248.023.07-.591 2.367-.74 2.755-.288.787-.995 1.545-1.788 1.938-1.074.532-1.786.544-3.55.07-1.334-.358-1.333-.36-1.31-.382a5.53 5.53 0 01.62-.145 11.493 11.493 0 005.769-3.148z" clip-rule="evenodd"></path></svg></Link>
            </div>

              </div>

            <div>
              <p className='font-IRANYekan font-[600] text-[15px] max-lg:hidden'>{"با ثبت ایمیل، از جدید‌ترین تخفیف‌ها با‌خبر شوید"}</p>
            </div>
            <div className='max-lg:flex'>
                <input className="w-[250px] max-lg:w-full mt-3 placeholder:text-[#777891] text-[12px] font-[400] font-IRANYekan h-[45px] text-[#8e8fa4] outline-none bg-[#f1f2f4] rounded-lg indent-[10px] " placeholder={"ایمیل شما"}/>
                <button className='bg-[#777891] max-lg:mt-3 h-[45px] w-[100px] rounded-lg mr-[10px] text-white font-IRANYekan' type='submit' disabled>{"ثبت"}</button>

            </div>

            
            </div>



        </div>


        {/* App Download */}

        <div className='flex max-lg:flex-col gap-1 w-[96%] bg-[#3c4b6d] rounded-lg h-fit py-3 text-center mx-[2%] overflow-hidden  mt-[15px] justify-between items-center align-middle'>
          <div className='flex h-[50px] lg:mr-5'>
          <Image className='max-lg:w-[30px] max-lg:h-[30px]'  src={FooterLogo2} width={50} height={50} alt=''/>
            <p className='justify-center items-center text-white max-lg:text-[15px] text-[25px] font-IRANYekan font-[500] mr-5 mt-1 '>{"دانلود اپلیکیشن دیجی‌کالا "}</p>
          </div>

          <div className='flex max-lg:flex-wrap max-lg:justify-center gap-4 lg:ml-5'>
          <Image  src={app1} width={120} height={50} alt=''/>
          <Image  src={app2} width={120} height={50} alt=''/>
          <Image  src={app3} width={120} height={50} alt=''/>
          <Image  src={app4} width={120} height={50} alt=''/>
          <div className='flex gap-1 w-[50px] h-[37px] mr-2 bg-white rounded-sm border-[1px] max-lg:hidden border-[#e0e0e6] justify-center items-center'>
            <div className='w-[7px] h-[7px] rounded-[50%] bg-[#3c4b6d]'></div>
            <div className='w-[7px] h-[7px] rounded-[50%] bg-[#3c4b6d]'></div>
            <div className='w-[7px] h-[7px] rounded-[50%] bg-[#3c4b6d]'></div>
          </div>
          </div>

          <Link className='lg:hidden font-IRANYekan font-[400] text-[14px] mt-3  text-[#fff] flex whitespace-nowrap' href="">{"اطلاعات بیشتر "}
            <svg fillRule="evenodd" className=' h-[20px] w-6' fill='#fff'><path d="M11.414 12l4.293 4.293-1.414 1.414-5-5a1 1 0 010-1.414l5-5 1.414 1.414L11.414 12z"></path></svg>
            </Link>

      </div>



        {/* More Text */}

        <div className='flex max-lg:flex-col justify-between mx-8 font-IRANYekan border-t-[1px] border-[#ecf0ee] mt-6'>
          <div className='flex flex-col max-w-[700px] mt-10'>
            <p className='font-[500] text-[14px]'>{"فروشگاه اینترنتی دیجی‌کالا، بررسی، انتخاب و خرید آنلاین"}</p>
            <p className='font-[400] text-[12px] mt-3 text-[#777891]'>{"یک خرید اینترنتی مطمئن، نیازمند فروشگاهی است که بتواند کالاهایی متنوع، باکیفیت و دارای قیمت مناسب را در مدت زمانی کوتاه به دست مشتریان خود برساند و ضمانت بازگشت کالا هم داشته باشد؛ ویژگی‌هایی که فروشگاه اینترنتی دیجی‌کالا سال‌هاست بر روی آن‌ها کار کرده و توانسته از این طریق مشتریان ثابت خود را داشته باشد."}</p>
            <Link className='font-IRANYekan font-[400] text-[14px] mt-3  text-[#777891] flex whitespace-nowrap' href="">{"مشاهده بیشتر"}
            <svg fillRule="evenodd" className=' h-[20px] w-6' fill='#777891'><path d="M11.414 12l4.293 4.293-1.414 1.414-5-5a1 1 0 010-1.414l5-5 1.414 1.414L11.414 12z"></path></svg>
            </Link>
          </div>
          <div className='flex h-fit gap-2 justify-center mt-10'>
            <Image className='border-[1px] border-[#ecf0ee] rounded-lg p-2' src={Enamad} width={80} height={40}/>
            <Image className='border-[1px] border-[#ecf0ee] rounded-lg p-2' src={Kasbokar} width={80} height={40}/>
            <Image className='border-[1px] border-[#ecf0ee] rounded-lg p-2' src={Rezi} width={80} height={40}/>

          </div>


        </div>


        {/* Copyright Text */}

        <div className='flex text-center max-lg:text-right justify-center mx-8 font-IRANYekan border-t-[1px] border-[#ecf0ee] mt-10'>
          <p className=' font-[400] text-[12px] mt-10 mb-10 text-[#777891]'>{"برای استفاده از مطالب دیجی‌کالا، داشتن «هدف غیرتجاری» و ذکر «منبع» کافیست. تمام حقوق اين وب‌سايت نیز برای شرکت نوآوران فن آوازه (فروشگاه آنلاین دیجی‌کالا) است."}</p>

        </div>

        {/* Big Customers Logo */}
        
        <div className='w-full block'>

        <div className='ml-auto mr-auto flex flex-wrap w-full bg-[#f1f2f4] text-center items-center justify-center '>
      {customers && customers.map(({img}, index) => 
      <Link href="" key={index}  className='text-center items-center justify-center flex flex-col flex-wrap  h-[60px]    border-[#d4d4d4] border-b-[1px] border-r-[1px] grow px-[1%]  align-middle '>
        <Image className=' p-1' src={img} width={100} height={90}  alt=''/>
      </Link>)}

      </div>
        </div>



        {/* Online Chat Logo */}



      </footer>
    </div>
  )
}
