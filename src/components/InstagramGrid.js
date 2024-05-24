import { useEffect, useState } from "react";
export const InstagramGrid = () => {
  const [hydrated, setHydrated] = useState(false);
  useEffect(() => {
    setHydrated(true);
  }, []);

  if (hydrated) {
    return (
      <>
        <div
          className="embedsocial-hashtag"
          data-ref="5c23e8efa5c8a493154256742a6963ee19331d39"
          data-dynamicload="yes"
        >
          <a
            className="feed-powered-by-es feed-powered-by-es-feed-img"
            href="https://embedsocial.com/social-media-aggregator/"
            target="_blank"
            title="Instagram widget"
          >
            {" "}
            <img
              src="https://embedsocial.com/cdn/images/embedsocial-icon.png"
              alt="EmbedSocial"
            />{" "}
            Instagram widget{" "}
          </a>
        </div>
      </>
    );
  }

  return null;
};
