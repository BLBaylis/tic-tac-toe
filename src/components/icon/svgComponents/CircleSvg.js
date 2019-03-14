import React from "react";
import styles from "./svgComponents.module.scss";

const CircleSvg = ({ colour, bgColour }) => (
  <svg
    className={styles.svg}
    viewBox="0 0 312 312"
    style={{ backgroundColor: bgColour }}
  >
    <path d="M0 156V0h312v312H0z" fill={bgColour} />
    <path
      style={{ fill: colour }}
      d="M136 300.51c-23.517-4.039-39.921-10.463-59.325-23.233-39.467-25.975-64.654-72.743-64.671-120.08-.018-49.38 26.542-97.02 68.543-122.95C110.213 15.934 145.9 8.294 177.5 13.491c33.367 5.487 61.209 19.92 83.768 43.424 44.768 46.642 53.484 116.01 21.572 171.67-6.641 11.585-12.279 19.002-22.239 29.256-22.502 23.167-48.749 36.703-82.79 42.693-10.065 1.771-31.418 1.757-41.811-.028zm45.5-12.124c46.012-7.449 86.654-42.31 101.87-87.383 5.105-15.118 6.747-25.826 6.747-44s-1.642-28.882-6.747-44c-5.548-16.428-12.983-29.375-24.873-43.31-19.689-23.076-47.488-39.005-77.002-44.123-11.697-2.029-36.007-2.045-48.416-.032-22.869 3.709-44.878 14.253-64.084 30.702-22.274 19.077-38.462 47.497-43.437 76.263-1.993 11.525-2.037 36.028-.086 48.058 9.514 58.655 59.805 104.89 118.96 109.37 12.28.929 25.1.396 37.064-1.541z"
      fill="#d0edd8"
    />
    <path
      style={{ fill: colour }}
      d="M134.5 299.44c-32.343-5.465-58.509-19.304-81.599-43.157-18.917-19.542-31.503-43.746-37.588-72.288-2.556-11.987-2.56-41.986-.006-54 7.752-36.476 27.651-67.696 57.194-89.732 14.256-10.634 37.441-20.699 57.5-24.962 12.014-2.553 42.013-2.55 54 .006 19.31 4.117 37.862 11.817 53.97 22.4 11.983 7.874 30.76 26.934 39.45 40.047 22.741 34.317 29.561 79.026 18.091 118.61-7.408 25.562-16.965 42.02-35.41 60.977-22.474 23.098-47.937 36.365-80.84 42.12-10.739 1.878-33.597 1.87-44.762-.016zm37.608-8.94c30.854-2.28 65.055-20.184 86.452-45.262 22.27-26.1 32.612-54.084 32.612-88.242 0-33.928-10.171-61.662-32.194-87.793-11.415-13.544-25.95-24.646-43.478-33.21-20.559-10.047-32.033-12.498-58.5-12.498-15.138 0-21.401.41-28 1.831-51.511 11.096-92.573 52.158-103.67 103.67-1.421 6.6-1.83 12.862-1.83 28 0 20.418 1.136 28.96 5.657 42.5 2.705 8.103 10.82 24.646 15.695 32 18.64 28.113 48.286 48.738 81.131 56.444 9.943 2.333 26.367 3.997 34.016 3.446 2.475-.178 7.924-.576 12.108-.885z"
      fill="#b6e4c4"
    />
    <path
      style={{ fill: colour }}
      d="M132.5 298.5c-19.385-3.398-35.962-9.78-52.408-20.175-15.006-9.485-36.038-30.6-44.644-44.821-16.388-27.077-22.134-49.2-21.152-81.436.76-24.958 4.625-40.393 15.239-60.866 7.549-14.56 15.2-24.703 27.947-37.052C77.626 34.636 100.242 22.383 127 16.487c11.35-2.5 40.078-3.127 52.564-1.146 19.855 3.15 35.635 9.034 53.936 20.11 13.812 8.36 34.439 28.673 43.971 43.303 10.982 16.855 17.925 35.1 21.192 55.686 1.982 12.488 1.355 41.215-1.147 52.564-6.46 29.309-17.405 49.036-39.438 71.09-22.02 22.041-41.042 32.591-71.097 39.435-10.264 2.337-43.323 2.926-54.48.97zm55-9.828c49.973-12.698 86.32-47.85 99.954-96.667 3.373-12.077 4.546-21.111 4.546-35s-1.173-22.923-4.546-35c-14.02-50.202-53.008-86.661-104.45-97.679-11.944-2.558-40.053-2.558-52 0-41.938 8.979-77.393 36.297-94.977 73.18-5.752 12.064-9.268 22.128-11.703 33.5-2.558 11.946-2.558 40.055 0 52 11.473 53.563 51.336 94.263 103.68 105.86 5.226 1.157 10.626 2.303 12 2.547 1.376.243 10.376.3 20 .124 14.753-.27 19.07-.719 27.5-2.86z"
      fill="#9bdbae"
    />
    <path
      style={{ fill: colour }}
      d="M133.5 298.44c-29.971-5.064-55.517-18.359-77.59-40.381-20.569-20.521-33.446-44.283-39.594-73.063-2.576-12.06-2.579-43.921-.004-56C23.766 94.024 43.837 62.685 72.5 41.264c14.262-10.658 37.43-20.892 56.5-24.956 12.079-2.575 43.94-2.572 56 .004 28.785 6.15 52.55 19.028 73.058 39.594 28.015 28.092 41.934 61.647 41.934 101.09 0 38.98-13.365 72.016-40.391 99.841-21.866 22.513-47.758 36.096-79.34 41.62-10.8 1.89-35.535 1.88-46.762-.016zm36.5-6.891c16.879-1.077 37.653-7.579 53.753-16.823 31.569-18.127 54.074-46.987 63.706-81.695 3.413-12.3 4.64-21.832 4.64-36.036 0-24.888-5.75-46.786-17.697-67.398-21.098-36.398-56.132-60.081-98.623-66.67-9.956-1.544-36.676-.645-46.778 1.573-52.352 11.496-92.863 52-104.51 104.49-2.218 9.994-3.07 35.548-1.541 46.212 9.124 63.652 60.338 112.07 123.42 116.68 5.575.408 11.26.62 12.636.471 1.375-.149 6.325-.514 11-.812z"
      fill="#71cc8c"
    />
    <path
      style={{ fill: colour }}
      d="M132.5 297.44c-29.93-5.057-53.656-17.491-76.092-39.879-20.93-20.885-32.978-42.94-39.093-71.566-2.589-12.117-2.59-45.863-.004-58 7.368-34.568 27.11-65.042 56.188-86.732 14.063-10.489 35.475-19.902 54.5-23.957 12.137-2.587 45.883-2.584 58 .004 28.629 6.116 50.688 18.166 71.56 39.093 28.483 28.556 41.43 59.994 41.43 100.59 0 40.142-12.444 71.134-39.89 99.341-22.277 22.896-46.348 35.612-77.84 41.12-10.854 1.899-37.48 1.89-48.761-.016zm55-7.777c50.591-12.855 87.143-48.218 100.95-97.667 3.373-12.077 4.546-21.111 4.546-35 0-23.151-5.12-43.566-15.97-63.682-19.75-36.618-52.7-61.146-94.03-69.998-11.944-2.559-40.053-2.559-52-.001-54.729 11.718-95.962 52.952-107.68 107.68-2.558 11.947-2.557 40.056 0 52 3.571 16.67 11.6 36.025 20.534 49.5 19.07 28.763 49.888 49.769 84.146 57.356 5.225 1.157 10.625 2.303 12 2.547 1.375.244 10.375.3 20 .124 14.752-.269 19.07-.718 27.5-2.86z"
      fill="#5bc479"
    />
    <path
      style={{ fill: colour }}
      d="M133.5 297.44c-29.692-5.017-55.541-18.391-77.089-39.884-20.036-19.985-33.007-44.059-39.095-72.561-2.576-12.06-2.579-43.921-.004-56 7.414-34.786 27.103-65.726 55.192-86.732C86.75 31.61 109.926 21.372 129 17.306c12.079-2.575 43.94-2.572 56 .004 28.507 6.09 52.583 19.063 72.556 39.095 27.484 27.567 41.436 61.436 41.436 100.59 0 38.682-13.372 71.982-39.891 99.342-21.278 21.953-47.524 35.641-78.84 41.12-10.8 1.888-35.534 1.88-46.761-.017zm36.5-4.891c41.293-2.635 83.088-29.66 105.4-68.155 11.948-20.613 17.698-42.51 17.698-67.398 0-36.036-12.315-66.846-37.464-93.731-20.663-22.09-48.436-36.465-79.857-41.337-9.956-1.544-36.676-.645-46.778 1.573-52.532 11.536-93.823 52.821-105.51 105.49-2.218 9.994-3.07 35.548-1.541 46.212 6.133 42.786 30.795 79.031 68.469 100.63 10.943 6.274 21.842 10.52 35.448 13.808 9.675 2.34 27.444 4.333 33.136 3.717 1.375-.148 6.325-.514 11-.812z"
      fill="#47bd6a"
    />
    <path
      style={{ fill: colour }}
      d="M131.36 296.43c-27.903-4.687-52.977-17.945-74.447-39.365-16.761-16.721-26.999-33.208-34.441-55.455-4.699-14.048-6.46-26.209-6.46-44.608 0-18.646 1.776-30.696 6.632-45 11.88-34.996 36.443-63.878 68.36-80.383 21.831-11.289 40.098-15.609 66-15.609 24.652 0 43.028 4.07 63.077 13.97 28.17 13.911 54.05 40.528 65.843 67.715 9.038 20.839 12.072 35.743 12.072 59.307 0 17.932-1.658 29.794-6.113 43.752-7.117 22.298-16.473 37.786-33.278 55.089-21.23 21.859-46.704 35.436-76.146 40.586-11.136 1.948-39.507 1.949-51.099.001zm57.143-6.276c23.337-5.933 40.075-14.518 57.81-29.65 29.975-25.576 47.69-64.024 47.69-103.5 0-48.543-26.22-93.842-68.5-118.34-20.667-11.976-44.941-18.655-67.808-18.658-33.284-.004-64.45 11.761-90.692 34.236-28.857 24.715-46.994 64.104-46.999 102.07-.003 24.24 6.836 49.244 19.196 70.186 18.121 30.703 48.582 53.891 82.303 62.651 16.21 4.211 21.42 4.81 38.5 4.428 14.351-.321 18.063-.767 28.5-3.42z"
      fill="#26b14f"
    />
  </svg>
);

export default CircleSvg;