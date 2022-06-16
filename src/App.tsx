import { useState } from "react";

import { ShortedLinksList, ShortLinkCard } from "./components/shortLink";
import { Statistics } from "./components/statistics";
import { Footer, Hero, Navbar } from "./components/ui";

import { IShortedLink } from "./service/shortUrl";

const App = () => {
  const [links, setLinks] = useState<IShortedLink[]>([]);

  return (
    <div>
      <header className="container">
        <Navbar />
        <Hero />
      </header>
      <main className="main">
        <ShortLinkCard links={links} setLinks={setLinks} />
        <ShortedLinksList links={links} />

        <Statistics />
        <section className="section-dark">
          <h2 className="section__title">Boost your links today</h2>
          <button className="btn">Get Started</button>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default App;
