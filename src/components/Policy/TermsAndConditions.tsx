"use client";
import { useEffect } from "react";

export default function TermsAndConditions() {
  useEffect(() => {
    const path = window.location.pathname;
    if (path.includes("#")) {
      const id = path.split("#")[1];
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, []);
  return (
    <div className="flex flex-col gap-4 m-10 p-10">
      <>
        <style
          dangerouslySetInnerHTML={{
            __html:
              "\n  [data-custom-class=&apos;body&apos;], [data-custom-class=&apos;body&apos;] * {\n          background: transparent !important;\n        }\n[data-custom-class=&apos;title&apos;], [data-custom-class=&apos;title&apos;] * {\n          font-family: Arial !important;\nfont-size: 26px !important;\ncolor: #000000 !important;\n        }\n[data-custom-class=&apos;subtitle&apos;], [data-custom-class=&apos;subtitle&apos;] * {\n          font-family: Arial !important;\ncolor: #FFFEF9 !important;\nfont-size: 14px !important;\n        }\n[data-custom-class=&apos;heading_1&apos;], [data-custom-class=&apos;heading_1&apos;] * {\n          font-family: Arial !important;\nfont-size: 19px !important;\ncolor: #000000 !important;\n        }\n[data-custom-class=&apos;heading_2&apos;], [data-custom-class=&apos;heading_2&apos;] * {\n          font-family: Arial !important;\nfont-size: 17px !important;\ncolor: #000000 !important;\n        }\n[data-custom-class=&apos;body_text&apos;], [data-custom-class=&apos;body_text&apos;] * {\n          color: #FFFEF9 !important;\nfont-size: 14px !important;\nfont-family: Arial !important;\n        }\n[data-custom-class=&apos;link&apos;], [data-custom-class=&apos;link&apos;] * {\n          color: #3030F1 !important;\nfont-size: 14px !important;\nfont-family: Arial !important;\nword-break: break-word !important;\n        }\n",
          }}
        />
        <div data-custom-class="body">
          <div style={{ textAlign: "left" }}>
            <div
              className="MsoNormal"
              data-custom-class="title"
              style={{ lineHeight: "1.5" }}
            >
              <div className="block-component">
                <span style={{ fontSize: 19 }} />
              </div>
              <div className="question">
                <strong>TERMS AND CONDITIONS </strong>
              </div>
              <div className="statement-end-if-in-editor" />
            </div>
            <div className="MsoNormal" style={{ lineHeight: "1.5" }}>
              <br />
            </div>
            <div
              className="MsoNormal"
              data-custom-class="subtitle"
              style={{ lineHeight: "1.5" }}
            >
              <strong>Last updated</strong>{" "}
              <div className="question">
                <strong>February 05, 2024</strong>
              </div>
            </div>
            <div className="MsoNormal" style={{ lineHeight: "1.1" }}>
              <br />
            </div>
            <div className="MsoNormal" style={{ lineHeight: "115%" }}>
              <br />
            </div>
            <div className="MsoNormal" style={{ lineHeight: "115%" }}>
              <br />
            </div>
            <div style={{ lineHeight: "1.5" }}>
              <strong>
                <span data-custom-class="heading_1">
                  AGREEMENT TO OUR LEGAL TERMS
                </span>
              </strong>
            </div>
          </div>
          <div style={{ textAlign: "left" }}>
            <div
              className="MsoNormal"
              id="agreement"
              style={{ lineHeight: "1.5" }}
            ></div>
          </div>
          <div style={{ lineHeight: 1 }}>
            <br />
          </div>
          <div style={{ textAlign: "left" }}>
            <div
              className="MsoNormal"
              data-custom-class="body_text"
              style={{ lineHeight: "1.5" }}
            >
              <span
                style={{
                  fontSize: "11.0pt",
                  lineHeight: "115%",
                  fontFamily: "Arial",
                  color: "#FFFEF9",
                }}
              >
                We are <strong>Cinemachines Private Limited</strong>( &apos;
                <strong>Company</strong>&apos;, &apos;
                <strong>we</strong>&apos;, &apos;<strong>us</strong>&apos;, or
                &apos;
                <strong>our</strong>&apos; )
                <span
                  style={{
                    fontSize: "11.0pt",
                    lineHeight: "115%",

                    color: "#FFFEF9",
                  }}
                >
                  <span
                    style={{
                      fontSize: "11.0pt",
                      lineHeight: "115%",

                      color: "#FFFEF9",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "11.0pt",
                        lineHeight: "115%",

                        color: "#FFFEF9",
                      }}
                    >
                      , a company registered in{" "}
                      <span
                        style={{
                          fontSize: "11.0pt",
                          lineHeight: "115%",

                          color: "#FFFEF9",
                        }}
                      >
                        <span
                          style={{
                            fontSize: "11.0pt",
                            lineHeight: "115%",

                            color: "#FFFEF9",
                          }}
                        >
                          <div className="question">India</div>
                          <div className="statement-end-if-in-editor">
                            <span
                              style={{
                                fontSize: "11.0pt",
                                lineHeight: "115%",

                                color: "#FFFEF9",
                              }}
                            >
                              <span
                                style={{
                                  fontSize: "11.0pt",
                                  lineHeight: "115%",

                                  color: "#FFFEF9",
                                }}
                              >
                                <div className="statement-end-if-in-editor" />
                              </span>
                            </span>
                          </div>
                        </span>
                      </span>{" "}
                      at <div className="question">D39 Chomu House,</div>
                      <div className="question">CScheme</div>
                      <div className="question">Jaipur Rajasthan , 302001</div>
                    </span>
                  </span>

                  <span
                    style={{
                      fontSize: "11.0pt",
                      lineHeight: "115%",

                      color: "#FFFEF9",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "11.0pt",
                        lineHeight: "115%",

                        color: "#FFFEF9",
                      }}
                    >
                      <div className="else-block" />
                    </span>
                  </span>
                  <div className="statement-end-if-in-editor">.</div>
                </span>
              </span>
            </div>
          </div>
          <div style={{ lineHeight: 1 }}>
            <br />
          </div>
          <div style={{ textAlign: "left" }}>
            <div
              className="MsoNormal"
              data-custom-class="body_text"
              style={{ lineHeight: "1.5" }}
            >
              <span
                style={{
                  fontSize: "11.0pt",
                  lineHeight: "115%",
                  fontFamily: "Arial",
                  color: "#FFFEF9",
                }}
              >
                We operate the website
                <span style={{ color: "rgb(0, 58, 250)" }}>
                  <a
                    href="https://cinemachines.com"
                    target="_blank"
                    data-custom-class="link"
                  >
                    https://cinemachines.com
                  </a>
                </span>
                the &apos;<strong>Site</strong>&apos; , as well as any other
                related products and services that refer or link to these legal
                terms the &apos;
                <strong>Legal Terms</strong>&apos; collectively, the &apos;
                <strong>Services.</strong>&apos;
              </span>
            </div>
            <div className="MsoNormal" style={{ lineHeight: 1 }}>
              <br />
            </div>
            <div
              className="MsoNormal"
              data-custom-class="body_text"
              style={{ lineHeight: "1.5" }}
            >
              <span
                style={{
                  fontSize: "11.0pt",
                  lineHeight: "115%",
                  fontFamily: "Arial",
                  color: "#FFFEF9",
                }}
              >
                You can contact us by{" "}
                <div className="block-component">
                  email at{" "}
                  <div className="question">support@cinemachines.com</div>
                  or by mail to{" "}
                  <div className="question">
                    D39 Chomu House CScheme Jaipur Rajasthan,India , 302001
                  </div>
                  ,
                </div>
              </span>
            </div>
            <div className="MsoNormal" style={{ lineHeight: 1 }}>
              <br />
            </div>
            <div
              className="MsoNormal"
              data-custom-class="body_text"
              style={{ lineHeight: "1.5" }}
            >
              <span
                style={{
                  fontSize: "11.0pt",
                  lineHeight: "115%",
                  fontFamily: "Arial",
                  color: "#FFFEF9",
                }}
              >
                These Legal Terms constitute a legally binding agreement made
                between you, whether personally or on behalf of an entity (
                &apos;<strong>y</strong>
                <strong>ou</strong>&apos;
                <div className="else-block" />
                ), and{" "}
                <div className="question">Cinemachines Private Limited</div>,
                concerning your access to and use of the Services. You agree
                that by accessing the Services, you have read, understood, and
                agreed to be bound by all of these Legal Terms. IF YOU DO NOT
                AGREE WITH ALL OF THESE LEGAL TERMS, THEN YOU ARE EXPRESSLY
                PROHIBITED FROM USING THE SERVICES AND YOU MUST DISCONTINUE USE
                IMMEDIATELY.
              </span>
            </div>
            <div className="MsoNormal" style={{ lineHeight: 1 }}>
              <br />
            </div>
            <div
              className="MsoNormal"
              data-custom-class="body_text"
              style={{ lineHeight: "1.5" }}
            >
              <span
                style={{
                  fontSize: "11.0pt",
                  lineHeight: "115%",
                  fontFamily: "Arial",
                  color: "#FFFEF9",
                }}
              >
                Supplemental terms and conditions or documents that may be
                posted on the Services from time to time are hereby expressly
                incorporated herein by reference. We reserve the right, in our
                sole discretion, to make changes or modifications to these Legal
                Terms at any time and for any reason
                <div className="statement-end-if-in-editor" />. We will alert
                you about any changes by updating the &apos;Last updated&apos;
                <div className="else-block" /> date of these Legal Terms, and
                you waive any right to receive specific notice of each such
                change. It is your responsibility to periodically review these
                Legal Terms to stay informed of updates. You will be subject to,
                and will be deemed to have been made aware of and to have
                accepted, the changes in any revised Legal Terms by your
                continued use of the Services after the date such revised Legal
                Terms are posted.
                <div className="else-block" />
              </span>
            </div>
          </div>
          <div style={{ lineHeight: 1 }}>
            <br />
          </div>
          <div style={{ textAlign: "left" }}>
            <div
              className="MsoNormal"
              data-custom-class="body_text"
              style={{ lineHeight: "1.5" }}
            >
              <div
                className="block-container if"
                data-type="if"
                id="a2595956-7028-dbe5-123e-d3d3a93ed076"
              >
                <div data-type="conditional-block">
                  <div data-type="body">
                    <span
                      style={{
                        fontSize: "11.0pt",
                        lineHeight: "115%",
                        fontFamily: "Arial",
                        color: "#FFFEF9",
                      }}
                    >
                      <div
                        className="block-container if"
                        data-type="if"
                        id="a2595956-7028-dbe5-123e-d3d3a93ed076"
                      >
                        <div data-type="conditional-block">
                          <div data-type="body">
                            <span
                              style={{
                                color: "#FFFEF9",
                                fontSize: "14.6667px",
                              }}
                            >
                              The Services are intended for users who are at
                              least 13 years of age. All users who are minors in
                              the jurisdiction in which they reside (generally
                              under the age of 18) must have the permission of,
                              and be directly supervised by, their parent or
                              guardian to use the Services. If you are a minor,
                              you must have your parent or guardian read and
                              agree to these Legal Terms prior to you using the
                              Services.
                            </span>
                          </div>
                        </div>
                      </div>
                      <div data-type="body">
                        <span
                          style={{
                            color: "#FFFEF9",
                            fontSize: "14.6667px",
                          }}
                        ></span>
                      </div>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="MsoNormal" style={{ lineHeight: 1 }}>
              <br />
            </div>
            <div
              className="MsoNormal"
              data-custom-class="body_text"
              style={{ lineHeight: "1.5" }}
            >
              We recommend that you print a copy of these Legal Terms for your
              records.
            </div>
            <div className="MsoNormal" style={{ lineHeight: "1.5" }}>
              <br />
            </div>
            <div className="MsoNormal" style={{ lineHeight: "1.5" }}>
              <br />
            </div>
            <div
              className="MsoNormal"
              data-custom-class="heading_1"
              style={{ lineHeight: "1.5" }}
            >
              <strong>TABLE OF CONTENTS</strong>
            </div>
            <div className="MsoNormal" style={{ lineHeight: "1.5" }}>
              <br />
            </div>
            <div className="MsoNormal" style={{ lineHeight: "1.5" }}>
              <a href="#services">
                <span data-custom-class="link">
                  <span style={{ color: "rgb(0, 58, 250)", fontSize: 15 }}>
                    <span data-custom-class="body_text">1. OUR SERVICES</span>
                  </span>
                </span>
              </a>
            </div>
            <div className="MsoNormal" style={{ lineHeight: "1.5" }}>
              <a data-custom-class="link" href="#ip">
                <span style={{ color: "rgb(0, 58, 250)" }}>
                  <span data-custom-class="body_text">
                    2. INTELLECTUAL PROPERTY RIGHTS
                  </span>
                </span>
              </a>
            </div>
            <div className="MsoNormal" style={{ lineHeight: "1.5" }}>
              <a data-custom-class="link" href="#userreps" />
              <a data-custom-class="link" href="#userreps">
                <span style={{ color: "rbg(0, 58, 250)", fontSize: 15 }}>
                  <span data-custom-class="body_text">
                    3. USER REPRESENTATIONS
                  </span>
                </span>
              </a>
            </div>
            <div className="MsoNormal" style={{ lineHeight: "1.5" }}>
              <span style={{ fontSize: 15 }}>
                <span data-custom-class="body_text"></span>
              </span>
              <a data-custom-class="link" href="#userreg">
                <span style={{ color: "rgb(0, 58, 250)", fontSize: 15 }}>
                  <span data-custom-class="body_text">
                    4. USER REGISTRATION
                  </span>
                </span>
              </a>
              <span style={{ fontSize: 15 }}>
                <span data-custom-class="body_text">
                  <div className="statement-end-if-in-editor" />
                </span>
              </span>{" "}
              <a data-custom-class="link" href="#products" />
            </div>
            <div className="MsoNormal" style={{ lineHeight: "1.5" }}>
              <a data-custom-class="link" href="#products">
                <span style={{ color: "rgb(0, 58, 250)", fontSize: 15 }}>
                  <span data-custom-class="body_text">
                    5. PRODUCTS
                    <div className="statement-end-if-in-editor" />
                    <div className="statement-end-if-in-editor" />
                  </span>
                </span>
              </a>{" "}
              <a data-custom-class="link" href="#purchases" />
            </div>
            <div className="MsoNormal" style={{ lineHeight: "1.5" }}>
              <a data-custom-class="link" href="#purchases">
                <span style={{ color: "rgb(0, 58, 250)", fontSize: 15 }}>
                  <span data-custom-class="body_text">
                    6. PURCHASES AND PAYMENT
                    <div className="statement-end-if-in-editor" />
                  </span>
                </span>
              </a>
            </div>
            <div className="MsoNormal" style={{ lineHeight: "1.5" }}>
              <span style={{ fontSize: 15 }}>
                <span data-custom-class="body_text"></span>
              </span>
              <a data-custom-class="link" href="#refundPolicy">
                <span style={{ color: "rgb(0, 58, 250)", fontSize: 15 }}>
                  <span data-custom-class="body_text">7. REFUNDS POLICY</span>
                </span>
              </a>
              <span style={{ fontSize: 15 }}>
                <span data-custom-class="body_text">
                  <div className="statement-end-if-in-editor" />
                  <div className="statement-end-if-in-editor" />
                </span>
              </span>
            </div>
            <div className="MsoNormal" style={{ lineHeight: "1.5" }}>
              <span style={{ fontSize: 15 }}>
                <span data-custom-class="body_text"></span>
              </span>{" "}
              <a data-custom-class="link" href="#software" />{" "}
              <a data-custom-class="link" href="#software" />
            </div>
            <div className="MsoNormal" style={{ lineHeight: "1.5" }}>
              <a data-custom-class="link" href="#software">
                <span style={{ color: "rgb(0, 58, 250)", fontSize: 15 }}>
                  <span data-custom-class="body_text"></span>
                </span>
              </a>{" "}
              <a data-custom-class="link" href="#prohibited" />
            </div>
            <div className="MsoNormal" style={{ lineHeight: "1.5" }}>
              <a data-custom-class="link" href="#prohibited">
                <span style={{ color: "rgb(0, 58, 250)", fontSize: 15 }}>
                  <span data-custom-class="body_text">
                    8. PROHIBITED ACTIVITIES
                  </span>
                </span>
              </a>{" "}
              <a data-custom-class="link" href="#ugc" />
            </div>
            <div className="MsoNormal" style={{ lineHeight: "1.5" }}>
              <a data-custom-class="link" href="#ugc">
                <span style={{ color: "rgb(0, 58, 250)", fontSize: 15 }}>
                  <span data-custom-class="body_text">
                    9. USER GENERATED CONTRIBUTIONS
                  </span>
                </span>
              </a>{" "}
              <a data-custom-class="link" href="#license" />
            </div>
            <div className="MsoNormal" style={{ lineHeight: "1.5" }}>
              <a data-custom-class="link" href="#license">
                <span style={{ color: "rgb(0, 58, 250)", fontSize: 15 }}>
                  <span data-custom-class="body_text">
                    10. CONTRIBUTION LICENCE
                    <div className="else-block" />
                  </span>
                </span>
              </a>{" "}
              <a data-custom-class="link" href="#reviews" />
            </div>
            <div className="MsoNormal" style={{ lineHeight: "1.5" }}>
              <a data-custom-class="link" href="#reviews">
                <span style={{ color: "rgb(0, 58, 250)", fontSize: 15 }}>
                  <span data-custom-class="body_text">
                    11. GUIDELINES FOR REVIEWS
                    <div className="statement-end-if-in-editor" />
                  </span>
                </span>
              </a>{" "}
              <a data-custom-class="link" href="#mobile" />
            </div>
            <div className="MsoNormal" style={{ lineHeight: "1.5" }}>
              <a data-custom-class="link" href="#mobile">
                <span style={{ color: "rgb(0, 58, 250)", fontSize: 15 }}>
                  <span data-custom-class="body_text"></span>
                </span>
              </a>{" "}
              <a data-custom-class="link" href="#socialmedia" />
            </div>
            <div className="MsoNormal" style={{ lineHeight: "1.5" }}>
              <a data-custom-class="link" href="#socialmedia">
                <span style={{ color: "rgb(0, 58, 250)", fontSize: 15 }}>
                  <span data-custom-class="body_text">
                    12. SOCIAL MEDIA
                    <div className="statement-end-if-in-editor" />
                  </span>
                </span>
              </a>{" "}
              <a data-custom-class="link" href="#thirdparty" />
            </div>
            <div className="MsoNormal" style={{ lineHeight: "1.5" }}>
              <a data-custom-class="link" href="#thirdparty">
                <span style={{ color: "rgb(0, 58, 250)", fontSize: 15 }}>
                  <span data-custom-class="body_text">
                    13. THIRD-PARTY WEBSITES AND CONTENT
                    <div className="statement-end-if-in-editor" />
                  </span>
                </span>
              </a>{" "}
              <a data-custom-class="link" href="#advertisers" />
            </div>
            <div className="MsoNormal" style={{ lineHeight: "1.5" }}>
              <a data-custom-class="link" href="#advertisers">
                <span style={{ color: "rgb(0, 58, 250)", fontSize: 15 }}>
                  <span data-custom-class="body_text"></span>
                </span>
              </a>{" "}
              <a data-custom-class="link" href="#sitemanage" />
            </div>
            <div className="MsoNormal" style={{ lineHeight: "1.5" }}>
              <a data-custom-class="link" href="#sitemanage">
                <span style={{ color: "rgb(0, 58, 250)", fontSize: 15 }}>
                  <span data-custom-class="body_text">
                    14. SERVICES MANAGEMENT
                  </span>
                </span>
              </a>{" "}
              <a data-custom-class="link" href="#ppyes" />
            </div>
            <div className="MsoNormal" style={{ lineHeight: "1.5" }}>
              <a data-custom-class="link" href="#ppyes">
                <span style={{ color: "rgb(0, 58, 250)", fontSize: 15 }}>
                  <span data-custom-class="body_text">
                    15. PRIVACY POLICY
                    <div className="statement-end-if-in-editor" />
                  </span>
                </span>
              </a>{" "}
              <a data-custom-class="link" href="#ppno" />
            </div>
            <div className="MsoNormal" style={{ lineHeight: "1.5" }}>
              <a data-custom-class="link" href="#ppno">
                <span style={{ color: "rgb(0, 58, 250)", fontSize: 15 }}>
                  <span data-custom-class="body_text"></span>
                </span>
              </a>{" "}
              <a data-custom-class="link" href="#dmca" />
            </div>
            <div className="MsoNormal" style={{ lineHeight: "1.5" }}>
              <a data-custom-class="link" href="#dmca">
                <span style={{ color: "rgb(0, 58, 250)", fontSize: 15 }}>
                  <span data-custom-class="body_text"></span>
                </span>
              </a>
            </div>
            <div className="MsoNormal" style={{ lineHeight: "1.5" }}>
              <span style={{ fontSize: 15 }}>
                <span data-custom-class="body_text"></span>
              </span>
              <a data-custom-class="link" href="#copyrightno">
                <span style={{ color: "rgb(0, 58, 250)", fontSize: 15 }}>
                  <span data-custom-class="body_text">
                    16. COPYRIGHT INFRINGEMENTS
                  </span>
                </span>
              </a>
              <span style={{ fontSize: 15 }}>
                <span data-custom-class="body_text">
                  <div className="statement-end-if-in-editor" />
                  <div className="statement-end-if-in-editor" />
                </span>
              </span>{" "}
              <a data-custom-class="link" href="#terms" />
            </div>
            <div className="MsoNormal" style={{ lineHeight: "1.5" }}>
              <a data-custom-class="link" href="#terms">
                <span style={{ color: "rgb(0, 58, 250)", fontSize: 15 }}>
                  <span data-custom-class="body_text">
                    17. TERM AND TERMINATION
                  </span>
                </span>
              </a>{" "}
              <a data-custom-class="link" href="#modifications" />
            </div>
            <div className="MsoNormal" style={{ lineHeight: "1.5" }}>
              <a data-custom-class="link" href="#modifications">
                <span style={{ color: "rgb(0, 58, 250)", fontSize: 15 }}>
                  <span data-custom-class="body_text">
                    18. MODIFICATIONS AND INTERRUPTIONS
                  </span>
                </span>
              </a>{" "}
              <a data-custom-class="link" href="#law" />
            </div>
            <div className="MsoNormal" style={{ lineHeight: "1.5" }}>
              <a data-custom-class="link" href="#law">
                <span style={{ color: "rgb(0, 58, 250)", fontSize: 15 }}>
                  <span data-custom-class="body_text">19. GOVERNING LAW</span>
                </span>
              </a>{" "}
              <a data-custom-class="link" href="#disputes" />
            </div>
            <div className="MsoNormal" style={{ lineHeight: "1.5" }}>
              <a data-custom-class="link" href="#disputes">
                <span style={{ color: "rgb(0, 58, 250)", fontSize: 15 }}>
                  <span data-custom-class="body_text">
                    20. DISPUTE RESOLUTION
                  </span>
                </span>
              </a>{" "}
              <a data-custom-class="link" href="#corrections" />
            </div>
            <div className="MsoNormal" style={{ lineHeight: "1.5" }}>
              <a data-custom-class="link" href="#corrections">
                <span style={{ color: "rgb(0, 58, 250)", fontSize: 15 }}>
                  <span data-custom-class="body_text">21. CORRECTIONS</span>
                </span>
              </a>{" "}
              <a data-custom-class="link" href="#disclaimer" />
            </div>
            <div className="MsoNormal" style={{ lineHeight: "1.5" }}>
              <a data-custom-class="link" href="#disclaimer">
                <span style={{ color: "rgb(0, 58, 250)", fontSize: 15 }}>
                  <span data-custom-class="body_text">22. DISCLAIMER</span>
                </span>
              </a>{" "}
              <a data-custom-class="link" href="#liability" />
            </div>
            <div className="MsoNormal" style={{ lineHeight: "1.5" }}>
              <a data-custom-class="link" href="#liability">
                <span style={{ color: "rgb(0, 58, 250)", fontSize: 15 }}>
                  <span data-custom-class="body_text">
                    23. LIMITATIONS OF LIABILITY
                  </span>
                </span>
              </a>{" "}
              <a data-custom-class="link" href="#indemnification" />
            </div>
            <div className="MsoNormal" style={{ lineHeight: "1.5" }}>
              <a data-custom-class="link" href="#indemnification">
                <span style={{ color: "rgb(0, 58, 250)", fontSize: 15 }}>
                  <span data-custom-class="body_text">24. INDEMNIFICATION</span>
                </span>
              </a>{" "}
              <a data-custom-class="link" href="#userdata" />
            </div>
            <div className="MsoNormal" style={{ lineHeight: "1.5" }}>
              <a data-custom-class="link" href="#userdata">
                <span style={{ color: "rgb(0, 58, 250)", fontSize: 15 }}>
                  <span data-custom-class="body_text">25. USER DATA</span>
                </span>
              </a>{" "}
              <a data-custom-class="link" href="#electronic" />
            </div>
            <div className="MsoNormal" style={{ lineHeight: "1.5" }}>
              <a data-custom-class="link" href="#electronic">
                <span style={{ color: "rgb(0, 58, 250)", fontSize: 15 }}>
                  <span data-custom-class="body_text">
                    26. ELECTRONIC COMMUNICATIONS, TRANSACTIONS, AND SIGNATURES
                  </span>
                </span>
              </a>{" "}
              <a data-custom-class="link" href="#california" />
            </div>
            <div className="MsoNormal" style={{ lineHeight: "1.5" }}>
              <a data-custom-class="link" href="#california">
                <span style={{ color: "rgb(0, 58, 250)", fontSize: 15 }}>
                  <span data-custom-class="body_text"></span>
                </span>
              </a>{" "}
              <a data-custom-class="link" href="#misc" />
            </div>
            <div className="MsoNormal" style={{ lineHeight: "1.5" }}>
              <a data-custom-class="link" href="#misc">
                <span style={{ color: "rgb(0, 58, 250)", fontSize: 15 }}>
                  <span data-custom-class="body_text">27. MISCELLANEOUS</span>
                </span>
              </a>{" "}
              <a data-custom-class="link" href="#contact" />
            </div>
            <div className="MsoNormal" style={{ lineHeight: "1.5" }}></div>
            <div className="MsoNormal" style={{ lineHeight: "1.5" }}></div>
            <div className="MsoNormal" style={{ lineHeight: "1.5" }}></div>
            <div className="MsoNormal" style={{ lineHeight: "1.5" }}></div>
            <div className="MsoNormal" style={{ lineHeight: "1.5" }}></div>
            <div className="MsoNormal" style={{ lineHeight: "1.5" }}></div>
            <div className="MsoNormal" style={{ lineHeight: "1.5" }}></div>
            <div className="MsoNormal" style={{ lineHeight: "1.5" }}></div>
            <div className="MsoNormal" style={{ lineHeight: "1.5" }}></div>
            <div className="MsoNormal" style={{ lineHeight: "1.5" }}></div>
            <div className="MsoNormal" style={{ lineHeight: "1.5" }}>
              <a data-custom-class="link" href="#contact">
                <span style={{ color: "rgb(0, 58, 250)", fontSize: 15 }}>
                  <span data-custom-class="body_text">28. CONTACT US</span>
                </span>
              </a>
            </div>
          </div>
          <div style={{ textAlign: "left" }}>
            <div
              className="MsoNormal"
              data-custom-class="heading_1"
              style={{ lineHeight: "1.5" }}
            >
              <a />
            </div>
            <div className="MsoNormal" style={{ lineHeight: "1.5" }}>
              <br />
            </div>
            <div className="MsoNormal" style={{ lineHeight: "1.5" }}>
              <br />
            </div>
            <div
              className="MsoNormal"
              data-custom-class="heading_1"
              id="services"
              style={{ lineHeight: "1.5" }}
            >
              <strong>
                <span style={{ fontSize: 19 }}>1. OUR SERVICES</span>
              </strong>
            </div>
            <div className="MsoNormal" style={{ lineHeight: "1.5" }}>
              <br />
            </div>
            <div
              className="MsoNormal"
              data-custom-class="body_text"
              style={{ lineHeight: "1.5" }}
            >
              <span style={{ fontSize: 15 }}>
                The information provided when using the Services is not intended
                for distribution to or use by any person or entity in any
                jurisdiction or country where such distribution or use would be
                contrary to law or regulation or which would subject us to any
                registration requirement within such jurisdiction or country.
                Accordingly, those persons who choose to access the Services
                from other locations do so on their own initiative and are
                solely responsible for compliance with local laws, if and to the
                extent local laws are applicable.
              </span>
            </div>
            <div className="MsoNormal" style={{ lineHeight: "1.5" }}>
              <br />
            </div>
          </div>
          <div
            data-custom-class="heading_1"
            style={{ textAlign: "left", lineHeight: "1.5" }}
          >
            <strong>
              <span id="ip" style={{ fontSize: 19 }}>
                2. INTELLECTUAL PROPERTY RIGHTS
              </span>
            </strong>
          </div>
          <div style={{ lineHeight: "1.5" }}>
            <br />
          </div>
          <div style={{ textAlign: "left" }}>
            <div
              className="MsoNormal"
              data-custom-class="heading_2"
              style={{ lineHeight: "1.5" }}
            >
              <strong>Our intellectual property</strong>
            </div>
            <div className="MsoNormal" style={{ lineHeight: "1.5" }}>
              <br />
            </div>
            <div
              className="MsoNormal"
              data-custom-class="body_text"
              style={{ lineHeight: "1.5" }}
            >
              <span
                style={{
                  fontSize: "11.0pt",
                  lineHeight: "115%",
                  fontFamily: "Arial",
                  color: "#FFFEF9",
                }}
              >
                We are the owner or the licensee of all intellectual property
                rights in our Services, including all source code, databases,
                functionality, software, website designs, audio, video, text,
                photographs, and graphics in the Services (collectively, the{" "}
                &apos;Content&apos;
                <div className="else-block" />
                ), as well as the trademarks, service marks, and logos contained
                therein (the &apos;Marks&apos;
                <div className="else-block" />
                ).
              </span>
            </div>
            <div className="MsoNormal" style={{ lineHeight: "1.5" }}>
              <br />
            </div>
            <div
              className="MsoNormal"
              data-custom-class="body_text"
              style={{ lineHeight: "1.5" }}
            >
              <span
                style={{
                  fontSize: "11.0pt",
                  lineHeight: "115%",
                  fontFamily: "Arial",
                  color: "#FFFEF9",
                }}
              >
                Our Content and Marks are protected by copyright and trademark
                laws (and various other intellectual property rights and unfair
                competition laws) and treaties in the United States and around
                the world.
              </span>
            </div>
            <div className="MsoNormal" style={{ lineHeight: "1.5" }}>
              <br />
            </div>
            <div
              className="MsoNormal"
              data-custom-class="body_text"
              style={{ lineHeight: "1.5" }}
            >
              <span
                style={{
                  fontSize: "11.0pt",
                  lineHeight: "115%",
                  fontFamily: "Arial",
                  color: "#FFFEF9",
                }}
              >
                The Content and Marks are provided in or through the Services{" "}
                &apos;AS IS&apos;
                <div className="else-block" /> for your personal, non-commercial
                use or internal business purpose
                <div className="statement-end-if-in-editor" /> only.
              </span>
            </div>
            <div className="MsoNormal" style={{ lineHeight: "1.5" }}>
              <br />
            </div>
            <div
              className="MsoNormal"
              data-custom-class="heading_2"
              style={{ lineHeight: "1.5" }}
            >
              <strong>Your use of our Services</strong>
            </div>
            <div className="MsoNormal" style={{ lineHeight: "1.5" }}>
              <br />
            </div>
            <div
              className="MsoNormal"
              data-custom-class="body_text"
              style={{ lineHeight: "1.5" }}
            >
              <span style={{ fontSize: 15 }}>
                Subject to your compliance with these Legal Terms, including the{" "}
                &apos;
                <div className="else-block" />
              </span>
              <a data-custom-class="link" href="#prohibited">
                <span style={{ color: "rgb(0, 58, 250)", fontSize: 15 }}>
                  PROHIBITED ACTIVITIES
                </span>
              </a>
              <span style={{ fontSize: 15 }}>
                &apos;
                <div className="else-block" /> section below, we grant you a
                non-exclusive, non-transferable, revocable licence
                <div className="else-block" /> to:
              </span>
            </div>
            <ul>
              <li
                className="MsoNormal"
                data-custom-class="body_text"
                style={{ lineHeight: "1.5" }}
              >
                <span style={{ fontSize: 15 }}>access the Services; and</span>
              </li>
              <li
                className="MsoNormal"
                data-custom-class="body_text"
                style={{ lineHeight: "1.5" }}
              >
                <span style={{ fontSize: 15 }}>
                  download or print a copy of any portion of the Content to
                  which you have properly gained access.
                </span>
              </li>
            </ul>
            <div
              className="MsoNormal"
              data-custom-class="body_text"
              style={{ lineHeight: "1.5" }}
            >
              <span
                style={{
                  fontSize: "11.0pt",
                  lineHeight: "115%",
                  fontFamily: "Arial",
                  color: "#FFFEF9",
                }}
              >
                solely for your personal, non-commercial use or internal
                business purpose
                <div className="statement-end-if-in-editor" />.
              </span>
            </div>
            <div className="MsoNormal" style={{ lineHeight: "1.5" }}>
              <br />
            </div>
            <div
              className="MsoNormal"
              data-custom-class="body_text"
              style={{ lineHeight: "1.5" }}
            >
              <span
                style={{
                  fontSize: "11.0pt",
                  lineHeight: "115%",
                  fontFamily: "Arial",
                  color: "#FFFEF9",
                }}
              >
                Except as set out in this section or elsewhere in our Legal
                Terms, no part of the Services and no Content or Marks may be
                copied, reproduced, aggregated, republished, uploaded, posted,
                publicly displayed, encoded, translated, transmitted,
                distributed, sold, licensed, or otherwise exploited for any
                commercial purpose whatsoever, without our express prior written
                permission.
              </span>
            </div>
            <div className="MsoNormal" style={{ lineHeight: "1.5" }}>
              <br />
            </div>
            <div
              className="MsoNormal"
              data-custom-class="body_text"
              style={{ lineHeight: "1.5" }}
            >
              <span
                style={{
                  fontSize: "11.0pt",
                  lineHeight: "115%",
                  fontFamily: "Arial",
                  color: "#FFFEF9",
                }}
              >
                If you wish to make any use of the Services, Content, or Marks
                other than as set out in this section or elsewhere in our Legal
                Terms, please address your request to:{" "}
                <div className="question">support@cinemachines.com</div>. If we
                ever grant you the permission to post, reproduce, or publicly
                display any part of our Services or Content, you must identify
                us as the owners or licensors of the Services, Content, or Marks
                and ensure that any copyright or proprietary notice appears or
                is visible on posting, reproducing, or displaying our Content.
              </span>
            </div>
          </div>
          <div style={{ lineHeight: "1.5" }}>
            <br />
          </div>
          <div style={{ textAlign: "left" }}>
            <div
              className="MsoNormal"
              data-custom-class="body_text"
              style={{ lineHeight: "1.5" }}
            >
              <span
                style={{
                  fontSize: "11.0pt",
                  lineHeight: "115%",
                  fontFamily: "Arial",
                  color: "#FFFEF9",
                }}
              >
                We reserve all rights not expressly granted to you in and to the
                Services, Content, and Marks.
              </span>
            </div>
            <div className="MsoNormal" style={{ lineHeight: "1.5" }}>
              <br />
            </div>
            <div
              className="MsoNormal"
              data-custom-class="body_text"
              style={{ lineHeight: "1.5" }}
            >
              <span
                style={{
                  fontSize: "11.0pt",
                  lineHeight: "115%",
                  fontFamily: "Arial",
                  color: "#FFFEF9",
                }}
              >
                Any breach of these Intellectual Property Rights will constitute
                a material breach of our Legal Terms and your right to use our
                Services will terminate immediately.
              </span>
            </div>
            <div className="MsoNormal" style={{ lineHeight: "1.5" }}>
              <br />
            </div>
            <div
              className="MsoNormal"
              data-custom-class="heading_2"
              style={{ lineHeight: "1.5" }}
            >
              <span
                style={{
                  fontSize: "11.0pt",
                  lineHeight: "115%",
                  fontFamily: "Arial",
                  color: "#FFFEF9",
                }}
              >
                <strong>Your submissions and contributions</strong>
                <div className="statement-end-if-in-editor">
                  <strong />
                </div>
              </span>
            </div>
            <div className="MsoNormal" style={{ lineHeight: "1.5" }}>
              <br />
            </div>
            <div
              className="MsoNormal"
              data-custom-class="body_text"
              style={{ lineHeight: "1.5" }}
            >
              <span style={{ fontSize: 15 }}>
                Please review this section and the &apos;
                <div className="else-block" />
                <a data-custom-class="link" href="#prohibited">
                  <span style={{ color: "rgb(0, 58, 250)" }}>
                    PROHIBITED ACTIVITIES
                  </span>
                </a>
                &apos;
                <div className="else-block" /> section carefully prior to using
                our Services to understand the (a) rights you give us and (b)
                obligations you have when you post or upload any content through
                the Services.
              </span>
            </div>
            <div className="MsoNormal" style={{ lineHeight: "1.5" }}>
              <br />
            </div>
            <div
              className="MsoNormal"
              data-custom-class="body_text"
              style={{ lineHeight: "1.5" }}
            >
              <span style={{ fontSize: 15 }}>
                <strong>Submissions:</strong> By directly sending us any
                question, comment, suggestion, idea, feedback, or other
                information about the Services ( &apos;Submissions&apos;
                <div className="else-block" />
                ), you agree to assign to us all intellectual property rights in
                such Submission. You agree that we shall own this Submission and
                be entitled to its unrestricted use and dissemination for any
                lawful purpose, commercial or otherwise, without acknowledgment
                or compensation to you.
              </span>
            </div>
            <div className="MsoNormal" style={{ lineHeight: "1.5" }}>
              <br />
            </div>
            <div
              className="MsoNormal"
              data-custom-class="body_text"
              style={{ lineHeight: "1.5" }}
            >
              <span style={{ fontSize: 15 }}>
                <strong>Contributions:</strong> The Services may invite you to
                chat, contribute to, or participate in blogs, message boards,
                online forums, and other functionality during which you may
                create, submit, post, display, transmit, publish, distribute, or
                broadcast content and materials to us or through the Services,
                including but not limited to text, writings, video, audio,
                photographs, music, graphics, comments, reviews, rating
                suggestions, personal information, or other material (
                &apos;Contributions&apos;
                <div className="else-block" />
                ). Any Submission that is publicly posted shall also be treated
                as a Contribution.
              </span>
            </div>
            <div className="MsoNormal" style={{ lineHeight: "1.5" }}>
              <br />
            </div>
            <div
              className="MsoNormal"
              data-custom-class="body_text"
              style={{ lineHeight: "1.5" }}
            >
              <span style={{ fontSize: 15 }}>
                You understand that Contributions may be viewable by other users
                of the Services and possibly through third-party websites
                <div className="statement-end-if-in-editor" />.
              </span>
            </div>
            <div className="MsoNormal" style={{ lineHeight: "1.5" }}>
              <br />
            </div>
            <div
              className="MsoNormal"
              data-custom-class="body_text"
              style={{ lineHeight: "1.5" }}
            >
              <span style={{ fontSize: 15 }}>
                <strong>
                  When you post Contributions, you grant us a licence
                  <div className="else-block" /> (including use of your name,
                  trademarks, and logos):&nbsp;
                </strong>
                By posting any Contributions, you grant us an unrestricted,
                unlimited, irrevocable, perpetual, non-exclusive, transferable,
                royalty-free, fully-paid, worldwide right, and licence
                <div className="else-block" /> to: use, copy, reproduce,
                distribute, sell, resell, publish, broadcast, retitle, store,
                publicly perform, publicly display, reformat, translate, excerpt
                (in whole or in part), and exploit your Contributions
                (including, without limitation, your image, name, and voice) for
                any purpose, commercial, advertising, or otherwise, to prepare
                derivative works of, or incorporate into other works, your
                Contributions, and to sublicence the licences
                <div className="else-block" /> granted in this section. Our use
                and distribution may occur in any media formats and through any
                media channels.
              </span>
            </div>
            <div className="MsoNormal" style={{ lineHeight: "1.5" }}>
              <br />
            </div>
            <div
              className="MsoNormal"
              data-custom-class="body_text"
              style={{ lineHeight: "1.5" }}
            >
              <span style={{ fontSize: 15 }}>
                This licence
                <div className="else-block" /> includes our use of your name,
                company name, and franchise name, as applicable, and any of the
                trademarks, service marks, trade names, logos, and personal and
                commercial images you provide.
                <div className="statement-end-if-in-editor" />
              </span>
            </div>
            <div className="MsoNormal" style={{ lineHeight: "1.5" }}>
              <br />
            </div>
            <div
              className="MsoNormal"
              data-custom-class="body_text"
              style={{ lineHeight: "1.5" }}
            >
              <span style={{ fontSize: 15 }}>
                <strong>
                  You are responsible for what you post or upload:
                </strong>{" "}
                By sending us Submissions and/or posting Contributions
                <div className="statement-end-if-in-editor" /> through any part
                of the Services or making Contributions accessible through the
                Services by linking your account through the Services to any of
                your social networking accounts,
                <div className="statement-end-if-in-editor" /> you:
              </span>
            </div>
            <ul>
              <li
                className="MsoNormal"
                data-custom-class="body_text"
                style={{ lineHeight: "1.5" }}
              >
                <span style={{ fontSize: 15 }}>
                  confirm that you have read and agree with our &apos;
                  <div className="else-block" />
                </span>
                <a data-custom-class="link" href="#prohibited">
                  <span style={{ color: "rgb(0, 58, 250)", fontSize: 15 }}>
                    PROHIBITED ACTIVITIES
                  </span>
                </a>
                <span style={{ fontSize: 15 }}>
                  &apos;
                  <div className="else-block" /> and will not post, send,
                  publish, upload, or transmit through the Services any
                  Submission nor post any Contribution
                  <div className="statement-end-if-in-editor" /> that is
                  illegal, harassing, hateful, harmful, defamatory, obscene,
                  bullying, abusive, discriminatory, threatening to any person
                  or group, sexually explicit, false, inaccurate, deceitful, or
                  misleading;
                </span>
              </li>
              <li
                className="MsoNormal"
                data-custom-class="body_text"
                style={{ lineHeight: "1.5" }}
              >
                <span style={{ fontSize: 15 }}>
                  to the extent permissible by applicable law, waive any and all
                  moral rights to any such Submission and/or Contribution
                  <div className="statement-end-if-in-editor" />;
                </span>
              </li>
              <li
                className="MsoNormal"
                data-custom-class="body_text"
                style={{ lineHeight: "1.5" }}
              >
                <span style={{ fontSize: 15 }}>
                  warrant that any such Submission and/or Contributions
                  <div className="statement-end-if-in-editor" /> are original to
                  you or that you have the necessary rights and licences
                  <div className="else-block" /> to submit such Submissions
                  and/or Contributions
                  <div className="statement-end-if-in-editor" /> and that you
                  have full authority to grant us the above-mentioned rights in
                  relation to your Submissions and/or Contributions
                  <div className="statement-end-if-in-editor" />; and
                </span>
              </li>
              <li
                className="MsoNormal"
                data-custom-class="body_text"
                style={{ lineHeight: "1.5" }}
              >
                <span style={{ fontSize: 15 }}>
                  warrant and represent that your Submissions and/or
                  Contributions
                  <div className="statement-end-if-in-editor" /> do not
                  constitute confidential information.
                </span>
              </li>
            </ul>
            <div
              className="MsoNormal"
              data-custom-class="body_text"
              style={{ lineHeight: "1.5" }}
            >
              You are solely responsible for your Submissions and/or
              Contributions
              <div className="statement-end-if-in-editor" /> and you expressly
              agree to reimburse us for any and all losses that we may suffer
              because of your breach of (a) this section, (b) any third party’s
              intellectual property rights, or (c) applicable law.
            </div>
            <div className="MsoNormal" style={{ lineHeight: "1.5" }}>
              <br />
            </div>
            <div
              className="MsoNormal"
              data-custom-class="body_text"
              style={{ lineHeight: "1.5" }}
            >
              <strong>We may remove or edit your Content:</strong> Although we
              have no obligation to monitor any Contributions, we shall have the
              right to remove or edit any Contributions at any time without
              notice if in our reasonable opinion we consider such Contributions
              harmful or in breach of these Legal Terms. If we remove or edit
              any such Contributions, we may also suspend or disable your
              account and report you to the authorities.
              <div className="statement-end-if-in-editor" />
            </div>
            <div className="MsoNormal" style={{ lineHeight: "1.5" }}>
              <br />
            </div>
            <div
              className="MsoNormal"
              data-custom-class="heading_2"
              style={{ lineHeight: "1.5" }}
            >
              <strong>Copyright infringement</strong>
            </div>
            <div className="MsoNormal" style={{ lineHeight: "1.5" }}>
              <br />
            </div>
            <div
              className="MsoNormal"
              data-custom-class="body_text"
              style={{ lineHeight: "1.5" }}
            >
              We respect the intellectual property rights of others. If you
              believe that any material available on or through the Services
              infringes upon any copyright you own or control, please
              immediately refer to the &apos;
              <div className="else-block" />
              <a data-custom-class="link" href="#dmca">
                <span style={{ color: "rgb(0, 58, 250)" }}></span>
              </a>
              <a data-custom-class="link" href="#copyrightno">
                <span style={{ color: "rgb(0, 58, 250)" }}>
                  COPYRIGHT INFRINGEMENTS
                  <div className="statement-end-if-in-editor" />
                </span>
              </a>
              <div className="statement-end-if-in-editor" />
              &apos;
              <div className="else-block" /> section below.
              <div className="statement-end-if-in-editor" />
            </div>
            <div className="MsoNormal" style={{ lineHeight: "1.5" }}>
              <br />
            </div>
          </div>
          <div style={{ textAlign: "left" }}>
            <div
              className="MsoNormal"
              data-custom-class="heading_1"
              id="userreps"
              style={{ lineHeight: "1.5" }}
            >
              <a />
              <strong>
                <span
                  style={{
                    lineHeight: "115%",
                    fontFamily: "Arial",
                    fontSize: 19,
                  }}
                >
                  <strong>
                    <span
                      style={{
                        lineHeight: "115%",
                        fontFamily: "Arial",
                        fontSize: 19,
                      }}
                    >
                      <strong>
                        <span
                          style={{
                            lineHeight: "115%",
                            fontFamily: "Arial",
                            fontSize: 19,
                          }}
                        >
                          <strong>
                            <span
                              style={{
                                lineHeight: "115%",
                                fontFamily: "Arial",
                                fontSize: 19,
                              }}
                            >
                              3.
                            </span>
                          </strong>
                        </span>
                        &nbsp;
                      </strong>
                    </span>
                  </strong>
                  USER REPRESENTATIONS
                </span>
              </strong>
            </div>
          </div>
          <div style={{ lineHeight: "1.5" }}>
            <br />
          </div>
          <div style={{ textAlign: "left" }}>
            <div
              className="MsoNormal"
              data-custom-class="body_text"
              style={{ lineHeight: "1.5" }}
            >
              <span
                style={{
                  fontSize: "11.0pt",
                  lineHeight: "115%",
                  fontFamily: "Arial",
                  color: "#FFFEF9",
                }}
              >
                By using the Services, you represent and warrant that:
              </span>
              <div
                className="block-container if"
                data-type="if"
                id="d2d82ca8-275f-3f86-8149-8a5ef8054af6"
              >
                <div data-type="conditional-block">
                  <div
                    className="block-component"
                    data-record-question-key="user_account_option"
                    data-type="statement"
                  />{" "}
                  <div data-type="body">
                    <span style={{ color: "#FFFEF9", fontSize: "11pt" }}>
                      (
                    </span>
                    <span
                      style={{
                        color: "#FFFEF9",
                        fontSize: "14.6667px",
                      }}
                    >
                      1
                    </span>
                    <span style={{ color: "#FFFEF9", fontSize: "11pt" }}>
                      ) all registration information you submit will be true,
                      accurate, current, and complete; (
                    </span>
                    <span
                      style={{
                        color: "#FFFEF9",
                        fontSize: "14.6667px",
                      }}
                    >
                      2
                    </span>
                    <span style={{ color: "#FFFEF9", fontSize: "11pt" }}>
                      ) you will maintain the accuracy of such information and
                      promptly update such registration information as
                      necessary;
                    </span>
                  </div>
                </div>
                <div className="statement-end-if-in-editor" data-type="close" />
                &nbsp;
              </div>
              <span style={{ color: "#FFFEF9", fontSize: "11pt" }}>(</span>
              <span style={{ color: "#FFFEF9", fontSize: "14.6667px" }}>3</span>
              <span style={{ color: "#FFFEF9", fontSize: "11pt" }}>
                ) you have the legal capacity and you agree to comply with these
                Legal Terms;
              </span>
              <div
                className="block-container if"
                data-type="if"
                id="8d4c883b-bc2c-f0b4-da3e-6d0ee51aca13"
              >
                <div data-type="conditional-block">
                  <div
                    className="block-component"
                    data-record-question-key="user_u13_option"
                    data-type="statement"
                  />{" "}
                  <div data-type="body">
                    <span style={{ color: "#FFFEF9", fontSize: "11pt" }}>
                      (
                    </span>
                    <span
                      style={{
                        color: "#FFFEF9",
                        fontSize: "14.6667px",
                      }}
                    >
                      4
                    </span>
                    <span style={{ color: "#FFFEF9", fontSize: "11pt" }}>
                      ) you are not under the age of 13;
                    </span>
                  </div>
                </div>
                <div className="statement-end-if-in-editor" data-type="close" />
                &nbsp;
              </div>
              <span style={{ color: "#FFFEF9", fontSize: "11pt" }}>(</span>
              <span style={{ color: "#FFFEF9", fontSize: "14.6667px" }}>5</span>
              <span style={{ color: "#FFFEF9", fontSize: "11pt" }}>
                ) you are not a minor in the jurisdiction in which you reside
                <div
                  className="block-container if"
                  data-type="if"
                  id="76948fab-ec9e-266a-bb91-948929c050c9"
                >
                  <div data-type="conditional-block">
                    <div
                      className="block-component"
                      data-record-question-key="user_o18_option"
                      data-type="statement"
                    />
                    <div data-type="body">
                      , or if a minor, you have received parental permission to
                      use the Services
                    </div>
                  </div>
                  <div
                    className="statement-end-if-in-editor"
                    data-type="close"
                  />
                </div>
                ; (
              </span>
              <span style={{ color: "#FFFEF9", fontSize: "14.6667px" }}>6</span>
              <span style={{ color: "#FFFEF9", fontSize: "11pt" }}>
                ) you will not access the Services through automated or
                non-human means, whether through a bot, script or otherwise; (
              </span>
              <span style={{ color: "#FFFEF9", fontSize: "14.6667px" }}>7</span>
              <span style={{ color: "#FFFEF9", fontSize: "11pt" }}>
                ) you will not use the Services for any illegal or unauthorised
                <div className="else-block" /> purpose; and (
              </span>
              <span style={{ color: "#FFFEF9", fontSize: "14.6667px" }}>8</span>
              <span style={{ color: "#FFFEF9", fontSize: "11pt" }}>
                ) your use of the Services will not violate any applicable law
                or regulation.
              </span>
              <span style={{ color: "#FFFEF9", fontSize: "14.6667px" }} />
            </div>
          </div>
          <div style={{ lineHeight: "1.5" }}>
            <br />
          </div>
          <div style={{ textAlign: "left" }}>
            <div
              className="MsoNormal"
              style={{ textAlign: "justify", lineHeight: "115%" }}
            >
              <div className="MsoNormal" style={{ lineHeight: "17.25px" }}>
                <div
                  className="MsoNormal"
                  data-custom-class="body_text"
                  style={{ lineHeight: "1.5", textAlign: "left" }}
                >
                  <span
                    style={{
                      fontSize: "11pt",
                      lineHeight: "16.8667px",
                      color: "#FFFEF9",
                    }}
                  >
                    If you provide any information that is untrue, inaccurate,
                    not current, or incomplete, we have the right to suspend or
                    terminate your account and refuse any and all current or
                    future use of the Services (or any portion thereof).
                  </span>
                </div>
                <div
                  className="MsoNormal"
                  style={{ lineHeight: "1.1", textAlign: "left" }}
                ></div>
                <div
                  className="MsoNormal"
                  style={{ lineHeight: "1.5", textAlign: "left" }}
                >
                  <br />
                </div>
              </div>
              <div className="MsoNormal" style={{ lineHeight: 1 }}>
                <div data-type="conditional-block">
                  <div data-type="body">
                    <div
                      className="MsoNormal"
                      data-custom-class="heading_1"
                      id="userreg"
                      style={{ lineHeight: "1.5", textAlign: "left" }}
                    >
                      <strong>
                        <span style={{ lineHeight: "24.5333px", fontSize: 19 }}>
                          <strong>
                            <span
                              style={{
                                lineHeight: "115%",
                                fontFamily: "Arial",
                                fontSize: 19,
                              }}
                            >
                              <strong>
                                <span
                                  style={{
                                    lineHeight: "115%",
                                    fontFamily: "Arial",
                                    fontSize: 19,
                                  }}
                                >
                                  <strong>
                                    <span
                                      style={{
                                        lineHeight: "115%",
                                        fontFamily: "Arial",
                                        fontSize: 19,
                                      }}
                                    >
                                      4.
                                    </span>
                                  </strong>
                                </span>
                                &nbsp;
                              </strong>
                            </span>
                          </strong>
                          USER REGISTRATION
                        </span>
                      </strong>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="MsoNormal"
                style={{ lineHeight: "1.5", textAlign: "left" }}
              >
                <br />
              </div>
              <div className="MsoNormal" style={{ lineHeight: 1 }}>
                <div data-type="conditional-block">
                  <div data-type="body">
                    <div
                      className="MsoNormal"
                      data-custom-class="body_text"
                      style={{ textAlign: "left", lineHeight: "1.5" }}
                    >
                      <span
                        style={{
                          fontSize: "11pt",
                          lineHeight: "16.8667px",
                          color: "#FFFEF9",
                        }}
                      >
                        You may be required to register to use the Services. You
                        agree to keep your password confidential and will be
                        responsible for all use of your account and password. We
                        reserve the right to remove, reclaim, or change a
                        username you select if we determine, in our sole
                        discretion, that such username is inappropriate,
                        obscene, or otherwise objectionable.
                        <div
                          className="statement-end-if-in-editor"
                          data-type="close"
                        />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="MsoNormal"
                style={{ lineHeight: "1.5", textAlign: "left" }}
              >
                <div className="block-component">
                  <span style={{ fontSize: 15 }} />
                </div>
                <span style={{ fontSize: 15 }}></span>
              </div>
              <div
                className="MsoNormal"
                style={{ lineHeight: "1.5", textAlign: "left" }}
              >
                <br />
              </div>
              <div
                className="MsoNormal"
                data-custom-class="heading_1"
                id="products"
                style={{ lineHeight: "1.5", textAlign: "left" }}
              >
                <span style={{ fontSize: 19 }}>
                  <strong>5. PRODUCTS</strong>
                </span>
              </div>
              <div
                className="MsoNormal"
                style={{ lineHeight: "1.5", textAlign: "left" }}
              >
                <br />
              </div>
              <div
                className="MsoNormal"
                data-custom-class="body_text"
                style={{ lineHeight: "1.5", textAlign: "left" }}
              >
                <div className="block-component">
                  <span style={{ fontSize: 15 }} />
                </div>
                All products are subject to availability . We reserve the right
                to discontinue any products at any time for any reason. Prices
                for all products are subject to change.
                <div className="statement-end-if-in-editor" />
                <div className="statement-end-if-in-editor" />
              </div>
              <div
                className="MsoNormal"
                style={{ lineHeight: "1.5", textAlign: "left" }}
              >
                <div className="block-component">
                  <span style={{ fontSize: 15 }} />
                </div>
              </div>
              <div
                className="MsoNormal"
                style={{ lineHeight: "1.5", textAlign: "left" }}
              >
                <br />
              </div>
            </div>
          </div>
          <div style={{ textAlign: "left" }}>
            <div
              className="MsoNormal"
              data-custom-class="heading_1"
              id="purchases"
              style={{ lineHeight: "1.5" }}
            >
              <a />
              <strong>
                <span
                  style={{
                    lineHeight: "115%",
                    fontFamily: "Arial",
                    fontSize: 19,
                  }}
                >
                  <strong>
                    <span
                      style={{
                        lineHeight: "115%",
                        fontFamily: "Arial",
                        fontSize: 19,
                      }}
                    >
                      <strong>
                        <span
                          style={{
                            lineHeight: "115%",
                            fontFamily: "Arial",
                            fontSize: 19,
                          }}
                        >
                          <strong>
                            <span
                              style={{
                                lineHeight: "115%",
                                fontFamily: "Arial",
                                fontSize: 19,
                              }}
                            >
                              6.
                            </span>
                          </strong>
                        </span>
                        &nbsp;
                      </strong>
                    </span>
                  </strong>
                  PURCHASES AND PAYMENT
                </span>
              </strong>
            </div>
          </div>
          <div style={{ lineHeight: "1.5" }}>
            <br />
          </div>
          <div style={{ textAlign: "left" }}>
            <div
              className="MsoNormal"
              data-custom-class="body_text"
              style={{ lineHeight: "1.5" }}
            >
              <span
                style={{
                  fontSize: "11.0pt",
                  lineHeight: "115%",
                  fontFamily: "Arial",
                  color: "#FFFEF9",
                }}
              >
                We accept the following forms of payment:
              </span>
            </div>
            <div
              className="MsoNormal"
              style={{ textAlign: "justify", lineHeight: "115%" }}
            >
              <div
                className="MsoNormal"
                style={{ textAlign: "left", lineHeight: 1 }}
              >
                <br />
              </div>
            </div>
            <div
              className="MsoNormal"
              data-custom-class="body_text"
              style={{ lineHeight: "1.5", marginLeft: 20 }}
            >
              <span
                style={{
                  fontSize: "11.0pt",
                  lineHeight: "115%",
                  fontFamily: "Arial",
                  color: "#FFFEF9",
                }}
              >
                <div className="forloop-component" />- Visa &nbsp;
              </span>
            </div>
            <div
              className="MsoNormal"
              data-custom-class="body_text"
              style={{ lineHeight: "1.5", marginLeft: 20 }}
            >
              <span
                style={{
                  fontSize: "11.0pt",
                  lineHeight: "115%",
                  fontFamily: "Arial",
                  color: "#FFFEF9",
                }}
              >
                <div className="forloop-component" />- Mastercard &nbsp;
              </span>
            </div>
            <div
              className="MsoNormal"
              data-custom-class="body_text"
              style={{ lineHeight: "1.5", marginLeft: 20 }}
            >
              <span
                style={{
                  fontSize: "11.0pt",
                  lineHeight: "115%",
                  fontFamily: "Arial",
                  color: "#FFFEF9",
                }}
              >
                <div className="forloop-component" />- Paytm &nbsp;
              </span>
            </div>
            <div
              className="MsoNormal"
              data-custom-class="body_text"
              style={{ lineHeight: "1.5", marginLeft: 20 }}
            >
              <span
                style={{
                  fontSize: "11.0pt",
                  lineHeight: "115%",
                  fontFamily: "Arial",
                  color: "#FFFEF9",
                }}
              >
                <div className="forloop-component" />- UPI &nbsp;
              </span>
            </div>
            <div
              className="MsoNormal"
              data-custom-class="body_text"
              style={{ lineHeight: "1.5", marginLeft: 20 }}
            >
              <span
                style={{
                  fontSize: "11.0pt",
                  lineHeight: "115%",
                  fontFamily: "Arial",
                  color: "#FFFEF9",
                }}
              >
                <div className="forloop-component" />
              </span>
            </div>
            <div className="MsoNormal" style={{ lineHeight: 1 }}>
              <span
                style={{
                  fontSize: "11.0pt",
                  lineHeight: "115%",
                  fontFamily: "Arial",
                  color: "#FFFEF9",
                }}
              >
                <br />
              </span>
            </div>
            <div
              className="MsoNormal"
              data-custom-class="body_text"
              style={{ lineHeight: "1.5" }}
            >
              <span
                style={{
                  fontSize: "11.0pt",
                  lineHeight: "115%",
                  fontFamily: "Arial",
                  color: "#FFFEF9",
                }}
              >
                You agree to provide current, complete, and accurate purchase
                and account information for all purchases made via the Services.
                You further agree to promptly update account and payment
                information, including email address, payment method, and
                payment card expiration date, so that we can complete your
                transactions and contact you as needed. Sales tax will be added
                to the price of purchases as deemed required by us. We may
                change prices at any time. All payments shall be&nbsp;
              </span>
              <span
                style={{
                  fontSize: 15,
                  lineHeight: "115%",
                  fontFamily: "Arial",
                  color: "#FFFEF9",
                }}
              >
                in <div className="question">INR,USD</div>.
              </span>
            </div>
          </div>
          <div style={{ lineHeight: "1.5" }}>
            <br />
          </div>
          <div style={{ textAlign: "left" }}>
            <div
              className="MsoNormal"
              data-custom-class="body_text"
              style={{ lineHeight: "1.5" }}
            >
              <span
                style={{
                  fontSize: "11.0pt",
                  lineHeight: "115%",
                  fontFamily: "Arial",
                  color: "#FFFEF9",
                }}
              >
                You agree to pay all charges at the prices then in effect for
                your purchases and any applicable shipping fees, and you{" "}
                authorise
                <div className="else-block" /> us to charge your chosen payment
                provider for any such amounts upon placing your order.{" "}
                <div
                  className="block-container if"
                  data-type="if"
                  id="9c0216a1-d094-fd73-a062-9615dc795ffc"
                >
                  <div data-type="conditional-block">
                    <div
                      className="block-component"
                      data-record-question-key="recurring_charge_option"
                      data-type="statement"
                    />
                  </div>
                  We reserve the right to correct any errors or mistakes in
                  pricing, even if we have already requested or received
                  payment.
                </div>
              </span>
            </div>
          </div>
          <div style={{ lineHeight: "1.5" }}>
            <br />
          </div>
          <div style={{ textAlign: "left" }}>
            <div
              className="MsoNormal"
              data-custom-class="body_text"
              style={{ lineHeight: "1.5" }}
            >
              <span
                style={{
                  fontSize: "11.0pt",
                  lineHeight: "115%",
                  fontFamily: "Arial",
                  color: "#FFFEF9",
                }}
              >
                We reserve the right to refuse any order placed through the
                Services. We may, in our sole discretion, limit or cancel
                quantities purchased per person, per household, or per order.
                These restrictions may include orders placed by or under the
                same customer account, the same payment method, and/or orders
                that use the same billing or shipping address. We reserve the
                right to limit or prohibit orders that, in our sole judgement
                <div className="else-block" />, appear to be placed by dealers,
                resellers, or distributors.
              </span>
              <span
                style={{
                  lineHeight: "115%",
                  fontFamily: "Arial",
                  color: "#FFFEF9",
                }}
              >
                <div
                  data-type="conditional-block"
                  style={{ color: "rgb(10, 54, 90)", textAlign: "left" }}
                >
                  <div
                    className="block-component"
                    data-record-question-key="return_option"
                    data-type="statement"
                    style={{ fontSize: 15 }}
                  />
                </div>
              </span>
            </div>
            <div className="MsoNormal" style={{ lineHeight: "1.5" }}>
              <div className="block-component">
                <span style={{ fontSize: 15 }} />
              </div>
              <span style={{ fontSize: 15 }}></span>
            </div>
            <div className="MsoNormal" style={{ lineHeight: "1.5" }}>
              <br />
            </div>
            <div
              className="MsoNormal"
              data-custom-class="heading_1"
              id="refundPolicy"
              style={{ lineHeight: "1.5" }}
            >
              <strong>
                <span style={{ fontSize: 19 }}>7. REFUNDS POLICY</span>
              </strong>
            </div>
            <div className="MsoNormal" style={{ lineHeight: "1.5" }}>
              <br />
            </div>
            <div
              className="MsoNormal"
              data-custom-class="body_text"
              style={{ lineHeight: "1.5" }}
            >
              <p>
                <strong>Refund Eligibility:</strong>
              </p>
              <p>We offer refunds solely in the following circumstance:</p>
              <ol>
                <li>
                  <strong>Dissimilarity with Previewed Media:</strong>
                  <ul>
                    <li>
                      Refunds will only be issued if the purchased digital asset
                      is significantly different from the previewed media
                      provided on our platform.
                    </li>
                    <li>
                      The user must provide clear evidence demonstrating the
                      substantial variance between the purchased media and the
                      previewed media.
                    </li>
                  </ul>
                </li>
              </ol>
              <p>
                <strong>Refund Process:</strong>
              </p>
              <ol>
                <li>
                  <p>
                    <strong>Request for Refund:</strong>
                  </p>
                  <ul>
                    <li>
                      To request a refund, users must contact our customer
                      support team at support@blinkadz.com within 24 hours from
                      the date of generation.
                    </li>
                    <li>
                      The refund request must include detailed information about
                      the perceived dissimilarity and attach supporting
                      evidence.
                    </li>
                  </ul>
                </li>
                <li>
                  <p>
                    <strong>Review Process:</strong>
                  </p>
                  <ul>
                    <li>
                      Our team will review the refund request and assess the
                      provided evidence to determine the validity of the claim.
                    </li>
                    <li>
                      We reserve the right to refuse a refund if the evidence is
                      insufficient or if the purchased digital asset is deemed
                      similar to the previewed media.
                    </li>
                  </ul>
                </li>
                <li>
                  <p>
                    <strong>Refund Approval:</strong>
                  </p>
                  <ul>
                    <li>
                      If the refund request is approved, we will initiate the
                      refund process within 5 to 7 days from the date of
                      approval.
                    </li>
                    <li>
                      Refunds will be processed through the original payment
                      method used for the purchase.
                    </li>
                  </ul>
                </li>
                <li>
                  <p>
                    <strong>Notification:</strong>
                  </p>
                  <ul>
                    <li>
                      Users will be notified via email regarding the approval or
                      rejection of their refund request.
                    </li>
                    <li>
                      In case of approval, the email will include information
                      about the refund process.
                    </li>
                  </ul>
                </li>
              </ol>
              <p>
                <strong>Refund Exclusions:</strong>
              </p>
              <ul>
                <li>
                  No refunds will be provided for any digital asset that is
                  found to be similar to the previewed media.
                </li>
                <li>
                  Refunds will not be issued for any digital asset if the refund
                  request is raised after the 24 hours of media generation.
                </li>
              </ul>
            </div>
            <div className="MsoNormal" style={{ lineHeight: "1.5" }}>
              <div className="block-component">
                <span style={{ fontSize: 15 }} />
              </div>
            </div>
            <div className="MsoNormal" style={{ lineHeight: "1.5" }}></div>
            <div
              className="MsoNormal"
              style={{ textAlign: "justify", lineHeight: "1.5" }}
            >
              <span
                style={{
                  lineHeight: "115%",
                  fontFamily: "Arial",
                  color: "#FFFEF9",
                }}
              >
                <div
                  data-type="conditional-block"
                  style={{ color: "rgb(10, 54, 90)", textAlign: "left" }}
                >
                  <div data-type="body">
                    <div
                      className="MsoNormal"
                      style={{ fontSize: 15, lineHeight: "1.5" }}
                    >
                      <br />
                    </div>
                  </div>
                </div>
              </span>
              <div
                className="MsoNormal"
                data-custom-class="heading_1"
                id="prohibited"
                style={{ textAlign: "left", lineHeight: "1.5" }}
              >
                <strong>
                  <span style={{ lineHeight: "24.5333px", fontSize: 19 }}>
                    <strong>
                      <span
                        style={{
                          lineHeight: "115%",
                          fontFamily: "Arial",
                          fontSize: 19,
                        }}
                      >
                        <strong>
                          <span
                            style={{
                              lineHeight: "115%",
                              fontFamily: "Arial",
                              fontSize: 19,
                            }}
                          >
                            <strong>
                              <span
                                style={{
                                  lineHeight: "115%",
                                  fontFamily: "Arial",
                                  fontSize: 19,
                                }}
                              >
                                8.
                              </span>
                            </strong>
                          </span>
                        </strong>
                      </span>
                      &nbsp;
                    </strong>
                    PROHIBITED ACTIVITIES
                  </span>
                </strong>
              </div>
            </div>
            <div className="MsoNormal" style={{ lineHeight: "1.5" }}>
              <br />
            </div>
            <div
              className="MsoNormal"
              style={{ textAlign: "justify", lineHeight: 1 }}
            >
              <div
                className="MsoNormal"
                data-custom-class="body_text"
                style={{ lineHeight: "1.5", textAlign: "left" }}
              >
                <span
                  style={{
                    fontSize: "11pt",
                    lineHeight: "16.8667px",
                    color: "#FFFEF9",
                  }}
                >
                  You may not access or use the Services for any purpose other
                  than that for which we make the Services available. The
                  Services may not be used in connection with any commercial{" "}
                  endeavours
                  <div className="else-block" /> except those that are
                  specifically endorsed or approved by us.
                </span>
              </div>
            </div>
            <div className="MsoNormal" style={{ lineHeight: "1.5" }}>
              <br />
            </div>
            <div
              className="MsoNormal"
              style={{ textAlign: "justify", lineHeight: 1 }}
            >
              <div className="MsoNormal" style={{ lineHeight: "17.25px" }}>
                <div className="MsoNormal" style={{ lineHeight: "1.1" }}>
                  <div className="MsoNormal" style={{ lineHeight: "17.25px" }}>
                    <div
                      className="MsoNormal"
                      data-custom-class="body_text"
                      style={{ lineHeight: "1.5", textAlign: "left" }}
                    >
                      <span
                        style={{
                          fontSize: "11pt",
                          lineHeight: "16.8667px",
                          color: "#FFFEF9",
                        }}
                      >
                        As a user of the Services, you agree not to:
                      </span>
                    </div>
                  </div>
                  <ul>
                    <li
                      className="MsoNormal"
                      data-custom-class="body_text"
                      style={{ lineHeight: "1.5", textAlign: "left" }}
                    >
                      <span
                        style={{
                          fontSize: "11pt",
                          lineHeight: "16.8667px",
                          color: "#FFFEF9",
                        }}
                      >
                        <span
                          style={{
                            fontFamily: "sans-serif",
                            fontSize: 15,
                            fontStyle: "normal",
                            fontVariantLigatures: "normal",
                            fontVariantCaps: "normal",
                            fontWeight: 400,
                            letterSpacing: "normal",
                            orphans: 2,
                            textAlign: "justify",
                            textIndent: "-29.4px",
                            textTransform: "none",
                            whiteSpace: "normal",
                            widows: 2,
                            wordSpacing: 0,
                            WebkitTextStrokeWidth: 0,
                            color: "#FFFEF9",
                          }}
                        >
                          Systematically retrieve data or other content from the
                          Services to create or compile, directly or indirectly,
                          a collection, compilation, database, or directory
                          without written permission from us.
                        </span>
                      </span>
                    </li>
                    <li
                      className="MsoNormal"
                      data-custom-class="body_text"
                      style={{ lineHeight: "1.5", textAlign: "left" }}
                    >
                      <span style={{ fontSize: 15 }}>
                        <span
                          style={{
                            lineHeight: "16.8667px",
                            color: "#FFFEF9",
                          }}
                        >
                          <span
                            style={{
                              fontFamily: "sans-serif",
                              fontStyle: "normal",
                              fontVariantLigatures: "normal",
                              fontVariantCaps: "normal",
                              fontWeight: 400,
                              letterSpacing: "normal",
                              orphans: 2,
                              textAlign: "justify",
                              textIndent: "-29.4px",
                              textTransform: "none",
                              whiteSpace: "normal",
                              widows: 2,
                              wordSpacing: 0,
                              WebkitTextStrokeWidth: 0,

                              textDecorationStyle: "initial",
                              textDecorationColor: "initial",
                              color: "#FFFEF9",
                            }}
                          >
                            <span
                              style={{
                                lineHeight: "16.8667px",
                                color: "#FFFEF9",
                              }}
                            >
                              <span
                                style={{
                                  fontFamily: "sans-serif",
                                  fontStyle: "normal",
                                  fontVariantLigatures: "normal",
                                  fontVariantCaps: "normal",
                                  fontWeight: 400,
                                  letterSpacing: "normal",
                                  orphans: 2,
                                  textAlign: "justify",
                                  textIndent: "-29.4px",
                                  textTransform: "none",
                                  whiteSpace: "normal",
                                  widows: 2,
                                  wordSpacing: 0,
                                  WebkitTextStrokeWidth: 0,

                                  textDecorationStyle: "initial",
                                  textDecorationColor: "initial",
                                  color: "#FFFEF9",
                                }}
                              >
                                Trick, defraud, or mislead us and other users,
                                especially in any attempt to learn sensitive
                                account information such as user passwords.
                              </span>
                            </span>
                          </span>
                        </span>
                      </span>
                    </li>
                    <li
                      className="MsoNormal"
                      data-custom-class="body_text"
                      style={{ lineHeight: "1.5", textAlign: "left" }}
                    >
                      <span style={{ fontSize: 15 }}>
                        <span
                          style={{
                            lineHeight: "16.8667px",
                            color: "#FFFEF9",
                          }}
                        >
                          <span
                            style={{
                              fontFamily: "sans-serif",
                              fontStyle: "normal",
                              fontVariantLigatures: "normal",
                              fontVariantCaps: "normal",
                              fontWeight: 400,
                              letterSpacing: "normal",
                              orphans: 2,
                              textAlign: "justify",
                              textIndent: "-29.4px",
                              textTransform: "none",
                              whiteSpace: "normal",
                              widows: 2,
                              wordSpacing: 0,
                              WebkitTextStrokeWidth: 0,

                              textDecorationStyle: "initial",
                              textDecorationColor: "initial",
                              color: "#FFFEF9",
                            }}
                          >
                            <span
                              style={{
                                lineHeight: "16.8667px",
                                color: "#FFFEF9",
                              }}
                            >
                              <span
                                style={{
                                  fontFamily: "sans-serif",
                                  fontStyle: "normal",
                                  fontVariantLigatures: "normal",
                                  fontVariantCaps: "normal",
                                  fontWeight: 400,
                                  letterSpacing: "normal",
                                  orphans: 2,
                                  textAlign: "justify",
                                  textIndent: "-29.4px",
                                  textTransform: "none",
                                  whiteSpace: "normal",
                                  widows: 2,
                                  wordSpacing: 0,
                                  WebkitTextStrokeWidth: 0,

                                  textDecorationStyle: "initial",
                                  textDecorationColor: "initial",
                                  color: "#FFFEF9",
                                }}
                              >
                                Circumvent, disable, or otherwise interfere with
                                security-related features of the Services,
                                including features that prevent or restrict the
                                use or copying of any Content or enforce
                                limitations on the use of the Services and/or
                                the Content contained therein.
                              </span>
                            </span>
                          </span>
                        </span>
                      </span>
                    </li>
                    <li
                      className="MsoNormal"
                      data-custom-class="body_text"
                      style={{ lineHeight: "1.5", textAlign: "left" }}
                    >
                      <span style={{ fontSize: 15 }}>
                        <span
                          style={{
                            lineHeight: "16.8667px",
                            color: "#FFFEF9",
                          }}
                        >
                          <span
                            style={{
                              fontFamily: "sans-serif",
                              fontStyle: "normal",
                              fontVariantLigatures: "normal",
                              fontVariantCaps: "normal",
                              fontWeight: 400,
                              letterSpacing: "normal",
                              orphans: 2,
                              textAlign: "justify",
                              textIndent: "-29.4px",
                              textTransform: "none",
                              whiteSpace: "normal",
                              widows: 2,
                              wordSpacing: 0,
                              WebkitTextStrokeWidth: 0,

                              textDecorationStyle: "initial",
                              textDecorationColor: "initial",
                              color: "#FFFEF9",
                            }}
                          >
                            <span
                              style={{
                                lineHeight: "16.8667px",
                                color: "#FFFEF9",
                              }}
                            >
                              <span
                                style={{
                                  fontFamily: "sans-serif",
                                  fontStyle: "normal",
                                  fontVariantLigatures: "normal",
                                  fontVariantCaps: "normal",
                                  fontWeight: 400,
                                  letterSpacing: "normal",
                                  orphans: 2,
                                  textAlign: "justify",
                                  textIndent: "-29.4px",
                                  textTransform: "none",
                                  whiteSpace: "normal",
                                  widows: 2,
                                  wordSpacing: 0,
                                  WebkitTextStrokeWidth: 0,

                                  textDecorationStyle: "initial",
                                  textDecorationColor: "initial",
                                  color: "#FFFEF9",
                                }}
                              >
                                Disparage, tarnish, or otherwise harm, in our
                                opinion, us and/or the Services.
                              </span>
                            </span>
                          </span>
                        </span>
                      </span>
                    </li>
                    <li
                      className="MsoNormal"
                      data-custom-class="body_text"
                      style={{ lineHeight: "1.5", textAlign: "left" }}
                    >
                      <span style={{ fontSize: 15 }}>
                        <span
                          style={{
                            lineHeight: "16.8667px",
                            color: "#FFFEF9",
                          }}
                        >
                          <span
                            style={{
                              fontFamily: "sans-serif",
                              fontStyle: "normal",
                              fontVariantLigatures: "normal",
                              fontVariantCaps: "normal",
                              fontWeight: 400,
                              letterSpacing: "normal",
                              orphans: 2,
                              textAlign: "justify",
                              textIndent: "-29.4px",
                              textTransform: "none",
                              whiteSpace: "normal",
                              widows: 2,
                              wordSpacing: 0,
                              WebkitTextStrokeWidth: 0,

                              textDecorationStyle: "initial",
                              textDecorationColor: "initial",
                              color: "#FFFEF9",
                            }}
                          >
                            <span
                              style={{
                                lineHeight: "16.8667px",
                                color: "#FFFEF9",
                              }}
                            >
                              <span
                                style={{
                                  fontFamily: "sans-serif",
                                  fontStyle: "normal",
                                  fontVariantLigatures: "normal",
                                  fontVariantCaps: "normal",
                                  fontWeight: 400,
                                  letterSpacing: "normal",
                                  orphans: 2,
                                  textAlign: "justify",
                                  textIndent: "-29.4px",
                                  textTransform: "none",
                                  whiteSpace: "normal",
                                  widows: 2,
                                  wordSpacing: 0,
                                  WebkitTextStrokeWidth: 0,

                                  textDecorationStyle: "initial",
                                  textDecorationColor: "initial",
                                  color: "#FFFEF9",
                                }}
                              >
                                Use any information obtained from the Services
                                in order to harass, abuse, or harm another
                                person.
                              </span>
                            </span>
                          </span>
                        </span>
                      </span>
                    </li>
                    <li
                      className="MsoNormal"
                      data-custom-class="body_text"
                      style={{ lineHeight: "1.5", textAlign: "left" }}
                    >
                      <span style={{ fontSize: 15 }}>
                        <span
                          style={{
                            lineHeight: "16.8667px",
                            color: "#FFFEF9",
                          }}
                        >
                          <span
                            style={{
                              fontFamily: "sans-serif",
                              fontStyle: "normal",
                              fontVariantLigatures: "normal",
                              fontVariantCaps: "normal",
                              fontWeight: 400,
                              letterSpacing: "normal",
                              orphans: 2,
                              textAlign: "justify",
                              textIndent: "-29.4px",
                              textTransform: "none",
                              whiteSpace: "normal",
                              widows: 2,
                              wordSpacing: 0,
                              WebkitTextStrokeWidth: 0,

                              textDecorationStyle: "initial",
                              textDecorationColor: "initial",
                              color: "#FFFEF9",
                            }}
                          >
                            <span
                              style={{
                                lineHeight: "16.8667px",
                                color: "#FFFEF9",
                              }}
                            >
                              <span
                                style={{
                                  fontFamily: "sans-serif",
                                  fontStyle: "normal",
                                  fontVariantLigatures: "normal",
                                  fontVariantCaps: "normal",
                                  fontWeight: 400,
                                  letterSpacing: "normal",
                                  orphans: 2,
                                  textAlign: "justify",
                                  textIndent: "-29.4px",
                                  textTransform: "none",
                                  whiteSpace: "normal",
                                  widows: 2,
                                  wordSpacing: 0,
                                  WebkitTextStrokeWidth: 0,

                                  textDecorationStyle: "initial",
                                  textDecorationColor: "initial",
                                  color: "#FFFEF9",
                                }}
                              >
                                Make improper use of our support services or
                                submit false reports of abuse or misconduct.
                              </span>
                            </span>
                          </span>
                        </span>
                      </span>
                    </li>
                    <li
                      className="MsoNormal"
                      data-custom-class="body_text"
                      style={{ lineHeight: "1.5", textAlign: "left" }}
                    >
                      <span style={{ fontSize: 15 }}>
                        <span
                          style={{
                            lineHeight: "16.8667px",
                            color: "#FFFEF9",
                          }}
                        >
                          <span
                            style={{
                              fontFamily: "sans-serif",
                              fontStyle: "normal",
                              fontVariantLigatures: "normal",
                              fontVariantCaps: "normal",
                              fontWeight: 400,
                              letterSpacing: "normal",
                              orphans: 2,
                              textAlign: "justify",
                              textIndent: "-29.4px",
                              textTransform: "none",
                              whiteSpace: "normal",
                              widows: 2,
                              wordSpacing: 0,
                              WebkitTextStrokeWidth: 0,

                              textDecorationStyle: "initial",
                              textDecorationColor: "initial",
                              color: "#FFFEF9",
                            }}
                          >
                            <span
                              style={{
                                lineHeight: "16.8667px",
                                color: "#FFFEF9",
                              }}
                            >
                              <span
                                style={{
                                  fontFamily: "sans-serif",
                                  fontStyle: "normal",
                                  fontVariantLigatures: "normal",
                                  fontVariantCaps: "normal",
                                  fontWeight: 400,
                                  letterSpacing: "normal",
                                  orphans: 2,
                                  textAlign: "justify",
                                  textIndent: "-29.4px",
                                  textTransform: "none",
                                  whiteSpace: "normal",
                                  widows: 2,
                                  wordSpacing: 0,
                                  WebkitTextStrokeWidth: 0,

                                  textDecorationStyle: "initial",
                                  textDecorationColor: "initial",
                                  color: "#FFFEF9",
                                }}
                              >
                                Use the Services in a manner inconsistent with
                                any applicable laws or regulations.
                              </span>
                            </span>
                          </span>
                        </span>
                      </span>
                    </li>
                    <li
                      className="MsoNormal"
                      data-custom-class="body_text"
                      style={{ lineHeight: "1.5", textAlign: "left" }}
                    >
                      <span style={{ fontSize: 15 }}>
                        <span
                          style={{
                            lineHeight: "16.8667px",
                            color: "#FFFEF9",
                          }}
                        >
                          <span
                            style={{
                              fontFamily: "sans-serif",
                              fontStyle: "normal",
                              fontVariantLigatures: "normal",
                              fontVariantCaps: "normal",
                              fontWeight: 400,
                              letterSpacing: "normal",
                              orphans: 2,
                              textAlign: "justify",
                              textIndent: "-29.4px",
                              textTransform: "none",
                              whiteSpace: "normal",
                              widows: 2,
                              wordSpacing: 0,
                              WebkitTextStrokeWidth: 0,

                              textDecorationStyle: "initial",
                              textDecorationColor: "initial",
                              color: "#FFFEF9",
                            }}
                          >
                            <span
                              style={{
                                lineHeight: "16.8667px",
                                color: "#FFFEF9",
                              }}
                            >
                              <span
                                style={{
                                  fontFamily: "sans-serif",
                                  fontStyle: "normal",
                                  fontVariantLigatures: "normal",
                                  fontVariantCaps: "normal",
                                  fontWeight: 400,
                                  letterSpacing: "normal",
                                  orphans: 2,
                                  textAlign: "justify",
                                  textIndent: "-29.4px",
                                  textTransform: "none",
                                  whiteSpace: "normal",
                                  widows: 2,
                                  wordSpacing: 0,
                                  WebkitTextStrokeWidth: 0,

                                  textDecorationStyle: "initial",
                                  textDecorationColor: "initial",
                                  color: "#FFFEF9",
                                }}
                              >
                                Engage in unauthorised
                                <div className="else-block" /> framing of or
                                linking to the Services.
                              </span>
                            </span>
                          </span>
                        </span>
                      </span>
                    </li>
                    <li
                      className="MsoNormal"
                      data-custom-class="body_text"
                      style={{ lineHeight: "1.5", textAlign: "left" }}
                    >
                      <span style={{ fontSize: 15 }}>
                        <span
                          style={{
                            lineHeight: "16.8667px",
                            color: "#FFFEF9",
                          }}
                        >
                          <span
                            style={{
                              fontFamily: "sans-serif",
                              fontStyle: "normal",
                              fontVariantLigatures: "normal",
                              fontVariantCaps: "normal",
                              fontWeight: 400,
                              letterSpacing: "normal",
                              orphans: 2,
                              textAlign: "justify",
                              textIndent: "-29.4px",
                              textTransform: "none",
                              whiteSpace: "normal",
                              widows: 2,
                              wordSpacing: 0,
                              WebkitTextStrokeWidth: 0,

                              textDecorationStyle: "initial",
                              textDecorationColor: "initial",
                              color: "#FFFEF9",
                            }}
                          >
                            <span
                              style={{
                                lineHeight: "16.8667px",
                                color: "#FFFEF9",
                              }}
                            >
                              <span
                                style={{
                                  fontFamily: "sans-serif",
                                  fontStyle: "normal",
                                  fontVariantLigatures: "normal",
                                  fontVariantCaps: "normal",
                                  fontWeight: 400,
                                  letterSpacing: "normal",
                                  orphans: 2,
                                  textAlign: "justify",
                                  textIndent: "-29.4px",
                                  textTransform: "none",
                                  whiteSpace: "normal",
                                  widows: 2,
                                  wordSpacing: 0,
                                  WebkitTextStrokeWidth: 0,

                                  textDecorationStyle: "initial",
                                  textDecorationColor: "initial",
                                  color: "#FFFEF9",
                                }}
                              >
                                Upload or transmit (or attempt to upload or to
                                transmit) viruses, Trojan horses, or other
                                material, including excessive use of capital
                                letters and spamming (continuous posting of
                                repetitive text), that interferes with any
                                party’s uninterrupted use and enjoyment of the
                                Services or modifies, impairs, disrupts, alters,
                                or interferes with the use, features, functions,
                                operation, or maintenance of the Services.
                              </span>
                            </span>
                          </span>
                        </span>
                      </span>
                    </li>
                    <li
                      className="MsoNormal"
                      data-custom-class="body_text"
                      style={{ lineHeight: "1.5", textAlign: "left" }}
                    >
                      <span style={{ fontSize: 15 }}>
                        <span
                          style={{
                            lineHeight: "16.8667px",
                            color: "#FFFEF9",
                          }}
                        >
                          <span
                            style={{
                              fontFamily: "sans-serif",
                              fontStyle: "normal",
                              fontVariantLigatures: "normal",
                              fontVariantCaps: "normal",
                              fontWeight: 400,
                              letterSpacing: "normal",
                              orphans: 2,
                              textAlign: "justify",
                              textIndent: "-29.4px",
                              textTransform: "none",
                              whiteSpace: "normal",
                              widows: 2,
                              wordSpacing: 0,
                              WebkitTextStrokeWidth: 0,

                              textDecorationStyle: "initial",
                              textDecorationColor: "initial",
                              color: "#FFFEF9",
                            }}
                          >
                            <span
                              style={{
                                lineHeight: "16.8667px",
                                color: "#FFFEF9",
                              }}
                            >
                              <span
                                style={{
                                  fontFamily: "sans-serif",
                                  fontStyle: "normal",
                                  fontVariantLigatures: "normal",
                                  fontVariantCaps: "normal",
                                  fontWeight: 400,
                                  letterSpacing: "normal",
                                  orphans: 2,
                                  textAlign: "justify",
                                  textIndent: "-29.4px",
                                  textTransform: "none",
                                  whiteSpace: "normal",
                                  widows: 2,
                                  wordSpacing: 0,
                                  WebkitTextStrokeWidth: 0,

                                  textDecorationStyle: "initial",
                                  textDecorationColor: "initial",
                                  color: "#FFFEF9",
                                }}
                              >
                                Engage in any automated use of the system, such
                                as using scripts to send comments or messages,
                                or using any data mining, robots, or similar
                                data gathering and extraction tools.
                              </span>
                            </span>
                          </span>
                        </span>
                      </span>
                    </li>
                    <li
                      className="MsoNormal"
                      data-custom-class="body_text"
                      style={{ lineHeight: "1.5", textAlign: "left" }}
                    >
                      <span style={{ fontSize: 15 }}>
                        <span
                          style={{
                            lineHeight: "16.8667px",
                            color: "#FFFEF9",
                          }}
                        >
                          <span
                            style={{
                              fontFamily: "sans-serif",
                              fontStyle: "normal",
                              fontVariantLigatures: "normal",
                              fontVariantCaps: "normal",
                              fontWeight: 400,
                              letterSpacing: "normal",
                              orphans: 2,
                              textAlign: "justify",
                              textIndent: "-29.4px",
                              textTransform: "none",
                              whiteSpace: "normal",
                              widows: 2,
                              wordSpacing: 0,
                              WebkitTextStrokeWidth: 0,

                              textDecorationStyle: "initial",
                              textDecorationColor: "initial",
                              color: "#FFFEF9",
                            }}
                          >
                            <span
                              style={{
                                lineHeight: "16.8667px",
                                color: "#FFFEF9",
                              }}
                            >
                              <span
                                style={{
                                  fontFamily: "sans-serif",
                                  fontStyle: "normal",
                                  fontVariantLigatures: "normal",
                                  fontVariantCaps: "normal",
                                  fontWeight: 400,
                                  letterSpacing: "normal",
                                  orphans: 2,
                                  textAlign: "justify",
                                  textIndent: "-29.4px",
                                  textTransform: "none",
                                  whiteSpace: "normal",
                                  widows: 2,
                                  wordSpacing: 0,
                                  WebkitTextStrokeWidth: 0,

                                  textDecorationStyle: "initial",
                                  textDecorationColor: "initial",
                                  color: "#FFFEF9",
                                }}
                              >
                                Delete the copyright or other proprietary rights
                                notice from any Content.
                              </span>
                            </span>
                          </span>
                        </span>
                      </span>
                    </li>
                    <li
                      className="MsoNormal"
                      data-custom-class="body_text"
                      style={{ lineHeight: "1.5", textAlign: "left" }}
                    >
                      <span style={{ fontSize: 15 }}>
                        <span
                          style={{
                            lineHeight: "16.8667px",
                            color: "#FFFEF9",
                          }}
                        >
                          <span
                            style={{
                              fontFamily: "sans-serif",
                              fontStyle: "normal",
                              fontVariantLigatures: "normal",
                              fontVariantCaps: "normal",
                              fontWeight: 400,
                              letterSpacing: "normal",
                              orphans: 2,
                              textAlign: "justify",
                              textIndent: "-29.4px",
                              textTransform: "none",
                              whiteSpace: "normal",
                              widows: 2,
                              wordSpacing: 0,
                              WebkitTextStrokeWidth: 0,

                              textDecorationStyle: "initial",
                              textDecorationColor: "initial",
                              color: "#FFFEF9",
                            }}
                          >
                            <span
                              style={{
                                lineHeight: "16.8667px",
                                color: "#FFFEF9",
                              }}
                            >
                              <span
                                style={{
                                  fontFamily: "sans-serif",
                                  fontStyle: "normal",
                                  fontVariantLigatures: "normal",
                                  fontVariantCaps: "normal",
                                  fontWeight: 400,
                                  letterSpacing: "normal",
                                  orphans: 2,
                                  textAlign: "justify",
                                  textIndent: "-29.4px",
                                  textTransform: "none",
                                  whiteSpace: "normal",
                                  widows: 2,
                                  wordSpacing: 0,
                                  WebkitTextStrokeWidth: 0,

                                  textDecorationStyle: "initial",
                                  textDecorationColor: "initial",
                                  color: "#FFFEF9",
                                }}
                              >
                                Attempt to impersonate another user or person or
                                use the username of another user.
                              </span>
                            </span>
                          </span>
                        </span>
                      </span>
                    </li>
                    <li
                      className="MsoNormal"
                      data-custom-class="body_text"
                      style={{ lineHeight: "1.5", textAlign: "left" }}
                    >
                      <span style={{ fontSize: 15 }}>
                        <span
                          style={{
                            lineHeight: "16.8667px",
                            color: "#FFFEF9",
                          }}
                        >
                          <span
                            style={{
                              fontFamily: "sans-serif",
                              fontStyle: "normal",
                              fontVariantLigatures: "normal",
                              fontVariantCaps: "normal",
                              fontWeight: 400,
                              letterSpacing: "normal",
                              orphans: 2,
                              textAlign: "justify",
                              textIndent: "-29.4px",
                              textTransform: "none",
                              whiteSpace: "normal",
                              widows: 2,
                              wordSpacing: 0,
                              WebkitTextStrokeWidth: 0,

                              textDecorationStyle: "initial",
                              textDecorationColor: "initial",
                              color: "#FFFEF9",
                            }}
                          >
                            <span
                              style={{
                                lineHeight: "16.8667px",
                                color: "#FFFEF9",
                              }}
                            >
                              <span
                                style={{
                                  fontFamily: "sans-serif",
                                  fontStyle: "normal",
                                  fontVariantLigatures: "normal",
                                  fontVariantCaps: "normal",
                                  fontWeight: 400,
                                  letterSpacing: "normal",
                                  orphans: 2,
                                  textAlign: "justify",
                                  textIndent: "-29.4px",
                                  textTransform: "none",
                                  whiteSpace: "normal",
                                  widows: 2,
                                  wordSpacing: 0,
                                  WebkitTextStrokeWidth: 0,

                                  textDecorationStyle: "initial",
                                  textDecorationColor: "initial",
                                  color: "#FFFEF9",
                                }}
                              >
                                Upload or transmit (or attempt to upload or to
                                transmit) any material that acts as a passive or
                                active information collection or transmission
                                mechanism, including without limitation, clear
                                graphics interchange formats ( &apos;gifs&apos;
                                <div className="else-block" />
                                ), 1×1 pixels, web bugs, cookies, or other
                                similar devices (sometimes referred to as{" "}
                                &apos;spyware&apos; or &apos;passive collection
                                mechanisms&apos; or &apos;pcms&apos;
                                <div className="else-block" />
                                ).
                              </span>
                            </span>
                          </span>
                        </span>
                      </span>
                    </li>
                    <li
                      className="MsoNormal"
                      data-custom-class="body_text"
                      style={{ lineHeight: "1.5", textAlign: "left" }}
                    >
                      <span style={{ fontSize: 15 }}>
                        <span
                          style={{
                            lineHeight: "16.8667px",
                            color: "#FFFEF9",
                          }}
                        >
                          <span
                            style={{
                              fontFamily: "sans-serif",
                              fontStyle: "normal",
                              fontVariantLigatures: "normal",
                              fontVariantCaps: "normal",
                              fontWeight: 400,
                              letterSpacing: "normal",
                              orphans: 2,
                              textAlign: "justify",
                              textIndent: "-29.4px",
                              textTransform: "none",
                              whiteSpace: "normal",
                              widows: 2,
                              wordSpacing: 0,
                              WebkitTextStrokeWidth: 0,

                              textDecorationStyle: "initial",
                              textDecorationColor: "initial",
                              color: "#FFFEF9",
                            }}
                          >
                            <span
                              style={{
                                lineHeight: "16.8667px",
                                color: "#FFFEF9",
                              }}
                            >
                              <span
                                style={{
                                  fontFamily: "sans-serif",
                                  fontStyle: "normal",
                                  fontVariantLigatures: "normal",
                                  fontVariantCaps: "normal",
                                  fontWeight: 400,
                                  letterSpacing: "normal",
                                  orphans: 2,
                                  textAlign: "justify",
                                  textIndent: "-29.4px",
                                  textTransform: "none",
                                  whiteSpace: "normal",
                                  widows: 2,
                                  wordSpacing: 0,
                                  WebkitTextStrokeWidth: 0,

                                  textDecorationStyle: "initial",
                                  textDecorationColor: "initial",
                                  color: "#FFFEF9",
                                }}
                              >
                                Interfere with, disrupt, or e an undue burden on
                                the Services or the networks or services
                                connected to the Services.
                              </span>
                            </span>
                          </span>
                        </span>
                      </span>
                    </li>
                    <li
                      className="MsoNormal"
                      data-custom-class="body_text"
                      style={{ lineHeight: "1.5", textAlign: "left" }}
                    >
                      <span style={{ fontSize: 15 }}>
                        <span
                          style={{
                            lineHeight: "16.8667px",
                            color: "#FFFEF9",
                          }}
                        >
                          <span
                            style={{
                              fontFamily: "sans-serif",
                              fontStyle: "normal",
                              fontVariantLigatures: "normal",
                              fontVariantCaps: "normal",
                              fontWeight: 400,
                              letterSpacing: "normal",
                              orphans: 2,
                              textAlign: "justify",
                              textIndent: "-29.4px",
                              textTransform: "none",
                              whiteSpace: "normal",
                              widows: 2,
                              wordSpacing: 0,
                              WebkitTextStrokeWidth: 0,

                              textDecorationStyle: "initial",
                              textDecorationColor: "initial",
                              color: "#FFFEF9",
                            }}
                          >
                            <span
                              style={{
                                lineHeight: "16.8667px",
                                color: "#FFFEF9",
                              }}
                            >
                              <span
                                style={{
                                  fontFamily: "sans-serif",
                                  fontStyle: "normal",
                                  fontVariantLigatures: "normal",
                                  fontVariantCaps: "normal",
                                  fontWeight: 400,
                                  letterSpacing: "normal",
                                  orphans: 2,
                                  textAlign: "justify",
                                  textIndent: "-29.4px",
                                  textTransform: "none",
                                  whiteSpace: "normal",
                                  widows: 2,
                                  wordSpacing: 0,
                                  WebkitTextStrokeWidth: 0,

                                  textDecorationStyle: "initial",
                                  textDecorationColor: "initial",
                                  color: "#FFFEF9",
                                }}
                              >
                                Harass, annoy, intimidate, or threaten any of
                                our employees or agents engaged in providing any
                                portion of the Services to you.
                              </span>
                            </span>
                          </span>
                        </span>
                      </span>
                    </li>
                    <li
                      className="MsoNormal"
                      data-custom-class="body_text"
                      style={{ lineHeight: "1.5", textAlign: "left" }}
                    >
                      <span style={{ fontSize: 15 }}>
                        <span
                          style={{
                            lineHeight: "16.8667px",
                            color: "#FFFEF9",
                          }}
                        >
                          <span
                            style={{
                              fontFamily: "sans-serif",
                              fontStyle: "normal",
                              fontVariantLigatures: "normal",
                              fontVariantCaps: "normal",
                              fontWeight: 400,
                              letterSpacing: "normal",
                              orphans: 2,
                              textAlign: "justify",
                              textIndent: "-29.4px",
                              textTransform: "none",
                              whiteSpace: "normal",
                              widows: 2,
                              wordSpacing: 0,
                              WebkitTextStrokeWidth: 0,

                              textDecorationStyle: "initial",
                              textDecorationColor: "initial",
                              color: "#FFFEF9",
                            }}
                          >
                            <span
                              style={{
                                lineHeight: "16.8667px",
                                color: "#FFFEF9",
                              }}
                            >
                              <span
                                style={{
                                  fontFamily: "sans-serif",
                                  fontStyle: "normal",
                                  fontVariantLigatures: "normal",
                                  fontVariantCaps: "normal",
                                  fontWeight: 400,
                                  letterSpacing: "normal",
                                  orphans: 2,
                                  textAlign: "justify",
                                  textIndent: "-29.4px",
                                  textTransform: "none",
                                  whiteSpace: "normal",
                                  widows: 2,
                                  wordSpacing: 0,
                                  WebkitTextStrokeWidth: 0,

                                  textDecorationStyle: "initial",
                                  textDecorationColor: "initial",
                                  color: "#FFFEF9",
                                }}
                              >
                                Attempt to bypass any measures of the Services
                                designed to prevent or restrict access to the
                                Services, or any portion of the Services.
                              </span>
                            </span>
                          </span>
                        </span>
                      </span>
                    </li>
                    <li
                      className="MsoNormal"
                      data-custom-class="body_text"
                      style={{ lineHeight: "1.5", textAlign: "left" }}
                    >
                      <span style={{ fontSize: 15 }}>
                        <span
                          style={{
                            lineHeight: "16.8667px",
                            color: "#FFFEF9",
                          }}
                        >
                          <span
                            style={{
                              fontFamily: "sans-serif",
                              fontStyle: "normal",
                              fontVariantLigatures: "normal",
                              fontVariantCaps: "normal",
                              fontWeight: 400,
                              letterSpacing: "normal",
                              orphans: 2,
                              textAlign: "justify",
                              textIndent: "-29.4px",
                              textTransform: "none",
                              whiteSpace: "normal",
                              widows: 2,
                              wordSpacing: 0,
                              WebkitTextStrokeWidth: 0,

                              textDecorationStyle: "initial",
                              textDecorationColor: "initial",
                              color: "#FFFEF9",
                            }}
                          >
                            <span
                              style={{
                                lineHeight: "16.8667px",
                                color: "#FFFEF9",
                              }}
                            >
                              <span
                                style={{
                                  fontFamily: "sans-serif",
                                  fontStyle: "normal",
                                  fontVariantLigatures: "normal",
                                  fontVariantCaps: "normal",
                                  fontWeight: 400,
                                  letterSpacing: "normal",
                                  orphans: 2,
                                  textAlign: "justify",
                                  textIndent: "-29.4px",
                                  textTransform: "none",
                                  whiteSpace: "normal",
                                  widows: 2,
                                  wordSpacing: 0,
                                  WebkitTextStrokeWidth: 0,

                                  textDecorationStyle: "initial",
                                  textDecorationColor: "initial",
                                  color: "#FFFEF9",
                                }}
                              >
                                Copy or adapt the Services&apos; software,
                                including but not limited to Flash, PHP, HTML,
                                JavaScript, or other code.
                              </span>
                            </span>
                          </span>
                        </span>
                      </span>
                    </li>
                    <li
                      className="MsoNormal"
                      data-custom-class="body_text"
                      style={{ lineHeight: "1.5", textAlign: "left" }}
                    >
                      <span style={{ fontSize: 15 }}>
                        <span
                          style={{
                            lineHeight: "16.8667px",
                            color: "#FFFEF9",
                          }}
                        >
                          <span
                            style={{
                              fontFamily: "sans-serif",
                              fontStyle: "normal",
                              fontVariantLigatures: "normal",
                              fontVariantCaps: "normal",
                              fontWeight: 400,
                              letterSpacing: "normal",
                              orphans: 2,
                              textAlign: "justify",
                              textIndent: "-29.4px",
                              textTransform: "none",
                              whiteSpace: "normal",
                              widows: 2,
                              wordSpacing: 0,
                              WebkitTextStrokeWidth: 0,

                              textDecorationStyle: "initial",
                              textDecorationColor: "initial",
                              color: "#FFFEF9",
                            }}
                          >
                            <span
                              style={{
                                lineHeight: "16.8667px",
                                color: "#FFFEF9",
                              }}
                            >
                              <span
                                style={{
                                  fontFamily: "sans-serif",
                                  fontStyle: "normal",
                                  fontVariantLigatures: "normal",
                                  fontVariantCaps: "normal",
                                  fontWeight: 400,
                                  letterSpacing: "normal",
                                  orphans: 2,
                                  textAlign: "justify",
                                  textIndent: "-29.4px",
                                  textTransform: "none",
                                  whiteSpace: "normal",
                                  widows: 2,
                                  wordSpacing: 0,
                                  WebkitTextStrokeWidth: 0,

                                  textDecorationStyle: "initial",
                                  textDecorationColor: "initial",
                                  color: "#FFFEF9",
                                }}
                              >
                                Except as permitted by applicable law, decipher,
                                decompile, disassemble, or reverse engineer any
                                of the software comprising or in any way making
                                up a part of the Services.
                              </span>
                            </span>
                          </span>
                        </span>
                      </span>
                    </li>
                    <li
                      className="MsoNormal"
                      data-custom-class="body_text"
                      style={{ lineHeight: "1.5", textAlign: "left" }}
                    >
                      <span style={{ fontSize: 15 }}>
                        <span
                          style={{
                            lineHeight: "16.8667px",
                            color: "#FFFEF9",
                          }}
                        >
                          <span
                            style={{
                              fontFamily: "sans-serif",
                              fontStyle: "normal",
                              fontVariantLigatures: "normal",
                              fontVariantCaps: "normal",
                              fontWeight: 400,
                              letterSpacing: "normal",
                              orphans: 2,
                              textAlign: "justify",
                              textIndent: "-29.4px",
                              textTransform: "none",
                              whiteSpace: "normal",
                              widows: 2,
                              wordSpacing: 0,
                              WebkitTextStrokeWidth: 0,

                              textDecorationStyle: "initial",
                              textDecorationColor: "initial",
                              color: "#FFFEF9",
                            }}
                          >
                            <span
                              style={{
                                lineHeight: "16.8667px",
                                color: "#FFFEF9",
                              }}
                            >
                              <span
                                style={{
                                  fontFamily: "sans-serif",
                                  fontStyle: "normal",
                                  fontVariantLigatures: "normal",
                                  fontVariantCaps: "normal",
                                  fontWeight: 400,
                                  letterSpacing: "normal",
                                  orphans: 2,
                                  textAlign: "justify",
                                  textIndent: "-29.4px",
                                  textTransform: "none",
                                  whiteSpace: "normal",
                                  widows: 2,
                                  wordSpacing: 0,
                                  WebkitTextStrokeWidth: 0,

                                  textDecorationStyle: "initial",
                                  textDecorationColor: "initial",
                                  color: "#FFFEF9",
                                }}
                              >
                                Except as may be the result of standard search
                                engine or Internet browser usage, use, launch,
                                develop, or distribute any automated system,
                                including without limitation, any spider, robot,
                                cheat utility, scraper, or offline reader that
                                accesses the Services, or use or launch any{" "}
                                unauthorised
                                <div className="else-block" /> script or other
                                software.
                              </span>
                            </span>
                          </span>
                        </span>
                      </span>
                    </li>
                    <li
                      className="MsoNormal"
                      data-custom-class="body_text"
                      style={{ lineHeight: "1.5", textAlign: "left" }}
                    >
                      <span style={{ fontSize: 15 }}>
                        <span
                          style={{
                            lineHeight: "16.8667px",
                            color: "#FFFEF9",
                          }}
                        >
                          <span
                            style={{
                              fontFamily: "sans-serif",
                              fontStyle: "normal",
                              fontVariantLigatures: "normal",
                              fontVariantCaps: "normal",
                              fontWeight: 400,
                              letterSpacing: "normal",
                              orphans: 2,
                              textAlign: "justify",
                              textIndent: "-29.4px",
                              textTransform: "none",
                              whiteSpace: "normal",
                              widows: 2,
                              wordSpacing: 0,
                              WebkitTextStrokeWidth: 0,

                              textDecorationStyle: "initial",
                              textDecorationColor: "initial",
                              color: "#FFFEF9",
                            }}
                          >
                            <span
                              style={{
                                lineHeight: "16.8667px",
                                color: "#FFFEF9",
                              }}
                            >
                              <span
                                style={{
                                  fontFamily: "sans-serif",
                                  fontStyle: "normal",
                                  fontVariantLigatures: "normal",
                                  fontVariantCaps: "normal",
                                  fontWeight: 400,
                                  letterSpacing: "normal",
                                  orphans: 2,
                                  textAlign: "justify",
                                  textIndent: "-29.4px",
                                  textTransform: "none",
                                  whiteSpace: "normal",
                                  widows: 2,
                                  wordSpacing: 0,
                                  WebkitTextStrokeWidth: 0,

                                  textDecorationStyle: "initial",
                                  textDecorationColor: "initial",
                                  color: "#FFFEF9",
                                }}
                              >
                                Use a buying agent or purchasing agent to make
                                purchases on the Services.
                              </span>
                            </span>
                          </span>
                        </span>
                      </span>
                    </li>
                    <li
                      className="MsoNormal"
                      data-custom-class="body_text"
                      style={{ lineHeight: "1.5", textAlign: "left" }}
                    >
                      <span style={{ fontSize: 15 }}>
                        <span
                          style={{
                            lineHeight: "16.8667px",
                            color: "#FFFEF9",
                          }}
                        >
                          <span
                            style={{
                              fontFamily: "sans-serif",
                              fontStyle: "normal",
                              fontVariantLigatures: "normal",
                              fontVariantCaps: "normal",
                              fontWeight: 400,
                              letterSpacing: "normal",
                              orphans: 2,
                              textAlign: "justify",
                              textIndent: "-29.4px",
                              textTransform: "none",
                              whiteSpace: "normal",
                              widows: 2,
                              wordSpacing: 0,
                              WebkitTextStrokeWidth: 0,

                              textDecorationStyle: "initial",
                              textDecorationColor: "initial",
                              color: "#FFFEF9",
                            }}
                          >
                            <span
                              style={{
                                lineHeight: "16.8667px",
                                color: "#FFFEF9",
                              }}
                            >
                              <span
                                style={{
                                  fontFamily: "sans-serif",
                                  fontStyle: "normal",
                                  fontVariantLigatures: "normal",
                                  fontVariantCaps: "normal",
                                  fontWeight: 400,
                                  letterSpacing: "normal",
                                  orphans: 2,
                                  textAlign: "justify",
                                  textIndent: "-29.4px",
                                  textTransform: "none",
                                  whiteSpace: "normal",
                                  widows: 2,
                                  wordSpacing: 0,
                                  WebkitTextStrokeWidth: 0,

                                  textDecorationStyle: "initial",
                                  textDecorationColor: "initial",
                                  color: "#FFFEF9",
                                }}
                              >
                                Make any unauthorised
                                <div className="else-block" /> use of the
                                Services, including collecting usernames and/or
                                email addresses of users by electronic or other
                                means for the purpose of sending unsolicited
                                email, or creating user accounts by automated
                                means or under false pretences
                                <div className="else-block" />.
                              </span>
                            </span>
                          </span>
                        </span>
                      </span>
                    </li>
                    <li
                      className="MsoNormal"
                      data-custom-class="body_text"
                      style={{ lineHeight: "1.5", textAlign: "left" }}
                    >
                      <span style={{ fontSize: 15 }}>
                        <span
                          style={{
                            lineHeight: "16.8667px",
                            color: "#FFFEF9",
                          }}
                        >
                          <span
                            style={{
                              fontFamily: "sans-serif",
                              fontStyle: "normal",
                              fontVariantLigatures: "normal",
                              fontVariantCaps: "normal",
                              fontWeight: 400,
                              letterSpacing: "normal",
                              orphans: 2,
                              textAlign: "justify",
                              textIndent: "-29.4px",
                              textTransform: "none",
                              whiteSpace: "normal",
                              widows: 2,
                              wordSpacing: 0,
                              WebkitTextStrokeWidth: 0,

                              textDecorationStyle: "initial",
                              textDecorationColor: "initial",
                              color: "#FFFEF9",
                            }}
                          >
                            <span
                              style={{
                                lineHeight: "16.8667px",
                                color: "#FFFEF9",
                              }}
                            >
                              <span
                                style={{
                                  fontFamily: "sans-serif",
                                  fontStyle: "normal",
                                  fontVariantLigatures: "normal",
                                  fontVariantCaps: "normal",
                                  fontWeight: 400,
                                  letterSpacing: "normal",
                                  orphans: 2,
                                  textAlign: "justify",
                                  textIndent: "-29.4px",
                                  textTransform: "none",
                                  whiteSpace: "normal",
                                  widows: 2,
                                  wordSpacing: 0,
                                  WebkitTextStrokeWidth: 0,

                                  textDecorationStyle: "initial",
                                  textDecorationColor: "initial",
                                  color: "#FFFEF9",
                                }}
                              >
                                Use the Services as part of any effort to
                                compete with us or otherwise use the Services
                                and/or the Content for any revenue-generating{" "}
                                endeavour
                                <div className="else-block" /> or commercial
                                enterprise.
                              </span>
                              <span
                                style={{
                                  fontSize: "11pt",
                                  lineHeight: "16.8667px",
                                  color: "#FFFEF9",
                                  fontFamily: "sans-serif",
                                  fontStyle: "normal",
                                  fontVariantLigatures: "normal",
                                  fontVariantCaps: "normal",
                                  fontWeight: 400,
                                  letterSpacing: "normal",
                                  orphans: 2,
                                  textAlign: "justify",
                                  textIndent: "-29.4px",
                                  textTransform: "none",
                                  whiteSpace: "normal",
                                  widows: 2,
                                  wordSpacing: 0,
                                  WebkitTextStrokeWidth: 0,

                                  textDecorationStyle: "initial",
                                  textDecorationColor: "initial",
                                }}
                              >
                                <div className="forloop-component" />
                              </span>
                            </span>
                          </span>
                        </span>
                      </span>
                    </li>
                    <li
                      className="MsoNormal"
                      data-custom-class="body_text"
                      style={{ lineHeight: "1.5", textAlign: "left" }}
                    >
                      <span
                        style={{
                          fontSize: "11pt",
                          lineHeight: "16.8667px",
                          color: "#FFFEF9",
                        }}
                      >
                        <div className="question">copy templates</div>
                        <div className="forloop-component" />
                      </span>
                    </li>
                  </ul>
                </div>
                <div
                  className="MsoNormal"
                  style={{ lineHeight: "1.5", textAlign: "left" }}
                >
                  <br />
                </div>
              </div>
              <div className="MsoNormal" style={{ lineHeight: "17.25px" }}>
                <div className="MsoNormal" style={{ lineHeight: 1 }}>
                  <div
                    className="block-container if"
                    data-type="if"
                    style={{ textAlign: "left" }}
                  >
                    <div data-type="conditional-block">
                      <div data-type="body">
                        <div
                          className="MsoNormal"
                          data-custom-class="heading_1"
                          id="ugc"
                          style={{ lineHeight: "1.5" }}
                        >
                          <strong>
                            <span
                              style={{ lineHeight: "24.5333px", fontSize: 19 }}
                            >
                              <strong>
                                <span
                                  style={{
                                    lineHeight: "24.5333px",
                                    fontSize: 19,
                                  }}
                                >
                                  <strong>
                                    <span
                                      style={{
                                        lineHeight: "115%",
                                        fontFamily: "Arial",
                                        fontSize: 19,
                                      }}
                                    >
                                      <strong>
                                        <span
                                          style={{
                                            lineHeight: "115%",
                                            fontFamily: "Arial",
                                            fontSize: 19,
                                          }}
                                        >
                                          9.
                                        </span>
                                      </strong>
                                    </span>
                                    &nbsp;
                                  </strong>
                                </span>
                              </strong>
                              USER GENERATED CONTRIBUTIONS
                            </span>
                          </strong>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="MsoNormal"
                  style={{ lineHeight: "1.5", textAlign: "left" }}
                >
                  <br />
                </div>
                <div className="MsoNormal" style={{ lineHeight: 1 }}>
                  <div
                    className="block-container if"
                    data-type="if"
                    style={{ textAlign: "left" }}
                  >
                    <div data-type="conditional-block">
                      <div data-type="body">
                        <div
                          className="MsoNormal"
                          data-custom-class="body_text"
                          style={{ lineHeight: "1.5" }}
                        >
                          <span
                            style={{
                              fontSize: "11pt",
                              lineHeight: "16.8667px",
                              color: "#FFFEF9",
                            }}
                          >
                            <div
                              className="block-container if"
                              data-type="if"
                              id="24327c5d-a34f-f7e7-88f1-65a2f788484f"
                              style={{ textAlign: "left" }}
                            >
                              <div data-type="conditional-block">
                                <div
                                  className="block-component"
                                  data-record-question-key="user_post_content_option"
                                  data-type="statement"
                                />
                              </div>
                            </div>
                            The Services may invite you to chat, contribute to,
                            or participate in blogs, message boards, online
                            forums, and other functionality, and may provide you
                            with the opportunity to create, submit, post,
                            display, transmit, perform, publish, distribute, or
                            broadcast content and materials to us or on the
                            Services, including but not limited to text,
                            writings, video, audio, photographs, graphics,
                            comments, suggestions, or personal information or
                            other material (collectively,{" "}
                            &apos;Contributions&apos;
                            <div className="else-block" />
                            ). Contributions may be viewable by other users of
                            the Services and through third-party websites. As
                            such, any Contributions you transmit may be treated
                            as non-confidential and non-proprietary. When you
                            create or make available any Contributions, you
                            thereby represent and warrant that:
                            <div className="else-block"></div>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <ul style={{ fontSize: "medium", textAlign: "left" }}>
                  <li
                    data-custom-class="body_text"
                    style={{ lineHeight: "1.5" }}
                  >
                    <span style={{ color: "#FFFEF9" }}>
                      <span style={{ fontSize: 14 }}>
                        <span data-custom-class="body_text">
                          The creation, distribution, transmission, public
                          display, or performance, and the accessing,
                          downloading, or copying of your Contributions do not
                          and will not infringe the proprietary rights,
                          including but not limited to the copyright, patent,
                          trademark, trade secret, or moral rights of any third
                          party.
                        </span>
                      </span>
                    </span>
                  </li>
                  <li
                    data-custom-class="body_text"
                    style={{ lineHeight: "1.5" }}
                  >
                    <span style={{ color: "#FFFEF9" }}>
                      <span style={{ fontSize: 14 }}>
                        <span data-custom-class="body_text">
                          You are the creator and owner of or have the necessary{" "}
                          licences
                          <div className="else-block" />, rights, consents,
                          releases, and permissions to use and to authorise
                          <div className="else-block" /> us, the Services, and
                          other users of the Services to use your Contributions
                          in any manner contemplated by the Services and these
                          Legal Terms.
                        </span>
                      </span>
                    </span>
                  </li>
                  <li
                    data-custom-class="body_text"
                    style={{ lineHeight: "1.5" }}
                  >
                    <span style={{ color: "#FFFEF9" }}>
                      <span style={{ fontSize: 14 }}>
                        <span data-custom-class="body_text">
                          You have the written consent, release, and/or
                          permission of each and every identifiable individual
                          person in your Contributions to use the name or
                          likeness of each and every such identifiable
                          individual person to enable inclusion and use of your
                          Contributions in any manner contemplated by the
                          Services and these Legal Terms.
                        </span>
                      </span>
                    </span>
                  </li>
                  <li
                    data-custom-class="body_text"
                    style={{ lineHeight: "1.5" }}
                  >
                    <span style={{ color: "#FFFEF9" }}>
                      <span style={{ fontSize: 14 }}>
                        <span data-custom-class="body_text">
                          Your Contributions are not false, inaccurate, or
                          misleading.
                        </span>
                      </span>
                    </span>
                  </li>
                  <li
                    data-custom-class="body_text"
                    style={{ lineHeight: "1.5" }}
                  >
                    <span style={{ color: "#FFFEF9" }}>
                      <span style={{ fontSize: 14 }}>
                        <span data-custom-class="body_text">
                          Your Contributions are not unsolicited or unauthorised
                          <div className="else-block" /> advertising,
                          promotional materials, pyramid schemes, chain letters,
                          spam, mass mailings, or other forms of solicitation.
                        </span>
                      </span>
                    </span>
                  </li>
                  <li
                    data-custom-class="body_text"
                    style={{ lineHeight: "1.5" }}
                  >
                    <span style={{ color: "#FFFEF9" }}>
                      <span style={{ fontSize: 14 }}>
                        <span data-custom-class="body_text">
                          Your Contributions are not obscene, lewd, lascivious,
                          filthy, violent, harassing, libellous
                          <div className="else-block" />, slanderous, or
                          otherwise objectionable (as determined by us).
                        </span>
                      </span>
                    </span>
                  </li>
                  <li
                    data-custom-class="body_text"
                    style={{ lineHeight: "1.5" }}
                  >
                    <span style={{ color: "#FFFEF9" }}>
                      <span style={{ fontSize: 14 }}>
                        <span data-custom-class="body_text">
                          Your Contributions do not ridicule, mock, disparage,
                          intimidate, or abuse anyone.
                        </span>
                      </span>
                    </span>
                  </li>
                  <li
                    data-custom-class="body_text"
                    style={{ lineHeight: "1.5" }}
                  >
                    <span style={{ color: "#FFFEF9" }}>
                      <span style={{ fontSize: 14 }}>
                        <span data-custom-class="body_text">
                          Your Contributions are not used to harass or threaten
                          (in the legal sense of those terms) any other person
                          and to promote violence against a specific person or
                          class of people.
                        </span>
                      </span>
                    </span>
                  </li>
                  <li
                    data-custom-class="body_text"
                    style={{ lineHeight: "1.5" }}
                  >
                    <span style={{ color: "#FFFEF9" }}>
                      <span style={{ fontSize: 14 }}>
                        <span data-custom-class="body_text">
                          Your Contributions do not violate any applicable law,
                          regulation, or rule.
                        </span>
                      </span>
                    </span>
                  </li>
                  <li
                    data-custom-class="body_text"
                    style={{ lineHeight: "1.5" }}
                  >
                    <span style={{ color: "#FFFEF9" }}>
                      <span style={{ fontSize: 14 }}>
                        <span data-custom-class="body_text">
                          Your Contributions do not violate the privacy or
                          publicity rights of any third party.
                        </span>
                      </span>
                    </span>
                  </li>
                  <li
                    data-custom-class="body_text"
                    style={{ lineHeight: "1.5" }}
                  >
                    <span style={{ color: "#FFFEF9" }}>
                      <span style={{ fontSize: 14 }}>
                        <span data-custom-class="body_text">
                          Your Contributions do not violate any applicable law
                          concerning child pornography, or otherwise intended to
                          protect the health or well-being of minors.
                        </span>
                      </span>
                    </span>
                  </li>
                  <li
                    data-custom-class="body_text"
                    style={{ lineHeight: "1.5" }}
                  >
                    <span style={{ color: "#FFFEF9" }}>
                      <span style={{ fontSize: 14 }}>
                        <span data-custom-class="body_text">
                          Your Contributions do not include any offensive
                          comments that are connected to race, national origin,
                          gender, sexual preference, or physical handicap.
                        </span>
                      </span>
                    </span>
                  </li>
                  <li
                    data-custom-class="body_text"
                    style={{ lineHeight: "1.5" }}
                  >
                    <span style={{ color: "#FFFEF9" }}>
                      <span style={{ fontSize: 14 }}>
                        <span data-custom-class="body_text">
                          Your Contributions do not otherwise violate, or link
                          to material that violates, any provision of these
                          Legal Terms, or any applicable law or regulation.
                        </span>
                      </span>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div
              className="MsoNormal"
              style={{ textAlign: "justify", lineHeight: "1.5" }}
            >
              <div
                className="block-container if"
                data-type="if"
                style={{ textAlign: "left" }}
              >
                <div data-type="conditional-block">
                  <div data-type="body">
                    <div
                      className="MsoNormal"
                      data-custom-class="body_text"
                      style={{ lineHeight: "1.5" }}
                    >
                      <span
                        style={{
                          fontSize: "11pt",
                          lineHeight: "16.8667px",
                          color: "#FFFEF9",
                        }}
                      >
                        Any use of the Services in violation of the foregoing
                        violates these Legal Terms and may result in, among
                        other things, termination or suspension of your rights
                        to use the Services.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="MsoNormal" style={{ lineHeight: "1.5" }}>
              <br />
            </div>
            <div
              className="MsoNormal"
              style={{ textAlign: "justify", lineHeight: 1 }}
            >
              <div
                className="block-container if"
                data-type="if"
                style={{ textAlign: "left" }}
              >
                <div data-type="conditional-block">
                  <div data-type="body">
                    <div
                      className="MsoNormal"
                      data-custom-class="heading_1"
                      id="license"
                      style={{ lineHeight: "1.5" }}
                    >
                      <strong>
                        <span style={{ lineHeight: "24.5333px", fontSize: 19 }}>
                          <strong>
                            <span
                              style={{ lineHeight: "24.5333px", fontSize: 19 }}
                            >
                              <strong>
                                <span
                                  style={{
                                    lineHeight: "115%",
                                    fontFamily: "Arial",
                                    fontSize: 19,
                                  }}
                                >
                                  <strong>
                                    <span
                                      style={{
                                        lineHeight: "115%",
                                        fontFamily: "Arial",
                                        fontSize: 19,
                                      }}
                                    >
                                      10.
                                    </span>
                                  </strong>
                                </span>
                                &nbsp;
                              </strong>
                            </span>
                          </strong>
                          CONTRIBUTION LICENCE
                          <div className="else-block" />
                        </span>
                      </strong>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="MsoNormal" style={{ lineHeight: "1.5" }}>
              <br />
            </div>
            <div className="MsoNormal" style={{ lineHeight: 1 }}>
              <div
                className="block-container if"
                data-type="if"
                id="a088ddfb-d8c1-9e58-6f21-958c3f4f0709"
                style={{ textAlign: "left" }}
              >
                <div data-type="conditional-block">
                  <div
                    className="block-component"
                    data-record-question-key="user_post_content_option"
                    data-type="statement"
                  />
                </div>
              </div>
              <div
                className="block-container if"
                data-type="if"
                style={{ textAlign: "left" }}
              >
                <div data-type="conditional-block">
                  <div data-type="body">
                    <div
                      className="MsoNormal"
                      data-custom-class="body_text"
                      style={{ lineHeight: "1.5" }}
                    >
                      <span
                        style={{
                          fontSize: "11pt",
                          lineHeight: "16.8667px",
                          color: "#FFFEF9",
                        }}
                      >
                        By posting your Contributions to any part of the
                        Services
                        <div
                          className="block-container if"
                          data-type="if"
                          id="19652acc-9a2a-5ffe-6189-9474402fa6cc"
                        >
                          <div data-type="conditional-block">
                            <div
                              className="block-component"
                              data-record-question-key="socialnetwork_link_option"
                              data-type="statement"
                            />
                            <div data-type="body">
                              &nbsp;or making Contributions accessible to the
                              Services by linking your account from the Services
                              to any of your social networking accounts
                            </div>
                          </div>
                          <div
                            className="statement-end-if-in-editor"
                            data-type="close"
                          />
                        </div>
                        , you automatically grant, and you represent and warrant
                        that you have the right to grant, to us an unrestricted,
                        unlimited, irrevocable, perpetual, non-exclusive,
                        transferable, royalty-free, fully-paid, worldwide right,
                        and licence
                        <div className="else-block" /> to host, use, copy,
                        reproduce, disclose, sell, resell, publish, broadcast,
                        retitle, archive, store, cache, publicly perform,
                        publicly display, reformat, translate, transmit, excerpt
                        (in whole or in part), and distribute such Contributions
                        (including, without limitation, your image and voice)
                        for any purpose, commercial, advertising, or otherwise,
                        and to prepare derivative works of, or incorporate into
                        other works, such Contributions, and grant and authorise
                        sublicences
                        <div className="else-block" /> of the foregoing. The use
                        and distribution may occur in any media formats and
                        through any media channels.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="MsoNormal" style={{ lineHeight: "1.5" }}>
              <br />
            </div>
            <div
              className="MsoNormal"
              style={{ textAlign: "justify", lineHeight: 1 }}
            >
              <div
                className="block-container if"
                data-type="if"
                style={{ textAlign: "left" }}
              >
                <div data-type="conditional-block">
                  <div data-type="body">
                    <div
                      className="MsoNormal"
                      data-custom-class="body_text"
                      style={{ lineHeight: "1.5" }}
                    >
                      <span
                        style={{
                          fontSize: "11pt",
                          lineHeight: "16.8667px",
                          color: "#FFFEF9",
                        }}
                      >
                        This licence
                        <div className="else-block" /> will apply to any form,
                        media, or technology now known or hereafter developed,
                        and includes our use of your name, company name, and
                        franchise name, as applicable, and any of the
                        trademarks, service marks, trade names, logos, and
                        personal and commercial images you provide. You waive
                        all moral rights in your Contributions, and you warrant
                        that moral rights have not otherwise been asserted in
                        your Contributions.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="MsoNormal" style={{ lineHeight: "1.5" }}>
              <br />
            </div>
            <div
              className="MsoNormal"
              style={{ textAlign: "justify", lineHeight: 1 }}
            >
              <div
                className="block-container if"
                data-type="if"
                style={{ textAlign: "left" }}
              >
                <div data-type="conditional-block">
                  <div data-type="body">
                    <div
                      className="MsoNormal"
                      data-custom-class="body_text"
                      style={{ lineHeight: "1.5" }}
                    >
                      <span
                        style={{
                          fontSize: "11pt",
                          lineHeight: "16.8667px",
                          color: "#FFFEF9",
                        }}
                      >
                        We do not assert any ownership over your Contributions.
                        You retain full ownership of all of your Contributions
                        and any intellectual property rights or other
                        proprietary rights associated with your Contributions.
                        We are not liable for any statements or representations
                        in your Contributions provided by you in any area on the
                        Services. You are solely responsible for your
                        Contributions to the Services and you expressly agree to
                        exonerate us from any and all responsibility and to
                        refrain from any legal action against us regarding your
                        Contributions.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="MsoNormal" style={{ lineHeight: "1.5" }}>
              <br />
            </div>
            <div
              className="MsoNormal"
              style={{ textAlign: "justify", lineHeight: 1 }}
            >
              <div
                className="block-container if"
                data-type="if"
                style={{ textAlign: "left" }}
              >
                <div data-type="conditional-block">
                  <div data-type="body">
                    <div
                      className="MsoNormal"
                      data-custom-class="body_text"
                      style={{ lineHeight: "1.5" }}
                    >
                      <span
                        style={{
                          fontSize: "11pt",
                          lineHeight: "16.8667px",
                          color: "#FFFEF9",
                        }}
                      >
                        We have the right, in our sole and absolute discretion,
                        (1) to edit, redact, or otherwise change any
                        Contributions; (2) to re-categorise
                        <div className="else-block" /> any Contributions to
                        place them in more appropriate locations on the
                        Services; and (3) to pre-screen or delete any
                        Contributions at any time and for any reason, without
                        notice. We have no obligation to monitor your
                        Contributions.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div style={{ textAlign: "left" }}>
            <div className="MsoNormal" style={{ lineHeight: "1.5" }}>
              <br />
            </div>
            <div className="MsoNormal" style={{ lineHeight: "1.5" }}>
              <div
                className="block-container if"
                data-type="if"
                style={{ textAlign: "left" }}
              >
                <div data-type="conditional-block">
                  <div data-type="body">
                    <span
                      style={{
                        fontSize: "11pt",
                        lineHeight: "16.8667px",
                        color: "#FFFEF9",
                      }}
                    >
                      <div className="else-block" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="MsoNormal"
              data-custom-class="body_text"
              style={{ lineHeight: "1.5" }}
            >
              <div
                className="block-container if"
                data-type="if"
                style={{ textAlign: "left" }}
              >
                <div data-type="conditional-block">
                  <div
                    className="block-component"
                    data-record-question-key="review_option"
                    data-type="statement"
                  />
                </div>
              </div>
            </div>
            <div
              className="MsoNormal"
              data-custom-class="heading_1"
              id="reviews"
              style={{ lineHeight: "1.5" }}
            >
              <strong>
                <span style={{ lineHeight: "24.5333px", fontSize: 19 }}>
                  <strong>
                    <span
                      style={{
                        lineHeight: "115%",
                        fontFamily: "Arial",
                        fontSize: 19,
                      }}
                    >
                      <strong>
                        <span
                          style={{
                            lineHeight: "115%",
                            fontFamily: "Arial",
                            fontSize: 19,
                          }}
                        >
                          11.
                        </span>
                      </strong>
                    </span>
                    &nbsp;
                  </strong>
                </span>
                GUIDELINES FOR REVIEWS
              </strong>
            </div>
            <div className="MsoNormal" style={{ lineHeight: "1.5" }}>
              <br />
            </div>
            <div
              className="MsoNormal"
              data-custom-class="body_text"
              style={{ lineHeight: "1.5" }}
            >
              <span
                style={{
                  fontSize: "11pt",
                  lineHeight: "16.8667px",
                  color: "#FFFEF9",
                }}
              >
                We may provide you areas on the Services to leave reviews or
                ratings. When posting a review, you must comply with the
                following criteria: (1) you should have firsthand experience
                with the person/entity being reviewed; (2) your reviews should
                not contain offensive profanity, or abusive, racist, offensive,
                or hateful language; (3) your reviews should not contain
                discriminatory references based on religion, race, gender,
                national origin, age, marital status, sexual orientation, or
                disability; (4) your reviews should not contain references to
                illegal activity; (5) you should not be affiliated with
                competitors if posting negative reviews; (6) you should not make
                any conclusions as to the legality of conduct; (7) you may not
                post any false or misleading statements; and (8) you may not{" "}
                organise
                <div className="else-block" /> a campaign encouraging others to
                post reviews, whether positive or negative.
              </span>
            </div>
            <div className="MsoNormal" style={{ lineHeight: "1.5" }}>
              <br />
            </div>
            <div
              className="MsoNormal"
              data-custom-class="body_text"
              style={{ lineHeight: "1.5" }}
            >
              <span
                style={{
                  fontSize: "11pt",
                  lineHeight: "16.8667px",
                  color: "#FFFEF9",
                }}
              >
                <span
                  style={{
                    fontSize: "11pt",
                    lineHeight: "16.8667px",
                    color: "#FFFEF9",
                  }}
                >
                  We may accept, reject, or remove reviews in our sole
                  discretion. We have absolutely no obligation to screen reviews
                  or to delete reviews, even if anyone considers reviews
                  objectionable or inaccurate. Reviews are not endorsed by us,
                  and do not necessarily represent our opinions or the views of
                  any of our affiliates or partners. We do not assume liability
                  for any review or for any claims, liabilities, or losses
                  resulting from any review. By posting a review, you hereby
                  grant to us a perpetual, non-exclusive, worldwide,
                  royalty-free, fully paid, assignable, and sublicensable right
                  and licence
                  <div className="else-block" /> to reproduce, modify,
                  translate, transmit by any means, display, perform, and/or
                  distribute all content relating to review.
                </span>
              </span>
            </div>
            <div className="MsoNormal" style={{ lineHeight: "1.5" }}>
              <br />
            </div>
            <div className="MsoNormal" style={{ lineHeight: "1.5" }}>
              <span
                style={{
                  fontSize: "11pt",
                  lineHeight: "16.8667px",
                  color: "#FFFEF9",
                }}
              >
                <span
                  style={{
                    fontSize: "11pt",
                    lineHeight: "16.8667px",
                    color: "#FFFEF9",
                  }}
                >
                  <span
                    style={{
                      fontSize: "11pt",
                      lineHeight: "16.8667px",
                      color: "#FFFEF9",
                    }}
                  >
                    <div
                      className="block-container if"
                      data-type="if"
                      style={{ textAlign: "left" }}
                    >
                      <div
                        className="statement-end-if-in-editor"
                        data-type="close"
                      />
                    </div>
                  </span>
                </span>
              </span>
            </div>
            <div className="MsoNormal" style={{ lineHeight: "1.5" }}>
              <div
                className="block-container if"
                data-type="if"
                style={{ textAlign: "left" }}
              >
                <div data-type="conditional-block">
                  <div
                    className="block-component"
                    data-record-question-key="mobile_app_option"
                    data-type="statement"
                  />
                </div>
              </div>
            </div>
            <div className="MsoNormal" style={{ lineHeight: "1.5" }}>
              <div
                className="block-container if"
                data-type="if"
                style={{ textAlign: "left" }}
              >
                <div data-type="conditional-block">
                  <div
                    className="block-component"
                    data-record-question-key="socialnetwork_link_option"
                    data-type="statement"
                  />
                </div>
              </div>
            </div>
            <div
              className="MsoNormal"
              data-custom-class="heading_1"
              id="socialmedia"
              style={{ lineHeight: "1.5" }}
            >
              <strong>
                <span style={{ lineHeight: "24.5333px", fontSize: 19 }}>
                  <strong>
                    <span
                      style={{
                        lineHeight: "115%",
                        fontFamily: "Arial",
                        fontSize: 19,
                      }}
                    >
                      <strong>
                        <span
                          style={{
                            lineHeight: "115%",
                            fontFamily: "Arial",
                            fontSize: 19,
                          }}
                        >
                          12.
                        </span>
                      </strong>
                    </span>
                    &nbsp;
                  </strong>
                </span>
                SOCIAL MEDIA
              </strong>
            </div>
            <div className="MsoNormal" style={{ lineHeight: "1.5" }}>
              <br />
              <div
                className="block-container if"
                data-type="if"
                style={{ textAlign: "left" }}
              >
                <div data-type="conditional-block">
                  <div data-type="body">
                    <div
                      className="MsoNormal"
                      data-custom-class="body_text"
                      style={{ lineHeight: "1.5" }}
                    >
                      <span
                        style={{
                          fontSize: "11pt",
                          lineHeight: "16.8667px",
                          color: "#FFFEF9",
                        }}
                      >
                        As part of the functionality of the Services, you may
                        link your account with online accounts you have with
                        third-party service providers (each such account, a{" "}
                        &apos;Third-Party Account&apos;
                        <div className="else-block" />) by either: (1) providing
                        your Third-Party Account login information through the
                        Services; or (2) allowing us to access your{" "}
                        <span style={{ fontSize: "14.6667px" }}>
                          Third-Party
                        </span>{" "}
                        Account, as is permitted under the applicable terms and
                        conditions that govern your use of each{" "}
                        <span style={{ fontSize: "14.6667px" }}>
                          Third-Party
                        </span>{" "}
                        Account. You represent and warrant that you are entitled
                        to disclose your{" "}
                        <span style={{ fontSize: "14.6667px" }}>
                          Third-Party
                        </span>{" "}
                        Account login information to us and/or grant us access
                        to your{" "}
                        <span style={{ fontSize: "14.6667px" }}>
                          Third-Party
                        </span>{" "}
                        Account, without breach by you of any of the terms and
                        conditions that govern your use of the applicable{" "}
                        <span style={{ fontSize: "14.6667px" }}>
                          Third-Party
                        </span>{" "}
                        Account, and without obligating us to pay any fees or
                        making us subject to any usage limitations imposed by
                        the third-party service provider of the{" "}
                        <span style={{ fontSize: "14.6667px" }}>
                          Third-Party
                        </span>{" "}
                        Account. By granting us access to any{" "}
                        <span style={{ fontSize: "14.6667px" }}>
                          Third-Party
                        </span>{" "}
                        Accounts, you understand that (1) we may access, make
                        available, and store (if applicable) any content that
                        you have provided to and stored in your{" "}
                        <span style={{ fontSize: "14.6667px" }}>
                          Third-Party
                        </span>{" "}
                        Account (the &apos;Social Network Content&apos;
                        <div className="else-block" />) so that it is available
                        on and through the Services via your account, including
                        without limitation any friend lists and (2) we may
                        submit to and receive from your{" "}
                        <span style={{ fontSize: "14.6667px" }}>
                          Third-Party
                        </span>{" "}
                        Account additional information to the extent you are
                        notified when you link your account with the{" "}
                        <span style={{ fontSize: "14.6667px" }}>
                          Third-Party
                        </span>{" "}
                        Account. Depending on the{" "}
                        <span style={{ fontSize: "14.6667px" }}>
                          Third-Party
                        </span>{" "}
                        Accounts you choose and subject to the privacy settings
                        that you have set in such{" "}
                        <span style={{ fontSize: "14.6667px" }}>
                          Third-Party
                        </span>{" "}
                        Accounts, personally identifiable information that you
                        post to your{" "}
                        <span style={{ fontSize: "14.6667px" }}>
                          Third-Party
                        </span>{" "}
                        Accounts may be available on and through your account on
                        the Services. Please note that if a{" "}
                        <span style={{ fontSize: "14.6667px" }}>
                          Third-Party
                        </span>{" "}
                        Account or associated service becomes unavailable or our
                        access to such{" "}
                        <span style={{ fontSize: "14.6667px" }}>
                          Third-Party
                        </span>{" "}
                        Account is terminated by the third-party service
                        provider, then Social Network Content may no longer be
                        available on and through the Services. You will have the
                        ability to disable the connection between your account
                        on the Services and your{" "}
                        <span style={{ fontSize: "14.6667px" }}>
                          Third-Party
                        </span>{" "}
                        Accounts at any time. PLEASE NOTE THAT YOUR RELATIONSHIP
                        WITH THE THIRD-PARTY SERVICE PROVIDERS ASSOCIATED WITH
                        YOUR THIRD-PARTY ACCOUNTS IS GOVERNED SOLELY BY YOUR
                        AGREEMENT(S) WITH SUCH THIRD-PARTY SERVICE PROVIDERS. We
                        make no effort to review any Social Network Content for
                        any purpose, including but not limited to, for accuracy,
                        legality, or non-infringement, and we are not
                        responsible for any Social Network Content. You
                        acknowledge and agree that we may access your email
                        address book associated with a{" "}
                        <span style={{ fontSize: "14.6667px" }}>
                          Third-Party
                        </span>{" "}
                        Account and your contacts list stored on your mobile
                        device or tablet computer solely for purposes of
                        identifying and informing you of those contacts who have
                        also registered to use the Services. You can deactivate
                        the connection between the Services and your{" "}
                        <span style={{ fontSize: "14.6667px" }}>
                          Third-Party
                        </span>{" "}
                        Account by contacting us using the contact information
                        below or through your account settings (if applicable).
                        We will attempt to delete any information stored on our
                        servers that was obtained through such{" "}
                        <span style={{ fontSize: "14.6667px" }}>
                          Third-Party
                        </span>{" "}
                        Account, except the username and profile picture that
                        become associated with your account.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="MsoNormal" style={{ lineHeight: "1.5" }}>
              <br />
            </div>
            <div className="MsoNormal" style={{ lineHeight: "1.1" }}>
              <div
                className="block-container if"
                data-type="if"
                style={{ textAlign: "left" }}
              >
                <div data-type="conditional-block">
                  <div data-type="body">
                    <div className="MsoNormal" style={{ lineHeight: "1.5" }}>
                      <span
                        style={{
                          fontSize: "11pt",
                          lineHeight: "16.8667px",
                          color: "#FFFEF9",
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="MsoNormal" style={{ lineHeight: "1.5" }}>
              <div
                className="block-container if"
                data-type="if"
                style={{ textAlign: "left" }}
              >
                <div data-type="conditional-block">
                  <div
                    className="block-component"
                    data-record-question-key="3rd_party_option"
                    data-type="statement"
                  />
                </div>
              </div>
            </div>
            <div
              className="MsoNormal"
              data-custom-class="heading_1"
              id="thirdparty"
              style={{ lineHeight: "1.5" }}
            >
              <strong>
                <span style={{ lineHeight: "24.5333px", fontSize: 19 }}>
                  <strong>
                    <span
                      style={{
                        lineHeight: "115%",
                        fontFamily: "Arial",
                        fontSize: 19,
                      }}
                    >
                      <strong>
                        <span
                          style={{
                            lineHeight: "115%",
                            fontFamily: "Arial",
                            fontSize: 19,
                          }}
                        >
                          13.
                        </span>
                      </strong>
                    </span>
                  </strong>
                  &nbsp;
                </span>
                THIRD-PARTY WEBSITES AND CONTENT
              </strong>
            </div>
            <div className="MsoNormal" style={{ lineHeight: "1.5" }}>
              <br />
            </div>
            <div
              className="MsoNormal"
              data-custom-class="body_text"
              style={{ lineHeight: "1.5" }}
            >
              <span
                style={{
                  fontSize: "11pt",
                  lineHeight: "16.8667px",
                  color: "#FFFEF9",
                }}
              >
                The Services may contain (or you may be sent via the Site )
                links to other websites ( &apos;Third-Party Websites&apos;
                <div className="else-block" />) as well as articles,
                photographs, text, graphics, pictures, designs, music, sound,
                video, information, applications, software, and other content or
                items belonging to or originating from third parties (
                &apos;Third-Party Content&apos;
                <div className="else-block" />
                ). Such{" "}
                <span style={{ fontSize: "14.6667px" }}>Third-Party</span>{" "}
                Websites and{" "}
                <span style={{ fontSize: "14.6667px" }}>Third-Party</span>{" "}
                Content are not investigated, monitored, or checked for
                accuracy, appropriateness, or completeness by us, and we are not
                responsible for any Third-Party Websites accessed through the
                Services or any{" "}
                <span style={{ fontSize: "14.6667px" }}>Third-Party</span>{" "}
                Content posted on, available through, or installed from the
                Services, including the content, accuracy, offensiveness,
                opinions, reliability, privacy practices, or other policies of
                or contained in the{" "}
                <span style={{ fontSize: "14.6667px" }}>Third-Party</span>{" "}
                Websites or the{" "}
                <span style={{ fontSize: "14.6667px" }}>Third-Party</span>{" "}
                Content. Inclusion of, linking to, or permitting the use or
                installation of any{" "}
                <span style={{ fontSize: "14.6667px" }}>Third-Party</span>{" "}
                Websites or any{" "}
                <span style={{ fontSize: "14.6667px" }}>Third-Party&nbsp;</span>
                Content does not imply approval or endorsement thereof by us. If
                you decide to leave the Services and access the{" "}
                <span style={{ fontSize: "14.6667px" }}>Third-Party</span>{" "}
                Websites or to use or install any{" "}
                <span style={{ fontSize: "14.6667px" }}>Third-Party</span>{" "}
                Content, you do so at your own risk, and you should be aware
                these Legal Terms no longer govern. You should review the
                applicable terms and policies, including privacy and data
                gathering practices, of any website to which you navigate from
                the Services or relating to any applications you use or install
                from the Services. Any purchases you make through{" "}
                <span style={{ fontSize: "14.6667px" }}>Third-Party</span>{" "}
                Websites will be through other websites and from other
                companies, and we take no responsibility whatsoever in relation
                to such purchases which are exclusively between you and the
                applicable third party. You agree and acknowledge that we do not
                endorse the products or services offered on{" "}
                <span style={{ fontSize: "14.6667px" }}>Third-Party</span>{" "}
                Websites and you shall hold us blameless from any harm caused by
                your purchase of such products or services. Additionally, you
                shall hold us blameless from any losses sustained by you or harm
                caused to you relating to or resulting in any way from any{" "}
                <span style={{ fontSize: "14.6667px" }}>Third-Party</span>{" "}
                Content or any contact with{" "}
                <span style={{ fontSize: "14.6667px" }}>Third-Party</span>{" "}
                Websites.
              </span>
            </div>
            <div className="MsoNormal" style={{ lineHeight: "1.5" }}>
              <br />
            </div>
            <div className="MsoNormal" style={{ lineHeight: "1.5" }}>
              <div
                className="block-container if"
                data-type="if"
                style={{ textAlign: "left" }}
              >
                <div className="statement-end-if-in-editor" data-type="close" />
              </div>
            </div>
            <div className="MsoNormal" style={{ lineHeight: "1.5" }}>
              <div
                className="block-container if"
                data-type="if"
                style={{ textAlign: "left" }}
              >
                <div data-type="conditional-block">
                  <div
                    className="block-component"
                    data-record-question-key="advertiser_option"
                    data-type="statement"
                  />
                </div>
              </div>
            </div>
            <div
              className="MsoNormal"
              data-custom-class="heading_1"
              id="sitemanage"
              style={{ lineHeight: "1.5" }}
            >
              <strong>
                <span style={{ lineHeight: "24.5333px", fontSize: 19 }}>
                  <strong>
                    <span style={{ lineHeight: "24.5333px", fontSize: 19 }}>
                      <strong>
                        <span
                          style={{
                            lineHeight: "115%",
                            fontFamily: "Arial",
                            fontSize: 19,
                          }}
                        >
                          <strong>
                            <span
                              style={{
                                lineHeight: "115%",
                                fontFamily: "Arial",
                                fontSize: 19,
                              }}
                            >
                              14.
                            </span>
                          </strong>
                        </span>
                        &nbsp;
                      </strong>
                    </span>
                  </strong>
                  SERVICES MANAGEMENT
                </span>
              </strong>
            </div>
            <div className="MsoNormal" style={{ lineHeight: "1.5" }}>
              <br />
            </div>
            <div
              className="MsoNormal"
              data-custom-class="body_text"
              style={{ lineHeight: "1.5" }}
            >
              We reserve the right, but not the obligation, to: (1) monitor the
              Services for violations of these Legal Terms; (2) take appropriate
              legal action against anyone who, in our sole discretion, violates
              the law or these Legal Terms, including without limitation,
              reporting such user to law enforcement authorities; (3) in our
              sole discretion and without limitation, refuse, restrict access
              to, limit the availability of, or disable (to the extent
              technologically feasible) any of your Contributions or any portion
              thereof; (4) in our sole discretion and without limitation,
              notice, or liability, to remove from the Services or otherwise
              disable all files and content that are excessive in size or are in
              any way burdensome to our systems; and (5) otherwise manage the
              Services in a manner designed to protect our rights and property
              and to facilitate the proper functioning of the Services.
            </div>
            <div className="MsoNormal" style={{ lineHeight: "1.5" }}>
              <br />
            </div>
            <div className="MsoNormal" style={{ lineHeight: "1.5" }}>
              <div
                className="block-container if"
                data-type="if"
                style={{ textAlign: "left" }}
              >
                <div data-type="conditional-block">
                  <div
                    className="block-component"
                    data-record-question-key="privacy_policy_option"
                    data-type="statement"
                  />
                </div>
              </div>
            </div>
            <div
              className="MsoNormal"
              data-custom-class="heading_1"
              id="ppyes"
              style={{ lineHeight: "1.5" }}
            >
              <strong>
                <span style={{ lineHeight: "24.5333px", fontSize: 19 }}>
                  <strong>
                    <span
                      style={{
                        lineHeight: "115%",
                        fontFamily: "Arial",
                        fontSize: 19,
                      }}
                    >
                      <strong>
                        <span
                          style={{
                            lineHeight: "115%",
                            fontFamily: "Arial",
                            fontSize: 19,
                          }}
                        >
                          15.
                        </span>
                      </strong>
                    </span>
                    &nbsp;
                  </strong>
                </span>
                PRIVACY POLICY
              </strong>
            </div>
            <div className="MsoNormal" style={{ lineHeight: "1.5" }}>
              <br />
            </div>
            <div
              className="MsoNormal"
              data-custom-class="body_text"
              style={{ lineHeight: "1.5" }}
            >
              <span
                style={{
                  fontSize: "11pt",
                  lineHeight: "16.8667px",
                  color: "#FFFEF9",
                }}
              >
                We care about data privacy and security. Please review our
                Privacy Policy:
                <strong>
                  &nbsp;
                  <span style={{ color: "rgb(0, 58, 250)" }}>
                    <div
                      className="block-container question question-in-editor"
                      data-id="d10c7fd7-0685-12ac-c717-cbc45ff916d1"
                      data-type="question"
                    >
                      <a
                        href="https://cinemachines.com"
                        target="_blank"
                        data-custom-class="link"
                      >
                        https://cinemachines.com
                      </a>
                    </div>
                  </span>
                </strong>
                . By using the Services, you agree to be bound by our Privacy
                Policy, which is incorporated into these Legal Terms. Please be
                advised the Services are hosted in the{" "}
                <div className="question">United States</div>. If you access the
                Services from any other region of the world with laws or other
                requirements governing personal data collection, use, or
                disclosure that differ from applicable laws in{" "}
                <span
                  style={{
                    fontSize: "11pt",
                    lineHeight: "16.8667px",
                    color: "#FFFEF9",
                  }}
                >
                  the <div className="question">United States</div>
                </span>
                , then through your continued use of the Services, you are
                transferring your data to{" "}
                <span
                  style={{
                    fontSize: "11pt",
                    lineHeight: "16.8667px",
                    color: "#FFFEF9",
                  }}
                >
                  the <div className="question">United States</div>
                </span>
                , and you expressly consent to have your data transferred to and
                processed in{" "}
                <span
                  style={{
                    fontSize: "11pt",
                    lineHeight: "16.8667px",
                    color: "#FFFEF9",
                  }}
                >
                  the <div className="question">United States</div>
                </span>
                .
              </span>
            </div>
            <div className="MsoNormal" style={{ lineHeight: "1.5" }}>
              <br />
            </div>
            <div className="MsoNormal" style={{ lineHeight: "1.5" }}>
              <div
                className="block-container if"
                data-type="if"
                style={{ textAlign: "left" }}
              >
                <div className="statement-end-if-in-editor" data-type="close" />
              </div>
              <div className="block-container if" data-type="if">
                <div data-type="conditional-block">
                  <div
                    className="block-component"
                    data-record-question-key="privacy_policy_followup"
                    data-type="statement"
                    style={{ fontSize: "14.6667px" }}
                  />
                </div>
              </div>
            </div>
            <div className="MsoNormal" style={{ lineHeight: "1.5" }}>
              <div
                className="block-container if"
                data-type="if"
                style={{ textAlign: "left" }}
              >
                <div data-type="conditional-block">
                  <div
                    className="block-component"
                    data-record-question-key="copyright_agent_option"
                    data-type="statement"
                  ></div>
                </div>
              </div>
            </div>
            <div
              className="MsoNormal"
              style={{ lineHeight: "1.5", textAlign: "left" }}
            ></div>
            <div
              className="MsoNormal"
              data-custom-class="heading_1"
              id="copyrightno"
              style={{ lineHeight: "1.5", textAlign: "left" }}
            >
              <strong>
                <span style={{ fontSize: 19 }}>
                  <strong>
                    <span style={{ lineHeight: "24.5333px", fontSize: 19 }}>
                      <strong>
                        <span
                          style={{
                            lineHeight: "115%",
                            fontFamily: "Arial",
                            fontSize: 19,
                          }}
                        >
                          <strong>
                            <span
                              style={{
                                lineHeight: "115%",
                                fontFamily: "Arial",
                                fontSize: 19,
                              }}
                            >
                              16.
                            </span>
                          </strong>
                        </span>
                      </strong>
                    </span>
                    &nbsp;
                  </strong>
                  COPYRIGHT INFRINGEMENTS
                </span>
              </strong>
            </div>
            <div
              className="MsoNormal"
              style={{ lineHeight: "1.5", textAlign: "left" }}
            >
              <br />
            </div>
            <div
              className="MsoNormal"
              data-custom-class="body_text"
              style={{ lineHeight: "1.5", textAlign: "left" }}
            >
              <span
                style={{
                  fontSize: "11pt",
                  lineHeight: "16.8667px",
                  color: "#FFFEF9",
                }}
              >
                We respect the intellectual property rights of others. If you
                believe that any material available on or through the Services
                infringes upon any copyright you own or control, please
                immediately notify us using the contact information provided
                below (a &apos;Notification&apos;
                <div className="else-block" />
                ). A copy of your Notification will be sent to the person who
                posted or stored the material addressed in the Notification.
                Please be advised that pursuant to applicable law you may be
                held liable for damages if you make material misrepresentations
                in a Notification. Thus, if you are not sure that material
                located on or linked to by the Services infringes your
                copyright, you should consider first contacting an attorney.
              </span>
            </div>
            <div
              className="MsoNormal"
              style={{ lineHeight: "1.5", textAlign: "left" }}
            >
              <br />
            </div>
            <div
              className="MsoNormal"
              style={{ lineHeight: "1.5", textAlign: "left" }}
            >
              <div className="statement-end-if-in-editor" />
              <div className="statement-end-if-in-editor" />
            </div>
            <div
              className="MsoNormal"
              data-custom-class="heading_1"
              id="terms"
              style={{ lineHeight: "1.5", textAlign: "left" }}
            >
              <strong>
                <span style={{ lineHeight: "24.5333px", fontSize: 19 }}>
                  <strong>
                    <span style={{ lineHeight: "24.5333px", fontSize: 19 }}>
                      <strong>
                        <span
                          style={{
                            lineHeight: "115%",
                            fontFamily: "Arial",
                            fontSize: 19,
                          }}
                        >
                          <strong>
                            <span
                              style={{
                                lineHeight: "115%",
                                fontFamily: "Arial",
                                fontSize: 19,
                              }}
                            >
                              17.
                            </span>
                          </strong>
                        </span>
                      </strong>
                    </span>
                    &nbsp;
                  </strong>
                  TERM AND TERMINATION
                </span>
              </strong>
            </div>
            <div
              className="MsoNormal"
              style={{ lineHeight: "1.5", textAlign: "left" }}
            >
              <br />
            </div>
            <div
              className="MsoNormal"
              data-custom-class="body_text"
              style={{ lineHeight: "1.5", textAlign: "left" }}
            >
              <span
                style={{
                  fontSize: "11pt",
                  lineHeight: "16.8667px",
                  color: "#FFFEF9",
                }}
              >
                These Legal Terms shall remain in full force and effect while
                you use the Services. WITHOUT LIMITING ANY OTHER PROVISION OF
                THESE LEGAL TERMS, WE RESERVE THE RIGHT TO, IN OUR SOLE
                DISCRETION AND WITHOUT NOTICE OR LIABILITY, DENY ACCESS TO AND
                USE OF THE SERVICES (INCLUDING BLOCKING CERTAIN IP ADDRESSES),
                TO ANY PERSON FOR ANY REASON OR FOR NO REASON, INCLUDING WITHOUT
                LIMITATION FOR BREACH OF ANY REPRESENTATION, WARRANTY, OR
                COVENANT CONTAINED IN THESE LEGAL TERMS OR OF ANY APPLICABLE LAW
                OR REGULATION. WE MAY TERMINATE YOUR USE OR PARTICIPATION IN THE
                SERVICES OR DELETE{" "}
                <div
                  className="block-container if"
                  data-type="if"
                  id="a6e121c2-36b4-5066-bf9f-a0a33512e768"
                >
                  <div data-type="conditional-block">
                    <div
                      className="block-component"
                      data-record-question-key="user_account_option"
                      data-type="statement"
                    />
                    <div data-type="body">YOUR ACCOUNT AND&nbsp;</div>
                  </div>
                  <div
                    className="statement-end-if-in-editor"
                    data-type="close"
                  />
                </div>
                ANY CONTENT OR INFORMATION THAT YOU POSTED AT ANY TIME, WITHOUT
                WARNING, IN OUR SOLE DISCRETION.
              </span>
            </div>
            <div
              className="MsoNormal"
              style={{ lineHeight: "1.5", textAlign: "left" }}
            >
              <br />
            </div>
            <div
              className="MsoNormal"
              data-custom-class="body_text"
              style={{ lineHeight: "1.5", textAlign: "left" }}
            >
              <span
                style={{
                  fontSize: "11pt",
                  lineHeight: "16.8667px",
                  color: "#FFFEF9",
                }}
              >
                If we terminate or suspend your account for any reason, you are
                prohibited from registering and creating a new account under
                your name, a fake or borrowed name, or the name of any third
                party, even if you may be acting on behalf of the third party.
                In addition to terminating or suspending your account, we
                reserve the right to take appropriate legal action, including
                without limitation pursuing civil, criminal, and injunctive
                redress.
              </span>
            </div>
            <div
              className="MsoNormal"
              style={{ lineHeight: "1.5", textAlign: "left" }}
            >
              <br />
            </div>
            <div
              className="MsoNormal"
              data-custom-class="heading_1"
              id="modifications"
              style={{ lineHeight: "1.5", textAlign: "left" }}
            >
              <strong>
                <span style={{ lineHeight: "24.5333px", fontSize: 19 }}>
                  <strong>
                    <span style={{ lineHeight: "24.5333px", fontSize: 19 }}>
                      <strong>
                        <span
                          style={{
                            lineHeight: "115%",
                            fontFamily: "Arial",
                            fontSize: 19,
                          }}
                        >
                          <strong>
                            <span
                              style={{
                                lineHeight: "115%",
                                fontFamily: "Arial",
                                fontSize: 19,
                              }}
                            >
                              18.
                            </span>
                          </strong>
                        </span>
                      </strong>
                    </span>
                    &nbsp;
                  </strong>
                  MODIFICATIONS AND INTERRUPTIONS
                </span>
              </strong>
            </div>
            <div
              className="MsoNormal"
              style={{ lineHeight: "1.5", textAlign: "left" }}
            >
              <br />
            </div>
            <div
              className="MsoNormal"
              data-custom-class="body_text"
              style={{ lineHeight: "1.5", textAlign: "left" }}
            >
              <span
                style={{
                  fontSize: "11pt",
                  lineHeight: "16.8667px",
                  color: "#FFFEF9",
                }}
              >
                We reserve the right to change, modify, or remove the contents
                of the Services at any time or for any reason at our sole
                discretion without notice. However, we have no obligation to
                update any information on our Services. We also reserve the
                right to modify or discontinue all or part of the Services
                without notice at any time.
                <div className="statement-end-if-in-editor" /> We will not be
                liable to you or any third party for any modification, price
                change, suspension, or discontinuance of the Services.
              </span>
            </div>
            <div
              className="MsoNormal"
              style={{ lineHeight: "1.5", textAlign: "left" }}
            >
              <br />
            </div>
            <div
              className="MsoNormal"
              data-custom-class="body_text"
              style={{ lineHeight: "1.5", textAlign: "left" }}
            >
              <span
                style={{
                  fontSize: "11pt",
                  lineHeight: "16.8667px",
                  color: "#FFFEF9",
                }}
              >
                We cannot guarantee the Services will be available at all times.
                We may experience hardware, software, or other problems or need
                to perform maintenance related to the Services, resulting in
                interruptions, delays, or errors. We reserve the right to
                change, revise, update, suspend, discontinue, or otherwise
                modify the Services at any time or for any reason without notice
                to you. You agree that we have no liability whatsoever for any
                loss, damage, or inconvenience caused by your inability to
                access or use the Services during any downtime or discontinuance
                of the Services. Nothing in these Legal Terms will be construed
                to obligate us to maintain and support the Services or to supply
                any corrections, updates, or releases in connection therewith.
              </span>
            </div>
            <div
              className="MsoNormal"
              style={{ lineHeight: "1.5", textAlign: "left" }}
            >
              <br />
            </div>
            <div
              className="MsoNormal"
              data-custom-class="heading_1"
              id="law"
              style={{ lineHeight: "1.5", textAlign: "left" }}
            >
              <strong>
                <span style={{ lineHeight: "24.5333px", fontSize: 19 }}>
                  <strong>
                    <span style={{ lineHeight: "24.5333px", fontSize: 19 }}>
                      <strong>
                        <span
                          style={{
                            lineHeight: "115%",
                            fontFamily: "Arial",
                            fontSize: 19,
                          }}
                        >
                          <strong>
                            <span
                              style={{
                                lineHeight: "115%",
                                fontFamily: "Arial",
                                fontSize: 19,
                              }}
                            >
                              19.
                            </span>
                          </strong>
                        </span>
                      </strong>
                    </span>
                    &nbsp;
                  </strong>
                  GOVERNING LAW
                </span>
              </strong>
            </div>
            <div
              className="MsoNormal"
              style={{ lineHeight: "1.5", textAlign: "left" }}
            >
              <br />
            </div>
            <div
              className="MsoNormal"
              style={{ lineHeight: "1.5", textAlign: "left" }}
            >
              <span
                style={{
                  fontSize: "11pt",
                  lineHeight: "16.8667px",
                  color: "#FFFEF9",
                }}
              ></span>
            </div>
            <div
              className="MsoNormal"
              data-custom-class="body_text"
              style={{ lineHeight: "1.5", textAlign: "left" }}
            >
              <span
                style={{
                  fontSize: "11pt",
                  lineHeight: "16.8667px",
                  color: "#FFFEF9",
                }}
              >
                These Legal Terms shall be governed by and defined following the
                laws of
                <div className="question">India</div>
                <span
                  style={{
                    fontSize: "11pt",
                    lineHeight: "16.8667px",
                    color: "#FFFEF9",
                  }}
                >
                  <div className="statement-end-if-in-editor" />
                </span>
                . <div className="question">Cinemachines Private Limited</div>{" "}
                and yourself irrevocably consent that the courts of{" "}
                <span
                  style={{
                    fontSize: "11pt",
                    lineHeight: "16.8667px",
                    color: "#FFFEF9",
                  }}
                >
                  <div className="question">India</div>
                  <span
                    style={{
                      fontSize: "11pt",
                      lineHeight: "16.8667px",
                      color: "#FFFEF9",
                    }}
                  >
                    <div className="statement-end-if-in-editor" />
                  </span>
                </span>{" "}
                shall have exclusive jurisdiction to resolve any dispute which
                may arise in connection with these Legal Terms.
                <div className="statement-end-if-in-editor" />
              </span>
            </div>
            <div
              className="MsoNormal"
              style={{ lineHeight: "1.5", textAlign: "left" }}
            >
              <br />
            </div>
            <div
              className="MsoNormal"
              data-custom-class="heading_1"
              id="disputes"
              style={{ lineHeight: "1.5", textAlign: "left" }}
            >
              <strong>
                <span style={{ lineHeight: "24.5333px", fontSize: 19 }}>
                  <strong>
                    <span style={{ lineHeight: "24.5333px", fontSize: 19 }}>
                      <strong>
                        <span
                          style={{
                            lineHeight: "115%",
                            fontFamily: "Arial",
                            fontSize: 19,
                          }}
                        >
                          <strong>
                            <span
                              style={{
                                lineHeight: "115%",
                                fontFamily: "Arial",
                                fontSize: 19,
                              }}
                            >
                              20.
                            </span>
                          </strong>
                        </span>
                        &nbsp;
                      </strong>
                    </span>
                  </strong>
                  DISPUTE RESOLUTION
                </span>
              </strong>
            </div>
            <div
              className="MsoNormal"
              style={{ lineHeight: "1.5", textAlign: "left" }}
            >
              <br />
            </div>
            <div
              className="MsoNormal"
              style={{ lineHeight: "1.5", textAlign: "left" }}
            ></div>
            <div
              className="MsoNormal"
              style={{ lineHeight: "1.5", textAlign: "left" }}
            ></div>
            <div
              className="MsoNormal"
              data-custom-class="heading_2"
              style={{ lineHeight: "1.5", textAlign: "left" }}
            >
              <strong>Informal Negotiations</strong>
            </div>
            <div
              className="MsoNormal"
              style={{ lineHeight: "1.5", textAlign: "left" }}
            >
              <br />
            </div>
            <div
              className="MsoNormal"
              data-custom-class="body_text"
              style={{ lineHeight: "1.5", textAlign: "left" }}
            >
              <span style={{ fontSize: 15 }}>
                To expedite resolution and control the cost of any dispute,
                controversy, or claim related to these Legal Terms (each a{" "}
                &apos;Dispute&apos; and collectively, the &apos;Disputes&apos;
                <div className="else-block" />) brought by either you or us
                (individually, a &apos;Party&apos; and collectively, the
                &apos;Parties&apos;
                <div className="else-block" />
                ), the Parties agree to first attempt to negotiate any Dispute
                (except those Disputes expressly provided below) informally for
                at least <div className="question">ninety (90)</div> days before
                initiating arbitration. Such informal negotiations commence upon
                written notice from one Party to the other Party.
              </span>
            </div>
            <div
              className="MsoNormal"
              style={{ lineHeight: "1.5", textAlign: "left" }}
            >
              <br />
            </div>
            <div
              className="MsoNormal"
              style={{ lineHeight: "1.5", textAlign: "left" }}
            >
              <div className="statement-end-if-in-editor" />
            </div>
            <div
              className="MsoNormal"
              data-custom-class="heading_2"
              style={{ lineHeight: "1.5", textAlign: "left" }}
            >
              <strong>Binding Arbitration</strong>
            </div>
            <div
              className="MsoNormal"
              style={{ lineHeight: "1.5", textAlign: "left" }}
            >
              <br />
            </div>
            <div
              className="MsoNormal"
              data-custom-class="body_text"
              style={{ lineHeight: "1.5", textAlign: "left" }}
            >
              <div className="block-component">
                <span style={{ fontSize: 15 }} />
              </div>
            </div>
            <div
              className="MsoNormal"
              data-custom-class="body_text"
              style={{ lineHeight: "1.5", textAlign: "left" }}
            >
              Any dispute arising out of or in connection with these Legal
              Terms, including any question regarding its existence, validity,
              or termination, shall be referred to and finally resolved by the
              International Commercial Arbitration Court under the European
              Arbitration Chamber (Belgium, Brussels, Avenue Louise, 146)
              according to the Rules of this ICAC, which, as a result of
              referring to it, is considered as the part of this clause. The
              number of arbitrators shall be{" "}
              <div className="question">one (1)</div>. The seat, or legal place,
              or arbitration shall be
              <div className="question">Jaipur</div>,{" "}
              <div className="question">India</div>
              <div className="statement-end-if-in-editor" />
              <div className="else-block" />. The language of the proceedings
              shall be <div className="question">English</div>. The governing
              law of these Legal Terms shall be substantive law of{" "}
              <div className="question">India</div>
              <div className="statement-end-if-in-editor">
                <div className="statement-end-if-in-editor" />
              </div>
              .
              <div className="statement-end-if-in-editor">
                <div className="statement-end-if-in-editor" />
              </div>
            </div>
            <div
              className="MsoNormal"
              style={{ lineHeight: "1.5", textAlign: "left" }}
            >
              <br />
            </div>
            <div
              className="MsoNormal"
              data-custom-class="heading_2"
              style={{ lineHeight: "1.5", textAlign: "left" }}
            >
              <strong>Restrictions</strong>
            </div>
            <div
              className="MsoNormal"
              style={{ lineHeight: "1.5", textAlign: "left" }}
            >
              <br />
            </div>
            <div
              className="MsoNormal"
              data-custom-class="body_text"
              style={{ lineHeight: "1.5", textAlign: "left" }}
            >
              The Parties agree that any arbitration shall be limited to the
              Dispute between the Parties individually. To the full extent
              permitted by law, (a) no arbitration shall be joined with any
              other proceeding; (b) there is no right or authority for any
              Dispute to be arbitrated on a class-action basis or to utilise
              <div className="else-block" /> class action procedures; and (c)
              there is no right or authority for any Dispute to be brought in a
              purported representative capacity on behalf of the general public
              or any other persons.
            </div>
            <div
              className="MsoNormal"
              style={{ lineHeight: "1.5", textAlign: "left" }}
            >
              <br />
            </div>
            <div
              className="MsoNormal"
              data-custom-class="heading_2"
              style={{ lineHeight: "1.5", textAlign: "left" }}
            >
              <strong>
                Exceptions to Informal Negotiations and Arbitration
              </strong>
              <div className="statement-end-if-in-editor" />
            </div>
            <div
              className="MsoNormal"
              style={{ lineHeight: "1.5", textAlign: "left" }}
            >
              <br />
            </div>
            <div
              className="MsoNormal"
              data-custom-class="body_text"
              style={{ lineHeight: "1.5", textAlign: "left" }}
            >
              The Parties agree that the following Disputes are not subject to
              the above provisions concerning informal negotiations binding
              arbitration: (a) any Disputes seeking to enforce or protect, or
              concerning the validity of, any of the intellectual property
              rights of a Party; (b) any Dispute related to, or arising from,
              allegations of theft, piracy, invasion of privacy, or unauthorised
              <div className="else-block" /> use; and (c) any claim for
              injunctive relief. If this provision is found to be illegal or
              unenforceable, then neither Party will elect to arbitrate any
              Dispute falling within that portion of this provision found to be
              illegal or unenforceable and such Dispute shall be decided by a
              court of competent jurisdiction within the courts listed for
              jurisdiction above, and the Parties agree to submit to the
              personal jurisdiction of that court.
              <div className="statement-end-if-in-editor" />
            </div>
            <div
              className="MsoNormal"
              style={{ lineHeight: "1.5", textAlign: "left" }}
            >
              <div className="statement-end-if-in-editor">
                <div className="statement-end-if-in-editor" />
              </div>
            </div>
            <div
              className="MsoNormal"
              style={{ lineHeight: "1.5", textAlign: "left" }}
            >
              <br />
            </div>
            <div
              className="MsoNormal"
              data-custom-class="heading_1"
              id="corrections"
              style={{ lineHeight: "1.5", textAlign: "left" }}
            >
              <strong>
                <span style={{ fontSize: 19 }}>
                  <strong>
                    <span style={{ lineHeight: "24.5333px", fontSize: 19 }}>
                      <strong>
                        <span
                          style={{
                            lineHeight: "115%",
                            fontFamily: "Arial",
                            fontSize: 19,
                          }}
                        >
                          <strong>
                            <span
                              style={{
                                lineHeight: "115%",
                                fontFamily: "Arial",
                                fontSize: 19,
                              }}
                            >
                              21.
                            </span>
                          </strong>
                        </span>
                      </strong>
                    </span>
                    &nbsp;
                  </strong>
                  CORRECTIONS
                </span>
              </strong>
            </div>
            <div
              className="MsoNormal"
              style={{ lineHeight: "1.5", textAlign: "left" }}
            >
              <br />
            </div>
            <div
              className="MsoNormal"
              data-custom-class="body_text"
              style={{ lineHeight: "1.5", textAlign: "left" }}
            >
              There may be information on the Services that contains
              typographical errors, inaccuracies, or omissions, including
              descriptions, pricing, availability, and various other
              information. We reserve the right to correct any errors,
              inaccuracies, or omissions and to change or update the information
              on the Services at any time, without prior notice.
            </div>
            <div
              className="MsoNormal"
              style={{ lineHeight: "1.5", textAlign: "left" }}
            >
              <br />
            </div>
            <div
              className="MsoNormal"
              data-custom-class="heading_1"
              id="disclaimer"
              style={{ lineHeight: "1.5", textAlign: "left" }}
            >
              <span style={{ fontSize: 19, color: "rgb(0, 0, 0)" }}>
                <strong>
                  <span style={{ lineHeight: "24.5333px", fontSize: 19 }}>
                    <strong>
                      <span
                        style={{
                          lineHeight: "115%",
                          fontFamily: "Arial",
                          fontSize: 19,
                        }}
                      >
                        <strong>
                          <span
                            style={{
                              lineHeight: "115%",
                              fontFamily: "Arial",
                              fontSize: 19,
                            }}
                          >
                            22.
                          </span>
                        </strong>
                      </span>
                    </strong>
                  </span>{" "}
                  DISCLAIMER
                </strong>
              </span>
            </div>
            <div
              className="MsoNormal"
              style={{ lineHeight: "1.5", textAlign: "left" }}
            >
              <br />
            </div>
            <div
              className="MsoNormal"
              data-custom-class="body_text"
              style={{ lineHeight: "1.5", textAlign: "left" }}
            >
              <span
                style={{
                  fontSize: "11.0pt",
                  lineHeight: "115%",
                  fontFamily: "Arial",
                  color: "#FFFEF9",
                }}
              >
                THE SERVICES ARE PROVIDED ON AN AS-IS AND AS-AVAILABLE BASIS.
                YOU AGREE THAT YOUR USE OF THE SERVICES WILL BE AT YOUR SOLE
                RISK. TO THE FULLEST EXTENT PERMITTED BY LAW, WE DISCLAIM ALL
                WARRANTIES, EXPRESS OR IMPLIED, IN CONNECTION WITH THE SERVICES
                AND YOUR USE THEREOF, INCLUDING, WITHOUT LIMITATION, THE IMPLIED
                WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE,
                AND NON-INFRINGEMENT. WE MAKE NO WARRANTIES OR REPRESENTATIONS
                ABOUT THE ACCURACY OR COMPLETENESS OF THE SERVICES&apos; CONTENT
                OR THE CONTENT OF ANY WEBSITES OR MOBILE APPLICATIONS LINKED TO
                THE SERVICES AND WE WILL ASSUME NO LIABILITY OR RESPONSIBILITY
                FOR ANY (1) ERRORS, MISTAKES, OR INACCURACIES OF CONTENT AND
                MATERIALS, (2) PERSONAL INJURY OR PROPERTY DAMAGE, OF ANY NATURE
                WHATSOEVER, RESULTING FROM YOUR ACCESS TO AND USE OF THE
                SERVICES, (3) ANY UNAUTHORISED
                <div className="else-block" /> ACCESS TO OR USE OF OUR SECURE
                SERVERS AND/OR ANY AND ALL PERSONAL INFORMATION AND/OR FINANCIAL
                INFORMATION STORED THEREIN, (4) ANY INTERRUPTION OR CESSATION OF
                TRANSMISSION TO OR FROM THE SERVICES, (5) ANY BUGS, VIRUSES,
                TROJAN HORSES, OR THE LIKE WHICH MAY BE TRANSMITTED TO OR
                THROUGH THE SERVICES BY ANY THIRD PARTY, AND/OR (6) ANY ERRORS
                OR OMISSIONS IN ANY CONTENT AND MATERIALS OR FOR ANY LOSS OR
                DAMAGE OF ANY KIND INCURRED AS A RESULT OF THE USE OF ANY
                CONTENT POSTED, TRANSMITTED, OR OTHERWISE MADE AVAILABLE VIA THE
                SERVICES. WE DO NOT WARRANT, ENDORSE, GUARANTEE, OR ASSUME
                RESPONSIBILITY FOR ANY PRODUCT OR SERVICE ADVERTISED OR OFFERED
                BY A THIRD PARTY THROUGH THE SERVICES, ANY HYPERLINKED WEBSITE,
                OR ANY WEBSITE OR MOBILE APPLICATION FEATURED IN ANY BANNER OR
                OTHER ADVERTISING, AND WE WILL NOT BE A PARTY TO OR IN ANY WAY
                BE RESPONSIBLE FOR MONITORING ANY TRANSACTION BETWEEN YOU AND
                ANY THIRD-PARTY PROVIDERS OF PRODUCTS OR SERVICES. AS WITH THE
                PURCHASE OF A PRODUCT OR SERVICE THROUGH ANY MEDIUM OR IN ANY
                ENVIRONMENT, YOU SHOULD USE YOUR BEST JUDGEMENT
                <div className="else-block" /> AND EXERCISE CAUTION WHERE
                APPROPRIATE.
              </span>
            </div>
            <div
              className="MsoNormal"
              style={{ lineHeight: "1.5", textAlign: "left" }}
            >
              <br />
            </div>
            <div
              className="MsoNormal"
              data-custom-class="heading_1"
              id="liability"
              style={{ lineHeight: "1.5", textAlign: "left" }}
            >
              <strong>
                <span
                  style={{
                    lineHeight: "115%",
                    fontFamily: "Arial",
                    fontSize: 19,
                  }}
                >
                  <strong>
                    <span style={{ lineHeight: "24.5333px", fontSize: 19 }}>
                      <strong>
                        <span
                          style={{
                            lineHeight: "115%",
                            fontFamily: "Arial",
                            fontSize: 19,
                          }}
                        >
                          <strong>
                            <span
                              style={{
                                lineHeight: "115%",
                                fontFamily: "Arial",
                                fontSize: 19,
                              }}
                            >
                              23.
                            </span>
                          </strong>
                        </span>
                      </strong>
                    </span>
                    &nbsp;
                  </strong>
                  LIMITATIONS OF LIABILITY
                </span>
              </strong>
            </div>
            <div
              className="MsoNormal"
              style={{ lineHeight: "1.5", textAlign: "left" }}
            >
              <br />
            </div>
            <div
              className="MsoNormal"
              style={{ lineHeight: "1.5", textAlign: "left" }}
            >
              <span
                style={{
                  fontSize: "11.0pt",
                  lineHeight: "115%",
                  fontFamily: "Arial",
                  color: "#FFFEF9",
                }}
              >
                <span data-custom-class="body_text">
                  IN NO EVENT WILL WE OR OUR DIRECTORS, EMPLOYEES, OR AGENTS BE
                  LIABLE TO YOU OR ANY THIRD PARTY FOR ANY DIRECT, INDIRECT,
                  CONSEQUENTIAL, EXEMPLARY, INCIDENTAL, SPECIAL, OR PUNITIVE
                  DAMAGES, INCLUDING LOST PROFIT, LOST REVENUE, LOSS OF DATA, OR
                  OTHER DAMAGES ARISING FROM YOUR USE OF THE SERVICES, EVEN IF
                  WE HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
                </span>{" "}
                <div
                  className="block-container if"
                  data-type="if"
                  id="3c3071ce-c603-4812-b8ca-ac40b91b9943"
                >
                  <span data-custom-class="body_text">
                    <div data-type="conditional-block">
                      <div
                        className="block-component"
                        data-record-question-key="limitations_liability_option"
                        data-type="statement"
                      />
                      <div data-type="body">
                        NOTWITHSTANDING ANYTHING TO THE CONTRARY CONTAINED
                        HEREIN, OUR LIABILITY TO YOU FOR ANY CAUSE WHATSOEVER
                        AND REGARDLESS OF THE FORM OF THE ACTION, WILL AT ALL
                        TIMES BE LIMITED TO{" "}
                        <div
                          className="block-container if"
                          data-type="if"
                          id="73189d93-ed3a-d597-3efc-15956fa8e04e"
                        >
                          <div data-type="conditional-block">
                            <div
                              className="block-component"
                              data-record-question-key="limitations_liability_option"
                              data-type="statement"
                            />
                            <div data-type="body">
                              THE AMOUNT PAID, IF ANY, BY YOU TO US
                              <div
                                className="block-container if"
                                data-type="if"
                                id="19e172cb-4ccf-1904-7c06-4251800ba748"
                              >
                                <div data-type="conditional-block">
                                  <div
                                    className="block-component"
                                    data-record-question-key="limilation_liability_time_option"
                                    data-type="statement"
                                  >
                                    &nbsp;
                                  </div>
                                  <div data-type="body">
                                    <span
                                      style={{
                                        fontSize: "11pt",
                                        color: "#FFFEF9",
                                        textTransform: "uppercase",
                                      }}
                                    >
                                      DURING THE{" "}
                                      <div
                                        className="block-container question question-in-editor"
                                        data-id="5dd68d46-ed6f-61c7-cd66-6b3f424b6bdd"
                                        data-type="question"
                                      >
                                        two (2)
                                      </div>{" "}
                                      mONTH PERIOD PRIOR TO ANY CAUSE OF ACTION
                                      ARISING
                                    </span>
                                  </div>
                                </div>
                                <div
                                  className="statement-end-if-in-editor"
                                  data-type="close"
                                />
                              </div>
                            </div>
                          </div>
                          <div data-type="conditional-block">
                            <div
                              className="block-component"
                              data-record-question-key="limitations_liability_option"
                              data-type="statement"
                            >
                              .
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </span>
                </div>
                &nbsp;
              </span>
              <span data-custom-class="body_text">
                CERTAIN US STATE LAWS AND INTERNATIONAL LAWS DO NOT ALLOW
                LIMITATIONS ON IMPLIED WARRANTIES OR THE EXCLUSION OR LIMITATION
                OF CERTAIN DAMAGES. IF THESE LAWS APPLY TO YOU, SOME OR ALL OF
                THE ABOVE DISCLAIMERS OR LIMITATIONS MAY NOT APPLY TO YOU, AND
                YOU MAY HAVE ADDITIONAL RIGHTS.
              </span>
              <div className="statement-end-if-in-editor" data-type="close">
                <span data-custom-class="body_text" />
              </div>
            </div>
            <div
              className="MsoNormal"
              style={{ lineHeight: "1.5", textAlign: "left" }}
            >
              <br />
            </div>
            <div
              className="MsoNormal"
              data-custom-class="heading_1"
              id="indemnification"
              style={{ lineHeight: "1.5", textAlign: "left" }}
            >
              <strong>
                <span
                  style={{
                    lineHeight: "115%",
                    fontFamily: "Arial",
                    fontSize: 19,
                  }}
                >
                  <strong>
                    <span style={{ lineHeight: "24.5333px", fontSize: 19 }}>
                      <strong>
                        <span
                          style={{
                            lineHeight: "115%",
                            fontFamily: "Arial",
                            fontSize: 19,
                          }}
                        >
                          <strong>
                            <span
                              style={{
                                lineHeight: "115%",
                                fontFamily: "Arial",
                                fontSize: 19,
                              }}
                            >
                              24.
                            </span>
                          </strong>
                        </span>
                      </strong>
                    </span>
                    &nbsp;
                  </strong>
                  INDEMNIFICATION
                </span>
              </strong>
            </div>
            <div
              className="MsoNormal"
              style={{ lineHeight: "1.5", textAlign: "left" }}
            >
              <br />
            </div>
            <div
              className="MsoNormal"
              data-custom-class="body_text"
              style={{ lineHeight: "1.5", textAlign: "left" }}
            >
              <span
                style={{
                  fontSize: "11.0pt",
                  lineHeight: "115%",
                  fontFamily: "Arial",
                  color: "#FFFEF9",
                }}
              >
                You agree to defend, indemnify, and hold us harmless, including
                our subsidiaries, affiliates, and all of our respective
                officers, agents, partners, and employees, from and against any
                loss, damage, liability, claim, or demand, including reasonable
                attorneys’ fees and expenses, made by any third party due to or
                arising out of:{" "}
                <div
                  className="block-container if"
                  data-type="if"
                  id="475fffa5-05ca-def8-ac88-f426b238903c"
                >
                  <div data-type="conditional-block">
                    <div
                      className="block-component"
                      data-record-question-key="user_post_content_option"
                      data-type="statement"
                    />
                    <div data-type="body">(1) your Contributions;&nbsp;</div>
                  </div>
                  <div
                    className="statement-end-if-in-editor"
                    data-type="close"
                  />
                </div>
                (<span style={{ fontSize: "14.6667px" }}>2</span>) use of the
                Services; (<span style={{ fontSize: "14.6667px" }}>3</span>)
                breach of these Legal Terms; (
                <span style={{ fontSize: "14.6667px" }}>4</span>) any breach of
                your representations and warranties set forth in these Legal
                Terms; (<span style={{ fontSize: "14.6667px" }}>5</span>) your
                violation of the rights of a third party, including but not
                limited to intellectual property rights; or (
                <span style={{ fontSize: "14.6667px" }}>6</span>) any overt
                harmful act toward any other user of the Services with whom you
                connected via the Services. Notwithstanding the foregoing, we
                reserve the right, at your expense, to assume the exclusive{" "}
                defence
                <div className="else-block" /> and control of any matter for
                which you are required to indemnify us, and you agree to
                cooperate, at your expense, with our defence
                <div className="else-block" /> of such claims. We will use
                reasonable efforts to notify you of any such claim, action, or
                proceeding which is subject to this indemnification upon
                becoming aware of it.
              </span>
            </div>
            <div
              className="MsoNormal"
              style={{ lineHeight: "1.5", textAlign: "left" }}
            >
              <br />
            </div>
            <div
              className="MsoNormal"
              data-custom-class="heading_1"
              id="userdata"
              style={{ lineHeight: "1.5", textAlign: "left" }}
            >
              <strong>
                <span
                  style={{
                    lineHeight: "115%",
                    fontFamily: "Arial",
                    fontSize: 19,
                  }}
                >
                  <strong>
                    <span style={{ lineHeight: "24.5333px", fontSize: 19 }}>
                      <strong>
                        <span
                          style={{
                            lineHeight: "115%",
                            fontFamily: "Arial",
                            fontSize: 19,
                          }}
                        >
                          <strong>
                            <span
                              style={{
                                lineHeight: "115%",
                                fontFamily: "Arial",
                                fontSize: 19,
                              }}
                            >
                              25.
                            </span>
                          </strong>
                        </span>
                      </strong>
                    </span>
                    &nbsp;
                  </strong>
                  USER DATA
                </span>
              </strong>
            </div>
            <div
              className="MsoNormal"
              style={{ lineHeight: "1.5", textAlign: "left" }}
            >
              <br />
            </div>
            <div
              className="MsoNormal"
              data-custom-class="body_text"
              style={{ lineHeight: "1.5", textAlign: "left" }}
            >
              <span
                style={{
                  fontSize: "11.0pt",
                  lineHeight: "115%",
                  fontFamily: "Arial",
                  color: "#FFFEF9",
                }}
              >
                We will maintain certain data that you transmit to the Services
                for the purpose of managing the performance of the Services, as
                well as data relating to your use of the Services. Although we
                perform regular routine backups of data, you are solely
                responsible for all data that you transmit or that relates to
                any activity you have undertaken using the Services. You agree
                that we shall have no liability to you for any loss or
                corruption of any such data, and you hereby waive any right of
                action against us arising from any such loss or corruption of
                such data.
              </span>
            </div>
            <div
              className="MsoNormal"
              style={{ lineHeight: "1.5", textAlign: "left" }}
            >
              <br />
            </div>
            <div
              className="MsoNormal"
              data-custom-class="heading_1"
              id="electronic"
              style={{ lineHeight: "1.5", textAlign: "left" }}
            >
              <strong>
                <span
                  style={{
                    lineHeight: "115%",
                    fontFamily: "Arial",
                    fontSize: 19,
                  }}
                >
                  <strong>
                    <span style={{ lineHeight: "24.5333px", fontSize: 19 }}>
                      <strong>
                        <span
                          style={{
                            lineHeight: "115%",
                            fontFamily: "Arial",
                            fontSize: 19,
                          }}
                        >
                          <strong>
                            <span
                              style={{
                                lineHeight: "115%",
                                fontFamily: "Arial",
                                fontSize: 19,
                              }}
                            >
                              26.
                            </span>
                          </strong>
                        </span>
                      </strong>
                    </span>
                    &nbsp;
                  </strong>
                  ELECTRONIC COMMUNICATIONS, TRANSACTIONS, AND SIGNATURES
                </span>
              </strong>
            </div>
            <div
              className="MsoNormal"
              style={{ lineHeight: "1.5", textAlign: "left" }}
            >
              <br />
            </div>
            <div
              className="MsoNormal"
              data-custom-class="body_text"
              style={{ lineHeight: "1.5", textAlign: "left" }}
            >
              <span
                style={{
                  fontSize: "11.0pt",
                  lineHeight: "115%",
                  fontFamily: "Arial",
                  color: "#FFFEF9",
                }}
              >
                Visiting the Services, sending us emails, and completing online
                forms constitute electronic communications. You consent to
                receive electronic communications, and you agree that all
                agreements, notices, disclosures, and other communications we
                provide to you electronically, via email and on the Services,
                satisfy any legal requirement that such communication be in
                writing. YOU HEREBY AGREE TO THE USE OF ELECTRONIC SIGNATURES,
                CONTRACTS, ORDERS, AND OTHER RECORDS, AND TO ELECTRONIC DELIVERY
                OF NOTICES, POLICIES, AND RECORDS OF TRANSACTIONS INITIATED OR
                COMPLETED BY US OR VIA THE SERVICES. You hereby waive any rights
                or requirements under any statutes, regulations, rules,
                ordinances, or other laws in any jurisdiction which require an
                original signature or delivery or retention of non-electronic
                records, or to payments or the granting of credits by any means
                other than electronic means.
              </span>
            </div>
            <div
              className="MsoNormal"
              style={{ lineHeight: "1.5", textAlign: "left" }}
            >
              <br />
            </div>
            <div
              className="MsoNormal"
              style={{ lineHeight: "1.5", textAlign: "left" }}
            ></div>
            <div
              className="MsoNormal"
              data-custom-class="heading_1"
              id="misc"
              style={{ lineHeight: "1.5", textAlign: "left" }}
            >
              <strong>
                <span
                  style={{
                    lineHeight: "115%",
                    fontFamily: "Arial",
                    fontSize: 19,
                  }}
                >
                  <strong>
                    <span style={{ lineHeight: "24.5333px", fontSize: 19 }}>
                      <strong>
                        <span
                          style={{
                            lineHeight: "115%",
                            fontFamily: "Arial",
                            fontSize: 19,
                          }}
                        >
                          <strong>
                            <span
                              style={{
                                lineHeight: "115%",
                                fontFamily: "Arial",
                                fontSize: 19,
                              }}
                            >
                              27.
                            </span>
                          </strong>
                        </span>
                      </strong>
                    </span>
                    &nbsp;
                  </strong>
                  MISCELLANEOUS
                </span>
              </strong>
            </div>
            <div
              className="MsoNormal"
              style={{ lineHeight: "1.5", textAlign: "left" }}
            >
              <br />
            </div>
            <div
              className="MsoNormal"
              data-custom-class="body_text"
              style={{ lineHeight: "1.5", textAlign: "left" }}
            >
              <span
                style={{
                  fontSize: "11.0pt",
                  lineHeight: "115%",
                  fontFamily: "Arial",
                  color: "#FFFEF9",
                }}
              >
                These Legal Terms and any policies or operating rules posted by
                us on the Services or in respect to the Services constitute the
                entire agreement and understanding between you and us. Our
                failure to exercise or enforce any right or provision of these
                Legal Terms shall not operate as a waiver of such right or
                provision. These Legal Terms operate to the fullest extent
                permissible by law. We may assign any or all of our rights and
                obligations to others at any time. We shall not be responsible
                or liable for any loss, damage, delay, or failure to act caused
                by any cause beyond our reasonable control. If any provision or
                part of a provision of these Legal Terms is determined to be
                unlawful, void, or unenforceable, that provision or part of the
                provision is deemed severable from these Legal Terms and does
                not affect the validity and enforceability of any remaining
                provisions. There is no joint venture, partnership, employment
                or agency relationship created between you and us as a result of
                these Legal Terms or use of the Services. You agree that these
                Legal Terms will not be construed against us by virtue of having
                drafted them. You hereby waive any and all defences
                <div className="else-block" /> you may have based on the
                electronic form of these Legal Terms and the lack of signing by
                the parties hereto to execute these Legal Terms.
              </span>
            </div>
            <div
              className="MsoNormal"
              style={{ lineHeight: "1.5", textAlign: "left" }}
            >
              <div className="block-component">
                <span style={{ fontSize: 15 }} />
              </div>
            </div>
            <div
              className="MsoNormal"
              style={{ lineHeight: "1.5", textAlign: "left" }}
            >
              <br />
            </div>
            <div
              className="MsoNormal"
              data-custom-class="heading_1"
              id="contact"
              style={{ lineHeight: "1.5", textAlign: "left" }}
            >
              <strong>
                <span style={{ lineHeight: "115%", fontFamily: "Arial" }}>
                  <span style={{ fontSize: 19 }}>
                    <strong>
                      <span style={{ lineHeight: "24.5333px", fontSize: 19 }}>
                        <strong>
                          <span
                            style={{
                              lineHeight: "115%",
                              fontFamily: "Arial",
                              fontSize: 19,
                            }}
                          >
                            <strong>
                              <span
                                style={{
                                  lineHeight: "115%",
                                  fontFamily: "Arial",
                                  fontSize: 19,
                                }}
                              >
                                28.
                              </span>
                            </strong>
                          </span>
                        </strong>
                      </span>
                      &nbsp;
                    </strong>
                    CONTACT US
                  </span>
                </span>
              </strong>
            </div>
            <div
              className="MsoNormal"
              style={{ lineHeight: "1.5", textAlign: "left" }}
            >
              <br />
            </div>
            <div
              className="MsoNormal"
              data-custom-class="body_text"
              style={{ lineHeight: "1.5", textAlign: "left" }}
            >
              <span
                style={{
                  fontSize: "11.0pt",
                  lineHeight: "115%",
                  fontFamily: "Arial",
                  color: "#FFFEF9",
                }}
              >
                In order to resolve a complaint regarding the Services or to
                receive further information regarding use of the Services,
                please contact us at:
              </span>
            </div>
            <div
              className="MsoNormal"
              style={{ lineHeight: "1.5", textAlign: "left" }}
            >
              <br />
            </div>
            <div
              className="MsoNormal"
              data-custom-class="body_text"
              style={{ lineHeight: "1.5", textAlign: "left" }}
            >
              <span style={{ fontSize: 15 }}>
                <span style={{ color: "#FFFEF9" }}>
                  <div className="question">
                    <strong>Cinemachines Private Limited</strong>
                  </div>
                  <strong></strong>
                </span>
              </span>
            </div>
            <div
              className="MsoNormal"
              data-custom-class="body_text"
              style={{ lineHeight: "1.5", textAlign: "left" }}
            >
              <span style={{ fontSize: 15 }}>
                <span
                  style={{
                    lineHeight: "115%",
                    fontFamily: "Arial",
                    color: "#FFFEF9",
                  }}
                >
                  <div className="question">
                    <strong>
                      <div className="question">D39 Chomu House</div>
                    </strong>
                  </div>
                  <span
                    style={{
                      lineHeight: "115%",
                      fontFamily: "Arial",
                      color: "#FFFEF9",
                    }}
                  >
                    <div className="statement-end-if-in-editor" />
                  </span>
                </span>
              </span>
            </div>
            <div
              className="MsoNormal"
              data-custom-class="body_text"
              style={{ lineHeight: "1.5", textAlign: "left" }}
            >
              <span style={{ fontSize: 15 }}>
                <span
                  style={{
                    lineHeight: "115%",
                    fontFamily: "Arial",
                    color: "#FFFEF9",
                  }}
                >
                  <div className="question">
                    <strong>CScheme</strong>
                  </div>
                </span>
              </span>
            </div>
            <div
              className="MsoNormal"
              data-custom-class="body_text"
              style={{ lineHeight: "1.5", textAlign: "left" }}
            >
              <span style={{ fontSize: 15 }}>
                <strong>
                  <span style={{ color: "#FFFEF9" }}>
                    <div className="question">Jaipur</div>
                    <div className="question">Rajasthan</div>

                    <div className="question">302001</div>
                  </span>
                </strong>
                <strong>
                  <span style={{ color: "#FFFEF9" }}></span>
                </strong>
              </span>
            </div>
            <div
              className="MsoNormal"
              data-custom-class="body_text"
              style={{ lineHeight: "1.5", textAlign: "left" }}
            >
              <div className="block-component">
                <strong />
              </div>
              <strong>
                <div className="question">India</div>
              </strong>
              <div className="statement-end-if-in-editor" />
              <div className="statement-end-if-in-editor" />
              <div className="statement-end-if-in-editor">
                <strong />
              </div>
            </div>
            <div
              className="MsoNormal"
              data-custom-class="body_text"
              style={{ lineHeight: "1.5", textAlign: "left" }}
            >
              <strong>
                <span
                  style={{
                    fontSize: "11.0pt",
                    lineHeight: "115%",
                    fontFamily: "Arial",
                    color: "#FFFEF9",
                  }}
                >
                  <strong></strong>
                </span>
              </strong>
            </div>
            <div
              className="MsoNormal"
              data-custom-class="body_text"
              style={{ lineHeight: "1.5", textAlign: "left" }}
            >
              <strong>
                <span
                  style={{
                    fontSize: "11.0pt",
                    lineHeight: "115%",
                    fontFamily: "Arial",
                    color: "#FFFEF9",
                  }}
                >
                  <strong></strong>
                </span>
              </strong>
            </div>
            <div
              className="MsoNormal"
              data-custom-class="body_text"
              style={{ lineHeight: "1.5", textAlign: "left" }}
            >
              <strong>
                <span
                  style={{
                    fontSize: "11.0pt",
                    lineHeight: "115%",
                    fontFamily: "Arial",
                    color: "#FFFEF9",
                  }}
                >
                  <strong>
                    <div className="question">support@cinemachines.com</div>
                  </strong>
                </span>
              </strong>
            </div>
          </div>
        </div>
        <style
          dangerouslySetInnerHTML={{
            __html:
              "\n      ul {\n        list-style-type: square;\n      }\n      ul > li > ul {\n        list-style-type: circle;\n      }\n      ul > li > ul > li > ul {\n        list-style-type: square;\n      }\n      ol li {\n        font-family: Arial ;\n      }\n    ",
          }}
        />
      </>
    </div>
  );
}
