import React from "react";

export default function Sidebar() {
  return (
    <div className="fixed h-full flex">
      <ul className="flex flex-col justify-evenly items-center align-center pl-10">
        <li className="pr-12  hover:bg-mainBg hover:bg-whiteGray hover:shadow-buttonShadow transform hover:scale-110">
          <a href="https://github.com/Chabelle78" target="_blank">
            <img
              src="src/pictures/github (1).svg"
              alt="githubchabat"
              width="25rem"
            />
          </a>
        </li>
        <li className="pr-12  hover:bg-mainBg hover:bg-whiteGray hover:shadow-buttonShadow transform hover:scale-110">
          <a href="https://www.linkedin.com/in/estelle-chabat/" target="_blank">
            <img
              src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjwhRE9DVFlQRSBzdmcgIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4nICAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz48c3ZnIGhlaWdodD0iMTAwJSIgc3R5bGU9ImZpbGwtcnVsZTpldmVub2RkO2NsaXAtcnVsZTpldmVub2RkO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2UtbWl0ZXJsaW1pdDoyOyIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgd2lkdGg9IjEwMCUiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6c2VyaWY9Imh0dHA6Ly93d3cuc2VyaWYuY29tLyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxwYXRoIGQ9Ik00NzMuMzA1LC0xLjM1M2MyMC44OCwwIDM3Ljg4NSwxNi41MzMgMzcuODg1LDM2LjkyNmwwLDQzOC4yNTFjMCwyMC4zOTMgLTE3LjAwNSwzNi45NTQgLTM3Ljg4NSwzNi45NTRsLTQzNi40NTksMGMtMjAuODM5LDAgLTM3Ljc3MywtMTYuNTYxIC0zNy43NzMsLTM2Ljk1NGwwLC00MzguMjUxYzAsLTIwLjM5MyAxNi45MzQsLTM2LjkyNiAzNy43NzMsLTM2LjkyNmw0MzYuNDU5LDBabS0zNy44MjksNDM2LjM4OWwwLC0xMzQuMDM0YzAsLTY1LjgyMiAtMTQuMjEyLC0xMTYuNDI3IC05MS4xMiwtMTE2LjQyN2MtMzYuOTU1LDAgLTYxLjczOSwyMC4yNjMgLTcxLjg2NywzOS40NzZsLTEuMDQsMGwwLC0zMy40MTFsLTcyLjgxMSwwbDAsMjQ0LjM5Nmw3NS44NjYsMGwwLC0xMjAuODc4YzAsLTMxLjg4MyA2LjAzMSwtNjIuNzczIDQ1LjU1NCwtNjIuNzczYzM4Ljk4MSwwIDM5LjQ2OCwzNi40NjEgMzkuNDY4LDY0LjgwMmwwLDExOC44NDlsNzUuOTUsMFptLTI4NC40ODksLTI0NC4zOTZsLTc2LjAzNCwwbDAsMjQ0LjM5Nmw3Ni4wMzQsMGwwLC0yNDQuMzk2Wm0tMzcuOTk3LC0xMjEuNDg5Yy0yNC4zOTUsMCAtNDQuMDY2LDE5LjczNSAtNDQuMDY2LDQ0LjA0N2MwLDI0LjMxOCAxOS42NzEsNDQuMDUyIDQ0LjA2Niw0NC4wNTJjMjQuMjk5LDAgNDQuMDI2LC0xOS43MzQgNDQuMDI2LC00NC4wNTJjMCwtMjQuMzEyIC0xOS43MjcsLTQ0LjA0NyAtNDQuMDI2LC00NC4wNDdaIiBzdHlsZT0iZmlsbC1ydWxlOm5vbnplcm87Ii8+PC9zdmc+"
              alt="linkedinchabat"
              width="25rem"
            />
          </a>
        </li>
        <li className="pr-12  hover:bg-mainBg hover:bg-whiteGray hover:shadow-buttonShadow transform hover:scale-110">
          <a href="https://www.instagram.com/chabelle78/" target="_blank">
            <img
              src="src/pictures/instagram.svg"
              alt="instachabat"
              width="25rem"
            />
          </a>
        </li>
      </ul>
    </div>
  );
}
