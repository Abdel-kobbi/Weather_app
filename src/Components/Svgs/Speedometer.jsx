import React from 'react'
import { SvgHoc } from './SvgHoc'

function Speedometer({ width, height, color }) {
    return (
        <svg fill={color} height={height} width={width} version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 510.743 510.743" xmlnsXlink="http://www.w3.org/1999/xlink" enableBackground="new 0 0 510.743 510.743">
            <g>
                <path d="m433.241,111.951c-47.923-46.481-111.092-72.08-177.869-72.08s-129.946,25.599-177.869,72.08c-47.816,46.378-75.338,108.522-77.495,174.985-0.136,4.18 1.404,8.15 4.336,11.179 2.926,3.023 7.012,4.756 11.209,4.756h56.491c1.1,26.75 8.045,53.149 20.288,76.784 12.368,23.878 30.146,45.043 51.539,61.446v20.27c0,5.238 4.262,9.5 9.5,9.5h204c5.238,0 9.5-4.262 9.5-9.5v-20.269c21.388-16.399 39.163-37.558 51.53-61.429 12.248-23.64 19.196-50.045 20.296-76.802h56.492c4.197,0 8.283-1.734 11.209-4.757 2.932-3.029 4.471-6.999 4.335-11.179-2.155-66.462-29.676-128.606-77.492-174.984zm-81.369,343.921h-193v-49h193v49zm53.211-83.099c-9.552,18.436-22.616,35.113-38.212,48.912v-20.313c0-5.238-4.262-9.5-9.5-9.5h-204c-5.238,0-9.5,4.262-9.5,9.5v20.313c-15.6-13.803-28.667-30.486-38.22-48.928-12.458-24.052-18.776-50.081-18.78-77.363 0-0.008 0.001-0.015 0.001-0.022 0-0.008-0.001-0.015-0.001-0.023 0.013-92.9 75.596-168.477 168.5-168.477 41.481,0 79.501,15.076 108.892,40.024l-97.096,74.25c-3.804-0.827-7.748-1.274-11.795-1.274-30.603,0-55.5,24.897-55.5,55.5s24.897,55.5 55.5,55.5 55.5-24.897 55.5-55.5c0-4.048-0.447-7.992-1.274-11.795l74.25-97.096c24.948,29.39 40.024,67.411 40.024,108.892-5.68434e-14,27.295-6.322,53.337-18.789,77.4zm-121.596-125.225l83.758-64.05-64.05,83.758c-4.792-8.12-11.588-14.916-19.708-19.708zm12.385,47.824c0,22.332-18.168,40.5-40.5,40.5s-40.5-18.168-40.5-40.5 18.168-40.5 40.5-40.5 40.5,18.168 40.5,40.5zm199.75-7.69c-0.068,0.071-0.216,0.189-0.432,0.189h-56.484c-1.754-43.409-18.655-82.978-45.555-113.557l20.178-26.387c2.284-2.986 2.004-7.201-0.654-9.859-2.658-2.658-6.873-2.938-9.859-0.654l-26.387,20.178c-32.332-28.443-74.712-45.721-121.057-45.721-98.669,0-179.385,78.283-183.334,176h-56.484c-0.216,0-0.363-0.119-0.432-0.189-0.126-0.13-0.123-0.224-0.122-0.26 1.217-37.498 11.022-73.532 28.37-105.79l14.262,8.234c1.181,0.682 2.471,1.006 3.743,1.006 2.592,0 5.113-1.346 6.502-3.751 2.071-3.587 0.842-8.174-2.745-10.245l-14.245-8.224c10.312-16.585 22.71-32.016 37.059-45.934 12.538-12.161 26.188-22.798 40.709-31.826l8.221,14.24c1.389,2.406 3.91,3.751 6.502,3.751 1.272,0 2.562-0.324 3.743-1.006 3.587-2.071 4.816-6.658 2.745-10.245l-8.226-14.247c32.446-17.451 68.644-27.235 106.232-28.385v16.371c0,4.142 3.358,7.5 7.5,7.5s7.5-3.358 7.5-7.5v-16.371c37.587,1.15 73.785,10.933 106.23,28.385l-8.226,14.247c-2.071,3.587-0.842,8.174 2.745,10.245 1.181,0.682 2.471,1.006 3.743,1.006 2.592,0 5.113-1.346 6.502-3.751l8.221-14.24c14.521,9.028 28.171,19.665 40.709,31.826 14.349,13.918 26.747,29.349 37.059,45.934l-14.245,8.224c-3.587,2.071-4.816,6.658-2.745,10.245 1.389,2.406 3.91,3.751 6.502,3.751 1.272,0 2.562-0.324 3.743-1.006l14.262-8.234c17.347,32.258 27.152,68.292 28.37,105.791 0.002,0.035 0.005,0.13-0.12,0.259z" />
                <path d="m247.872,279.372c0,4.142 3.358,7.5 7.5,7.5 4.687,0 8.5,3.813 8.5,8.5 0,4.142 3.358,7.5 7.5,7.5s7.5-3.358 7.5-7.5c0-12.958-10.542-23.5-23.5-23.5-4.143,0-7.5,3.357-7.5,7.5z" />
            </g>
        </svg>
    )
};

export default SvgHoc(Speedometer);
