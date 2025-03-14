import InViewAnimateWrapper from "@/components/InViewAnimateWrapper";

export default function Projects() {
    return(
          <div className="container mx-auto">
            <InViewAnimateWrapper
              animate="float-up"
              options={{ threshold: 0.5, triggerOnce: false }}
            >
              <h1 className="hero-title text-center">Projects</h1>
              <h1 className="common-title text-center">Coming Soon!</h1>
            </InViewAnimateWrapper>
          </div>
    )
}