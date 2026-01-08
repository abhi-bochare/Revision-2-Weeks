import { useEffect, useRef, useState } from "react";

const sections = ["about", "services", "portfolio", "contact"];

function ScrollNavigation() {
  const sectionRefs = useRef({});
  const observerRef = useRef(null);
  const [active, setActive] = useState("about");

  const scrollTo = (id) => {
    sectionRefs.current[id].scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((id) => {
      observerRef.current.observe(sectionRefs.current[id]);
    });

    return () => observerRef.current.disconnect();
  }, []);

  return (
    <>
      <nav>
        {sections.map((sec) => (
          <button
            key={sec}
            onClick={() => scrollTo(sec)}
            style={{
              fontWeight: active === sec ? "bold" : "normal",
            }}
          >
            {sec}
          </button>
        ))}
      </nav>

      {sections.map((sec) => (
        <section
          key={sec}
          id={sec}
          ref={(el) => (sectionRefs.current[sec] = el)}
          style={{ height: "100vh" }}
        >
          <h2>{sec}</h2>
        </section>
      ))}
    </>
  );
}

export default ScrollNavigation;
