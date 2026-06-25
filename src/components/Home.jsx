import React from 'react';
import Title from './widgets/Title';
import ServiceCard from './widgets/service';
import ProductCard from './widgets/AiProduct';
import ChooseCard from './widgets/why-choose';
import BusinessVertical from './widgets/BusinessVertical';
import ProcessCard from './widgets/ProcessCard';
import VisionCard from './widgets/vision-card';
import businessVerticals from '../data/businessVerticals.json';
import processCards from '../data/processCards.json';
import bankingImg from '../assets/images/business/banking.png';
import fintechImg from '../assets/images/business/fintech.png';
import healthcareImg from '../assets/images/business/healthcare.png';
import insuranceImg from '../assets/images/business/insurance.png';
import investmentImg from '../assets/images/business/investment.png';
import manufacturingImg from '../assets/images/business/manufacturing.png';
import lendingImg from '../assets/images/business/lending.png';
import itImg from '../assets/images/business/it.png';
import professionalServicesImg from '../assets/images/business/professional-services.png';
import oilAndGasImg from '../assets/images/business/oill_and_gas.png';
import retailImg from '../assets/images/business/retail.png';
import supplyChainImg from '../assets/images/business/supply-chain-and-logistic.png';
import telecomImg from '../assets/images/business/telecoumnication.png';
import entertainmentImg from '../assets/images/business/entertainment.png';
import educationImg from '../assets/images/business/education.png';

export default function Home() {
  return (
    <div className="container py-5">
      <section className="mb-5">
        <Title text="Our Services" className="mb-5 text-center text-primary" />
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 gy-4">
          <div className="col">
            <ServiceCard />
          </div>
          <div className="col">
            <ServiceCard />
          </div>
          <div className="col">
            <ServiceCard />
          </div>
        </div>
      </section>

      <section className="mb-5">
        <Title text="AI Products" className="mb-5 text-center" />
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 gy-4">
          <div className="col">
            <ProductCard />
          </div>
          <div className="col">
            <ProductCard />
          </div>
          <div className="col">
            <ProductCard />
          </div>
        </div>
      </section>

      <section className="mb-5">
        <Title text="Why Choose Appzone Infinty?" className="mb-5 text-center" />
        <div className="row row-cols-1 row-cols-md-2 gy-4">
          <div className="col">
            <ChooseCard />
          </div>
          <div className="col">
            <ChooseCard />
          </div>
          <div className="col">
            <ChooseCard />
          </div>
          <div className="col">
            <ChooseCard />
          </div>
        </div>
      </section>
      
      <section className="mb-5">
        <Title text="Business Verticals We Served" className="mb-5 text-center" />
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-6 gy-4">
          {businessVerticals.map((item, idx) => {
            const images = {
              'banking.png': bankingImg,
              'fintech.png': fintechImg,
              'healthcare.png': healthcareImg,
              'insurance.png': insuranceImg,
              'investment.png': investmentImg,
              'manufacturing.png': manufacturingImg,
              'lending.png': lendingImg,
              'it.png': itImg,
              'professional-services.png': professionalServicesImg,
              'oill_and_gas.png': oilAndGasImg,
              'retail.png': retailImg,
              'supply-chain-and-logistic.png': supplyChainImg,
              'telecoumnication.png': telecomImg,
              'entertainment.png': entertainmentImg,
              'education.png': educationImg
            };

            return (
              <div className="col" key={idx}>
                <BusinessVertical icon={images[item.image]} title={item.title} />
              </div>
            );
          })}
        </div>
      </section>

      <section className="mb-5">
        <Title text="Our Process" className="mb-5 text-center" />
        <div className="row gy-4">
          <div className="col-lg-3">
            <h3>Proven Process for Exceptional Products</h3>
          </div>
          <div className="col-lg-5"></div>
          <div className="col-lg-3">
            <p> We follow a structured, transparent workflow that accelerates delivery, reduces risk, and ensures premium digital product quality.</p>
            <button className="btn btn-primary">Learn More</button>
          </div>
        </div>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 justify-content-center gy-4 mt-5">
          {processCards.map((item, idx) => (
            <div className="col" key={idx}>
              <ProcessCard title={item.title} description={item.description} />
            </div>
          ))}
        </div>
      </section>
      <section className="mb-5">
        <Title text="Our Vision & Mission" className="mb-5 text-center" />
        <div className="row align-items-center justify-content-center position-relative">
          <div className="col-lg-6">
            <VisionCard
              icon={<img src="https://kalkani.in/assets/img/vision-and-mission/our-vision.png" alt="Our Vision" width="100px" />}
              title="Our Vision"
              description="To provide reliable and simple solutions for complex problems."
            />
          </div>
          <div className="col-lg-6">
            <VisionCard
              icon={<img src="https://kalkani.in/assets/img/vision-and-mission/our-mission.png" alt="Our Mission" width="100px" />}
              title="Our Mission"
              description="To provide reliable and simple solutions for complex problems."
            />
            <div className="mt-4">
              <VisionCard
                icon={<img src="https://kalkani.in/assets/img/vision-and-mission/our-vision.png" alt="Our Vision" width="100px" />}
                title="Our Vision"
                description="To provide reliable and simple solutions for complex problems."
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
