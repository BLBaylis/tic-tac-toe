import React from 'react'
import styles from './svgComponents.module.scss'

const WheelSvg = props => (
  <svg viewBox="0 0 312 312" {...props}>
    <image
      width={312}
      height={312}
      imageRendering="optimizeQuality"
      preserveAspectRatio="none"
      xlinkHref="data:image/png;base64,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"
    />
    <path d="M0 156V0h312v312H0z" fill="#fdfdfd" />
    <path
    className = {styles[props.colour]}
      d="M136 300.51c-23.517-4.039-39.921-10.463-59.325-23.233-39.467-25.975-64.654-72.743-64.671-120.08-.018-49.38 26.542-97.02 68.543-122.95C110.213 15.934 145.9 8.294 177.5 13.491c33.367 5.487 61.209 19.92 83.768 43.424 44.768 46.642 53.484 116.01 21.572 171.67-6.641 11.585-12.279 19.002-22.239 29.256-22.502 23.167-48.749 36.703-82.79 42.693-10.065 1.771-31.418 1.757-41.811-.028zm18-78.752v-52.245l-37 36.99c-20.35 20.344-37 37.542-37 38.216 0 1.659 13.756 11.319 23 16.153 12.828 6.707 30.008 11.403 45.5 12.437 2.75.184 5.112.415 5.25.514.138.1.25-23.33.25-52.065zm25 49.831c9.871-1.77 21.628-5.851 31.464-10.924 8.098-4.177 21.449-13.558 24.986-17.556l1.95-2.204-35.7-35.699-35.699-35.699v103.5l2.75-.035c1.513-.019 6.125-.64 10.25-1.379zm-70-72.086l36.49-36.5H41v3.869c0 11.817 6.408 34.016 13.459 46.625 4.6 8.224 15.305 22.506 16.87 22.506.65 0 17.601-16.425 37.67-36.5zm139.01 30.273c4.688-6.34 9.757-14.361 12.497-19.773C266.41 198.345 272 177.619 272 167.393v-4.39h-97.489l34.989 35c19.244 19.25 35.245 35 35.557 35 .312 0 1.64-1.452 2.953-3.226zM109.5 114.006c-20.344-20.35-37.291-37-37.659-37-1.23 0-11.039 13.009-15.875 21.056-7.922 13.181-14.919 35.731-14.953 48.194l-.013 4.75h105.49zM272 146.594c0-11.677-6.388-33.554-13.383-45.827-4.89-8.582-13.352-20.761-14.423-20.761-.388 0-16.675 15.975-36.194 35.5l-35.489 35.5H272zM154 91.855V40.704l-9.75.602c-20.378 1.259-45.635 11.548-60.575 24.678l-3.825 3.362 36.82 36.83c20.25 20.257 36.935 36.83 37.075 36.83s.255-23.018.255-51.151zm82-20.051c0-1.189-13.06-11.19-20.288-15.537-3.733-2.245-10.784-5.681-15.668-7.636-8.472-3.39-25.938-7.625-31.451-7.625H166v101.49l35-34.99c19.25-19.243 35-35.31 35-35.701z"
      fill="#eff8d2"
    />
    <path
    className = {styles[props.colour]}
      d="M134.5 299.44c-32.343-5.465-58.509-19.304-81.599-43.157-18.917-19.542-31.503-43.746-37.588-72.288-2.556-11.987-2.56-41.986-.006-54 7.752-36.476 27.651-67.696 57.194-89.732 14.256-10.634 37.441-20.699 57.5-24.962 12.014-2.553 42.013-2.55 54 .006 19.31 4.117 37.862 11.817 53.97 22.4 11.983 7.874 30.76 26.934 39.45 40.047 22.741 34.317 29.561 79.026 18.091 118.61-7.408 25.562-16.965 42.02-35.41 60.977-22.474 23.098-47.937 36.365-80.84 42.12-10.739 1.878-33.597 1.87-44.762-.016zm20.5-77.945c0-28.875-.34-52.5-.755-52.5s-17.581 16.83-38.145 37.4c-24.225 24.232-37.198 37.901-36.844 38.823.3.782 4.528 4.145 9.395 7.472 20.018 13.686 40.175 20.851 59.6 21.188l6.75.117zm23.119 51.032c11.006-1.927 20.65-5.286 31.975-11.135 9.173-4.738 22.624-14.072 26.354-18.29l1.948-2.202-35.942-35.953c-19.768-19.774-36.282-35.953-36.698-35.953-.416 0-.756 23.625-.756 52.5v52.5h2.37c1.302 0 6.14-.66 10.75-1.468zm-68.874-72.277C129.46 180.04 146 163.165 146 162.75s-23.915-.755-53.144-.755H39.712l.663 7.946c1.05 12.584 5.005 26.331 11.094 38.554 5.512 11.067 17.65 28.5 19.843 28.5.648 0 17.718-16.535 37.933-36.745zm138.76 30.518c14.504-19.618 23.101-40.875 24.68-61.023l.607-7.75h-49.648c-27.307 0-49.648.335-49.648.745 0 .858 70.2 71.255 71.057 71.255.312 0 1.641-1.452 2.953-3.227zm-101.01-79.528c0-.415-16.901-17.628-37.557-38.25L71.881 75.495l-3.48 4c-15.31 17.596-26.404 43.166-28.095 64.75l-.607 7.75h53.648c29.507 0 53.648-.34 53.648-.755zm125.69-6.995c-.857-10.932-4.99-26.284-9.76-36.25-4.016-8.392-15.955-27.28-18.07-28.587-1.029-.636-72.86 70.18-72.86 71.831 0 .415 22.793.755 50.649.755h50.648zm-117.69-52.401V39.693l-9.75.624c-18.049 1.156-37.049 7.944-53.639 19.164-4.461 3.017-9.207 6.42-10.546 7.56l-2.435 2.074 37.43 37.44c20.586 20.592 37.77 37.44 38.185 37.44s.755-23.468.755-52.151zm46.745 15.906c19.39-19.385 35.255-35.565 35.255-35.957 0-.855-11.842-10.264-17.581-13.968-6.76-4.364-17.893-9.668-26.024-12.397-7.431-2.495-21.555-5.429-26.145-5.432l-2.25-.001v51.5c0 28.325.335 51.5.745 51.5s16.61-15.86 36-35.245z"
      fill="#e3f4ad"
    />
    <path
    className = {styles[props.colour]}
      d="M132.5 298.44c-30.189-5.101-53.626-17.456-76.593-40.377-21.465-21.423-33.422-43.187-39.591-72.068-2.589-12.117-2.59-45.863-.004-58 7.4-34.723 27.565-65.659 57.188-87.736C87.577 29.768 108.983 20.36 128 16.307c12.137-2.587 45.883-2.584 58 .004 28.885 6.17 50.652 18.13 72.063 39.591 29.018 29.087 41.929 60.218 41.929 101.09 0 26.873-5.783 49.957-17.661 70.5-6.408 11.082-12.114 18.448-22.73 29.34-22.854 23.453-46.602 36.07-78.34 41.621-10.855 1.899-37.481 1.89-48.762-.016zm23.259-77.195c.206-42.378 0-53.25-1.005-53.25-2.17 0-77.105 75.643-76.499 77.223.798 2.08 16.977 12.887 26.245 17.531 14.444 7.237 33.45 12.274 45 11.927l6-.18zm20.405 52.281c11.429-1.993 22.415-5.78 34.139-11.765C224.476 254.524 238 244.413 238 241.053c0-1.841-70.921-73.058-72.755-73.058-.977 0-1.245 11.35-1.245 52.833 0 29.058.3 53.133.667 53.5.932.932 1.96.86 11.497-.803zm-66.409-72.786C130.24 180.25 147 162.925 147 162.24c0-.978-11.486-1.245-53.531-1.245-47.938 0-53.595.166-54.14 1.585-.91 2.37 1.42 17.305 4.241 27.199 1.367 4.794 4.937 13.666 7.932 19.716 5.475 11.058 17.605 28.5 19.82 28.5.653 0 17.948-16.765 38.432-37.255zm137.88 31.505c8.949-11.517 17.989-29.147 21.807-42.526 2.917-10.223 5.187-24.633 4.26-27.047-.59-1.538-4.782-1.677-50.675-1.677-39.247 0-50.03.269-50.03 1.245 0 1.723 70.157 71.755 71.883 71.755.767 0 2.007-.787 2.755-1.75zm-99.639-80.495c0-1.91-74.257-75.755-76.178-75.755-2.65 0-14.297 16.336-20.319 28.5-2.996 6.05-6.573 14.949-7.95 19.776-2.916 10.226-5.185 24.633-4.258 27.047.59 1.54 5.039 1.677 54.675 1.677 42.444 0 54.03-.267 54.03-1.245zm125.71-.432c1.911-4.98-4.382-30.784-10.809-44.323-5.375-11.323-16.517-28-18.706-28-1.93 0-73.191 70.837-73.191 72.755 0 .977 10.985 1.245 51.031 1.245 46.829 0 51.084-.138 51.675-1.676zm-117.95-59.073l-.259-52.75-4.346-.312c-10.938-.786-30.83 4.473-46.654 12.332C93.19 57.132 80.381 65.83 79.311 68.62c-.43 1.124 10.11 12.291 36.786 38.975 20.565 20.57 37.96 37.4 38.654 37.4 1.006 0 1.211-10.772 1.005-52.75zm45.986 16.505c19.39-19.385 35.255-35.994 35.255-36.909 0-4.043-22.322-18.615-38.252-24.97-10.64-4.246-31.428-8.81-33.708-7.4-1.633 1.009-1.43 104.52.205 104.52.685 0 17.11-15.86 36.5-35.246z"
      fill="#d9f18f"
    />
    <path
    className = {styles[props.colour]}
      d="M134.5 298.44c-25.281-4.272-47.717-14.343-67.978-30.516-24.97-19.931-42.985-50.045-50.209-83.928-2.556-11.987-2.56-41.986-.006-54 12.444-58.556 55.138-101.25 113.69-113.69 12.014-2.553 42.013-2.55 54 .006 29.298 6.247 53.933 19.42 74.057 39.6 22.142 22.205 35.582 48.866 40.611 80.56 1.93 12.16 1.33 37.11-1.167 48.527-2.893 13.23-9.574 31.708-14.73 40.743-26.919 47.167-73.504 74.524-126.27 74.152-7.7-.054-17.6-.707-22-1.45zm21.5-77.445c0-29.7-.34-54-.755-54s-18.03 17.28-39.145 38.4c-27.4 27.407-38.217 38.851-37.786 39.975 1.018 2.652 13.614 11.343 24.686 17.032 15.956 8.2 30.751 12.234 45.75 12.475l7.25.117zm22.119 52.532c4.61-.807 11.603-2.567 15.541-3.91 15.059-5.136 34.525-16.748 42.806-25.535l2.965-3.146-36.96-36.97c-20.328-20.334-37.3-36.97-37.715-36.97-.93 0-1.017 106.4-.088 107.33 1.007 1.006 4.224.815 13.452-.801zm-67.874-73.277C131.01 179.49 148 162.161 148 161.741s-24.412-.647-54.25-.505l-54.25.259.212 8c.317 11.95 4.252 25.954 11.24 40 5.885 11.827 17.757 28.5 20.295 28.5.683 0 18.232-16.985 38.998-37.745zm140.79 27.995c12.297-16.508 21.885-41.794 22.277-58.75l.185-8-50.75-.26c-27.912-.142-50.75.081-50.75.496 0 .99 72.26 73.264 73.25 73.264.418 0 3.023-3.038 5.788-6.75zm-102.04-76.005c0-.415-17.304-18.054-38.453-39.198L72.089 74.599l-2.158 1.948c-9.664 8.725-23.29 33.482-27.44 49.857-2.666 10.514-4.169 22.397-3.165 25.014.541 1.409 6.407 1.577 55.136 1.577 29.993 0 54.532-.34 54.532-.755zm124.32-7.745c-.247-10.703-4.205-25.714-9.887-37.5-4.867-10.095-13.811-24.227-17.375-27.453l-2.147-1.943-36.953 36.943C186.629 134.86 170 151.828 170 152.249s23.288.648 51.75.505l51.75-.259zm-117.56-51.75l-.259-53.25-9.5.122c-12.576.161-26.139 3.785-40.629 10.857-9.863 4.813-27.37 16.546-27.37 18.34 0 .938 76.315 77.18 77.253 77.18.42 0 .647-23.961.505-53.25zm46.194 15.797l36.443-36.453-1.948-2.202c-7.329-8.286-28.806-20.801-44.308-25.821-9.385-3.039-24.163-5.66-26.61-4.72-1.345.515-1.529 6.913-1.529 53.117 0 28.892.34 52.531.755 52.531s17.154-16.404 37.198-36.453z"
      fill="#ceed6d"
    />
    <path
    className = {styles[props.colour]}
      d="M132.5 297.44c-18.839-3.183-38.091-10.868-55.063-21.981-11.514-7.54-31.245-27.073-38.346-37.964-10.124-15.528-18.116-34.433-21.771-51.5-2.604-12.157-2.6-45.876.007-58C24.421 95 42.331 66.268 69.5 44.299c14.46-11.692 38.088-22.588 58.5-26.977 12.124-2.607 45.843-2.61 58-.007 17.164 3.676 36.188 11.739 51.5 21.826 10.022 6.602 25.735 21.72 34.148 32.854 10.679 14.133 20.736 36.382 24.86 55 2.51 11.332 3.141 40.046 1.155 52.564-3.266 20.584-10.783 39.84-22.386 57.35-7.29 11.001-23.992 28.181-35.107 36.112-16.636 11.871-38.19 20.811-58.908 24.435-10.855 1.899-37.481 1.89-48.762-.016zm23.893-23.026c1.036-2.699.665-105.78-.386-107.42-.766-1.193-8.989 6.522-40.231 37.748-33.84 33.822-39.117 39.49-38.17 41 1.428 2.278 19.313 14.623 26.394 18.219 16.818 8.54 50.545 15.268 52.393 10.451zm19.889.092c11.286-1.968 25.448-6.736 34.718-11.688 13.219-7.062 28-18.514 28-21.694 0-.901-16.661-18.286-37.024-38.634-29.454-29.431-37.22-36.688-37.985-35.495-1.508 2.354-1.307 106.28.208 107.8 1.514 1.513 1.776 1.507 12.082-.29zm-65.277-74.034c30.619-30.642 38.188-38.72 36.995-39.485-.91-.584-22.377-.967-54.628-.977-46.129-.013-53.292.184-54.378 1.492-2.43 2.927 1.097 22.377 7.024 38.738 1.742 4.81 5.601 12.622 8.576 17.36 6.52 10.383 15.138 21.394 16.747 21.394.643 0 18.492-17.336 39.664-38.524zm139.42 29.37c6.01-8.05 13.322-20.542 15.621-26.687 6.009-16.06 10.391-37.666 8.308-40.967-.976-1.548-5.333-1.713-50.959-1.933-30.83-.148-50.464.13-51.39.727-1.196.77 5.918 8.39 34.994 37.49 20.072 20.088 37.19 36.524 38.037 36.524.848 0 3.273-2.32 5.39-5.154zm-101.42-76.838c1.193-.765-6.376-8.843-36.995-39.485C90.838 92.33 72.748 74.995 71.811 74.995c-2.048 0-11.631 12.06-18.143 22.832-5.667 9.374-10.891 23.564-13.638 37.047-2.316 11.364-2.539 16.207-.825 17.92 1.516 1.517 107.45 1.718 109.8.209zm124.8-.208c4.193-4.193-4.518-38.356-13.657-53.563-7.546-12.555-14.066-21.237-15.948-21.237-.937 0-18.352 16.66-38.699 37.024-29.431 29.454-36.688 37.22-35.495 37.985 2.353 1.507 102.29 1.306 103.8-.209zm-117.41-7.382c.334-.87.607-24.89.607-53.378 0-45.238-.193-51.956-1.528-53.064-2.191-1.819-15.772-.577-27.164 2.483-14.984 4.026-24.475 8.187-35.452 15.543-12.192 8.171-14.856 10.35-14.856 12.152 0 1.3 75.85 77.845 77.138 77.845.357 0 .921-.711 1.255-1.581zm45.352-35.663c19.94-19.935 36.255-37.016 36.255-37.957 0-3.664-21.533-18.677-34.829-24.285-14.405-6.075-35.923-10.793-38.703-8.486-1.256 1.042-1.468 8.637-1.468 52.514 0 48 .22 54.459 1.852 54.459.35 0 16.953-16.31 36.893-36.245z"
      fill="#c2e94a"
    />
    <path
    className = {styles[props.colour]}
      d="M134.5 297.44c-29.971-5.064-55.517-18.359-77.59-40.381-20.569-20.521-33.446-44.283-39.594-73.063-2.563-11.997-2.565-41.984-.004-54C24.495 96.295 42.439 67.175 69.5 45.304c15.68-12.673 38.798-23.371 60.5-27.996 12.016-2.561 42.003-2.559 54 .004 28.785 6.15 52.55 19.028 73.058 39.594 27.729 27.806 41.934 61.711 41.934 100.09 0 39.057-14.916 74.18-43.151 101.6-21.881 21.252-46.058 33.521-76.58 38.86-10.738 1.879-33.596 1.87-44.761-.016zm22.258-76.278c.245-52.275.165-55.167-1.517-55.167-1.005 0-18.638 16.883-40.608 38.88-35.618 35.661-38.74 39.055-37.701 40.994.622 1.163 4.604 4.582 8.85 7.6 19.33 13.737 40.26 21.183 64.217 22.847 2.475.172 4.95.245 5.5.163.65-.097 1.091-19.503 1.259-55.316zm21.406 53.364c15.595-2.72 31.094-8.976 44.999-18.165 8.649-5.716 16.837-13.109 16.837-15.203 0-2.228-73.014-75.162-75.245-75.162-1.652 0-1.755 3.194-1.755 54.333 0 29.883.3 54.633.667 55 1.034 1.035 5.32.798 14.497-.803zm-67.444-72.763c21.652-21.625 38.28-39.004 38.28-40.008 0-1.683-2.893-1.762-55.25-1.518l-55.25.259-.33 3.484c-.855 8.991 4.252 30.568 10.366 43.8 5.615 12.153 19.958 32.216 23.03 32.216.48 0 18.1-17.205 39.154-38.233zm139.93 28.983c9.06-12.228 14.814-23.127 18.677-35.376 3.419-10.841 5.856-24.226 5.48-30.099l-.306-4.775-51.75-.26c-48.762-.243-51.75-.157-51.75 1.496 0 2.219 71.91 74.264 74.125 74.264.899 0 3.385-2.363 5.524-5.25zM150 152.251c0-2.29-75.953-78.255-78.243-78.255-2.232 0-13.013 13.575-18.764 23.626-5.777 10.097-10.393 22.613-12.929 35.057-2.048 10.051-2.68 19.37-1.398 20.651.367.367 25.567.667 56 .667 51.974 0 55.333-.106 55.333-1.746zm124.81-3.53c.686-10.716-5.24-32.96-12.448-46.725-5.72-10.924-15.337-24.372-17.762-24.839-1.371-.264-11.922 9.672-38.74 36.483-20.619 20.614-36.856 37.623-36.856 38.61 0 1.666 2.922 1.75 52.75 1.505l52.75-.259zM156.76 92.746l-.259-54.25-5.896-.304c-12.59-.65-31.512 4.1-47.103 11.823-11.187 5.541-26.5 16.454-26.5 18.885 0 2.193 76.056 78.097 78.254 78.097 1.666 0 1.749-2.994 1.505-54.25zm46.098 16.894c26.055-26.063 36.245-36.88 35.989-38.207-.823-4.276-20.544-17.933-34.786-24.09-12.866-5.563-35.168-10.67-39.437-9.032-1.47.563-1.623 5.69-1.623 54.154 0 50.375.103 53.53 1.755 53.53.975 0 17.913-16.162 38.101-36.355z"
      fill="#b9e62e"
    />
    <path
    className = {styles[props.colour]}
      d="M133.5 296.44c-29.93-5.057-53.656-17.491-76.092-39.879-20.93-20.885-32.978-42.94-39.093-71.566-2.576-12.06-2.579-43.921-.004-56 7.368-34.568 27.11-65.042 56.188-86.732 14.063-10.489 35.475-19.902 54.5-23.957 12.079-2.575 43.94-2.572 56 .004 28.629 6.116 50.688 18.166 71.56 39.093 18.467 18.515 29.37 36.52 36.028 59.493 7.34 25.327 7.317 54.95-.062 80.41-6.68 23.053-16.502 39.61-34.425 58.03-22.278 22.895-46.349 35.611-77.84 41.12-10.8 1.888-35.535 1.88-46.762-.017zm24-75.445c0-54.741-.027-55.504-2-55.776-1.47-.203-12.304 10.037-40.84 38.595-32.326 32.351-38.783 39.272-38.5 41.263.236 1.659 2.793 4.159 8.34 8.153 20.37 14.669 46.176 23.905 65.5 23.444l7.5-.179zm19.664 54.531c11.449-1.996 22.419-5.781 34.211-11.802C226.106 256.202 241 244.598 241 240.642c0-.596-16.762-17.874-37.25-38.396-27.399-27.444-37.779-37.237-39.25-37.031-1.968.276-2.004 1.14-2.259 54.668-.187 39.334.055 54.764.873 55.75 1.434 1.728 3.626 1.711 14.05-.106zm-65.308-73.887c28.039-28.046 38.248-38.865 37.982-40.25-.352-1.828-2.292-1.903-55.238-2.153-42.381-.2-55.212.023-56.361.976-3.253 2.7 1.167 27.286 7.747 43.092 6.422 15.426 21.117 36.69 25.356 36.69 1.521 0 13.625-11.459 40.515-38.356zm136.71 32.688c3.79-4.089 10.76-15.04 15.198-23.874 8.752-17.426 15.102-46.833 10.871-50.344-.985-.817-15.635-1.06-52.75-.872-50.527.254-51.391.292-51.667 2.259-.206 1.47 9.46 11.725 36.531 38.75 20.247 20.212 37.382 36.75 38.078 36.75s2.379-1.2 3.739-2.668zm-97.788-81.832c.206-1.472-9.967-12.231-38.53-40.75-21.346-21.312-39.428-38.75-40.184-38.75-3.23 0-16.433 17.638-22.832 30.5-8.595 17.278-14.97 46.364-11.026 50.308.922.922 14.382 1.147 56.75.95 54.683-.254 55.546-.29 55.822-2.258zm124.02 1.3c3.916-3.916-2.43-33.126-10.831-49.853-7.293-14.521-17.2-27.947-20.622-27.947-1.55 0-75.347 74.5-75.347 76.065 0 .88.3 1.901.667 2.268.366.367 24.127.667 52.8.667 39.215 0 52.43-.298 53.333-1.2zm-117.04-60.187c.187-38.964-.055-54.264-.872-55.25-3.64-4.385-32.461 1.124-50.77 9.704-13.177 6.175-30.117 18.096-30.117 21.194 0 .649 17.438 18.644 38.75 39.99 28.519 28.563 39.278 38.736 40.75 38.53 1.968-.276 2.004-1.14 2.258-54.167zm45.509 16.606c20.203-20.23 36.732-37.134 36.732-37.566 0-2.041-2.472-4.836-8.226-9.3-18.214-14.133-36.571-22.119-58.472-25.44-6.644-1.007-8.493-.999-9.75.045-1.367 1.134-1.552 7.635-1.552 54.498 0 29.266.3 53.51.667 53.878.367.366 1.387.666 2.268.666s18.131-16.552 38.333-36.78z"
      fill="#b4e51c"
    />
  </svg>
)

export default WheelSvg