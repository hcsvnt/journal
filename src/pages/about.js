import React from 'react';
import Layout from '../components/layout';
import Header from '../components/header';



const About = () => {
  return (
    <Layout>
      <Header />
      <section>
        <article>
          <h1>
            Hi! I'm Mateusz (or Matt)
          </h1>

          <p>
              and this is my journal of (mostly) photos.
              Apart from taking pictures of random stuff I work as 
              a freelance photographer and sometimes as an assistant
              in the studio and on location.
              Recently I have also started building pretty websites like this one (thanks mr covid).

              I'm a massive fan of indepentent web so if you've got something of your own going,
              make sure to "smash that message button", I'd love to see your stuff.

              If you're looking for anything photography or perhaps a website, hit me up.
              Also most of the photos on this website can be had as digital copies (NFTs anyone?)
              or ordered as prints if you fancy.
              Last but not least – I'm happy to answer any questions.
          </p>
        </article>
        <article>
          <h2>
            Contact & Links
          </h2>
          <p> 
            here be links.
          </p>
        </article>
      </section>
    </Layout>
  )
};

export default About;