import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import productsData from '../../data/productsData.json';

const iconMap = {
  FilePdf: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="56" height="56" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 2h8l6 6v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z" />
      <path d="M14 2v6h6" />
      <path d="M9 15h6" />
      <path d="M9 19h6" />
      <path d="M9 11h2" />
    </svg>
  ),
  GameController: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="56" height="56" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 10a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4v2a4 4 0 0 1-4 4h-1a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2H9a4 4 0 0 1-4-4v-2z" />
      <path d="M9 12h6" />
      <path d="M12 9v6" />
      <path d="M7 9h1" />
      <path d="M16 9h1" />
    </svg>
  ),
  Moon: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="56" height="56" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 12.79A9 9 0 1 1 11.21 3a7 7 0 0 0 9.79 9.79z" />
    </svg>
  )
};

const getProductImage = (imagePath) => {
  if (!imagePath) return '';
  const normalizedFilename = imagePath.replace(/^\.\/(?:images\/product|img)\//, '');
  try {
    return new URL(`../../assets/images/product/${normalizedFilename}`, import.meta.url).href;
  } catch {
    return '';
  }
};

const ProductsSection = () => {
  return (
    <section id="products" className="products Section-spacing">
      <Container>
        {/* Section Header */}
        <div className="section-header text-center mb-5 reveal visible">
          <h2 className="section-title text-white font-weight-bold">Our Products</h2>
          <p className="section-subtitle mx-auto text-muted" style={{ maxWidth: '600px' }}>
            Explore our collection of cutting-edge mobile platforms and highly optimized software utility tools.
          </p>
        </div>

        {/* Responsive Grid Matrix */}
        <Row className="g-4">
          {productsData.map((product) => {
            const productIcon = iconMap[product.iconClass] || iconMap.FilePdf;

            return (
              <Col key={product.id} md={6} lg={4}>
                <Card className="product-card h-100 overflow-hidden">
                  <div className="product-img-wrapper position-relative d-flex align-items-center justify-content-center">
                    {/* Placeholder Icon */}
                    <div className="placeholder-icon position-absolute">{productIcon}</div>
                    
                    {/* Product Screenshot Banner */}
                    {product.image && (
                      <img 
                        src={getProductImage(product.image)} 
                        alt={`${product.title} Display Interface`} 
                        className="product-img position-relative z-1"
                        onError={(e) => { e.target.style.opacity = '0'; }}
                      />
                    )}
                  </div>
                  
                  <Card.Body className="product-content d-flex flex-column p-4">
                    <Card.Title as="h3" className="text-white mb-2 fs-5">{product.title}</Card.Title>
                    <Card.Text className="text-muted small mb-4 flex-grow-1">
                      {product.description}
                    </Card.Text>
                    
                    <div className="product-footer d-flex justify-content-between align-items-center mt-auto">
                      <span className="product-badge py-1 px-3 rounded-pill small">
                        {product.category}
                      </span>
                      <Button 
                        target="_blank"
                        href={product.actionUrl} 
                        className="btn-primary-custom d-inline-flex align-items-center gap-2 border-0"
                        style={{ padding: '8px 18px', fontSize: '0.85rem', borderRadius: '12px' }}
                      >
                        {product.actionText}
                        {product.hasArrow && (
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M5 12h14" />
                            <path d="M13 6l6 6-6 6" />
                          </svg>
                        )}
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    </section>
  );
};

export default ProductsSection;