"use client";

import { motion, useInView, Variants } from "framer-motion";
import { ElementType, ComponentPropsWithoutRef } from "react";

type TimelineContentProps<T extends ElementType> = {
  as?: T;
  animationNum: number;
  timelineRef: React.RefObject<HTMLElement | HTMLDivElement | null>;
  customVariants: Variants;
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
} & Omit<ComponentPropsWithoutRef<T>, "as" | "animationNum" | "timelineRef" | "customVariants">;

type ComponentTag = Exclude<ElementType, string>;
// Cache of motion-wrapped custom components so we don't recreate each render
const motionCache = new WeakMap<ComponentTag, ReturnType<typeof motion.create>>();

function getMotionComponent(tag: ElementType) {
  if (typeof tag === "string") {
    return motion[tag as keyof typeof motion] as typeof motion.div;
  }
  const componentTag = tag as ComponentTag;
  if (!motionCache.has(componentTag)) {
    motionCache.set(componentTag, motion.create(componentTag as React.ComponentType));
  }
  return motionCache.get(componentTag)! as typeof motion.div;
}

export function TimelineContent<T extends ElementType = "div">({
  as,
  animationNum,
  timelineRef,
  customVariants,
  children,
  className,
  style,
  ...props
}: TimelineContentProps<T>) {
  const inView = useInView(timelineRef, { once: true, margin: "-60px" });
  const MotionTag = getMotionComponent(as ?? "div");

  return (
    <MotionTag
      className={className}
      style={style}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      custom={animationNum}
      variants={customVariants}
      {...(props as object)}
    >
      {children}
    </MotionTag>
  );
}
