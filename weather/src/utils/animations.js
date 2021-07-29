export const pageAnimation = {
  hidden: {
    opacity: 0,
    y: 300
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      when: "beforeChildren",
      staggerChildren: 0.1
    }
  }
}

export const weatherInfoAnimation = {
  hidden: {x: -2000},
  show: {
    x: 0,
    transition: { duration: 0.75, ease: "easeOut"}
  }
}