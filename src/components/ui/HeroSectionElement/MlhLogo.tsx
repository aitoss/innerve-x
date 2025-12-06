'use client'

import { useEffect, useState } from 'react'

export default function MlhLogo({position}: {position?: string}) {
    const [isInHeroSection, setIsInHeroSection] = useState(false);

    useEffect(() => {
        const section = document.querySelector('#hero-section');
        
        if (!section) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsInHeroSection(entry.isIntersecting);
            },
            {
                threshold: 0.1, // Trigger when 10% of hero section is visible
            }
        );

        observer.observe(section);

        return () => {
            observer.disconnect();
        };
    }, []);

    return (
        <div 
            className={`fixed scale-70 md:scale-100 z-50 transition-all duration-700 ease-in-out ${position} ${
                isInHeroSection 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 -translate-y-8 pointer-events-none'
            }`}
        >
            <a
                id="mlh-trust-badge"
                style={{
                    display: "block",
                    maxWidth: "100px",
                    minWidth: "60px",
                }}
                href="https://mlh.io/na?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2026-season&utm_content=white"
                target="_blank"
                rel="noopener noreferrer"
            >
                <img
                    src="https://s3.amazonaws.com/logged-assets/trust-badge/2026/mlh-trust-badge-2026-white.svg"
                    alt="Major League Hacking 2026 Hackathon Season"
                    style={{ width: "100%" }}
                />
            </a>
        </div>
    )
}


// export default function MlhLogo({ position }: { position?: string }) {
//     return (
//         <div className={`fixed z-50 ${position}`}>
//             <a
//                 id="mlh-trust-badge"
//                 style={{
//                     display: "block",
//                     maxWidth: "100px",
//                     minWidth: "60px",
//                     width: "10%",
//                 }}
//                 href="https://mlh.io/na?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2026-season&utm_content=black"
//                 target="_blank"
//                 rel="noopener noreferrer"
//             >
//                 <img
//                     src="https://s3.amazonaws.com/logged-assets/trust-badge/2026/mlh-trust-badge-2026-black.svg"
//                     alt="Major League Hacking 2026 Hackathon Season"
//                     style={{ width: "100%" }}
//                 />
//             </a>
//         </div>
//     )
// }

// export default function MlhLogo({ position }: { position?: string }) {
//     return (
//         <div className={`fixed z-50 ${position}`}>
//             <a
//                 id="mlh-trust-badge"
//                 style={{
//                     display: "block",
//                     maxWidth: "100px",
//                     minWidth: "60px",
//                     width: "10%",
//                 }}
//                 href="https://mlh.io/na?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2026-season&utm_content=gray"
//                 target="_blank"
//                 rel="noopener noreferrer"
//             >
//                 <img
//                     src="https://s3.amazonaws.com/logged-assets/trust-badge/2026/mlh-trust-badge-2026-gray.svg"
//                     alt="Major League Hacking 2026 Hackathon Season"
//                     style={{ width: "100%" }}
//                 />
//             </a>
//         </div>
//     )
// }

// export default function MlhLogo({ position }: { position?: string }) {
//     return (
//         <div className={`fixed z-50 ${position}`}>
//             <a
//                 id="mlh-trust-badge"
//                 style={{
//                     display: "block",
//                     maxWidth: "100px",
//                     minWidth: "60px",
//                     width: "10%",
//                 }}
//                 href="https://mlh.io/na?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2026-season&utm_content=red"
//                 target="_blank"
//                 rel="noopener noreferrer"
//             >
//                 <img
//                     src="https://s3.amazonaws.com/logged-assets/trust-badge/2026/mlh-trust-badge-2026-red.svg"
//                     alt="Major League Hacking 2026 Hackathon Season"
//                     style={{ width: "100%" }}
//                 />
//             </a>
//         </div>
//     )
// }

// export default function MlhLogo({ position }: { position?: string }) {
//     return (
//         <div className={`fixed z-50 ${position}`}>
//             <a
//                 id="mlh-trust-badge"
//                 style={{
//                     display: "block",
//                     maxWidth: "100px",
//                     minWidth: "60px",
//                     width: "10%",
//                 }}
//                 href="https://mlh.io/na?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2026-season&utm_content=blue"
//                 target="_blank"
//                 rel="noopener noreferrer"
//             >
//                 <img
//                     src="https://s3.amazonaws.com/logged-assets/trust-badge/2026/mlh-trust-badge-2026-blue.svg"
//                     alt="Major League Hacking 2026 Hackathon Season"
//                     style={{ width: "100%" }}
//                 />
//             </a>
//         </div>
//     )
// }

// export default function MlhLogo({ position }: { position?: string }) {
//     return (
//         <div className={`fixed z-50 ${position}`}>
//             <a
//                 id="mlh-trust-badge"
//                 style={{
//                     display: "block",
//                     maxWidth: "100px",
//                     minWidth: "60px",
//                     width: "10%",
//                 }}
//                 href="https://mlh.io/na?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2026-season&utm_content=yellow"
//                 target="_blank"
//                 rel="noopener noreferrer"
//             >
//                 <img
//                     src="https://s3.amazonaws.com/logged-assets/trust-badge/2026/mlh-trust-badge-2026-yellow.svg"
//                     alt="Major League Hacking 2026 Hackathon Season"
//                     style={{ width: "100%" }}
//                 />
//             </a>
//         </div>
//     )
// }