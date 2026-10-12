import { Button } from "react-bootstrap";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaPinterest,
  FaCcVisa,
  FaCreditCard,
  FaCcPaypal,
  FaCcMastercard,
  FaCcAmex,
} from "react-icons/fa";
import ProductList from "../components/ProductList";
import { useState } from "react";
const products = [
  {
    id: 1,
    name: "سماعات Sony WH-1000XM5",
    description:
      "سماعات لاسلكية فوق الأذن مع أفضل تقنية لإلغاء الضوضاء وصوت عالي الدقة وتصميم مريح للارتداء الطويل.",
    price: 398.0,
    offer: 10,
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80",
    rating: 3,
  },
  {
    id: 2,
    name: "ساعة ذكية Apple Watch Series 9",
    description:
      "شاشة OLED براقة، معالج S9 سريع، تتبع للأنشطة الرياضية وقياس الأكسجين في الدم مع إيماءة الضغط المزدوج.",
    price: 399.0,
    offer: 5,
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&q=80",
    rating: 3.8,
  },
  {
    id: 3,
    name: "ماوس ألعاب Logitech G Pro X Superlight",
    description:
      "ماوس لاسلكي خفيف الوزن جداً (أقل من 63 جرام) مخصص للألعاب التنافسية مع حساس HERO 25K دقيق.",
    price: 129.99,
    offer: 3,
    image:
      "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=500&q=80",
    rating: 4.6,
  },
  {
    id: 4,
    name: "لوحة مفاتيح ميكانيكية Keychron K2",
    description:
      "كيبورد ميكانيكي لاسلكي بنسبة 75% مع إضاءة RGB وتوافق كامل مع أنظمة Windows و macOS.",
    price: 89.99,
    offer: 7,
    image:
      "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500&q=80",
    rating: 4,
  },
  {
    id: 5,
    name: "شاشة ألعاب ASUS ROG Swift 27 inch",
    description:
      "شاشة بدقة QHD ومعدل تحديث 240Hz وزمن استجابة 1ms، تدعم تقنيات G-Sync لعرض سلس بدون تقطيع.",
    price: 649.0,
    offer: 15,
    image:
      "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=500&q=80",
    rating: 4.9,
  },
  {
    id: 6,
    name: "حافظة ماء حرارية Hydro Flask",
    description:
      "قارورة مئوية مصنوعة من الفولاذ المقاوم للصدأ تعزل الحرارة والبرودة لأكثر من 24 ساعة بسعة 946 مل.",
    price: 44.95,
    offer: 2,
    image:
      "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=500&q=80",
    rating: 4.8,
  },
];
const Home = ({ search }) => {
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase()),
  );
  return (
    <>
      <div className="container">
        <div className="mt-5">
          <h2 className="pt-5 mt-5 mb-3 text-center">Our Products</h2>
        </div>
        <ProductList products={filteredProducts} />
        <div className="mt-4">
          <h4 className="text-center">Sign Up for the NEWSLETTER</h4>
        </div>
        <div className=" mb-4 d-flex flex-row justify-content-center">
          <input
            type="email"
            placeholder="Enter Your Email"
            className="form-control w-25  rounded-start-pill"
          />
          <Button className="btn btn-danger  rounded-end-pill">subscribe</Button>
        </div>
        <div className="d-flex justify-content-center mb-5">
          <Button className="text-danger btn btn-light border-4 p-2">
            <FaFacebookF />
          </Button>
          <Button className="text-danger btn btn-light border-4 p-2 ms-2">
            <FaTwitter />
          </Button>
          <Button className="text-danger btn btn-light border-4 p-2 ms-2">
            <FaInstagram />
          </Button>
          <Button className="text-danger btn btn-light border-4 p-2 ms-2">
            <FaPinterest />
          </Button>
        </div>
      </div>
      <div className="p-5 bg-black text-light d-flex flex-row justify-content-around">
        <div className="w-20">
          <h5 className="ms-2">About Us</h5>
          <ul className="list-unstyled">
            <li className="ms-2">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut.
            </li>
            <li>
              <Button className="bg-black border-0">1734 Stonecoal Road</Button>
            </li>
            <li>
              <Button className="bg-black border-0">+021-95-51-84</Button>
            </li>
            <li>
              <Button className="bg-black border-0">email@email.com</Button>
            </li>
          </ul>
        </div>
        <div>
          <h5 className="ms-2">Categories</h5>
          <ul className="list-unstyled">
            <li>
              <Button className="bg-black border-0">Hot deals</Button>
            </li>
            <li>
              <Button className="bg-black border-0">Laptops</Button>
            </li>
            <li>
              <Button className="bg-black border-0">Smartphones</Button>
            </li>
            <li>
              <Button className="bg-black border-0">Cameras</Button>
            </li>
            <li>
              <Button className="bg-black border-0">Accessories</Button>
            </li>
          </ul>
        </div>
        <div>
          <h5 className="ms-2">Information</h5>
          <ul className="list-unstyled">
            <li>
              <Button className="bg-black border-0">About Us</Button>
            </li>
            <li>
              <Button className="bg-black border-0">Contact Us</Button>
            </li>
            <li>
              <Button className="bg-black border-0">Privacy Policy</Button>
            </li>
            <li>
              <Button className="bg-black border-0">Orders and Returns</Button>
            </li>
            <li>
              <Button className="bg-black border-0">Terms & Conditions</Button>
            </li>
          </ul>
        </div>
        <div>
          <h5 className="ms-2">Service</h5>
          <ul className="list-unstyled">
            <li>
              <Button className="bg-black border-0">My Account</Button>
            </li>
            <li>
              <Button className="bg-black border-0">View Cart</Button>
            </li>
            <li>
              <Button className="bg-black border-0">Wishlist</Button>
            </li>
            <li>
              <Button className="bg-black border-0">Track My Order</Button>
            </li>
            <li>
              <Button className="bg-black border-0">Help</Button>
            </li>
          </ul>
        </div>
      </div>
      <div className="bg-dark d-flex justify-content-center py-3">
        <div>
          <Button className="p-0 text-black fs-1 bg-dark border-0 ms-3 fw-bold">
            <FaCcAmex />
          </Button>
          <Button className="p-0 text-black fs-1 bg-dark border-0 ms-3 fw-bold">
            <FaCcMastercard />
          </Button>
          <Button className="p-0 text-black fs-1 bg-dark border-0 ms-3 fw-bold">
            <FaCcPaypal />
          </Button>
          <Button className="p-0 text-black fs-1 bg-dark border-0 ms-3 fw-bold">
            <FaCreditCard />
          </Button>
          <Button className="p-0 text-black fs-1 bg-dark border-0 ms-3 fw-bold">
            <FaCcVisa />
          </Button>
        </div>
      </div>
      <div className="bg-dark text-light py-4 text-center">
        <p className="fw-lighter">
          Copyright ©2026 All rights reserved | This template is made with by
          Colorlib
        </p>
      </div>
    </>
  );
};
export default Home;
