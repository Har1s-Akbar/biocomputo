import {
    Body,
    Button,
    Container,
    Head,
    Hr,
    Html,
    Img,
    Link,
    Preview,
    Section,
    Text,
  } from '@react-email/components';
  import * as React from 'react';
  
  export const StripeWelcomeEmail = ({mail}) => (
    <Html>
      <Head />
      <Preview>Newsletter Subscription for biocomputonomics</Preview>
      <Body style={main}>
        <Container style={container}>
          <Section style={box}>
            <Hr style={hr} />
            <Text style={paragraph}>
                We are really happy to inform you {mail}, that you have subscribed to the newsletter of biocomputonomics
            </Text>
            <Text style={paragraph}>
                You will recieve notififcation whenever, biocomputonomics post.
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
  
  export default StripeWelcomeEmail;
  
  const main = {
    backgroundColor: '#f6f9fc',
    fontFamily:
      '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
  };
  
  const container = {
    backgroundColor: '#ffffff',
    margin: '0 auto',
    padding: '20px 0 48px',
    marginBottom: '64px',
  };
  
  const box = {
    padding: '0 48px',
  };
  
  const hr = {
    borderColor: '#e6ebf1',
    margin: '20px 0',
  };
  
  const paragraph = {
    color: '#525f7f',
  
    fontSize: '16px',
    lineHeight: '24px',
    textAlign: 'left',
  };
  
  const anchor = {
    color: '#556cd6',
  };
  
  const button = {
    backgroundColor: '#656ee8',
    borderRadius: '5px',
    color: '#fff',
    fontSize: '16px',
    fontWeight: 'bold',
    textDecoration: 'none',
    textAlign: 'center',
    display: 'block',
    width: '100%',
  };
  
  const footer = {
    color: '#8898aa',
    fontSize: '12px',
    lineHeight: '16px',
  };
  