import React from 'react';
import Title from './widgets/Title';
import ServiceCard from './widgets/service';
import ProductCard from './widgets/AiProduct';
import ChooseCard from './widgets/why-choose';
import BusinessVertical from './widgets/BusinessVertical';

export default function Home() {
  return (
    <div className="container py-5">
      <section className="mb-5">
        <Title text="Our Services" className="mb-5 text-center" />
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
        <div className="row row-cols-2 row-cols-md-2 row-cols-lg-6 gy-4">
          <div className="col">
            <BusinessVertical />
          </div>
          <div className="col">
            <BusinessVertical />
          </div>
          <div className="col">
            <BusinessVertical />
          </div>
          <div className="col">
            <BusinessVertical />
          </div>
          <div className="col">
            <BusinessVertical />
          </div>
          <div className="col">
            <BusinessVertical />
          </div>
          <div className="col">
            <BusinessVertical />
          </div>
          <div className="col">
            <BusinessVertical />
          </div>
          <div className="col">
            <BusinessVertical />
          </div>
          <div className="col">
            <BusinessVertical />
          </div>
          <div className="col">
            <BusinessVertical />
          </div>
          <div className="col">
            <BusinessVertical />
          </div>
        </div>
      </section>
    </div>
  );
}
