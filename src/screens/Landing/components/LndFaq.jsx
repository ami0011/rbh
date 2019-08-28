import Grid from '@material-ui/core/Grid';
import React from 'react';
import LndContainer from './LndContainer';
import LndFaqSection from './LndFaqSection';

function LndFaq() {
  return (
    <LndContainer header="FAQ" whiteBackground>
      <Grid container spacing={8}>
        <Grid item xs={12} md={6}>
          <LndFaqSection header="Fees" questions={['What is the registration charge?', 'Is there any annual cost?']} />
          <LndFaqSection
            header="Registration"
            questions={[
              'How do I register?',
              'How long does it take?',
              'Can I register on my own?',
              'What documents do I need to provide to sign up?',
            ]}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <LndFaqSection
            header="How it works"
            questions={[
              'How many users does the system support?',
              'Can I set up different roles and permissions?',
              'How does it help me in my business?',
              'Can I unsubscribe a profile once it is no longer needed?',
            ]}
          />
          <LndFaqSection
            header="User profiles"
            questions={[
              'What are the different privileges for each type of user?',
              'Can I unsubscribe a profile once it is no longer needed?',
            ]}
          />
        </Grid>
      </Grid>
    </LndContainer>
  );
}

export default LndFaq;
