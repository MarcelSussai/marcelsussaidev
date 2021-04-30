const LogoMarcelSussai = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 118 118" {...props}>
      <defs>
        <filter id="dropshadow">
          <feGaussianBlur in="SourceAlpha" stdDeviation="4"/> 
          <feOffset dx="0.8" dy="0.8"/>
          <feComponentTransfer>
            <feFuncA type="linear" slope="0.4"/>
          </feComponentTransfer>
          <feMerge> 
            <feMergeNode/>
            <feMergeNode in="SourceGraphic"/> 
          </feMerge>
        </filter>
      </defs>
      <g
        style={{
          isolation: "isolate",
        }}
      >
        <path
          d="M109 45V10.36A5.36 5.36 0 00103.64 5H69zM45 5H10.36A5.36 5.36 0 005 10.36V45zM5 69v34.64a5.36 5.36 0 005.37 5.36H45zM69 109h34.63a5.36 5.36 0 005.37-5.36V69z"
          fill="none"
          stroke="#fff2d0"
          strokeMiterlimit={10}
        />
        <use id="shadow-m" xlinkHref="#m" filter="url(#dropshadow)"></use>
        <path
          id="m"
          d="M62.27 13.87A18.15 18.15 0 0052.72 15a28.62 28.62 0 00-10.06 6.87l-33 33 9.52 9.53L67.6 15.94a14.21 14.21 0 00-5.33-2.07z"
          fill="#3c8ee3"
        />
        <use id="shadow-s" xlinkHref="#s" filter="url(#dropshadow)"></use>
        <path
          id="s"
          d="M100.14 51.74a13.32 13.32 0 00-3.71-7.39A13.47 13.47 0 0089 40.62a18.54 18.54 0 00-9.56 1.09 28.27 28.27 0 00-10.07 6.84L50.9 67a5.33 5.33 0 01-1.81 1.25 3.28 3.28 0 01-1.73.25 2.28 2.28 0 01-1.31-.63 1.89 1.89 0 01-.54-1.22 3.57 3.57 0 01.3-1.68 5.36 5.36 0 011.26-1.81l18.48-18.45a28.1 28.1 0 006.84-10.07 18.57 18.57 0 001.11-9.53 13.75 13.75 0 00-2-5.34L37.68 53.54a28.35 28.35 0 00-6.91 10.14 17.74 17.74 0 00-1 9.49 13.6 13.6 0 0011.1 11.12 18 18 0 009.48-1 28.2 28.2 0 0010.17-6.88l18.69-18.72a4.64 4.64 0 011.65-1.14 3.14 3.14 0 011.64-.21 2.28 2.28 0 011.31.63 2 2 0 01.58 1.27 3.73 3.73 0 01-.22 1.61 4.66 4.66 0 01-1.12 1.68L49.69 94.88l9.48 9.48 33-33A28.21 28.21 0 0099 61.27a18.57 18.57 0 001.14-9.53z"
          fill="#9cd056"
        />
      </g>
    </svg>
);

export default LogoMarcelSussai;