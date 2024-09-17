import { SectionWrapper } from "../helpers/SectionWrapper";
import "./LoadingSkeleton.scss";
export const ProjectLoadingSkeleton = () => {
  return (
    <SectionWrapper label="Loading Skeleton for projects">
      <div className="skeleton-card">
        <div className="skeleton-right">
          <div className="skeleton-img skeleton" />
        </div>
        <div className="skeleton-left">
          <div className="title">
            <div className="skeleton skeleton-text"></div>
            <div className="skeleton skeleton-text"></div>
          </div>
          <div className="description">
            <div className="skeleton skeleton-text"></div>
            <div className="skeleton skeleton-text"></div>
            <div className="skeleton skeleton-text"></div>
            <div className="skeleton skeleton-text"></div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};
