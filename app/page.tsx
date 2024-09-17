"use client";

import Image from "next/image";
import { Icon } from "@iconify/react";
import GradientDiv from "./components/GradientDiv";
import React from "react";

export default function Home() {
  return (
    <GradientDiv className="lg:flex min-h-screen lg:flex-row lg:justify-between gap-20 px-6 md:px-12 lg:px-20">
      <div className="lg:sticky lg:top-0 lg:flex lg:flex-1 lg:flex-col lg:justify-between lg:h-screen pb-20 pt-12 md:pt-20">
        <div className="mb-10 lg:mb-0">
          <div className="text-5xl font-bold">Won Kim</div>
          <div className="text-2xl mt-4">Student @ Tufts University</div>
          <div className="flex flex-row my-3 gap-2">
            <a
              className="transition-colors duration-300 text-[#929292] hover:text-[#BC6FF1]"
              href="https://www.github.com/wkim10"
              target="_blank"
              rel="noreferrer noopener"
              aria-label="GitHub Link"
            >
              <Icon icon="ion:logo-github" height={30} />
            </a>
            <a
              className="transition-colors duration-300 text-[#929292] hover:text-[#BC6FF1]"
              href="https://www.linkedin.com/in/won-kim1/"
              target="_blank"
              rel="noreferrer noopener"
              aria-label="LinkedIn Link"
            >
              <Icon icon="ion:logo-linkedin" height={30} />
            </a>
          </div>
          <div className="opacity-55 mb-3">
            Hi! My name is Won, and I am a senior studying Computer Science and
            Astrophysics at Tufts University. I was born in Korea but lived in
            Japan my entire life, recently moving to the U.S. to attend college.
            I was introduced to programming in high school and have fallen in
            love with it ever since.
          </div>
          <div className="opacity-55 mb-3">
            Most recently, I was an intern at Electronic Arts (EA) on the
            Employee Experience Engineering Team (EEX), undertaking projects to
            make the lives of EA employees smoother and easier. In general, I
            love building websites and applications, whether it be for
            non-profit organizations through my university’s JumboCode
            organization or for the general Tufts community through personal
            projects with other passionate developers.
          </div>
          <div className="opacity-55">
            Outside of work, you can catch me watching movies with my friends
            and family, trying new restaurants, or gathering Pikmin for a new
            adventure.
          </div>
        </div>
        <a
          className="transition hover:text-[#BC6FF1] w-fit underline"
          href="/Won_Kim_BS_CS_Astro_2025.pdf"
          target="_blank"
          rel="noreferrer noopener"
          aria-label="Resume PDF Link"
        >
          View Full Resume
        </a>
      </div>
      <div className="hidden lg:sticky lg:top-0 lg:flex lg:flex-col lg:items-center lg:justify-center h-screen py-20">
        <div className="h-screen w-px self-stretch bg-gradient-to-tr from-transparent via-neutral-500 to-transparent opacity-25 dark:via-neutral-400" />
      </div>
      <div className="flex-1 pb-12 md:pb-20 lg:py-20">
        <div className="text-xl font-bold mb-10">EXPERIENCE</div>
        <div className="flex flex-col gap-8">
          {/* SOFTWARE ENGINEER INTERN @ EA */}
          <div className="md:grid md:gap-x-7 lg:gap-x-4 md:grid-cols-10 group relative lg:transition-all lg:hover:!opacity-100 lg:group-hover:opacity-50">
            <div className="hidden absolute -inset-x-2 -inset-y-2 z-0 rounded-md transition motion-reduce:transition-none lg:block group-hover:bg-[rgba(134,93,255,0.1)] group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] group-hover:drop-shadow-lg" />
            <div className="opacity-55 text-sm pt-1 pb-2 md:pb-0 col-span-3 z-10">
              MAY 2024 — AUG 2024
            </div>
            <div className="col-span-7 z-10">
              <a
                className="inline-flex items-baseline font-medium text-slate-200 transition hover:text-[#BC6FF1] focus-visible:text-[#BC6FF1] group/link text-base"
                href="https://www.ea.com/"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="Software Engineer Intern @ Electronic Arts (EA)"
              >
                <span className="hidden absolute -inset-x-4 -inset-y-2.5 rounded lg:block" />
                <span className="text-lg inline-block">
                  Software Engineer Intern @ Electronic Arts (EA)
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="lg:hidden inline-block shrink-0 mb-1 ml-0.5 h-7 w-7"
                    viewBox="0 0 36 36"
                  >
                    <path
                      fill="currentColor"
                      d="m17.6 24.32l-2.46 2.44a4 4 0 0 1-5.62 0a3.92 3.92 0 0 1 0-5.55l4.69-4.65a4 4 0 0 1 5.62 0a3.86 3.86 0 0 1 1 1.71a2 2 0 0 0 .27-.27l1.29-1.28a5.9 5.9 0 0 0-1.15-1.62a6 6 0 0 0-8.44 0l-4.7 4.69a5.91 5.91 0 0 0 0 8.39a6 6 0 0 0 8.44 0l3.65-3.62h-.5a8 8 0 0 1-2.09-.24"
                      className="clr-i-outline clr-i-outline-path-1"
                    />
                    <path
                      fill="currentColor"
                      d="M28.61 7.82a6 6 0 0 0-8.44 0l-3.65 3.62h.49a8 8 0 0 1 2.1.28l2.46-2.44a4 4 0 0 1 5.62 0a3.92 3.92 0 0 1 0 5.55l-4.69 4.65a4 4 0 0 1-5.62 0a3.86 3.86 0 0 1-1-1.71a2 2 0 0 0-.28.23l-1.29 1.28a5.9 5.9 0 0 0 1.15 1.62a6 6 0 0 0 8.44 0l4.69-4.65a5.92 5.92 0 0 0 0-8.39Z"
                      className="clr-i-outline clr-i-outline-path-2"
                    />
                    <path fill="none" d="M0 0h36v36H0z" />
                  </svg>
                </span>
              </a>
              <div className="text-[rgba(255,255,255,0.55)] my-2">
                Tackled content clean-up of company’s intranet through several
                projects as a part of the Employee Experience Engineering Team
                (EEX). Built new dashboard with Looker Studio by pulling
                site/user analytics from the company’s intranet using Google
                BigQuery, Google Cloud Platform, Google Apps Script, and SQL.
                Developed content creation helper chatbot using StencilJS and
                TypeScript to help intranet site admins create or update their
                pages. Created documentation for development and data-fetching
                process and presentations regarding findings from analyzing
                dashboard analytics for the Product Team.
              </div>
              <div className="flex flex-row gap-2 flex-wrap mt-3 text-sm">
                <div className="bg-[rgba(137,44,220,0.25)] text-[#BC6FF1] px-3 py-1 rounded-full">
                  TypeScript
                </div>
                <div className="bg-[rgba(137,44,220,0.25)] text-[#BC6FF1] px-3 py-1 rounded-full">
                  StencilJS
                </div>
                <div className="bg-[rgba(137,44,220,0.25)] text-[#BC6FF1] px-3 py-1 rounded-full">
                  Sass
                </div>
                <div className="bg-[rgba(137,44,220,0.25)] text-[#BC6FF1] px-3 py-1 rounded-full">
                  Node.js
                </div>
                <div className="bg-[rgba(137,44,220,0.25)] text-[#BC6FF1] px-3 py-1 rounded-full">
                  Express.js
                </div>
                <div className="bg-[rgba(137,44,220,0.25)] text-[#BC6FF1] px-3 py-1 rounded-full">
                  SQL
                </div>
                <div className="bg-[rgba(137,44,220,0.25)] text-[#BC6FF1] px-3 py-1 rounded-full">
                  Google BigQuery
                </div>
                <div className="bg-[rgba(137,44,220,0.25)] text-[#BC6FF1] px-3 py-1 rounded-full">
                  Google Cloud Platform
                </div>
                <div className="bg-[rgba(137,44,220,0.25)] text-[#BC6FF1] px-3 py-1 rounded-full">
                  Google Apps Script
                </div>
                <div className="bg-[rgba(137,44,220,0.25)] text-[#BC6FF1] px-3 py-1 rounded-full">
                  Looker Studio
                </div>
              </div>
            </div>
          </div>
          {/* Full-Stack Software Engineer @ Markit AI */}
          <div className="md:grid md:gap-x-7 lg:gap-x-4 md:grid-cols-10 group relative lg:transition-all lg:hover:!opacity-100 lg:group-hover:opacity-50">
            <div className="hidden absolute -inset-x-2 -inset-y-2 z-0 rounded-md transition motion-reduce:transition-none lg:block group-hover:bg-[rgba(134,93,255,0.1)] group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] group-hover:drop-shadow-lg" />
            <div className="opacity-55 text-sm pt-1 pb-2 md:pb-0 col-span-3 z-10">
              MAY 2023 — MAY 2024
            </div>
            <div className="col-span-7 z-10">
              <a
                className="inline-flex items-baseline font-medium text-slate-200 transition hover:text-[#BC6FF1] focus-visible:text-[#BC6FF1] group/link text-base"
                href="https://www.markitsocial.net/"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="Full-Stack Software Developer @ Tufts JumboCode"
              >
                <span className="hidden absolute -inset-x-4 -inset-y-2.5 rounded lg:block" />
                <span className="text-lg inline-block">
                  Full-Stack Software Engineer @ Markit AI
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="lg:hidden inline-block shrink-0 mb-1 ml-0.5 h-7 w-7"
                    viewBox="0 0 36 36"
                  >
                    <path
                      fill="currentColor"
                      d="m17.6 24.32l-2.46 2.44a4 4 0 0 1-5.62 0a3.92 3.92 0 0 1 0-5.55l4.69-4.65a4 4 0 0 1 5.62 0a3.86 3.86 0 0 1 1 1.71a2 2 0 0 0 .27-.27l1.29-1.28a5.9 5.9 0 0 0-1.15-1.62a6 6 0 0 0-8.44 0l-4.7 4.69a5.91 5.91 0 0 0 0 8.39a6 6 0 0 0 8.44 0l3.65-3.62h-.5a8 8 0 0 1-2.09-.24"
                      className="clr-i-outline clr-i-outline-path-1"
                    />
                    <path
                      fill="currentColor"
                      d="M28.61 7.82a6 6 0 0 0-8.44 0l-3.65 3.62h.49a8 8 0 0 1 2.1.28l2.46-2.44a4 4 0 0 1 5.62 0a3.92 3.92 0 0 1 0 5.55l-4.69 4.65a4 4 0 0 1-5.62 0a3.86 3.86 0 0 1-1-1.71a2 2 0 0 0-.28.23l-1.29 1.28a5.9 5.9 0 0 0 1.15 1.62a6 6 0 0 0 8.44 0l4.69-4.65a5.92 5.92 0 0 0 0-8.39Z"
                      className="clr-i-outline clr-i-outline-path-2"
                    />
                    <path fill="none" d="M0 0h36v36H0z" />
                  </svg>
                </span>
              </a>
              <div className="text-[rgba(255,255,255,0.55)]">
                Full-Stack Software Engineer Intern
              </div>
              <div className="text-[rgba(255,255,255,0.55)] my-2">
                Designed and styled event management feature within web app
                using React, providing users with intuitive event organization
                capabilities. Leveraged custom React hooks to seamlessly
                integrate dark mode feature into web app, enhancing user
                experience and accessibility. Redesigned ticketing feature and
                flow with React/React Native, integrated Redux for state
                management and fetched ticket data from Firebase backend.
                Redesigned refund process within mobile app, enhanced user trust
                during refund transactions, re-implemented backend logic using
                Stripe/Twilio APIs and ticket data from Firebase.
              </div>
              <div className="flex flex-row gap-2 flex-wrap mt-3 text-sm">
                <div className="bg-[rgba(137,44,220,0.25)] text-[#BC6FF1] px-3 py-1 rounded-full">
                  TypeScript
                </div>
                <div className="bg-[rgba(137,44,220,0.25)] text-[#BC6FF1] px-3 py-1 rounded-full">
                  React.js
                </div>
                <div className="bg-[rgba(137,44,220,0.25)] text-[#BC6FF1] px-3 py-1 rounded-full">
                  React Native
                </div>
                <div className="bg-[rgba(137,44,220,0.25)] text-[#BC6FF1] px-3 py-1 rounded-full">
                  Redux.js
                </div>
                <div className="bg-[rgba(137,44,220,0.25)] text-[#BC6FF1] px-3 py-1 rounded-full">
                  CSS
                </div>
                <div className="bg-[rgba(137,44,220,0.25)] text-[#BC6FF1] px-3 py-1 rounded-full">
                  Node.js
                </div>
                <div className="bg-[rgba(137,44,220,0.25)] text-[#BC6FF1] px-3 py-1 rounded-full">
                  Express.js
                </div>
                <div className="bg-[rgba(137,44,220,0.25)] text-[#BC6FF1] px-3 py-1 rounded-full">
                  Firebase
                </div>
                <div className="bg-[rgba(137,44,220,0.25)] text-[#BC6FF1] px-3 py-1 rounded-full">
                  Twilio API
                </div>
                <div className="bg-[rgba(137,44,220,0.25)] text-[#BC6FF1] px-3 py-1 rounded-full">
                  Stripe API
                </div>
                <div className="bg-[rgba(137,44,220,0.25)] text-[#BC6FF1] px-3 py-1 rounded-full">
                  Mixpanel
                </div>
              </div>
            </div>
          </div>
          {/* FULL-STACK SOFTWARE DEVELOPER @ TUFTS JUMBOCODE */}
          <div className="md:grid md:gap-x-7 lg:gap-x-4 md:grid-cols-10 group relative lg:transition-all lg:hover:!opacity-100 lg:group-hover:opacity-50">
            <div className="hidden absolute -inset-x-2 -inset-y-2 z-0 rounded-md transition motion-reduce:transition-none lg:block group-hover:bg-[rgba(134,93,255,0.1)] group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] group-hover:drop-shadow-lg" />
            <div className="opacity-55 text-sm pt-1 pb-2 md:pb-0 col-span-3 z-10">
              SEP 2022 — PRESENT
            </div>
            <div className="col-span-7 z-10">
              <a
                className="inline-flex items-baseline font-medium text-slate-200 transition hover:text-[#BC6FF1] focus-visible:text-[#BC6FF1] group/link text-base"
                href="https://www.jumbocode.org/"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="Full-Stack Software Developer @ Tufts JumboCode"
              >
                <span className="hidden absolute -inset-x-4 -inset-y-2.5 rounded lg:block" />
                <span className="text-lg inline-block">
                  Technical Lead @ Tufts JumboCode
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="lg:hidden inline-block shrink-0 mb-1 ml-0.5 h-7 w-7"
                    viewBox="0 0 36 36"
                  >
                    <path
                      fill="currentColor"
                      d="m17.6 24.32l-2.46 2.44a4 4 0 0 1-5.62 0a3.92 3.92 0 0 1 0-5.55l4.69-4.65a4 4 0 0 1 5.62 0a3.86 3.86 0 0 1 1 1.71a2 2 0 0 0 .27-.27l1.29-1.28a5.9 5.9 0 0 0-1.15-1.62a6 6 0 0 0-8.44 0l-4.7 4.69a5.91 5.91 0 0 0 0 8.39a6 6 0 0 0 8.44 0l3.65-3.62h-.5a8 8 0 0 1-2.09-.24"
                      className="clr-i-outline clr-i-outline-path-1"
                    />
                    <path
                      fill="currentColor"
                      d="M28.61 7.82a6 6 0 0 0-8.44 0l-3.65 3.62h.49a8 8 0 0 1 2.1.28l2.46-2.44a4 4 0 0 1 5.62 0a3.92 3.92 0 0 1 0 5.55l-4.69 4.65a4 4 0 0 1-5.62 0a3.86 3.86 0 0 1-1-1.71a2 2 0 0 0-.28.23l-1.29 1.28a5.9 5.9 0 0 0 1.15 1.62a6 6 0 0 0 8.44 0l4.69-4.65a5.92 5.92 0 0 0 0-8.39Z"
                      className="clr-i-outline clr-i-outline-path-2"
                    />
                    <path fill="none" d="M0 0h36v36H0z" />
                  </svg>
                </span>
              </a>
              <div className="text-[rgba(255,255,255,0.55)]">
                Full-Stack Software Developer
              </div>
              <div className="text-[rgba(252,247,247,0.55)] my-2">
                Lead team of 10 developers through Agile iterations to build
                scheduling web app for nonprofit Bread & Roses. Develop MongoDB
                schema for users/events in TypeScript to render user profiles
                and schedule events. Develop user authentication sign-up/login
                system using bcrypt password-hashing alongside POST request
                endpoints to send user-inputted data to/from MongoDB database.
                Create API routes for creating, updating, and deleting Google
                Drive files in Next.js.
              </div>
              <div className="flex flex-row gap-2 flex-wrap mt-3 text-sm">
                <div className="bg-[rgba(137,44,220,0.25)] text-[#BC6FF1] px-3 py-1 rounded-full">
                  TypeScript
                </div>
                <div className="bg-[rgba(137,44,220,0.25)] text-[#BC6FF1] px-3 py-1 rounded-full">
                  React.js
                </div>
                <div className="bg-[rgba(137,44,220,0.25)] text-[#BC6FF1] px-3 py-1 rounded-full">
                  React Native
                </div>
                <div className="bg-[rgba(137,44,220,0.25)] text-[#BC6FF1] px-3 py-1 rounded-full">
                  Next.js
                </div>
                <div className="bg-[rgba(137,44,220,0.25)] text-[#BC6FF1] px-3 py-1 rounded-full">
                  CSS
                </div>
                <div className="bg-[rgba(137,44,220,0.25)] text-[#BC6FF1] px-3 py-1 rounded-full">
                  Tailwind CSS
                </div>
                <div className="bg-[rgba(137,44,220,0.25)] text-[#BC6FF1] px-3 py-1 rounded-full">
                  Node.js
                </div>
                <div className="bg-[rgba(137,44,220,0.25)] text-[#BC6FF1] px-3 py-1 rounded-full">
                  Express.js
                </div>
                <div className="bg-[rgba(137,44,220,0.25)] text-[#BC6FF1] px-3 py-1 rounded-full">
                  MongoDB
                </div>
                <div className="bg-[rgba(137,44,220,0.25)] text-[#BC6FF1] px-3 py-1 rounded-full">
                  Prisma ORM
                </div>
              </div>
            </div>
          </div>
          {/* TEACHING ASSISTANT @ TUFTS UNIVERSITY */}
          <div className="md:grid md:gap-x-7 lg:gap-x-4 md:grid-cols-10 group relative lg:transition-all lg:hover:!opacity-100 lg:group-hover:opacity-50">
            <div className="hidden absolute -inset-x-2 -inset-y-2 z-0 rounded-md transition motion-reduce:transition-none lg:block group-hover:bg-[rgba(134,93,255,0.1)] group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] group-hover:drop-shadow-lg" />
            <div className="opacity-55 text-sm pt-1 pb-2 md:pb-0 col-span-3 z-10">
              SEP 2024 — PRESENT
            </div>
            <div className="col-span-7 z-10">
              <a
                className="inline-flex items-baseline font-medium text-slate-200 transition hover:text-[#BC6FF1] focus-visible:text-[#BC6FF1] group/link text-base"
                href="https://engineering.tufts.edu/cs/"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="Teaching Assistant @ Tufts University"
              >
                <span className="hidden absolute -inset-x-4 -inset-y-2.5 rounded lg:block" />
                <span className="text-lg inline-block">
                  Teaching Assistant @ Tufts University
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="lg:hidden inline-block shrink-0 mb-1 ml-0.5 h-7 w-7"
                    viewBox="0 0 36 36"
                  >
                    <path
                      fill="currentColor"
                      d="m17.6 24.32l-2.46 2.44a4 4 0 0 1-5.62 0a3.92 3.92 0 0 1 0-5.55l4.69-4.65a4 4 0 0 1 5.62 0a3.86 3.86 0 0 1 1 1.71a2 2 0 0 0 .27-.27l1.29-1.28a5.9 5.9 0 0 0-1.15-1.62a6 6 0 0 0-8.44 0l-4.7 4.69a5.91 5.91 0 0 0 0 8.39a6 6 0 0 0 8.44 0l3.65-3.62h-.5a8 8 0 0 1-2.09-.24"
                      className="clr-i-outline clr-i-outline-path-1"
                    />
                    <path
                      fill="currentColor"
                      d="M28.61 7.82a6 6 0 0 0-8.44 0l-3.65 3.62h.49a8 8 0 0 1 2.1.28l2.46-2.44a4 4 0 0 1 5.62 0a3.92 3.92 0 0 1 0 5.55l-4.69 4.65a4 4 0 0 1-5.62 0a3.86 3.86 0 0 1-1-1.71a2 2 0 0 0-.28.23l-1.29 1.28a5.9 5.9 0 0 0 1.15 1.62a6 6 0 0 0 8.44 0l4.69-4.65a5.92 5.92 0 0 0 0-8.39Z"
                      className="clr-i-outline clr-i-outline-path-2"
                    />
                    <path fill="none" d="M0 0h36v36H0z" />
                  </svg>
                </span>
              </a>
              <div className="text-[rgba(255,255,255,0.55)] my-2">
                Mentor 15+ students, teach implementing static typing/type
                inference in office hours, grade assignments.
              </div>
            </div>
          </div>
          {/* RESEARCH ASSISTANT @ TUFTS UNIVERSITY */}
          <div className="md:grid md:gap-x-7 lg:gap-x-4 md:grid-cols-10 group relative lg:transition-all lg:hover:!opacity-100 lg:group-hover:opacity-50">
            <div className="hidden absolute -inset-x-2 -inset-y-2 z-0 rounded-md transition motion-reduce:transition-none lg:block group-hover:bg-[rgba(134,93,255,0.1)] group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] group-hover:drop-shadow-lg" />
            <div className="opacity-55 text-sm pt-1 pb-2 md:pb-0 col-span-3 z-10">
              JAN 2023 — MAY 2023
            </div>
            <div className="col-span-7 z-10">
              <a
                className="inline-flex items-baseline font-medium text-slate-200 transition hover:text-[#BC6FF1] focus-visible:text-[#BC6FF1] group/link text-base"
                href="https://tufts-hci-lab.github.io/"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="Research Assistant @ Tufts University"
              >
                <span className="hidden absolute -inset-x-4 -inset-y-2.5 rounded lg:block" />
                <span className="text-lg inline-block">
                  Research Assistant @ Tufts University
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="lg:hidden inline-block shrink-0 mb-1 ml-0.5 h-7 w-7"
                    viewBox="0 0 36 36"
                  >
                    <path
                      fill="currentColor"
                      d="m17.6 24.32l-2.46 2.44a4 4 0 0 1-5.62 0a3.92 3.92 0 0 1 0-5.55l4.69-4.65a4 4 0 0 1 5.62 0a3.86 3.86 0 0 1 1 1.71a2 2 0 0 0 .27-.27l1.29-1.28a5.9 5.9 0 0 0-1.15-1.62a6 6 0 0 0-8.44 0l-4.7 4.69a5.91 5.91 0 0 0 0 8.39a6 6 0 0 0 8.44 0l3.65-3.62h-.5a8 8 0 0 1-2.09-.24"
                      className="clr-i-outline clr-i-outline-path-1"
                    />
                    <path
                      fill="currentColor"
                      d="M28.61 7.82a6 6 0 0 0-8.44 0l-3.65 3.62h.49a8 8 0 0 1 2.1.28l2.46-2.44a4 4 0 0 1 5.62 0a3.92 3.92 0 0 1 0 5.55l-4.69 4.65a4 4 0 0 1-5.62 0a3.86 3.86 0 0 1-1-1.71a2 2 0 0 0-.28.23l-1.29 1.28a5.9 5.9 0 0 0 1.15 1.62a6 6 0 0 0 8.44 0l4.69-4.65a5.92 5.92 0 0 0 0-8.39Z"
                      className="clr-i-outline clr-i-outline-path-2"
                    />
                    <path fill="none" d="M0 0h36v36H0z" />
                  </svg>
                </span>
              </a>
              <div className="text-[rgba(255,255,255,0.55)] my-2">
                Created interactive website for mental workload study using
                jsPsych framework, JavaScript, and HTML. Implemented timer
                functionality for chess study website, refactored codebase to
                increase data collection.
              </div>
              <div className="flex flex-row gap-2 flex-wrap mt-3 text-sm">
                <div className="bg-[rgba(137,44,220,0.25)] text-[#BC6FF1] px-3 py-1 rounded-full">
                  JavaScript
                </div>
                <div className="bg-[rgba(137,44,220,0.25)] text-[#BC6FF1] px-3 py-1 rounded-full">
                  jsPsych
                </div>
                <div className="bg-[rgba(137,44,220,0.25)] text-[#BC6FF1] px-3 py-1 rounded-full">
                  CSS
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="text-xl font-bold mb-10 mt-20">PROJECTS</div>
        <div className="flex flex-col gap-8">
          {/* OFFICE MINUTES */}
          <div className="md:grid md:gap-x-7 lg:gap-x-4 md:grid-cols-10 group relative lg:transition-all lg:hover:!opacity-100 lg:group-hover:opacity-50">
            <div className="hidden absolute -inset-x-2 -inset-y-2 z-0 rounded-md transition motion-reduce:transition-none lg:block group-hover:bg-[rgba(134,93,255,0.1)] group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] group-hover:drop-shadow-lg" />
            <Image
              src="/images/OfficeMinutes.png"
              className="hidden col-span-3 z-10 md:block rounded-md mt-1.5"
              layout="responsive"
              objectFit="contain"
              width={1400}
              height={800}
              alt="OfficeMinutes"
            />
            <div className="col-span-7 z-10">
              <a
                className="inline-flex items-baseline font-medium text-slate-200 transition hover:text-[#BC6FF1] focus-visible:text-[#BC6FF1] group/link text-base"
                href="https://github.com/johnny-t06/officeminutesv2"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="OfficeMinutes"
              >
                <span className="hidden absolute -inset-x-4 -inset-y-2.5 rounded lg:block" />
                <span className="text-lg inline-block">
                  OfficeMinutes
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="lg:hidden inline-block shrink-0 mb-1 ml-0.5 h-7 w-7"
                    viewBox="0 0 36 36"
                  >
                    <path
                      fill="currentColor"
                      d="m17.6 24.32l-2.46 2.44a4 4 0 0 1-5.62 0a3.92 3.92 0 0 1 0-5.55l4.69-4.65a4 4 0 0 1 5.62 0a3.86 3.86 0 0 1 1 1.71a2 2 0 0 0 .27-.27l1.29-1.28a5.9 5.9 0 0 0-1.15-1.62a6 6 0 0 0-8.44 0l-4.7 4.69a5.91 5.91 0 0 0 0 8.39a6 6 0 0 0 8.44 0l3.65-3.62h-.5a8 8 0 0 1-2.09-.24"
                      className="clr-i-outline clr-i-outline-path-1"
                    />
                    <path
                      fill="currentColor"
                      d="M28.61 7.82a6 6 0 0 0-8.44 0l-3.65 3.62h.49a8 8 0 0 1 2.1.28l2.46-2.44a4 4 0 0 1 5.62 0a3.92 3.92 0 0 1 0 5.55l-4.69 4.65a4 4 0 0 1-5.62 0a3.86 3.86 0 0 1-1-1.71a2 2 0 0 0-.28.23l-1.29 1.28a5.9 5.9 0 0 0 1.15 1.62a6 6 0 0 0 8.44 0l4.69-4.65a5.92 5.92 0 0 0 0-8.39Z"
                      className="clr-i-outline clr-i-outline-path-2"
                    />
                    <path fill="none" d="M0 0h36v36H0z" />
                  </svg>
                </span>
              </a>
              <div className="text-[rgba(255,255,255,0.55)] my-2">
                Develop a streamlined queuing system for office hours for
                students to ask public or private questions, and allows students
                with similar questions to form groups. By giving students access
                to course-specific tags, short titles, and descriptions, it
                helps course staff gain quick and useful insights on student
                issues so that they can provide the most optimal support.
              </div>
              <div className="flex flex-row gap-2 flex-wrap mt-3 text-sm">
                <div className="bg-[rgba(137,44,220,0.25)] text-[#BC6FF1] px-3 py-1 rounded-full">
                  TypeScript
                </div>
                <div className="bg-[rgba(137,44,220,0.25)] text-[#BC6FF1] px-3 py-1 rounded-full">
                  Next.js
                </div>
                <div className="bg-[rgba(137,44,220,0.25)] text-[#BC6FF1] px-3 py-1 rounded-full">
                  Tailwind CSS
                </div>
                <div className="bg-[rgba(137,44,220,0.25)] text-[#BC6FF1] px-3 py-1 rounded-full">
                  Firebase
                </div>
              </div>
              <Image
                src="/images/OfficeMinutes.png"
                className="block z-10 mt-4 md:hidden rounded-md"
                width={200}
                height={200}
                alt="OfficeMinutes"
              />
            </div>
          </div>
          {/* PIKMIN-GPT */}
          <div className="md:grid md:gap-x-7 lg:gap-x-4 md:grid-cols-10 group relative lg:transition-all lg:hover:!opacity-100 lg:group-hover:opacity-50">
            <div className="hidden absolute -inset-x-2 -inset-y-2 z-0 rounded-md transition motion-reduce:transition-none lg:block group-hover:bg-[rgba(134,93,255,0.1)] group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] group-hover:drop-shadow-lg" />
            <Image
              src="/images/PikminGPT.png"
              className="hidden md:block col-span-3 z-10 rounded-md mt-1.5"
              layout="responsive"
              objectFit="contain"
              width={1400}
              height={800}
              alt="Pikmin-GPT"
            />
            <div className="col-span-7 z-10">
              <a
                className="inline-flex items-baseline font-medium text-slate-200 transition hover:text-[#BC6FF1] focus-visible:text-[#BC6FF1] group/link text-base"
                href="https://jumbocode-gpt.vercel.app/signin"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="Pikmin-GPT"
              >
                <span className="hidden absolute -inset-x-4 -inset-y-2.5 rounded lg:block" />
                <span className="text-lg inline-block">
                  Pikmin-GPT
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="lg:hidden inline-block shrink-0 mb-1 ml-0.5 h-7 w-7"
                    viewBox="0 0 36 36"
                  >
                    <path
                      fill="currentColor"
                      d="m17.6 24.32l-2.46 2.44a4 4 0 0 1-5.62 0a3.92 3.92 0 0 1 0-5.55l4.69-4.65a4 4 0 0 1 5.62 0a3.86 3.86 0 0 1 1 1.71a2 2 0 0 0 .27-.27l1.29-1.28a5.9 5.9 0 0 0-1.15-1.62a6 6 0 0 0-8.44 0l-4.7 4.69a5.91 5.91 0 0 0 0 8.39a6 6 0 0 0 8.44 0l3.65-3.62h-.5a8 8 0 0 1-2.09-.24"
                      className="clr-i-outline clr-i-outline-path-1"
                    />
                    <path
                      fill="currentColor"
                      d="M28.61 7.82a6 6 0 0 0-8.44 0l-3.65 3.62h.49a8 8 0 0 1 2.1.28l2.46-2.44a4 4 0 0 1 5.62 0a3.92 3.92 0 0 1 0 5.55l-4.69 4.65a4 4 0 0 1-5.62 0a3.86 3.86 0 0 1-1-1.71a2 2 0 0 0-.28.23l-1.29 1.28a5.9 5.9 0 0 0 1.15 1.62a6 6 0 0 0 8.44 0l4.69-4.65a5.92 5.92 0 0 0 0-8.39Z"
                      className="clr-i-outline clr-i-outline-path-2"
                    />
                    <path fill="none" d="M0 0h36v36H0z" />
                  </svg>
                </span>
              </a>
              <div className="text-[rgba(255,255,255,0.55)] my-2">
                Created ChatGPT-inspired chatbot interface with personality of a
                Pikmin expert using Next.js and NextAuth.js user authentication;
                logged all prompts and responses in a MongoDB database.
              </div>
              <div className="flex flex-row gap-2 flex-wrap mt-3 text-sm">
                <div className="bg-[rgba(137,44,220,0.25)] text-[#BC6FF1] px-3 py-1 rounded-full">
                  TypeScript
                </div>
                <div className="bg-[rgba(137,44,220,0.25)] text-[#BC6FF1] px-3 py-1 rounded-full">
                  Next.js
                </div>
                <div className="bg-[rgba(137,44,220,0.25)] text-[#BC6FF1] px-3 py-1 rounded-full">
                  NextAuth.js
                </div>
                <div className="bg-[rgba(137,44,220,0.25)] text-[#BC6FF1] px-3 py-1 rounded-full">
                  Tailwind CSS
                </div>
                <div className="bg-[rgba(137,44,220,0.25)] text-[#BC6FF1] px-3 py-1 rounded-full">
                  MongoDB
                </div>
                <div className="bg-[rgba(137,44,220,0.25)] text-[#BC6FF1] px-3 py-1 rounded-full">
                  Prisma ORM
                </div>
                <div className="bg-[rgba(137,44,220,0.25)] text-[#BC6FF1] px-3 py-1 rounded-full">
                  OpenAI API
                </div>
              </div>
              <Image
                src="/images/PikminGPT.png"
                className="block md:hidden z-10 rounded-md mt-4"
                width={200}
                height={200}
                alt="Pikmin-GPT"
              />
            </div>
          </div>
        </div>
        <div className="text-xl font-bold mb-10 mt-20">ABOUT</div>
        <div className="text-lg">Movies I Love</div>
        <div className="flex flex-row gap-2 flex-wrap mt-3 text-sm">
          <div className="bg-[rgba(137,44,220,0.25)] text-[#BC6FF1] px-3 py-1 rounded-full">
            Back to the Future
          </div>
          <div className="bg-[rgba(137,44,220,0.25)] text-[#BC6FF1] px-3 py-1 rounded-full">
            Dune: Part Two
          </div>
          <div className="bg-[rgba(137,44,220,0.25)] text-[#BC6FF1] px-3 py-1 rounded-full">
            Gladiator
          </div>
          <div className="bg-[rgba(137,44,220,0.25)] text-[#BC6FF1] px-3 py-1 rounded-full">
            Jaws
          </div>
          <div className="bg-[rgba(137,44,220,0.25)] text-[#BC6FF1] px-3 py-1 rounded-full">
            The Martian
          </div>
        </div>
        <div className="text-lg mt-4">Games I&apos;m Playing</div>
        <div className="flex flex-row gap-2 flex-wrap mt-3 text-sm">
          <div className="bg-[rgba(137,44,220,0.25)] text-[#BC6FF1] px-3 py-1 rounded-full">
            Bloons TD 6
          </div>
          <div className="bg-[rgba(137,44,220,0.25)] text-[#BC6FF1] px-3 py-1 rounded-full">
            Mario Kart 8
          </div>
          <div className="bg-[rgba(137,44,220,0.25)] text-[#BC6FF1] px-3 py-1 rounded-full">
            Pikmin 4
          </div>
          <div className="bg-[rgba(137,44,220,0.25)] text-[#BC6FF1] px-3 py-1 rounded-full">
            Super Smash Bros. Ultimate
          </div>
        </div>
        <div className="text-lg mt-4">Favorite Foods</div>
        <div className="flex flex-row gap-2 flex-wrap mt-3 text-sm">
          <div className="bg-[rgba(137,44,220,0.25)] text-[#BC6FF1] px-3 py-1 rounded-full">
            Curry
          </div>
          <div className="bg-[rgba(137,44,220,0.25)] text-[#BC6FF1] px-3 py-1 rounded-full">
            Jajangmyeon
          </div>
          <div className="bg-[rgba(137,44,220,0.25)] text-[#BC6FF1] px-3 py-1 rounded-full">
            Pad Krapow
          </div>
          <div className="bg-[rgba(137,44,220,0.25)] text-[#BC6FF1] px-3 py-1 rounded-full">
            Poke
          </div>
          <div className="bg-[rgba(137,44,220,0.25)] text-[#BC6FF1] px-3 py-1 rounded-full">
            Tortas
          </div>
        </div>
        <div className="flex flex-row items-center mt-10 gap-2">
          <div className="text-[rgba(255,255,255,0.55)]">
            Let&apos;s keep in touch!
          </div>
          <a
            className="transition-colors duration-300 text-[#929292] hover:text-[#BC6FF1]"
            href="mailto:wonkim025@gmail.com"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="Email Link"
          >
            <Icon icon="ion:mail" height={30} />
          </a>
        </div>
      </div>
    </GradientDiv>
  );
}
