// import React from 'react';
// import { Button, Col, Container, Row } from 'react-bootstrap';
// import Title from './widgets/Title';
// import ServicesSection from './Section/ServicesSection';
// import ProductsSection from './Section/ProductsSection';
// import ChooseCard from './widgets/why-choose';
// import ClassesSection from './Section/ClassesSection';
// import BusinessVertical from './widgets/BusinessVertical';
// import ProcessCard from './widgets/ProcessCard';
// import VisionCard from './widgets/vision-card';
// import businessVerticals from '../data/businessVerticals.json';
// import processCards from '../data/processCards.json';
// import whyChooseUsData from '../data/whyChooseUsData.json';
// import bankingImg from '../assets/images/business/banking.png';
// import fintechImg from '../assets/images/business/fintech.png';
// import healthcareImg from '../assets/images/business/healthcare.png';
// import insuranceImg from '../assets/images/business/insurance.png';
// import investmentImg from '../assets/images/business/investment.png';
// import manufacturingImg from '../assets/images/business/manufacturing.png';
// import lendingImg from '../assets/images/business/lending.png';
// import itImg from '../assets/images/business/it.png';
// import professionalServicesImg from '../assets/images/business/professional-services.png';
// import oilAndGasImg from '../assets/images/business/oill_and_gas.png';
// import retailImg from '../assets/images/business/retail.png';
// import supplyChainImg from '../assets/images/business/supply-chain-and-logistic.png';
// import telecomImg from '../assets/images/business/telecoumnication.png';
// import entertainmentImg from '../assets/images/business/entertainment.png';
// import educationImg from '../assets/images/business/education.png';

// import Banner from './widgets/Banner';

// export default function Home() {
//   return (
//     <Container className="">
//       <Banner />
//       <section className="Section-spacing">
//         <ServicesSection />
//       </section>
//       <section className="Section-spacing">
//             <ProductsSection />
//       </section>
//       <section className="Section-spacing">
//         <Title text="Why Choose Appzone Infinty?" className="mb-5 text-center" />
//         <Row xs={1} md={2} lg={3} className="gy-4">
//           {whyChooseUsData.map((item) => (
//             <Col key={item.id}>
//               <ChooseCard
//                 title={item.title}
//                 description={item.description}
//                 svgPath={item.svgPath}
//               />
//             </Col>
//           ))}
//         </Row>
//       </section>
//       <section className="Section-spacing">
//         <Title text="Business Verticals We Served" className="mb-5 text-center" />
//         <Row xs={1} md={2} lg={6} className="gy-4">
//           {businessVerticals.map((item, idx) => {
//             const images = {
//               'banking.png': bankingImg,
//               'fintech.png': fintechImg,
//               'healthcare.png': healthcareImg,
//               'insurance.png': insuranceImg,
//               'investment.png': investmentImg,
//               'manufacturing.png': manufacturingImg,
//               'lending.png': lendingImg,
//               'it.png': itImg,
//               'professional-services.png': professionalServicesImg,
//               'oill_and_gas.png': oilAndGasImg,
//               'retail.png': retailImg,
//               'supply-chain-and-logistic.png': supplyChainImg,
//               'telecoumnication.png': telecomImg,
//               'entertainment.png': entertainmentImg,
//               'education.png': educationImg
//             };

