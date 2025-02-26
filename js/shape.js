"use strict";

document.addEventListener("DOMContentLoaded", (event) => {
  function animateText(element) {
    // 1. 메인비주얼 텍스트 모션 (아래에서 위로)
    return gsap.timeline().fromTo(
      element,
      {
        // 시작
        opacity: 0,
        y: 100,
      },
      {
        // 끝
        opacity: 1,
        y: 0,
        duration: 1.2,
      },
      "-=1.2" // 지연시간
    );
  }
  gsap
    .timeline()
    .add(animateText(".v_title1"))
    .add(animateText(".v_title2"))
    .add(animateText(".v_title3"));

  // 2. back_shape들 모션
  gsap
    .timeline()
    // shape_1
    .fromTo(
      ".shape_1",
      {
        // 시작
        scale: 0,
        rotate: 0,
      },
      {
        // 끝
        scale: 1,
        rotate: 360,
        duration: 0.8,
      }
    )
    .to(
      ".shape_1",
      {
        y: 10,
        duration: 0.8,
        ease: "linear",
        yoyo: true,
        repeat: -1,
      },
      "+=0.2"
    )
    // shape_2
    .fromTo(
      ".shape_2",
      {
        // 시작
        y: -500,
        x: 500,
      },
      {
        // 끝
        y: 0,
        x: 0,
        duration: 0.8,
      },
      "-=1.5"
    )
    .to(
      ".shape_2",
      {
        y: 10,
        duration: 0.8,
        ease: "linear",
        yoyo: true,
        repeat: -1,
      },
      "+=0.2"
    )
    // shape_3
    .fromTo(
      ".shape_3",
      {
        // 시작
        y: 500,
      },
      {
        // 끝
        y: 0,
        duration: 0.8,
      },
      "-=1.2"
    )
    .to(
      ".shape_3",
      {
        y: 10,
        duration: 0.8,
        ease: "linear",
        yoyo: true,
        repeat: -1,
      },
      "+=0.2"
    )
    // shape_4
    .fromTo(
      ".shape_4",
      {
        // 시작
        x: 500,
      },
      {
        // 끝
        x: 0,
        duration: 0.8,
      },
      "-=1"
    )
    .to(
      ".shape_4",
      {
        y: 10,
        duration: 0.8,
        ease: "linear",
        yoyo: true,
        repeat: -1,
      },
      "+=0.2"
    )
    // shape_5
    .fromTo(
      ".shape_5",
      {
        // 시작
        y: -500,
      },
      {
        // 끝
        y: 0,
        duration: 0.8,
      },
      "-=1.5"
    )
    .to(
      ".shape_5",
      {
        y: 10,
        duration: 0.8,
        ease: "linear",
        yoyo: true,
        repeat: -1,
      },
      "+=0.2"
    )
    // shape_6
    .fromTo(
      ".shape_6",
      {
        // 시작
        x: -500,
        y: -500,
      },
      {
        // 끝
        x: 0,
        y: 0,
        duration: 0.8,
      },
      "-=1.4"
    )
    .to(
      ".shape_6",
      {
        y: 10,
        duration: 0.8,
        ease: "linear",
        yoyo: true,
        repeat: -1,
      },
      "+=0.2"
    )
    // shape_7
    .fromTo(
      ".shape_7",
      {
        // 시작
        x: -1000,
      },
      {
        // 끝
        x: 0,
        duration: 0.8,
      },
      "-=1.3"
    )
    .to(
      ".shape_7",
      {
        y: 10,
        duration: 0.8,
        ease: "linear",
        yoyo: true,
        repeat: -1,
      },
      "+=0.2"
    )
    // shape_8
    .fromTo(
      ".shape_8",
      {
        // 시작
        x: 500,
      },
      {
        // 끝
        x: 0,
        duration: 0.8,
      },
      "-=1"
    )
    .to(
      ".shape_8",
      {
        y: 10,
        duration: 0.8,
        ease: "linear",
        yoyo: true,
        repeat: -1,
      },
      "+=0.2"
    )
    // shape_9
    .fromTo(
      ".shape_9",
      {
        // 시작
        x: -800,
        y: 800,
      },
      {
        // 끝
        x: 0,
        y: 0,
        duration: 0.8,
      },
      "-=2"
    )
    .to(
      ".shape_9",
      {
        y: 10,
        duration: 0.8,
        ease: "linear",
        yoyo: true,
        repeat: -1,
      },
      "+=0.2"
    )
    // shape_10
    .fromTo(
      ".shape_10",
      {
        // 시작
        y: 500,
      },
      {
        // 끝
        y: 0,
        duration: 0.8,
      },
      "-=1.5"
    )
    .to(
      ".shape_10",
      {
        y: 10,
        duration: 0.8,
        ease: "linear",
        yoyo: true,
        repeat: -1,
      },
      "+=0.2"
    )
    // shape_11
    .fromTo(
      ".shape_11",
      {
        // 시작
        y: 500,
      },
      {
        // 끝
        y: 0,
        duration: 0.8,
      },
      "-=1"
    )
    .to(
      ".shape_11",
      {
        y: 10,
        duration: 0.8,
        ease: "linear",
        yoyo: true,
        repeat: -1,
      },
      "+=0.2"
    )
    // shape_12
    .fromTo(
      ".shape_12",
      {
        // 시작
        x: -500,
      },
      {
        // 끝
        x: 0,
        duration: 0.8,
      },
      "-=1"
    )
    .to(
      ".shape_12",
      {
        y: 10,
        duration: 0.8,
        ease: "linear",
        yoyo: true,
        repeat: -1,
      },
      "+=0.2"
    );
});
