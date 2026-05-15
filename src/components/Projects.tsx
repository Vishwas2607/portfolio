import { AccordionProvider } from "../accordion/accordionContext";
import AccordionHeader from "../accordion/accordionHeader";
import AccordionItemIdProvider from "../accordion/accordionItemIdContext";
import AccordionPanel from "../accordion/accordionPanel";
import FramerWrapper from "./FramerWrapper";
import { motion } from "framer-motion";
import { item } from "../utils/constants";

export default function Projects(){
    return (
        <FramerWrapper id="projects">
            <AccordionProvider allowMultiple={false}>
              <motion.h2 variants={item} className="headings">Featured Projects</motion.h2>

              <AccordionItemIdProvider id="project1">
                <AccordionHeader title="PulseCheck" miniInfo="A production-oriented distributed uptime monitoring system inspired by modern observability tools like Pingdom and Datadog." techStack="React · TypeScript · Node.js · Express · MongoDB · Docker" liveDemo="https://pulse-check-m0fs.onrender.com" github="https://github.com/Vishwas2607/pulse-check-mern.git"/>
                <AccordionPanel >
                  <div className="flex flex-col gap-6 sticky">
                      <img src="pulse-check-monitors.png" className="screenshots"/>
                      <img src="pulse-check-analytics.png" className="screenshots"/>
                  </div>

                  <div className="flex flex-col gap-6 mt-2">
                      <div >
                          <h4 className="primary-text text-lg">Overview</h4>
                          <p className="body-text secondary-text">PulseCheck continuously monitors service availability, detects failures in real time, and manages incident lifecycles using a scalable, queue-driven architecture.</p>
                      </div>

                      <div>
                          <h4 className="primary-text text-lg">Key Features</h4>
                          <ul className="body-text secondary-text">
                            <li>● Asynchronous architecture using Redis + BullMQ for high scalability</li>
                            <li>● Idempotent & retry-safe workers with exponential backoff</li>
                            <li>● Real-time analytics via incremental aggregation (~90% faster queries)</li>
                            <li>● Secure JWT-based authentication system</li>
                            <li>● Optimized MongoDB indexing & query design (ESR, partial indexes)</li>
                            <li>● Designed with production trade-offs & failure scenarios in mind</li>
                          </ul>
                      </div>

                      <div >
                          <h4 className="primary-text text-lg">Engineering Decisions</h4>
                          <ul className="body-text secondary-text">
                            <li>● Optimized database performance using compound indexing (ESR pattern), partial indexes, covered queries, and O(1) cursor-based pagination</li>
                            <li>● Reliable data handling with idempotent writes and concurrency-safe system design</li>
                            <li>● Fault-tolerant processing with dead letter queue (DLQ) support for failed operations</li>
                            <li>● Robust retry mechanism using exponential backoff, triggered only for 5xx server errors and network failures.</li>
                          </ul>
                      </div>

                      <div>
                          <h4 className="primary-text text-lg">What I Learned</h4>
                          <ul className="body-text secondary-text">
                            <li>● Learned advanced database optimization techniques including ESR-based indexing, partial/covered indexes, aggregation strategies, and understanding indexing tradeoffs</li>
                            <li>● Gained hands-on experience with background job processing using workers, Redis, and BullMQ, along with concepts like idempotency and concurrency-safe system design</li>
                            <li>● Improved DevOps and deployment knowledge by working with Docker and setting up CI/CD pipelines that trigger builds only after successful tests</li>
                          </ul>
                      </div>

                      <div>
                        <h4 className="primary-text text-lg">Architecture</h4>
                        <p className="body-text secondary-text">Client → API → Queue → Worker → MongoDB</p>
                      </div>
                  </div>
                </AccordionPanel>
              </AccordionItemIdProvider>

              <AccordionItemIdProvider id="project2">
                <AccordionHeader title="FitnessWiki" miniInfo="Role-based fitness planning platform focusing on backend architecture, authorization, and clean separation of concerns." techStack="React · TypeScript · Node.js · Express · MongoDB · JWT · Zod" liveDemo="https://fitness-wiki-frontend.onrender.com/" github="https://github.com/Vishwas2607/fitness-wiki-mern.git"/>
                <AccordionPanel >
                  <div className="flex flex-col gap-6 sticky">
                      <img src="fitness-wiki-home.png" className="screenshots"/>
                      <img src="fitness-wiki-dashboard.png" className="screenshots"/>
                  </div>

                  <div className="flex flex-col gap-6 mt-2">
                      <div >
                          <h4 className="primary-text text-lg">Overview</h4>
                          <p className="body-text secondary-text">A full-stack MERN fitness planner web application that helps users generate, preview, and manage structured workout plans based on their fitness goals, experience level, and available equipment.</p>
                      </div>

                      <div>
                          <h4 className="primary-text text-lg">Key Features</h4>
                          <ul className="body-text secondary-text">
                            <li>● Secure authentication system with JWT, access/refresh token rotation, HTTP-only cookies, and persistent login via /auth/me</li>
                            <li>● Advanced access control using RBAC, protected routes, and single-session enforcement for better security</li>
                            <li>● Clean authentication management with secure logout flow and TypeScript enum-based auth state handling</li>
                            <li>● Personalized fitness features including recommended and custom-generated workout plans with preview before saving</li>
                            <li>● Smart workout customization using goal-based selection, dynamic exercise filtering, and equipment-aware generation</li>
                            <li>● Workout management system with saved plans support and an admin-managed global exercise library</li>
                          </ul>
                      </div>

                      <div >
                          <h4 className="primary-text text-lg">Engineering Decisions</h4>
                          <ul className="body-text secondary-text">
                            <li>● Cookies used instead of localStorage to prevent XSS vulnerabilities</li>
                            <li>● Backend treated as the single source of truth for auth state</li>
                            <li>● Auth flicker solved using loading / authenticated / unauthenticated state model</li>
                            <li>● Layered backend architecture for maintainability</li>
                          </ul>
                      </div>

                      <div>
                          <h4 className="primary-text text-lg">What I Learned</h4>
                          <ul className="body-text secondary-text">
                            <li>● Clean separation of concerns</li>
                            <li>● Future-ready structure for testing and scaling</li>
                            <li>● Secure session handling with backend verification</li>
                          </ul>
                      </div>

                      <div>
                        <h4 className="primary-text text-lg">Architecture</h4>
                        <p className="body-text secondary-text">Model → Repository → Service → Controller → Routes</p>
                      </div>
                  </div>
                </AccordionPanel>
              </AccordionItemIdProvider>

              <AccordionItemIdProvider id="project3">
                <AccordionHeader title="FilmBox" miniInfo="Frontend-focused application showcasing API integration, infinite scrolling, caching, and accessibility best practices." techStack="React · TypeScript · React Query · Tailwind CSS" liveDemo="https://film-box-react.vercel.app/" github="https://github.com/Vishwas2607/film-box-react.git"/>
                <AccordionPanel>
                  <div className="flex flex-col gap-6 sticky">
                      <img src="/film-box-hero.png" className="screenshots"/>
                      <img src="/film-box-search.png" className="screenshots"/>
                  </div>

                  <div className="flex flex-col gap-6 mt-2">
                      <div>
                          <h4 className="primary-text text-lg">Overview</h4>
                          <p className="body-text secondary-text">A frontend application built around real-world API usage with emphasis on performance, accessibility, and UI state management.</p>
                      </div>

                      <div>
                          <h4 className="primary-text text-lg">Key Features</h4>
                          <ul className="body-text secondary-text">
                            <li>● Infinite scroll with React Query</li>
                            <li>● API prefetching and caching</li>
                            <li>● Accessible UI using ARIA attributes</li>
                            <li>● Lazy-loaded images for performance</li>
                            <li>● Reusable UI components (modals, toasts)</li>
                          </ul>
                      </div>

                      <div >
                          <h4 className="primary-text text-lg">Refractor Note</h4>
                          <p className="body-text secondary-text">This project is currently being refactored to improve folder structure, separation of concerns, and custom hooks to demonstrate code evolution.</p>
                      </div>
                  </div>
                </AccordionPanel>
              </AccordionItemIdProvider>
            </AccordionProvider>
        </FramerWrapper>
    )
}