//             return (
//               <Col key={idx}>
//                 <BusinessVertical icon={images[item.image]} title={item.title} />
//               </Col>
//             );
//           })}
//         </Row>
//       </section>
//       <section className="Section-spacing">
//         <Title text="Our Process" className="mb-5 text-center" />
//         <Row xs={1} md={2} lg={3} className="justify-content-center gy-4 mt-5">
//           {processCards.map((item, idx) => (
//             <Col key={idx}>
//               <ProcessCard title={item.title} description={item.description} />
//             </Col>
//           ))}
//         </Row>
//       </section>      
//       <section className="Section-spacing">
//         <Title text="Our Vision & Mission" className="mb-5 text-center" />
//         <Row className="align-items-center justify-content-center position-relative">
//           <Col lg={6}>
//             <VisionCard
//               icon={<img src="https://kalkani.in/assets/img/vision-and-mission/our-vision.png" alt="Our Vision" width="100px" />}
//               title="Our Vision"
//               description="To provide reliable and simple solutions for complex problems."
//             />
//           </Col>
//           <Col lg={6}>
//             <VisionCard
//               icon={<img src="https://kalkani.in/assets/img/vision-and-mission/our-mission.png" alt="Our Mission" width="100px" />}
//               title="Our Mission"
//               description="To provide reliable and simple solutions for complex problems."
//             />
//             <div className="mt-4">
//               <VisionCard
//                 icon={<img src="https://kalkani.in/assets/img/vision-and-mission/our-vision.png" alt="Our Vision" width="100px" />}
//                 title="Our Vision"
//                 description="To provide reliable and simple solutions for complex problems."
//               />
//             </div>
//           </Col>
//         </Row>
//       </section>
//       <section className="Section-spacing">
//             <ClassesSection />
//       </section>
//     </Container>
//   );
// }
import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import Title from './widgets/Title';
import ServicesSection from './Section/ServicesSection';
import ProductsSection from './Section/ProductsSection';
import ChooseCard from './widgets/why-choose';
import ClassesSection from './Section/ClassesSection';
import BusinessVertical from './widgets/BusinessVertical';
import ProcessCard from './widgets/ProcessCard';
import VisionCard from './widgets/vision-card';
import businessVerticals from '../data/businessVerticals.json';
import processCards from '../data/processCards.json';
import whyChooseUsData from '../data/whyChooseUsData.json';
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

import Banner from './widgets/Banner';

export default function Home() {
  return (
    <Container className="">
      <Banner />
      <section>
        <ServicesSection />
      </section>
      <section>
        <ProductsSection />
      </section>

      {/* WHY CHOOSE INFINTY SECTION */}
      <section className="Section-spacing why-choose-section">
        <Title text="Why Choose Appzone Infinty?" className="mb-5 text-center" />
        <Row xs={1} md={2} lg={3} className="g-4 align-items-stretch">
          {whyChooseUsData.map((item) => (
            <Col key={item.id} className="d-flex">
              <ChooseCard
                title={item.title}
                description={item.description}
                svgPath={item.svgPath}
              />
            </Col>
          ))}
        </Row>
      </section>

      <section className="Section-spacing">
        <Title text="Business Verticals We Served" className="mb-5 text-center" />
        <Row xs={1} md={2} lg={6} className="gy-4">
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
              <Col key={idx}>
                <BusinessVertical icon={images[item.image]} title={item.title} />
              </Col>
            );
          })}
        </Row>
      </section>
      
      {/* <section className="Section-spacing">
        <Title text="Our Process" className="mb-5 text-center" />
        <Row xs={1} md={2} lg={3} className="justify-content-center gy-4 mt-5">
          {processCards.map((item, idx) => (
            <Col key={idx}>
              <ProcessCard title={item.title} description={item.description} />
            </Col>
          ))}
        </Row>
      </section>       */}
      {/* OUR PROCESS SECTION */}
      <section className="Section-spacing process-section">
        <Title text="Our Process" className="mb-5 text-center" />
        <Row xs={1} md={2} lg={5} className="g-4 align-items-stretch justify-content-center">
          {processCards.map((item, idx) => (
            <Col key={idx} className="d-flex">
              <ProcessCard
                index={idx}
                title={item.title}
                description={item.description}
                isLast={idx === processCards.length - 1}
              />
            </Col>
          ))}
        </Row>
      </section>

      <section className="Section-spacing">
        <Title text="Our Vision & Mission" className="mb-5 text-center" />
        <Row className="align-items-center justify-content-center position-relative gy-4">
          <Col lg={6}>
            <VisionCard
              icon={<img src="https://kalkani.in/assets/img/vision-and-mission/our-vision.png" alt="Our Vision" width="100px" />}
              title="Our Vision"
              description="To provide reliable and simple solutions for complex problems."
            />
          </Col>
          <Col lg={6}>
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
          </Col>
        </Row>
      </section>

      <section>
        <ClassesSection />
      </section>
    </Container>
  );
}