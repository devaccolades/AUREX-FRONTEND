// 1. fade in

'use client'
import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'

// export function Test() {
//   const ref = useRef(null)

//   useLayoutEffect(() => {
//     const ctx = gsap.context(() => {
//       gsap.from(ref.current, {
//         opacity: 0,
//         duration: 0.6,
//       })
//     })
//     return () => ctx.revert()
//   }, [])

//   return <h1 ref={ref} className="text-4xl font-bold">Fade In</h1>
// }


// 2.  slide up

// export function Test() {
//   const ref = useRef(null)

//   useLayoutEffect(() => {
//     const ctx = gsap.context(() => {
//       gsap.from(ref.current, {
//         y: 40,
//         opacity: 0,
//         duration: 0.6,
//         ease: 'power3.out',
//       })
//     })
//     return () => ctx.revert()
//   }, [])

//   return <h1 ref={ref} className="text-4xl font-bold">Slide Up</h1>
// }


// 3. Scale in

// export function Test() {
//   const ref = useRef(null)

//   useLayoutEffect(() => {
//     const ctx = gsap.context(() => {
//       gsap.from(ref.current, {
//         scale: 0.8,
//         opacity: 0,
//         duration: 0.6,
//         ease: 'back.out(1.7)',
//       })
//     })
//     return () => ctx.revert()
//   }, [])

//   return <h1 ref={ref} className="text-4xl font-bold">Scale In</h1>
// }



// 4. Blur

// export function Test() {
//   const ref = useRef(null)

//   useLayoutEffect(() => {
//     const ctx = gsap.context(() => {
//       gsap.from(ref.current, {
//         filter: 'blur(10px)',
//         opacity: 0,
//         duration: 0.6,
//         ease: 'power2.out',
//       })
//     })
//     return () => ctx.revert()
//   }, [])

//   return <h1 ref={ref} className="text-4xl font-bold">Blur In</h1>
// }


// 5. Mask


// export function Test() {
//   const wrapper = useRef(null)
//   const text = useRef(null)

//   useLayoutEffect(() => {
//     const ctx = gsap.context(() => {
//       gsap.from(text.current, {
//         y: '100%',
//         duration: 0.7,
//         ease: 'power3.out',
//       })
//     })
//     return () => ctx.revert()
//   }, [])

//   return (
//     <div ref={wrapper} className="overflow-hidden">
//       <h1 ref={text} className="text-4xl font-bold">
//         Reveal Text
//       </h1>
//     </div>
//   )
// }


6. 
