// Ported verbatim from the previous static site.
export type LegalBlock = { type: 'h2' | 'h3' | 'p'; text: string } | { type: 'ul'; items: string[] };
export type LegalDoc = { title: string; effective: string; blocks: LegalBlock[] };

export const privacy: LegalDoc = {
  "title": "Privacy Policy",
  "effective": "Effective October 12, 2026",
  "blocks": [
    {
      "type": "p",
      "text": "Qorvyn Systems respects your privacy. This policy explains what information we may collect through this website, how we use it, and the choices available to you."
    },
    {
      "type": "h2",
      "text": "Information we collect"
    },
    {
      "type": "p",
      "text": "When you submit our inquiry form, we may collect information you choose to provide, including your name, business email address, company name, area of interest, and details about your technology needs. Please do not submit confidential credentials, financial information, or other sensitive data through the website."
    },
    {
      "type": "p",
      "text": "Like most websites, our hosting and security providers may automatically process limited technical data, such as IP address, browser type, device information, requested pages, timestamps, and security events."
    },
    {
      "type": "h2",
      "text": "How we use information"
    },
    {
      "type": "p",
      "text": "We use information collected through the website to:"
    },
    {
      "type": "ul",
      "items": [
        "Respond to inquiries and discuss requested services;",
        "Operate, maintain, secure, and improve the website;",
        "Understand website performance and how visitors use the site; and",
        "Comply with applicable legal obligations and protect our rights."
      ]
    },
    {
      "type": "p",
      "text": "We do not sell personal information."
    },
    {
      "type": "h2",
      "text": "Cookies and analytics"
    },
    {
      "type": "p",
      "text": "The website may use essential cookies or similar technologies required for security and basic operation. If analytics tools are introduced, they may collect aggregated usage information to help us understand website performance. Where required, we will provide appropriate notice or choices before using non-essential cookies."
    },
    {
      "type": "h2",
      "text": "Service providers and disclosure"
    },
    {
      "type": "p",
      "text": "We may share information with vendors that support website hosting, security, analytics, communications, or form processing. Those providers may process information only as needed to perform services for us. We may also disclose information when required by law, to protect rights or safety, or in connection with a business transaction."
    },
    {
      "type": "h2",
      "text": "Data retention and security"
    },
    {
      "type": "p",
      "text": "We retain personal information only for as long as reasonably necessary for the purposes described above, including legal, accounting, and security needs. We use reasonable administrative, technical, and organizational safeguards, but no internet transmission or storage system is completely secure."
    },
    {
      "type": "h2",
      "text": "Your choices"
    },
    {
      "type": "p",
      "text": "You may request access to, correction of, or deletion of personal information you have submitted, subject to applicable law and legitimate retention needs. Use the inquiry form on this website to make a privacy request."
    },
    {
      "type": "h2",
      "text": "Third-party links"
    },
    {
      "type": "p",
      "text": "This website may link to third-party sites or services. Their privacy practices are governed by their own policies, and Qorvyn Systems is not responsible for their content or practices."
    },
    {
      "type": "h2",
      "text": "Changes to this policy"
    },
    {
      "type": "p",
      "text": "We may update this policy as our services, website, or legal obligations change. The effective date above indicates the latest revision."
    },
    {
      "type": "p",
      "text": "Questions: Use the website inquiry form and identify your message as a privacy request."
    }
  ]
};

export const terms: LegalDoc = {
  "title": "Terms of Use",
  "effective": "Effective October 12, 2026",
  "blocks": [
    {
      "type": "p",
      "text": "These Terms of Use govern your access to and use of the Qorvyn Systems website. By using the website, you agree to these terms. If you do not agree, please do not use the website."
    },
    {
      "type": "h2",
      "text": "Website purpose"
    },
    {
      "type": "p",
      "text": "The website provides general information about Qorvyn Systems and its technology consulting services. Website content is for informational purposes only and does not constitute technical, security, legal, financial, or other professional advice."
    },
    {
      "type": "h2",
      "text": "No service relationship"
    },
    {
      "type": "p",
      "text": "Submitting an inquiry or communicating through the website does not create a client, consulting, fiduciary, or other professional relationship. Services begin only after both parties enter into a separate written agreement that defines scope, fees, responsibilities, and other applicable terms."
    },
    {
      "type": "h2",
      "text": "Acceptable use"
    },
    {
      "type": "p",
      "text": "You agree not to:"
    },
    {
      "type": "ul",
      "items": [
        "Use the website for unlawful, fraudulent, or abusive activity;",
        "Attempt to gain unauthorized access to the website or related systems;",
        "Interfere with the website's operation, security, or availability;",
        "Introduce malicious code or conduct unauthorized testing or scanning; or",
        "Copy, scrape, or use website content in a way that violates applicable law or these terms."
      ]
    },
    {
      "type": "h2",
      "text": "Intellectual property"
    },
    {
      "type": "p",
      "text": "The website, its design, text, graphics, and other original content are owned by or licensed to Qorvyn Systems and are protected by applicable intellectual property laws. You may view and use the website for legitimate informational and business purposes, but you may not reproduce, modify, distribute, or commercially exploit its content without prior written permission."
    },
    {
      "type": "h2",
      "text": "Third-party services"
    },
    {
      "type": "p",
      "text": "The website may include links to third-party websites or tools. Qorvyn Systems does not control and is not responsible for their availability, content, security, or practices. Your use of third-party services is governed by their terms."
    },
    {
      "type": "h2",
      "text": "Disclaimers"
    },
    {
      "type": "p",
      "text": "The website is provided on an “as is” and “as available” basis. To the fullest extent permitted by law, Qorvyn Systems disclaims all warranties, express or implied, including warranties of accuracy, availability, merchantability, fitness for a particular purpose, and non-infringement. We do not warrant that the website will be uninterrupted, error-free, or free of harmful components."
    },
    {
      "type": "h2",
      "text": "Limitation of liability"
    },
    {
      "type": "p",
      "text": "To the fullest extent permitted by law, Qorvyn Systems and its owners, employees, contractors, and service providers will not be liable for any indirect, incidental, special, consequential, exemplary, or punitive damages, or for any loss of data, profits, revenue, business, or goodwill arising from or related to your use of—or inability to use—the website. Where liability cannot be excluded, aggregate liability arising from the website will not exceed the greater of the amount you paid to use the website or one hundred U.S. dollars."
    },
    {
      "type": "h2",
      "text": "Indemnification"
    },
    {
      "type": "p",
      "text": "You agree to indemnify and hold harmless Qorvyn Systems from claims, losses, liabilities, and expenses arising from your misuse of the website or violation of these terms, to the extent permitted by law."
    },
    {
      "type": "h2",
      "text": "Governing law"
    },
    {
      "type": "p",
      "text": "These terms are governed by the laws applicable to Qorvyn Systems, without regard to conflict-of-law principles. Any dispute will be brought in a court of competent jurisdiction, unless the parties agree otherwise in writing."
    },
    {
      "type": "h2",
      "text": "Changes and severability"
    },
    {
      "type": "p",
      "text": "We may update these terms from time to time. Continued use of the website after an update constitutes acceptance of the revised terms. If any provision is found unenforceable, the remaining provisions will remain in effect."
    },
    {
      "type": "p",
      "text": "Questions: Use the website inquiry form and identify your message as a legal inquiry."
    }
  ]
};

