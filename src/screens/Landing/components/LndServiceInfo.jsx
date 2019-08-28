import Typography from '@material-ui/core/Typography';
import React from 'react';
import LndContainer from './LndContainer';
import LndServiceInfoFeature from './LndServiceInfoFeature';

const features = {
  'Accounting information': 'Balance statements, real-time statements, and previous statements, etc.',
  'Remittance within your organization': 'And/or to your suppliers and other parties',
  Payments: 'Payroll, payments to suppliers, etc',
  'Transaction Information and report retrieval':
    'Presentment, cheques for collection, payroll, payments made to suppliers, etc.',
  'Many other features': 'FX rates, interest rates, cheque stop-payments, account freezing, etc.',
};

function LndServiceInfo() {
  return (
    <LndContainer header="Service Info">
      <Typography key="service-info-introduction" variant="h6">
        SCB Business Net is an Internet financial service platform designed to facilitate your business. With SCB
        Business Net, you can make secure financial transactions and retrieve information and reports in an instant,
        protected by a World-Class security system.
      </Typography>

      {Object.keys(features).map(key => (
        <LndServiceInfoFeature key={key} header={key}>
          {features[key]}
        </LndServiceInfoFeature>
      ))}
    </LndContainer>
  );
}

export default LndServiceInfo;
