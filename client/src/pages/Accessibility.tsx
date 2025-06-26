import { useEffect } from 'react';
import SeoHead from '@/components/shared/SeoHead';

const Accessibility = () => {
  // Scroll to top when the page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SeoHead 
        title="Accessibility Statement | BloomBrite Cleaning"
        description="BloomBrite Cleaning is committed to ensuring digital accessibility for people with disabilities. Learn about our accessibility accommodations and commitment."
      />
      
      <main>
        {/* Accessibility Banner */}
        <section className="bg-primary text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold mb-4">Accessibility Statement</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Our commitment to ensuring accessibility for all customers and visitors.
            </p>
          </div>
        </section>
        
        {/* Accessibility Content */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto prose prose-lg">
              <h2>Our Commitment to Accessibility</h2>
              <p>
                BloomBrite Cleaning is committed to ensuring digital accessibility for people with disabilities. We are continually improving the user experience for everyone, and applying the relevant accessibility standards.
              </p>
              
              <h2>Conformance Status</h2>
              <p>
                The Web Content Accessibility Guidelines (WCAG) defines requirements for designers and developers to improve accessibility for people with disabilities. It defines three levels of conformance: Level A, Level AA, and Level AAA. BloomBrite Cleaning's website is partially conformant with WCAG 2.1 level AA. Partially conformant means that some parts of the content do not fully conform to the accessibility standard.
              </p>
              
              <h2>Feedback</h2>
              <p>
                We welcome your feedback on the accessibility of BloomBrite Cleaning's website. Please contact us if you encounter accessibility barriers on our site:
              </p>
              <ul>
                <li>Phone: (734) 489-9908</li>
                <li>Email: <a href="mailto:accessibility@bloombritecleaning.com">accessibility@bloombritecleaning.com</a></li>
                <li>Address: 123 Clean Street, Wixom, MI 48393</li>
              </ul>
              <p>
                We try to respond to feedback within 2 business days.
              </p>
              
              <h2>Accommodation and Accessibility</h2>
              <p>
                If you are unable to access any content or functionality available on our website, please contact us and we will make the content and/or functionality available to you in an alternative format, upon request.
              </p>
              
              <h2>Compatibility with Browsers and Assistive Technology</h2>
              <p>
                BloomBrite Cleaning's website is designed to be compatible with the following assistive technologies:
              </p>
              <ul>
                <li>Screen readers (NVDA, JAWS, VoiceOver)</li>
                <li>Zoom capabilities in modern browsers</li>
                <li>Keyboard navigation</li>
                <li>Speech recognition software</li>
                <li>Text-to-speech software</li>
              </ul>
              <p>
                Our site is designed to be compatible with the latest versions of Chrome, Firefox, Safari, and Edge.
              </p>
              
              <h2>Technical Specifications</h2>
              <p>
                Accessibility of BloomBrite Cleaning's website relies on the following technologies to work with the particular combination of web browser and any assistive technologies or plugins installed on your computer:
              </p>
              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>WAI-ARIA</li>
              </ul>
              <p>
                These technologies are relied upon for conformance with the accessibility standards used.
              </p>
              
              <h2>Our Ongoing Efforts</h2>
              <p>
                BloomBrite Cleaning is committed to making our website accessible to all users. Our ongoing efforts include:
              </p>
              <ul>
                <li>Regular accessibility audits and testing</li>
                <li>Staff training on web accessibility</li>
                <li>Addressing accessibility issues promptly when identified</li>
                <li>Incorporation of accessibility in our design and development processes</li>
              </ul>
              
              <h2>Additional Considerations for Physical Services</h2>
              <p>
                In addition to our digital accessibility efforts, BloomBrite Cleaning is committed to accommodating clients with disabilities when providing our cleaning services:
              </p>
              <ul>
                <li>We can accommodate specific cleaning needs for individuals with allergies or sensitivities</li>
                <li>Our cleaning professionals can be instructed to follow specific protocols for homes with service animals</li>
                <li>Flexible scheduling and communication options are available</li>
                <li>If you have specific accessibility needs for our cleaning services, please contact us to discuss accommodations</li>
              </ul>
              
              <h2>Assessment Date</h2>
              <p>
                This statement was last reviewed on {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}.
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Accessibility;
