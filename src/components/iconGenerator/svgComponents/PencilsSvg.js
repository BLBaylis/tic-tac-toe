import React from 'react'
import styles from './svgComponents.module.scss'

const PencilsSvg = props => (
  <svg viewBox="0 0 312 312" {...props}>
    <image
      width={312}
      height={312}
      imageRendering="optimizeQuality"
      preserveAspectRatio="none"
      xlinkHref="data:image/png;base64,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 TQAAAABJRU5ErkJggg=="
    />
    <path d="M0 156V0h312v312H0z" fill="#fff" />
    <path
      d="M210.27 246.76l-54.271-54.238-53.772 53.738c-29.574 29.556-54.442 53.738-55.262 53.738s-8.347-6.868-16.728-15.262c-12.854-12.874-15.238-15.73-15.238-18.254 0-2.618 6.562-9.553 52.5-55.485 28.875-28.871 52.5-52.969 52.5-53.551 0-.582-12.882-13.858-28.626-29.504-27.851-27.676-28.903-28.865-38.841-43.946-9.899-15.021-28.792-44.213-35.328-54.588-4.924-7.816-4.012-14.412 1.994-14.412 2.406 0 11.81 5.705 40.715 24.7l37.586 24.7 29.25 29.012 29.25 29.012 29.75-29.513 29.75-29.513 37.684-24.764c34.666-22.781 37.989-24.739 41.5-24.45l3.816.314-.067 5c-.07 5.323-.273 5.686-20.935 37.5-28.057 43.202-24.548 38.817-56.373 70.447C205.107 143.362 192 156.856 192 157.43s24.075 25.131 53.5 54.575c33.264 33.285 53.5 54.256 53.5 55.442 0 2.282-30.697 33.55-32.938 33.55-.836 0-25.941-24.408-55.791-54.239z"
      fill="#eadfac"
    />
    <path
    className = {styles[props.colour]}
      d="M211.48 246c-29.711-29.699-54.676-53.997-55.478-53.997-.802 0-25.656 24.182-55.231 53.738l-53.772 53.738-15.5-15.476c-9.673-9.657-15.5-16.227-15.5-17.475 0-1.307 18.386-20.398 53.102-55.136 46.025-46.054 52.968-53.387 52.097-55.012-.553-1.032-13.9-14.637-29.66-30.234-28.07-27.78-28.864-28.678-38.946-44C21.834 35.4 14.999 24.313 14.999 21.163c0-3.34 1.635-5.158 4.64-5.158 1.247 0 18.772 10.896 39.55 24.59l37.31 24.59 29.039 28.91c15.972 15.901 29.679 28.91 30.462 28.91.782 0 14.715-13.235 30.96-29.41l29.539-29.41 37.39-24.643c31.478-20.746 37.882-24.595 40.5-24.34 2.712.264 3.15.724 3.426 3.6.37 3.854-.65 5.734-16.134 29.703-32.653 50.547-28.386 45.126-60.716 77.132-16.038 15.877-29.613 29.712-30.166 30.744-.872 1.626 6.193 9.08 53.096 56.012 29.756 29.775 54.103 54.586 54.103 55.136 0 .98-31.05 32.479-32.01 32.473-.27-.001-24.798-24.301-54.509-54zm64.751 32.271c5.372-5.352 9.768-10.182 9.768-10.732 0-1.332-19.171-20.537-20.5-20.537-.57 0-5.52 4.5-11 10l-9.963 10 10.464 10.5c5.755 5.775 10.689 10.5 10.964 10.5s4.896-4.38 10.268-9.731zm-218.23-1.768l10.464-10.5-9.963-10c-5.48-5.5-10.413-10-10.964-10-1.309 0-20.537 19.159-20.537 20.463 0 1.014 19.011 20.537 20 20.537.294 0 5.244-4.725 11-10.5zm18.598-184.5c.054-.825.166-2.063.25-2.75.093-.767 1.7-1.25 4.152-1.25 3.569 0 4-.262 4-2.429 0-3.343 2.342-5.42 5.444-4.827 2.27.434 2.556.162 2.556-2.437 0-1.609-.562-3.644-1.25-4.522s-9.96-7.255-20.606-14.17c-20.34-13.212-20.449-13.251-24.478-8.8-2.302 2.545-2.338 2.473 12.88 25.647 10.658 16.23 11.811 17.632 14.274 17.347 1.52-.176 2.722-.96 2.778-1.81zm176.9-16.597c15.175-23.11 15.142-23.043 12.84-25.587-4.03-4.453-4.138-4.413-24.478 8.799-10.646 6.915-19.918 13.29-20.606 14.17s-1.25 2.913-1.25 4.522c0 2.599.286 2.871 2.556 2.437 3.102-.593 5.444 1.484 5.444 4.827 0 2.167.431 2.429 4 2.429 2.452 0 4.059.483 4.152 1.25.084.687.257 1.7.385 2.25s.284 1.337.348 1.75c.063.412 1.226.75 2.584.75 2.094 0 4.224-2.673 14.024-17.597z"
      fill="#fcc60c"
    />
    <path
    className = {styles[props.colour]}
      d="M211.48 246c-29.711-29.699-54.676-53.997-55.478-53.997-.802 0-25.656 24.182-55.231 53.738l-53.772 53.738-15.5-15.476c-9.673-9.657-15.5-16.227-15.5-17.475 0-1.307 18.386-20.398 53.102-55.136 46.025-46.054 52.968-53.387 52.097-55.012-.553-1.032-13.9-14.637-29.66-30.234-28.07-27.78-28.864-28.678-38.946-44C21.834 35.4 14.999 24.313 14.999 21.163c0-3.34 1.635-5.158 4.64-5.158 1.247 0 18.772 10.896 39.55 24.59l37.31 24.59 29.039 28.91c15.972 15.901 29.679 28.91 30.462 28.91.782 0 14.715-13.235 30.96-29.41l29.539-29.41 37.39-24.643c31.478-20.746 37.882-24.595 40.5-24.34 2.712.264 3.15.724 3.426 3.6.37 3.854-.65 5.734-16.134 29.703-32.653 50.547-28.386 45.126-60.716 77.132-16.038 15.877-29.613 29.712-30.166 30.744-.872 1.626 6.193 9.08 53.096 56.012 29.756 29.775 54.103 54.586 54.103 55.136 0 .98-31.05 32.479-32.01 32.473-.27-.001-24.798-24.301-54.509-54zm64.751 32.271c5.372-5.352 9.768-10.182 9.768-10.732 0-1.332-19.171-20.537-20.5-20.537-.57 0-5.52 4.5-11 10l-9.963 10 10.464 10.5c5.755 5.775 10.689 10.5 10.964 10.5s4.896-4.38 10.268-9.731zm-218.23-1.768l10.464-10.5-9.963-10c-5.48-5.5-10.413-10-10.964-10-1.309 0-20.537 19.159-20.537 20.463 0 1.014 19.011 20.537 20 20.537.294 0 5.244-4.725 11-10.5zm185-17.246c0-2.291-73.954-76.255-76.245-76.255-1.003 0-1.755.748-1.755 1.745 0 2.291 73.954 76.255 76.245 76.255 1.003 0 1.755-.748 1.755-1.745zm-89.224-79.531c63.302-63.306 80.013-80.535 79.048-81.5-.673-.673-1.695-1.224-2.272-1.224-1.834 0-160.55 159.41-160.55 161.25 0 1.003.75 1.752 1.753 1.752.988 0 36.738-34.988 82.024-80.276zm97.224 71.53c0-1.986-73.802-76.254-75.776-76.254-.708 0-1.563.72-1.9 1.6-.758 1.974 73.202 76.4 75.922 76.4 1.003 0 1.755-.748 1.755-1.746zm-106.25-78.502c43.589-43.586 79.252-79.721 79.252-80.3 0-.58-.55-1.603-1.224-2.276-.965-.966-18.089 15.64-81 78.548-45.003 45-79.776 80.535-79.776 81.524 0 1 .75 1.752 1.748 1.752.982 0 36.462-34.713 81-79.248zm114.93 70.648c.762-1.986-74.36-77.59-76.665-77.157-4.816.905-1.804 4.454 35.132 41.4 21.257 21.264 38.116 37.357 39.132 37.357.983 0 2.063-.72 2.4-1.6zm-122.74-78.84c79.165-79.17 79.431-79.45 78.184-82.186l-1.251-2.746-80.583 80.583c-80.045 80.045-83.511 83.789-77.57 83.789 1.031 0 35.348-33.566 81.22-79.44zm-6.264-17.158c.44-1.147-6.13-8.345-23.274-25.5-13.138-13.146-24.363-23.902-24.944-23.902-.582 0-1.608.55-2.28 1.22-.961.963 3.937 6.383 23.043 25.5 13.345 13.354 24.844 24.28 25.553 24.28s1.564-.72 1.902-1.598zm8-8c.915-2.385-46.57-49.735-48.375-48.237C89.586 91.76 89 92.75 89 93.366c0 1.571 46.197 47.635 47.773 47.635.71 0 1.565-.72 1.902-1.598zm8.1-8.913c.202-1.441-6.326-8.584-23.688-25.92L99.123 80.638l-1.247 2.737c-1.232 2.705-.966 3.02 22.189 26.2 13.238 13.254 24.089 23.342 24.936 23.184.825-.153 1.624-1.174 1.777-2.269zM76.6 92.001c.054-.825.166-2.062.25-2.75.093-.766 1.7-1.25 4.152-1.25 3.569 0 4-.262 4-2.428 0-3.344 2.342-5.42 5.444-4.827 2.27.434 2.556.161 2.556-2.437 0-1.61-.562-3.644-1.25-4.522s-9.96-7.255-20.606-14.17c-20.34-13.212-20.449-13.251-24.478-8.8-2.302 2.544-2.338 2.472 12.88 25.646 10.658 16.23 11.811 17.632 14.274 17.347 1.52-.175 2.722-.96 2.778-1.81zm176.9-16.597c15.175-23.109 15.142-23.043 12.84-25.587-4.03-4.452-4.139-4.413-24.478 8.8-10.646 6.915-19.918 13.29-20.606 14.17s-1.25 2.913-1.25 4.522c0 2.598.286 2.87 2.556 2.437 3.102-.593 5.444 1.483 5.444 4.827 0 2.166.431 2.428 4 2.428 2.452 0 4.059.484 4.152 1.25.084.688.257 1.7.385 2.25s.284 1.338.348 1.75c.063.413 1.226.75 2.584.75 2.094 0 4.224-2.672 14.024-17.597z"
      fill="#deae0b"
    />
    <path
    className = {styles[props.colour]}
      d="M211.48 246c-29.711-29.699-54.676-53.997-55.478-53.997-.802 0-25.656 24.182-55.231 53.738l-53.772 53.738-15.5-15.476c-9.673-9.657-15.5-16.227-15.5-17.475 0-1.307 18.386-20.398 53.102-55.136 46.025-46.054 52.968-53.387 52.097-55.012-.553-1.032-13.9-14.637-29.66-30.234-28.07-27.78-28.864-28.678-38.946-44C21.834 35.4 14.999 24.313 14.999 21.163c0-3.34 1.635-5.158 4.64-5.158 1.247 0 18.772 10.896 39.55 24.59l37.31 24.59 29.039 28.91c15.972 15.901 29.679 28.91 30.462 28.91.782 0 14.715-13.235 30.96-29.41l29.539-29.41 37.39-24.643c31.478-20.746 37.882-24.595 40.5-24.34 2.712.264 3.15.724 3.426 3.6.37 3.854-.65 5.734-16.134 29.703-32.653 50.547-28.386 45.126-60.716 77.132-16.038 15.877-29.613 29.712-30.166 30.744-.872 1.626 6.193 9.08 53.096 56.012 29.756 29.775 54.103 54.586 54.103 55.136 0 .98-31.05 32.479-32.01 32.473-.27-.001-24.798-24.301-54.509-54zm64.751 32.271c5.372-5.352 9.768-10.182 9.768-10.732 0-1.332-19.171-20.537-20.5-20.537-.57 0-5.52 4.5-11 10l-9.963 10 10.464 10.5c5.755 5.775 10.689 10.5 10.964 10.5s4.896-4.38 10.268-9.731zm-218.23-1.768l10.464-10.5-9.963-10c-5.48-5.5-10.413-10-10.964-10-1.309 0-20.537 19.159-20.537 20.463 0 1.014 19.011 20.537 20 20.537.294 0 5.244-4.725 11-10.5zm185.54-15.55c1.837-2.03 1.498-2.405-37.332-41.234l-39.186-39.186-2.247 2.247-2.247 2.246 38.98 38.99c21.437 21.443 39.248 38.988 39.578 38.988.33 0 1.435-.922 2.455-2.049zm-89.542-80.483l81.498-81.533-2.5-1.935-2.5-1.934-81.45 81.418c-80.751 80.719-81.434 81.436-79.595 83.468 1.02 1.127 2.124 2.049 2.452 2.049s37.271-36.69 82.095-81.533zm97.541 72.486c1.835-2.028 1.491-2.41-36.595-40.518-21.146-21.16-39.075-38.35-39.841-38.203-.766.147-1.889 1.056-2.495 2.018-.95 1.509 4.212 7.066 37.388 40.25 21.17 21.175 38.76 38.5 39.09 38.5.33 0 1.434-.921 2.453-2.047zm-106.32-79.703l80.715-80.75-1.935-2.5-1.934-2.5-81.232 81.2c-80.535 80.505-81.216 81.219-79.377 83.25 1.02 1.128 2.123 2.05 2.452 2.05s36.919-36.338 81.312-80.75zm113.95 72.095c1.006-.91 1.829-2.146 1.829-2.745 0-1.432-76.16-77.6-77.59-77.6-.605 0-1.934.92-2.953 2.047-1.835 2.028-1.487 2.413 37.09 41 21.419 21.424 39.135 38.953 39.369 38.953s1.249-.745 2.255-1.655zm-122.26-79.756l80.406-80.411-1.28-3.09c-.703-1.699-1.563-3.089-1.91-3.089-1.012 0-162.13 161.41-162.13 162.42 0 1.052 3.009 4.577 3.907 4.577.329 0 36.78-36.185 81.003-80.411zm-5.522-17.841c.95-1.507-2.39-5.24-23.893-26.717L82.5 96.069 80 98l-2.5 1.932 25 25.054c13.75 13.78 25.627 24.933 26.393 24.785s1.89-1.057 2.496-2.02zm8-8c.949-1.507-2.36-5.211-23.676-26.5L90.933 88.503l-1.931 2.5-1.932 2.5 24.215 24.269c13.318 13.348 24.84 24.148 25.608 24s1.89-1.058 2.496-2.021zm8.153-7.795c1.833-2.025 1.6-2.298-23.088-27-13.716-13.725-25.225-24.954-25.575-24.954s-1.211 1.389-1.914 3.086l-1.278 3.085 23.899 23.914c13.144 13.153 24.395 23.914 25.002 23.914.606 0 1.936-.92 2.954-2.046zM76.597 92.002c.054-.825.166-2.062.25-2.75.093-.766 1.7-1.25 4.152-1.25 3.569 0 4-.262 4-2.428 0-3.344 2.342-5.42 5.444-4.827 2.27.434 2.556.161 2.556-2.437 0-1.61-.562-3.644-1.25-4.522s-9.96-7.255-20.606-14.17c-20.34-13.212-20.449-13.251-24.478-8.8-2.302 2.544-2.338 2.473 12.88 25.646 10.658 16.23 11.811 17.632 14.274 17.347 1.52-.175 2.722-.96 2.778-1.81zm176.9-16.597c15.175-23.109 15.142-23.043 12.84-25.587-4.03-4.452-4.138-4.413-24.478 8.8-10.646 6.915-19.918 13.29-20.606 14.17s-1.25 2.913-1.25 4.522c0 2.598.286 2.87 2.556 2.437 3.102-.593 5.444 1.483 5.444 4.827 0 2.166.431 2.428 4 2.428 2.452 0 4.059.484 4.152 1.25.084.688.257 1.7.385 2.25s.284 1.338.348 1.75c.063.413 1.226.75 2.584.75 2.094 0 4.224-2.672 14.024-17.597z"
      fill="#9a7913"
    />
    <path

      d="M211.48 246c-29.711-29.699-54.676-53.997-55.478-53.997-.802 0-25.656 24.182-55.231 53.738l-53.772 53.738-15.5-15.476c-9.673-9.657-15.5-16.227-15.5-17.475 0-1.307 18.386-20.398 53.102-55.136 46.025-46.054 52.968-53.387 52.097-55.012-.553-1.032-13.9-14.637-29.66-30.234-28.07-27.78-28.864-28.678-38.946-44C21.834 35.4 14.999 24.313 14.999 21.163c0-3.34 1.635-5.158 4.64-5.158 1.247 0 18.772 10.896 39.55 24.59l37.31 24.59 29.039 28.91c15.972 15.901 29.679 28.91 30.462 28.91.782 0 14.715-13.235 30.96-29.41l29.539-29.41 37.39-24.643c31.478-20.746 37.882-24.595 40.5-24.34 2.712.264 3.15.724 3.426 3.6.37 3.854-.65 5.734-16.134 29.703-32.653 50.547-28.386 45.126-60.716 77.132-16.038 15.877-29.613 29.712-30.166 30.744-.872 1.626 6.193 9.08 53.096 56.012 29.756 29.775 54.103 54.586 54.103 55.136 0 .98-31.05 32.479-32.01 32.473-.27-.001-24.798-24.301-54.509-54zm64.751 32.271c5.372-5.352 9.768-10.182 9.768-10.732 0-1.332-19.171-20.537-20.5-20.537-.57 0-5.52 4.5-11 10l-9.963 10 10.464 10.5c5.755 5.775 10.689 10.5 10.964 10.5s4.896-4.38 10.268-9.731zm-218.23-1.768l10.464-10.5-9.963-10c-5.48-5.5-10.413-10-10.964-10-1.309 0-20.537 19.159-20.537 20.463 0 1.014 19.011 20.537 20 20.537.294 0 5.244-4.725 11-10.5zm185.8-14.7c.66-.66 1.2-1.896 1.2-2.745 0-2.026-76.02-78.055-78.045-78.055-1.991 0-3.955 1.958-3.955 3.945 0 2.025 76.02 78.055 78.045 78.055.855 0 2.095-.54 2.755-1.2zm-88.513-81.587l81.782-81.787-3.16-2.336-3.159-2.336-81.375 81.37c-44.756 44.754-81.375 82.069-81.375 82.922 0 1.992 1.96 3.952 3.952 3.952.854 0 38.354-36.804 83.334-81.787zm96.513 73.587c.66-.66 1.2-1.9 1.2-2.755s-17.325-18.875-38.5-40.045c-32.482-32.474-38.763-38.324-40.183-37.428-5.152 3.25-5.85 2.385 34.683 42.928 21.17 21.175 39.19 38.5 40.045 38.5s2.095-.54 2.755-1.2zm-105.43-80.675l80.87-80.875-2.336-3.16-2.336-3.16-81.287 81.283c-44.708 44.705-81.287 81.98-81.287 82.834 0 1.991 1.96 3.952 3.952 3.952.854 0 37.944-36.394 82.422-80.875zm113.8 72.22c1.006-.91 1.829-2.146 1.829-2.746 0-1.319-77.1-78.6-78.416-78.6-1.57 0-4.584 3.222-4.584 4.9 0 1.974 75.948 78.1 77.916 78.1.784 0 2.25-.744 3.255-1.654zm-122.42-79.593c44.139-44.136 80.252-80.742 80.252-81.346s-.734-2.57-1.631-4.369l-1.632-3.27-81.869 81.864c-45.028 45.025-81.869 82.28-81.869 82.788 0 1.569 3.224 4.581 4.903 4.581.876 0 37.706-36.111 81.845-80.248zm-6.576-16.407c1.005-.91 1.828-2.151 1.828-2.758s-11.42-12.516-25.378-26.465L82.247 94.762l-3.154 2.332-3.154 2.332 25.774 25.789c14.176 14.184 26.192 25.789 26.703 25.789s1.752-.745 2.758-1.655zm8-8c1.005-.91 1.828-2.151 1.828-2.758s-11.38-12.476-25.289-26.376L90.425 86.94l-2.331 3.154-2.332 3.154 24.863 24.878c13.675 13.683 25.281 24.878 25.792 24.878s1.752-.745 2.758-1.655zm8-8c1.005-.91 1.828-2.376 1.828-3.258s-11.417-13.012-25.37-26.958l-25.37-25.356-1.63 3.267c-.896 1.797-1.629 3.757-1.629 4.356 0 1.32 48.098 49.604 49.414 49.604.511 0 1.752-.745 2.758-1.655zM76.6 92.003c.053-.825.166-2.063.25-2.75.093-.767 1.7-1.25 4.152-1.25 3.568 0 4-.262 4-2.429 0-3.343 2.342-5.42 5.443-4.827 2.271.434 2.557.162 2.557-2.437 0-1.609-.563-3.644-1.25-4.522s-9.96-7.255-20.606-14.17c-20.34-13.212-20.45-13.251-24.478-8.8-2.302 2.545-2.338 2.473 12.88 25.647 10.658 16.23 11.81 17.632 14.274 17.347 1.519-.176 2.722-.96 2.777-1.81zm176.9-16.597c15.175-23.11 15.142-23.043 12.84-25.587-4.03-4.453-4.139-4.413-24.478 8.799-10.646 6.915-19.918 13.29-20.606 14.17s-1.25 2.913-1.25 4.522c0 2.599.285 2.871 2.556 2.437 3.102-.593 5.444 1.484 5.444 4.827 0 2.167.431 2.429 4 2.429 2.452 0 4.058.483 4.152 1.25.084.687.257 1.7.385 2.25.127.55.284 1.337.347 1.75.064.412 1.227.75 2.585.75 2.094 0 4.224-2.673 14.024-17.597z"
      fill="#625e5d"
    />
    <path
    className = {styles[props.colour]}
      d="M210.25 243.75l-54.248-54.248-53.755 53.748c-29.565 29.561-54.434 53.748-55.264 53.748-2.307 0-29.984-28.168-29.984-30.516 0-1.296 18.49-20.479 53-54.984 29.15-29.146 53-53.462 53-54.035s-13.1-14.075-29.112-30.004C61.702 95.441 65.134 99.805 33.363 50.498 16.622 24.517 15.998 23.467 15.998 21.283c0-2.576 2.45-4.666 4.745-4.048.965.26 18.63 11.607 39.255 25.215l37.5 24.742 29.243 29.123 29.243 29.123 30.257-30.02 30.257-30.022 37.7-24.775c40.26-26.457 42.399-27.502 42.197-20.623-.103 3.502-2.715 8.002-20.9 36-27.927 43.003-24.544 38.783-56.886 70.962-16.286 16.204-29.611 29.931-29.611 30.504s24.075 25.113 53.5 54.535c35.293 35.288 53.5 54.18 53.5 55.51 0 2.356-27.694 30.49-30.014 30.49-.82 0-25.9-24.41-55.736-54.248zm67.483 35.016C283.38 273.138 288 268.083 288 267.532c0-1.33-21.172-22.534-22.501-22.534-1.61 0-21.499 20.352-21.499 22 0 1.936 20.032 22 21.965 22 .825 0 6.121-4.604 11.768-10.232zm-219-1C64.38 272.138 69 266.859 69 266.033c0-1.651-19.857-22.035-21.466-22.035-1.308 0-22.534 21.161-22.534 22.466 0 1.614 20.319 21.534 21.965 21.534.825 0 6.121-4.604 11.768-10.232zm185.07-15.968c.66-.66 1.2-1.895 1.2-2.745 0-2.026-76.02-78.055-78.045-78.055-1.991 0-3.955 1.959-3.955 3.945 0 2.026 76.02 78.055 78.045 78.055.855 0 2.095-.54 2.755-1.2zm-88.513-81.587l81.782-81.787-3.16-2.336-3.159-2.336-81.375 81.37c-44.756 44.754-81.375 82.07-81.375 82.922 0 1.992 1.96 3.953 3.952 3.953.854 0 38.354-36.804 83.334-81.787zm96.513 73.587c.66-.66 1.2-1.9 1.2-2.755s-17.325-18.875-38.5-40.045c-32.482-32.474-38.763-38.324-40.183-37.428-5.152 3.25-5.85 2.385 34.683 42.928 21.17 21.175 39.19 38.5 40.045 38.5s2.095-.54 2.755-1.2zm-105.43-80.675l80.87-80.875-2.336-3.16-2.336-3.159-81.287 81.282c-44.708 44.705-81.287 81.981-81.287 82.834 0 1.992 1.96 3.952 3.952 3.952.854 0 37.944-36.394 82.422-80.875zm113.8 72.22c1.006-.91 1.829-2.146 1.829-2.745 0-1.32-77.1-78.6-78.416-78.6-1.57 0-4.584 3.222-4.584 4.9 0 1.973 75.948 78.1 77.916 78.1.784 0 2.25-.745 3.255-1.655zm-122.42-79.593c44.139-44.136 80.252-80.742 80.252-81.346s-.734-2.57-1.631-4.369l-1.632-3.27-81.869 81.864c-45.028 45.025-81.869 82.28-81.869 82.788 0 1.57 3.224 4.581 4.903 4.581.876 0 37.706-36.11 81.845-80.248zm-6.576-16.407c1.005-.91 1.828-2.151 1.828-2.757s-11.42-12.516-25.378-26.465L82.25 94.758l-3.154 2.331-3.154 2.332 25.774 25.79c14.176 14.183 26.192 25.788 26.703 25.788s1.752-.745 2.758-1.655zm8-8c1.005-.91 1.828-2.151 1.828-2.757s-11.38-12.476-25.289-26.376L90.427 86.936l-2.331 3.153-2.332 3.154 24.863 24.878c13.675 13.683 25.281 24.878 25.792 24.878s1.752-.745 2.758-1.655zm8-8c1.005-.91 1.828-2.376 1.828-3.257s-11.417-13.012-25.37-26.958l-25.37-25.356-1.63 3.266c-.896 1.797-1.629 3.757-1.629 4.356 0 1.32 48.098 49.604 49.414 49.604.511 0 1.752-.745 2.758-1.655zM76.424 95.391c.951-.365 1.581-1.791 1.581-3.58 0-2.754.212-2.926 2.877-2.34 3.485.765 6.123-1.442 6.123-5.124 0-2.253.298-2.442 2.93-1.864 3.562.782 4.97-1.342 4.129-6.23-.513-2.98-2.912-4.8-29.27-22.195-15.79-10.42-29.627-19.439-30.75-20.04-4.712-2.522-2.386 1.547 24.43 42.73 12.614 19.37 13.542 20.333 17.95 18.642zm178.11-19.643c26.816-41.183 29.142-45.251 24.43-42.729-1.122.6-14.96 9.618-30.75 20.04-26.357 17.395-28.756 19.214-29.27 22.194-.84 4.89.567 7.013 4.128 6.23 2.633-.578 2.93-.389 2.93 1.865 0 3.681 2.64 5.889 6.124 5.123 2.67-.586 2.877-.415 2.877 2.365 0 3.12.966 3.95 4.748 4.084 1.847.064 4.48-3.35 14.783-19.171z"
      fill="#5f4b06"
    />
    <path
      d="M210.27 243.76l-54.271-54.238-53.772 53.738c-29.574 29.556-54.457 53.738-55.295 53.738-2.23 0-29.934-28.279-29.934-30.556 0-1.177 20.192-22.106 53-54.935 29.15-29.169 53-53.482 53-54.028 0-.547-12.869-13.816-28.597-29.488-28.533-28.43-28.623-28.533-40.154-45.993-30.301-45.883-38.249-58.522-38.249-60.833 0-2.052 1.85-4.167 3.644-4.167.684 0 18.706 11.518 40.05 25.595l38.806 25.595 28.75 28.632 28.75 28.632 29.25-29.133 29.25-29.133 38.885-25.646c25.78-17.003 39.598-25.545 41-25.344 5.348.763 2.963 5.987-15.896 34.802-33.261 50.822-28.215 44.431-60.392 76.494-16.003 15.946-29.097 29.441-29.097 29.988 0 .547 24.075 25.084 53.5 54.528 33.128 33.15 53.5 54.258 53.5 55.435 0 2.277-27.704 30.556-29.934 30.556-.838 0-25.945-24.407-55.795-54.238zm67.461 35.005c5.647-5.628 10.267-10.683 10.267-11.234 0-1.33-21.172-22.534-22.501-22.534-1.61 0-21.499 20.352-21.499 22 0 1.936 20.032 22 21.965 22 .825 0 6.121-4.604 11.768-10.232zm-219-1c5.647-5.628 10.267-10.907 10.267-11.733 0-1.651-19.857-22.035-21.466-22.035-1.309 0-22.534 21.161-22.534 22.466 0 1.614 20.319 21.534 21.965 21.534.825 0 6.121-4.605 11.768-10.232zm185.8-15.799l2.904-3.031-40.208-40.208-40.208-40.208-3.247 3.247-3.247 3.247 39.983 39.993c21.991 21.996 40.24 39.993 40.551 39.993s1.875-1.365 3.472-3.032zm-89.147-80.852c49.185-49.188 82.598-83.337 82.189-84-.38-.614-1.19-1.117-1.802-1.117-.612 0-1.958-.765-2.99-1.7-1.805-1.632-5.163 1.584-84.547 80.969l-82.668 82.668 2.905 3.031c1.597 1.668 3.159 3.032 3.47 3.032.31 0 37.86-37.298 83.444-82.883zm97.145 72.854l2.903-3.03-39.461-39.47c-21.703-21.709-39.884-39.47-40.401-39.47-1.326 0-5.57 4.13-5.57 5.42 0 1.074 77.991 79.58 79.058 79.58.313 0 1.874-1.363 3.47-3.03zm-105.57-80.424c65.555-65.559 82.085-82.594 80.671-83.136-.978-.375-2.183-1.746-2.677-3.046-.494-1.3-1.248-2.364-1.676-2.364s-37.886 37.111-83.242 82.47l-82.464 82.468 2.904 3.031c1.597 1.667 3.158 3.031 3.47 3.031s37.666-37.104 83.014-82.454zm113.24 72.767c1.543-1.478 2.805-3.163 2.805-3.745 0-1.39-78.17-79.568-79.558-79.568-.588 0-2.374 1.363-3.97 3.03l-2.903 3.03 39.96 39.97c21.979 21.983 40.164 39.97 40.412 39.97.247 0 1.712-1.21 3.254-2.688zm-122.45-79.561c44.689-44.686 81.252-82.01 81.252-82.941s-.45-1.971-1-2.311-1-1.465-1-2.5-.502-2.193-1.117-2.572c-1.131-.7-165.88 163.19-165.88 165.02 0 1.022 5.01 6.557 5.935 6.557.309 0 37.124-36.561 81.813-81.248zm-6.062-16.927c1.273-1.196 2.314-2.662 2.314-3.257 0-.596-11.679-12.756-25.954-27.022-24.883-24.87-26.03-25.87-27.829-24.243-1.031.933-2.375 1.697-2.987 1.697-3.96 0-.131 4.586 23.883 28.614 14.505 14.512 26.796 26.386 27.315 26.386.519 0 1.984-.979 3.257-2.175zm8-8c1.273-1.196 2.314-2.662 2.314-3.257 0-1.9-51.702-52.871-52.886-52.14-.612.38-1.113 1.322-1.113 2.095 0 .773-.961 1.92-2.136 2.548-1.995 1.068-.438 2.841 23.743 27.035 14.233 14.241 26.302 25.892 26.821 25.892s1.985-.978 3.258-2.174zm8.842-8.854l2.901-3.029-26.457-26.47c-14.552-14.56-26.812-26.472-27.246-26.472-.434 0-1.032.788-1.33 1.75-.298.963-.959 2.532-1.469 3.487s-.927 2.301-.927 2.992c0 1.523 49.04 50.771 50.555 50.771.59 0 2.377-1.362 3.972-3.028zm-70.52-40.471c.457-2.66.864-2.965 3.584-2.693 3.414.342 5.046-1.067 5.563-4.807.28-2.027.84-2.45 2.96-2.234 3.796.387 5.288-1.905 4.209-6.468-.844-3.57-2.306-4.673-31.23-23.564-16.688-10.9-30.75-19.682-31.247-19.516-.498.166.607 2.772 2.455 5.792s4.869 7.965 6.713 10.99c5.98 9.81 27.216 42.449 28.822 44.299 1.012 1.166 2.632 1.693 4.608 1.5 2.511-.246 3.137-.826 3.562-3.299zm177.49-17.743c7.15-10.86 14.23-21.884 15.733-24.5 1.503-2.616 4.556-7.677 6.784-11.245 2.229-3.569 3.642-6.625 3.141-6.792-.5-.167-14.565 8.615-31.253 19.515-28.923 18.89-30.384 19.994-31.229 23.564-1.079 4.563.413 6.856 4.21 6.468 2.12-.216 2.679.207 2.96 2.234.516 3.739 2.148 5.15 5.558 4.807 2.42-.242 3.133.114 3.389 1.693.67 4.146 1.17 4.63 4.45 4.314 3.033-.293 4.15-1.67 16.257-20.057z"
      fill="#120f07"
    />
  </svg>
)

export default PencilsSvg
