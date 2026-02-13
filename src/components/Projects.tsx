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
                <AccordionHeader title="Fitness Planner (WIP)" miniInfo="Role-based fitness planning platform focusing on backend architecture, authorization, and clean separation of concerns." techStack="React · TypeScript · Node.js · Express · MongoDB · JWT · Zod" liveDemo="#" github="#"/>
                <AccordionPanel >
                  <div className="flex flex-col gap-6 sticky">
                      <img src="#" className="screenshots"/>
                      <img src="#" className="screenshots"/>
                  </div>

                  <div className="flex flex-col gap-6 mt-2">
                      <div >
                          <h4 className="primary-text text-lg">Overview</h4>
                          <p className="body-text secondary-text">A fitness planning system built to demonstrate scalable backend architecture, role-based authorization, and structured service layers.</p>
                      </div>

                      <div>
                          <h4 className="primary-text text-lg">Key Features</h4>
                          <ul className="body-text secondary-text">
                            <li>● Admin and user role-based access control</li>
                            <li>● Centralized authentication & authorization middleware</li>
                            <li>● Repository and service pattern for business logic isolation</li>
                            <li>● Zod validation on both frontend and backend</li>
                            <li>● Backend-verified authentication (/auth/me)</li>
                            <li>● Refresh token rotation (single-device login)</li>
                            <li>● Protected route layout with loading and auth states</li>
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

              <AccordionItemIdProvider id="project2">
                <AccordionHeader title="Career Dasboard" miniInfo="Secure MERN application for tracking job applications with analytics, and robust authentication." techStack="React · TypeScript · Node.js · Express · MongoDB · JWT · Zod" liveDemo="https://career-dashboard-mern.vercel.app/" github="https://github.com/Vishwas2607/career-dashboard-mern.git"/>
                <AccordionPanel>
                  <div className="flex flex-col gap-6 sticky">
                      <img  src="/public/career-dashboard-home.png" className="screenshots"/>
                      <img  src="/public/career-dashboard-analytics.png" className="screenshots"/>
                  </div>

                  <div className="flex flex-col gap-6 mt-2">
                      <div >
                          <h4 className="primary-text text-lg">Overview</h4>
                          <p className="body-text secondary-text">A full-stack application designed to help users track job applications with secure authentication, analytics dashboards, and scalable backend architecture.</p>
                      </div>

                      <div >
                          <h4 className="primary-text text-lg">Key Features</h4>
                          <ul className="body-text secondary-text">
                            <li>● JWT authentication with HTTP-only cookies</li>
                            <li>● Refresh token rotation (single-device login)</li>
                            <li>● Application status analytics with charts</li>
                            <li>● Rate-limited APIs and security middleware</li>
                          </ul>
                      </div>

                      <div>
                          <h4 className="primary-text text-lg">Engineering Decisions</h4>
                          <ul className="body-text secondary-text">
                            <li>● Cookies used instead of localStorage to prevent XSS vulnerabilities</li>
                            <li>● Future-ready structure for testing and scaling</li>
                          </ul>
                      </div>
                  </div>
                  </AccordionPanel>
              </AccordionItemIdProvider>

              <AccordionItemIdProvider id="project3">
                <AccordionHeader title="FilmBox" miniInfo="Frontend-focused application showcasing API integration, infinite scrolling, caching, and accessibility best practices." techStack="React · TypeScript · React Query · Tailwind CSS" liveDemo="https://film-box-react.vercel.app/" github="https://github.com/Vishwas2607/film-box-react.git"/>
                <AccordionPanel>
                  <div className="flex flex-col gap-6 sticky">
                      <img src="/public/film-box-hero.png" className="screenshots"/>
                      <img src="/public/film-box-search.png" className="screenshots"/>
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