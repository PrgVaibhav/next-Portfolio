import React from "react";
import { SectionWrapper } from "../helpers/SectionWrapper";
import { Link } from "react-router-dom";
import "./Error.scss";
export const Error = () => {
  return (
    <SectionWrapper>
      <div className="error-page">
        <h1>404 Error: Lost in the matrix.</h1>
        <p>
          Well, this is awkward. It seems I've misplaced a page somewhere in the
          vast internet wilderness. Don't worry; I've sent out a search party
          (a.k.a. me frantically checking my code) to bring it back.
        </p>
        <p>While you wait, here's a little joke to lighten the mood:</p>

        <p>Why did my webpage go to therapy?</p>
        <p>Because it had too many issues with its past! 😄</p>

        <p>Thanks for your patience, and sorry for the inconvenience!</p>
        <Link to="/" className="btn">
          Go back to home page
        </Link>
      </div>
    </SectionWrapper>
  );
};
