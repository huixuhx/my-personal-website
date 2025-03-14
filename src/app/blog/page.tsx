import InViewAnimateWrapper from "@/components/InViewAnimateWrapper";

export default function Blog() {
  return (
    <div className="container mx-auto">
      <InViewAnimateWrapper
        animate="float-up"
        options={{ threshold: 0.5, triggerOnce: false }}
      >
        <h1 className="hero-title text-center">Blog</h1>
        <h1 className="common-title text-center">Coming Soon!</h1>
      </InViewAnimateWrapper>
    </div>
  );
}
