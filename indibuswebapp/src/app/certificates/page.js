'use client'
import React from 'react'
import styles from "../page.module.css"

export default function Certificates() {

  const certificates = [
    {
      title: 'Certificates of merits',
      description: 'A **certificate of merit** is a formal recognition awarded to individuals or groups for exceptional achievements, outstanding performance, or significant contributions in a particular field. This certificate serves as an acknowledgment of excellence and is often granted in academic, professional, or personal development contexts. It is a valuable token that symbolizes the recipient’s dedication, hard work, and noteworthy accomplishments.',
      image: '/certi1.jpg',

    },
    {
      title: 'Cloud Computing Basics',
      description: 'An introductory course on cloud platforms, services, and deployment models.',
    },
    {
      title: 'Machine Learning Fundamentals',
      description: 'A hands-on course on basic machine learning concepts and algorithms.',
    },
  ];

  return (
    <div style={{ padding: '20px', backgroundColor: '#f0f0f0' }}> {/* Light gray background for visibility */}
      <div style={{ position: 'relative', padding: '20px', marginTop: '80px', marginBottom: '80px', backgroundColor: '#fff' }}> {/* White background for content area */}
        {/* for left side image */}
        <div   data-aos="fade-left" style={{ display: 'flex', alignItems: 'flex-start', height: 'auto' }}>
          <img
            src="./certi1.jpg"
            alt="Certificate"
            style={{
              width: '60%', // Fixed width for the image
              height: 'auto', // Maintain aspect ratio
              objectFit: 'contain', // Ensure the entire image is visible
              marginRight: '20px', // Space between image and text
            }}
          />
          <div  style={{ zIndex: 1, color: '#000', padding: '20px', maxWidth: '50%', textAlign: 'left' }}>
            <h2 style={{ textAlign: 'center', color: '#333',marginTop:'70px' }}>Certificate of Merit</h2>
            <p style={{ color: '#555',marginTop:'40px',fontSize: '30px', textAlign: 'justify' }}>
              We envision a future where businesses thrive in the digital landscape with unparalleled success.
              Our company stands as a beacon of innovation and expertise, leading the way in the realm of digital
              business solutions. As the trusted partner of choice for businesses worldwide, INDIBUS is committed
              to delivering excellence in content creation, digital marketing, website development, and digital
              advertising. Our vision is to empower businesses with the tools and strategies they need to not
              only survive but to excel in the ever-evolving digital ecosystem.
            </p>
          </div>
        </div>
            {/* for right side image */}
        <div data-aos="fade-right" style={{ display: 'flex', alignItems: 'flex-start', height: 'auto',padding: '100px 0px 100px 50px', width:'100%' }}>
        <div style={{ zIndex: 1, color: '#000', padding: '40px', maxWidth: '50%', textAlign: 'left',marginLeft:'-70px' }}>
            <h2 style={{ textAlign: 'center', color: '#333',marginTop:'70px' }}>Certificate of Merit</h2>
            <p style={{ color: '#555',marginTop:'40px',fontSize: '30px', textAlign: 'justify' }}>
              We envision a future where businesses thrive in the digital landscape with unparalleled success.
              Our company stands as a beacon of innovation and expertise, leading the way in the realm of digital
              business solutions. As the trusted partner of choice for businesses worldwide, INDIBUS is committed
              to delivering excellence in content creation, digital marketing, website development, and digital
              advertising. Our vision is to empower businesses with the tools and strategies they need to not
              only survive but to excel in the ever-evolving digital ecosystem.
            </p>
          </div>
          <img
            src="./certi2.jpg"
            alt="Certificate"
            style={{
              width: '60%', // Fixed width for the image
              height: 'auto', // Maintain aspect ratio
              objectFit: 'contain', // Ensure the entire image is visible
              marginRight: '10px', // Space between image and text
            }}
          />
        </div>

        <div data-aos="fade-left" style={{ display: 'flex', alignItems: 'flex-start', height: 'auto' }}>
          <img
            src="./certi3.jpg"
            alt="Certificate"
            style={{
              width: '60%', // Fixed width for the image
              height: 'auto', // Maintain aspect ratio
              objectFit: 'contain', // Ensure the entire image is visible
              marginRight: '20px', // Space between image and text
            }}
          />
          <div  data-aos="fade-right" style={{ zIndex: 1, color: '#000', padding: '20px', maxWidth: '50%', textAlign: 'left' }}>
            <h2 style={{ textAlign: 'center', color: '#333',marginTop:'70px' }}>Certificate of Merit</h2>
            <p style={{ color: '#555',marginTop:'40px',fontSize: '30px' , textAlign: 'justify' }}>
              We envision a future where businesses thrive in the digital landscape with unparalleled success.
              Our company stands as a beacon of innovation and expertise, leading the way in the realm of digital
              business solutions. As the trusted partner of choice for businesses worldwide, INDIBUS is committed
              to delivering excellence in content creation, digital marketing, website development, and digital
              advertising. Our vision is to empower businesses with the tools and strategies they need to not
              only survive but to excel in the ever-evolving digital ecosystem.
            </p>
          </div>
        </div>
        <div data-aos="fade-right" style={{ display: 'flex', alignItems: 'flex-start', height: 'auto',padding: '100px 0px 100px 50px', width:'100%' }}>
        <div style={{ zIndex: 1, color: '#000', padding: '40px', maxWidth: '50%', textAlign: 'left',marginLeft:'-70px' }}>
            <h2 style={{ textAlign: 'center', color: '#333',marginTop:'70px' }}>Certificate of Merit</h2>
            <p style={{ color: '#555',marginTop:'40px',fontSize: '30px', textAlign: 'justify' }}>
              We envision a future where businesses thrive in the digital landscape with unparalleled success.
              Our company stands as a beacon of innovation and expertise, leading the way in the realm of digital
              business solutions. As the trusted partner of choice for businesses worldwide, INDIBUS is committed
              to delivering excellence in content creation, digital marketing, website development, and digital
              advertising. Our vision is to empower businesses with the tools and strategies they need to not
              only survive but to excel in the ever-evolving digital ecosystem.
            </p>
          </div>
          <img
            src="./certi4.jpg"
            alt="Certificate"
            style={{
              width: '55%', // Fixed width for the image
              height: 'auto', // Maintain aspect ratio
              objectFit: 'contain', // Ensure the entire image is visible
              marginRight: '10px', // Space between image and text
            }}
          />
        </div>
        <div data-aos="fade-left" style={{ display: 'flex', alignItems: 'flex-start', height: 'auto' }}>
          <img
            src="./certi5.jpg"
            alt="Certificate"
            style={{
              width: '60%', // Fixed width for the image
              height: 'auto', // Maintain aspect ratio
              objectFit: 'contain', // Ensure the entire image is visible
              marginRight: '20px', // Space between image and text
            }}
          />
          <div data-aos="fade-right" style={{ zIndex: 1, color: '#000', padding: '20px', maxWidth: '50%', textAlign: 'left' }}>
            <h2 style={{ textAlign: 'center', color: '#333',marginTop:'70px' }}>Certificate of Merit</h2>
            <p style={{ color: '#555',marginTop:'40px',fontSize: '30px' , textAlign: 'justify'}}>
              We envision a future where businesses thrive in the digital landscape with unparalleled success.
              Our company stands as a beacon of innovation and expertise, leading the way in the realm of digital
              business solutions. As the trusted partner of choice for businesses worldwide, INDIBUS is committed
              to delivering excellence in content creation, digital marketing, website development, and digital
              advertising. Our vision is to empower businesses with the tools and strategies they need to not
              only survive but to excel in the ever-evolving digital ecosystem.
            </p>
          </div>
        </div>
        <div  data-aos="fade-left" style={{ display: 'flex', alignItems: 'flex-start', height: 'auto',padding: '100px 0px 100px 50px', width:'100%' }}>
        <div style={{ zIndex: 1, color: '#000', padding: '40px', maxWidth: '50%', textAlign: 'left',marginLeft:'-70px' }}>
            <h2 style={{ textAlign: 'center', color: '#333',marginTop:'70px' }}>Certificate of Merit</h2>
            <p style={{ color: '#555',marginTop:'40px',fontSize: '30px' , textAlign: 'justify' }}>
              We envision a future where businesses thrive in the digital landscape with unparalleled success.
              Our company stands as a beacon of innovation and expertise, leading the way in the realm of digital
              business solutions. As the trusted partner of choice for businesses worldwide, INDIBUS is committed
              to delivering excellence in content creation, digital marketing, website development, and digital
              advertising. Our vision is to empower businesses with the tools and strategies they need to not
              only survive but to excel in the ever-evolving digital ecosystem.
            </p>
          </div>
          <img
            src="./certi6.jpg"
            alt="Certificate"
            style={{
              width: '60%', // Fixed width for the image
              height: 'auto', // Maintain aspect ratio
              objectFit: 'contain', // Ensure the entire image is visible
              marginRight: '10px', // Space between image and text
            }}
          />
        </div>
        <div  data-aos="fade-right" style={{ display: 'flex', alignItems: 'flex-start', height: 'auto' }}>
          <img
            src="./certu7.jpg"
            alt="Certificate"
            style={{
              width: '60%', // Fixed width for the image
              height: 'auto', // Maintain aspect ratio
              objectFit: 'contain', // Ensure the entire image is visible
              marginRight: '20px', // Space between image and text
            }}
          />
          <div data-aos="fade-left"  style={{ zIndex: 1, color: '#000', padding: '20px', maxWidth: '50%', textAlign: 'left' }}>
            <h2 style={{ textAlign: 'center', color: '#333',marginTop:'70px' }}>Certificate of Merit</h2>
            <p style={{ color: '#555',marginTop:'40px',fontSize: '30px' , textAlign: 'justify' }}>
              We envision a future where businesses thrive in the digital landscape with unparalleled success.
              Our company stands as a beacon of innovation and expertise, leading the way in the realm of digital
              business solutions. As the trusted partner of choice for businesses worldwide, INDIBUS is committed
              to delivering excellence in content creation, digital marketing, website development, and digital
              advertising. Our vision is to empower businesses with the tools and strategies they need to not
              only survive but to excel in the ever-evolving digital ecosystem.
            </p>
          </div>
        </div>
        












      </div>
    </div>
  );
}