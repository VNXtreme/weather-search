import React, { SVGProps } from 'react';

export default function SearchIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <defs>
        <path
          id="svgsearch"
          d="M7.186 13.554c-3.462 0-6.303-2.869-6.303-6.359C.883 3.681 3.724.837 7.186.837c3.437 0 6.278 2.844 6.278 6.358 0 3.49-2.865 6.359-6.278 6.359zm5.323-1.602a7.176 7.176 0 001.815-4.757c0-3.968-3.2-7.195-7.138-7.195C3.223 0 0 3.227 0 7.195c0 3.944 3.223 7.171 7.186 7.171a7.058 7.058 0 004.75-1.84L17.427 18l.573-.55-5.49-5.498z"
        />
      </defs>
      <use
        fill="#000"
        fillRule="evenodd"
        stroke="#000"
        strokeWidth=".2"
        transform="translate(3 3)"
        xlinkHref="#svgsearch"
      />
    </svg>
  );
}
