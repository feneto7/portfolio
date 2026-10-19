import { heroCopy } from '@/data/profile';

export function HeroIllustration() {
  return (
    <svg
      viewBox="0 0 560 470"
      role="img"
      aria-labelledby="hero-art-title"
      className="h-auto w-full overflow-visible"
    >
      <title id="hero-art-title">{heroCopy.illustrationAlt}</title>
      <defs>
        <pattern
          id="art-grid"
          width="30"
          height="30"
          patternUnits="userSpaceOnUse"
        >
          <path
            d="M 30 0 L 0 0 0 30"
            fill="none"
            stroke="currentColor"
            strokeWidth=".6"
          />
        </pattern>
      </defs>
      <circle cx="292" cy="226" r="191" className="fill-bg-sidebar/35" />
      <circle
        cx="292"
        cy="226"
        r="190"
        fill="url(#art-grid)"
        className="text-line/50"
      />
      <circle
        cx="292"
        cy="226"
        r="220"
        fill="none"
        stroke="currentColor"
        strokeDasharray="3 11"
        className="text-line"
      />
      <ellipse cx="291" cy="425" rx="210" ry="14" className="fill-ink/40" />
      <g
        fill="none"
        stroke="currentColor"
        className="text-accent/60"
        strokeWidth="1.5"
      >
        <path d="M66 130h12m-6-6v12M470 87h12m-6-6v12M496 308h12m-6-6v12" />
        <circle cx="114" cy="299" r="4" />
        <circle cx="394" cy="37" r="3" />
      </g>
      <g transform="translate(105 105) rotate(-5)">
        <rect
          width="70"
          height="48"
          rx="5"
          className="fill-bg-sidebar stroke-card-edge"
        />
        <path
          d="m24 15-10 9 10 9m22-18 10 9-10 9m-7-22-8 26"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="text-accent"
        />
      </g>
      <g transform="translate(426 150) rotate(8)">
        <rect
          width="55"
          height="55"
          rx="5"
          className="fill-bg-sidebar stroke-card-edge"
        />
        <g
          transform="translate(27 27)"
          fill="none"
          stroke="currentColor"
          className="text-accent"
        >
          <ellipse rx="19" ry="7" />
          <ellipse rx="19" ry="7" transform="rotate(60)" />
          <ellipse rx="19" ry="7" transform="rotate(120)" />
          <circle r="3" fill="currentColor" />
        </g>
      </g>
      <path
        d="M129 300v123m301-123v123"
        fill="none"
        stroke="currentColor"
        strokeWidth="9"
        className="text-art-mid"
      />
      <path
        d="M143 300v115m273-115V300"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        className="text-card-edge"
      />
      <rect
        x="124"
        y="169"
        width="159"
        height="110"
        rx="5"
        className="fill-art-dark stroke-art-mid"
        strokeWidth="4"
      />
      <rect
        x="134"
        y="180"
        width="139"
        height="86"
        rx="1"
        className="fill-bg-base"
      />
      <path
        d="M146 194h34m-34 11h12m8 0h53m-65 11h36m8 0h40m-84 11h58m-66 11h22m8 0h32m-54 11h47"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        className="text-accent/70"
      />
      <path
        d="M205 279v17m-24 0h47"
        stroke="currentColor"
        strokeWidth="6"
        className="text-art-mid"
      />
      <rect
        x="300"
        y="162"
        width="107"
        height="116"
        rx="5"
        className="fill-art-dark stroke-art-mid"
        strokeWidth="4"
      />
      <rect x="310" y="173" width="87" height="91" className="fill-bg-base" />
      <rect
        x="321"
        y="185"
        width="65"
        height="23"
        rx="2"
        className="fill-accent/20"
      />
      <path
        d="M322 220h40m-40 10h56m-56 10h26"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        className="text-accent/70"
      />
      <path
        d="M353 279v17m-21 0h42"
        stroke="currentColor"
        strokeWidth="6"
        className="text-art-mid"
      />
      <rect
        x="106"
        y="296"
        width="345"
        height="9"
        rx="2"
        className="fill-art-light"
      />
      <path
        d="M433 294v-26m0 14c-17 0-23-12-17-20 14 1 20 10 17 20m1-9c16-2 23-17 15-22-13 5-17 13-15 22"
        className="fill-accent/60"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path d="m421 281 3 15h21l3-15z" className="fill-art-mid" />
      <path
        d="m258 347-14 58 17 4 26-52m9-10 19 58 17-5-10-58"
        className="fill-art-dark"
        stroke="currentColor"
        strokeWidth="4"
      />
      <path
        d="m244 401-11 16c-3 5 0 9 6 9h24v-22m51-3 3 24h28c5 0 6-6 1-9l-18-14"
        className="fill-art-light"
      />
      <path
        d="M271 237c-25 0-39 16-43 41l-5 56h105l-7-60c-4-25-19-37-35-37z"
        className="fill-accent"
      />
      <path
        d="m236 261-22 28-27 1m129-26 16 22 26 3"
        fill="none"
        stroke="currentColor"
        strokeWidth="15"
        strokeLinecap="round"
        className="text-accent"
      />
      <path
        d="m185 290 13-5m158 4 12 3"
        stroke="currentColor"
        strokeWidth="10"
        strokeLinecap="round"
        className="text-art-light"
      />
      <path d="M270 224v18c3 12 20 12 23 0v-18" className="fill-art-light" />
      <ellipse cx="281" cy="206" rx="25" ry="29" className="fill-art-light" />
      <path
        d="M257 209c-7-11-7-29 4-36 10-15 36-10 44 3 7 10 2 26-3 33l-5-20c-12 4-22 1-31-4z"
        className="fill-art-dark"
      />
      <path
        d="M253 207v-11c0-39 58-40 58 0v12"
        fill="none"
        stroke="currentColor"
        strokeWidth="5"
        className="text-art-mid"
      />
      <rect
        x="250"
        y="197"
        width="9"
        height="19"
        rx="4"
        className="fill-accent"
      />
      <rect
        x="303"
        y="197"
        width="9"
        height="19"
        rx="4"
        className="fill-accent"
      />
      <rect
        x="239"
        y="286"
        width="80"
        height="72"
        rx="12"
        className="fill-art-mid stroke-card-edge"
        strokeWidth="2"
      />
      <path
        d="M279 358v53m-36 9 36-9 37 9"
        fill="none"
        stroke="currentColor"
        strokeWidth="7"
        strokeLinecap="round"
        className="text-art-mid"
      />
      <path
        d="M257 301h44"
        stroke="currentColor"
        strokeWidth="3"
        className="text-card-edge"
      />
      <circle cx="243" cy="423" r="5" className="fill-art-dark" />
      <circle cx="316" cy="423" r="5" className="fill-art-dark" />
    </svg>
  );
}
