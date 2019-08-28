import React, { useEffect } from 'react';
import ScrollUpButton from '../../shared/components/ScrollUpButton';
import LndBenefits from './components/LndBenefits';
import LndContentSection from './components/LndContentSection';
import LndFaq from './components/LndFaq';
import LndHowItWorks from './components/LndHowItWorks';
import LndMasterContainer from './components/LndMasterContainer';
import LndServiceInfo from './components/LndServiceInfo';

const sections = [
  {
    id: 'benefits',
    title: 'Benefits',
    component: <LndBenefits />,
  },
  {
    id: 'howItWorks',
    title: 'How it works',
    noContainer: true,
    component: <LndHowItWorks />,
  },
  {
    id: 'serviceInfo',
    title: 'Service Info',
    component: <LndServiceInfo />,
  },
  {
    id: 'faq',
    title: 'FAQ',
    component: <LndFaq />,
  },
];

function Landing() {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <ScrollUpButton />
      <LndMasterContainer />
      <LndContentSection sections={sections} />
    </div>
  );
}

export default Landing;
