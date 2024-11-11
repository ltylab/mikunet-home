/*eslint-disable*/
import React from "react";

import { readSettings } from '../components/readSettings';
const settings = readSettings();

// components
import Clock from "../components/Clock";
import PixivPicture from "../components/PixivPicture";
import WeatherBox from "../components/Weather";
import Toggle from "../components/ThemeToggle";
import ThemeProvider from "../components/ThemeContext";
import Windy from "../components/Windy";
import Bookmark from "../components/Bookmark";

export default function Index() {
  return (
    <>
      <section className={`bg-off-white1 dark:bg-blue5 min-h-screen flex items-center justify-center pt-10 pb-10 font-helvetica`}>
        <div class="grid grid-cols-5 gap-x-7 gap-y-7 grid-flow-row-dense content-center">

          {/* row 1 */}
          {/* <div class="rounded-xl col-span-1 row-span-2 h-80 w-36 shadow-4xl dark:shadow-none"><PixivPicture pid={ settings.pixiv[0] }/></div> */}
          <div class="rounded-xl col-span-3 row-span-2 h-80 shadow-4xl dark:shadow-none overflow-hidden">
            <Windy />
          </div>
          <div class="rounded-xl col-span-1 row-span-1 h-36 w-36 shadow-4xl dark:shadow-none border-0 dark:border-4 dark:border-off-white2 bg-red2 dark:bg-red1 text-black">
            <Clock />
          </div>
          <div class="flex items-center justify-center bg-blue5 text-white rounded-xl col-span-1 row-span-1 h-36 w-36 shadow-4xl dark:shadow-none border-0 dark:border-4 dark:border-off-white2">
            <ThemeProvider>
              <Toggle />
            </ThemeProvider>
          </div>


          {/* row 2 */}
          <div class="rounded-xl col-span-1 row-span-1 h-36 w-36 shadow-4xl dark:shadow-none border-0 dark:border-4 dark:border-off-white2 bg-green2 dark:bg-green1 text-black">
            <WeatherBox />
          </div>
          <div class="rounded-xl col-span-1 row-span-2 h-80 w-36 shadow-4xl dark:shadow-none">
            <PixivPicture pid={ settings.pixiv[0] }/>
          </div>


          {/* row 3 */}
          <div class="rounded-xl col-span-1 row-span-1 h-36 w-36 shadow-4xl dark:shadow-none">
            <PixivPicture pid={ settings.pixiv[1] }/>
          </div>
          <Bookmark title={ settings.bookmark[0].title } link={ settings.bookmark[0].link } />
          <Bookmark title={ settings.bookmark[1].title } link={ settings.bookmark[1].link } />
          <Bookmark title={ settings.bookmark[2].title } link={ settings.bookmark[2].link } />
        </div>
      </section>
    </>
  );
}