import React from "react";

export default function Footer() {
    const sections = [
        {
            title: "Fastfood",
            links: [
                "Explore Menu",
                "About Us",
                "My Orders",
                "Investor Relations",
            ],
        },
        {
            title: "For Restaurants",
            links: [
                "Partner With Us",
                "Apps For You",
                "Restaurant Consulting",
            ],
        },
        {
            title: "For Delivery Partners",
            links: ["Partner With Us", "Apps For You"],
        },
        {
            title: "Learn More",
            links: [
                "Privacy",
                "Security",
                "Terms of Service",
                "Help & Support",
                "Report a Fraud",
                "Blog",
            ],
        },
    ];

    return (
        <footer className="ff-footer">
            <style>{`
        .ff-footer {
          background: #fff;
          color: #0c0b0b;
          padding: 65px 24px 35px;
          font-family: Arial, sans-serif;
        }

        .ff-footer-inner {
          max-width: 1140px;
          margin: 0 auto;
        }

        .ff-logo {
          color: #173d29;
          font-size: 56px;
          font-weight: 900;
          font-style: italic;
          letter-spacing: -2px;
          margin-bottom: 50px;
          text-decoration: none;
          display: inline-block;
        }

        .ff-grid {
          display: grid;
          grid-template-columns: repeat(5, minmax(0, 1fr));
          gap: 28px;
        }

        .ff-footer h3 {
          color: #173d29;
          font-size: 21px;
          font-weight: 600;
          line-height: 1.5;
          margin: 0 0 18px;
        }

        .ff-footer ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .ff-footer li {
          margin-bottom: 14px;
        }

        .ff-footer li a {
          color: #17613c;
          text-decoration: none;
          font-size: 17px;
          line-height: 1.6;
          transition: color 0.3s;
        }

        .ff-footer li a:hover {
          color: #fff;
        }

        .ff-socials {
          display: flex;
          flex-wrap: wrap;
          gap: 7px;
          margin-bottom: 22px;
        }

        .ff-socials a {
          width: 30px;
          height: 30px;
          background: #000;
          color: #fff;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          text-decoration: none;
          font-size: 18px;
          font-weight: bold;
          transition: transform 0.3s;
        }

        .ff-socials a:hover {
          transform: translateY(-4px);
        }

        .ff-store {
          display: flex;
          align-items: center;
          gap: 10px;
          border: 1px solid #999;
          border-radius: 9px;
          color: #000000;
          padding: 10px 12px;
          margin-bottom: 20px;
          text-decoration: none;
          max-width: 205px;
          box-sizing: border-box;
        }

        .ff-store svg {
          width: 32px;
          height: 36px;
          flex-shrink: 0;
        }

        .ff-store small {
          display: block;
          font-size: 11px;
        }

        .ff-store strong {
          display: block;
          font-size: 23px;
          font-weight: 500;
          white-space: nowrap;
        }

        .ff-bottom {
          border-top: 1px solid #555;
          margin-top: 80px;
          padding-top: 20px;
          color: #929292;
          font-size: 13px;
          line-height: 1.6;
        }

        .ff-bottom p {
          margin: 0;
        }

        @media (max-width: 1050px) {
          .ff-grid {
            grid-template-columns: repeat(3, minmax(0, 1fr));
            row-gap: 35px;
          }
        }

        @media (max-width: 600px) {
          .ff-footer {
            padding: 40px 20px 25px;
          }

          .ff-logo {
            font-size: 44px;
            margin-bottom: 30px;
          }

          .ff-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 28px 16px;
          }

          .ff-footer h3 {
            font-size: 18px;
          }

          .ff-footer li a {
            font-size: 15px;
          }

          .ff-social-column {
            grid-column: 1 / -1;
          }

          .ff-bottom {
            margin-top: 40px;
          }
        }
      `}</style>

            <div className="ff-footer-inner">
                <a href="#/" className="ff-logo">
                    TastyBites
                </a>

                <div className="ff-grid">
                    {sections.map((section) => (
                        <div key={section.title}>
                            <h3>{section.title}</h3>

                            <ul>
                                {section.links.map((link) => (
                                    <li key={link}>
                                        <a href="#/">{link}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}

                    <div className="ff-social-column">
                        <h3>Social Links</h3>

                        <div className="ff-socials">
                            <a
                                href="https://www.linkedin.com/"
                                aria-label="LinkedIn"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                in
                            </a>

                            <a
                                href="https://www.instagram.com/"
                                aria-label="Instagram"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                ◎
                            </a>

                            <a
                                href="https://www.youtube.com/"
                                aria-label="YouTube"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                ▶
                            </a>

                            <a
                                href="https://www.facebook.com/"
                                aria-label="Facebook"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                f
                            </a>

                            <a
                                href="https://x.com/"
                                aria-label="X"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                𝕏
                            </a>
                        </div>

                        <a
                            href="https://www.apple.com/app-store/"
                            className="ff-store"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <svg
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                aria-hidden="true"
                            >
                                <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.5 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.39 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.53 4.09zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.57-2.34 4.5-3.74 4.25z" />
                            </svg>

                            <span>
                                <small>Download on the</small>
                                <strong>App Store</strong>
                            </span>
                        </a>

                        <a
                            href="https://play.google.com/"
                            className="ff-store"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <svg viewBox="0 0 32 36" aria-hidden="true">
                                <path
                                    fill="#4285F4"
                                    d="M2 2v32l16-16z"
                                />
                                <path
                                    fill="#34A853"
                                    d="M2 2l20 12-4 4z"
                                />
                                <path
                                    fill="#FBBC04"
                                    d="M18 18l4-4 8 5-8 5z"
                                />
                                <path
                                    fill="#EA4335"
                                    d="M2 34l20-10-4-6z"
                                />
                            </svg>

                            <span>
                                <small>GET IT ON</small>
                                <strong>Google Play</strong>
                            </span>
                        </a>
                    </div>
                </div>

                <div className="ff-bottom">
                    <p>
                        By continuing past this page, you agree to our
                        Terms of Service, Cookie Policy, Privacy Policy
                        and Content Policies. All trademarks are
                        properties of their respective owners.
                    </p>

                    <p>
                        © {new Date().getFullYear()} Fastfood.
                        All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
