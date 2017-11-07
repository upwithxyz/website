import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';

const Wrapper = styled.svg.attrs({
  viewBox: '0 0 428 764'
})`
  width: 40%;
  position: absolute;
  top: ${p => p.theme.sizes.large};
  right: ${p => p.theme.sizes.gutter};
  bottom: 0;
  width: 40%;
  z-index: 1;
`;

const rotate = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(359deg); }
`;

const WheelGroup = styled.g`
  will-change: transform;
  transform-origin: center center;
  animation: 50s linear 0s infinite ${p => (p.inReverse ? 'reverse' : 'normal')} ${rotate};
`;

const wheelD =
  'M113.5 78.5c0 5.31-1.034 10.375-2.91 15-.415 1.022 19.41 26.5 35.91 24-1.882 3.717-19.604 22.083-22.5 25 1-17.5-27.377-31.264-30.5-29.496A38.404 38.404 0 0 1 82 117.27c-1.424.281-16 27.73-7.5 39.23-6.648 6.495-30.44-6.5-31.5-6.5 11.5-8 17.454-34.006 11.636-37.5A39.373 39.373 0 0 1 43.15 102C41.453 99.682 15.5 103 7 112.5c-2.142-4.891-7-17.305-7-23C17.5 93 35.545 76.153 35.634 75a42.96 42.96 0 0 1 2.479-11.5C39.229 60.458 29 41 12 37c1.74-2.585 13.209-16.453 15.5-18.5C31 33.5 53.886 43.858 57 42.394 61.638 40.212 66.86 39 72.5 39 75.045 39 86 8 77 0c2.948.504 27.8 3.413 30.5 4.5C96.953 8.785 96 38.5 97 44c2.5 6 6.697 6.913 8 8.5 2.171 2.644 36.5-2 40-13.5 1.152 2.533 9.896 27.212 10.5 30-12-9.5-42 6.582-42 9.5z';

const Wheel = styled.path.attrs({
  fill: '#b499ff',
  fillOpacity: 0.3,
  d: wheelD
})``;

class Recorder extends Component {
  shouldComponentUpdate() {
    return false; // since this is static artwork, updates aren't necessary
  }

  render() {
    return (
      <Wrapper>
        <use
          xlinkHref="#a"
          transform="rotate(-178.316 177.737 378.833)"
          fill="#F69B39"
          fillOpacity={0.21}
        />
        <use
          xlinkHref="#a"
          transform="rotate(-178.316 177.2 376.34)"
          fill="#FAFF99"
          fillOpacity={0.25}
        />
        <use xlinkHref="#a" transform="rotate(-178.316 176.722 377.848)" fill="#DD6868" />
        <g filter="url(#b)" transform="translate(-4404 638)">
          <use xlinkHref="#c" transform="translate(4489 -622)" fill="#FAFF99" fillOpacity={0.25} />
          <use xlinkHref="#c" transform="translate(4501 -611)" fill="#F69B39" fillOpacity={0.21} />
          <use xlinkHref="#c" transform="translate(4496 -617)" fill="#413657" />
          <use xlinkHref="#d" transform="translate(4521 -434)" fill="#FAFF99" fillOpacity={0.1} />
          <use xlinkHref="#e" transform="rotate(-178.316 2384.94 -246.22)" fill="#DD6868" />
          <use xlinkHref="#f" transform="translate(4533 -577)" fill="#8B77C1" />

          <WheelGroup>
            <Wheel transform="translate(4481.5 -629)" />
          </WheelGroup>

          <WheelGroup inReverse>
            <Wheel transform="translate(4663.5 -621)" />
          </WheelGroup>

          <use xlinkHref="#h" transform="translate(4481 -630)" fill="#B499FF" />
          <use xlinkHref="#h" transform="translate(4663 -622)" fill="#B499FF" />
          <use xlinkHref="#f" transform="translate(4715 -569)" fill="#8B77C1" />
          <use xlinkHref="#i" transform="translate(4588 -454)" fill="#B499FF" />
          <use xlinkHref="#j" transform="translate(4528 -383)" fill="#DD6868" />
          <use xlinkHref="#j" transform="translate(4560 -383)" fill="#B499FF" />
          <use xlinkHref="#j" transform="translate(4715 -383)" fill="#DD6868" />
          <use xlinkHref="#j" transform="translate(4745 -383)" fill="#B499FF" />
          <use xlinkHref="#i" transform="translate(4646 -571)" fill="#B499FF" />
          <use xlinkHref="#k" transform="translate(4649 -597)" fill="#B499FF" />
          <mask id="m">
            <use xlinkHref="#l" fill="#fff" transform="translate(4590 -389)" />
          </mask>
          <g mask="url(#m)">
            <use xlinkHref="#n" transform="translate(4590 -389)" fill="#B499FF" />
          </g>
          <g>
            <mask id="o">
              <use xlinkHref="#l" fill="#fff" transform="translate(4666 -389)" />
            </mask>
            <g mask="url(#o)">
              <use xlinkHref="#n" transform="translate(4666 -389)" fill="#B499FF" />
            </g>
          </g>
          <path
            d="M0 0h14.213v-1H0v1z"
            transform="rotate(-129.289 2253.78 -1292.114)"
            fill="#B499FF"
          />
          <path
            d="M0 0h14.866v-1H0v1z"
            transform="rotate(-132.274 2221.546 -1201.556)"
            fill="#B499FF"
          />
          <path
            d="M11 5.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"
            transform="translate(4586 -467)"
            fill="#B499FF"
          />
          <path
            d="M82 0H10L0 26.5C10 40 82 40 91.5 26.5L82 0z"
            transform="translate(4603 -456)"
            fill="#8B77C1"
          />
        </g>

        <defs>
          <filter
            id="b"
            filterUnits="userSpaceOnUse"
            x={4469}
            y={-638}
            width={363}
            height={312}
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity={0} result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 255 0" />
            <feOffset dy={4} />
            <feGaussianBlur stdDeviation={5} />
            <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
            <feBlend in2="BackgroundImageFix" result="effect1_dropShadow" />
            <feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
          </filter>
          <path
            id="a"
            d="M113.965 124.432l2.243-1.105-2.243 1.105zM29.163 81.406l.25-2.487-.25 2.487zm63.782 127.68l-1.875-1.654 1.875 1.654zm251.817 7.1l2.416.641-2.416-.641zm-100.163-89.094l-.423 2.464.423-2.464zm-35.588 133.604l-.31 2.481.038.005.038.003.234-2.489zm-92.803-137.369C93.717 77.665 40.293 80.013 29.414 78.919l-.5 4.975c12.198 1.227 61.826-.957 82.808 41.642l4.486-2.209zM29.414 78.919C14.27 77.395 6.864 72.428 4.025 66.54 1.147 60.571 2.421 52.57 7.23 43.747 16.823 26.142 39.163 7.81 59.426 2.416L58.14-2.416c-21.652 5.764-45.083 25.02-55.301 43.77-5.098 9.356-7.24 19.224-3.317 27.359 3.962 8.218 13.573 13.589 29.391 15.18l.5-4.974zM31.636 373.3c5.49 8.061 14.196 15.619 23.515 23.022 9.315 7.399 19.359 14.782 27.913 22.789 8.55 7.996 15.414 16.422 18.668 25.858 3.214 9.32 2.993 19.877-3.112 32.404l4.495 2.191c6.632-13.609 7.029-25.539 3.344-36.225-3.646-10.571-11.2-19.669-19.98-27.88-8.775-8.201-18.976-15.71-28.218-23.052-9.238-7.337-17.399-14.368-22.486-21.913l-4.14 2.806zm63.183-162.56c5.907-6.693 21.965-30.459 47.508-51.036 25.443-20.496 59.829-37.374 101.849-30.149l.847-4.928c-43.951-7.557-79.758 10.178-105.833 31.183-25.974 20.924-42.758 45.546-48.12 51.621l3.749 3.309zm149.357-81.185c37.999 6.534 64.26 22.028 80.133 38.924 15.974 17.003 21.203 35.114 18.036 47.066l4.833 1.281c3.78-14.264-2.611-34.087-19.225-51.77-16.714-17.791-44.007-33.736-82.93-40.429l-.847 4.928zm98.169 85.99c-5.081 19.177-21.811 31.409-45.918 38.087-24.203 6.723-54.981 7.615-87.181 4.574l-.469 4.978c32.507 3.06 64.194 2.115 88.985-4.733 24.886-6.894 43.677-19.966 49.416-41.625l-4.833-1.281zm-133.024 42.67c-26.439-3.304-43.857-10.539-55.56-20.012-11.816-9.497-17.873-21.201-21.592-34.324-3.745-13.123-4.874-27.285-6.482-41.186-1.609-13.903-3.752-27.672-9.479-39.367l-4.486 2.209c5.444 10.987 7.401 23.922 8.998 37.733 1.599 13.814 2.784 28.377 6.64 41.979 3.883 13.604 10.714 26.624 23.255 36.842 12.652 10.241 31.056 17.71 58.086 21.087l.62-4.961zM35.775 370.495c-10.022-14.785-12.532-35.102-3.858-61.64 8.688-26.585 28.546-59.189 62.902-98.114l-3.749-3.309c-34.582 39.182-54.921 72.379-63.906 99.87-9 27.539-6.661 49.574 4.472 65.999l4.139-2.806z"
          />
          <path id="c" d="M0 0h308v271H0V0z" />
          <path id="d" d="M0 0h260v27H0V0z" />
          <path
            id="e"
            d="M39.786 159.181l.025-1.5-.101-.001-.1.012.176 1.489zm191.168 2.381l-.143-1.493-.012.001-.013.002.168 1.49zm-50.17-123.579l-1.118 1 .016.018.016.017 1.086-1.035zm4.719-26.65l.817-1.258-.045-.029-.046-.025-.726 1.312zM162.66 0l.635-1.359-.323-.15-.356.01L162.66 0zM84.194 2.308l-.044-1.5-.162.005-.157.04.363 1.455zM5.978 98.148l1.314.723.04-.073.032-.076-1.386-.574zm218.978 64.091l-.024 1.499.096.002.097-.011-.169-1.49zm-41.467-134.34l.454 1.43.202-.064.176-.117-.832-1.248zm61.279 63.594c5.689 2.37 10.005 7.518 12.673 14.166 2.706 6.711 3.643 14.61 2.681 22.495-1.894 15.707-11.311 30.198-29.311 31.915l.285 2.986c19.896-1.898 30.009-17.994 32.005-34.541.983-8.242-.047-16.886-2.876-23.972-2.868-7.148-7.657-13.05-14.303-15.819l-1.154 2.77zm1.154-2.77c-12.068-5.028-28.034-17.887-41.106-29.647a478.63 478.63 0 0 1-21.197-20.323 277.498 277.498 0 0 1-1.743-1.798l-.005-.005-.001-.001-1.086 1.034c-1.086 1.035-1.085 1.036-1.085 1.036l.002.002.005.006.023.023.088.092.342.355c.299.31.743.769 1.315 1.353a484.411 484.411 0 0 0 21.336 20.456c13.041 11.733 29.356 24.936 41.958 30.187l1.154-2.77zm-54.707-69.26c.545-3.21-1.049-6.889-4.895-9.388l-1.634 2.516c3.036 1.973 3.88 4.553 3.571 6.37l2.958.502zm-4.986-9.443c-16.017-8.85-15.71-8.001-22.934-11.379l-1.27 2.718c7.36 3.44 6.854 2.501 22.753 11.287l1.451-2.626zM162.616-1.5L84.15.809l.088 3 78.466-2.309-.088-2.998zM84.194 2.309A395.693 395.693 0 0 0 83.83.852h-.002l-.005.002a7.165 7.165 0 0 0-.105.026 332.502 332.502 0 0 0-1.566.395A742.37 742.37 0 0 0 77.71 2.42a699.256 699.256 0 0 0-13.716 3.717C58.93 7.57 53.73 9.125 49.593 10.545c-2.075.712-3.925 1.406-5.347 2.03-1.347.593-2.608 1.243-3.273 1.948l2.183 2.058c.184-.195.877-.634 2.297-1.259 1.346-.592 3.08-1.242 5.114-1.94 4.08-1.401 9.2-2.932 14.244-4.36a694.778 694.778 0 0 1 13.656-3.7 740.437 740.437 0 0 1 5.98-1.531c.036-.01.063-.016.082-.02l.02-.006.005-.001h.002l-.362-1.456zm-43.22 12.215c-.367.389-.78 1.084-1.19 1.829-.436.797-.978 1.863-1.593 3.127-1.226 2.52-2.792 5.922-4.566 9.885-3.547 7.922-7.957 18.147-12.257 28.25A5085.416 5085.416 0 0 0 4.616 97.517c-.009.018-.014.033-.018.042a6.173 6.173 0 0 1-.005.011l-.001.003 1.386.574 1.386.573.001-.003.004-.01.018-.043.07-.17a1720.856 1720.856 0 0 1 1.317-3.172c.9-2.167 2.19-5.265 3.749-8.996 3.117-7.46 7.308-17.443 11.605-27.539 4.297-10.096 8.697-20.295 12.235-28.198 1.768-3.949 3.313-7.308 4.525-9.798a71.799 71.799 0 0 1 1.527-2.997c.204-.373.369-.656.515-.887.136-.216.268-.367.226-.327l-2.183-2.058zM4.662 97.426c-9.786 17.815-6.877 34.356 1.463 46.071 8.266 11.612 21.96 18.582 33.837 17.174l-.353-2.979c-10.555 1.252-23.261-5.008-31.04-15.934C.866 130.935-1.914 115.629 7.292 98.87l-2.63-1.444zm35.099 63.255l185.17 3.057.049-2.999-185.17-3.058-.05 3zm185.363 3.048l5.997-.676-.336-2.981-5.998.676.337 2.981zM188.56 25.732c1.145-1.4 2.189-3.523 2.655-6.269l-2.958-.502c-.387 2.281-1.233 3.91-2.019 4.873l2.322 1.898zm-6.657 11.252c-1.439-1.61-1.54-3.264-1.029-4.635.543-1.458 1.791-2.614 3.069-3.02l-.908-2.859c-2.191.696-4.119 2.543-4.972 4.83-.886 2.376-.605 5.213 1.603 7.683l2.237-2zm2.418-7.836c1.006-.67 3.097-2.018 4.239-3.416l-2.322-1.898c-.79.966-2.413 2.04-3.581 2.817l1.664 2.497z"
          />
          <path
            id="f"
            d="M53 26.5C53 41.136 41.136 53 26.5 53S0 41.136 0 26.5 11.864 0 26.5 0 53 11.864 53 26.5z"
          />
          <path
            id="h"
            d="M155 79.5c0 42.826-34.274 77.5-76.5 77.5v4c44.483 0 80.5-36.513 80.5-81.5h-4zM78.5 157C36.274 157 2 122.326 2 79.5h-4c0 44.987 36.017 81.5 80.5 81.5v-4zM2 79.5C2 36.674 36.274 2 78.5 2v-4C34.017-2-2 34.513-2 79.5h4zM78.5 2C120.726 2 155 36.674 155 79.5h4C159 34.513 122.983-2 78.5-2v4z"
          />
          <path id="i" d="M17 8c0 4.418-3.806 8-8.5 8S0 12.418 0 8s3.806-8 8.5-8S17 3.582 17 8z" />
          <path
            id="j"
            d="M22 11c0 6.075-4.925 11-11 11S0 17.075 0 11 4.925 0 11 0s11 4.925 11 11z"
          />
          <path id="k" d="M10 5A5 5 0 1 1 0 5a5 5 0 0 1 10 0z" />
          <path id="l" d="M0 0h43v25H0V0z" />
          <path
            id="n"
            d="M0 0v-3h-3v3h3zm43 0h3v-3h-3v3zm0 25v3h3v-3h-3zM0 25h-3v3h3v-3zM0 3h43v-6H0v6zm40-3v25h6V0h-6zm3 22H0v6h43v-6zM3 25V0h-6v25h6z"
          />
        </defs>
      </Wrapper>
    );
  }
}

export default Recorder;