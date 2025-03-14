"use client"
import { ReactNode } from "react";
import { useInView, IntersectionOptions} from "react-intersection-observer";
type Props = {
    children: ReactNode;
    animate: string;
    options:IntersectionOptions;
  };
export default function InViewAnimateWrapper({children, animate, options}:Props){
    const { ref, inView} = useInView(options);
    return(
        <div ref={ref} className={`${inView ? animate:"opacity-0"}`}>
        {children}
        </div>
    )
}