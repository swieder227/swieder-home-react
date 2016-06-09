export const case_study_data = [
  {
    id: "0",
    heading: "23 Stories",
    subheading: "Conde Nast Media Group becomes 23 Stories.",
    summary: "A high profile rebranding that required an equally high quality website. I was the developer for the job.",
    date: "Sep 2015",
    client: "23 Stories x Conde Nast",
    role: "Lead Web Developer",
    hero_img: "./assets/case_23_home.jpg",
    launch_url: "http://www.23stories.com/",
    sections: [
      {
        id: "0_0",
        template: "paragraph",
        heading: "Creative Collaboration",
        body: "I was honored to hear that our Creative Directors had specifically asked for my assignment to this project -- especially knowing the entire company had eyes on it!\nI enjoy working with creatives of all varities, and I've been told that they value my input into UX and front-end web development. It's for that reason, and for my positive attitude, that I believe I was able to collaborate on such an important project."
      },
      {
        id: "0_4",
        template: "image",
        url: "./assets/case_23_ms.jpg",
        bg_size: "contain"
      },
      {
        id: "0_1",
        template: "paragraph",
        heading: "Clean, Modular, Performant Web Development",
        body: "The top line requirements were to have an easy-to-use CMS with strong SEO. After seeing the information architecture and page layout, we decided on a custom Wordpress theme suited our needs.\nI also took the liberty to set technical expectations. One, since the site is evergreen, it should be easily extensible by future developers. And two, that since it's the face of our company, front-end performance should be a priority.\nThe end result is an architected, organizned, modular, testable -- and even commented -- code base. \"View source\", I'm not scared. Always have pride in your code."
      },
      {
        id: "0_5",
        template: "image",
        url: "./assets/case_23_cms.jpg",
        bg_size: "contain"
      },
      {
        id: "0_3",
        template: "paragraph",
        heading: "#ShipIt",
        body: "After revisions, code reviews, content herding, and a nerve-wracking presentation on the 50th floor of One World Trade in front of C-level executives, it was time to launch 23stories.com.\nThe site is considered a success and the CMS content is still easily updated to this day without any tech intervention.\nTo top it off, I was awarded the vaunted Get Shit Done Award™ at the company-wide all-staff meeting. Cheers!"
      },
      {
        id: "0_6",
        template: "image",
        url: "./assets/case_23_gsd.jpg",
        bg_size: "cover"
      }
    ]
  },
  {
    id: "1",
    heading: "Discovery",
    subheading: "Sharing and archiving creative technology executions.",
    summary: "A software platform for sharing sparks of inspiration and discovering creative technology for your next sales pitch.",
    date: "Feb 2016",
    client: "23 Stories Technology",
    role: "UX Designer, Front-End Engineer",
    hero_img: "./assets/case_discovery_app.jpg",
    launch_url: "https://github.com/swieder227/disco",
    sections: [
      {
        id: "1_0",
        template: "paragraph",
        heading: "Designing to Solve a Business Use Case",
        body: "The technology team is often approached with requests for a particular feature:\n\"We're preparing a pitch using AR, do have more examples?\", or\n\"Do you have any inspiration for long form parallax articles?\"\nAs a creative technology team, we share these examples daily, but they're often lost in the ether of email backlogs. Discovery is intended to be a platform to archive and share these executions."
      },
      {
        id: "1_4",
        template: "image",
        url: "./assets/case_discovery_sketch.jpg",
        bg_size: "cover"
      },
      {
        id: "1_1",
        template: "paragraph",
        heading: "UX User Stories",
        body: "My first task was designing the front-end web app, focusing on user experience. I interviewed key users, asking them to talk through their business challenges and usage scenarios.\nI took those learnings and created wireframes of the application architecture and user flow. After revisions and feedback, then finally I introduced a visual design.\nTo me, design means \"make a great experience to solve a problem\", not \"make it pretty.\""
      },
      {
        id: "1_5",
        template: "image",
        url: "./assets/case_discovery_wireframe.jpg",
        bg_size: "contain"
      },
      {
        id: "1_2",
        template: "paragraph",
        heading: "Back-End & Front-End Coordination",
        body: "The software is two-part: 1. a Ruby on Rails CMS, and 2. an isomorphic Node and React web app. Building this platform was a very collaborative process between back-end and front-end developers. We worked together to create a code contract by defining the data models and RESTful endpoint structure.\nMy main responsibility was converting the wireframes into the fully responsive web app. However, I was able to dip down the stack and provide code reviews and pull requests for the back-end code.\nThe web app is a server-side rendered NodeJS app running ReactJS with ES6 goodies, authenticated user roles, filterable tagging, deep-linked routing, infinite scroll, slick animations and more."
      },
      {
        id: "1_6",
        template: "image",
        url: "./assets/case_discovery_bright.jpg",
        bg_size: "cover"
      },
      {
        id: "1_3",
        template: "paragraph",
        heading: "Launch, then Iterate",
        body: "We took an agile approach in regards to launching. We shipped a minimium viable product to market and into users hands. Post-launch, we collect user feedback and create sprint cycles with outlined platform improvements. To this day it's being used by the entire team to prepare for pitches, and facilitating our monthly innovation meetings. We have plans to open it up to a broader audience, stay tuned!"
      },
    ]
  },
  {
    id: "2",
    heading: "TargetStyle",
    subheading: "Recreating famous Vogue images in Target style.",
    summary: "An ad campaign that extends the Vogue September Issue into a uniquely engaging digital experience.",
    date: "Oct 2015",
    client: "TargetStyle x Vogue",
    role: "Lead Web Developer",
    hero_img: "./assets/case_targetstyle_home.jpg",
    launch_url: "http://origin.ads.thestudio.condenast.com/staging/targetstylemarketing/target_mobile/index.html",
    sections: [
      {
        id: "2_0",
        template: "paragraph",
        heading: "Enhancing Prints Ads with Digital - Shazam!",
        body: "Print ads have been the same forever. We wanted to enhance the print advertisements in Vogue's biggest issue of the year by bringing to life a second-screen digital experience.\nWe teamed up with NYC-based creative agency Mother to ideate and build print ads triggerable by Shazam's image recognition. When scanned, a web app would open providing behind-the-scenes content in a delightful user interface."
      },
      {
        id: "2_4",
        template: "image",
        url: "./assets/case_targetstyle_shazam.jpg",
        bg_size: "cover"
      },
      {
        id: "2_1",
        template: "paragraph",
        heading: "A Unique User Experience",
        body: "As the technical liaison with ad agency Mother, I represented engineering in many brainstorm meetings. We came up with this crazy idea of a three-dimensional timeline of behind-the-scenes content that was navigated using pinch-and-zoom.\nWe knew it would take experimenting, so I built a proof-of-concept using HammerJS to test on our phones. After playing with the prototype, and testing with numerous users, we decided that if we added a bit of instructional copy, then the UX was unique enough to engage the user, but intuitive enough to avoid confusion."
      },
      {
        id: "2_2",
        template: "paragraph",
        heading: "Custom Animation with a Modular Structure",
        body: "Transitioning from prototype to production was seamless. I continued building out a modular and javascript component-based architecture. The gesture recognition was built using the robust touch library HammerJS. And the three-dimensional timelines using Greensock. There were 20 stories with different content but similar structure. The reusable javascript class strucutre that I built allowed for maximum reusability and efficiency."
      },
      {
        id: "2_5",
        template: "image",
        url: "./assets/case_targetstyle_ui.jpg",
        bg_size: "cover"
      },
      {
        id: "2_3",
        template: "paragraph",
        heading: "Industry Buzz",
        body: "The launch of TargetStyle aligned with the Vogue September Issue. On the front-cover was Beyonce and the back-cover was our first ad (talk about competition!), as well as several other full page spreads.\nSocial media engagement went through the roof as we saw a lot of comments and shares. Industry media took notice and we saw great feedback from writers at Digiday, The New York Times, Forbes, and more."
      },
      {
        id: "2_6",
        template: "image",
        url: "./assets/case_targetstyle_press.jpg",
        bg_size: "contain"
      },
    ]
  },
  {
    id: "3",
    heading: "Coca-Cola Heatmaps",
    subheading: "An interactive sales tool to improve business strategy.",
    summary: "Improving a legacy business tool by refining the user experience and rebuilding a modern web app.",
    date: "Dec 2015",
    client: "Coca-Cola x Octagon",
    role: "UX Designer, Front-End Developer",
    hero_img: "./assets/case_coke_1.jpg",
    launch_url: "",
    sections: [
      {
        id: "3_0",
        template: "paragraph",
        heading: "Diagnosing UX Problems",
        body: "Business tools are meant to facilitate business goals. However, if a digital tool's UI is more of a hinderance than a help, than you've got a problem.\nIn this case, the client had a useful database of information, but an outdated Flash application that was confusing and cumbersome. My first task was to diagnose the underlying UX issues and redesign the interface with the client's goals in mind.\nI took steps to gather user feedback. The primary approach was to interview key stakeholders and users of the application. I asked them questions, such as: what's your main business objective? Or, what do you imagine the purpose of this tool to be? And, what obstacles do you find in the current iteration? In addition to that, I created a brief survey to gather intel from more sources who did not have time for a full interview."
      },
      {
        id: "3_3",
        template: "image",
        url: "./assets/case_coke_wires.jpg",
        bg_size: "contain"
      },
      {
        id: "3_1",
        template: "paragraph",
        heading: "A UX-Driven Responsive Redesign",
        body: "Combininig all of our user feedback with our best practices and experience, I created wireframes of the new UI. Every design decision was made for a reason and with a specific goal.\nI then created an animated motion prototype in order to better illustrate the interaction design to the client. I find that static mockups can be hard to understand and this type of visual prototype gives the client a better understanding of how the digital experience will function.\nAfter layout and interaction were agreed upon, I gave the visual design a much needed face-lift and implenented their newest branding guidelines."
      },
      {
        id: "3_4",
        template: "image",
        url: "./assets/case_coke_designs.jpg",
        bg_size: "contain"
      },
      {
        id: "3_2",
        template: "paragraph",
        heading: "Building a Responsive Web App",
        body: "Lastly, I built the front-end web app. The UI was data-driven and modular, so we agreed ReactJS was a good choice. I implemented the designs to spec and worked in conjunction with their back-end developer to pipe in the database layer.\nThe client was extremely happy and acknowledged that we succeeded in creating a more useful sales tool. The UX redesign was a success and they've got a rebuilt, modern web app to continue using and improving over time."
      },
      {
        id: "3_5",
        template: "image",
        url: "./assets/case_coke_map.jpg",
        bg_size: "contain"
      },
    ]
  }
];