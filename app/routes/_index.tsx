import {
  LandingContainer,
  LandingCTA,
  LandingFAQ,
  LandingFeatures,
  LandingHero,
  LandingHowItWorks,
  LandingPainPoints,
  LandingPricing,
  LandingSocialProof,
  LandingSocialRating,
  LandingTestimonials,
} from '~/designSystem'

export default function LandingPage() {
  const features = [
    {
      heading: `Smart Energy Optimization`,
      description: `AI-powered algorithms analyze your energy usage patterns to optimize consumption and reduce waste.`,
      icon: <i className="las la-brain"></i>,
    },
    {
      heading: `Real-Time Monitoring`,
      description: `Track your energy usage in real-time, giving you complete visibility and control over your consumption.`,
      icon: <i className="las la-chart-line"></i>,
    },
    {
      heading: `Renewable Integration`,
      description: `Seamlessly integrate solar panels and other renewable sources to maximize green energy utilization.`,
      icon: <i className="las la-solar-panel"></i>,
    },
    {
      heading: `Predictive Forecasting`,
      description: `Anticipate future energy needs and costs, allowing you to plan and budget more effectively.`,
      icon: <i className="las la-crystal-ball"></i>,
    },
    {
      heading: `Automated Controls`,
      description: `Set intelligent rules to automate your energy usage, ensuring optimal efficiency without constant manual adjustments.`,
      icon: <i className="las la-sliders-h"></i>,
    },
    {
      heading: `Carbon Footprint Tracker`,
      description: `Monitor and reduce your environmental impact with our built-in carbon footprint calculator and reduction tips.`,
      icon: <i className="las la-leaf"></i>,
    },
  ]

  const testimonials = [
    {
      name: `Sarah Johnson`,
      designation: `Homeowner`,
      content: `EcoVolt has transformed the way I manage my home's energy. I've cut my electricity bill by 25% and feel great about reducing my carbon footprint!`,
      avatar: 'https://randomuser.me/api/portraits/women/6.jpg',
    },
    {
      name: `Mike Chen`,
      designation: `Small Business Owner`,
      content: `As a cafe owner, energy costs were a major concern. EcoVolt's smart optimization has saved us thousands annually, allowing us to invest in growth.`,
      avatar: 'https://randomuser.me/api/portraits/men/7.jpg',
    },
    {
      name: `Emily Rodriguez`,
      designation: `Environmental Activist`,
      content: `EcoVolt isn't just about saving money, it's about saving our planet. The insights it provides have helped me live a more sustainable lifestyle.`,
      avatar: 'https://randomuser.me/api/portraits/women/27.jpg',
    },
    {
      name: `David Thompson`,
      designation: `Tech Enthusiast`,
      content: `The AI algorithms in EcoVolt are impressive. It's like having a personal energy expert working 24/7 to optimize my home's efficiency.`,
      avatar: 'https://randomuser.me/api/portraits/men/12.jpg',
    },
    {
      name: `Lisa Patel`,
      designation: `Working Mom`,
      content: `With a busy family, I love how EcoVolt automates our energy usage. It's one less thing to worry about, and the savings are a great bonus!`,
      avatar: 'https://randomuser.me/api/portraits/women/32.jpg',
    },
    {
      name: `Robert Garcia`,
      designation: `Retiree`,
      content: `On a fixed income, every dollar counts. EcoVolt has helped me reduce my energy bills significantly, giving me more financial peace of mind.`,
      avatar: 'https://randomuser.me/api/portraits/men/17.jpg',
    },
  ]

  const navItems = [
    {
      title: `Features`,
      link: `#features`,
    },
    {
      title: `Pricing`,
      link: `#pricing`,
    },
    {
      title: `FAQ`,
      link: `#faq`,
    },
  ]

  const packages = [
    {
      title: `EcoVolt Basic`,
      description: `Perfect for small apartments or beginners in energy management`,
      monthly: 19,
      yearly: 190,
      features: [
        `AI-powered optimization`,
        `Real-time monitoring`,
        `Basic automation`,
      ],
    },
    {
      title: `EcoVolt Pro`,
      description: `Ideal for houses and tech-savvy users seeking advanced features`,
      monthly: 39,
      yearly: 390,
      features: [
        `All Basic features`,
        `Renewable integration`,
        `Predictive forecasting`,
        `Advanced automation`,
      ],
      highlight: true,
    },
    {
      title: `EcoVolt Business`,
      description: `Tailored for small businesses with complex energy needs`,
      monthly: 79,
      yearly: 790,
      features: [
        `All Pro features`,
        `Multi-device management`,
        `Energy audit reports`,
        `Dedicated support`,
      ],
    },
  ]

  const questionAnswers = [
    {
      question: `How much can I expect to save with EcoVolt?`,
      answer: `While savings vary based on individual usage, many users report reducing their energy bills by 15-30%. The exact amount depends on factors like your current energy consumption, local utility rates, and how actively you engage with EcoVolt's recommendations.`,
    },
    {
      question: `Is EcoVolt compatible with my existing smart home devices?`,
      answer: `EcoVolt is designed to integrate seamlessly with most popular smart home ecosystems, including Google Home, Amazon Alexa, and Apple HomeKit. We're continuously expanding our compatibility list to ensure broad coverage.`,
    },
    {
      question: `Do I need technical expertise to install and use EcoVolt?`,
      answer: `Not at all! EcoVolt is designed for easy self-installation and intuitive use. Our step-by-step guide walks you through the setup process, and our user-friendly app makes daily management a breeze. If you do need help, our support team is always ready to assist.`,
    },
    {
      question: `How does EcoVolt protect my data and privacy?`,
      answer: `We take your privacy seriously. EcoVolt uses bank-level encryption to protect your data, and we never sell your personal information. You have full control over your data and can delete it at any time. Our systems are regularly audited to ensure the highest level of security.`,
    },
  ]

  const logos = [
    { url: 'https://i.imgur.com/afwBIFK.png' },
    { url: 'https://i.imgur.com/LlloOPa.png' },
    { url: 'https://i.imgur.com/j8jPb4H.png' },
    { url: 'https://i.imgur.com/mJ1sZFv.png' },
  ]

  const steps = [
    {
      heading: `Install EcoVolt`,
      description: `Easily set up the EcoVolt hub and connect it to your home's energy system.`,
    },
    {
      heading: `Connect Devices`,
      description: `Link your smart home devices and appliances to the EcoVolt network.`,
    },
    {
      heading: `Analyze & Optimize`,
      description: `Let EcoVolt's AI analyze your energy usage and suggest optimizations.`,
    },
    {
      heading: `Save & Sustain`,
      description: `Watch your energy bills decrease and your carbon footprint shrink!`,
    },
  ]

  const painPoints = [
    {
      emoji: `💸`,
      title: `Shocked by sky-high energy bills`,
    },
    {
      emoji: `🌡️`,
      title: `Worried about climate change impact`,
    },
    {
      emoji: `🤯`,
      title: `Overwhelmed by complex energy management`,
    },
  ]

  const avatarItems = [
    {
      src: 'https://randomuser.me/api/portraits/men/51.jpg',
    },
    {
      src: 'https://randomuser.me/api/portraits/women/9.jpg',
    },
    {
      src: 'https://randomuser.me/api/portraits/women/52.jpg',
    },
    {
      src: 'https://randomuser.me/api/portraits/men/5.jpg',
    },
    {
      src: 'https://randomuser.me/api/portraits/men/4.jpg',
    },
  ]

  return (
    <LandingContainer navItems={navItems}>
      <LandingHero
        title={`Power Your Home, Empower Your Future`}
        subtitle={`EcoVolt: The smart energy management system that cuts your bills, boosts efficiency, and fights climate change - all on autopilot.`}
        buttonText={`Start Saving Today`}
        pictureUrl={`https://marblism-dashboard-api--production-public.s3.us-west-1.amazonaws.com/Drl4t0-ecovolt-ORqW`}
        socialProof={
          <LandingSocialRating
            avatarItems={avatarItems}
            numberOfUsers={10000}
            suffixText={`happy homes powered by EcoVolt`}
          />
        }
      />
      <LandingSocialProof
        logos={logos}
        title={`Trusted by Leading Energy Experts`}
      />
      <LandingPainPoints
        title={`The Hidden Cost of Energy Waste: $1,500 Annual Loss for Average Homes`}
        painPoints={painPoints}
      />
      <LandingHowItWorks
        title={`Your Journey to Energy Mastery`}
        steps={steps}
      />
      <LandingFeatures
        id="features"
        title={`Intelligent Features for a Smarter, Greener Home`}
        subtitle={`Discover how EcoVolt's cutting-edge technology transforms your energy consumption`}
        features={features}
      />
      <LandingTestimonials
        title={`Real People, Real Savings, Real Impact`}
        subtitle={`See how EcoVolt is changing lives and saving the planet, one home at a time`}
        testimonials={testimonials}
      />
      <LandingPricing
        id="pricing"
        title={`Invest in Your Future, Save from Day One`}
        subtitle={`Choose the perfect EcoVolt plan to start your journey towards energy efficiency and sustainability`}
        packages={packages}
      />
      <LandingFAQ
        id="faq"
        title={`Your Questions, Answered`}
        subtitle={`Get the clarity you need to make an informed decision about your energy future`}
        questionAnswers={questionAnswers}
      />
      <LandingCTA
        title={`Ready to Revolutionize Your Energy Use?`}
        subtitle={`Join thousands of smart homeowners saving money and the planet with EcoVolt. Start your 30-day free trial today!`}
        buttonText={`Begin Your Energy Revolution`}
        buttonLink={`/register`}
      />
    </LandingContainer>
  )
}
