import { useRef, useLayoutEffect } from "react";

import { Rightpoint } from "./components/Rightpoint";
import { RIT } from "./components/RIT";
import { Title } from "./components/Title";
import { Bio } from "./components/Bio";
import { Navbar } from "./components/Navbar";
import { Navlink } from "./components/Navlink";
import { HomePage } from "./components/HomePage";
import { Projects } from "./components/Projects";
import { Footer } from "./components/Footer";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./App.scss";

function App() {
  const ref = useRef(null); // create a ref for the root level element (for scoping)
  const homeRef = useRef();
  const projectsRef = useRef();
  const rightpointRef = useRef();
  const ritRef = useRef();

  useLayoutEffect(() => {
    // create our context. This function is invoked immediately and all GSAP animations and ScrollTriggers created during the execution of this function get recorded so we can revert() them later (cleanup)
    let ctx = gsap.context(() => {
      gsap.registerPlugin(ScrollTrigger);
      let Pages = gsap.utils.toArray(".Page");
      console.log(Pages);
      // we'll create a ScrollTrigger for each page just to track when each page's top hits the top of the viewport (we only need this for snapping)
      let tops = Pages.map((page) =>
        ScrollTrigger.create({ trigger: page, start: "top top" })
      );

      Pages.forEach((page, i) => {
        ScrollTrigger.create({
          trigger: page,
          start: () =>
            page.offsetHeight < window.innerHeight
              ? "top top"
              : "bottom bottom", // if it's shorter than the viewport, we prefer to pin it at the top
          pin: true,
          pinSpacing: false,
        });
      });

      ScrollTrigger.create({
        snap: {
          snapTo: (progress, self) => {
            let PageStarts = tops.map((st) => st.start), // an Array of all the starting scroll positions. We do this on each scroll to make sure it's totally responsive. Starting positions may change when the user resizes the viewport
              snapScroll = gsap.utils.snap(PageStarts, self.scroll()); // find the closest one
            return gsap.utils.normalize(
              0,
              ScrollTrigger.maxScroll(window),
              snapScroll
            ); // snapping requires a progress value, so convert the scroll position into a normalized progress value between 0 and 1
          },
          duration: 0.5,
        },
      });
    }, ref); // <- IMPORTANT! Scopes selector text

    return () => ctx.revert(); // cleanup
  }, []); // <- empty dependency Array so it doesn't re-run on every render

  return (
    <div className="App">
      {/* <Title/> */}
      {/* <Navbar /> */}
      {/* Overview */}
      {/* <Bio /> */}
      <HomePage ref={homeRef}/>
      <Projects ref = {projectsRef}/>
      {/* Rightpoint */}
      <Rightpoint ref = {rightpointRef}/>
      {/* Education */}
      <RIT ref = {ritRef}/>
      <Footer />
    </div>
  );
}

export default App;
