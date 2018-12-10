import React from 'react'
import styles from './svgComponents.module.scss'

const SwordSvg = props => (
  <svg viewBox="0 0 312 312" {...props}>
    <image
      width={312}
      height={312}
      imageRendering="optimizeQuality"
      preserveAspectRatio="none"
      xlinkHref="data:image/png;base64,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 AAAAAElFTkSuQmCC"
    />
    <path d="M0 156V0h312v312H0z" fill="#fdfdfd" />
    <path
      d="M55.105 287.69c-4.104-1.443-7.106-6.509-7.106-11.994 0-5.733.609-6.632 19-28.08 13.702-15.978 17-20.052 17-20.991 0-.487-1.574-2.63-3.5-4.76-2.918-3.23-3.5-4.63-3.5-8.42 0-6.522 2.192-10.206 6.559-11.025 5.666-1.063 10.453.195 14.066 3.697 4.054 3.93 3.319 4.459 16.482-11.849l10.017-12.41-5.812-6.53c-3.196-3.592-7.643-8.933-9.883-11.867-2.24-2.935-6.551-8.178-9.581-11.65-3.03-3.473-7.758-9.914-10.506-14.313-5.89-9.43-15.34-25.48-15.34-26.054 0-.221-1.614-3.9-3.586-8.174-1.972-4.275-4.415-9.572-5.428-11.772-6.4-13.891-12.002-32.71-14.053-47.206-1.4-9.886-.875-13.72 2.093-15.308 3.784-2.025 8.751.455 17.462 8.721 4.517 4.286 10.302 9.364 12.856 11.283 13.411 10.08 36.79 19.01 49.771 19.01 9.058 0 10.101 1.07 11.737 12.045 2.365 15.855 10.703 43.166 12.824 42.002 2.621-1.438 10.26-27.16 12.472-42.002 1.637-10.975 2.68-12.046 11.737-12.046 12.98 0 36.36-8.929 49.771-19.009 2.555-1.92 8.34-6.997 12.856-11.283 8.71-8.265 13.678-10.747 17.462-8.721 2.969 1.588 3.493 5.422 2.094 15.308-2.052 14.496-7.654 33.316-14.053 47.206-1.014 2.2-3.456 7.497-5.429 11.772-1.972 4.274-3.585 7.953-3.585 8.174 0 .574-9.45 16.625-15.34 26.054-2.749 4.4-7.411 10.767-10.362 14.149-2.95 3.381-7.487 8.858-10.081 12.17-2.594 3.311-7.071 8.77-9.948 12.13l-5.232 6.11 9.937 12.311c5.465 6.771 10.63 12.886 11.478 13.59 1.298 1.077 2.174.707 5.548-2.34 3.459-3.125 4.677-3.62 8.921-3.62 2.704 0 5.644.28 6.534.621 2.508.963 4.545 5.816 4.545 10.826 0 3.792-.581 5.19-3.5 8.421-1.925 2.131-3.5 4.273-3.5 4.76 0 .94 3.299 5.013 17 20.991 18.392 21.45 19 22.347 19 28.08 0 8.127-5.178 13.096-13.8 13.244-6.705.115-15.688-6.583-34.036-25.38l-13.335-13.66-4.392 4.048c-3.898 3.593-4.949 4.049-9.333 4.049-2.717 0-5.669-.28-6.56-.621-2.514-.965-4.544-5.82-4.544-10.868 0-3.952.54-5.169 3.898-8.767l3.897-4.18-11.148-7.387c-6.13-4.063-12.519-8.69-14.195-10.283-3.84-3.648-6.064-3.648-9.904 0-1.677 1.592-8.088 6.235-14.247 10.317l-11.2 7.422 3.558 3.559c4.3 4.299 5.426 10.275 3.022 16.028-1.248 2.987-2.197 3.785-5.161 4.341-5.993 1.125-10.516-.152-14.571-4.112l-3.708-3.62-13.37 13.698c-22.985 23.545-30.262 27.859-40.766 24.166z"
      fill="#c2c2c2"
    />
    <path
      d="M59.5 288.33c-6.643-1.462-9.528-4.362-10.948-11.005-1.098-5.14.572-7.69 19.448-29.704 14.117-16.463 17-20.057 17-21.188 0-.596-1.168-2.174-2.595-3.507-3.114-2.91-5.405-7.08-5.405-9.84 0-1.11.762-3.615 1.694-5.568 3.227-6.768 12.582-7.013 18.828-.493 3.189 3.328 4.251 3.614 5.867 1.577.611-.77 5.715-7.056 11.342-13.97l10.232-12.57-5.231-6.11c-2.877-3.361-7.354-8.82-9.948-12.132-2.595-3.311-7.131-8.788-10.081-12.17-8.44-9.672-21.795-31.747-30.04-49.647-10.554-22.919-16.32-40.68-18.73-57.708-1.458-10.307-.864-14.022 2.372-14.834 3.829-.96 7.846 1.347 16.296 9.36 10.547 10.002 15.656 13.778 25.5 18.848 12.356 6.363 25.837 10.499 36.128 11.08 4.8.272 9.12 1.003 9.597 1.624.477.62 1.6 5.628 2.494 11.129 2.317 14.253 10.8 42.5 12.765 42.5 1.114 0 2.093-1.72 4.267-7.5 3.563-9.473 7.709-25.024 9.33-35 .894-5.5 2.016-10.508 2.494-11.13.478-.62 4.796-1.35 9.597-1.622 10.292-.583 23.772-4.718 36.128-11.081 9.844-5.07 14.953-8.846 25.5-18.848 4.455-4.225 9.432-8.187 11.06-8.806 4.176-1.585 7.373-.526 8.186 2.713.889 3.542-1.216 18.115-4.276 29.606-7.546 28.336-29.064 70.904-45.328 89.667-3.099 3.575-7.174 8.525-9.056 11-1.882 2.475-6.024 7.419-9.204 10.986-3.18 3.567-5.782 7.092-5.782 7.832s4.387 6.76 9.75 13.376a7295.392 7295.392 0 0 1 10.86 13.418c1.588 1.985 2.716 1.736 5.465-1.207 6.957-7.447 15.933-7.148 19.447.646 2.34 5.19 1.36 9.7-3.034 13.96-1.919 1.86-3.49 3.859-3.49 4.442 0 1.11 2.924 4.75 17 21.166 18.877 22.013 20.547 24.564 19.449 29.704-1.012 4.737-3.51 8.473-6.389 9.554-4.821 1.81-7.922 2.126-10.66 1.084-5.372-2.042-17.098-11.906-30.204-25.408l-13.305-13.707-4.422 4.077c-4.016 3.702-4.908 4.075-9.695 4.062-2.9-.008-5.768-.346-6.373-.75-2.117-1.414-3.4-5.143-3.4-9.882 0-4.234.459-5.245 4.033-8.887l4.033-4.109-12.283-8.094c-6.756-4.452-13.374-9.258-14.707-10.68-3.079-3.281-6.072-3.281-9.151 0-1.334 1.422-7.932 6.214-14.664 10.65l-12.24 8.066 3.88 4.208c4.815 5.224 5.726 8.885 3.558 14.303-1.259 3.147-2.427 4.354-5.052 5.22-3.629 1.198-8.584.568-10.72-1.362-.712-.643-2.695-2.454-4.406-4.025l-3.113-2.857-13.334 13.737c-16.029 16.513-29.497 27.064-33.649 26.361a86.254 86.254 0 0 1-2.685-.556zm61.8-65.975c4.681-2.41 23.219-15.068 24.727-16.885 1.089-1.312.913-1.82-1.118-3.24-1.325-.927-4.389-3.832-6.808-6.456s-4.796-4.771-5.28-4.771c-1.076 0-5.123 4.55-11.136 12.52-2.481 3.289-5.9 7.302-7.598 8.917-3.784 3.6-3.855 5.152-.4 8.758 3.143 3.282 3.408 3.322 7.612 1.158zm77.896-1.04c1.543-1.478 2.805-3.221 2.805-3.874s-2.384-3.857-5.296-7.122c-2.913-3.264-6.368-7.484-7.678-9.376s-4.706-6.14-7.547-9.44c-15.761-18.308-36.997-60.157-44.455-87.61-1.51-5.555-5-22.59-5.022-24.51-.001-.065-3.264-.355-7.252-.644-16.31-1.182-42.46-13.202-57.878-26.604-2.13-1.851-3.872-2.826-3.872-2.166s.885 4.65 1.967 8.866c3.06 11.923 7.51 23.41 16.337 42.167 6.283 13.351 20.507 36.6 26.688 43.62 2.48 2.815 8.642 10.24 13.694 16.5 12.721 15.76 36.758 38.723 52.273 49.94 5.536 4.001 20.348 12.94 21.444 12.94.543 0 2.25-1.21 3.792-2.687zm-9.195-58.474c4.125-5.03 9.999-12.113 13.054-15.741 7.257-8.621 10.155-12.96 19.094-28.597 7.393-12.932 8.778-15.64 14.843-29 5.852-12.894 13.01-34.643 13.01-39.533 0-.66-1.743.315-3.873 2.167-15.469 13.448-41.486 25.416-57.826 26.6-8.089.587-7.137-.621-9.268 11.773-1.65 9.598-5.4 22.099-10.394 34.656-2.551 6.414-4.639 12.578-4.639 13.697 0 1.119 1.038 3.97 2.306 6.338 5.092 9.5 15.224 26.798 15.694 26.792.275-.004 3.875-4.122 8-9.151z"
      fill="#a5a5a5"
    />
    <path
    className = {styles[props.colour]}
      d="M57.072 286.99c-4.247-1-6.805-4.227-7.632-9.623-.903-5.9-.53-6.477 18.56-28.75 15.168-17.697 17.948-21.1 17.974-22.002.014-.489-1.774-2.841-3.974-5.228-4.288-4.651-5.147-8.773-2.87-13.77 2.672-5.864 11.903-5.942 17.834-.15 4.01 3.917 4.803 4.18 6.425 2.136.61-.77 5.723-7.067 11.36-13.993S125 182.501 125 181.87c0-.63-2.587-4.053-5.75-7.607-3.162-3.554-7.582-8.862-9.822-11.797-2.24-2.935-6.553-8.177-9.584-11.65-7.684-8.801-20.4-29.351-27.11-43.813-7.042-15.176-8.792-19.196-11.973-27.5-6.727-17.562-11.772-41.713-9.797-46.906 1.003-2.64 1.386-2.81 5.157-2.305 3.38.454 5.48 1.882 12.326 8.379 13.321 12.643 20.077 17.22 34.478 23.367 10.648 4.544 16.342 5.996 26.838 6.843 5.095.412 9.76 1.244 10.365 1.85.606.606 1.894 5.977 2.862 11.936 1.848 11.374 4.836 23.034 7.958 31.061a890.852 890.852 0 0 1 3.075 8.024c1.553 4.14 3.4 4.14 4.953 0 .67-1.788 2.055-5.399 3.076-8.024 3.122-8.027 6.11-19.688 7.957-31.061.968-5.96 2.256-11.331 2.862-11.936.606-.606 5.27-1.438 10.365-1.85 10.496-.847 16.19-2.3 26.838-6.843 14.402-6.146 21.157-10.725 34.478-23.367 6.845-6.497 8.947-7.925 12.326-8.379 3.771-.506 4.154-.334 5.158 2.305 2.65 6.969-5.643 39.458-15.545 60.906-1.27 2.75-3.757 8.141-5.527 11.98-7.237 15.697-19.754 36.105-27.919 45.52-3.1 3.575-7.176 8.525-9.057 11-1.881 2.475-5.848 7.2-8.814 10.5-8.718 9.697-8.884 8.41 2.971 22.978 5.695 6.998 10.854 13.353 11.465 14.123 1.617 2.038 2.214 1.816 7.006-2.6 3.532-3.256 5.072-4 8.28-4 5.336 0 6.922.747 8.64 4.07 2.674 5.17 1.908 9.492-2.536 14.314-2.2 2.387-3.989 4.74-3.975 5.228.026.902 2.806 4.305 17.975 22.003 12.3 14.349 16.514 19.579 17.935 22.249 1.74 3.27.522 10.35-2.304 13.4-3.093 3.337-10.363 4.442-14.648 2.226-6.25-3.231-14.758-10.548-27.77-23.878-7.308-7.487-13.857-13.613-14.554-13.613s-2.753 1.534-4.57 3.41c-3.583 3.695-7.843 4.99-13.02 3.954-2.552-.51-3.629-1.46-4.78-4.214-2.115-5.063-1.053-9.783 3.176-14.114 4.125-4.224 4.36-5.533 1.285-7.142-4.517-2.362-20.35-13.272-24.003-16.538-2.064-1.846-4.425-3.356-5.247-3.356s-3.183 1.51-5.247 3.356c-3.653 3.266-19.486 14.175-24.003 16.538-3.098 1.62-2.83 3.152 1.24 7.096 4.007 3.884 5.21 8.357 3.58 13.298-2.458 7.45-12.176 7.607-18.994.308-1.333-1.427-3.004-2.595-3.712-2.595s-7.268 6.126-14.576 13.613c-16.812 17.223-27.533 25.567-32.488 25.285-.99-.056-3.343-.466-5.228-.91zM136 214.469c4.125-2.9 8.58-6.43 9.9-7.844l2.4-2.57-7.289-6.776c-4.009-3.727-7.75-6.95-8.313-7.164-1.113-.421-3.638 2.357-12.62 13.888-3.214 4.125-7.02 8.59-8.46 9.924-1.44 1.333-2.618 2.78-2.618 3.214s1.912 2.58 4.25 4.77l4.25 3.979 5.5-3.074c3.025-1.69 8.875-5.446 13-8.347zm64.393 6.643l3.8-3.89-3.795-4.2c-2.086-2.31-5.617-6.582-7.846-9.493s-6.768-8.608-10.087-12.66c-17.384-21.222-36.962-60.153-44.439-88.367-1.603-6.05-3.223-13.25-3.599-16-1.064-7.782-1.716-8.5-7.713-8.5-3.23.001-9.44-1.352-16.316-3.555-17.12-5.484-31.918-13.75-43.584-24.347-2.665-2.42-5.133-4.114-5.485-3.762-.947.947 4.262 20.13 8.229 30.304 10.194 26.148 26.01 55.268 36.797 67.748 2.905 3.362 8.697 10.388 12.87 15.613 13.37 16.739 30.857 33.708 50.939 49.432 8.744 6.847 22.622 15.518 24.883 15.548.85.01 3.256-1.73 5.346-3.87zm-11.805-54.86c3.297-3.712 8.075-9.45 10.617-12.75 2.542-3.3 6.829-8.583 9.527-11.741 9.045-10.588 25.446-41.357 34.71-65.118 3.966-10.173 9.175-29.357 8.228-30.304-.351-.351-2.82 1.342-5.484 3.762-11.666 10.595-26.464 18.862-43.584 24.347-6.876 2.203-13.086 3.556-16.316 3.556-5.998-.001-6.65.717-7.714 8.5-1.196 8.744-6.342 26.622-11.032 38.328-2.496 6.231-4.54 12.501-4.54 13.933 0 3.726 16.812 34.238 18.865 34.238.4 0 3.426-3.037 6.723-6.75z"
      fill="#af7352"
    />
    <path
      d="M57.072 286.99c-4.247-1-6.805-4.227-7.632-9.623-.903-5.9-.53-6.477 18.56-28.75 15.168-17.697 17.948-21.1 17.974-22.002.014-.489-1.774-2.841-3.974-5.228-4.288-4.651-5.147-8.773-2.87-13.77 2.672-5.864 11.903-5.942 17.834-.15 4.01 3.917 4.803 4.18 6.425 2.136.61-.77 5.723-7.067 11.36-13.993S125 182.501 125 181.87c0-.63-2.587-4.053-5.75-7.607-3.162-3.554-7.582-8.862-9.822-11.797-2.24-2.935-6.553-8.177-9.584-11.65-7.684-8.801-20.4-29.351-27.11-43.813-7.042-15.176-8.792-19.196-11.973-27.5-6.727-17.562-11.772-41.713-9.797-46.906 1.003-2.64 1.386-2.81 5.157-2.305 3.38.454 5.48 1.882 12.326 8.379 13.321 12.643 20.077 17.22 34.478 23.367 10.648 4.544 16.342 5.996 26.838 6.843 5.095.412 9.76 1.244 10.365 1.85.606.606 1.894 5.977 2.862 11.936 1.848 11.374 4.836 23.034 7.958 31.061a890.852 890.852 0 0 1 3.075 8.024c1.553 4.14 3.4 4.14 4.953 0 .67-1.788 2.055-5.399 3.076-8.024 3.122-8.027 6.11-19.688 7.957-31.061.968-5.96 2.256-11.331 2.862-11.936.606-.606 5.27-1.438 10.365-1.85 10.496-.847 16.19-2.3 26.838-6.843 14.402-6.146 21.157-10.725 34.478-23.367 6.845-6.497 8.947-7.925 12.326-8.379 3.771-.506 4.154-.334 5.158 2.305 2.65 6.969-5.643 39.458-15.545 60.906-1.27 2.75-3.757 8.141-5.527 11.98-7.237 15.697-19.754 36.105-27.919 45.52-3.1 3.575-7.176 8.525-9.057 11-1.881 2.475-5.848 7.2-8.814 10.5-8.718 9.697-8.884 8.41 2.971 22.978 5.695 6.998 10.854 13.353 11.465 14.123 1.617 2.038 2.214 1.816 7.006-2.6 3.532-3.256 5.072-4 8.28-4 5.336 0 6.922.747 8.64 4.07 2.674 5.17 1.908 9.492-2.536 14.314-2.2 2.387-3.989 4.74-3.975 5.228.026.902 2.806 4.305 17.975 22.003 12.3 14.349 16.514 19.579 17.935 22.249 1.74 3.27.522 10.35-2.304 13.4-3.093 3.337-10.363 4.442-14.648 2.226-6.25-3.231-14.758-10.548-27.77-23.878-7.308-7.487-13.857-13.613-14.554-13.613s-2.753 1.534-4.57 3.41c-3.583 3.695-7.843 4.99-13.02 3.954-2.552-.51-3.629-1.46-4.78-4.214-2.115-5.063-1.053-9.783 3.176-14.114 4.125-4.224 4.36-5.533 1.285-7.142-4.517-2.362-20.35-13.272-24.003-16.538-2.064-1.846-4.425-3.356-5.247-3.356s-3.183 1.51-5.247 3.356c-3.653 3.266-19.486 14.175-24.003 16.538-3.098 1.62-2.83 3.152 1.24 7.096 4.007 3.884 5.21 8.357 3.58 13.298-2.458 7.45-12.176 7.607-18.994.308-1.333-1.427-3.004-2.595-3.712-2.595s-7.268 6.126-14.576 13.613c-16.812 17.223-27.533 25.567-32.488 25.285-.99-.056-3.343-.466-5.228-.91zm9.613-10.501c4.074-1.702 19.566-16.527 31.116-29.776 4.215-4.834 8.697-9.049 9.961-9.366 1.804-.453 3.464.525 7.708 4.54 5.398 5.104 7.53 6.206 7.53 3.892 0-1.15-30.714-31.395-33.551-33.039-.724-.419-1.597-.307-1.94.249-.344.556 1.728 3.499 4.604 6.54l5.23 5.53-1.595 3.222c-1.732 3.5-9.003 12.312-26.499 32.119-10.3 11.662-12.438 15.081-10.583 16.936 1.09 1.09 4.162.765 8.02-.846zm188.12-1.11c.217-1.515-2.936-5.79-11-14.919-17.543-19.861-24.817-28.676-26.549-32.173l-1.592-3.216 4.67-4.991c4.61-4.929 5.698-7.077 3.585-7.077-1.93 0-33.917 31.052-33.917 32.926 0 2.162 2.241.959 7.529-4.042 4.245-4.014 5.904-4.992 7.708-4.54 1.264.318 5.747 4.533 9.96 9.367 11.166 12.808 26.963 28.022 30.894 29.754 4.67 2.058 8.328 1.6 8.712-1.088zm-118.8-60.91c4.125-2.9 8.58-6.43 9.9-7.844l2.4-2.57-7.289-6.776c-4.008-3.727-7.75-6.95-8.313-7.164-1.113-.421-3.637 2.357-12.62 13.888-3.213 4.125-7.02 8.59-8.46 9.924-1.44 1.334-2.618 2.78-2.618 3.214s1.913 2.58 4.25 4.77l4.25 3.979 5.5-3.073c3.025-1.69 8.875-5.447 13-8.348zm64.393 6.643l3.8-3.89-3.794-4.2c-2.087-2.31-5.618-6.582-7.847-9.493s-6.767-8.608-10.087-12.66c-17.384-21.222-36.962-60.153-44.439-88.367-1.603-6.05-3.222-13.25-3.598-16-1.065-7.782-1.716-8.5-7.714-8.5-3.23.001-9.44-1.352-16.316-3.555-17.12-5.484-31.918-13.75-43.584-24.347-2.665-2.42-5.133-4.113-5.484-3.762-.947.947 4.262 20.13 8.228 30.304 10.194 26.148 26.01 55.268 36.797 67.748 2.906 3.362 8.697 10.388 12.87 15.613 13.37 16.739 30.857 33.708 50.939 49.432 8.745 6.847 22.622 15.518 24.883 15.548.85.01 3.257-1.73 5.346-3.87zm-11.805-54.86c3.298-3.712 8.075-9.45 10.617-12.75 2.542-3.3 6.83-8.583 9.527-11.741 9.046-10.588 25.446-41.357 34.71-65.118 3.967-10.173 9.175-29.357 8.229-30.304-.352-.351-2.82 1.342-5.485 3.762-11.666 10.595-26.464 18.862-43.584 24.347-6.876 2.203-13.086 3.557-16.316 3.556-5.997-.001-6.65.717-7.713 8.5-1.196 8.744-6.342 26.622-11.032 38.328-2.497 6.231-4.54 12.501-4.54 13.933 0 3.726 16.811 34.238 18.864 34.238.4 0 3.426-3.037 6.724-6.75z"
      fill="#606060"
    />
    <path
      d="M56.364 285.91c-3.5-1.014-6.368-5.778-6.36-10.562.008-4.039 2.97-8.28 17.984-25.756C82.292 232.943 87 227.213 87 226.452c0-.401-1.8-2.682-4-5.069-3.237-3.511-4-5.081-4-8.227 0-5.931 3.027-9.157 8.595-9.157 3.801 0 5.082.583 8.789 4 2.387 2.2 4.74 3.992 5.228 3.982.488-.01 2.272-1.698 3.963-3.75C118.422 192.64 126 182.864 126 181.88c0-.638-2.587-4.067-5.75-7.62-3.162-3.554-7.582-8.863-9.822-11.797-2.24-2.935-6.551-8.178-9.581-11.65-3.03-3.473-7.758-9.914-10.506-14.313C84.45 127.07 75 111.02 75 110.446c0-.355-3.294-7.627-9.036-19.946-7.625-16.362-16.257-50.216-14.543-57.043.51-2.034 1.23-2.457 4.18-2.457 3.086 0 4.74 1.105 12.353 8.25 4.834 4.537 10.87 9.82 13.412 11.74C94.637 61.013 118.127 70 131.044 70c4.495 0 7.289.474 8.209 1.395.767.767 1.987 5.38 2.711 10.25 2.26 15.195 9.988 40.56 13.455 44.155 1.754 1.819 2.726.417 6.447-9.3 4.019-10.498 7.539-23.875 9.172-34.856.724-4.87 1.944-9.483 2.711-10.25.92-.92 3.714-1.394 8.209-1.394 12.918 0 36.407-8.989 49.677-19.01 2.542-1.92 8.577-7.203 13.412-11.74 7.612-7.146 9.266-8.25 12.353-8.25 2.95 0 3.669.422 4.18 2.457 1.713 6.827-6.918 40.68-14.544 57.043-5.741 12.319-9.035 19.59-9.035 19.946 0 .569-9.408 16.556-15.333 26.054-2.745 4.4-7.526 10.925-10.624 14.5s-7.173 8.525-9.054 11c-1.881 2.475-5.848 7.2-8.815 10.5-8.637 9.607-8.7 8.653 1.393 21.136 13.858 17.14 14.88 18.327 15.822 18.346.488.01 2.84-1.782 5.228-3.982 3.661-3.376 5.006-3.998 8.611-3.985 2.35.008 4.768.346 5.373.75 1.993 1.33 3.4 5.041 3.4 8.966 0 3.189-.698 4.544-4 7.769-2.2 2.148-4 4.305-4 4.794 0 .892 2.873 4.417 19.5 23.927 17.547 20.589 18.282 21.797 17.098 28.11-.887 4.727-3.839 7.432-8.945 8.198-7.664 1.15-15.024-3.99-34.947-24.398C211.12 254.359 204.42 248 203.82 248s-3.047 1.8-5.433 4c-3.662 3.375-5.007 3.997-8.612 3.984-4.839-.017-5.993-.572-7.623-3.669-2.374-4.51-1.427-9.059 2.85-13.7 3.812-4.135 5.175-7.615 2.982-7.615-1.53 0-20.409-12.61-25.582-17.086-2.487-2.153-5.142-3.914-5.9-3.914s-3.413 1.761-5.9 3.914C145.43 218.39 126.55 231 125.02 231c-2.193 0-.83 3.48 2.982 7.615 3.236 3.512 4 5.082 4 8.227 0 5.932-3.028 9.158-8.595 9.158-3.802 0-5.082-.583-8.79-4-2.386-2.2-4.831-4-5.433-4s-7.301 6.359-14.888 14.13c-13.48 13.81-20.534 19.877-26.995 23.216-3.507 1.812-6.158 1.95-10.935.565zm10.321-9.424c4.074-1.702 19.566-16.527 31.116-29.776 4.214-4.834 8.697-9.049 9.96-9.366 1.804-.453 3.464.525 7.709 4.54 5.397 5.104 7.53 6.206 7.53 3.892 0-1.15-30.715-31.395-33.552-33.039-.723-.419-1.596-.307-1.94.249-.344.556 1.729 3.5 4.605 6.54l5.23 5.53-1.595 3.222c-1.733 3.5-9.003 12.312-26.5 32.12-10.3 11.661-12.437 15.08-10.582 16.935 1.09 1.09 4.161.765 8.019-.846zm188.12-1.11c.216-1.514-2.937-5.79-11-14.919-17.543-19.86-24.817-28.676-26.549-32.173l-1.592-3.216 4.669-4.991c4.61-4.929 5.698-7.077 3.585-7.077-1.93 0-33.917 31.052-33.917 32.926 0 2.162 2.242.959 7.53-4.042 4.244-4.014 5.904-4.992 7.708-4.54 1.264.318 5.746 4.533 9.96 9.367 11.165 12.808 26.962 28.022 30.893 29.754 4.67 2.058 8.329 1.6 8.712-1.088zm-120.3-58.692c10.986-7.383 14.5-10.502 14.5-12.872 0-.997-.382-1.813-.848-1.813s-3.719-2.925-7.228-6.5c-3.51-3.575-7.192-6.5-8.183-6.5-1.86 0-5.44 3.65-11.579 11.804-1.944 2.583-5.701 7.095-8.349 10.026-2.647 2.932-4.813 5.912-4.813 6.623s2.025 3.158 4.5 5.44l4.5 4.147 4.25-2.153c2.337-1.185 8.3-4.876 13.25-8.202zm66.618 5.433c2.135-2.136 3.882-4.296 3.882-4.8 0-.506-2.153-3.371-4.784-6.368s-6.333-7.475-8.227-9.95c-1.894-2.475-5.928-7.43-8.966-11.01-19.809-23.351-43.684-75.257-47.602-103.49-1.256-9.052-1.364-9.162-9.594-9.757-17.621-1.276-45.2-14.526-60.541-29.09-3.616-3.432-4.31-3.753-4.883-2.258-.769 2.002 3.677 20.007 7.31 29.605 9.822 25.953 27.804 59.02 38.659 71.093 2.27 2.526 8.263 9.726 13.317 16 12.796 15.888 37.68 39.695 53.272 50.967 7.358 5.319 20.53 12.94 22.366 12.94 1.05 0 3.656-1.746 5.791-3.882zm-10.32-56.868a4495.324 4495.324 0 0 1 13.38-16.116c14.554-17.407 30.573-46.293 41.11-74.134 3.633-9.598 8.078-27.603 7.31-29.605-.573-1.495-1.267-1.174-4.883 2.259-15.342 14.563-42.92 27.814-60.541 29.089-8.23.595-8.339.705-9.595 9.757-1.518 10.945-9.469 36.557-14.186 45.7-2.93 5.681-1.783 9.492 8.074 26.8 6.866 12.057 9.433 16 10.416 16 .472 0 4.483-4.387 8.915-9.75z"
      fill="#6f4934"
    />
    <path
      d="M56.364 285.91c-3.5-1.014-6.368-5.778-6.36-10.562.008-4.039 2.97-8.28 17.984-25.756C82.292 232.943 87 227.213 87 226.452c0-.401-1.8-2.682-4-5.069-3.237-3.511-4-5.081-4-8.227 0-5.931 3.027-9.157 8.595-9.157 3.801 0 5.082.583 8.789 4 2.387 2.2 4.74 3.992 5.228 3.982.488-.01 2.272-1.698 3.963-3.75C118.422 192.64 126 182.864 126 181.88c0-.638-2.587-4.067-5.75-7.62-3.162-3.554-7.582-8.863-9.822-11.797-2.24-2.935-6.551-8.178-9.581-11.65-3.03-3.473-7.758-9.914-10.506-14.313C84.45 127.07 75 111.02 75 110.446c0-.355-3.294-7.627-9.036-19.946-7.625-16.362-16.257-50.216-14.543-57.043.51-2.034 1.23-2.457 4.18-2.457 3.086 0 4.74 1.105 12.353 8.25 4.834 4.537 10.87 9.82 13.412 11.74C94.637 61.013 118.127 70 131.044 70c4.495 0 7.289.474 8.209 1.395.767.767 1.987 5.38 2.711 10.25 2.26 15.195 9.988 40.56 13.455 44.155 1.754 1.819 2.726.417 6.447-9.3 4.019-10.498 7.539-23.875 9.172-34.856.724-4.87 1.944-9.483 2.711-10.25.92-.92 3.714-1.394 8.209-1.394 12.918 0 36.407-8.989 49.677-19.01 2.542-1.92 8.577-7.203 13.412-11.74 7.612-7.146 9.266-8.25 12.353-8.25 2.95 0 3.669.422 4.18 2.457 1.713 6.827-6.918 40.68-14.544 57.043-5.741 12.319-9.035 19.59-9.035 19.946 0 .569-9.408 16.556-15.333 26.054-2.745 4.4-7.526 10.925-10.624 14.5s-7.173 8.525-9.054 11c-1.881 2.475-5.848 7.2-8.815 10.5-8.637 9.607-8.7 8.653 1.393 21.136 13.858 17.14 14.88 18.327 15.822 18.346.488.01 2.84-1.782 5.228-3.982 3.661-3.376 5.006-3.998 8.611-3.985 2.35.008 4.768.346 5.373.75 1.993 1.33 3.4 5.041 3.4 8.966 0 3.189-.698 4.544-4 7.769-2.2 2.148-4 4.305-4 4.794 0 .892 2.873 4.417 19.5 23.927 17.547 20.589 18.282 21.797 17.098 28.11-.887 4.727-3.839 7.432-8.945 8.198-7.664 1.15-15.024-3.99-34.947-24.398C211.12 254.359 204.42 248 203.82 248s-3.047 1.8-5.433 4c-3.662 3.375-5.007 3.997-8.612 3.984-4.839-.017-5.993-.572-7.623-3.669-2.374-4.51-1.427-9.059 2.85-13.7 3.812-4.135 5.175-7.615 2.982-7.615-1.53 0-20.409-12.61-25.582-17.086-2.487-2.153-5.142-3.914-5.9-3.914s-3.413 1.761-5.9 3.914C145.43 218.39 126.55 231 125.02 231c-2.193 0-.83 3.48 2.982 7.615 3.236 3.512 4 5.082 4 8.227 0 5.932-3.028 9.158-8.595 9.158-3.802 0-5.082-.583-8.79-4-2.386-2.2-4.831-4-5.433-4s-7.301 6.359-14.888 14.13c-13.48 13.81-20.534 19.877-26.995 23.216-3.507 1.812-6.158 1.95-10.935.565zm11.066-8.445c2.856-1.355 18.872-17.045 34.424-33.724 2.945-3.158 6.054-5.741 6.91-5.741s4.15 2.475 7.321 5.5 6.223 5.5 6.782 5.5c1.479 0 2.226-1.593 1.561-3.327-.775-2.021-35.083-34.674-36.43-34.674-.584 0-1.334.711-1.667 1.58-.404 1.052 1.183 3.39 4.755 7.007l5.36 5.428-1.77 3.243c-1.94 3.556-10.402 13.803-26.926 32.606C61.837 267.59 57 273.883 57 274.847c0 4.154 4.705 5.335 10.43 2.618zm187.37.334c2.415-2.415.989-4.944-9.55-16.936-16.466-18.737-24.984-29.046-26.901-32.558l-1.744-3.194 5.274-5.577c5.026-5.314 5.888-7.445 3.352-8.29-1.242-.415-35.71 31.958-36.659 34.43-.665 1.733.083 3.325 1.562 3.325.558 0 3.61-2.475 6.781-5.5s6.466-5.5 7.322-5.5 3.965 2.584 6.91 5.742c15.119 16.214 31.505 32.327 34.255 33.684 3.742 1.847 7.766 2.007 9.398.375zm-120.3-61.115c10.986-7.383 14.5-10.502 14.5-12.872 0-.997-.382-1.813-.848-1.813s-3.719-2.925-7.228-6.5c-3.51-3.575-7.192-6.5-8.183-6.5-1.86 0-5.44 3.65-11.579 11.804-1.944 2.583-5.701 7.095-8.349 10.026-2.647 2.932-4.813 5.912-4.813 6.623s2.025 3.158 4.5 5.44l4.5 4.147 4.25-2.153c2.337-1.185 8.3-4.876 13.25-8.202zm66.618 5.433c2.135-2.136 3.882-4.296 3.882-4.8 0-.506-2.153-3.371-4.784-6.368s-6.333-7.475-8.227-9.95c-1.894-2.475-5.928-7.43-8.966-11.01-19.809-23.351-43.684-75.257-47.602-103.49-1.256-9.052-1.364-9.162-9.594-9.757-17.621-1.276-45.2-14.526-60.541-29.09-3.616-3.432-4.31-3.753-4.883-2.258-.769 2.002 3.677 20.007 7.31 29.605 9.822 25.953 27.804 59.02 38.659 71.093 2.27 2.526 8.263 9.726 13.317 16 12.796 15.888 37.68 39.695 53.272 50.967 7.358 5.319 20.53 12.94 22.366 12.94 1.05 0 3.656-1.746 5.791-3.882zm-10.32-56.868a4495.324 4495.324 0 0 1 13.38-16.116c14.554-17.407 30.573-46.293 41.11-74.134 3.633-9.598 8.078-27.603 7.31-29.605-.573-1.495-1.267-1.174-4.883 2.259-15.342 14.563-42.92 27.814-60.541 29.089-8.23.595-8.339.705-9.595 9.757-1.518 10.945-9.469 36.557-14.186 45.7-2.93 5.682-1.783 9.492 8.074 26.8 6.866 12.057 9.433 16 10.416 16 .472 0 4.483-4.387 8.915-9.75z"
      fill="#2e2e2e"
    />
    <path
      d="M56.308 284.99c-3.683-1.483-5.626-5.48-5.069-10.423.53-4.697 1.142-5.557 17.76-24.958 14.657-17.111 19-22.404 19-23.156 0-.401-1.8-2.682-4-5.069-3.203-3.475-4-5.096-4-8.14 0-5.83 2.22-8.244 7.58-8.244 3.82 0 5.092.578 8.804 4 2.387 2.2 4.757 4 5.266 4 .987 0 2.982-2.301 16.672-19.23 4.773-5.902 8.678-11.252 8.678-11.889 0-.637-2.588-4.067-5.75-7.62-3.163-3.554-7.583-8.863-9.822-11.797-2.24-2.935-6.548-8.178-9.574-11.65-5.742-6.59-11.708-15.452-18.387-27.313-2.167-3.85-4.49-7.9-5.161-9s-1.669-2.986-2.216-4.19c-.991-2.181-5.595-12.2-9.103-19.81-9.058-19.649-17.41-53.876-14.116-57.844 2.146-2.586 6.565-.274 14.829 7.757 4.29 4.17 8.122 7.583 8.515 7.585.394.001 2.23 1.332 4.08 2.957 10.568 9.278 37.79 20.03 50.793 20.061 3.526.008 6.89.346 7.476.75.585.404 1.628 4.56 2.317 9.235 1.714 11.63 4.425 21.978 9.066 34.605 4.626 12.582 5.345 13.558 8.008 10.856 3.938-3.997 11.748-29.063 14.164-45.461.688-4.675 1.73-8.83 2.316-9.235.586-.404 3.95-.741 7.477-.75 13.002-.031 40.226-10.783 50.792-20.06 1.85-1.626 3.687-2.957 4.08-2.958.393-.002 4.225-3.415 8.516-7.585 8.263-8.03 12.683-10.343 14.829-7.757 3.293 3.969-5.06 38.196-14.116 57.844a7659.189 7659.189 0 0 0-9.104 19.81 47.354 47.354 0 0 1-2.215 4.19c-.672 1.1-2.994 5.15-5.162 9-6.711 11.918-12.64 20.73-18.498 27.5-3.095 3.575-7.165 8.525-9.047 11-1.88 2.475-5.847 7.2-8.814 10.5-8.637 9.608-8.7 8.653 1.395 21.136C208.612 211.004 210.36 213 211.507 213c.597 0 2.843-1.8 4.992-4 3.47-3.555 4.433-4 8.646-4 5.723 0 7.854 2.311 7.854 8.52 0 3.435-.627 4.686-4 7.98-2.2 2.148-4 4.305-4 4.794 0 .905 3.854 5.635 19 23.315 16.982 19.824 17.28 20.25 17.768 25.324.375 3.905.047 5.17-1.941 7.482-2.793 3.246-10.04 4.611-13.8 2.6-5.635-3.016-14.615-10.887-27.285-23.912C211.195 253.347 204.535 247 203.94 247s-3.217 1.8-5.826 4c-3.86 3.255-5.513 4-8.873 4-4.998 0-7.242-2.554-7.242-8.244 0-3.044.796-4.664 4-8.14 4.313-4.68 5.024-7.305 2.25-8.317-2.853-1.04-22.44-14.296-26.503-17.937-2.064-1.849-4.425-3.362-5.247-3.362s-3.183 1.513-5.247 3.362c-4.064 3.641-23.65 16.896-26.503 17.937-2.774 1.012-2.064 3.638 2.25 8.317 3.203 3.476 4 5.096 4 8.14 0 5.69-2.245 8.244-7.243 8.244-3.36 0-5.012-.745-8.872-4-2.61-2.2-5.231-4-5.826-4s-7.256 6.347-14.801 14.104C81.753 273.96 72.604 282 67.183 284.902c-2.417 1.294-7.777 1.338-10.876.09zm11.008-6.35c1.871-.781 11.095-9.482 21.718-20.486 10.156-10.52 19.1-19.134 19.875-19.141.775-.007 4.004 2.462 7.176 5.487s6.194 5.5 6.718 5.5c1.63 0 3.26-2.67 2.632-4.309-.962-2.506-36.398-35.871-37.654-35.452-.626.209-1.614 1.132-2.194 2.052-.861 1.365-.052 2.688 4.402 7.198l5.457 5.526-1.77 3.242c-1.94 3.557-10.403 13.803-26.927 32.606-5.912 6.728-10.75 13.08-10.75 14.113 0 4.564 5.163 6.236 11.317 3.665zm187.75.324c3.936-2.106 2.315-5.435-8.816-18.1-16.466-18.738-24.984-29.047-26.9-32.559l-1.744-3.194 5.197-5.496c2.859-3.022 5.197-5.917 5.197-6.433 0-1.632-2.86-3.386-4.206-2.58-2.398 1.438-34.969 32.88-35.955 34.712-1.008 1.87.41 4.686 2.358 4.686.524 0 3.547-2.475 6.718-5.5s6.401-5.494 7.176-5.487c.776.007 9.718 8.619 19.872 19.137s19.83 19.72 21.5 20.448c3.708 1.615 7.034 1.742 9.604.367zm-119.57-61.992c10.823-7.288 14.874-11.01 14.34-13.175-.575-2.333-15.454-15.798-17.457-15.797-1.821 0-6.237 4.63-13.357 14-1.88 2.475-5.356 6.619-7.723 9.208s-4.27 5.514-4.23 6.5 2.307 3.705 5.038 6.043l4.964 4.251 4.212-2.147c2.317-1.181 8.712-5.178 14.212-8.882zm66.373 5.55c2.27-2.462 4.127-4.957 4.127-5.542s-1.936-3.184-4.303-5.773-5.834-6.732-7.705-9.207c-1.87-2.475-5.932-7.425-9.026-11-16.756-19.358-38.446-62.555-45.426-90.47-1.38-5.517-3.078-13.18-3.774-17.03l-1.265-7-7.5-.562c-4.125-.31-9.3-1.15-11.5-1.868-11.251-3.67-18.79-6.728-26.363-10.692-8.681-4.544-11.121-6.29-21.226-15.19-9.321-8.212-10.58-6.228-6.34 9.999 3.53 13.512 8.41 26.252 16.785 43.807 6.81 14.279 20.41 36.553 26.636 43.629 2.479 2.817 7.433 8.876 11.008 13.464 13.424 17.227 43.242 45.59 59.637 56.726 10.225 6.946 17.795 11.182 19.985 11.184 1.235.001 3.848-1.87 6.25-4.475zm-12.088-54.772c11.336-13.232 19.917-23.84 24.064-29.75 4.165-5.935 17.304-28.684 20.795-36.005 8.378-17.567 13.255-30.296 16.785-43.808 4.237-16.219 2.974-18.222-6.304-10-12.912 11.443-21.315 16.501-36.625 22.044-12.529 4.537-14.896 5.137-22.5 5.707l-7.5.563-1.345 7.5c-2.808 15.66-9.87 38.719-14.762 48.2-1.713 3.32-1.785 7.795-.187 11.503 1.027 2.38 13.875 25.216 17.188 30.547.598.962 1.59 1.75 2.206 1.75.614 0 4.298-3.713 8.186-8.25z"
      fill="#050404"
    />
  </svg>
)

export default SwordSvg
