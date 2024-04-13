export default function Logo({ color = "#FF5B5B", alternateColor = "#FF5C5C"} : {color?: string, alternateColor?: string}) {
  return (
    <>
      <g filter="url(#filter0_d_4_3)">
        <circle cx="230" cy="168" r="130.303" fill={color} />
      </g>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M209.973 91.4293C215.282 86.0448 222.506 83 230.061 83C237.616 83 244.839 86.0448 250.148 91.4293C255.454 96.8102 258.416 104.086 258.416 111.65V167.848C258.416 175.413 255.454 182.688 250.148 188.069C244.839 193.454 237.616 196.499 230.061 196.499C222.506 196.499 215.282 193.454 209.973 188.069C204.667 182.688 201.706 175.413 201.706 167.848V111.65C201.706 104.086 204.667 96.8102 209.973 91.4293ZM230.061 98.1515C226.594 98.1515 223.247 99.5473 220.762 102.067C218.274 104.591 216.857 108.036 216.857 111.65V167.848C216.857 171.463 218.274 174.908 220.762 177.431C223.247 179.951 226.594 181.347 230.061 181.347C233.528 181.347 236.875 179.951 239.359 177.431C241.847 174.908 243.264 171.463 243.264 167.848V111.65C243.264 108.036 241.847 104.591 239.359 102.067C236.875 99.5473 233.528 98.1515 230.061 98.1515ZM181.576 146.223C185.76 146.223 189.152 149.615 189.152 153.799V167.848C189.152 178.915 193.487 189.507 201.171 197.3C208.852 205.09 219.246 209.446 230.061 209.446C240.876 209.446 251.27 205.09 258.95 197.3C266.634 189.507 270.97 178.915 270.97 167.848V153.799C270.97 149.615 274.361 146.223 278.545 146.223C282.729 146.223 286.121 149.615 286.121 153.799V167.848C286.121 182.865 280.24 197.288 269.739 207.938C261.031 216.77 249.735 222.408 237.636 224.078V237.545H257.766C261.95 237.545 265.342 240.937 265.342 245.121C265.342 249.305 261.95 252.697 257.766 252.697H202.355C198.171 252.697 194.779 249.305 194.779 245.121C194.779 240.937 198.171 237.545 202.355 237.545H222.485V224.078C210.386 222.408 199.09 216.77 190.382 207.938C179.881 197.288 174 182.865 174 167.848V153.799C174 149.615 177.392 146.223 181.576 146.223Z" fill="white"/>
      <circle cx="113" cy="25" r="25" fill={alternateColor} />
      <circle cx="50" cy="83" r="50" fill={alternateColor} />
      <path d="M157.859 69.5369L113 24.7686" stroke={color} stroke-width="15"/>
      <path d="M129.284 111.883L70 89.4798" stroke={color} stroke-width="20"/>
      <defs>
      <filter id="filter0_d_4_3" x="95.697" y="37.697" width="268.606" height="268.606" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
      <feOffset dy="4"/>
      <feGaussianBlur stdDeviation="2"/>
      <feComposite in2="hardAlpha" operator="out"/>
      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_4_3"/>
      <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_4_3" result="shape"/>
      </filter>
      </defs>
    </>
  );
}

export function SimpleLogo({ color = "#FF5B5B", alternateColor = "#FF5C5C"} : {color?: string, alternateColor?: string}) {
  return (
    <>
      <g filter="url(#filter0_d_4_3)">
        <circle cx="230" cy="168" r="130.303" fill={color} />
      </g>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M209.973 91.4293C215.282 86.0448 222.506 83 230.061 83C237.616 83 244.839 86.0448 250.148 91.4293C255.454 96.8102 258.416 104.086 258.416 111.65V167.848C258.416 175.413 255.454 182.688 250.148 188.069C244.839 193.454 237.616 196.499 230.061 196.499C222.506 196.499 215.282 193.454 209.973 188.069C204.667 182.688 201.706 175.413 201.706 167.848V111.65C201.706 104.086 204.667 96.8102 209.973 91.4293ZM230.061 98.1515C226.594 98.1515 223.247 99.5473 220.762 102.067C218.274 104.591 216.857 108.036 216.857 111.65V167.848C216.857 171.463 218.274 174.908 220.762 177.431C223.247 179.951 226.594 181.347 230.061 181.347C233.528 181.347 236.875 179.951 239.359 177.431C241.847 174.908 243.264 171.463 243.264 167.848V111.65C243.264 108.036 241.847 104.591 239.359 102.067C236.875 99.5473 233.528 98.1515 230.061 98.1515ZM181.576 146.223C185.76 146.223 189.152 149.615 189.152 153.799V167.848C189.152 178.915 193.487 189.507 201.171 197.3C208.852 205.09 219.246 209.446 230.061 209.446C240.876 209.446 251.27 205.09 258.95 197.3C266.634 189.507 270.97 178.915 270.97 167.848V153.799C270.97 149.615 274.361 146.223 278.545 146.223C282.729 146.223 286.121 149.615 286.121 153.799V167.848C286.121 182.865 280.24 197.288 269.739 207.938C261.031 216.77 249.735 222.408 237.636 224.078V237.545H257.766C261.95 237.545 265.342 240.937 265.342 245.121C265.342 249.305 261.95 252.697 257.766 252.697H202.355C198.171 252.697 194.779 249.305 194.779 245.121C194.779 240.937 198.171 237.545 202.355 237.545H222.485V224.078C210.386 222.408 199.09 216.77 190.382 207.938C179.881 197.288 174 182.865 174 167.848V153.799C174 149.615 177.392 146.223 181.576 146.223Z" fill="white"/>
      <defs>
      <filter id="filter0_d_4_3" x="95.697" y="37.697" width="268.606" height="268.606" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
      <feOffset dy="4"/>
      <feGaussianBlur stdDeviation="2"/>
      <feComposite in2="hardAlpha" operator="out"/>
      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_4_3"/>
      <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_4_3" result="shape"/>
      </filter>
      </defs>
    </>
  );
}